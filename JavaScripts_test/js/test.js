window.onload=function (){
	var div=document.getElementById("test_div");
	var para=document.createElement("p");
	var text1=document.createTextNode(" This is");
	var text2=document.createTextNode(" content.");
	var text3=document.createTextNode(" my ");
	var em=document.createElement("em");
	em.appendChild(text3);
	para.appendChild(text1);
	para.appendChild(em);
	para.appendChild(text2);
	div.appendChild(para);
}
