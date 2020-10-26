const pronoun = ['The','My','Our'];
const adj = ['great','awesome','small','best','huge'];
const noun = ['tiger','racoon','mouse','web','store'];
const web = ['.net','.com','.io','.es','.cl'];

const randomPage = () => `${pronoun[Math.floor(Math.random() * pronoun.length)]}${adj[Math.floor(Math.random() * adj.length)]}${noun[Math.floor(Math.random() * noun.length)]}${web[Math.floor(Math.random() * web.length)]}`;


const setRandomPage = () => {
    document.getElementById("randomNames").innerText = randomPage();
}

document.getElementById("boton")
.addEventListener("click", setRandomPage);

setRandomPage()