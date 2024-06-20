
///////////////////////////////////////////////////////


function btnEliminar (x) {
    let btnEliminar = document.createElement("button")
    btnEliminar.className = "btn btn-danger"
    btnEliminar.innerHTML ='<i class="bi bi-trash3-fill"></i>'

    btnEliminar.onclick = function () {
        let fila = this.parentNode.parentNode
        fila.remove()
        let id = fila.children[1].innerHTML
        carrito.splice(id,1)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    return btnEliminar

}

//////////////////////////////////////////////////////

function pintarCarrito (arr) {
    
    arr.forEach(elemento => {
        let fila = document.createElement("tr")

        let th = document.createElement("th")
        x = arr.map(x => x.nombre).indexOf(elemento.nombre) 
        th.innerHTML = x + 1

        let cant = document.createElement("td")
        cant.textContent = elemento.cantidad

        let nomb = document.createElement("td")
        nomb.textContent = elemento.nombre

        let prec = document.createElement("td")
        prec.className = "text-end"
        prec.textContent = elemento.precio

        let btn = btnEliminar()


        fila.appendChild(th)
        fila.appendChild(nomb)
        fila.appendChild(cant)
        prec.appendChild(btn)
        fila.appendChild(prec)

        let tabla = document.getElementById("bodyTablaCarrito")
        tabla.appendChild(fila)


    })
}
let carrBody = document.getElementById("bodyTablaCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito"));
    if (carrito == null) { 
        carrito = [] 
        carrBody.innerHTML = `NO SE AGREGO LNINGUN PRODUCTO`
    } 

    carrito.length == 0 ? carrBody.innerHTML = `NO SE AGREGO LNINGUN PRODUCTO` : pintarCarrito(carrito)
console.log(carrito)

//pintarCarrito(carrito)