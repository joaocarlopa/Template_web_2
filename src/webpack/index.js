import '../assets/css/style.css';
import '../assets/css/normalize.css';
import { async } from 'regenerator-runtime';



const soma = document.querySelector('.btnS');
const menos = document.querySelector('.btnM');
const int1 = document.getElementById('int1');
const int2 = document.getElementById('int2');
const int3 = document.getElementById('int3');
const int4 = document.getElementById('int4');
const money = document.getElementById('add_din');
const seta = document.getElementById('seta');
const btnA = document.getElementById('btnA');
const btnR = document.getElementById('btnR');
const banco = document.getElementById('value');
const produto = document.getElementById('produto');
const preco = document.getElementById('preco');
const unidade = document.getElementById('unidade');
const clock = document.getElementById('clock');

setInterval(() => {
    const hora = new Date();
    return clock.innerText = hora.toLocaleTimeString();;
}, 1000);


function chamaOn() {
    seta.onclick = function () {
        money.innerHTML = `<button class="btn btn-primary btn-sm btnA" id='btnA'>+</button><input type='number' class="form-control" id='recebeDin' value='0'><button class="btn btn-secondary btn-sm btnR"  id='btnR'>-</button> <button id='click_add' class="btn btn-success btn-sm add">ADICIONAR</button> `;
        if (chamaOn) {
            seta.onclick = function () {
                money.innerHTML = ``;
                chamaOn();
            }

        }
    }

}

chamaOn();

function iniciaTudo() {

    return {
        valores: 0,
        total: 0,
        banana: 0,
        melancia: 0,
        morango: 0,
        uva: 0,
        chamaClick() {
            this.click();
            this.chamaCor(Number(banco.innerText));
        },
        click() {

            document.addEventListener('click', x => {
                const din_mon = document.getElementById('recebeDin');
                const xr = x.target;








                if (xr.classList.contains('aB')) {
                    this.somaValor(int1);
                }
                if (xr.classList.contains('aC')) {
                    this.somaValor(int2);
                }
                if (xr.classList.contains('aD')) {
                    this.somaValor(int3);
                }
                if (xr.classList.contains('aE')) {
                    this.somaValor(int4);
                }
                if (xr.classList.contains('bA')) {
                    this.fixaValor(int1);
                }
                if (xr.classList.contains('bB')) {
                    this.fixaValor(int2);
                }
                if (xr.classList.contains('bC')) {
                    this.fixaValor(int3);
                }
                if (xr.classList.contains('bD')) {
                    this.fixaValor(int4);
                }
                if (xr.classList.contains('btnA')) {
                    this.somaValor(din_mon);
                }
                if (xr.classList.contains('btnR')) {
                    this.fixaValor(din_mon);
                }
                if (xr.classList.contains('add')) {
                    this.adiciona_din(Number(din_mon.value) - Number(this.total));

                    if (banco.innerText >= 0) return document.querySelector('.quit_div').innerText = '';
                    document.querySelector('.quit_div').innerText = `Adicione mais R$ ${Number(banco.innerText.replace('-', '+'))} e quite suas dívidas`;
                }
                if (xr.classList.contains('btn1')) {
                    if (int1.value <= 0) return alert('Digite ao menos um número');
                    if(int1.value > 100) return alert('Não vendemos acima de 100 unidades');
                    this.banana = this.banana + Number(int1.value);
                    document.getElementById('banana').innerHTML = `<th>${this.banana}</th>
                    <th>${'BANANA'}</th>
                   <th id='valorBanana'>${this.banana * 7.00} R$</th>`
                    const banana_valor = document.getElementById('valorBanana');
                    if (banana_valor.innerHTML === '') return banana_valor.innerHTML = 0;

                    this.valores += Number(banana_valor.innerText.slice(0, -3));

                }
                if (xr.classList.contains('btn2')) {
                    if (int2.value <= 0) return alert('Digite ao menos um número');
                    if(int2.value > 100) return alert('Não vendemos acima de 100 unidades');
                    this.melancia = this.melancia + Number(int2.value);
                    document.getElementById('melancia').innerHTML = `<th>${this.melancia}</th>
                    <th>${'MELANCIA'}</th>
                    <th id='valorMelancia'>${this.melancia * 20.00} R$</th>`;
                    const melancia_valor = document.getElementById('valorMelancia');
                    if (melancia_valor.innerHTML === '') return melancia_valor.innerHTML = 0;
                    this.valores += Number(melancia_valor.innerText.slice(0, -3));

                }
                if (xr.classList.contains('btn3')) {
                    if (int3.value <= 0) return alert('Digite ao menos um número');
                    if(int3.value > 100) return alert('Não vendemos acima de 100 unidades');

                    this.morango = this.morango + Number(int3.value);
                    document.getElementById('morango').innerHTML = ` <th>${this.morango}</th>
                    <th>${'MORANGO'}</th>
                    <th id='valorMorango'>${this.morango * 6.00} R$</th>`;
                    const morango_valor = document.getElementById('valorMorango');
                    if (morango_valor.innerHTML === '') return morango_valor.innerHTML = 0;
                    this.valores += Number(morango_valor.innerText.slice(0, -3));
                }
                if (xr.classList.contains('btn4')) {
                    if (int4.value <= 0) return alert('Digite ao menos um número');
                    if(int4.value > 100) return alert('Não vendemos acima de 100 unidades');
                    this.uva = this.uva + Number(int4.value);
                    document.getElementById('uva').innerHTML = `
                    <th>${this.uva}</th>
                    <th>${'UVA'}</th>
                    <th id='valorUva'>${this.uva * 8} R$</th>`;
                    const uva_valor = document.getElementById('valorUva');
                    if (uva_valor.innerHTML === '') return uva_valor.innerHTML = 0;
                    this.valores += Number(uva_valor.innerText.slice(0, -3));

                }
                if (xr.classList.contains('DELETE')) {
                    this.banana = 0;
                    this.melancia = 0;
                    this.morango = 0;
                    this.uva = 0;
                    this.valores = 0;
                    this.total = 0;

                    document.getElementById('banana').innerText = ' ';
                    document.getElementById('melancia').innerText = ' ';
                    document.getElementById('morango').innerText = ' ';
                    document.getElementById('uva').innerText = ' ';
                }
                if (xr.classList.contains('FINA')) {




                    try {
                        if(this.valores > 100000) return alert('Número máximo de unidades atingido');

                        if (banco.innerText < this.valores) {
                            if (this.valores === 0) return alert('Nada adicionado no carrinho');
                            const alerta = confirm('Saldo insuficiente, deseja fazer um empréstimo?');
                            if (alerta) {
                                banco.innerText = Number(banco.innerText) - Number(this.valores);
                                this.chamaCor(Number(banco.innerText));
                                if (banco.innerText < 0) {
                                    document.querySelector('.quit_div').innerText = `* Adicione mais R$ ${Number(banco.innerText.replace('-', '+'))} e quite suas dívidas *`;
                                }

                                return;
                            }

                            return;
                        }
                        if (banco.innerText >= this.valores) {
                            if (this.valores === 0) return alert('Nada adicionado no carrinho');
                            alert("Compra efetuada com sucesso !");
                            banco.innerText = Number(banco.innerText) - Number(this.valores);

                            return
                        }

                    } catch (error) {
                        alert('Campo inválido ou não preenchido');
                    }



                }
            })
        },

        somaValor(valor) {
            return valor.value++;
        },

        fixaValor(valor) {
            return valor.value <= 0 ? valor.value = 0 : valor.value--;
        },

        adiciona_din(valor) {
            if (banco.innerText < 0) {
                banco.innerText = Number(banco.innerText) + Number(valor);
                this.chamaCor(Number(banco.innerText))

                return;
            }
            this.total = Number(valor) + Number(this.total);
            banco.innerText = this.total + Number(banco.innerText);
            this.chamaCor(Number(banco.innerText));
            return
        },
        chamaCor(valor) {
            if (valor < 0) return banco.classList.replace('green', 'red');
            return banco.classList.replace('red', 'green');
        }
    }
}
const chama = iniciaTudo();
chama.chamaClick();





