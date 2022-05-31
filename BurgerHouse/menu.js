titulo();
subtitulo();
descripcion();
ingredientes();
precio();
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
            document.getElementById(prec).innerHTML =  burger.precio;
            c++;
        }
    }
    
    function buscar2(n){
        let bx ="Hamburgesa "+n; 
        Burger.find(object =>{
        if(object.nombre === bx){

            document.getElementById("nombre2-h-"+n).innerHTML = object.nombre;
            document.getElementById("tipo2-h-"+n).innerHTML = object.tipo;
            document.getElementById("desc2-h-"+n).innerHTML = object.desc;
            document.getElementById("pre2-h-"+n).innerHTML =  object.precio;

          }
      });
    }
    let Ingred8 = []

    check();     
        function check(){
            let d="";
            for (var i = 0; i < ArrayIngredientes.length; i++) {
                indice = i;
                d+= '<input type="checkbox"'+
                'id="'+ indice +'">'+
                '<label for="'+ indice +'">'+
                ArrayIngredientes[i]+'</label>'+
                '<br>';
                }
                document.getElementById("check").innerHTML = d;
            };
            

    $("#btn").click(function () {	 
		for(ai = 0; ai < ArrayIngredientes.length; ai++){
            if (document.getElementById(ai).checked)
            {
                let x= ArrayIngredientes[ai];
                Ingred8 += x;
            }
            else{
            }

        }
        document.getElementById('in2-h-8').innerHTML = Ingred8;

});