/**
 * 
 */
var number1=document.getElementById('numberh1');
var button1=document.getElementById('buttonh1');
button1.addEventListener('click',imprimirLista);

function imprimirLista()
{
	var nro=parseInt(number1.value);
	for(i=1; i<=nro; i++)
	{
		if (i%5==0||i%3==0)
		{
			if(i%3==0 && i%5==0)
			{
				document.write('Fizz Buzz');
			}else if(i%3==0 && i%5!=0)
			{
				document.write('Fizz');
			}else{
				document.write('Buzz');
			}
		}else{
			document.write(i);
		}
		document.write('<br/>')
	}
}