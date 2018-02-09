const fs = require("fs");
let tekst = fs.readFileSync(__dirname + "/tekst.txt").toString().split("\n");
for (let o = 0; tekst.length > o; o++) {
    tekst[o] = tekst[o].split(" ");
}

let noworht = 0;
let worht = 0;
console.log(tekst);
for (let i = 0; tekst.length > i; i++) {
    for (let p = 0; tekst[i].length > p; p++) {
        if (tekst[i][p] == "—") {
            noworht++;
        }
        worht = worht + 1;
    }

}
worht = worht - noworht;
// for (let i = 0; tekst == "—" || tekst == "." || tekst == ","; i++) {
//worht = tekst.length() - i;
//     console.log(worht);
// }
console.log(worht);