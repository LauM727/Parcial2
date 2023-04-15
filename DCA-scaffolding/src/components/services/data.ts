export async function get_api(){
    try{
       const arr = [];
       for(let i=1; i<5; i++){
          const urljokes = await fetch("https://api.chucknorris.io/jokes/random?category={category}");
          const def = await urljokes.json();
          console.log(def);
          arr.push(def);


       };
       return arr;
 
    } catch(error){
       console.log(error);
    }
 }
 