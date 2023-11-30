#!/bin/bash

echo "Dispositivos conectados en la red:"
sudo arp-scan --localnet | grep -E "([0-9a-f]{2}:){5}[0-9a-f]{2}"
