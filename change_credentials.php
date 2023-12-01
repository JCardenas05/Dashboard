<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ssid = $_POST["ssid"];
    $password = $_POST["password"];

    // Validar los datos aquí

    // Actualizar el archivo de configuración del punto de acceso
    $config = "interface=wlan0\n";
    $config .= "ssid=" . $ssid . "\n";
    $config .= "wpa_passphrase=" . $password . "\n";
    //... resto de la configuración

    file_put_contents("/etc/hostapd/hostapd.conf", $config);

    // Reiniciar el servicio hostapd para aplicar los cambios
    exec("sudo systemctl restart hostapd");

    echo "Configuración actualizada con éxito";
}
?>
