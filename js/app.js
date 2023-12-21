let precoTotal = parseInt(separarDados(document.getElementById('valor-total').textContent, 'R$').filter((a,b) => b == 1));

function adicionar()
{                
    let sectionNode = adicionarClasse('carrinho__produtos__produto', document.createElement('section')); 
    let listaSpanNode = [adicionarClasse('texto-azul', document.createElement('span')), adicionarClasse('texto-azul', document.createElement('span'))];
    let listaTextNode = obterDadosDoProduto();
    if (listaTextNode[0] < 1)
    {
        return;
    }
    precoTotal = precoTotal + parseInt(listaTextNode[2]) * parseInt(listaTextNode[0]);
    adicionarElemento(sectionNode, adicionarElemento(listaSpanNode[0], listaTextNode[0] + 'x '));
    adicionarElemento(sectionNode, listaTextNode[1]);
    adicionarElemento(sectionNode, adicionarElemento(listaSpanNode[1], ' R$' + listaTextNode[2]));
    adicionarElemento(document.getElementById('lista-produtos'), sectionNode);
    document.getElementById('valor-total').textContent = 'R$' + precoTotal;
}

function limpar()
{    
    removerFilhos();
    document.getElementById('valor-total').textContent = 'R$' + (precoTotal = 0);
}

function separarDados(texto, separador)
{
    return texto.split(separador);
}

function obterDadosDoProduto()
{
    let listaDadosDoProduto = [document.getElementById('quantidade').value];
    for (const valor of separarDados(document.getElementById('produto').value, ' - R$').values())
    {
        listaDadosDoProduto.push(valor);
    }
    return listaDadosDoProduto;
}

function adicionarClasse(classe,elemento)
{
    elemento.classList.add(classe);    
    return elemento;
}

function adicionarElemento(elementoPai,elementoFilho)
{
    elementoPai.append(elementoFilho);
    return elementoPai;
}

function removerFilhos()
{
    for (const filho of document.querySelectorAll('.carrinho__produtos__produto'))
    {
        document.getElementById('lista-produtos').removeChild(filho);
    }
}