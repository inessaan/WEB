<?php
    $sex = "Не определено";
    $weight = 0;

    if(isset($_POST["sex"]) && isset($_POST["weight"])){
        $sex = $_POST["sex"];
        $weight = $_POST["weight"];
    }

    if($sex == "male"){
        $weight = ($weight - 100) * 1.15;  
    }else{
        $weight = ($weight - 110) * 1.15; 
    }

    $data = "Ваш идеальный вес = $weight";

    echo json_encode($data);
?>