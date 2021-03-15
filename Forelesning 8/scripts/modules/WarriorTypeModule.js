 const warriorTypeModule = (function(){

    const warriorArray = [
        {type: "Valkyrie", weapon: "Axe", image: "warrior-1.jpg", damage: Math.floor(Math.random() * 3) + 1},
        {type: "Berserker", weapon: "Sword", image: "warrior-2.jpg", damage: Math.floor(Math.random() * 5) + 1 },
        {type: "Axeman", weapon: "Greataxe", image: "warrior-3.jpg", damage: Math.floor(Math.random() * 10) + 1},
        {type: "Tank", weapon: "Axe", image: "warrior-5.jpg", damage: Math.floor(Math.random() * 25) + 1},
        {type: "Viking", weapon: "Hands", image: "warrior-6.jpg", damage: Math.floor(Math.random() * 50) + 1},
    ];

    const getAll = () => warriorArray;

    const  getByType = ( type ) =>  {
        return warriorArray.filter( warrior => warrior.type === type );
    };  // hvis man har flere linjer i funksjonen må man skrive return
    
    const getByWeapon = weapon => warriorArray.filter( warrior => warrior.weapon === weapon );
        
        // hvis man kun sender inn et parameter, trenger man kun en parantes. 


        
    return { getAll, getByType, getByWeapon};

}() );

export default warriorTypeModule; 