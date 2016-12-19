function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		var classname=element.className;
		element.className+=" ";
		element.className+=value;
	}
}
addLoadEvent(addClass);