//- - - - - - - ANIMACION TITULO - - - - - - - - - - 
$(function(){
    setInterval(function(){
        var color=$(".main-titulo").css("color");//selector de coler css
        if(color=="rgb(220, 255, 14)"){ //se coloca en formato RGB por ser reconocido en la condicion
                $(".main-titulo").css("color","white"); 
            } else {
                $(".main-titulo").css("color","#DCFF0E");
                    }
            },1000);


$('.btn-reinicio').click(function(){ //boton iniciar juego
    $(this).text('Reiniciar'); //cambia el texto de este boton de inicia a reiniciar
    $(this).switchClass("btn-reinicio","btn-inicio",10,"easeInOutBounce");//cambia el estilo de btn_reinicio a btn_inicio referido en el archio estilos.CSS

    var segundos = 60;
    var minuto = 1;
    var cuenta = setInterval(tiempo, 1000);
//- - - - FUNCION DEL TIEMPO (DURACION DEL JUEGO) - - - - - - - - - - - -
    function tiempo(){
        segundos=segundos-1
        if (segundos <= 0){
            minuto=minuto-1;
             segundos=60;                                           
             return; //regresa este valor al parametro setInterval (linea 19)
          } if (minuto <= 0 && segundos <= 1) {
        clearInterval(cuenta); //limpia y finaliza el contador del tiempo
        function finJuego() {
            // - - - - - - - - - Animaciones al terminar el juego - - - - - - -
            // estos elementos se expanden a lo ancho de la página definido en el archivo estilos.CSS
            $(".panel-score").switchClass("panel-score","panel-score2",1000,"easeInOutBounce");//easeInOutBounce: Tipo de flujo de la animacion
            $(".panel-tablero").switchClass("panel-tablero","panel-tablero2",1000,"easeInOutBounce");
            $(".time").switchClass("time","tiempo2",1000,"easeOutBounce");

            $( ".panel-score").prepend('<h1 id="finish" class="termin">Juego Terminado</h1>'); //añade el titulo JUEGO TERMINADO antes de .panel-score y la clase .termin se encuentra declarada en el archivo estilos.css

        };
        finJuego(); //se invoca la funcion fin de juego
            }
    document.getElementById("timer").innerHTML=minuto +":"+segundos; //muestra los segundos en el contenedor del DOM-> timer
        }
    })
    $(".btn-inicio").on("click", function(){
        window.location.reload(true);

    });
});

        var filas=7;
		var columnas = 7;
		var grid = [];
		var validFigures=0;
        var levelGoal = 0;

        function dulce(r,c,obj,src){
			return {
				r: r,
				c: c,
				src:src,
				locked:false,
				isInCombo:false,
				o:obj
			}
		}
        
        var tipoDulce=[]; //se define una matrix a llenar por los dulces
        tipoDulce[0]='image/1.png';
        tipoDulce[1]='image/2.png';
        tipoDulce[2]='image/3.png';
        tipoDulce[3]='image/4.png';

//- - - - - - - - - - - - RAMDOM DEL LLENADO DE LA MATRIZ tipoDulce - - - - - 
    function RandomDulce(){
        var pickInt = Math.floor((Math.random()*4));//se multiplica por 4 por ser la longiyud de la matriz
        return tipoDulce[pickInt];
    }

    function _initGame() { //inicializa el juego
        for (var r = 0; r < filas; r++)//recorrido de filas
          {
             grid[r]=[];
              for (var c =0; c< columnas; c++) {//recorrido de columnas
                grid[r][c]=new dulce(r,c,null,RandomDulce());//llenado aleatorio
            }
         }
                _applyRectangleConstraint(1,1,1,1);

            var width = $('#tablero-panel').width();
            var height = $('#tablero-panel').height();
            var cellWidth = width / (columnas+1);
            var cellHeight = height / (filas+1);
            var marginWidth = cellWidth/columnas;
            var marginHeight = cellHeight/filas;

                for (var r = 0; r < filas; r++){
                    for (var c =0; c< columnas; c++) {
                        var cell = $("<img class='dulce' id='jewel_"+r+"_"+c+"' r='"+r+"' c='"+c+"' ondrop='_onDrop(event)' ondragover='_onDragOverEnabled(event)'  src='"+grid[r][c].src+"' style='position:fixed;padding-right:20px;top:"+r*cellHeight+"px;left:"+(c*cellWidth+marginWidth)+"px; margin-top: 130px; margin-left: 80px;'/>"); //celda
                        cell.attr("ondragstart","_ondragstart(event)");//atributo de celda
                        $("#tablero-panel").append(cell);//agregar celda
                        grid[r][c].o = cell;
                    }
                }
       }

       function _ondragstart(a){a.dataTransfer.setData("text/plain", a.target.id);}
     function _onDragOverEnabled(e){e.preventDefault();}

        function _applyRectangleConstraint(u,d,l,r){
            for(var i =0;i<u;i++) {
                for(c=0;c<columnas;c++) {//rellenado de la columna
                    grid[i][c].locked=true;
                }
            }
            for(var i =0;i<d;i++) {
                for(c=0;c<columnas;c++) {
                    grid[(filas-i)-1][c].locked=true;
                }
            }
            for(var i =0;i<l;i++) {
                for(rX=0;rX<filas;rX++) { //rellenado de la fila
                    grid[rX][i].locked=true;
                }
            }
            for(var i =0;i<r;i++) {
                for(rX=0;rX<filas;rX++) {
                    grid[rX][(columnas-i)-1].locked=true;

                }
            }
        }


    function _onDrop(e){

            var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
              if (isFirefox) {
                e.preventDefault();
              }

            var src = e.dataTransfer.getData("text");
            var sr = src.split("_")[1];
            var sc = src.split("_")[2];
            var dst = e.target.id;
            var dr = dst.split("_")[1];
            var dc = dst.split("_")[2];
           var ddx = Math.abs(parseInt(sr)-parseInt(dr));
           var ddy = Math.abs(parseInt(sc)-parseInt(dc));

           if (ddx > 1 || ddy > 1)
               {
               return;
           }

            var tmp = grid[sr][sc].src;
            grid[sr][sc].src = grid[dr][dc].src;
            grid[sr][sc].o.attr("src",grid[sr][sc].src);
            grid[dr][dc].src = tmp;
            grid[dr][dc].o.attr("src",grid[dr][dc].src);
             $("#movimientos-text").text(parseInt($("#movimientos-text").text()) + 1);
            _checkAndDestroy();

        }

        function _checkAndDestroy(){
            for (var r = 0; r < filas; r++){
                var prevCell = null;
                var figureLen = 0;
                var figureStart = null;
                var figureStop = null;

                for (var c=0; c< columnas; c++){
                    if (grid[r][c].locked || grid[r][c].isInCombo){
                        figureStart = null;
                        figureStop = null;
                        prevCell = null;
                        figureLen = 1;
                        continue;
                    }
                    if (prevCell==null){
                        prevCell = grid[r][c].src;
                        figureStart = c;
                        figureLen = 1;
                        figureStop = null;
                        continue;
                    } else {
                        var curCell = grid[r][c].src;
                        if (!(prevCell==curCell)){
                            prevCell = grid[r][c].src;
                            figureStart = c;
                            figureStop=null;
                            figureLen = 1;
                            continue;
                        } else{
                            figureLen+=1;
                            if (figureLen>=3){
                                validFigures+=1;
                                figureStop = c;
                                for (var ci=figureStart;ci<=figureStop;ci++){
                                    grid[r][ci].isInCombo=true;
                                    grid[r][ci].src=null;
                                }
                                prevCell=null;
                                figureStart = null;
                                figureStop = null;
                                figureLen = 1;
                                continue;
                            }
                        }
                    }

                }
            }
            for (var c=0; c< columnas; c++)
            {
                var prevCell = null;
                var figureLen = 0;
                var figureStart = null;
                var figureStop = null;

                for (var r = 0; r < filas; r++){
                    if (grid[r][c].locked || grid[r][c].isInCombo){
                        figureStart = null;
                        figureStop = null;
                        prevCell = null;
                        figureLen = 1;
                        continue;
                    } if (prevCell==null) {
                        prevCell = grid[r][c].src;
                        figureStart = r;
                        figureLen = 1;
                        figureStop = null;
                        continue;
                    } else {
                        var curCell = grid[r][c].src;
                        if (!(prevCell==curCell)){
                            prevCell = grid[r][c].src;
                            figureStart = r;
                            figureStop=null;
                            figureLen = 1;
                            continue;
                        }else{
                            figureLen+=1;
                            if (figureLen>=3){
                                validFigures+=1;
                                figureStop = r;
                                for (var ci=figureStart;ci<=figureStop;ci++){
                                    grid[ci][c].isInCombo=true;
                                    grid[ci][c].src=null;
                                }
                                prevCell=null;
                                figureStart = null;
                                figureStop = null;
                                figureLen = 1;
                                continue;
                            }
                        }
                    }

                }
            }

    var isCombo=false;
    for (var r = 0;r<filas;r++)
       for (var c=0;c<columnas;c++)
           if (grid[r][c].isInCombo)
       {
            isCombo=true;
            $("#score-text").text(parseInt($("#score-text").text()) + 10);
       }

       if (isCombo)
           _executeDestroy();
       }

   function _executeDestroy(){


        for (var r=0;r<filas-1;r++)
            for (var c=0;c<columnas-1;c++)
                if (grid[r][c].isInCombo)
                {

                    grid[r][c].o.animate({
                        opacity:0
                    },500);

                }

       $(":animated").promise().done(function() {

          _executeDestroyMemory();
   });
   }

   function _executeDestroyMemory() {

        for (var r=0;r<filas-1;r++)
        {
            for (var c=0;c<columnas-1;c++)
            {

                if (grid[r][c].isInCombo)
                {

                    grid[r][c].o.attr("src","")
               grid[r][c].isInCombo=false;

                    for (var sr=r;sr>=0;sr--)
                    {
                        if (sr==0) break;
                        if (grid[sr-1][c].locked)
                            break;

                            var tmp = grid[sr][c].src;
                              grid[sr][c].src=grid[sr-1][c].src;
                       grid[sr-1][c].src=tmp;

                    }

                }

            }

       }

   for (var r=0;r<filas-1;r++)
       {	for (var c = 0;c<columnas-1;c++)
           {
               grid[r][c].o.attr("src",grid[r][c].src);
               grid[r][c].o.css("opacity","1");
               grid[r][c].isInCombo=false;
               if (grid[r][c].src==null)
                   grid[r][c].respawn=true;

                if (grid[r][c].respawn==true){

                   grid[r][c].o.off("ondragover");
                   grid[r][c].o.off("ondrop");
                   grid[r][c].o.off("ondragstart");


                   grid[r][c].respawn=false;
                   grid[r][c].src=RandomDulce();
                   grid[r][c].locked=false;
                   grid[r][c].o.attr("src",grid[r][c].src);
                   grid[r][c].o.attr("ondragstart","_ondragstart(event)");
                   grid[r][c].o.attr("ondrop","_onDrop(event)");
                   grid[r][c].o.attr("ondragover","_onDragOverEnabled(event)");
               }
           }
       }
       _checkAndDestroy();
}
_initGame();