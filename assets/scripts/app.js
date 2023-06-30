
/*

Aluno: Ian Matsuhara Ferraz

Mátricula: 627378

*/



/*

Todos métodos nessa aplicação fazem uso da base de dados fake implementada nos dois arquivos JSON
carrinho.json
dado.json


*/



let carrinho;

fetch('./assets/data/carrinho.json')
.then(response => response.json())
.then(data => {
    carts = data.map(cart => {
    return { 
        produtos:cart.produtos,
    }
    });
    console.log(carts);
    carrinho = JSON.parse(JSON.stringify(carts));
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    console.log(carrinho);
    console.log(carts);
})

console.log(carrinho); 



//----------------------------------------------------------------



let carrier;

    fetch('./assets/data/dado.json')
    .then(response => response.json())
    .then(data => {
        items = data.map(item => {
        return { 
            id:item.id,
            nome: item.nome,
            descricao: item.descricao,
            valor: item.valor,
            categoria: item.categoria,
            marca: item.marca,
            picture: item.picture
        }
        });
        console.log(carrier);
        carrier = JSON.parse(JSON.stringify(items));
        localStorage.setItem('carrier', JSON.stringify(carrier));
        console.log(carrier);
        console.log(carrier);
    })

    



    //----------------------------------------------------------------




var product_scout = JSON.parse(localStorage.getItem('carrier'));
var carrinho_scout = JSON.parse(localStorage.getItem('carrinho'));


console.log(product_scout);
console.log(carrinho_scout);





//----------------------------------------------------------------

//----------------------------------------------------------------





function SendToJson(NewObject){

  console.log(NewObject);
  let carrier = JSON.parse(localStorage.getItem('carrier')) || [];
  let newObjectId = (parseInt(carrier.length))+1;
  const DefNewObject = { id: newObjectId, ...NewObject };
  carrier.push(DefNewObject);
  localStorage.setItem('carrier', JSON.stringify(carrier));
  console.log(carrier);
  
}




//----------------------------------------------------------------




function ResultadoDaPesquisa(){
  window.open("PesquisaResultado.html", "_blank");
}




//----------------------------------------------------------------



function SendToJson2(NewObject){
  localStorage.setItem('searched_item', JSON.stringify(NewObject));
  
}


//----------------------------------------------------------------




function Researcher(){

  const carrinhoDeBusca = [];
  const searchedItem = JSON.parse(localStorage.getItem('searched_item'));
  const carrier = JSON.parse(localStorage.getItem('carrier'));

  console.log(searchedItem.nome);

  for (const key in carrier) {
    if (carrier.hasOwnProperty(key)) {
      if (carrier[key].nome.includes(searchedItem.nome)) {
        carrinhoDeBusca.push(carrier[key]);
      }
    }
  }
  localStorage.setItem('CarrinhoDeBusca', JSON.stringify(carrinhoDeBusca));

}

var researcher_scout = JSON.parse(localStorage.getItem('CarrinhoDeBusca'));
console.log(researcher_scout);




//----------------------------------------------------------------




function OpenPesquisa(){

  window.open("pesquisa.html", "_blank");


}



  
