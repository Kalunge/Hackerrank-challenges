let numbers = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr) {
    // Write your code here
    // let ratios = []
    let negatives = []
    let positives = []
    let zeros = []

    for (let element of arr) {
        if (element < 0) {
            negatives.push(element)
        } else if (element === 0) {
            zeros.push(element)
        }
        else {
            positives.push(element)
        }
    }
    
    let ratios = [positives.length, negatives.length, zeros.length]

    const sum = ratios.reduce((a, b )=> {return a+b})
    
    for (element of ratios) {
        console.log((element / sum).toFixed(6))
    }
}

plusMinus(numbers)