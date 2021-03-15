import buildingModule from '../modules/BuildingModule.js'

const buildingOutput = document.querySelector("#building-output");
const buildingOutputCart = document.querySelector("#building-output-cart");
const buildingOutputCartSum = document.querySelector("#building-output-cart-sum");
const buildingInput = document.querySelector("#building-input");
const searchButton = document.querySelector("#search-button");

let sum = 0; 

const generateBuildings = () => {

    let htmlTxt = "";

    buildingModule.getAllBuildings().forEach((building) => {

        htmlTxt += `
        <div class="column is-4">
            <div class="card">
                <div class="card-header">
                    <h1 class="card-header-title">${building.name}</h1>
                </div>
                <div class="image is-1by1">
                <img class="card-image p-5" src="../images/buildings/${building.image}">
                </div>
                <div class="card-content">
                    <h2 class="Text is-italic">${building.description}</h2>
                    <p class="text">${building.price}</p><br>
                <div class="card-footer">
                    <button data-price="${building.price}" data-name ="${building.name}" class="card-footer-item button is-primary">Legg til</button>
    
                </div>
                </div>
            </div>
        </div>
        `;

    });
    buildingOutput.innerHTML = htmlTxt; 
    collectButtons();
};

const generateTypeOfBuildings = (buildingType) => {
    console.log("funksjonen kjører med", buildingType);

    let htmlTxt = "";

    buildingModule.getByType(buildingType).forEach((building)=> {

        htmlTxt += `
        <div class="column is-4">
            <div class="card">
                <div class="card-header">
                    <h1 class="card-header-title">${building.name}</h1>
                </div>
                <div class="image is-1by1">
                <img class="card-image p-5" src="../images/buildings/${building.image}">
                </div>
                <div class="card-content">
                    <h2 class="Text is-italic">${building.description}</h2>
                    <p class="text">${building.price}</p><br>
                <div class="card-footer">
                    <button data-price="${building.price}" data-name ="${building.name}" class="card-footer-item button is-primary">Legg til</button>
    
                </div>
                </div>
            </div>
        </div>
        `;
    
        buildingOutput.innerHTML = htmlTxt; 
        collectButtons();

    });

 
};

    searchButton.addEventListener("click", ( e ) => { 
        console.log("input", buildingInput.value) // Logger input-verdien så en kan sjekke at den blir riktig. 
       generateTypeOfBuildings(buildingInput.value.toLowerCase());
    } );


    
    const collectButtons = () => { // Funksjonen henter knapper og legger til at de skriver ut pris og sum. 
        
        document.querySelectorAll("button:not(.search-button)").forEach( button => { // her finner han alle knapper forutenom den første 

        console.log("buttons fetched"); // sjekker hvor mange knapper funksjonen henter

        button.addEventListener("click", (e)=> {
            console.log("price", e.currentTarget.dataset.price);
            buildingOutputCart.innerHTML += `<li>${e.currentTarget.dataset.name}: ${e.currentTarget.dataset.price}</li>`;
            
            sum = sum + parseInt(e.currentTarget.dataset.price); 
            
            buildingOutputCartSum.innerHTML = "Sum: " + sum; 
            
            
    
        } );
    });
}; 


generateBuildings();





    
