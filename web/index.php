<?php
    $date_target = strtotime("2020-01-25 00:00:00 GMT+7");
    $utc_target = gmdate("Y-m-d H:i:s", $date_target);
    $utc_now = gmdate("Y-m-d H:i:s");

    if ($utc_now <= $utc_target) {
        include("countdown.php");
    } else {
        include("main.php");
    }
?>
