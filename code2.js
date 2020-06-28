let highScore = ;
let username = 'Will Smith';
let rounds = [];
let p = 45;
let reset = 0; 
let h = 309;
let pLight = ; 
let hLight = ;
let p1Card = ;
let deal = ;
let hCard = ;



comparison = (p, h) => {
    if (p > h) {
        return `${username} Wins!`
    } else {
        return 'House Wins!'
    }
};

console.log(comparison(p,h))

