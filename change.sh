#!/bin/bash

# Recibe SSID y contraseña como argumentos
SSID=$1
PASSWORD=$2

# Ruta al archivo de configuración de hostapd
CONFIG_FILE="/etc/hostapd/hostapd.conf"

# Actualizar la configuración
sed -i "s/^ssid=.*/ssid=$SSID/" $CONFIG_FILE
sed -i "s/^wpa_passphrase=.*/wpa_passphrase=$PASSWORD/" $CONFIG_FILE

# Reiniciar el servicio hostapd
systemctl restart hostapd
