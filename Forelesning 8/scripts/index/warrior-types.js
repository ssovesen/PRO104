import warriorTypeModule from '../modules/WarriorTypeModule.js';

const warriorOutput = document.querySelector("#warrior-types");
const warriorChosenOutput = document.querySelector("#chosen-warrior");
const battleButton = document.querySelector("#battleButton");
let totalDamage = 0; 

const addDamage = (damage) => {
    console.log(totalDamage, "hei")
    totalDamage = totalDamage + damage;
    
    return totalDamage; 
};


battleButton.addEventListener("click", function(){
    let enemyDamage = Math.floor(Math.random()*100)+ 1;
    console.log('TotalDamage',totalDamage, "enemyDamage", enemyDamage)
    
    if (totalDamage > enemyDamage) {
        return console.log('win');
    } else if (totalDamage < enemyDamage)
        return console.log('Loss');
} ) ;






const generateWarriorTypes = () => {

    let htmlTxt = "";
    
    warriorTypeModule.getAll().forEach((warrior) => {
    
        htmlTxt += `
        <div class="column is-4">
            <div class="card">
                <div class="card-header">
                     <h1 class="card-header-title">${warrior.type}</h1>
                </div>
                
                <div class="card-content">
                    <div class="image is-4by5">
                    <img class="card-image" src="../images/warriors/${warrior.image}">
                    </div><br>
                    <h2 class="text">${warrior.weapon}</h2><br>
                    <div class="card-footer">
                        <button data-damage="${warrior.damage}" data-image="${warrior.image}" class="card-footer-item button is-primary">Add Warrior</button>
                        
                    </div>
                </div> 
            </div>
        </div>
        `;
    });
    warriorOutput.innerHTML = htmlTxt; 




document.querySelectorAll("button:not(#battleButton)").forEach( button => {

    button.addEventListener("click", ( e ) => { 

        warriorChosenOutput.innerHTML += `<div class="column is-3 card m-2">
        <img src="../images/warriors/${e.currentTarget.dataset.image}">`

        addDamage(parseInt(e.currentTarget.dataset.damage));
        console.log(totalDamage);

    } );

});

};






generateWarriorTypes();




 
