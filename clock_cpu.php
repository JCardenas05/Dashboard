<?php
header('Content-Type: application/json');
$f_cpu = file_get_contents('/sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq') / 1.000.000.000;
echo json_encode(["f_cpu" => $f_cpu]);
?>