
function crearBtnMas(nombre,descripcion,img) {
    const btnMas = document.createElement("button");
    btnMas.type = "button";
    btnMas.className = "btn btn-primary";
    btnMas.innerHTML = "Mas";

    let modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = "myModal";
    modal.tabIndex = "-1";
    modal.arialabelledeby = "myModalLabel";
    modal.ariaHidden = "true";

    let modalDialog = document.createElement("div");
    modalDialog.className = "modal-dialog";

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    let modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";

    let modalTitle = document.createElement("h5");
    modalTitle.className = "modal-title";
    modalTitle.id = "myModalLabel";
    modalTitle.innerHTML = nombre;

    let btnCerrar = document.createElement("button");
    btnCerrar.type = "button";
    btnCerrar.className = "btn-close";
    btnCerrar.ariaLabel = "Close";
    btnCerrar.onclick = function () {
        myModal.hide();
    }

    let modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.innerHTML = descripcion;

    let modalFooter = document.createElement("div")
    modalFooter.className = "modal-footer";

    //let btnAgregar = btn;
    //btn AGREGAR AL CARRITO

    let btnCarrarFooter = document.createElement("button");
    btnCarrarFooter.type = "button";
    btnCarrarFooter.className = "btn btn-secondary";
    btnCarrarFooter.innerHTML = "Cerrar";
    btnCarrarFooter.onclick = function () {
        myModal.hide();
    }

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(btnCerrar);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    //modalFooter.appendChild(btnAgregar);
    modalFooter.appendChild(btnCarrarFooter);

    modalDialog.appendChild(modalContent);

    modal.appendChild(modalDialog);

    const myModal = new bootstrap.Modal(modal);

    btnMas.onclick = function () {
        myModal.show();
    };
}



function crearBtnAgregar (nombre,precio) {
        const btn = document.createElement("button")
        btn.type = "button"
        btn.className = "btn btn-primary"
        btn.innerHTML = "Agregar al carrito"
        btn.onclick = function () {
            
                let nombre = nombre
                let precio = precio
                let productoCarrito = new ProductoCarrito (nombre,precio,1)
                
                let verif = carrito.map(elemento => elemento.nombre).indexOf(nombre)
                verif != -1 ? carrito[verif].cantidad ++ : 
                
                carrito.push (productoCarrito)
                localStorage.setItem("carrito", JSON.stringify(carrito))
                console.table(carrito)
            }
}


function renderCard (imgP,nombreP,descripcionP,descuentoP,precioP) {
        const card = document.createElement("div")
        card.className = "card"
        card.style = "width: 14rem;"
        
        const img = document.createElement("img")
        img.className = "card-img-top"
        img.src = imgP
        img.alt = "Imagen de producto"

        const cardBody = document.createElement("div")
        cardBody.className = "card-body"

        const title = document.createElement("h5")
        title.className = "card-title"
        title.innerHTML = nombreP

        const desc = document.createElement("p")
        desc.className = "card-text"
        desc.innerHTML = descripcionP

        cardBody.appendChild(title)
        cardBody.appendChild(desc)

        let precioAhora;

        if (descuentoP != undefined) {
            precioAhora = precioP - (precioP * descuentoP / 100)
            const descuento = document.createElement("p")
            descuento.className = "descuento"
            descuento.innerHTML = `${descuentoP}% OFF`

            const precio = document.createElement("h6")
            precio.className = "text-end"
            precio.innerHTML = `$ ${precioAhora}`

            cardBody.appendChild(descuento)
            cardBody.appendChild(precio)

        } else {
            precioAhora = precioP
            const precio = document.createElement("h6")
            precio.className = "text-end"
            precio.innerHTML = `$ ${precioP}`

            cardBody.appendChild(precio)
        }

        const btnAgregar = crearBtnAgregar(nombreP,precioAhora);

        const btnMas = crearBtnMas(nombreP,descripcionP,precioAhora);
        
        cardBody.appendChild(btnAgregar)
        cardBody.appendChild(btnMas)
        card.appendChild(img)
        card.appendChild(cardBody)
        containerProductos.appendChild(card)

    } 

