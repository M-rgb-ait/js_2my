let out_1 = document.getElementById("quoteOutput");
let out_2 =document.getElementById("authorOutput");



let words = [
    '"The best revenge is massive success."',
    '"You miss 100% of the shots you dont take."', 
    '"Its not what happens to you, but how you react to it that matters."',
    '"Do not take life too seriously. You will not get out alive."',
    '"Resentment is like drinking poison and waiting for your enemies to die."'
];


let names = [
    "--Frank Sinatra",
    "--Wayne Gretzy",
    "--Epictetus",
    "--Elbert Hubbard",
    "--Nelson Mandela"
];


function generateQuote () {

let randoms = Math.floor(Math.random()*words.length);

out_1.innerHTML = words[randoms] ;
out_2.innerHTML = names[randoms] ;
}




