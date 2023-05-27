function max() {
    let num1 = Number(prompt("Insert first num:")),
        num2 = Number(prompt("Insert sec num:"));
    alert(Math.max(num1, num2))
}

function sumSign() {
    let num1 = Number(prompt("Insert first num:")),
        num2 = Number(prompt("Insert sec num:")),
        num3 = Number(prompt("Insert 3th num:"));
    alert(Math.sign(num1 + num2 + num3) >= 0 ? "+" : "-")
}

function sort() {
    let num1 = Number(prompt("Insert first num:")),
        num2 = Number(prompt("Insert sec num:")),
        num3 = Number(prompt("Insert 3th num:"));

    let sorted = [num1, num2, num3].sort((a, b) => {
        return a > b ? -1 : 1;
    })
    alert(sorted)
}

function biggest() {
    let num1 = Number(prompt("Insert first num:")),
        num2 = Number(prompt("Insert sec num:")),
        num3 = Number(prompt("Insert 3th num:")),
        num4 = Number(prompt("Insert 4th num:")),
        num5 = Number(prompt("Insert 5th num:"));
    let sorted = [num1, num2, num3, num4, num5].sort((a, b) => {
        return a > b ? -1 : 1;
    })
    alert(sorted[0])
}

function ovenOdd() {
    let str = []
    for (let index = 0; index < 15; index++) {
        str.push(`${index} is ${(index % 2 == 0) ? "even" : "odd"} `)
    }
    alert(str.join("\n"))
}