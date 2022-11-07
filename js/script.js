
const  sectionReinciar = document.getElementById("btn-reset")
const  botonMascota=document.getElementById("btn-select")
const  botonFuego= document.getElementById("btn-fuego")  
const  botonAgua= document.getElementById("btn-agua")
const  botonTierra= document.getElementById("btn-tierra")
const  sectionSeleccionarAtaques=document.getElementById("selecciona-ataque")
const  botonReiniciar = document.getElementById("btn-reset")


const sectionSeleccionarMascota = document.getElementById("selecciona-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")


const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("life-jugador")
const spanVidaEnemigo = document.getElementById("life-enemigo")
const sectionMensajes=document.getElementById('resultado')    
const ataquesDelJugador=document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo=document.getElementById('ataques-del-enemigo')
const sectionMensaje = document.getElementById("resultado")
const reinicio = document.getElementById("btn-reset")
const contenedorTarjetas = document.getElementById("contenedorTarjeta")


let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo =3
let opcionesDeMokepones
let mascotaUna 
let mascotaDos 
let mascotaTres


class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques = []
    }
}


let  hipoge = new Mokepon("Hipoge","https://www.megaidea.net/wp-content/uploads/2021/08/Pokemon02-956x1024.png", 5)

let capipepo = new Mokepon("Capipepo","https://imagenpng.com/wp-content/uploads/2017/02/007Squirtle_Pokem.png", 5)

let ratigueya = new Mokepon("Ratigueya","https://i.pinimg.com/originals/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.png", 5 )

hipoge.ataques.push(
    {nombre: "agua", id: "btn-agua" },
    {nombre: "agua", id: "btn-agua" },
    {nombre: "agua", id:"btn-agua"},
    {nombre: "fuego", id: "btn-fuego" },
    {nombre: "tierra", id: "btn-tierra" },
)

capipepo.ataques.push(
    {nombre: "tierra", id: "btn-tierra" },
    {nombre: "tierra", id: "btn-tierra" },
    {nombre: "tierra", id: "btn-tierra" },
    {nombre: "fuego", id: "btn-fuego" },
    {nombre: "agua", id:"btn-agua"},
   
    
)

ratigueya.ataques.push(
    {nombre: "fuego", id: "btn-fuego" },
    {nombre: "fuego", id: "btn-fuego" },
    {nombre: "fuego", id: "btn-fuego" },
    {nombre: "agua", id:"btn-agua"},
    {nombre: "tierra", id: "btn-tierra" },
)

mokepones.push(hipoge,capipepo,ratigueya)
console.log(hipoge)

    function iniciarJuego() {
    sectionSeleccionarAtaques.style.display = "none"
    sectionReinciar.style.display ="none"

    mokepones.forEach((Mokepon) =>{
        opcionesDeMokepones = `
        <input type=“radio” name=“mascota” id=${Mokepon.nombre} />
        <label class="tarjeta-de-mokepol" for=${Mokepon.nombre}> 
               <p> ${Mokepon.nombre}</p>
               <img src=${Mokepon.foto} alt="">  
        </label>`
        contenedorTarjetas.innerHTML += opcionesDeMokepones

         mascotaUna = document.getElementById("Hipoge")
         mascotaDos = document.getElementById("Capipepo")
         mascotaTres = document.getElementById("Ratigueya")
        })

    botonMascota.addEventListener("click",selecionDeMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click",ataqueAgua)
    botonTierra.addEventListener("click",ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)

    }
     function selecionDeMascotaJugador (){
     
      sectionSeleccionarMascota.style.display ="none"
      sectionSeleccionarAtaques.style.display ="flex"

     
      
    if (mascotaUna.checked){
        spanMascotaJugador.innerHTML = "Hipoge"
    }
    else if(mascotaDos.checked){
        
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if(mascotaTres.checked){
        
        spanMascotaJugador.innerHTML = "Ratugueya"
    }
    else {
        alert("Seleccionar una Mascota!")
        }
        seleccionMascotaEnemigo()
    }


    function seleccionMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
 
    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML="hipoge"
    }
    else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML="capipepo"
    }
    else {
        spanMascotaEnemigo.innerHTML="ratigueya"   
   }
 }


 function ataqueFuego(){
    ataqueJugador="Fuego"
    ataqueAleaotorioEnemigo()
 }
 
 function ataqueAgua(){
    ataqueJugador="Agua"
    ataqueAleaotorioEnemigo()
 }
 function ataqueTierra(){
    ataqueJugador="Tierra"
    ataqueAleaotorioEnemigo()
 }
 function ataqueAleaotorioEnemigo(){
    let ataqueAleatorioGo = aleatorio(1,3)

    if( ataqueAleatorioGo == 1){
        ataqueEnemigo ="Fuego"
    }
    else if( ataqueAleatorioGo == 2){
        ataqueEnemigo = "Agua"
    }
    else {
        ataqueEnemigo = "Tierra"
    }
        combate()
 }
    function combate () {
    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")
    }
        else if( ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
            crearMensaje("Ganaste")
            vidasEnemigo--
            spanVidaEnemigo.innerHTML = vidasEnemigo
        }
        else if ( ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
            crearMensaje("Ganaste")
            vidasEnemigo--
            spanVidaEnemigo.innerHTML = vidasEnemigo
        }
        else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){

            crearMensaje("Ganaste")
            vidasEnemigo--
            spanVidaEnemigo.innerHTML = vidasEnemigo
        }
        else{
            crearMensaje("Perdiste")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador       
        }
        revisarVidas()
    }
    function revisarVidas(){

        if (vidasJugador == 0){
            crearMensajeFinal("UPS!, Perdiste")
        } else if (vidasEnemigo == 0){
            crearMensajeFinal("Wow!,Ganaste")
        }
    }
    function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador=document.createElement('p')
    let nuevoAtaqueDelEnemigo=document.createElement('p')
    
    sectionMensajes.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML=ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML=ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    }
    
    function crearMensajeFinal(resultadoFinal){
        sectionMensaje.innerHTML = resultadoFinal
        botonFuego.disabled= true
        botonAgua.disabled= true
        botonTierra.disabled= true
        reinicio.style.display = "block"
    }
    function reiniciarJuego(){
        location.reload()
    }
    function aleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

window.addEventListener("load", iniciarJuego)
