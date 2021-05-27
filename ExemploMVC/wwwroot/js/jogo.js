
function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {

    var cartas1 = document.getElementById("cartas1");
    $(cartas1).attr("src", '/images/' + valorAleatorio() + '.png'); 

}



function parar1() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');


} function valorAleatorio1() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio1 = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio1;
}

function jogador2() {

    var cartas2 = document.getElementById("cartas2");
    $(cartas2).attr("src", '/images/' + valorAleatorio1() + '.png');

} function parar2() {

    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_parar2 = document.getElementById("btn_parar_2");
    var btn_parar1 = document.getElementById("btn_parar_1");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar1).removeAttr('disabled');
}



