var exibe = document.getElementById("vai")
var mostrar = document.getElementById("exibe")
var btnEdita = document.getElementById("btnEdita")

mostrar.addEventListener("click", exibeMostrar)

function exibeMostrar() {
    var listaProdutos = []

    function exibirProduto(produtos, index) {    
        
        listaProdutos += '<div id="div_gridada">'
        listaProdutos += '<div>'
        listaProdutos += '<br>'
        listaProdutos += 'Nome: ' + produtos.nome + '<br>';
        listaProdutos += 'descrição: ' + produtos.descricao + '<br>';
        listaProdutos += 'Categoria: ' + produtos.categoria + '<br>';
        listaProdutos += 'Preço: ' + produtos.preco + '<br>';
        listaProdutos += 'Imagem:' + '<img  id = "img_produto" src='+produtos.imagem+' alt="">' + '<br>';
        listaProdutos += '</div>'
        listaProdutos += '<div>'
        listaProdutos += "<button class='editbb' onclick='modificar ("+ index +")'>Editar</button>";
        listaProdutos += '<br>'
        listaProdutos += "<button class='editbb' onclick='objeto.deletar(this)'>Excluir</button>";
        listaProdutos += '</div>'
        listaProdutos += '</div>'
        listaProdutos += '<hr>'
    }

    objeto.produtos.forEach(exibirProduto);

    exibe.innerHTML = listaProdutos;
}

var objeto = {
produtos : [
{
  nome: "Sapato",
  descricao : "Sapato padrão Adicionado manualmente",
  categoria : "Padrão Social",
  preco : 99.99,
  imagem : "Sorria pra fto ! :)"

}
],

adcionar(obj){
this.produtos.push(obj)
exibeMostrar()
},

deletar(num){
console.log(num.parentElement)
this.produtos.splice(num , 1)
exibeMostrar()
},

modificar(num, obj){
this.produtos[num] = obj
exibeMostrar()
}
}

var input1 = document.getElementById("nome")
var input2 = document.getElementById("descricao")
var input3 = document.getElementById("categoria")
var input4 = document.getElementById("preco")
var input5 = document.getElementById("imagem")


var botao = document.getElementById("btn")

function adcionar(){

var obj = {
nome : input1.value,
descricao : input2.value,
categoria : input3.value,
preco : input4.value,
imagem : input5.value
} 

objeto.adcionar(obj)
}


function modificar(index) {
var produto = objeto.produtos[index]

var posicao = document.getElementById("posicao")
var nome = document.getElementById("nomeEdita")
var descricao = document.getElementById("descricaoEdita")
var categoria = document.getElementById("categoriaEdita")
var preco = document.getElementById("precoEdita")
var imagem = document.getElementById("imagemEdita")

posicao.value = index
nome.value = produto.nome
descricao.value = produto.descricao
categoria.value = produto.categoria
preco.value = produto.preco
imagem.value = produto.imagem

}

function editar() {
var posicao = document.getElementById("posicao")
var nome = document.getElementById("nomeEdita")
var descricao = document.getElementById("descricaoEdita")
var categoria = document.getElementById("categoriaEdita")
var preco = document.getElementById("precoEdita")
var imagem = document.getElementById("imagemEdita")

var obj = {
nome: nome.value,
descricao :descricao.value,
categoria : categoria.value,
preco : preco.value,
imagem : imagem.value
}

objeto.modificar(posicao.value, obj)
exibeMostrar()

}

btnEdita.addEventListener("click", editar)
botao.addEventListener("click", adcionar)