/**
 * get array from user prompt
 * @returns {Array}
 */
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

function task53() {
    let array = getArray();
    let arrayCount = 0;
    for (let item of array) {
        if (item instanceof Array)
            arrayCount++;
    }
    alert(`Inner array count in given array is: ${arrayCount}`)
}

function task52() {
    let array = getArray();
    let nanIndexArray = [];
    for (let i in array) {
        if (isNaN(array[i]))
            nanIndexArray.push(i)
    }
    alert(JSON.stringify(nanIndexArray))
}

function task51() {
    let array = getArray();

    let previous = array[0];
    let failed = false;
    for (let index = 1; index < array.length && !failed; index++) {
        const item = array[index];

        //if current item isn't divides by 2 against previous item
        if (item / previous != 2)
            failed = true;

        previous = item; //set previous to be current  for next cycle
    }

    alert(!failed)
}

function task50() {
    let array = getArray();
    let sum = 0;
    for (let item of array) {
        if (typeof item === "number" && !isNaN(item))
            sum += item
    }
    alert(sum)
}

function task49() {
    let array = getArray();
    array = array.sort((a, b) => {
        return a < b ? -1 : 1;
    })
    console.log(array)
    alert(array[2])
}