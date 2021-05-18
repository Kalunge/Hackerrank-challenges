// Your task is to determine which cat will reach 
// the mouse first, assuming the mouse does not move and the cats travel at equal speed.
//  If the cats arrive at the same time,
//  the mouse will be allowed to move and it will escape while they fight.


function catAndMouse(x, y, z) {
    let catA = Math.abs(x- z)
    let catB = Math.abs(y-z)
    if (catA < catB) return "Cat A"
    if (catB<catA) return "Cat B"
    return "Mouse C"
}

console.log(catAndMouse(1,2,3))