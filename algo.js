



// #2

// function isPalindorme(string) => {
//     let reversedString = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         reversedString += string[i];
//     }
//     return string === reversedString;
// }

// console.log(isPalindorme('bob'))







// #3
// How can you find the minimum and maximum numbers in an array?

// const array = [99,-10,-29,37,39,1000]

// array.sort() 
// console.log(array.join(", ")) 


// const min = array[0]
// const max = array[array.length-1]
// console.log(`Minimum: ${min}, Maximum: ${max}`) 










// #3
const array = [42,1000,-15,-370,5,99]

array.sort((e,i) => e-i) 
console.log(array.join(", ")) 

const min = array[0]
const max = array[array.length-1]

console.log(`Your Minimum Is: ${min}, Your Maximum Is: ${max}`) 

// cards game

let cards = []
for (let i = 0; i < 52; i++){
    cards.push(genCard(deck))
}

const createCardNode =

    card.innertext = cardData.color + cardData.value;
card.className = 'card'
    card.style





cards.forEach(card => {
    card.node = createCardNode(card)
})



console.log(cards)
let game = document.getElementById("game")
cards.forEach(card => game.append(card.node))

game.removeChild(cards[3].node)

console.log(cards[3].node)

game.append(cards[3].node)




/////////////////////////////////////////////////
console.log(Math.random())
const deck = {
    numB:[1,2,3,4,5,6,7,8,9,'+2','+4','wild','skip','rvse'],
    color : ['Red','Green','Blue','Yellow']
}
const randomFromArr = (arr)=> arr[Math.floor(Math.random() * arr.length)]
const genCard =(deck)=>{
    let cardVal = randomFromArr(deck.numB)
    let cardColor = randomFromArr(deck.color)
    //create card
    let card = {
        color:cardColor,
        value:cardVal
    }
    return card;
}
let cards = []
for(let i = 0; i < 52; i++){
    cards.push(genCard(deck))
}
const createCardNode = (cardData) =>{
    let card = document.createElement("span")
    card.innerText = cardData.color + cardData.value;
    card.className = "card"
    card.style = `background-color:${cardData.color}`
    return card;
}
cards.forEach(card=>{
    card.node = createCardNode(card)
})
let game = {
    players:[],
    onTurn:0,
    direction:'right'
}
const doTurn = (game) =>{
    //card that was put down added to the stack
    if (game.direction == 'right' ){
        game.onTurn += 1;
        if(game.onTurn > 3){
            game.onTurn = 0
        }
    } else {
        game.onTurn -= 1;
        if(game.onTurn < 0){
            game.onTurn = 3
        }
    }
}
const skipPlayed = (game)=>{
    game.onTurn += 1
    doTurn()
}
const genPlayer = (nodeId) =>{
    console.log(nodeId)
    return {
        myTurn: false,
        playedCards: 0,
        myCards:[],
        name:"Player",
        node:document.getElementById(nodeId)
    }
}
const addCards = (player) =>{
    for(let i = 0; i < 7; i++){
        player.myCards.push(cards.pop(Math.floor(Math.random() * cards.length)))
    }
}
for (let i = 0; i < 4; i++ ){
    game.players.push(genPlayer('player'+(i+1)))
    addCards(game.players[i])
}
console.log(game.players)
game.players.forEach(player=>player.myCards.forEach(card=>player.node.append(card.node)))
