function fatorialRec(n){
    if(n<=1){
        return 1 //condição de saída
    } 
    return n * fatorialRec(n - 1)
}

console.log('Fatorial Recursivo de 5:', fatorialRec(5))