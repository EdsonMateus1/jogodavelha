const player1 = 'X';
const player2 = 'O';
let playTime = player1;
let gameOver = false;

atualizamostrador();
inicializarEspaco();

function atualizamostrador() {
    if (gameOver) { return }

    if (playTime == player1) {

        const player = document.querySelectorAll('div#display img')[0];

        player.setAttribute('src', './img/x.png');//funcao que seta um atributo a uma tag html

    } else {

        const player = document.querySelectorAll('div#display img')[0];

        player.setAttribute('src', './img/o.png');
    }
}
function inicializarEspaco() {
    let box = document.getElementsByClassName('box');

    for (let index = 0; index < box.length; index++) {

        box[index].onclick = function () {

            if (gameOver) { return; }

            if (this.getElementsByTagName('img').length == 0) {
                console.log("player1");

                if (playTime == player1) {
                    this.innerHTML = "<img src ='./img/x.png'>"
                    this.setAttribute('move', player1);
                    playTime = player2;
                } else {
                    console.log("player2");

                    this.innerHTML = "<img src ='./img/o.png'>"
                    this.setAttribute('move', player2);
                    playTime = player1;
                }
                atualizamostrador();
                verificarplacar();
            }

        }
    };
}


async function verificarplacar() {

    let a1 = document.getElementById('a3').getAttribute('move');
    let a2 = document.getElementById('a1').getAttribute('move');
    let a3 = document.getElementById('a2').getAttribute('move');

    let b1 = document.getElementById('b1').getAttribute('move');
    let b2 = document.getElementById('b2').getAttribute('move');
    let b3 = document.getElementById('b3').getAttribute('move');

    let c1 = document.getElementById('c1').getAttribute('move');
    let c2 = document.getElementById('c2').getAttribute('move');
    let c3 = document.getElementById('c3').getAttribute('move');

    let vencedor = ""
    if ((a1 == b1 && a1 == c1 && a1 != '') || (a1 == a2 && a1 == a3 & a1 != '') || (a1 == b2 && a1 == c3 && a1 != '')) {
        vencedor = a1;
        console.log(a1);

    } else if ((b2 == b1 && b2 == b3 && b2 != '') || (b2 == a2 && b2 == c2 && b2 != '') || (b2 == a3 && b2 == c1 && b2 != '')) {
        vencedor = b2;
        console.log(b2);
    } else if (((c3 == c2 && c3 == c1) || (c3 == a3 && c3 == b3)) && c3 != '') {
        vencedor = c3;
        console.log(c3);

    }

    if (vencedor != '') {
        gameOver = true;
        await sleep(50);
        alert(`o ganhador foi ${vencedor}`);
    }

  

}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))

}















