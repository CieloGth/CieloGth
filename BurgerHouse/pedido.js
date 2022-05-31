
let p = 0;
let total=0;
$(document).ready(function(){
    for (var i = 0; i < Pedido.length; i++) {
        total+=Pedido[i].precio;
        indice = i+1;
    d+= '<tr>'+
    '<td>'+ indice +'</td>'+
    '<td>'+Pedido[i].nombre+'</td>'+
    '<td>'+Pedido[i].tipo+'</td>'+
    '<td>'+Pedido[i].ingre+'</td>'+
    '<td> $'+Pedido[i].precio+'</td>'+
    '</tr>';
    }
    $("#tabla").append(d);
    document.getElementById('total-pre').innerHTML= '$ '+ total;
});

function move() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        if(width===100){
          
        }
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById('exampleModalToggleLabel2').innerHTML = 'Su pedido esta en proceso';
        $("#btn").hide();
        if(width <= 25){
          elem.className="progress-bar progress-bar-striped progress-bar-animated bg-danger";
          document.getElementById('proceso').innerHTML = 'Verificando su orden';
        }
        else if (width <= 75){
          elem.className="progress-bar progress-bar-striped progress-bar-animated bg-warning";
          document.getElementById('proceso').innerHTML = 'Procesando su orden';
        }
        else if (width <= 99){
          elem.className="progress-bar progress-bar-striped progress-bar-animated bg-success";
          document.getElementById('proceso').innerHTML = 'Completando su orden';
        }
        else if(width===100){
            document.getElementById('exampleModalToggleLabel2').innerHTML = 'Su orden esta en camino';
            $("#proceso").hide();
            $(".progress").hide();
            $("#btn").show();
            
        }
        
      }
    }
  }