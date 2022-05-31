function buscar(n){
  let bx ="Hamburgesa "+n; 
  Burger.find(object =>{
  if(object.nombre === bx){

      document.getElementById("nombre-h-"+n).innerHTML = object.nombre;
      document.getElementById("tipo-h-"+n).innerHTML = object.tipo;
      document.getElementById("desc-h-"+n).innerHTML = object.desc;
      document.getElementById("in-h-"+n).innerHTML = object.ingre;
      document.getElementById("pre-h-"+n).innerHTML =  object.precio;

    }
});
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