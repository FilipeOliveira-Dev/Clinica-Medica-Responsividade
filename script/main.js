const formularioCadastro = document.querySelector('form');
const nome = document.getElementById('nome');
const tipo = document.getElementById('tipo');
const data = document.getElementById('data');
const horario = document.getElementById('hora');
const observacoes = document.getElementById('obs');

const consultas = document.querySelectorAll('.section__hoje .card__consulta');
const totalDeConsultas = consultas.length;
const headerQtdeConsultas = document.querySelector('.header__info span');
headerQtdeConsultas.innerHTML = `Consultas Hoje: ${totalDeConsultas}`;

const campoDataHoje = document.querySelector('.data__hoje')
const campoDataAmanha = document.querySelector('.data__amanha')
campoDataHoje.innerHTML = `Hoje: ${new Date().toLocaleDateString('pt-BR')}`;
campoDataAmanha.innerHTML = `Amanhã: ${new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}`;

// BUTTON - LIGAÇÃO
function ligarPorVideo() {
    alert("Ligar por Video")
}

function ligarPorAudio() {
    alert("Ligar por Áudio")
}

function verEndereco(){
    alert("Endereço do Paciente")
}


// MENU FLUTUANTE - BUTTON NOVA CONSULTA
function novaConsultaPresencial() {
    alert("Agendar Nova Consulta Presencial");
}

function novaConsultaVirtual() {
    alert("Agendar Nova Consulta Virtual");
}


// BUTTON - MENU DE OPÇÕES
function menuConsultas() {
    alert("Consultas Agendadas")
}

function menuClientes() {
    alert("Meus Clientes")
}

function menuRelatorios() {
    alert("Relatórios das Consultas")
}

function abrirMenu() {
    alert("Menu de Opções")
}


formularioCadastro.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nomePaciente = nome.value;
    const tipoConsulta = tipo.value;
    const dataConsulta = data.value;
    const horarioConsulta = horario.value;
    const obsDoPaciente = observacoes.value;

    inserirConsultaNaLista(nomePaciente, tipoConsulta, dataConsulta, horarioConsulta, obsDoPaciente);
});


function inserirConsultaNaLista(nome, tipo, data, horario, observacoes) {
    const novaConsulta = document.createElement('div');
    let dadosConsulta = "";

    if (tipo === "Presencial"){
        dadosConsulta = `
                    <div class="card__info-consulta">
                        <button class="icone__pin"></button>
                        <p>Consulta no local</p>
                    </div>
                </div>
                <button class="icone__chat"></button>
            </div>    
            
            <div class="card__hora">
                <span>${data} às ${horario}hs</span>
                <div class="card__button">
                    <button class="button__endereco" onclick="verEndereco()">Ver endereço</button>
                </div>
            </div>`;
    } else {
        dadosConsulta = `
                    <div class="card__info-consulta">
                        <button class="icone__camera"></button>
                        <p>Consulta remota</p>
                    </div>
                </div>
                <button class="icone__chat"></button>
            </div>

            <div class="card__hora">
                <span>${data} às ${horario}hs</span>
                <div class="card__button">
                    <button class="button__video" onclick="ligarPorVideo()">Ligar por vídeo</button>
                    <button class="button__audio" onclick="ligarPorAudio()">Ligar por áudio</button>
                </div>
            </div>`
    } 

    novaConsulta.innerHTML = `
        <div class="card__consulta">
            <div class="card__info">
                <img src="/assets/icons/clientes-icone.svg" alt="Foto de Perfil ${nome}">
                <div class="card__info-paciente">
                    <h4>${nome}</h4>

                ${dadosConsulta}
        </div>`;

    document.querySelector(".section__proximo-mes").appendChild(novaConsulta);
    alert("Consulta agendada com sucesso!");

    limparFormulario();
}

function limparFormulario() {
    nome.value = "";
    tipo.value = "";
    data.value = "";
    horario.value = "";
    observacoes.value = "";
}