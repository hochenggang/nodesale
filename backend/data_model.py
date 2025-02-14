
from typing import Optional
from pydantic import BaseModel


class apiPostNode(BaseModel):
    host: str
    port: Optional[int]
    
