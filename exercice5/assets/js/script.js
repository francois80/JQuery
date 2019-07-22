$(document).ready(function(){
//
  $('#addition').click(function(){
    var champ1 = $('#champ1').val();
    var champ2 = $('#champ2').val();
    var champ3 = parseInt(champ1) + parseInt(champ2);
    $('#resultat').val(champ3);
    //alert(champ3);
    });
//
});
