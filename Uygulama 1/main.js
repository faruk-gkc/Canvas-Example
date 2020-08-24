var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        var gradyan = context.createLinearGradient(0, 0, 350, 0);  // gradyan oluşturma.


           context.font = "34px Courier"; // font seçimi
           context.fillText("FARUK GÖKCEGÖZ", 30, 80);  // text yazımı
           
          

           gradyan.addColorStop(0, "tomato"); // gradyan renk geçişi tomato --> cadetblue
           gradyan.addColorStop(1, "cadetblue");

           context.strokeStyle = gradyan;  // dış çerçeve rengi gradyan olsun.
           context.lineWidth = 20;  // çizgi kalınlığı
           context.strokeRect(20, 25, 310, 100);  // dış çerçeve çizimi