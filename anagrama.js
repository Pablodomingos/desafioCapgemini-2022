function anagrama (nome, count = 0)
{
    let tamanhoNome = nome.length;

    for (let i = 0; i < tamanhoNome; i++){
        if (nome.lastIndexOf(nome[i]) != i){
            if ((nome.lastIndexOf(nome[i]) - i) > 1){
                count++;
            }
            count++;
        }
    }

    console.log(count);
}

const palavra = "aroma";//[[0,4]],[[0,1,2,3],[1,2,3,4]]
anagrama(palavra);
//ifailuhkqq

