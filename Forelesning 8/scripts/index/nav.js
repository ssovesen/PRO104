const navbarOutput = document.querySelector("#navbar-output");

const generateNavbar = () => {

    navbarOutput.innerHTML = `
    
    
    
        <div class="navbar-brand ">
            <a class="navbar-item" href="./index.html"><img src="./images/logo.png"></a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
        </div>
        <div class="navbar-menu">

            <div class ="navbar-start">
                <a href="./warrior.html" class="navbar-item">Warriors</a>
                <a href="./buildings.html" class="navbar-item">Buildings</a>
                <a href="./warrior-types.html" class="navbar-item">Build your army!</a>
            </div>
            <div class="navbar-end">
                
            </div
        </div>
    
    `;
};



generateNavbar();

// Funksjon for vise og skjule mobil-meny

document.querySelector('.navbar-burger').addEventListener('click', function(){
    
    
    if (this.classList.contains('is-active')) {

        this.classList.remove('is-active');
        document.querySelector('.navbar-menu').classList.remove('is-active');
    
    } else { 
        this.classList.add('is-active');
        document.querySelector('.navbar-menu').classList.add('is-active');
    }

});