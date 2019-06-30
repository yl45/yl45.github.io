function animation(obj,target,callback){
    clearInterval(obj.time);
    obj.time=setInterval(function(){
        var step=(target-obj.offsetLeft)/10;
        step=step>=0?Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft==target){
            clearInterval(obj.time);
            if(callback) {
                callback();
            }
        }else{
            obj.style.left=obj.offsetLeft+step+'px';
        }
       
    },15);
}