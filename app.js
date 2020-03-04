<script src="app.js"></script>
document.addEventListener("DOMContenLoaded", function(){
    var opcion = document.getElementById("CboDe");
    var opcion = document.getElementById("CboA");
    var boton= document.getElementById("btnCalcular");

    boton.addEventListener("click", function(){
        if(opcion.value==="Moneda"){
            Moneda();
        
    }else if(opcion.value==="Longitud"){
        Longitud();
    }

})});

function conversores(){

let txtserie= document.querySelector(Moneda).value;
let Dolares=1;
let Colones=8.75;
let Yenes =111.27;
let Rupia= 69.75;
let Peso_MX=19.36;
let Bitcoin=0.00026;
let Metro=1;
let Centimetro=100;
let Pulgada=39.3701;
let Pie=3.28084;
let Varas=1.1963081929167;
let Yardas=1.09361;
let km=0.001;
let Millas=0.000621371;

Dolares/=parseInt(conversores);
Colones/=parseInt(conversores);
Yenes/=parseInt(conversores);
Rupia/=parseInt(conversores);
Peso_MX/=parseInt(conversores);
Bitcoin/=parseInt(conversores);
Metro/=parseInt(conversores);
Centimetro/=parseInt(conversores);
Pulgada/=parseInt(conversores);
Pie/=parseInt(conversores);
Varas/=parseInt(conversores);
Yardas/=parseInt(conversores);
km/=parseInt(conversores);
Millas/=parseInt(conversores);

};