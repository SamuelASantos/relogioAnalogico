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
}

function fixZero(time) { // Adiciona um prefixo zero caso o número seja inferior a 10
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000); // Executa uma função infinitamente. 1º PARÂMETRO = nome da função sem os (); 2º PARÂMETRO = tempo em ms