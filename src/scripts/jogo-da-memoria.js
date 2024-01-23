const emojis = [
    "🦑",
    "🦑",
    "🥵",
    "🥵",
    "👩🏽‍💻",
    "👩🏽‍💻",
    "🏋🏽‍♀️",
    "🏋🏽‍♀️",
    "🏋🏽‍♂️",
    "🏋🏽‍♂️",
    "🎮",
    "🎮",
    "📚",
    "📚",
    "🥠",
    "🥠",
];
let cartasAbertas = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (cartasAbertas.length < 2) {
        this.classList.add("boxOpen");
        cartasAbertas.push(this);
    }

    if (cartasAbertas.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (cartasAbertas[0].innerHTML ===
        cartasAbertas[1].innerHTML) {
        cartasAbertas[0].classList.add("boxMatch")
        cartasAbertas[1].classList.add("boxMatch")
    } else {
        cartasAbertas[0].classList.remove("boxOpen");
        cartasAbertas[1].classList.remove("boxOpen");
    }

    cartasAbertas = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu !")
    }
}
