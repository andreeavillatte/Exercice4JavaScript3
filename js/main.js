// Recuperer la valeur du mot de passe
var firstPassword=document.getElementById('password');
// Recuperer la valeur de la confirmation du mot de passe
var secondPassword=document.getElementById('confirmPassword');

// lorsque je relache une touche du clavier, j'appelle ma fonction
secondPassword.addEventListener('keyup',verifyConfirmation);
// la fonction check si les deux mots de passe sont identiques
// et change la couleur des bordures

function verifyConfirmation(){
    if(firstPassword.value==secondPassword.value){
        secondPassword.style.borderColor="green";
    }else{
        secondPassword.style.borderColor="red";
    }
}
