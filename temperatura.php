<?php
header('Content-Type: application/json');
$temperatura = file_get_contents('/sys/class/thermal/thermal_zone0/temp') / 1000;
echo json_encode(["temperatura" => $temperatura]);
?>


