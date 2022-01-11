function calculate() 
{
	let c=parseFloat(document.getElementById("c").value);
	let cpp=document.getElementById("cpp").value;
	let java=document.getElementById("java").value;
	let datastructure=document.getElementById("datastructure").value;
	let grade="";
	

	let totalmarks=c+parseFloat(cpp)+parseFloat(java)+parseFloat(datastructure);

	let percentage=((totalmarks*100)/400);
	
	if(percentage>=80 && percentage<=100)
	{
		grade="A";
	}
	else if(percentage>=60 && percentage<=79)
	{
		grade="B";
	}
	else if(percentage>=40 && percentage<=59)
	{
		grade="C";
	}
	else
	{
		grade="F";
	}

	if(percentage>40)
	{
		document.getElementById("message").innerHTML= " out of 400 your total is " + totalmarks+" and  percentage is "+percentage +" %" +" . your grade is " +grade+".<br>you are pass.";
	}
	else
	{
		document.getElementById("message").innerHTML= " out of 400 your total is " + totalmarks+" and percentage is "+percentage +" %" +" . your grade is " +grade+".<br>you are fail.";
	}
	 
	
}