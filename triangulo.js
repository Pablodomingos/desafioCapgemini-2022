function triangulo (numDec, numCres = 1)
{
    let vazio = " ";
    let valor = "*";

    while (numDec >= 1)
    {
        console.log(`${vazio.repeat(numDec-1)}${valor.repeat(numCres)}`);
        numCres++;
        numDec--;
    }
}

const n = 6;
triangulo(n);
