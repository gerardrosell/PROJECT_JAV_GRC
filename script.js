var joc_acabat=false;


$( document).ready(function(){
	this.reset1=function(){
		contador=0;
		clearInterval(refreshIntervalId1);
		refreshIntervalId1=setInterval(renderTimer,1000);
		joc_acabat=false;
	}

	reset1=this.reset1;
	var contador=0;

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
		ctx.fillStyle="#000000";
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


		if(contador==600){
			//contador=60;
			ctx.fillStyle="#000000";
			cleardigit(pos1);
			cleardigit(pos2);
			cleardigit(pos3);
			cleardigit(pos4);

			joc_acabat=true;
		}
		if(joc_acabat){clearInterval(refreshIntervalId1)}
		contador=contador+1;
	};

	var refreshIntervalId1 = setInterval(renderTimer,1000);	
	
});

function resetJoc(){
	new reset1();
}

function final(){
	joc_acabat=true;
}
