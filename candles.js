const candles = [4,4,2,3]

function birthdayCakeCandles(candles) {
    // Write your code here
    let max = candles[0]
    for (let candle of candles) {
        if (candle > max) max = candle
    }
    const maxs = []
    for (let candle of candles) {
        if (candle === max) maxs.push(candle)
    }

    return maxs.length
}

console.log(birthdayCakeCandles(candles))