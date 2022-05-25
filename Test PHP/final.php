<? 
session_start();
$fifth=$_POST['fifth'];
$_SESSION['fifth']= $fifth;

if($_SESSION['first'] == 2){
    $score += 1;
}
if($_SESSION['second'] == 3){
    $score += 1;
}
if($_SESSION['third'] == 3){
    $score += 1;
}
if($_SESSION['fourth'] == 6){
    $score += 1;
}
if($_SESSION['fifth'] == 1){
    $score += 1;
}

$name = $_POST['name'];

echo "<!DOCTYPE html><html><head><meta charset='utf-8'/> </head><body>";
  echo '<h1>Итоговые результаты.</h1>'; 
	print "<div text-align:'center'>"; 
	print "Привет, ".$_POST['name'];  
    if ($score > 3) {
        print "<p>Ты набрал $score баллов. Молодец!</p>";
    }
    elseif ($score > 1){
        print "<p>Ты набрал $score баллов. Могло быть и хуже.</p>";
    }
    else{
        print "<p>Может, погуглишь?</p>";
    }
print "</div>"; 
echo "</body></html>";
?>
