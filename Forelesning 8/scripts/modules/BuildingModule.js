const buildingModule = (function(){

    const buildingsArray = [
        {name: "Hut", type:"living space", description: "The smallest hut", image: "building-1.png", price: 150 },
        {name: "Medium Hut", type:"living space", description: "A medium sized hut", image: "building-2.png", price: 300 },
        {name: "Double Hut", type:"living space", description: "A hut with two floors", image: "building-3.png", price: 500 },
        {name: "Long House", type:"military building", description: "A large house for living", image: "building-4.png", price: 1200 },
        {name: "Castle", type:"Military Building", description: "A castle", image: "building-5.png", price: 5000 },
        {name: "Fortress", type:"Military Building", description: "A fortress", image: "building-6.png", price: 10000 },
    ];


    const getAllBuildings = () => buildingsArray; 

    const getByType = ( type ) =>  {
        return buildingsArray.filter( building => building.type.toLowerCase() === type );
    }; 


return { getAllBuildings, getByType};

}() );



export default buildingModule; 