// js/nova-os.js

// --- CONFIGURAÇÃO PARA CONDIÇÕES ---
const inputCondicao = document.getElementById('input-condicao');
const btnAddCondicao = document.getElementById('btn-add-condicao');
const listaConditions = document.getElementById('lista-condicoes');

function adicionarCondicao() {
    const texto = inputCondicao.value.trim();
    if (texto !== '') {
        const item = document.createElement('div');
        item.className = 'badge-detalhe-equipamento badge-condicao';
        item.innerHTML = `
            <span>${texto}</span>
            <button type="button" class="btn-remove-detalhe">&times;</button>
        `;
        item.querySelector('.btn-remove-detalhe').addEventListener('click', () => item.remove());
        listaConditions.appendChild(item);
        inputCondicao.value = '';
        inputCondicao.focus();
    }
}
if (btnAddCondicao) btnAddCondicao.addEventListener('click', (e) => { e.preventDefault(); adicionarCondicao(); });
if (inputCondicao) inputCondicao.addEventListener('keypress', (e) => { if (e.key === 'Enter') { e.preventDefault(); adicionarCondicao(); } });


// --- CONFIGURAÇÃO PARA ACESSÓRIOS ---
const inputAcessorio = document.getElementById('input-acessorio');
const btnAddAcessorio = document.getElementById('btn-add-acessorio');
const listaAcessorios = document.getElementById('lista-acessorios');

function adicionarAcessorio() {
    const texto = inputAcessorio.value.trim();
    if (texto !== '') {
        const item = document.createElement('div');
        item.className = 'badge-detalhe-equipamento badge-acessorio';
        item.innerHTML = `
            <span>${texto}</span>
            <button type="button" class="btn-remove-detalhe">&times;</button>
        `;
        item.querySelector('.btn-remove-detalhe').addEventListener('click', () => item.remove());
        listaAcessorios.appendChild(item);
        inputAcessorio.value = '';
        inputAcessorio.focus();
    }
}
if (btnAddAcessorio) btnAddAcessorio.addEventListener('click', (e) => { e.preventDefault(); adicionarAcessorio(); });
if (inputAcessorio) inputAcessorio.addEventListener('keypress', (e) => { if (e.key === 'Enter') { e.preventDefault(); adicionarAcessorio(); } });


// --- CONFIGURAÇÃO PARA DEFEITOS RELATADOS ---
const inputDefeito = document.getElementById('input-defeito');
const btnAddDefeito = document.getElementById('btn-add-defeito');
const listaDefeitos = document.getElementById('lista-defeitos');

function adicionarDefeito() {
    const texto = inputDefeito.value.trim();
    if (texto !== '') {
        const item = document.createElement('div');
        item.className = 'badge-detalhe-equipamento badge-defeito';
        item.innerHTML = `
            <span>${texto}</span>
            <button type="button" class="btn-remove-detalhe">&times;</button>
        `;
        item.querySelector('.btn-remove-detalhe').addEventListener('click', () => item.remove());
        listaDefeitos.appendChild(item);
        inputDefeito.value = '';
        inputDefeito.focus();
    }
}
if (btnAddDefeito) btnAddDefeito.addEventListener('click', (e) => { e.preventDefault(); adicionarDefeito(); });
if (inputDefeito) inputDefeito.addEventListener('keypress', (e) => { if (e.key === 'Enter') { e.preventDefault(); adicionarDefeito(); } });
