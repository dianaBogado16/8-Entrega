import './style.css'

console.warn('Ejercicio 1');

let nombre = 'diana';
let apellido= 'bogado';
let edad= 23;
let pais= 'Argentina';
let conocimientos = ['Java', 'Python','Git', 'C']

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(pais);
console.log(conocimientos);
edad = 24;
console.log(edad);
conocimientos.push('JavaScript')
console.log(conocimientos);


console.warn('Ejercicio 2');

let marca = 'Audi'
let velocidad= 250 ;
let stock= 50;
let modelos =['TT', 'Q3', 'Q5', 'A1', 'R8']
console.log(`En la consesionaria contamos con autos marca ${marca} con un stock de ${stock} autos con velocidades de hasta ${velocidad} km/h`);

console.log('Nuestros modelos:');
function mostrarMarcas(){
    for (let modelo of modelos) {
        console.log(modelo);
    }
}

mostrarMarcas()

console.warn('Ejercicio 3');

let velocidadAuto=135;
let limite=60;
function velocidadMayorLimite(){
    if(velocidadAuto>limite){
        console.log('Vas muy rapido, reduce tu velocidad u obtendras una multa');
    }else{
        console.log('Tu velocidad esta dentro del limite, sigue asi!');
    }
}

velocidadMayorLimite()

console.warn('Ejercicio 4');
let sueldo = prompt('Ingrese su sueldo para analizar')

function analizarSueldo(){
    if(sueldo>= 100_000){
        console.log('Su sueldo es excelente');
    }
    if(sueldo<= 80_000){
        console.log('Su sueldo es muy bueno');
    }
    if(sueldo<= 60_000){
        console.log('Su sueldo es bueno');
    }
    if(sueldo<=40_000){
        console.log('Su sueldo es bajo');
    }
}

analizarSueldo();

console.warn('Ejercicio 5');

let anioNacimiento = prompt('Ingrese su año de nacimiento')

let fechaActual = new Date(); 
let anioActual = fechaActual.getFullYear();

function calcularEdad(anioNacimiento){
    return anioActual-anioNacimiento ;
}

console.log('Usted tiene actualmente '+ calcularEdad(anioNacimiento)+ ' años');

console.warn('Ejercicio 6');

let numero= prompt('Ingrese un numero para pedir su tabla')

function tablaMultilicar(numero){
    for(let i=0;i<=10;i++){
        console.log(numero + 'x'+ i+ '=' + numero*i);
    }
}

tablaMultilicar(numero)

console.warn('Eejrcicio 7');

let numeroUsuario= prompt('Ingrese un numero para saber si es par o impar')

function esPar(numeroUsuario){
    if(numeroUsuario%2===0){
        console.log('El numero ' + numeroUsuario +' es par');
        alert('El numero es par')
    }else{
        console.log('El numero '+ numeroUsuario+ ' no es par');
        alert('El numero NO es par')
    }
}

esPar(numeroUsuario)