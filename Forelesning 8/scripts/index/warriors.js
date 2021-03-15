import WarriorModule from "../modules/WarriorModule.js"

const warriorOutput = document.querySelector("#warrior-output");


const generateWarriors = () => {

    let htmlTxt = "";
    let i = 0; 

    WarriorModule.getAllWarriors().forEach((warrior) => {
    
    htmlTxt += `
    <div class="column is-2-tablet is-3-desktop">
        <div class="card">
            <div class="card-header">
                <h1 class="card-header-title">${warrior.name}</h1>
            </div>
            <div class="image is-4by5">
                <img class ="card-image" src="../images/warriors/${warrior.image}">
            </div>
            <div class="card-content">
                <h2 class="text is-size-5">Age: ${warrior.age}</h2>
                <p id="houseElement${i}" class="text"> House: ${warrior.house}</p>
            </div>
        </div>
        <div class="card-footer">
        <div class="dropdown card-footer-item is-hoverable">
            <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Choose House</span>
                    <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                    <a data-house="Small Hut" data-iterator="${i}" class="dropdown-item" href="#">Small hut</a>
                    <a data-house="Medium Hut" data-iterator="${i}" class="dropdown-item" href="#">Medium hut</a>
                    <a data-house="Large Hut"  data-iterator="${i}" class="dropdown-item" href="#">Large hut</a>
                    <a data-house="Long House" data-iterator="${i}" class="dropdown-item" href="#">Long house</a>
                    <a data-house="Castle" data-iterator="${i}" class="dropdown-item" href="#">Castle</a>
                    <a data-house="Fortress" data-iterator="${i}" class="dropdown-item" href="#">Fortress</a>
                </div>
            </div>
        </div> 
        </div>
        </div>
    </div>
    
    `; 
    
    i++;

    }); 
    
    warriorOutput.innerHTML = htmlTxt; 
    
};

generateWarriors(); 


const collectLinks = () => {
    const dropDownLinks = document.querySelectorAll('.dropdown-item');
   
    dropDownLinks.forEach( link => {
       
        link.addEventListener('click', ( e ) => {

        console.log('link', link);
        let i = 0; 
        for (i = 0; i < dropDownLinks.length; i++) {

            if (e.currentTarget.dataset.iterator == i) {
                
                document.querySelector(`#houseElement${i}`).innerHTML =`House: ${e.currentTarget.dataset.house}`; 
        }
    };
    } );

    }) 
};

collectLinks(); 


// Hvilken metode for å velge hus er best? 

/*
<div class="dropdown card-footer-item is-hoverable">
            <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Choose House</span>
                    <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                    <a data-house="Small Hut" data-iterator="${i}" class="dropdown-item" href="#">Small hut</a>
                    <a data-house="Medium Hut" data-iterator="${i}" class="dropdown-item" href="#">Medium hut</a>
                    <a data-house="Large Hut"  data-iterator="${i}" class="dropdown-item" href="#">Large hut</a>
                    <a data-house="Long House" data-iterator="${i}" class="dropdown-item" href="#">Long house</a>
                    <a data-house="Castle" data-iterator="${i}" class="dropdown-item" href="#">Castle</a>
                    <a data-house="Fortress" data-iterator="${i}" class="dropdown-item" href="#">Fortress</a>
                </div>
            </div>
        </div> 
        </div>

*/
/* 
<div class="select">
        <select class="select">
            <option value="Small Hut">Small Hut</option>
            <option value="Medium Hut">Medium Hut</option>
            <option value="Large Hut">Large Hut</option>
            <option value="Long House">Long House</option>
            <option value="Castle">Castle</option>
            <option value="Fortress">Fortress</option>
        </select>
        </div>
*/