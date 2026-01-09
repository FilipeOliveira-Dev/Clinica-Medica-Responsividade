const formularioCadastro = document.querySelector('form');


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
    alert("Consulta salva com sucesso (sem recarregar a página)!");
});