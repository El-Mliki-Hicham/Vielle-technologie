<?php

$xml=simplexml_load_file('xml.xml');
 


echo "Nom : ". $xml->nom . " <br>";
echo "Prenom : ". $xml->prenom ."<br>";
echo "Age : ".$xml->age;
?>