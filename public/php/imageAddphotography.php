<?php
    $directory = "/assets/imgs/photography";
    $directoryContents = scandir($directory);
    for($i = 0; $i < count($directoryContents); $i++) {
        echo "<img src='{$directory}{$directoryContents[$i]}' / >";
    }                 
?>