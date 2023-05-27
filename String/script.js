function is_string() {
    let input = prompt("insert a string/value (it will be parsed to its value)")
    try { input = JSON.parse(input) } catch (e) { }
    alert(typeof input == "string")
}

function is_Blank() {
    let input = prompt("insert string.. or not:")
    alert(input.length == 0)

}

function string_to_array() {
    let input = prompt("write some words:")
    alert(input.split(" "))

}

function truncate_string() {
    let input = prompt("insert some text:")
    let letters = Number(prompt("insert number of letters:"))

    alert(input.substring(0, letters))
}

function abbrev_name() {
    let input = prompt("insert some text:")
    let words = input.split(" ");
    words[0] = words[0].substring(0, 1).toUpperCase() + words[0].substring(1, words[0].length)
    words[1] = words[1][0].toUpperCase() + ".";
    alert(words.join(" "));
}