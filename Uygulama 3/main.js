var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.addEventListener("mousemove", function(e) {  // canvasa mousemove olayını ekledik.Fonksiyon yazdık. 
          
          var x = e.x; //mouse yataydaki konumu x e attık
          var y = e.y; //mouse dikeydeki konumu y e attık
          context.strokeStyle='dodgerblue'; // stroke dış çerçeve rengi
          context.strokeRect(x, y, 8, 3); 
    }, true);  // true yani çalışsın.


