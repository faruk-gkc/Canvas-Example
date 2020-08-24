var c=document.getElementById("myCanvas");
var cizim= c.getContext("2d");
cizim.beginPath();   // çizim yolu başlangıcı 
cizim.moveTo(30,30);  // çizim başlangıç koordinatları
cizim.lineTo(300,300); // çizim bitişi yani kısaca nereden nereye geldiği
cizim.lineTo(400,300);
cizim.moveTo(30,30);
cizim.lineTo(400,30);
cizim.lineTo(400,300);
cizim.moveTo(200,70);
cizim.arc(200,70,30,0,2*Math.PI);  // arc çizme
cizim.lineTo(400,300);
cizim.font="25px Verdana";
cizim.fillText("Faruk Gökcegöz", 420, 50);
cizim.strokeText("Faruk Gökcegöz",420, 300);
cizim.strokeStyle = "#FF0000";
cizim.fillRect(400,400,50,50);  // rectangle çizme içi dolu
cizim.strokeRect(100,100,50,50); // rectangle çizme içi boş kalınlık var sadece
cizim.strokeRect(200,200,50,50);
cizim.stroke();