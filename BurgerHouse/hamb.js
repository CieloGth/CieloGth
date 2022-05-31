
ArrayIngredientes=["Carne vacuna ","Carne de pollo ","Carne vegetariana ","Carne de ternera ", "Jamón serrano loncheado ", "Piña natural ", "Queso Gouda ", "Aceite de oliva virgen ", "Pimienta negra molida ","Tocino ","Queso ","Jitomate ","Cebolla ","Lechuga ","Ketsup ", "Mostaza "]

const Burger=[
    {
        nombre:"Hamburgesa 1", 
        tipo:"Clasica",
        desc:"Hamburgesa de carne de res incluye papas chicas y refresco chico",
        ingre:[
            ArrayIngredientes[0],ArrayIngredientes[10],
            ArrayIngredientes[11],ArrayIngredientes[12],
            ArrayIngredientes[13],ArrayIngredientes[14],
            ArrayIngredientes[15]],
        precio: 55
    },{
        nombre:"Hamburgesa 2", 
        tipo:"De pollo",
        desc:"Hamburgesa de carne de pollo incluye papas chicas y refresco chico",
        ingre:[
            ArrayIngredientes[1],ArrayIngredientes[10],
            ArrayIngredientes[11],ArrayIngredientes[12],
            ArrayIngredientes[13],ArrayIngredientes[14],
            ArrayIngredientes[15]],
        precio: 55
    },{
        nombre:"Hamburgesa 3", 
        tipo:"Vegetariana",
        desc:"Hamburgesa Vegetariana incluye papas chicas y refresco chico",
        ingre:[
            ArrayIngredientes[2],ArrayIngredientes[10],
            ArrayIngredientes[11],ArrayIngredientes[12],
            ArrayIngredientes[13],ArrayIngredientes[14],
            ArrayIngredientes[15]],
        precio: 55
    },{
        nombre:"Hamburgesa 4", 
        tipo:"con tocino",
        desc:"Hamburgesa de carne de res con tocino incluye papas chicas y refresco chico",
        ingre:[
            ArrayIngredientes[0],ArrayIngredientes[9],ArrayIngredientes[10],
            ArrayIngredientes[11],ArrayIngredientes[12],ArrayIngredientes[13],
            ArrayIngredientes[14],ArrayIngredientes[15]],
        precio: 65
    },
    {
        nombre:"Hamburgesa 5", 
        tipo:"Doble",
        desc:"Hamburgesa de doble carne y doble queso de res incluye papas chicas y refresco chico",
        ingre:[
            ArrayIngredientes[0],ArrayIngredientes[10],ArrayIngredientes[11],
            ArrayIngredientes[12],ArrayIngredientes[13],ArrayIngredientes[14],
            ArrayIngredientes[15]],
        precio: 75
    },
    {
        nombre:"Hamburgesa 6", 
        tipo:"Triple",
        desc:"Hamburgesa de triple carne de res y triple queso incluye papas chicas y refresco chico",
        ingre:[
            ArrayIngredientes[0],ArrayIngredientes[10],ArrayIngredientes[11],
            ArrayIngredientes[12],ArrayIngredientes[13],ArrayIngredientes[14],
            ArrayIngredientes[15]],
        precio: 85
    },
    {
        nombre:"Hamburgesa 7", 
        tipo:"De ternera",
        desc:"Hamburgesa de carne de res incluye papas chicas y refresco chico",
        ingre:[
            ArrayIngredientes[3],ArrayIngredientes[4],ArrayIngredientes[5],
            ArrayIngredientes[6],ArrayIngredientes[7],ArrayIngredientes[8]],
        precio: 75
    },
    {
        nombre:"Hamburgesa 8", 
        tipo:"Personalizada",
        desc:"Hamburgesa con ingredientes de su preferencia incluye papas chicas y refresco chico",
        ingre:[],
        precio: 100
    }
]
//Todo
// for(const burger of Burger){
//     console.log(burger.nombre+" : "+burger.tipo);
// }


function vista(n){
    let x=n+1;
    Burger.forEach(function buscar(x){
        console.log()
    });

}

let Pedido = [
    {
    nombre:"Hamburgesa 5", 
    tipo:"Doble",
    desc:"Hamburgesa de doble carne y doble queso de res incluye papas chicas y refresco chico",
    ingre:[
        ArrayIngredientes[0],ArrayIngredientes[10],ArrayIngredientes[11],
        ArrayIngredientes[12],ArrayIngredientes[13],ArrayIngredientes[14],
        ArrayIngredientes[15]],
    precio: 75
}
    ]
let d;

function agregar_orden(n){
let obj={}
let nom=document.getElementById("nombre-h-"+n).innerHTML;
let tip=document.getElementById("tipo-h-"+n).innerHTML;
let ing = document.getElementById("in-h-"+n).innerHTML;
let des=document.getElementById("desc-h-"+n).innerHTML;
let pre=document.getElementById("pre-h-"+n).innerHTML;
obj.nombre=nom;
obj.tipo=tip;
obj.desc=des;
obj.ingre= ing;
obj.precio=50;
Pedido.push(obj);
}
console.log(Pedido);