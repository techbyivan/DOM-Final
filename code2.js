// start game & retrieve username
getUsername = () => {
    let txt;
    let player = prompt("Please enter your name:")
    if (player == null || player == "") {
        txt = "User cancelled the prompt."
    } else {
        txt = `Welcome ${player}!`
    }
    document.getElementById('username').innerHTML = txt
}

// let dealbtn23 = document.querySelector('#deal-btn2 p')
// dealbtn23.addEventListener('click', function (e) {
//     console.log(e.target)
//     console.log(e)
// });



//function to fill an array with 52 numbers
// fillArray = () => {
// 	var deck = [];
// 	for (var i = 0; i < 52; i++)
// 		deck[i] = 
// 	shuffle(deck);
//     splitCards(deck)
// }

//function to shuffle deck of cards. 
// shuffle = (deck) => {
//     for(var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
//     return deck;
// }

// //function to split shuffled deck in half
// splitCards = (deck) => {
// 	var i = 0;

// dealCards = () => {
//     document.getElementById('player1Card').innerHTML = Math.floor(Math.random() * 11);
//     document.getElementById('houseCard').innerHTML = Math.floor(Math.random() * 11);
//     let cardGenerated = player1card;
//     let cardGenerated2 = houseCard;
//     if (player1card > houseCard) {
//         document.getElementById('player-1-score).innerHTML = cardGenerated;
//     } else {
        
//     }
// }
// console.log(dealCards())

// let card = document.querySelector('.card-1-face');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });


// let player = 'Will Smith';
// let playerPoints = 30
// let highScore = `${player} is the High Score with ${playerPoints} points!!`

// let playerPoints = ;
// let playerCardsLeft = 26;
// let playerGamesWon = 0

// let housePoints = ;
// let houseCardsLeft = 26;
// let houseGamesWon = 0

// let rounds = [];
// let p = 932
// let reset = 0; 
// let h = 309;

// let playerSensor = ; 
// let houseSensor = ;

// console.log(highScore)




/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

