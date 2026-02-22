const tasks=[
    ()=>Promise.resolve("Task 1"),
    ()=>Promise.resolve("Task 1")
];
async function runSequential(tasks,delay) {
    const result=[];
    for(let i=0;i<tasks.length; i++){
        try {
            const result = await tasks[i]();
            results.push(result);
        } catch (error) {
            throw error
        }
        
    }
    return results;
}

runSequential(tasks,1000)
.then(result=> console.log(result))
.catch(err=>console.log(err));