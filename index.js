const oeufs = 1
const lait = 0.25
const farine = 80
const sel = 1
const sucre = 1
const rhum = 1

document.getElementById("InputInviter").value = 0;
calculer()

function calculer(){
    let input = document.getElementById("InputInviter").value;
    if (input< 0){
        document.getElementById("InputInviter").value = 0;
        alert("Le nombre de personne ne peut pas être inférieurs à 0");
    }
    let nbOeufs = oeufs * input
    let nbLait = lait * input
    let nbFarine = farine * input
    let nbSel = sel * input
    let nbSucre = sucre * input
    let nbRhum = rhum   * input
    document.getElementById("IngredientOeufs").textContent = nbOeufs + " Oeuf(s)"
    document.getElementById("IngredientLait").textContent = nbLait + "L de lait"
    document.getElementById("IngredientFarine").textContent = nbFarine + "g de farine"
    document.getElementById("IngredientSel").textContent = nbSel + " pincée de sel"
    document.getElementById("IngredientSucre").textContent = nbSucre + " sachet de sucre"
    document.getElementById("IngredientRhum").textContent = nbRhum + " cs de rhum"
return input
}
