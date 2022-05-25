const hamb1 = {
  nombre:"Hamburgesa 1", 
  tipo:"Clasica",
  desc:"Hamburgesa de carne de res incluye papas chicas y refresco chico",
  ingre:["Carne vacuna"," Queso"," Jitomate"," Cebolla"," Lechuga"," Ketsup", " Mostaza "],
  precio: 55
};
const hamb2 = {
  nombre:"Hamburgesa 2", 
  tipo:"De pollo",
  desc:"Hamburgesa de carne de pollo incluye papas chicas y refresco chico",
  ingre:["Carne de pollo"," Queso"," Jitomate"," Cebolla"," Lechuga"," Ketsup", " Mostaza "],
  precio: 55
};
const hamb3 = {
  nombre:"Hamburgesa 3", 
  tipo:"Vegetariana",
  desc:"Hamburgesa Vegetariana incluye papas chicas y refresco chico",
  ingre:["Carne vegetariana"," Queso"," Jitomate"," Cebolla"," Lechuga"," Ketsup", " Mostaza "],
  precio: 55
};

const hamb4 = {
  nombre:"Hamburgesa 4", 
  tipo:"con tocino",
  desc:"Hamburgesa de carne de res con tocino incluye papas chicas y refresco chico",
  ingre:["Carne vacuna", "tocino"," Queso"," Jitomate"," Cebolla"," Lechuga"," Ketsup", " Mostaza "],
  precio: 65
};
const hamb5 = {
  nombre:"Hamburgesa 5", 
  tipo:"Doble",
  desc:"Hamburgesa de doble carne y doble queso de res incluye papas chicas y refresco chico",
  ingre:["2 Carnes vacunas"," Queso"," Jitomate"," Cebolla"," Lechuga"," Ketsup", " Mostaza "],
  precio: 75
};
const hamb6 = {
  nombre:"Hamburgesa 6", 
  tipo:"Triple",
  desc:"Hamburgesa de triple carne de res y triple queso incluye papas chicas y refresco chico",
  ingre:["Carne vacuna"," Queso"," Jitomate"," Cebolla"," Lechuga"," Ketsup", " Mostaza "],
  precio: 85
};
const hamb7 = {
  nombre:"Hamburgesa 7", 
  tipo:"De ternera",
  desc:"Hamburgesa de carne de res incluye papas chicas y refresco chico",
  ingre:["Carne de ternera", " Jamón serrano loncheado", " Piña natural", " Queso Gouda", " Aceite de oliva virgen", " Pimienta negra molida"],
  precio: 75
};
const hamb8 = {
  nombre:"Hamburgesa 8", 
  tipo:"Personalizada",
  desc:"Hamburgesa con ingredientes de su preferencia incluye papas chicas y refresco chico",
  ingre:[],
  precio: 100
};

  function titulo(numero,n){
    let text = numero.nombre;
    let nombre = "nombre-h-"+n
    document.getElementById(nombre).innerHTML = text;
  }
  function subtitulo(numero,n){
    let text = numero.tipo;
    let tipo= "tipo-h-"+n;
    document.getElementById(tipo).innerHTML = text;
  }
  function descripcion(numero,n){
    let text = numero.desc;
    let descr= "desc-h-"+n;
    document.getElementById(descr).innerHTML = text;
  }
  function ingredientes(numero,n){
    let text = numero.ingre;
    let ingredi= "in-h-"+n;
    document.getElementById(ingredi).innerHTML = text;
  }
  function precio(numero,n){
    let text = "$"+numero.precio;
    let prec= "pre-h-"+n;
    document.getElementById(prec).innerHTML = text;
  }
  
  

  //texto+="";



$(document).ready(function(){
    // card1
    titulo(hamb1, 1);
    subtitulo(hamb1, 1);
    descripcion(hamb1,1);
    ingredientes(hamb1,1);
    precio(hamb1,1);
    // card2
    titulo(hamb2, 2);
    subtitulo(hamb2, 2);
    descripcion(hamb2,2);
    ingredientes(hamb2,2);
    precio(hamb2,2);
    // card3
    titulo(hamb3,3);
    subtitulo(hamb3,3);
    descripcion(hamb3,3);
    ingredientes(hamb3,3);
    precio(hamb3,3);
    // card4
    titulo(hamb4, 4);
    subtitulo(hamb4, 4);
    descripcion(hamb4, 4);
    ingredientes(hamb4, 4);
    precio(hamb4, 4);
    // card5
    titulo(hamb5,5);
    subtitulo(hamb5,5);
    descripcion(hamb5,5);
    ingredientes(hamb5,5);
    precio(hamb5,5);
    // card6
    titulo(hamb6,6);
    subtitulo(hamb6,6);
    descripcion(hamb6,6);
    ingredientes(hamb6,6);
    precio(hamb6,6);
    // card7
    titulo(hamb7, 7);
    subtitulo(hamb7, 7);
    descripcion(hamb7, 7);
    ingredientes(hamb7, 7);
    precio(hamb1,1);
    // card8
    titulo(hamb8,8);
    subtitulo(hamb8,8);
    descripcion(hamb8,8);
    ingredientes(hamb8,8);
    precio(hamb8,8);


});



