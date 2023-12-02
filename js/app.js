function alterarStatus(valor) {
    
    let jogo = acessarElementosDOM(valor);
    jogo[0]["div_jogo"].classList.toggle("dashboard__item__img--rented");
    jogo[0]["btn_jogo"].classList.toggle("dashboard__item__button--return");
    jogo[0]["btn_jogo"].text = (jogo[0]["btn_jogo"].text == "Devolver") ? "Alugar" : "Devolver";

}

function acessarElementosDOM(valor) {

    let li_jogo = document.getElementById(`game-${valor}`);
    let div_jogo = li_jogo.querySelector("div");
    let btn_jogo = li_jogo.querySelector("a");

    return [{
        
        "li_jogo": li_jogo,
        "div_jogo": div_jogo,
        "btn_jogo": btn_jogo
    }];

};
