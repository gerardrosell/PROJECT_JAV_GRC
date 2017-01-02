var joc_acabat=false;


$( document).ready(function(){
	this.reset1=function(){
		contador=60;
		clearInterval(refreshIntervalId1);
		refreshIntervalId1=setInterval(renderTimer,1000);
		joc_acabat=false;
	}

	reset1=this.reset1;
	var contador=60;

	var canvas=document.getElementById("canvas1");
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0,0,canvas.width,canvas.height);

	function digit(pos,num){		
		if(num==0){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//4
			ctx.fillRect(pos+15, 60, 5, 30);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);

		} else if(num==1){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);

		} else if(num==2){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//4
			ctx.fillRect(pos+15, 60, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else if(num==3){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else if(num==4){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else if(num==5){
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else if(num==6){
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//4
			ctx.fillRect(pos+15, 60, 5, 30);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else if(num==7){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);

		} else if(num==8){
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//4
			ctx.fillRect(pos+15, 60, 5, 30);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		} else {
			//1
			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);

		}
		ctx.stroke();
	}

	function cleardigit(pos){

			ctx.fillRect(pos+50, 25, 5, 30);
			//2
			ctx.fillRect(pos+50, 60, 5, 30);
			//3
			ctx.fillRect(pos+20, 90, 30, 5);
			//4
			ctx.fillRect(pos+15, 60, 5, 30);
			//5
			ctx.fillRect(pos+15, 25, 5, 30);
			//6
			ctx.fillRect(pos+20, 20, 30, 5);
			//7
			ctx.fillRect(pos+20, 55, 30, 5);
		}


	function renderTimer(){
		var pos1=0;
		var pos2=pos1+50;
		var pos3=pos2+55;
		var pos4=pos3+50;
		var pospunts=pos3+5;
		//separa els 4 dígits
		var min=parseInt(contador/60);
		var dm=parseInt(min/10);
		var um=min%10;
		var seg=contador%60;
		var ds=parseInt(seg/10);
		var us=seg%10;

		//buida els dígits
		ctx.fillStyle="#004400";
		cleardigit(pos1);
		cleardigit(pos2);
		cleardigit(pos3);
		cleardigit(pos4);

		//punts
		ctx.fillStyle="#FFFFFF";
		ctx.fillRect(pospunts, 45, 5, 5);
		ctx.fillRect(pospunts, 65, 5, 5);
		ctx.stroke();

		//pinta els nous dígits
		digit(pos1,dm);
		digit(pos2,um);
		digit(pos3,ds);
		digit(pos4,us);


		if(contador==0){
			//contador=60;
			ctx.fillStyle="#004400";
			cleardigit(pos1);
			cleardigit(pos2);
			cleardigit(pos3);
			cleardigit(pos4);

			joc_acabat=true;
		}
		if(joc_acabat){clearInterval(refreshIntervalId1)}
		contador=contador-1;
	};

	var refreshIntervalId1 = setInterval(renderTimer,1000);	
	
});

$( document ).ready(function() {
	this.reset2=function(){
		contador=6100;
		clearInterval(refreshIntervalId2);
		refreshIntervalId2=setInterval(renderCamp,20);
		joc_acabat=false;
		bola.position.x = (canvas2.width/2);
        bola.position.y = (canvas2.height/2);
		marcador1=0;
		marcador2=0;
		document.getElementById("marcador2").innerHTML=marcador2;
		document.getElementById("marcador1").innerHTML=marcador1;
	}
	reset2=this.reset2;
	var contador=6100;
	var marcador1=0;
	var marcador2=0;
    var Pala = function(x_start,y_end){
        this.color_pala = "#000000";
        this.position = {x:x_start, y:0};
        this.size = {w:10, h:100};
        this.y_end = y_end;
    };
    Pala.prototype.render = function(ctx2){
        ctx2.fillStyle = this.color_pala;
        ctx2.fillRect(   this.position.x,
                        this.position.y,
                        this.size.w,
                        this.size.h);
    };
    Pala.prototype.goUp = function(){
        if(this.position.y >= 0) this.position.y -= 10;
    };
    Pala.prototype.goDown = function(){
        if(this.position.y+this.size.h <= this.y_end) this.position.y += 10;
    };
    Pala.prototype.setKeys = function(keyUp, keyDown){
        var _this = this;
        $(window).keydown(function(event) {
            //console.log("Key pressed is: " +event.which);
            if ( event.which == keyUp ) {
                _this.goUp()
            }else if( event.which == keyDown ){
                _this.goDown();
            }
        });
    }

    var Bola = function(start_pos_x, start_pos_y){
        this.position = {x:start_pos_x, y:start_pos_y};
        this.color_bola = "#FFFF00";
        this.size = {w:12, h:12};
        this.angle =  120;
    }
    Bola.prototype.render = function(ctx2){
        ctx2.fillStyle = this.color_bola;
        ctx2.fillRect(   this.position.x,
                        this.position.y,
                        this.size.w,
                        this.size.h);
    }

	var canvas2 = document.getElementById("canvas2");
	var ctx2 = canvas2.getContext("2d");
	var pala_L = new Pala(12,canvas2.height);
	var pala_R = new Pala(canvas2.width-22,canvas2.height);

	pala_L.setKeys(81,65); // Keys: Q, A
    pala_R.setKeys(87,83); // Keys: W, S
	
	var bola = new Bola(canvas2.width/2, canvas2.height/2);

	function updateBola(){

        if(bola.position.y < 5){
        	bola.angle=180-bola.angle;
        } else if(bola.position.y > canvas2.height-5-bola.size.h){
            bola.angle=180-bola.angle;
        }

        if(bola.position.x < 25){
        	if(bola.position.y > pala_L.position.y-bola.size.h && bola.position.y < pala_L.position.y + pala_L.size.h){bola.angle=(180-bola.angle)+180;}
        } else if(bola.position.x > canvas2.width-25-bola.size.w){
        	if(bola.position.y > pala_R.position.y-bola.size.h && bola.position.y < pala_R.position.y + pala_R.size.h){bola.angle=(180-bola.angle)+180;}
        }

        bola.position.x += Math.sin(bola.angle * Math.PI / 180.0)*2;
        bola.position.y += Math.cos(bola.angle * Math.PI / 180.0)*2;

        //quan la bola ha sortit del camp
        if(bola.position.x < 20){
        	bola.position.x = (canvas2.width/2);
        	bola.position.y = (canvas2.height/2);
        	//marcador equip 2 + 1
        	marcador2+=1
        	document.getElementById("marcador2").innerHTML=marcador2;
        	bola.angle=Math.floor(Math.random()*120+30);
        	if(bola.angle==0 || bola.angle==180){
        		bola.angle+=30;
        	}


        } else if(bola.position.x > canvas2.width-20-bola.size.w){
        	bola.position.x = (canvas2.width/2);
        	bola.position.y = (canvas2.height/2);
        	//marcador equip 1 + 1
        	marcador1+=1;
        	document.getElementById("marcador1").innerHTML=marcador1;
        	bola.angle=Math.floor(Math.random()*120+210);
        	if(bola.angle==0 || bola.angle==180){
        		bola.angle+=30;
        	}
        }
    }

	function renderCamp(){

		ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
		
	//pinta campo
		var img = document.getElementById("imatge")
	    var pat = ctx2.createPattern(img, "repeat");
	    ctx2.rect(0, 0, canvas2.width,canvas2.height);
	    ctx2.fillStyle = pat;
	    ctx2.fill();
	    ctx2.fillStyle = "#000000";
	    ctx2.fillRect(399,0,2,400);	
	    ctx2.beginPath();
		ctx2.arc(400, 200, 80, 0, 2 * Math.PI);
		ctx2.arc(400, 200, 81, 0, 2 * Math.PI);
		ctx2.stroke();


		//pinta pala
		updateBola();
		
		pala_L.render(ctx2);
		pala_R.render(ctx2);
		bola.render(ctx2);
		contador-=2;
		if(contador==0){
			joc_acabat=true;
			if(joc_acabat){clearInterval(refreshIntervalId2);}
			ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
			
			//pinta campo
			ctx2.fillStyle = "#444444";
		    ctx2.fillRect(0, 0, canvas2.width,canvas2.height);
		    ctx2.font = "80px Verdana";
			ctx2.fillStyle = "#FFFF00";
			ctx2.fillText("Final del Joc!", 185,170);
		}
	};

	var refreshIntervalId2 = setInterval(renderCamp,20);
	
	
});

function resetJoc(){
	new reset1();
	new reset2();
}
