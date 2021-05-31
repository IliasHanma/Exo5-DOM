// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", 
// utilise une méthode pour récupérer un élémént via sa class

let premierP = document.getElementsByClassName('tartine')[0].innerText;
console.log(premierP);

// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"

let toast = document.getElementById('toast').innerText;
console.log(toast);
// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)

let dernierElt = document.getElementsByClassName('tartine')[1];
console.log(dernierElt);

