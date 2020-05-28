window.addEventListener('load',function(){
	var preview_img=document.querySelector('.preview_img');
	var mask=document.querySelector('.mask');
	var big=document.querySelector('.big');
	preview_img.addEventListener('mouseover',function(){
		mask.style.display='block';
		big.style.display='block';
	})
	preview_img.addEventListener('mouseout',function(){
		mask.style.display='none';
		big.style.display='none';
	})
	preview_img.addEventListener('mousemove',function(e){
		var x=e.pageX-this.offsetLeft;
		var y=e.pageY-this.offsetTop;
		var maskX=x-mask.offsetWidth/2;
		var maskY=y-mask.offsetHeight/2;
		var maxw=preview_img.offsetWidth-mask.offsetWidth;
		var maxh=preview_img.offsetHeight-mask.offsetHeight;
		if(maskX<=0){
			maskX=0;
		}
		else if(maskX>=maxw){
			maskX=maxw;
		}
		if(maskY<=0){
			maskY=0;
		}
		else if(maskY>=maxh){
			maskY=maxh;
		}
		mask.style.left=maskX+'px';
		mask.style.top=maskY+'px';
		var bigImg=document.querySelector('.bigImg');
		var bigMax=bigImg.offsetWidth-big.offsetWidth;
		var bigX=maskX*bigMax/maxw;
		var bigY=maskY*bigMax/maxh;
		bigImg.style.left=-bigX+'px';
		bigImg.style.top=-bigY+'px';
	})
	 
})