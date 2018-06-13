var  oLi = document.getElementsByTagName("li")
for(var i =0;i<oLi.length;i++){
	oLi[i].index = i ;
	oLi[i].onclick=function(){
		for(var y =0;y<oLi.length;y++){
			oLi[y].style.background='green';
		}
		oLi[index].style.background="red";
		console.log(1)
		console.log(2)
		console.log(3)
	}
}