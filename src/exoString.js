let typePizza = "4 Fromages";
let delai = 5;
let nomClient = "Diakité";
let prenomClient = "Sama";
let adresseClient = "1 place du Capitole";
let blagueDuJour = "Qu'est-ce qu'une pizza dit à une autre pizza qui lui demandait des conseils ?\n \"Suite ta pâte et tout ira bien !\"";
let commandeEnPrepaValide = `Bonjour ${nomClient}, votre pizza ${typePizza} est en cours de préparation. Elle sera prête dans ${delai}min, puis livré à l'adresse : ${adresseClient}.
Merci d'avoir commandé à la pizzeria "Rafinata".
---\n`+blagueDuJour; //on part sur l'hypothèse qu'il y aura plusieurs types de 'commande' -> commandeEnPrepaAnnulee, commandeAnnulee ect..

console.log(commandeEnPrepaValide);