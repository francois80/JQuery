$(document).ready(function(){
//
    $('#button').click (function(){
    var age = $('#number').val();

    if(age > 18){
      alert("vous êtes majeur, vous avez plus de " + age + " ans");
    }
    else {
      alert("Désolé, vous êtes mineur, vous avez " + age + " ans");
    }
  });


//
});
