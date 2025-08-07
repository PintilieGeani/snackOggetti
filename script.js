// 🎯 Snack  (Bonus)
// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

// ⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
	restaurant: {
		name: "Hyur's Burgers",
		welcomeClient: () => {
			console.log("Benvenuto!");
		},
		address: {
			street: 'Main Street',
			number: 123,
			showAddress: () => {
				console.log("Main Street 123");
			}
		},
		isOpen: true,
	}
}

// console.log(chef) 




// Logica: Ho bisogno di una deep copy che mi restituisca lo stesso oggetto con le funzioni, quindi scrivo una funzione ricorsiva in cui vado a verificare i i valori delle varie chiavi e se sono primitivi li copio o funzioni faccio una copia se invece sono oggetti faccio eseguire di nuovo la funzione su quel oggetto. 

function deepCopy (oggetto) {
    let nuovaCopia = {}
    for(let key in oggetto){
    let value = oggetto[key]   
    if(typeof(value) === "function"){
        nuovaCopia[key] = value
    }else if(typeof(value) === "object" && value !== null){
        if(Array.isArray(value)){
            nuovaCopia[key] = value.map(curElem => deepCopy(curElem))
        }else{
            nuovaCopia[key] = deepCopy(value)
        }
        
    }else {
        nuovaCopia[key] = value
    }
}


   return nuovaCopia
}


console.log(deepCopy(chef))
