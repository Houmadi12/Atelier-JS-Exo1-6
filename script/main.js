// Une fonction de validation de formulaire
let nombre = 0;
let response = document.getElementById("respons");

form.onsubmit = () => {
    nombre = Number.parseInt(document.getElementById("nbr").value);

    if( nombre === 0 ){
        respons.textContent = "Le nombre est null";
    } else if (nombre < 0) {
        respons.textContent = "Le nombre est négatif";
    } else {
        respons.textContent = ("Le nombre est positif")
    }

    // respons.textContent = nb1+nb2;

    return false;
} 



