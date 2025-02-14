import asyncpg

from log import logging


logger = logging.getLogger(__name__)


DB_URL: str = "postgresql://test:test@host/db"
DB_POOL = None


async def create_database_pool():
    global DB_POOL
    DB_POOL = await asyncpg.create_pool(DB_URL)


async def init_db() -> None:
    async with DB_POOL.acquire() as conn:
        conn: asyncpg.connection.Connection = conn
        await conn.execute("""
            CREATE TABLE IF NOT EXISTS meta (
                key TEXT NOT NULL,
                value TEXT NOT NULL,
                create_at TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'utc'),
                PRIMARY KEY (key)
            );

        """)
        # await conn.execute(
        #     "CREATE INDEX IF NOT EXISTS idx_bucket_key ON files (bucket, key);"
        # )


async def test():
    async with DB_POOL.acquire() as conn:
        await conn.execute(
            """
            INSERT INTO files (bucket, key, size, fsid, mime_type, status)
            VALUES ($1, $2, $3, $4, $5, $6)
            ON CONFLICT (bucket, key) DO UPDATE
            SET size = $3, fsid = $4, mime_type = $5, status = $6;
        """,
            bucket,
            key,
            size,
            fsid,
            mime_type,
            status,
        )

    async with DB_POOL.acquire() as conn:
        row = await conn.fetchrow(
            """
            SELECT bucket, key, size, fsid, mime_type, status, create_at
            FROM files WHERE bucket = $1 AND key = $2;
        """,
            bucket,
            key,
        )
        return row if row else None
