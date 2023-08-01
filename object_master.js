const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//create a list of pokemon that have names that start with letter "B"
// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// console.log(bListPkmn)

// //return an arroy of just the ids
// const pkmnIds = pokémon.map( p => p.id );
// console.log(pkmnIds);

//find an array of pokemon objects where the id is evenly divisible by 3
// const pkmnIds3= pokémon.filter(p=>p.id%3==0)
// console.log(pkmnIds3)

// //find an array of pokemon objects that are "fire" type
// const fireTypePkmn = pokémon.filter( p => p.types[0] === "fire" );
// console.log(fireTypePkmn);

//find an array of pokemon objects that have more than one type
// const typesPkmn = pokémon.filter( p => p.types.length > 1 );
// console.log(typesPkmn);

////find an array with just the names of the pokemon
// const pkmnNames = pokémon.map( p => p.name );
// console.log(pkmnNames);

////find an array with just the names of the pokemon with an id greater than 99
// const pkmnNamesGreaterThan99= pokémon.filter(p=>p.id>99).map(p=>p.name);
// console.log(pkmnNamesGreaterThan99)

////find an array with just the names of the pokemon whose only type is poison
// const pkmnPoison= pokémon.filter(p=>p.types[0]==='poison').map(p=>p.name);
// console.log(pkmnPoison)

// ////find an array with just the first type of all the pokemon whose second type is flying
// const pkmnFlying2= pokémon.filter(p=>p.types[1]==='flying').map(p=>p.types[0]);
// console.log(pkmnFlying2)

//a count of the number of pokemon that are "normal" type
// const pkmnNormal=pokémon.filter(p=>p.types[0]==='normal')
// console.log(pkmnNormal.length)



