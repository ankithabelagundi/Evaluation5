 function createCountdown(seconds,onTick,oncomplete){
    let remaining = seconds;
    let timerId=null;
    let endTime= Date.now()+seconds*1000;
    let paused=false;
    function tick(){
        const now=Date.now();
        remaining=Math.max(0,Math.ceil((endTime - now)/1000));
        if (remaining>0){
            onTick(remaining);
            timerId= setTimeout(tick,1000);
        }else{
                onclick(0);
                oncomplete();
            }
        }
        function pause(){
            if(!paused){
clearTimeout(timerId);
remaining=Math.max(0,Math.ceil((endTime-Date.now())/1000));
paused=true;
            }
        }
        function resume(){
            if(paused&&remaining>0){
                endTime=Date.now()+remaining*1000;
                paused=false;
                tick();
            }
        }
        tick();
        return{
            pause,resume
        };
    }

 