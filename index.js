var  oLi = document.getElementsByTagName("li")
for(var i =0;i<oLi.length;i++){
	oLi[i].index = i ;
	oLi[i].onclick=function(){
		for(var y =0;y<oLi.length;y++){
			oLi[y].className='';
		}
		oLi[this.index].className = "active"
		console.log(1)
	}
}