
const  sectionReinciar = document.getElementById("btn-reset")
const  botonMascota =document.getElementById("btn-select")
const  sectionSeleccionarAtaques = document.getElementById("selecciona-ataque")
const sectionSeleccionarMascota = document.getElementById("selecciona-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador = document.getElementById("life-jugador")
const spanVidaEnemigo = document.getElementById("life-enemigo")
const sectionMensajes = document.getElementById('resultado')    
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const sectionMensaje = document.getElementById("resultado")
const reinicio = document.getElementById("btn-reset")
const contenedorTarjetas = document.getElementById("contenedor-Tarjeta")
const contenedorAtaques = document.getElementById("contenedor-ataques")
const botonReiniciar = document.getElementById("btn-reset")
const sectioVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")


let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionesDeMokepones
let inputHipoge 
let inputCapipepo 
let inpuRatigueya 
let mascotaJugador
let ataquesMokepones
let ataquesMokeponEnemigo
let  botonFuego 
let  botonAgua 
let  botonTierra 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo =3
let lienzo = mapa.getContext("2d")
let intervalo
let mascotaJugadorObjeto
let  alturaQueBuscamos
let anchoDelMapa = window.innerWidth -20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa -20
    
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

let mapaBackground = new Image()
mapaBackground.src = "https://static.platzi.com/media/user_upload/mokemap-ca51ea18-7ac8-492f-be96-6181d766a99d.jpg"




class Mokepon {
    constructor(nombre, foto, vida, fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques = []
        this.ancho = 30
        this.alto = 30
        this.x = aleatorio(0,mapa.width - this.ancho)
        this.y = aleatorio(0,mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
        

    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
           
        )
    }
}


let  hipoge = new Mokepon("Hipoge","https://www.megaidea.net/wp-content/uploads/2021/08/Pokemon02-956x1024.png", 5, "https://www.megaidea.net/wp-content/uploads/2021/08/Pokemon02-956x1024.png")

let capipepo = new Mokepon("Capipepo","https://imagenpng.com/wp-content/uploads/2017/02/007Squirtle_Pokem.png", 5, "https://imagenpng.com/wp-content/uploads/2017/02/007Squirtle_Pokem.png")

let ratigueya = new Mokepon("Ratigueya","https://i.pinimg.com/originals/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.png", 5,"https://i.pinimg.com/originals/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.png" )




let  hipogeEnemigo = new Mokepon("Hipoge","https://www.megaidea.net/wp-content/uploads/2021/08/Pokemon02-956x1024.png", 5,"https://www.megaidea.net/wp-content/uploads/2021/08/Pokemon02-956x1024.png")

let capipepoEnemigo = new Mokepon("Capipepo","https://imagenpng.com/wp-content/uploads/2017/02/007Squirtle_Pokem.png", 5,"https://imagenpng.com/wp-content/uploads/2017/02/007Squirtle_Pokem.png")

let ratigueyaEnemigo = new Mokepon("Ratigueya","", 5,"https://i.pinimg.com/originals/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.png" )

hipoge.ataques.push(
    {nombre: "agua", id: "btn-agua" },
    {nombre: "agua", id: "btn-agua" },
    {nombre: "agua", id:"btn-agua"},
    {nombre: "fuego", id: "btn-fuego" },
    {nombre: "tierra", id: "btn-tierra" },
)


hipogeEnemigo.ataques.push(
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

capipepoEnemigo.ataques.push(
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
ratigueyaEnemigo.ataques.push(
    {nombre: "fuego", id: "btn-fuego" },
    {nombre: "fuego", id: "btn-fuego" },
    {nombre: "fuego", id: "btn-fuego" },
    {nombre: "agua", id:"btn-agua"},
    {nombre: "tierra", id: "btn-tierra" },
)


mokepones.push(hipoge,capipepo,ratigueya)


    function iniciarJuego() {
    sectionSeleccionarAtaques.style.display = "none"
    sectionReinciar.style.display ="none"
    sectioVerMapa.style.display ="none"

    mokepones.forEach((Mokepon) =>{
        opcionesDeMokepones = `
        <input type="radio" name= "mascota" id=${Mokepon.nombre} />
        <label class="tarjeta-de-mokepol" for=${Mokepon.nombre}> 
               <p> ${Mokepon.nombre}</p>
               <img src=${Mokepon.foto} alt="">  
        </label>`
        contenedorTarjetas.innerHTML += opcionesDeMokepones

         inputHipoge = document.getElementById("Hipoge")
         inputCapipepo = document.getElementById("Capipepo")
         inpuRatigueya = document.getElementById("Ratigueya")

        })

    botonMascota.addEventListener("click",selecionDeMascotaJugador)
    botonReiniciar.addEventListener("click", reiniciarJuego)

   
    }
     function selecionDeMascotaJugador (){
     
      sectionSeleccionarMascota.style.display ="none"
   
      
    if (inputHipoge.checked){
        spanMascotaJugador.innerHTML = inputHipoge.id
        mascotaJugador = inputHipoge.id
    }
    else if(inputCapipepo.checked){ 
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }
    else if(inpuRatigueya.checked){   
        spanMascotaJugador.innerHTML = inpuRatigueya.id
        mascotaJugador = inpuRatigueya.id
    }
    else {
        alert("Seleccionar una Mascota!")
        }

        extraerAtaques(mascotaJugador)
        sectioVerMapa.style.display = "flex"
    
        iniciarMapa()
      
    }

    function extraerAtaques(mascotaJugador){
        let ataques
        for (let i = 0; i < mokepones.length; i++) {
            if(mascotaJugador == mokepones[i].nombre){
                ataques = mokepones[i].ataques

            }
            
        }

        
        mostrarAtaques(ataques)
    }

    function mostrarAtaques(ataques){
        ataques.forEach((ataque)  =>{
            ataquesMokepones = `
            <button class="btn BAtaque" id=${ataque.id}>${ataque.nombre}</button>`
            contenedorAtaques.innerHTML += ataquesMokepones
        })

         botonFuego = document.getElementById("btn-fuego")  
         botonAgua = document.getElementById("btn-agua")
         botonTierra = document.getElementById("btn-tierra")

            botones = document.querySelectorAll(".BAtaque")

    }
    function secuenciaAtaques() {
        botones.forEach((boton) => {
            boton.addEventListener("click", (e) =>{
                if(e.target.textContent === "fuego"){
                    ataqueJugador.push("FUEGO")
                    console.log(ataqueJugador)
                    
                    boton.disabled= true
                } else if (e.target.textContent === "agua"){
                    ataqueJugador.push("AGUA")
                    console.log(ataqueJugador)
                    
                    boton.disabled= true
                }
                else {
                    ataqueJugador.push("TIERRA")
                    console.log(ataqueJugador)
                    
                    boton.disabled= true
                }
                ataqueAleaotorioEnemigo()
            
            })

        })
      

    }
    

    function seleccionMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(0, mokepones.length -1)
 
    
        spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
        ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
        secuenciaAtaques() 
 }

     function ataqueAleaotorioEnemigo(){
     let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if( ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push("FUEGO")
    }
    else if( ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA")
    }
    else {
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
        iniciarPelea()
 }

   function iniciarPelea (){
    if(ataqueJugador.length === 5){
        combate()
    }
 }

 function indexAmbosOponentes (jugador, enemigo){

    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo] 
    
 }
    function combate () {
         for (let index = 0; index < ataqueJugador.length; index++) {
            if (ataqueJugador[index] === ataqueEnemigo[index]) {
                indexAmbosOponentes(index, index)
                crearMensaje("Empate")
                
           }else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            
            spanVidaEnemigo.innerHTML = vidasEnemigo
           }else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
                 victoriasJugador++
               spanVidasJugador.innerHTML = victoriasJugador

           }else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
                victoriasEnemigo++
                spanVidasJugador.innerHTML = victoriasJugador
         } else{
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidaEnemigo.innerHTML = victoriasEnemigo
         }
        }

        revisarVidas()
    }
    function revisarVidas(){

        if (victoriasJugador === victoriasEnemigo){
            crearMensajeFinal("Empate")
        } else if (victoriasJugador > victoriasEnemigo){
            crearMensajeFinal("Wow!,Ganaste")
        }else[
            crearMensaje("UPS, perdiste")
        ]
    }
    function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador=document.createElement('p')
    let nuevoAtaqueDelEnemigo=document.createElement('p')
    
    sectionMensajes.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML= indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML= indexAtaqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    }
    
    function crearMensajeFinal(resultadoFinal){
        sectionMensaje.innerHTML = resultadoFinal

       

        reinicio.style.display = "block"
    }
    function reiniciarJuego(){
        location.reload()
    }
    function aleatorio(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    function pintarCanvas(){

        mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
        mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
        lienzo.clearRect(0,0,  mapa.width, mapa.height)
        lienzo.drawImage(
            mapaBackground,
            0,
            0,
            mapa.width,
            mapa.height
            )
     mascotaJugadorObjeto.pintarMokepon()
     hipogeEnemigo.pintarMokepon()
     capipepoEnemigo.pintarMokepon()
     ratigueyaEnemigo.pintarMokepon()

     if(mascotaJugadorObjeto.velocidadX !== 0  || mascotaJugadorObjeto.velocidadY !== 0 ){
        revisarColision(hipogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
     }
     
    }
    function moverDerecha(){
        mascotaJugadorObjeto.velocidadX = 5

        pintarCanvas()
    }

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = - 5

    pintarCanvas()
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = + 5

    pintarCanvas()
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY = - 5

    pintarCanvas()
}
 function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
 }

  function sePrecionoUnaTecla(event){
    switch (event.key) {
        case "w":
            moverArriba()
            break
            case "d":
            moverDerecha()
            break 
            case "a":
             moverIzquierda()
             break
             case "s":
             moverAbajo()
             break
    
        default:
            break
    }
    
  }

   function iniciarMapa(){
   
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener("keydown", sePrecionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
   }

   function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador == mokepones[i].nombre){
            return mokepones[i]

        }
        
    }
   }

    function revisarColision(enemigo){
        const arribaEnemigo = enemigo.y
        const abajoEnemigo = enemigo.y + enemigo.alto
        const derechaEnemigo = enemigo.x + enemigo.ancho
        const izquierdaEnemigo = enemigo.x

        const arribaMascota = mascotaJugadorObjeto.y
        const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
        const derechaMascota = mascotaJugadorObjeto.x+ mascotaJugadorObjeto.ancho
        const izquierdaMascota = mascotaJugadorObjeto.x
        if(
            abajoMascota  < arribaEnemigo ||
            arribaMascota > abajoEnemigo ||
            derechaMascota < izquierdaEnemigo ||
            izquierdaMascota > derechaEnemigo

        ){
            return
        }
        detenerMovimiento()
        clearInterval(intervalo)
     sectionSeleccionarAtaques.style.display ="flex"
     sectioVerMapa.style.display ="none"
     seleccionMascotaEnemigo(enemigo)
      
    }
window.addEventListener("load", iniciarJuego)
