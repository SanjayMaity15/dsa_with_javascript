// ! Print Right-Angled Star Triangle

let row = 5, col = 5;

for (let x = 1; x <= row; x++){
    let str = ""
    for (let y = 1; y <= x; y++){
        str += "* "
    }
    console.log(str);
}