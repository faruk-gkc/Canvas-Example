var canvas= document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.addEventListener('mousedown', function(e) {
    this.down = true;  // mouse tıklandığında çalışsın
    this.X = e.pageX ; // yatay konumu alma
    this.Y = e.pageY ; // dikey konumu alma
}, 0);
canvas.addEventListener('mouseup', function() {

    this.down = false;   // mouse elini çekildiğinde false olsun mousedown  
}, 0);
canvas.addEventListener('mousemove', function(e) {
    if(this.down) {
         with(ctx) {
            beginPath();
            moveTo(this.X, this.Y);
            lineTo(e.pageX , e.pageY );
            ctx.lineWidth=3;
            ctx.strokeStyle = "#864935";
            stroke();
         }
         this.X = e.pageX ;
         this.Y = e.pageY ;
    }
}, 0);

