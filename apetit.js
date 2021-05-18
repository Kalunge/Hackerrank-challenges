
const bill = [2,4,6]

function bonAppetit(bill, k, b) {
    // Write your code here
    correctItems = bill.filter(item => {
        return item !== bill[k]
    })

    fairBill = (correctItems.reduce((a, b) => {
        return a + b
    })) / 2
    if (fairBill === b) return "Bon Appetit"
    return parseInt(b - fairBill)
}

console.log(bonAppetit(bill, 0))