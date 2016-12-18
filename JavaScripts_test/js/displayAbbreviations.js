addLoadEvent(displayAbbreviations);
function displayAbbreviations(){
	if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
	//取得所有缩略词
	var dlist=document.createElement("dl");
	var abbreviations=document.getElementsByTagName("abbr");
	//遍历这些缩略词
	if(abbreviations.length<1)return false;
	var defs=new Array();
	for(var i=0;i<abbreviations.length;i++){
		var definition=abbreviations[i].getAttribute("title");
		var Key=abbreviations[i].lastChild.nodeValue;
		defs[Key]=definition;
	}
	//创建自定义表
	var dlist = document.createElement("dl");
	//遍历定义
	for(Key in defs){
		var definition=defs[Key];
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(Key);
		dtitle.appendChild(dtitle_text);
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把它们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if(dlist.childNodes.length<1)return false;
	//创建标题
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}
