height = [2, 5, 4, 5, 2]

function hurdleRace(k, height) {
    // Write your code here
    let max = 0
    for (item of height) {
        if (item > max) {
            max = item
        }
    }

    return (max - k) < 0 ? 0: (max - k)
}


