const formu = document.getElementById("form");
const nomes = [];
const emails = [];
const telefones = [];
let linhas = '';

formu.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizarTabela();
});

function adicionaLinha(){
    const nomeCompleto = document.getElementById('textArea');
    const email = document.getElementById('emailArea');
    const telefone = document.getElementById('numberArea');

    
    if (nomes.includes(nomeCompleto.value.trim())) {
        alert(`O nome ${nomeCompleto.value} já está na lista!`);
        return;
    }

    if (emails.includes(email.value.trim())) {
        alert(`O email ${email.value} já está na lista!`);
        return;
    }

    if (telefones.includes(telefone.value.trim())) {
        alert(`O telefone ${telefone.value} já está na lista!`);
        return;
    }


    
    nomes.push(nomeCompleto.value);
    emails.push(email.value);
    telefones.push(telefone.value);

    let linha = '<tr>';
    linha += `<td>${nomeCompleto.value}</td>`;
    linha += `<td>${email.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    nomeCompleto.value = '';
    email.value = '';
    telefone.value = '';

}

function atualizarTabela(){
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = linhas;
}
