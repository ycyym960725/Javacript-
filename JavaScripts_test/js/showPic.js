window.onload=function(){
	preparePlaceholder();
	prepareGallery();
}

 function inserAfter(newElement,targetElement){
 	var parent=targetElement.parentNode;
 	if(parent.lastChild==targetElement){
 		parent.appendChild(newElement);
 	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
 	}
 }
 
 function preparePlaceholder(){
	if(!document.createElement)return false;
	if(!document.createTextNode)return false;
	if(!document.getElementById)return false;
	if(!document.getElementById("imagegallery"))return false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("src","img/curve-ahead-3-1384097-639x961.jpg");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("alt","my image gallery");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var desctext=document.createTextNode("choose an image!");
	description.appendChild(desctext);
	var gallery=document.getElementById("imagegallery");
	inserAfter(placeholder,gallery);
	inserAfter(description,placeholder);
}

function prepareGallery(){
	if(!document.getElementById||!document.getElementsByTagName||!document.getElementById("imagegallery"))return false;	
	var imagegallery=document.getElementById("imagegallery");
	var links=imagegallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return showPic(this);
		}
	}
}
function showPic(obj){
	if(!document.getElementById("placeholder"))return false;
	var placeholder=document.getElementById("placeholder");
	var source=obj.getAttribute("href");
	placeholder.setAttribute("src",source);
	if(!document.getElementById("description"))return false;
	if(obj.getAttribute("title")){
		var text=obj.getAttribute("title");
	}else{
		var text="";
	}
		var description=document.getElementById("description");
		if(description.firstChild.nodeType==3){
			description.firstChild.nodeValue=text;
		}
	return false;
}
