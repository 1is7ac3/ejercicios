var canvas1=document.getElementById('canvash1');
var lienzo=canvas1.getContext('2d');
var ancho=canvas1.width;
var alto=canvas1.height;
var number1=document.getElementById('numberh1');
var number2=document.getElementById('numberh2');
var yi=ancho/2;
var xi=alto/2;
var color='#FFD000';
var tecla={
	UP:38,DOWN:40,LEFT:37,RIGHT:39
};
document.addEventListener('keydown',DibujoFlechas);
canvas1.addEventListener('mousedown',DibujoMouse);
function DibujarLinea(color,xi,yi,xf,yf,number2)
{
	var anchoLinea=parseInt(number2.value);
	if(anchoLinea<1)
	{
		anchoLinea=1;
	}
	console.log(anchoLinea);
	lienzo.beginPath();
	lienzo.lineaWidth=anchoLinea;
	lienzo.strokeStyle=color;
	lienzo.moveTo(xi,yi);
	lienzo.lineTo(xf,yf);
	lienzo.stroke();
	lienzo.closePath();
}
function DibujoMouse(result)
{
	x=result.x-12;
	y=result.y-55;
	canvas1.addEventListener('mouseup',FinLinea);
	function FinLinea(result)
	{
		xf=result.x-12;
		yf=result.y-55;
		DibujarLinea(color,x,y,xf,yf,number2);
	}
}
function DibujoFlechas(result)
{
	var mov=parseInt(number1.value);
	if(mov<1||mov>ancho/2)
	{
		mov=5;
	}
	switch(result.keyCode)
	{
		case tecla.DOWN:
			xf=xi+mov;
			yf=yi;
			DibujarLinea(color,yi,xi,yf,xf,number2);
			xi=xf;
			break;
		case tecla.UP:
			xf=xi-mov;
			yf=yi;
			DibujarLinea(color,yi,xi,yf,xf,number2);
			xi=xf;
			break;
		case tecla.LEFT:
			xf=xi;
			yf=yi-mov;
			DibujarLinea(color,yi,xi,yf,xf,number2);
			yi=yf;
			break;
		case tecla.RIGHT:
			yf=yi+mov;
			xf=xi;
			DibujarLinea(color,yi,xi,yf,xf,number2);
			yi=yf;
			break;
	}
}