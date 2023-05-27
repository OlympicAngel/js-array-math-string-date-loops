function getNumber(str) {
    return Number(prompt("insert a number " + str)) || 0
}
function getArray() {
    let goodInput;
    let array;
    do {
        goodInput = true;
        try {
            let rawData = prompt("Insert array");
            rawData = rawData.replaceAll("NaN", '"NaN"')
            array = JSON.parse(rawData);
            array.forEach((val, index) => {
                if (val == "NaN")
                    array[index] = NaN;
            })
        }
        catch (e) { goodInput = false; }
    } while (!goodInput)
    console.log(array)
    return array;
}

function rand() {
    let arg1 = getNumber("as arg 1:"),
        arg2 = getNumber("as arg 2:");
    let rnd = Math.min(arg1, arg2) + ~~(Math.random() * Math.abs(arg1 - arg2))
    alert(rnd)
}

function decimals() {
    let arg1 = getNumber("as arg 1:"),
        arg2 = getNumber("as arg 2:");
    let num = arg1.toFixed(arg2)
    alert(num)
}

function max() {
    let array = getArray();
    let maxNum = array.sort((a, b) => {
        return a > b ? -1 : 1
    })
    alert(maxNum[0])
}

function min() {
    let array = getArray();
    let minNum = array.sort((a, b) => {
        return a < b ? -1 : 1
    })
    alert(minNum[0])
}

function power_of_2() {
    let arg1 = getNumber(":");
    while (arg1 % 2 == 0) {
        arg1 = arg1 / 2
    }
    alert(arg1 == 1)
}