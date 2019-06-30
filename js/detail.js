window.addEventListener('load',function(){
    var preview=document.querySelector('.preview-img');
    var mask=document.querySelector('.mask');
    var big=document.querySelector('.big');
    var bigimg=document.querySelector('.bigimg');
    preview.addEventListener('mouseover',function(){
        mask.style.display='block';
        big.style.display='block';
    })
    preview.addEventListener('mouseout',function(){
        mask.style.display='none';
        big.style.display='none';
    })
    preview.addEventListener('mousemove',function(e){
       var x=e.pageX-this.offsetLeft;
       var y=e.pageY-this.offsetTop;
       var maskx=x-mask.offsetWidth/2;
       var masky=y-mask.offsetHeight/2;
       var maxx=preview.offsetWidth-mask.offsetWidth;
       var maxy=preview.offsetHeight-mask.offsetHeight;
       if(maskx<=0){
        maskx=0;
       }else if(maskx>=maxx) {
        maskx=maxx;
       }
       if(masky<=0){
        masky=0;
       }else if(masky>=maxy) {
        masky=maxy;
       }
       mask.style.left=maskx+'px';
       mask.style.top=masky+'px';
       var bigimgx=maskx*(bigimg.offsetWidth-big.offsetWidth)/maxx;
       var bigimgy=masky*(bigimg.offsetHeight-big.offsetHeight)/maxy;
       bigimg.style.left=-bigimgx+'px';
       bigimg.style.top=-bigimgy+'px';


    })
})