
function fibonnaci(n){
    if (n < 2){
        return n;
    }
    else{
        return fibonnaci(n-1) + fibonnaci(n-2);
    }
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
readline.question('Select a Number: ', Number => {
    x = fibonnaci(Number)
    console.log(`${x}`);
    readline.close();
  });

