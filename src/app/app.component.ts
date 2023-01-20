import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
//NG FOR
import { NgFor } from '@angular/common';
//NGMODEL
import { NgModel } from '@angular/forms';
//Import particles Angular
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
//Import Jquery
import * as $ from 'jquery';
import * as jQuery from 'jquery';
//aos animations
import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio-yasin-vega';
  id = "tsparticles";

  //Inicializar libreria de animaciones AOS
    ngOnInit():void{
        AOS.init();

        //JQUERY
        $(document).ready(function(){
          $("#mas").hide();
          $("#vermas").click(function(){
            $("#mas").toggle(1000);
            if($("#vermas").text() === "Ver mas"){
              $("#vermas").text("Ver menos");
            }else{
              $("#vermas").text("Ver mas");
            }
          });
        })

        //JQUERY GALERIA
        $(document).ready(function(){
          $("#todo").click(function(){
              $(".htcs").show(1000);
              $(".web").show(1000);
              $(".js").show(1000);
              $(".angular").show(1000);
              $(".figma").show(1000);
          });
          $("#htcs").click(function(){
            $(".htcs").show(1000);
            $(".web").hide(1000);
            $(".js").hide(1000);
            $(".angular").hide(1000);
            $(".figma").hide(1000);
          })
          $("#js").click(function(){
            $(".js").show(1000);
            $(".web").hide(1000);
            $(".htcs").hide(1000);
            $(".angular").hide(1000);
            $(".figma").hide(1000);
          })
          $("#web").click(function(){
            $(".web").show(1000);
            $(".js").hide(1000);
            $(".htcs").hide(1000);
            $(".angular").hide(1000);
            $(".figma").hide(1000);
          })
          $("#angular").click(function(){
            $(".angular").show(1000);
            $(".js").hide(1000);
            $(".htcs").hide(1000);
            $(".web").hide(1000);
            $(".figma").hide(1000);
          })


        })

        $(document).ready(function(){
          let ancho = $("body").width();
          let minimo: number = 1097;
            if( $(window).width()!  <= minimo){
                $(".barra-navegacion").css("background-color", "#000000");
                $("#logo").attr("src", "../assets/Imagenes/Logo_oscuro-removebg-preview.png");
                $("#listaMenu").hide();
                $("#info").removeAttr("data-aos");
                $(".cuadro").removeAttr("data-aos");
            }else{
               $(".div-enlaces").remove();
            }


            $("#logo").click(function(){
              $("#listaMenu").toggle(1000);
              $("#listaMenu a").css("color", "#FFFFFF");
            })
        })

    }

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  width: number = 100;
  height: number = 100;
  myStyle: Object = {
    'position': 'absolute',
    'width': '100%',
    'height': '100%',
    'z-index': -1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  };

  particlesOptions = {
      background: {
          color: {
              value: "#FFFFFF",
          },
      },
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: false,
                  mode: ClickMode.push,
              },
              onHover: {
                  enable: true,
                  mode: HoverMode.repulse,
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.6,
              },
          },
      },
      particles: {
          color: {
              value: "#000000",
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          collisions: {
              enable: true,
          },
          move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                  default: OutMode.bounce,
              },
              random: false,
              speed: 1,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 80,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },

      },
      detectRetina: true,

  };
  //particlesInit: ((engine: Engine) => Promise<void>)|undefined;

  particlesLoaded(container: Container): void {
      //console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    // console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}


  public proyectos:Object[] = [
    {
      Name: "ApiClima",
      Imagen: "../assets/galeria/apiclimafondo.png",
      Galeria: [
        "../assets/galeria/banco-nostro/0-banco-nostro.png",
        "../assets/galeria/banco-nostro/1-banco-nostro.png",
        "../assets/galeria/banco-nostro/2-banco-nostro.png",
        "../assets/galeria/banco-nostro/3-banco-nostro.png"
      ],

      Description: "Aplicacion para consultar el clima en españa. Usando una api de aemtet. la aplicacion esta enteramente realizada con Angular",
      code: "https://github.com/yasinvega/ApiClima",
      live: "https://aplicacionclima.web.app/"
    },
    {
      Name: "Banco Nostro",
      Imagen: "../assets/galeria/banconostro.png",
      Galeria: [
        "../assets/galeria/banco-nostro/0-banco-nostro.png",
        "../assets/galeria/banco-nostro/1-banco-nostro.png",
        "../assets/galeria/banco-nostro/2-banco-nostro.png",
        "../assets/galeria/banco-nostro/3-banco-nostro.png"
      ],
      Description: "Aplicacion de banca digital orientada al cliente, dicha aplicacion esta realizada en php para el manejo de los datos y conexion con el servidor, el apartado de diseño estaria realizado con css, bootstrap, js y jquery, y para el manejo o almacenamiento de los datos se usaria phpmyadmin.",
      code: "https://github.com/yasinvega/banca-digital",
      live: "https://cuenta-digital-nostro.000webhostapp.com/"
    },
    {
      Name: "Calculadora",
      Imagen: "../assets/galeria/calculadora.PNG",
      Galeria: {
       primera: "../assets/galeria/banco-nostro/0-banco-nostro.png",
       segunda: "../assets/galeria/banco-nostro/1-banco-nostro.png",
       tercera: "../assets/galeria/banco-nostro/2-banco-nostro.png",
       cuarta: "../assets/galeria/banco-nostro/3-banco-nostro.png"
      },
      Description: "Aplicacion de calculadora realizada con Javascript",
      code: "https://github.com/yasinvega/Calculadora",
      live: "https://portfolio-yasin-vega.000webhostapp.com/CALCULADORA/index.html"
    },
    {
      Name: "Daily Bugle",
      Imagen: "../assets/galeria/daily.png",
      Galeria: [
        "../assets/galeria/banco-nostro/0-banco-nostro.png",
        "../assets/galeria/banco-nostro/1-banco-nostro.png",
        "../assets/galeria/banco-nostro/2-banco-nostro.png",
        "../assets/galeria/banco-nostro/3-banco-nostro.png"
      ],
      Description: "Portada del periodico 'Daily Bugle' de la famosa saga de peliculas spiderman, La aplicacion esta realizada con HTML, CSS y Bootstrap",
      code: "https://github.com/yasinvega/Daily-Bugle",
      live: "https://portfolio-yasin-vega.000webhostapp.com/Daily%20Bugle/index.html"
    },
    {
      Name: "Login",
      Imagen: "../assets/galeria/loginv2.PNG",
      Galeria: [
        "../assets/galeria/banco-nostro/0-banco-nostro.png",
        "../assets/galeria/banco-nostro/1-banco-nostro.png",
        "../assets/galeria/banco-nostro/2-banco-nostro.png",
        "../assets/galeria/banco-nostro/3-banco-nostro.png"
      ],
      Description: "Aplicacion de Login, Hecha en HTML, CSS y Javascript",
      code: "https://github.com/yasinvega/Login_V2",
      live: "https://portfolio-yasin-vega.000webhostapp.com/LoginV2/HTML/index.html"
    },
     {
      Name: "Tres en raya",
      Imagen: "../assets/galeria/tresenraya.PNG",
      Galeria: [
        "../assets/galeria/banco-nostro/0-banco-nostro.png",
        "../assets/galeria/banco-nostro/1-banco-nostro.png",
        "../assets/galeria/banco-nostro/2-banco-nostro.png",
        "../assets/galeria/banco-nostro/3-banco-nostro.png"
      ],
      Description: "Aplicacion del famoso juego TicTacToe realizado con HTML, CSS y Javascript",
      code: "https://github.com/yasinvega/Tres-en-raya",
      live: "https://portfolio-yasin-vega.000webhostapp.com/Tres-en-raya/tres-en-raya.html"
    },
    {
      Name: "Portfolio",
      Imagen: "../assets/galeria/portfolio.PNG",
      Galeria: [
        "../assets/galeria/banco-nostro/0-banco-nostro.png",
        "../assets/galeria/banco-nostro/1-banco-nostro.png",
        "../assets/galeria/banco-nostro/2-banco-nostro.png",
        "../assets/galeria/banco-nostro/3-banco-nostro.png"
      ],
      Description: "Portoflio realizado sobre mi y mis aptitudes como desarrollador, el cual a sido enteramente desarrollado con angular",
      code: "https://github.com/yasinvega/Login_V2",
      live: "https://portfolio-yasin-vega.000webhostapp.com/LoginV2/HTML/index.html"
    }
  ]



  enviarDatos(number:number){
    if(screen.width <= 1097){
        let idNumero = String(number)
        let contenedorPadre = (document.getElementById(`${idNumero}`)as HTMLFormElement);
        console.log(contenedorPadre);
        // contenedorPadre.lastChild!.innerHTML = "";

        if(document.getElementById("divmin")){
          document.getElementById("divmin")?.remove();
        }

        let divmin = document.createElement("div");
        divmin.setAttribute("id", "divmin");


        divmin.setAttribute("style","background-color: rgba(255,255,255,0.5); width: fit-content; height: fit-content; display: flex; justify-content: center; align-items: center; flex-direction: column;");

        // let titulo = document.createElement("h1");
        // titulo.textContent = Object(this.proyectos[number]).Name;
        // titulo.setAttribute("style", "text-align: center; color: #000000; margin:auto; font-size: 35px; height:50%");

        let div_codigos = document.createElement("div")
        div_codigos.setAttribute("class", "div_enlaces");
        div_codigos.setAttribute("style", "  display: flex; justify-content: space-evenly; padding: 10px; width: 350px")

        let codigoEnlace = document.createElement("a");
        codigoEnlace.href = Object(this.proyectos[number]).code;
        codigoEnlace.innerHTML = '<svg style="width:40px; height:40px; fill:#c92627" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg>';

        let webEnlace = document.createElement("a");
        webEnlace.href = Object(this.proyectos[number]).live;
        webEnlace.innerHTML = '<svg style="width:40px; height:40px; fill:#c92627" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M13 2v-2l10 3v18l-10 3v-2h-9v-7h1v6h8v-18h-8v7h-1v-8h9zm-2.947 10l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z"/></svg>';

        div_codigos.appendChild(codigoEnlace);
        div_codigos.appendChild(webEnlace);
        // divmin.appendChild(titulo);
        divmin.appendChild(div_codigos);
        contenedorPadre.appendChild(divmin);
    }else{
          console.log("La pantalla es grande")
          let proyecto:object = Object(this.proyectos[number]);
          //console.table(Object(this.proyectos[number]))

        let modal: any = document.getElementById("modal");

        modal.innerHTML = "";
        modal.style.display ="block";
        let contenidoModal = document.createElement("div");
        contenidoModal.setAttribute("class", "modal-content");

        let span = document.createElement("span");
        span.setAttribute("class","close");
        span.setAttribute("style","cursor:pointer; padding:10px; width:50%")
        span.addEventListener("click", e =>{
          modal.style.display = "none";
        })

        let titulo = document.createElement("h1");
        titulo.textContent = Object(this.proyectos[number]).Name;
        titulo.setAttribute("style", "display:flex; padding-left: 30px;")


        let imagen = document.createElement("img");
        imagen.src = Object(this.proyectos[number]).Imagen;
        imagen.setAttribute("style", "  width: 700px; height: 70%; margin: 0; border-bottom: 2px solid black");

        let descripcion = document.createElement("p");
        descripcion.textContent = Object(this.proyectos[number]).Description;
        descripcion.setAttribute("style", "  width: 700px; margin: auto; font-family: arial; text-align:left;font-style: italic; padding: 0 15px 10px;")

        let div_codigos = document.createElement("div")
        div_codigos.setAttribute("class", "div_enlaces");
        div_codigos.setAttribute("style", "  display: flex; justify-content: space-evenly; padding: 10px;")

        let codigoEnlace = document.createElement("a");
        codigoEnlace.href = Object(this.proyectos[number]).code;

        let botonCodigo = document.createElement("button");
        botonCodigo.textContent = "Code";
        codigoEnlace.appendChild(botonCodigo);
        botonCodigo.setAttribute("style","padding: 10px; background-color: #c92627; color: #FFF; width: 100px;  border: none; cursor:pointer")

        let webEnlace = document.createElement("a");
        webEnlace.href = Object(this.proyectos[number]).live;

        let botonWeb = document.createElement("button");
        botonWeb.textContent = "Live"
        webEnlace.appendChild(botonWeb);
        botonWeb.setAttribute("style","padding: 10px; background-color: #c92627; color: #FFF; width: 100px;  border: none; cursor:pointer")

        div_codigos.appendChild(codigoEnlace);
        div_codigos.appendChild(webEnlace);
        div_codigos.appendChild(span);
        contenidoModal.setAttribute("style","position:absolute; width: auto;  height: 800px; z-index: 2; margin: auto; text-align: center; display: flex; flex-direction: column; justify-content: center; align-content: center; margin: auto; left: 30%;   background: #FFF; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;")
        span.innerHTML = '<svg style="width:25px; height:25px; float:right; " clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>'

        contenidoModal.appendChild(imagen);
        contenidoModal.appendChild(titulo);

        contenidoModal.appendChild(descripcion);
        contenidoModal.appendChild(div_codigos);
        // contenidoModal.appendChild(span);


        modal.appendChild(contenidoModal);
    }



}

}
