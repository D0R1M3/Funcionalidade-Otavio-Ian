
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
        id:cart.id,
        produtos:cart.produtos,
        performance: cart.performance
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

  const carrinhoDeBusca_indicator = [];
  const carrinhoDeBusca = [];
  const searchedItem = JSON.parse(localStorage.getItem('searched_item'));
  const carrinho = JSON.parse(localStorage.getItem('carrinho'));

  console.log(searchedItem.performance);
  console.log(carrinho[2].performance);

  console.log(typeof searchedItem.performance);
  console.log(typeof carrinho[2].performance);

  for (let count = 0; count < carrinho.length; count++) {
    if (carrinho[count].performance.toString() === searchedItem.performance) {
      carrinhoDeBusca_indicator.push(carrinho[count].produtos);
      console.log('INSERTION FLAG');
    }
  }
  localStorage.setItem('carrinhoDeBusca_indicator', JSON.stringify(carrinhoDeBusca_indicator));


  const carrier_carrier = JSON.parse(localStorage.getItem('carrier'));


  console.log(carrinhoDeBusca_indicator);
  console.log(carrier_carrier[0].id);
  console.log(carrinhoDeBusca_indicator[0][0]);


  for (let count = 0; count < carrinhoDeBusca_indicator[0].length; count++) {

    console.log('upper_laco');
    

    for (let count2 = 0; count2 < carrier_carrier.length; count2++) {

      console.log(carrier_carrier[count2].id);
      console.log((carrinhoDeBusca_indicator[0][count]));

      if (carrier_carrier[count2].id === (carrinhoDeBusca_indicator[0][count])) {

        carrinhoDeBusca.push(carrier_carrier[count2]);
        console.log('INSERTION FLAG 2');
     }
   }
  }
  localStorage.setItem('carrinhoDeBusca', JSON.stringify(carrinhoDeBusca));
  console.log(carrinhoDeBusca);
} 

//var researcher_scout = JSON.parse(localStorage.getItem('CarrinhoDeBusc_indicator')) || [];
//console.log(researcher_scout_indicator);




//----------------------------------------------------------------




function OpenPesquisa(){

  window.open("pesquisa.html", "_blank");


}



  

