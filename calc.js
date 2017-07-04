/* var chiffre1 = Number (prompt("ton premier chiffre"));
var chiffre2 = Number (prompt("ton deuxieme chiffre"));
var sommeAdd = chiffre1 + chiffre2;
var sommeMulti = chiffre1 * chiffre2;

// la ligne de code en desosus ne fonctiuonne qu'avec les ver du dessus

//alert(" ton addition donne " + sommeAdd + " et ta multiplication donne " + sommeMulti);


// 2 eme façon ( travail perso ) faire la même chose avec deux pop up et possibilité de mettre d'autre chiffres pour la multiplication
// ces lignes de code reprennent les 2 premiers var au début de la page de script

var chiffre3 = Number (prompt("ton 1 premier chiffre à multiplier"));
var chiffre4 = Number (prompt("ton multiplieur"));
var sommeMulti2 = chiffre3 * chiffre4;

alert(" ton addition donne " + sommeAdd);
alert(" ta multiplication donne " + sommeMulti2);

*/

//                    Partie calculatrice Javascript avec des fonctions



function addition (str1, str2) {

var result;

result = "le resultat de ton addition est de " + (str1 + str2);

return alert(result);

}

var chiffre1 = Number (prompt("Coucou donne moi ton premier chiffre a additionner"));
var chiffre2 = Number (prompt("donne moi ton deuxieme chiffre a additionner"));
var sommeAdd2 = addition ( chiffre1, chiffre2);


function multiplication (str3, str4) {

var result;

result = "Pouf le resultat de ta multiplication est de " + str3 * str4 + " essaye de faire mieux";

return alert(result);

}

var chiffre3 = Number (prompt("Je sais en faire d'autre, donne moi ton premier chiffre a multiplier"));
var chiffre4 = Number (prompt("et maintenant ton multiplieur"));
var Multi3 = multiplication ( chiffre3, chiffre4);

