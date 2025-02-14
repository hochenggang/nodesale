#!/bin/bash

mkdir -p /etc/incus/
curl -o /etc/incus/cert.crt {host}/api/admin/incus/cert.crt
incus config trust add-certificate /etc/incus/cert.crt
