function getCharacaters(done){
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data =>{
            done(data)
        });
}

getCharacaters(data => {

    console.log(data)
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`

        <article>
            <div class="Personajes-container">
                <img src="${personaje.image}" alt="Personaje">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>

        `);
        const main = document.querySelector("main");

        main.append(article);
    });
});