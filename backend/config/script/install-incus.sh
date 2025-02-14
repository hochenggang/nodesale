#!/bin/bash

## pre-installation
apt-get update -y
apt install curl -y

## install incus
mkdir -p /etc/apt/keyrings/
curl -fsSL https://pkgs.zabbly.com/key.asc -o /etc/apt/keyrings/zabbly.asc
sh -c 'cat <<EOF > /etc/apt/sources.list.d/zabbly-incus-stable.sources
Enabled: yes
Types: deb
URIs: https://pkgs.zabbly.com/incus/stable
Suites: $(. /etc/os-release && echo ${VERSION_CODENAME})
Components: main
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/zabbly.asc

EOF'

apt-get update
apt install btrfs-progs -y

apt-get install incus -y


adduser root incus-admin

## init
incus admin init --auto --network-address=[::] --network-port=8443 --storage-backend=btrfs --storage-create-loop=5

## Security
# Prevent container name leakage
chmod 400 /proc/sched_debug
chmod 700 /sys/kernel/slab/
