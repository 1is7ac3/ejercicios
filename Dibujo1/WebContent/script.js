var button1=document.getElementById('buttonh1');
var number1=document.getElementById('numberh1');
var canvas1=document.getElementById('canvash1');
var lienzo=canvas1.getContext('2d');
var ancho=canvas1.width;
button1.addEventListener('click',DibujoClick);

function DibujarLinea(color,xi,yi,xf,yf)
{
	lienzo.beginPath();
	lienzo.strokeStyle=color;
	lienzo.moveTo(xi,yi);
	lienzo.lineTo(xf,yf);
	lienzo.stroke();
	lienzo.closePath();
}
function DibujoClick()
{
	var va=number1.value;
	var yi=0;
	var xf=10;
	var color='#FFD000';
	while(yi<ancho)
	{
		DibujarLinea(color,0,yi,xf,ancho);
		DibujarLinea(color,yi,0,ancho,xf);
		yi=yi+(ancho/va);
		xf=xf+(ancho/va);
	}
	DibujarLinea(color,1,1,1,(ancho-1));
	DibujarLinea(color,1,(ancho-1),(ancho-1),(ancho-1));
	DibujarLinea(color,1,1,(ancho-1),1);
	DibujarLinea(color,(ancho-1),1,(ancho-1),(ancho-1));
}