let digitalElement = document.querySelector('.digital'); // Selecionando o elemento com classe 'digital'
let sElement = document.querySelector('.p_s'); // Selecionando o elemento com classe 'p_s'
let mElement = document.querySelector('.p_m'); // Selecionando o elemento com classe 'p_m'
let hElement = document.querySelector('.p_h'); // Selecionando o elemento com classe 'p_h'

function updateClock() {
    let now = new Date(); // Classe que fazemos manipulação de datas, dia, mês, ano, horários..
    let hour = now.getHours(); // Função que retorna a hora
    let minute = now.getMinutes(); // Função que retorna o minuto
    let second = now.getSeconds(); // Função que retorna o segundo

    // ADICIONANDO NO RELÓGIO DIGITAL
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // ADICIONANDO NO RELÓGIO ANALÓGICO
    let sDeg = ((360 / 60) * second) - 90; // Calcula o ângulo do ponteiro. 360 (Total do círculo), 60 (Total dos minutos), -90 (Para que o ângulo comece de cima e não como padrão para esquerda)
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`; // Adiciona uma propriedade 'transform' com o seu valor no css.
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time) { // Adiciona um prefixo zero caso o número seja inferior a 10
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000); // Executa uma função infinitamente. 1º PARÂMETRO = nome da função sem os (); 2º PARÂMETRO = tempo em ms
updateClock(); // Rodando 1x no início para que não tenha um 'atraso' de 1 seg para começar a rodar a função anterior