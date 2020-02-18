window.onload = function(){
	var arrow = document.querySelector('.arrow');
	var header = document.querySelector('#header');
	var liNodes = document.querySelectorAll('#nav > ul > li');
	var upNodes = document.querySelectorAll('#nav > ul > li .up');
	var content = document.querySelector('#content');
	var contentLi = document.querySelectorAll('#content > .list >li');
	var contentUl = document.querySelector('#content > .list');
	var aboutUl = document.querySelectorAll('.about > .about3 > .item > ul')
	var timer;
	var team3 = document.querySelector('.team > .team3')
	var teamLi = document.querySelectorAll('.team > .team3 >li')
	
	
	
	
	
	
	//牧马城市
	canvasAin()
	function canvasAin(){
		var myCanvas = null;
		var timer1 = null;
		var timer2 = null;
		//滑过显示效果
		for(var i = 0 ; i < teamLi.length; i++){
			
			teamLi[i].onmouseenter = function(){
				for(var j = 0 ; j < teamLi.length ; j++){
					teamLi[j].style.opacity = '.5';
				}
				this.style.opacity = '1'
				addCanvas()
				myCanvas.style.left = this.offsetLeft+'px';
				myCanvas.style.top = 0+'px';
				
			}
			 
			
		}
		
		team3.onmouseleave = function(){
			for(var j = 0 ; j < teamLi.length ; j++){
				teamLi[j].style.opacity = '1';
				
			}
			removeCanvas()
		}
		
		//
		
		function addCanvas(){
			if(!myCanvas){
				myCanvas = document.createElement('canvas');
				myCanvas.width = 236;
				myCanvas.height = 448;
				myCanvas.style.position = 'absolute';
				team3.appendChild(myCanvas);
				bubble()
			}
			
		}
		
		function removeCanvas(){
			myCanvas.remove();
			myCanvas = null;
			clearInterval(timer1);
			clearInterval(timer2);
		}
		
		
		
		function bubble(){
			var painting = myCanvas.getContext('2d');
			var arr = []
	
			timer1 = setInterval(function(){
	
			  painting.clearRect(0,0,myCanvas.width,myCanvas.height);
			  for(var i = 0; i < arr.length ; i++){
				arr[i].deg += 5
				painting.beginPath();
				painting.fillStyle = 'rgba('+ arr[i].red +','+ arr[i]. green+','+ arr[i].blue +','+ arr[i].a +')';
				arr[i].x = arr[i].startX + Math.sin(arr[i].deg * Math.PI / 180) * arr[i].scale;
				arr[i].y = arr[i].startY - (arr[i].deg * Math.PI / 180) * arr[i].scale;
				if(arr[i].y < 50){
				  arr.splice(i,1)
				}
				painting.arc(arr[i].x,arr[i].y,arr[i].r,0,2*Math.PI);
				painting.fill()
			  }
	
			},20)
	
	
			timer2 = setInterval(function(){
			  var startX = Math.floor(Math.random()*myCanvas.width);
			  var r = Math.floor(Math.random()*6+5);
			  var startY = myCanvas.height + r;
			  var red = Math.floor(Math.random()*256);
			  var green = Math.floor(Math.random()*256);
			  var blue = Math.floor(Math.random()*256);
			  var a = 1;
			  var deg = 0;
			  var scale = Math.floor(Math.random()*30+30);
			  
			  arr.push({
				x:startX,
				y:startY,
				r:r,
				red:red,
				green:green,
				blue:blue,
				a:a,
				startX:startX,
				startY:startY,
				deg:deg,
				scale:scale
			  })
			},100)
		}
		
		
		
		
		
		
		
		
		
		
		
	}
	
	//轮播图
	home3d()
	function home3d(){
		var iconList = document.querySelectorAll('.iconList > li');
		var homeList = document.querySelectorAll('.homeList > li');
		var oldIndex = 0;
		var autoIndex = 0;
		var timer;
		
		for(var i = 0;i < iconList.length; i++){
			iconList[i].index = i;
			
			iconList[i].onclick = function(){
				clearInterval(timer)
				for(var j = 0 ;j < iconList.length; j++){
					iconList[j].className = ''
				}
				this.className = 'active';
				currentIndex = this.index;
				if(currentIndex > oldIndex){
					homeList[oldIndex].className = 'leftHide';
					homeList[currentIndex].className = 'rightShow'
				}else{
					homeList[oldIndex].className = 'rightHide';
					homeList[currentIndex].className = 'leftShow'
				}
					oldIndex = currentIndex;	
					autoIndex = currentIndex;
					auto()
			}
			
		}
		
		
		auto()
		function auto(){
			
			timer = setInterval(function(){
				autoIndex++;
				if(autoIndex === homeList.length){
					autoIndex = 0
				}
				homeList[oldIndex].className = 'leftHide';
				homeList[autoIndex].className = 'rightShow';
				
				for(var j = 0 ;j < iconList.length; j++){
					iconList[j].className = ''
				}
				iconList[autoIndex].className = 'active';
				oldIndex = autoIndex
			},3000)
			
			
		}
		
		
		
		
	}
	
	
	
	//图片炸裂
	picBoom()
	function picBoom(){
		for(var i = 0 ; i < aboutUl .length ; i++){
			changeImg(aboutUl[i])			
		}
		
		function changeImg(aboutUl){
			var w = aboutUl.offsetWidth/2;
			var h = aboutUl.offsetHeight/2;
			var imgUrl = aboutUl.dataset.src;
			for(var i = 0 ; i < 4 ; i++){
				var liNode = document.createElement('li');
				var imgNode = new Image()
				imgNode.src = imgUrl
				
				liNode.style.width = w + 'px';
				liNode.style.height = h + 'px';
				
				imgNode.style.left =-w *(i % 2) + 'px';
				imgNode.style.top =-Math.floor(i / 2) * h + 'px';
				
				aboutUl.appendChild(liNode)
				liNode.appendChild(imgNode)
			
			}
			var imgNodes = aboutUl.querySelectorAll('img');
			aboutUl.onmouseenter = function () {
			    imgNodes[0].style.top = h + 'px';
			    imgNodes[1].style.left = -2 * w + 'px';
			    imgNodes[2].style.left = w + 'px';
			    imgNodes[3].style.top = -2 * h + 'px';
			};
			aboutUl.onmouseleave = function () {
			    imgNodes[0].style.top = 0;
			    imgNodes[1].style.left = -w + 'px';
			    imgNodes[2].style.left = 0;
			    imgNodes[3].style.top = -h + 'px';
			}
		
		}
		
		
		
		
	}
	
	
	//滚轮事件
	document.addEventListener('mousewheel',function(e){
		clearTimeout(timer);
		timer = setTimeout(function(){
			scrollMove(e)
		},200)
	})
	document.addEventListener('DOMMouseScroll',function(e){
		clearTimeout(timer);
		timer = setTimeout(function(){
			scrollMove(e)
		},200)
	})
	
	var num = 0;
	
	function scrollMove(e){
		e = e || event;
		var flag;
		if(e.wheelDelta){
			if(e.wheelDelta > 0 ){
				flag = true;
			}else if(e.mousewheel < 0){
				flag = false;
			}
		}else if(e.detail){
			if(e.detail > 0 ){
				flag = false;
			}else if(e.detail < 0){
				flag = true;
			}
		}
		
		if(flag){
			
			if(num > 0){
				num--
			}
			move(num)
			
		}else{
			if(num < liNodes.length - 1){
				num++
			}
			move(num)
			
		}
		
		
	}
	
	
	
	//设置内容高度
	contentBind()
	function contentBind() {
		content.style.height = document.documentElement.clientHeight - header.offsetHeight + 'px';
		for(var i = 0; i < contentLi.length ; i++){
			contentLi[i].style.height = document.documentElement.clientHeight - header.offsetHeight + 'px';
		}
	}
	// 页面初始化
	upNodes[0].style.width = '100%';
	arrow.style.left = liNodes[0].getBoundingClientRect().left + liNodes[0].offsetWidth/2 - arrow.offsetWidth/2 + 'px';
	
	//三角动态
	for(var i = 0 ; i < liNodes.length ; i++){
		liNodes[i].index = i
		liNodes[i].onclick = function(){
			num = this.index
			move(num);
		}
	}
	
	//导航动态函数
	function move(num){
		for(var j = 0 ; j < upNodes.length ; j++){
			upNodes[j].style.width = '';
		}
		
		upNodes[num].style.width = '100%';
		arrow.style.left = liNodes[num].getBoundingClientRect().left + liNodes[num].offsetWidth/2 - arrow.offsetWidth/2 + 'px';
		contentUl.style.top = - num * contentLi[num].offsetHeight + 'px';
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}