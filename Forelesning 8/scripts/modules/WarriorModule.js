const WarriorModule = (function (){

const warriors = [
    {name:"Freya", age: "24", description:"Den fredelige", image:"warrior-1.jpg", house: "None"},
    {name:"Odin", age: "23", description:"Den vise", image:"warrior-2.jpg", house: "None"},
    {name:"Tor", age: "45", description:"Den sinte", image:"warrior-3.jpg", house: "None"},
    {name:"Loke", age: "102", description:"Den lure", image:"warrior-4.jpg", house: "None"},
    {name:"Balder", age: "65", description:"Den uvise", image:"warrior-5.jpg", house: "None"},
    {name:"Bulder", age: "32", description:"Den med u i navnet", image:"warrior-6.jpg", house: "None"},
];

const getAllWarriors = () => warriors;


return {getAllWarriors}
}() );

export default WarriorModule; 