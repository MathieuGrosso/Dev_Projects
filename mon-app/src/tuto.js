// let numberOfCats = 2 ; 
// let numberOfDogs = 4 ;
// numberOfCats = 3


// const nombreCaracter = 140 ; 
// nombreCaracter = 30 ; // retournera une erreur


// const myName = `Alexander`;
// const salutation = `Bienvenue sur mon site ${myName}!`; // string interpolation thanks to $ 
// console.log(salutation);   //retournera “Bienvenue sur mon site Alexander!” 

// let episode = {
//     episodeTitle : "episode 2 - Weather Report",
//     episodeDuration : 24,
//     hasBeenWatched : true,
// }; 


// let myBook = {
//         title: 'The Story of Tau',
//         author: 'Will Alexander',
//         numberOfPages: 250,
//         isAvailable: true
// };


// let bookTitle = myBook.title;
// let bookPages = myBook.numberOfPages;


// class Book {
//     constructor(title, author, pages) {
//         this.title = title
//         this.author = author
//         this.pages  = pages
//     }
// }

// let myBook = new Book("lhistoire d tao","will alexander",250);




// let guests = ["Sarah Kate", "Audrey Simon", "Will Alexander"];


// let artistProfile = {
//     name: "Tao Perkington",
//     age: 27,
//     available: true
// };
// let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus
// artistProfile.available = false; // modification de l'objet
// console.log(allProfiles); // affiche { nom: "Tao Perkington", âge: 27, disponible: false }

// guests = ["Will","Rohan",'Giorno']

// let howManyGuests = guests.length;
// console.log(howManyGuests);


// let UserLoggedIn = true;
// if (UserLoggedIn) {
//    console.log("Utilisateur connecté!");
// } else {
//    console.log("Alerte, intrus!");
// }


// const numberOfSeats = 30;
// const numberOfGuests = 25;
// if (numberOfGuests < numberOfSeats) {
// // autoriser plus d'invités
// } else {
// // ne pas autoriser de nouveaux invités
// }


// let userLoggedIn = true;
// let welcomeMessage = ""

// if (userLoggedIn) {
//    welcomeMessage = 'Welcome back!';
// } else {
//    welcomeMessage = 'Welcome new user!';
// }

// console.log(welcomeMessage); // renvoie une erreur


// let firstUser = {
//     name: "Will Alexander",
//     age: 33,
//     accountLevel: "normal"
// };

// let secondUser = {
//     name: "Sarah Kate",
//     age: 21,
//     accountLevel: "premium"
// };

// let thirdUser = {
//     name: "Audrey Simon",
//     age: 27,
//     accountLevel: "mega-premium"
// };


// switch (firstUser.accountLevel) {
//     case 'normal':
//           console.log('You have a normal account!');
    
//     break;
//     case 'premium':
//           console.log('You have a premium account!');
    
//     break;
//     case 'mega-premium':
//           console.log('You have a mega premium account!');
//     break;
    
//     default:
//           console.log('Unknown account type!');
//     }



// const numberOfPassengers = 10;
// for (let i = 0; i < numberOfPassengers; i++) {
//    console.log("Passager embarqué !");
// }



// const passengers = [ "Will","Giornno","Jayro","Johnny","Jotaro"]
// for (let i in passengers){
//     console.log("embarqueemnt du passager " + passengers[i]);




// // const passengers = [
// //     "Will Alexander",
// //     "Sarah Kate",
// //     "Audrey Simon",
// //     "Tao Perkington"
// // ]

// // for (let passenger of passengers) {
// //     console.log("Embarquement du passager " + passenger);
// // }


// // let seatsLeft = 10;
// // let passengersStillToBoard = 8;
// // let passengersBoarded = 0;

// // while (seatsLeft > 0 && passengersStillToBoard > 0) {
// //     passengersBoarded++; // un passager embarque
// //     passengersStillToBoard--; // donc il y a un passager de moins à embarquer
// //     seatsLeft--; // et un siège de moins
// // }

// // console.log(passengersBoarded);

// let vipStatus = "";

// let guest = {
//     name: "Sarah Kate",
//     age: 21,
//     ticket: true,
//     guestType: "artist"
// };

// switch (guest.guestType) {
//     case "artist":
//         vipStatus = "Normal";
//         break ;
//     case "star":
//         vipStatus = "Important";
//         break;
//     case "presidential":
//         vipStatus = "Mega-important";
//         break;
//     default:
//         vipStatus = "None";
// }

// console.log(vipStatus)


// On définit la fonction

// function afficherDeuxValeurs(valeur1, valeur2) {
//           console.log('Première valeur:' + valeur1);
//           console.log('Deuxième valeur:' + valeur2);
//     }
    
//     // On exécute la fonction
// afficherDeuxValeurs(12, 'Bonjour');
    
    // On obtient dans la console
    // > Première valeur:12 
    // > Deuxième valeur:Bonjour 


// function tableNumber(valeur1){
//     if(valeur1.length === 0){ 
//         return 0;
//     }
//     mean = 0
//     for (let elementDeTableau of valeur1) {
//         mean+=elementDeTableau
//     };

//     return mean/valeur1.length
    
// }

// monTableau=[]
// hello = tableNumber(monTableau)
// console.log(hello)




// Definissez des méthodes d'instance et des propriétés : 


// class BankAccount {
//     constructor(owner, balance) {
//        this.owner = owner;
//        this.balance = balance;
//     }
//     showBalance(){
//         console.log("Solde:"+ this.balance +"EUR");
//     }
//     deposit(amount){
//         console.log("Dépot de " + amount + "EUR")
//         this.balance += amount;
//         this.showBalance()
//     }
//     withdraw(amount){
//         if (amount> this.balance){
//             console.log("Retrait refusé !");
//         }
//         else {
//             console.log("Retrait de" + amount + 'EUR');
//             this.balance -=amount;
//             this.showBalance();
//         }
//     }
//  }


// const newAccount = new BankAccount("Will Alexander", 500);

// console.log(newAccount.showBalance(),newAccount.deposit(50),newAccount.withdraw(200));

// const randomNumber = Math.random();
// console.log(randomNumber)



// class BePolite {
//     static sayHello(){
//         console.log("hello !")
//     }
//     static sayHelloTo(name) {
//         console.log("Hello " + name + "!");
//     }
    
//     static add(firstNumber, secondNumber) {
//         return firstNumber + secondNumber;
//     }

// };
// const sum = BePolite.add(2,3)
// console.log(BePolite.sayHello(), sum)



// const getWordCount = (stringToTest) => {
//     const wordArray = stringToTest.split(' ');
//     return wordArray.length;
// }

// const getLetterCount = (stringToTest) => {
//     const wordArray = stringToTest.split(' ');
//     let totalLetters = 0;
//     for (let word of wordArray) {
//         word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
//         totalLetters += word.length;
        
//     }

//     return totalLetters;
// }


const binarySearch = (array, thingToFind, start, end) => {
    if (start > end) {
        return false;
    }
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === thingToFind) {
         return true;
     }
 
     if (thingToFind < array[mid]) {
     // il faut rechercher dans la première moitié
         return binarySearch(array, thingToFind, start, mid - 1); // on utilise (mid - 1) car on sait que l'on n'a pas besoin de l'élément mid, il a déjà été vérifié !
         
     } else {
         // il faut rechercher dans la deuxième moitié
         return binarySearch(array, thingToFind, mid + 1, end);
     }
 }




