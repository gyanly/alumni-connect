const url = "http://dataservice.accuweather.com/currentconditions/v1/202396?apikey=jsRNJ5WMsX44DDPA1bNLqEURCkoS2DSX";
async function getData(){    
    const response = await fetch(url);  

    const data = await response.json();

    return data;  
}

getData().then((data)=>{
    console.log(data);
});





























































// function getData() {
//     return new Promise((res,rej)=>{
//         let data = "gfsdgfsdgfs gdfg";
//         if(data){
//             res(data);
//         } else {
//             rej("No Data Available");
//         }
//     });
// }

// getData()
// .then((mydata)=>{
//     console.log(mydata);
// })
// .catch((err)=>{
//     console.log(err);
// })




















// // console.log("Starting")

// function login(email,pass){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res({success:true,myEmail:email,age:34});
//        },2000); 
//     });
      
// }
// function videoList(email){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(email){
//                res(['Video1', 'Video2', 'Video3']);
//             }else {
//                 rej(new Error("Invalid Email"));
//             }
//         },1000);
//     });
    
// }

// function getVideo(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Video1");
//         },1500);
//     });
// }

// login("gyancv@gmail.com","12345")
// .then((userDetails)=>{
//     console.log(userDetails);
//     return videoList(userDetails.myEmai);
// })
// .then((videoList)=>{
//     console.log(videoList);
//     return getVideo();
// })

// .then((video)=>{
//     console.log(video);
// })
// .catch((err)=>{
//     console.log(err);
// })

// login("gyancv@gmail.com","12345",(userData)=>{
//     console.log(userData);
//     videoList(userData.myEmail,(videos)=>{
//         console.log(videos);
//         getVideo((video)=>{
//             console.log(video);
//         });
//      })
// });

// console.log("Finished");



























// function login(email,pass){
//     return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res({myemail:email,age:34});
//     },1500);
// });    
// }

// function videoList(email){

//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//         if(email){
//             res(['Video1', 'Video2', 'Video3']);
//         }else{
//             rej("No email provided");
//         }
//         },2000);
//     }); 
  
// }

// function singleVideo(cb){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Video1");
//         },2500);
//     });
// }

// login("gyancv@gmail.com","123345")

// .then((userDetails)=>{
//     console.log(userDetails);
//   return videoList(userDetails.email)
// })
// .then((videos)=>{
//     console.log(videos);
//     return singleVideo();
// })
// .then((vidoe)=>{
//     console.log(vidoe);
// }).catch((err)=>{
//     console.log(err);
// })

// login("gyancv@mgail.com","12345",(userDetails)=>{
//     console.log(userDetails);
//     videoList(userDetails.myemail,(vidoes)=>{
//         console.log(vidoes);
//         singleVideo((video)=>{
//             console.log(video);
//         })
//     })
// })

// console.log("Ending");

// function getData(){
//     return new Promise((res,rej)=>{
//         let data = "my ddsfajklfdshfs fsdkjfdsfhjfdskh";
//         if(data){
//             res(data);
//         }else{
//             rej("We got Some Error !");
//         }
//     });

// }

// getData().then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err);
// })