//Jawaban Soal1
console.log("LOOPING PERTAMA");
var i = 2;
while( i <= 20 ) {
    console.log(i + "- I love coding" );
    i=i+2;
}

console.log("LOOPING KEDUA");
var i = 20;
while( i >= 2 ) {
    console.log(i + "- I will become a frontend developer" );
    i=i-2;
}

//Jawaban Soal2
function loop2() {
    let result = "";
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0 && i % 3 === 0) {
            result += `${i}- I Love Coding `;
        } else if (i % 2 !== 0) {
            result += `${i}- Santai`;
        } else if (i % 2 === 0) {
            result += `${i}- Berkualitas`;
        }
    }

    return result;
}
var jawaban2 = loop2();
console.log(jawaban2)

//jawaban Soal3
var row = 7;

for (var i = 1; i <= row; i++) {
	var num = '';

	for (var j = i; j <= row; j++) {
		num += j;
	}
	console.log(num);
}

//Soal Ke4
//jawaban Soal4
var kalimat = [ "saya", "belajar", "javascript"]
kalimat.splice(1, 0, "senang") 
console.log(kalimat)