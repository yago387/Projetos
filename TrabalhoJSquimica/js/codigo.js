function mostrarPergunta(proxPergunta) {
    proxPergunta.style.display = "block";
    proxPergunta.style.opacity = 0;
    proxPergunta.style.transform = "translateY(20px)";
    setTimeout(() => {
        proxPergunta.style.transition = "all 0.5s ease";
        proxPergunta.style.opacity = 1;
        proxPergunta.style.transform = "translateY(0)";
    }, 50);
}

function mostrarErro(elemento, mensagem) {
    elemento.textContent = mensagem;
    elemento.className = "resultado errado";
    elemento.style.animation = "none";
    elemento.offsetHeight;
    elemento.style.animation = "shake 0.5s";
}

document.querySelector("#enviar1").addEventListener("click", () => {
    let q1 = document.querySelector("input[name='q1']:checked");
    let res1 = document.querySelector("#res1");
    let p2 = document.querySelector("#pergunta2");

    if (q1) {
        if (q1.value === "certo") {
            res1.textContent = "✅ Parabéns, você acertou!";
            res1.className = "resultado certo";
            document.querySelector("#mensagem1").innerHTML="O óxido de índio é composto por dois átomos de índio e três de oxigênio, formando a fórmula In₂O₃, que é a forma mais estável desse óxido.";
            mostrarPergunta(p2);
        } else {
            mostrarErro(res1, "❌ Você errou, tente novamente.");
        }
    } else {
        mostrarErro(res1, "⚠️ Nenhuma opção selecionada.");
    }
});

document.querySelector("#enviar2").addEventListener("click", () => {
    let q2 = document.querySelector("input[name='q2']:checked");
    let res2 = document.querySelector("#res2");
    let p3 = document.querySelector("#pergunta3");

    if (q2) {
        if (q2.value === "certo") {
            res2.textContent = "✅ Parabéns, você acertou!";
            res2.className = "resultado certo";
            document.querySelector("#mensagem2").innerHTML="O óxido de índio (In₂O₃) é um sólido branco acinzentado à temperatura ambiente porque seus átomos estão organizados em uma estrutura cristalina estável. Diferente de líquidos ou gases, ele mantém sua forma e cor devido às fortes ligações iônicas entre o índio e o oxigênio.";
            mostrarPergunta(p3);
        } else {
            mostrarErro(res2, "❌ Você errou, tente novamente.");
        }
    } else {
        mostrarErro(res2, "⚠️ Nenhuma opção selecionada.");
    }
});

document.querySelector("#enviar3").addEventListener("click", () => {
    let q3 = document.querySelector("input[name='q3']:checked");
    let res3 = document.querySelector("#res3");
    let p4 = document.querySelector("#pergunta4");

    if (q3) {
        if (q3.value === "certo") {
            res3.textContent = "✅ Parabéns, você acertou!";
            res3.className = "resultado certo";
            document.querySelector("#mensagem3").innerHTML="O óxido de índio, especialmente quando combinado com estanho (ITO), é transparente e condutor, sendo ideal para eletrônica avançada como telas sensíveis ao toque e células solares.";
            mostrarPergunta(p4);
        } else {
            mostrarErro(res3, "❌ Você errou, tente novamente.");
        }
    } else {
        mostrarErro(res3, "⚠️ Nenhuma opção selecionada.");
    }
});

document.querySelector("#enviar4").addEventListener("click", () => {
    let q4 = document.querySelector("input[name='q4']:checked");
    let res4 = document.querySelector("#res4");
    let p5 = document.querySelector("#pergunta5");

    if (q4) {
        if (q4.value === "certo") {
            res4.textContent = "✅ Parabéns, você acertou!";
            res4.className = "resultado certo";
            document.querySelector("#mensagem4").innerHTML="O índio é raro, então o óxido de índio é normalmente extraído como subproduto de metais mais comuns, como zinco e estanho, durante processos industriais.";
            mostrarPergunta(p5);
        } else {
            mostrarErro(res4, "❌ Você errou, tente novamente.");
        }
    } else {
        mostrarErro(res4, "⚠️ Nenhuma opção selecionada.");
    }
});

document.querySelector("#enviar5").addEventListener("click", () => {
    let q5 = document.querySelector("input[name='q5']:checked");
    let res5 = document.querySelector("#res5");

    if (q5) {
        if (q5.value === "certo") {
            res5.textContent = "✅ Parabéns, você completou o questionário!";
            res5.className = "resultado certo";
            document.querySelector("#mensagem5").innerHTML="O óxido de índio é um semicondutor transparente, isso permite que seja usado em dispositivos eletrônicos sem bloquear a luz, como em displays e painéis solares.";
        } else {
            mostrarErro(res5, "❌ Você errou, tente novamente.");
        }
    } else {
        mostrarErro(res5, "⚠️ Nenhuma opção selecionada.");
    }
});