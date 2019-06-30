window.addEventListener('load',function(){
    var focus=document.querySelector('.focus');
    var z=document.querySelector('.z');
    var m=document.querySelector('.m');
    var ul=focus.querySelector('ul');
    var ol=focus.querySelector('ol');
    var focusWidth=focus.offsetWidth;
    focus.addEventListener('mouseenter',function(){
        z.style.display='block';
        m.style.display='block';
        clearInterval(timer);
    })
    focus.addEventListener('mouseleave',function(){
        z.style.display='none';
        m.style.display='none';
        timer=setInterval(function(){
            m.click();
        },2000);
    })
    for(var i=0;i<ul.children.length;i++) {
        var li=document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click',function(){
            for(var i=0;i<ol.children.length;i++) {
                ol.children[i].className='';
            }
            this.className='current';
            var index=this.getAttribute('index');
            num=index;
            circle=index;
            animation(ul,-index*focusWidth);
        })

    }
    ol.children[0].className='current';
   var lili= ul.children[0].cloneNode(true);
   ul.appendChild(lili);
   var num=0;
   var circle=0;
   var flag=true;
   m.addEventListener('click',function(){
       if(flag){
           flag=false;
        if(num==4){
            ul.style.left=0+'px';
            num=0;
        }
        num++;
        animation(ul,-num*focusWidth,function(){
            flag=true;
        });
        circle++;
        if(circle==ol.children.length){
            circle=0;
        }
        for(var i=0;i<ol.children.length;i++) {
            ol.children[i].className='';
          
            
        }
        ol.children[circle].className='current';
       }
   })
   z.addEventListener('click',function(){
    if(flag){
        flag=false;
        if(num==0){
            num=ul.children.length-1;
            ul.style.left=-num*focusWidth+'px';
            
        }
        num--;
        animation(ul,-num*focusWidth,function(){
            flag=true;
        });
        circle--;
        if(circle<0){
            circle=ol.children.length-1;
        }
        for(var i=0;i<ol.children.length;i++) {
            ol.children[i].className='';
           
        }
        ol.children[circle].className='current';
    }
})
var timer=setInterval(function(){
    m.click();
},2000);
})