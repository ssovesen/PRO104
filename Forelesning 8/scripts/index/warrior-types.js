import warriorTypeModule from '../modules/WarriorTypeModule.js';

const warriorOutput = document.querySelector("#warrior-types");
const warriorChosenOutput = document.querySelector("#chosen-warrior");
const battleButton = document.querySelector("#battleButton");
const modalActive = document.querySelector('.modal');
const battleOutput = document.querySelector('#battleOutput');
let totalDamage = 0; 

const addDamage = (damage) => {
    totalDamage = totalDamage + damage;
    
    return totalDamage; 
};
const removeDamage = (damage) => {
    totalDamage = totalDamage - damage;
    
    return totalDamage; 
};


battleButton.addEventListener("click", function(){
    let enemyDamage = Math.floor(Math.random()*100)+ 1;
    console.log('TotalDamage',totalDamage, "enemyDamage", enemyDamage)
    
    
    if (totalDamage > enemyDamage) {
        modalActive.classList.add('is-active');
        battleOutput.innerHTML = "You Win!";
        closeButton();
        return console.log('win');
    } else if (totalDamage < enemyDamage)
        modalActive.classList.add('is-active');
         battleOutput.innerHTML = "You Lose!";
         closeButton();
        return console.log('Loss');
} ) ;

const closeButton = () => {
    document.querySelector('.modal-close').addEventListener('click', function(){
         modalActive.classList.remove('is-active');

    });
}






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
                        <div class="card-footer-item">
                        <button data-damage="${warrior.damage}" data-image="${warrior.image}" class="button warrior-button-add is-primary">Add Warrior</button>
                        <div class"card-footer-item">
                        <!-- Denne kan legges inn om man vil ha to knapper
                        <button data-damage="${warrior.damage}" data-image="${warrior.image}" class="button warrior-button-remove is-light">Remove Warrior</button>
                        -->
                        </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        `;
    });
    warriorOutput.innerHTML = htmlTxt; 




document.querySelectorAll(".warrior-button-add").forEach( button => {

    console.log('Buttons fetched');
    button.addEventListener("click", ( e ) => { 
        warriorChosenOutput.innerHTML += `<div class="column is-3 card m-2">
        <img src="../images/warriors/${e.currentTarget.dataset.image}">`

        addDamage(parseInt(e.currentTarget.dataset.damage));
        console.log('Your Damage', totalDamage);

    } );

});


/* Denne funksjonen fungerte ikke 
document.querySelectorAll(".warrior-button-remove").forEach( button => {

    button.addEventListener('click', ( e ) => {
        warriorChosenOutput.innerHTML -= `<div class="column is-3 card m-2">
        <img src="../images/warriors/${e.currentTarget.dataset.image}">`
        removeDamage(parseInt(e.currentTarget.dataset.damage));


    });

}); */ 

};






generateWarriorTypes();




 
