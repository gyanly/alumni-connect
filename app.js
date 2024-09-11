async function getData(){
   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
   const data  = await res.json();
   return data;
}
getData().then((data)=>{
    console.log(data);
})