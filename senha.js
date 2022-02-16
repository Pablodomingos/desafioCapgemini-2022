function logica (senha)
{
    const caracEspecial = ['@', '#', '-', '!', '$', '%', '&', '^', '*', '(', ')', '+'];
    const regex = /[0-9]/;
    const maiusculas = /[A-Z]/;
    const minusculas = /[a-z]/;

    //Deve ter no mínimo 6 caracteres
    if (senha.length < 6)
    {
        console.log(`Adicione mais ${6 - (senha.length)} caracteres.`);
        return 0;
    }

    //Não pode haver espaço
    if (senha.indexOf(' ') >= 0)
    {
        return 0;
    }

    //Ter números
    if (regex.test(senha))
    {

        for (let i = 0; i < senha.length; i++)
        {

            let carac = senha.charAt(i);

            for (let x = 0; x < caracEspecial.length; x++)
            {

                //Ter um caracter especial Ex.: @#.  Ter letra maiuscula.      Ter letra minuscula.
                if ((carac == caracEspecial[x]) && (maiusculas.test(senha)) && (minusculas.test(senha)))
                {
                    return 1;
                }
            }
        }
    }

    return 0;
}

function index (senha)
{
    //chama a função lógica e guarda o resultado na variavel caracter.
    let resultado = logica(senha);

    switch (resultado)
    {
        case 0:
            console.log(`Senha -> reprovada`);
            break;
        case 1:
            console.log(`Senha -> aprovada`);
            break;
    }
}

index("Ya3"); //Coloque sua senha aqui;
