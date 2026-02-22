const limiter=createRateLimiter(2,5000);

function createRateLimiter(limit,interval){
    let count =0;
    setInterval(()=>{
        count=0;
    },interval);
    return function(){
        if(count<limit){
            count++
            return "Allowed";

        }else{
            return "Rate limit exceeded";
        }
    }
}
console.log(limiter());
console.log(limiter());
console.log(limiter());