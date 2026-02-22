function mySetInterval(callback,delay){
    let timerId;
    let isCleared=false;
    function run(){
        if(isCleared)return;
        callback();
        timerId=setTimeout(run,delay)
    }
    timerId=setTimeout(run,delay);
    return function myClearInterval(){
        isCleared=true;
        cleareTimeout(timerId);
    };
}

const stop = mySetInterval(()=>{
    console.log("Running...");
},1000);
setTimeout(()=>stop(), 5000);