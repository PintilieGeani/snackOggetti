🏆 Code Question 1

Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
Codice:
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name ); // ?

Risposta: In questo caso non stiamo facendo una copia profonda ma solo una reference quindi qualsiasi valore che andremmo a cambiare in secondBurger sarà cambiato anche nel hamburger.
In memoria viene creato un solo oggetto.


🏆 Code Question 2
P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
Codice:
const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

Risposta: entrambi restituiscono "Salad" perchè è stata fatta la copia con spread operator ma solo del hamburger, non anche di ingredients
In memoria sono stati creati 2 oggetti.


🏆 Code Question 3
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Codice:
const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

Risposta: Se ho ben capito come funziona il structuredclone() crea una copia per ogni oggetto anche quelli annidati quindi se il primo oggetto contiene al suo interno altri 2 oggetti, ergo 3 in tutto, allora in memoria saranno creati 9 oggetti.


🏆 Code Question 4
Qual è il metodo migliore per clonare l’oggetto chef, e perché?
Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
Codice:
const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

Risposta: Dipende da cosa dobbiamo fare, nel primo caso se abbiamo bisogno della funzione all'interno di chef allora possiamo fare sia uno spread sia una reference, a seconda se dobbiamo modificare o no la copia, ma così facendo ci salva anche la funzione. 
Nel secondo caso il metodo migliore e structuredClone() così da avere anche la data come oggetto e non come stringa.


🎯 Code Question 5 (Bonus)
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

Codice:
const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?

Risposta: 
console.log(hamburger.maker.name); --> "Chef Hyur"
console.log(secondBurger.maker.name); --> "Chef Hyur"
console.log(hamburger.maker.restaurant.name); --> "Hyur's Burgers"
console.log(secondBurger.maker.restaurant.name); --> undefined Perchè nella seconda copia abbiamo salvato solo "new restaurant" che è una stringa e non un oggetto.


🎯 Code Question 6 (Bonus)
Qual è il metodo migliore per clonare l’oggetto chef, e perché?
Codice:
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

Risposta: Dipende da cosa ci dobbiamo fare ma dato che ci sono diverse funzioni al suo interno direi reference oppure spread. 
