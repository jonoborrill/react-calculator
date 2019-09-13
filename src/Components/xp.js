
function randomBetween(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

let xp = 123;
let level_breakpoints = [];

let k = 123;
for(let i = 0; i < 25; i++){
  level_breakpoints.push(k);
  k += randomBetween(19, 25);
}


console.log(`${level_breakpoints}`);

let ranks = [
    "bronze I",
    "bronze II",
    "bronze III",
    "bronze IV",
    "bronze V",
    "silver I",
    "silver II",
    "silver III",
    "silver IV",
    "silver V",
    "gold I",
    "gold II",
    "gold III",
    "gold IV",
    "gold V",
    "platinum I",
    "platinum II",
    "platinum III",
    "platinum IV",
    "platinum V",
    "diamond I",
    "diamond II",
    "diamond III",
    "diamond IV",
    "diamond V"
];

function getRank(){
    return ranks[level_breakpoints.filter(x => {
        return xp >= x;
    }).length];
}

let currentRank = getRank();
let currentXP = xp;

xp += 72;

let newXP = xp;
let newRank = getRank();

// 121,150
// 150,210
// 210,275

function getNextLevelBreak(y){
    return level_breakpoints.filter(x => {
        return x > y;
    })[0];
}


let a = currentXP;
let b = newXP;
let c = getNextLevelBreak(a);
while (b > c){
    console.log(a, c);
    a = c;
    c = getNextLevelBreak(a);
}
console.log(a, b);

