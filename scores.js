const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]

function breakingRecords(scores) {
    // Write your code here
    let maxScores = []
    let minScores = []

    let max = scores[0]

    for (let score of scores) {
        if (score > max) {
            max = score
            maxScores.push(score)
        }
    }

    let min = scores[0]

    for (score of scores) {
        if (score < min) {
            min = score
            minScores.push(score)
        }
    }

    return [maxScores.length, minScores.length]

}

console.log(breakingRecords(scores))