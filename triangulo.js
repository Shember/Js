<!DOCTYPE html>
<html>
  <body>

    <canvas id="myCanvas" width="500" height="433" style="border:1px solid #d3d3d3;"></canvas>
    <script>
        
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      var x0= 0, y0 = 432.5, x1 = 500, y1 = 250;
      var p1 =0,p2=0,p3 = 0;  
      var i = 0;

      function invertido(x0, y0, x1, y1, x2, y2, nivel){   
      
        //base
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
      
        //lados
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.moveTo(x2, y2);
        ctx.lineTo(x0, y0);      
      
        ctx.stroke();
        
        p1 = mitades(x0, y0, x1, y1);
        p2 = mitades(x1, y1, x2, y2);
        p3 = mitades(x2, y2, x0, y0);
  
        nivel++;
        
        var ax = p1[0];
        var ay = p1[1];
        var bx = p2[0];
        var by = p2[1];
        var cx = p3[0];
        var cy = p3[1];       
        
        if(nivel == 8)
          return; 
          
        invertido(ax, ay, x0, y0, cx, cy, nivel);
        invertido(ax, ay, x1, y1, bx, by, nivel);
        invertido(bx, by, x2, y2, cx, cy, nivel);              
      }

      function mitades(x1, y1, x2, y2){
      
        px = (x1+x2)/2;
        py = (y1+y2)/2;
    
        return [px, py];
      }

      invertido(0, 432.5, 250, 0, 500, 432.5, 1);
    </script>
  </body>
</html>