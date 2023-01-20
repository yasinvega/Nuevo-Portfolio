window.onscroll = function() {
  var y = window.scrollY;

  if(y >= 91){

      document.getElementById("logo").style.transition = ".3s";
      if((screen.width <= 600)){
        document.getElementById("logo").src = "../assets/Imagenes/Logo_oscuro-removebg-preview.png";
      }else{
        document.getElementById("logo").src = "../assets/Imagenes/Logo_oscuro-removebg-preview.png";
      }
      document.getElementById("barraNavegacion").classList.remove("barra-navegacion");
      document.getElementById("barraNavegacion").className = "barra-navegacion2";
      document.getElementById("redes").style.display = "none";
      $(document).ready(function(){
        $(".menu a").css({"color":"#FFFFFF", "width":"75px"});
        //$(".menu").css("margin-left", "120px");
      });
  }
  if(y < 91){
      document.getElementById("logo").style.transition = ".3s";
      if((screen.width <= 600)){
        document.getElementById("logo").src = "../assets/Imagenes/Logo_oscuro-removebg-preview.png";
      }else{
        document.getElementById("logo").src = "../assets/Imagenes/Logo-removebg-preview.png";
      }
      document.getElementById("redes").style.display = "flex";
      document.getElementById("barraNavegacion").classList.remove("barra-navegacion2");
      document.getElementById("barraNavegacion").className = "barra-navegacion";
      $(document).ready(function(){
        $(".menu a").css("color","#000000");
       // $(".menu").css("margin-right", "120px");
      });
    }

};

