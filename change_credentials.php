<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ssid = escapeshellarg($_POST["ssid"]);
    $password = escapeshellarg($_POST["password"]);

    // Ejecutar el script de shell con los parámetros proporcionados
    exec("sudo ./change.sh $ssid $password");

    echo "Configuración actualizada con éxito";
}
?>
