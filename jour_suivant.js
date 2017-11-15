// jour suivant

var jour = prompt("Ecris un jour de la semaine sans majuscule");

/*if (jour === "lundi") {
    console.log("Demain, nous serons mardi");
}else if (jour === "mardi") {
    console.log("Demain, nous serons mercredi");
}else if (jour === "mercredi") {
    console.log("Demain, nous serons jeudi");
}else if (jour === "jeudi") {
    console.log("Demain, nous serons vendredi");
}else if (jour === "vendredi") {
    console.log("Demain, nous serons samedi");
}else if (jour === "samedi") {
    console.log("Demain, nous serons dimanche");
}else if (jour === "dimanche") {
    console.log("Demain, nous serons lundi");
}else {
    console.log("Je n'ai pas compris, rafraichis ta page et ecris correctement le jour de la semaine en majuscule");
}*/


switch (jour) {
    case "lundi":
        console.log("Demain, nous serons mardi");
        break;
    case "mardi":
        console.log("Demain, nous serons mercredi");
        break;
    case "mercredi":
        console.log("Demain, nous serons jeudi");
        break;
    case "jeudi" :
        console.log("Demain, nous serons vendredi");
        break;
    case "vendredi":
        console.log("Demain, nous serons samedi");
        break;
    case "samedi":
        console.log("Demain, nous serons dimanche");
        break;
    case "dimanche":
        console.log("Demain, nous serons lundi");
        break;
    default :
        console.log("Je n'ai pas compris, rafraichis ta page et ecris correctement le jour de la semaine en majuscule");
        break;
}