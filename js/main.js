function tocaSom(seletorAudio) { //(seletorAudio é um parametro da função, que dá condição de ela funcionar. No caso estou dizendo que ela deve tocar um som proveniente das id's vinculadas ao audio do HTML)
    const elemento = document.querySelector(seletorAudio); /*preciso do parente para indicar que a funçao deve ser executada*/
//condicional para verificar se os elementos tem a Tag correta e que o parametro fornecido existe
    if (elemento && elemento.localName === 'audio') { //localName é um dos objetos, caracteristicas do item elemento (ou qualquer um que four buscado) // && siginifica e condicional // O JS já entende se elemento for válido ou existente, ou seja na condição do if se elemento (const criada acima) não for vazia (JS já sabe se um elemento está vazio por isso não é preciso dizer elemento !=null) e o localName for igual a audio (para que o método play abaio funcione é necessário que seja uma tag do tipo audio)
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom; /*aqui não uso o parenteses pois estou indicando que a função deve ser armazenada dentro do atributo onclick*/

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //classList lista todas as classe atribuidas a uma tag. No caso ele irá salvar na const instrumento, a classe na posição 1 (as classes de uma tag são salvas em um array pelo JS e por isso pode-se escolher qual classe se deseja) da lista de teclas, isso para salvar o nome dela devido ao padrão de nomes e poder utilzar na const abaixo
    const idAudio = `#som_${instrumento}`;//E a crase é uma outra forma de criar strings (textos) dentro dos JavaScript, uma template string. No caso a const idaudio irá salvar o nome som_instrumento (ex: som_tecla_pom)

    tecla.onclick = function () { //function () cria uma função anonima, que é uma função que será atribuida, neste caso, ao onclick, mas que não será executada automaticamente. Os navegadores não permitem a execução de funções sem a interação do usuário
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { //onkeydown é quando uma tecla está pressionada

        if (evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter') //= eu atribuo o valor da direita para o elemento da esquerda /== é quando eu faço uma comparação entre os dois elementos / === eu comparo além do valor, se o tipo também é o mesmo (ex: número e texto). No caso evento é o paramero da função (evento que ocorrerá quando a tecla for pressionada-onkeydown). O .code indica qual é o código (nome) da tecla que foi pressionada e assim por meio do if consegue-se dizer que somente as teclas listadas vão acionar o método abaixo
            tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () { //onkeyup é quando a tecla é solta
        tecla.classList.remove('ativa');
    }
}
