function login(myemail,password){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        res({email:myemail,age:34});
    },1000)  
})  
}

function videoList(email){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(["Video1","Video2","Video3"]);
        },2000); 
    });      
}

function singleVideo(){
   return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Video 2");
        },3000);
    });   
}

login("gyancv@gmail.com","12345")
.then((userDetails)=>{
    console.log(userDetails);
    return videoList();
})
.then(videos=>{
    console.log(videos);
    return singleVideo();
})
.then(video=>{
    console.log(video);
})
