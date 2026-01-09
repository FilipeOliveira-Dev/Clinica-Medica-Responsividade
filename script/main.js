const formularioCadastro = document.querySelector('form');
const nome = document.getElementById('nome');
const tipo = document.getElementById('tipo');
const data = document.getElementById('data');
const horario = document.getElementById('hora');
const observacoes = document.getElementById('obs');

// BUTTON - LIGAÇÃO
function ligarPorVideo() {
    alert("Botao Ligar por Video pressionado!")
}

function ligarPorAudio() {
    alert("Botao Ligar por Áudio pressionado!")
}

function verEndereco(){
    alert("Botao Ver Endereço pressionado!")
}


// MENU FLUTUANTE - BUTTON NOVA CONSULTA
function novaConsultaPresencial() {
    alert("Botao Nova Consulta Presencial pressionado!")
}

function novaConsultaVirtual() {
    alert("Botao Nova Consulta Virtual pressionado!")
}


// BUTTON - MENU DE OPÇÕES
function menuConsultas() {
    alert("Botao Consultas pressionado!")
}

function menuClientes() {
    alert("Botao Clientes pressionado!")
}

function menuRelatorios() {
    alert("Botao Relatórios pressionado!")
}

function abrirMenu() {
    alert("Botao Menu pressionado!")
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
}