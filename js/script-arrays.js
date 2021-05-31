//Arreglos con JavaScript
//Un conjunto de elementos 'de un mismo  tipo' definidos en una estructura
//DEFINICIONES
//Arreglo de Strings
var provincias = ['Loja','Azuay','Cañar','Chimborazo'];
//Arreglo de varios tipos de datos
var varios_tipos = [3,'Juan',true,'2021-05-31'];
//Definido un arreglo por el constructor con el numero de elementos, en este caso 10
var numeros_primos = new Array(10);
//Definido un arreglo  por el constructor con sus elementos
var serie_fibonacci=new Array(1,1,2,3,5,8,13,21);
//definir un arreglo vacio
var figuras_geometricas = new Array();

//Función que imprime los arreglos
function imprimeArreglos(){
    document.getElementById('arrProvincias').innerText = provincias;
    document.getElementById('arrTipos').innerText = varios_tipos;
    document.getElementById('arrPrimos').innerText = numeros_primos;
    document.getElementById('arrFibonacci').innerText = serie_fibonacci;
    document.getElementById('arrGeometricas').innerText = figuras_geometricas;
}
function imprimirCadaProvincia(){
    //con el forEach se va a recorrer cada elemento del arreglo

    provincias.forEach((x)=>{
        var li = document.createElement('li');
        li.innerText= x;
        document.getElementById('ulProvincias').appendChild(li);
    })//forEach es un callBack, implementa una funcionalidad
}
function agregarProvincia(){
    var nombre = document.getElementById('txtProvincia').value;
    provincias.push(nombre);
    document.getElementById('arrProvincias').innerText=provincias;
    document.getElementById('txtProvincia').value='';
}

function agregarFigura(){
    var nombre = document.getElementById('txtFigura').value;
    figuras_geometricas.push(nombre);
    document.getElementById('arrGeometricas').innerText=figuras_geometricas;
    document.getElementById('txtFigura').value='';
}
function imprimirSerieFibonacci(){
    //con el forEach se va a recorrer cada elemento del arreglo

    serie_fibonacci.forEach((x)=>{
        var li = document.createElement('li');
        li.innerText= x;
        document.getElementById('ulFibonacci').appendChild(li);
    })//forEach es un callBack, implementa una funcionalidad
}