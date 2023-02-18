NumDynamic("span0",10,221);
function NumDynamic(ID,speed,value){
    var span0 = document.getElementById(ID);
    if(value>0){
        var num = 0;
        var t = setInterval(function(){
           num++;
           span0.innerText = num;
                if(num==value){
                    clearInterval(t);
                }       
        },speed);
    }else{
        span0.innerText = value;
    }
}	

NumDynamic("span1",10,331);
function NumDynamic(ID,speed,value){
    var span1 = document.getElementById(ID);
    if(value>0){
        var num = 0;
        var t = setInterval(function(){
           num++;
           span1.innerText = num;
                if(num==value){
                    clearInterval(t);
                }       
        },speed);
    }else{
        span1.innerText = value;
    }
}	


NumDynamic("span2",10,123);
function NumDynamic(ID,speed,value){
    var span2 = document.getElementById(ID);
    if(value>0){
        var num = 0;
        var t = setInterval(function(){
           num++;
           span2.innerText = num;
                if(num==value){
                    clearInterval(t);
                }       
        },speed);
    }else{
        span2.innerText = value;
    }
}	
