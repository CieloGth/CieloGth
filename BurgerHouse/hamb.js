
ArrayIngredientes=["Carne vacuna","Carne de pollo","Carne vegetariana","Carne de ternera", " Jamón serrano loncheado", " Piña natural", " Queso Gouda", " Aceite de oliva virgen", " Pimienta negra molida","tocino"," Queso"," Jitomate"," Cebolla"," Lechuga"," Ketsup", " Mostaza "]

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
    function titulo(){
        let c=1;
        for(const burger of Burger){
            let nombre = "nombre-h-"+c;
            document.getElementById(nombre).innerHTML = burger.nombre;
            c++;
        }
    }
    function subtitulo(){
        let c=1;
        for(const burger of Burger){
            let tipo = "tipo-h-"+c;
            document.getElementById(tipo).innerHTML = burger.tipo;
            c++;
        }
    }
    function descripcion(){
        let c=1;
        for(const burger of Burger){
            let descr = "desc-h-"+c;
            document.getElementById(descr).innerHTML = burger.desc;
            c++;
        }
    }
    function ingredientes(){
        let c=1;
        for(const burger of Burger){
            let ingredi = "in-h-"+c;
            document.getElementById(ingredi).innerHTML = burger.ingre;
            c++;
        }
    }
    function precio(){
        let c=1;
        for(const burger of Burger){
            let prec = "pre-h-"+c;
            document.getElementById(prec).innerHTML = "$" + burger.precio;
            c++;
        }
    }

function validar(){
    if ($('#name').val() == "") {
        alert('Vacio name');
        return false;
    }else{ }
    if ($('#email').val() == "") {
        alert('Vacio email');
        return false;
    }else{ 
        if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
        alert('El correo electrónico introducido no es correcto.');
        return false;
        }
    }
    if ($('#date').val() == "") {
        alert('Vacio date');
        return false;
    }else{
    }
    if ($('#time').val() == "") {
        alert('Vacio time');
        return false;
    }else{
    }
    if ($('#personas').val() == "") {
        alert('Vacio personas');
        return false;
    }else{
    }
};
let p;
const table = new Array();
function find_table(){
    validar();
    let inputv  = document.getElementsByClassName('dato-input');
    namev =[].map.call(inputv, function(dataInput){
        table.push(dataInput.value);
        dataInput.value="";
    });
    datos();
}
function datos(){
    let a = table[0];
    let c = table[2];
    let d = table[3];
    let e = table[4];
    document.getElementById('n-r').innerHTML=a;
    document.getElementById('f-r').innerHTML=c;
    document.getElementById('h-r').innerHTML=d;
    document.getElementById('p-r').innerHTML=e;
}

titulo();
subtitulo();
descripcion();
ingredientes();
precio();