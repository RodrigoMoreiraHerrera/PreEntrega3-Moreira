const Producto = function(id,nombre,descripcion,precio,stock,img,descuento){
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
    this.descuento = descuento;
}

const ProductoCarrito = function(nombre,precio,cantidad) {
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
}

//let carrito = []

let asus = new Producto (
    "PC",
    "Pc Asus",
    "Pc para todo tipo de tareas, excelentes prestaciones y gran rendimiento.",
    58500,
    15,
    "img/cards/assus/asus.jpg",
    20
)

let auricularesJbl = new Producto (
    "ACC",
    "Auriculares JBL",
    "Auriculares de alta calidad, con gran sonido y gran durabilidad.",
    4500,
    28,
    "img/cards/auriculares-jbl/auri_jbl.jpg",
    30
)

let consolaPioneer = new Producto (
    "ACC",
    "Consola Pioneer",
    "Consola de alta calidad, con gran sonido y gran durabilidad.",
    39000,
    10,
    "img/cards/consola-pioneer/consola-pioneer.jpg",
    25
)

let ipad = new Producto (
    "PC",
    "iPad Pro 12.9",
    "Tableta de alta calidad, con gran pantalla y gran durabilidad.",
    31000,
    20,
    "img/cards/ipad/ipad.jpg"
)

let joystick = new Producto (
    "GAMER",
    "Joystick XBOX",
    "Joystick de alta calidad, con gran durabilidad.",
    3500,
    15,
    "img/cards/joystick/joystick.jpg"
)

let pcGamer = new Producto (
    "GAMER",
    "PC Gamer",
    "PC Gamer de alta calidad, excelentes prestaciones y gran durabilidad.",
    85000,
    10,
    "img/cards/pc-gamer/pc_gamer.jpg"
)

let play5 = new Producto (
    "GAMER",
    "PlayStation 5",
    "Consola de alta calidad y gran durabilidad. Con controles y un juego incluido.",
    60000,
    10,
    "img/cards/play5/play5.jpg"
)

let sillaGamer = new Producto (
    "GAMER",
    "Silla Gamer",
    "Silla de alta calidad y gran durabilidad, regulacion de postura.",
    15000,
    20,
    "img/cards/silla-gamer/silla.jpg"
)

let tvXiaomi = new Producto (
    "ACC",
    "TV Xiaomi 55 pulgadas",
    "TV de alta calidad, con gran pantalla una excelente imagen y gran durabilidad.",
    45000,
    20,
    "img/cards/tv-xiaomi/tv-xiaomi.jpg"
)



///////////////////////////////////////////


function crearBtnAgregar (nombre,precio) {
    const btn = document.createElement("button")
    btn.type = "button"
    btn.className = "btn btn-primary"
    btn.innerHTML = "Agregar al carrito"
    btn.onclick = function () {
        
            let productoCarrito = new ProductoCarrito (nombre,precio,1)
            
            let verif = carrito.map(elemento => elemento.nombre).indexOf(nombre)
            verif != -1 ? carrito[verif].cantidad ++ : 
            
            carrito.push (productoCarrito)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            console.table(carrito)
        }
    return btn;
}


///////////////////////////////////////////////////////////////

function crearBtnMas(nombre,descripcion,precio,img) {
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

    let btnAgregar = crearBtnAgregar(nombre,precio) ;


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

    modalFooter.appendChild(btnAgregar);
    modalFooter.appendChild(btnCarrarFooter);

    modalDialog.appendChild(modalContent);

    modal.appendChild(modalDialog);

    const myModal = new bootstrap.Modal(modal);

    btnMas.onclick = function () {
        myModal.show();
    };

return btnMas;
}

/////////////////////////////////////////////////////////////


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

    const btnMas = crearBtnMas(nombreP,descripcionP,precioAhora,imgP);
    
    cardBody.appendChild(btnAgregar)
    cardBody.appendChild(btnMas)
    card.appendChild(img)
    card.appendChild(cardBody)
    
    return card;

} 




///////////////////////////////////////////////////////////////


function renderProductos (){
    let containerProductos = document.getElementById("containerProductos")

    productos.forEach(elemento => {
        const card =  renderCard (elemento.img,elemento.nombre,elemento.descripcion,elemento.descuento,elemento.precio)
        containerProductos.appendChild(card);

    });
}




function renderOfertas () {
    let carouselInner = document.getElementById("carouselDescInner")
    let ofertas = productos.filter(elemento => elemento.descuento != undefined)
    ofertas.forEach(elemento => {

        const item = document.createElement("div")
        elemento == ofertas[0] ? item.className = "carousel-item active" :
        item.className = "carousel-item"

        const card = renderCard(elemento.img,elemento.nombre,elemento.descripcion,elemento.descuento,elemento.precio)

        card.className += " cardCarru w-50"
        item.appendChild(card)
        carouselInner.appendChild(item)
    });
}





let productos = JSON.parse(localStorage.getItem("productos"));
productos == null ?  productos = [asus, auricularesJbl, consolaPioneer, ipad, joystick, pcGamer, play5, sillaGamer, tvXiaomi] : productos;
localStorage.setItem("productos", JSON.stringify(productos))

let carrito = JSON.parse(localStorage.getItem("carrito"));
carrito == null ?  carrito = [] : carrito;

    
renderProductos()

renderOfertas()
