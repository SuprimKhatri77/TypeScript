const gameScores = [12,21,33,42,59]
const favoriteThings = ["raindrop on roses","whiskers on kittens","bright copper kettles","warm woole mittens"]
const votters = [{name:"Alice", age: 22},{name:"slash",age: 23}]


function getLastItem<T>(array: T[]): T | undefined{
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))