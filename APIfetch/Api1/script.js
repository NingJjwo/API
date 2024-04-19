const but = document.querySelector('button');
const parrafo = document.querySelector('h2');
but.addEventListener('click', getData)

async function getData(){
    try{                   
        const data = await fetch('https://api.chucknorris.io/jokes/random');
        const json = await data.json();
        parrafo.textContent = json.value;
    
    }catch(e){
        console.error(e);
    }
}
