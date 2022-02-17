$(document).ready(function(){
  
    $('#input').keyup(function(){
        $valeur = $(this).val();
        $('#affichage').text($valeur);
    });
});