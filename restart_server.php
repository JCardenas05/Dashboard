<?php
// Comando para reiniciar el punto de acceso, por ejemplo, reiniciar el servicio hostapd
exec("sudo systemctl restart apache2");
echo "server reiniciado";
?>