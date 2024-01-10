// - - - -
// - - - -   I - Afficher les données dans la console
// - - - -

// - - - Challenge 1-1: Afficher les noms de 10 Pokémons
fetch("https://pokeapi.co/api/v2/pokemon?Limit=10")
    .then((response) => response.json())
    .then((data)=>{
        console.log("- - - Challenge 1-1 - - -");
        data.results.forEach((pokemon)=>console.log(pokemon.name));
    });
// - - - Challenge 1-2: Trouver un Pokémon par son nom et afficher ses types
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response)=> response.json())
    .then((data)=>{
        console.log("- - - Challenge 1-2 - - -");
        types = data.types.map((type)=> type.type.name).join(", ");
        console.log(`Types of Pikachu: ` + types);
    })
// - - - Challenge 1-3: Afficher les noms des Pokémons de type 'fire'
fetch("https://pokeapi.co/api/v2/type/fire")
    .then((response)=> response.json())
    .then((data)=>{
        console.log("- - - Challenge 1-3 - - -");
        names = data.pokemon.map((names)=>names.pokemon.name).join(", ");
        console.log(names);
    })
// - - - Challenge 1-4: Afficher les statistiques de base d'un Pokémon spécifique
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response)=> response.json())
    .then((data)=>{
        console.log("- - - Challenge 1-4 - - -");
        console.log("Base stats of Pikachu");
        console.log("data.stats", data.stats);
        data.stats.forEach((stat)=> console.log(stat.stat.name + ": " + stat.base_stat))
    })
// - - - Challenge 1-5: Lister les évolutions d'un Pokémon spécifique
fetch("https://pokeapi.co/api/v2/evolution-chain/2")
    .then((response)=> response.json())
    .then((data)=>{
        console.log("- - - Challenge 1-5 - - -");
        console.log(data);
        console.log(data.chain.species.name + " evolves to ");
        data.chain.evolves_to.forEach((evolves)=>console.log(evolves.species.name));
        data.chain.evolves_to.forEach((evolves)=> evolves.evolves_to.forEach((evolves_final)=>console.log(evolves_final.species.name)));
    })
// - - - -
// - - - -  II - Afficher les données dans le DOM
// - - - -

// - - - Challenge 2-1: Afficher les noms de 20 Pokémons dans le document HTML
fetch("https://pokeapi.co/api/v2/pokemon?Limit=20")
    .then((response) => response.json())
    .then((data)=>{
        console.log("- - - Challenge 2-1 - - -");
        const list = document.createElement("ul");
        data.results.forEach((pokemon)=>{
            const listItem = document.createElement("li");
            listItem.textContent = pokemon.name;
            list.appendChild(listItem);
        })
    })
// - - - Challenge 2-2: Afficher les détails (nom, image) d'un Pokémon spécifique
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response)=> response.json())
    .then((data)=>{
        console.log("- - - Challenge 2-2 - - -");
        const detailsDiv = document.createElement("div");
        detailsDiv.innerHTML = `
        <h3> ${data.name}</h3>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        `;
        document.querySelector("#btasks").appendChild(detailsDiv);
    })
// - - - Challenge 2-3:
// Créer une liste déroulante (utiliser <select> et <option>) de 10 Pokémons obtenu au hasard avec l'api.
// Puis charger et afficher l'image du Pokémon sélectionné
fetch("https://pokeapi.co/api/v2/pokemon?Limit=100000&offset=0")
    .then((response)=> response.json())
    .then((data)=>{
        console.log("- - - Challenge 2-3 - - -");
        console.log(data);
        countN=[]
        count = data.count;
        for(i=0; i<10; i++){
            randomCount = Math.floor(Math.random() * count);
            urlRandom = "https://pokeapi.co/api/v2/pokemon/" + randomCount;
            countN.push(urlRandom);
            countN.forEach((url)=>{
                fetch(url)
                    .then ((response)=> response.json())
                    .then((data)=>{
                        
                    })
            })
        }
        console.log(countN)
    })
// - - - -
// - - - - - - - III - Utilisation avancée et gestion des erreurs
// - - - -

// - - - Challenge 3-1 : Recherche de Pokémon

// Créez un champ de saisie pour que l'utilisateur puisse taper le nom d'un Pokémon.
// Ajoutez un bouton de recherche pour déclencher la recherche.
// Utilisez la PokeAPI pour chercher les informations sur le Pokémon spécifié.
// Si le Pokémon est trouvé, affichez ses détails. Sinon, affichez un message d'erreur indiquant que le Pokémon n'a pas été trouvé.
// Implémentation :
// Utilisez JavaScript pour écouter l'événement de clic sur le bouton de recherche.
// Faites une requête fetch à PokeAPI avec le nom du Pokémon saisi.
// Gérez la réponse : si le Pokémon est trouvé, affichez ses informations ; si le Pokémon n'est pas trouvé (par exemple, si le statut de la réponse est 404), affichez un message d'erreur.

// - - - -
// - - - - - - - IV - Utiliser le Local Storage
// - - - -

// - - - Challenge 4-1 : Compteur de Visites sur la Page des Pokémon

// - Objectif : Créer un compteur de visites sur une page thématique Pokémon, qui s'incrémente à chaque chargement de la page.
// - Instructions :
// À chaque chargement de la page, augmenter un compteur stocké dans le LocalStorage.
// Afficher le nombre de visites (compteur) sur la page.

// - - - Challenge 4-2 : Stocker et Afficher le Nom de votre Pokémon Préféré

// - Objectif : Demander à l'utilisateur d'entrer le nom de son Pokémon préféré, le stocker dans le LocalStorage, puis l'afficher sur la page.
// - Instructions :
// Créer un champ de texte et un bouton pour soumettre le nom du Pokémon préféré.
// Lorsque l'utilisateur clique sur le bouton, stocker le nom entré dans le LocalStorage.
// Afficher le nom du Pokémon préféré stocké sur la page.

// - - - Challenge 4-3 : Gestion d'une Liste de Pokémon à Capturer

// - Objectif : Permettre à l'utilisateur de gérer une liste de Pokémon à capturer, en ajoutant ou supprimant des noms de Pokémon.
// - Instructions :
// Fournir un champ de texte et un bouton pour ajouter un nom de Pokémon à une liste.
// Permettre également de supprimer un Pokémon de la liste.
// Stocker et mettre à jour cette liste dans le LocalStorage et l'afficher sur la page.
// Initialiser la liste au chargement de la page
