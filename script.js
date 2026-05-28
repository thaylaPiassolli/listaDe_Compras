let botao = document.getElementById("btnAdicionar");

botao.addEventListener("click", adicionarItem);

function adicionarItem(){

    let input = document.getElementById("inputFruta");

    let texto = input.value.trim();

    if(texto === ""){
        alert("Digite uma fruta!");
        return;
    }

    let lista = document.getElementById("listaCompras");

    let item = document.createElement("li");

    item.innerHTML = `
    
        <div class="item-esquerda">

            <input type="checkbox" class="checkbox">

            <span>${texto}</span>

        </div>

        <button class="remover">X</button>
    
    `;

    let checkbox = item.querySelector(".checkbox");

    let span = item.querySelector("span");

    checkbox.addEventListener("change", function(){

        if(checkbox.checked){
            span.classList.add("comprado");
        }else{
            span.classList.remove("comprado");
        }

    });

    let remover = item.querySelector(".remover");

    remover.addEventListener("click", function(){
        item.remove();
    });

    lista.appendChild(item);

    input.value = "";
}