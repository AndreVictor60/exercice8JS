function resultat() {
  // Déclarer la variable & récuperer l'age saisie par utilisateur
  var age=document.getElementById('age').value;
  // vérification
  if(isNaN(age) == true){
    alert('Ceci n\'est pas un chiffre');
  }
  else {
    //S’il a plus de 18 ans, afficher " Vous êtes majeur "
    if(age >= 18){
      alert('Vous êtes majeur');
    }
    //Sinon afficher " Vous êtes mineur ".
    else {
      alert('Vous êtes mineur');
    }
  }
}
