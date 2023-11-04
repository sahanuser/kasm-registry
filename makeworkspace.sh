#!/bin/sh

cd kali_custom
docker build -t kali_custom:latest -f Dockerfile .
