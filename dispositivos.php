<?php
echo "<h1>Dispositivos conectados en la red:</h1>";
echo "<pre>";
system('sudo arp-scan --localnet | grep -E "([0-9a-f]{2}:){5}[0-9a-f]{2}"');
echo "</pre>"; 
?> 
