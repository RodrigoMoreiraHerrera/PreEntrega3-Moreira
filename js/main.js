const Producto = function(id,nombre,descripcion,precio,stock,img,descuento){
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
    this.descuento = descuento;
}

const ProductoCarrito = function(nombre,precio) {
    this.nombre = nombre
    this.precio = precio
}


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



function renderProductos (){
    let containerProductos = document.getElementById("containerProductos")

    productos.forEach(elemento => {
        const card = document.createElement("div")
        card.className = "card"
        card.style = "width: 14rem;"
        
        const img = document.createElement("img")
        img.className = "card-img-top"
        img.src = elemento.img
        img.alt = "Imagen de producto"

        const cardBody = document.createElement("div")
        cardBody.className = "card-body"

        const title = document.createElement("h5")
        title.className = "card-title"
        title.innerHTML = elemento.nombre

        const desc = document.createElement("p")
        desc.className = "card-text"
        desc.innerHTML = elemento.descripcion

        cardBody.appendChild(title)
        cardBody.appendChild(desc)
//debugger
        if (elemento.descuento != undefined) {
            const descuento = document.createElement("p")
            descuento.className = "descuento"
            descuento.innerHTML = `${elemento.descuento}% DE DESCUENTO`

            let precioDescuento = elemento.precio - (elemento.precio * elemento.descuento / 100)
            const precio = document.createElement("h6")
            precio.className = "text-end"
            precio.innerHTML = `$ ${precioDescuento}`

            cardBody.appendChild(descuento)
            cardBody.appendChild(precio)
        
        } else {
            const precio = document.createElement("h6")
            precio.className = "text-end"
            precio.innerHTML = `$ ${elemento.precio}`

            cardBody.appendChild(precio)
        }

        const btn = document.createElement("a")
        btn.className = "btn btn-primary"
        btn.innerHTML = "Agregar al carrito"
        btn.onclick = function () {
                let productoCarrito = new ProductoCarrito (elemento.precio,elemento.precio)
                carrito.push (productoCarrito)
                localStorage.setItem("carrito", JSON.stringify(carrito))
                console.table(carrito)
            }

        
        cardBody.appendChild(btn)
        card.appendChild(img)
        card.appendChild(cardBody)
        containerProductos.appendChild(card)

    });
}


function renderOfertas () {
    let carouselInner = document.getElementById("carouselDescInner")
    let ofertas = productos.filter(elemento => elemento.descuento != undefined)
    ofertas.forEach(elemento => {

        const item = document.createElement("div")
        elemento == ofertas[0] ? item.className = "carousel-item active" :
        item.className = "carousel-item"

        const card = document.createElement("div")
        card.className = "card cardDescuento d-block w-50"
        card.style = "width: 14rem;"
        
        const img = document.createElement("img")
        img.className = "card-img-top"
        img.src = elemento.img
        img.alt = "Imagen de producto"

        const cardBody = document.createElement("div")
        cardBody.className = "card-body"

        const title = document.createElement("h5")
        title.className = "card-title"
        title.innerHTML = elemento.nombre

        const desc = document.createElement("p")
        desc.className = "card-text"
        desc.innerHTML = elemento.descripcion

        const descuento = document.createElement("p")
            descuento.className = "descuento"
            descuento.innerHTML = `${elemento.descuento}% DE DESCUENTO`

            let precioDescuento = elemento.precio - (elemento.precio * elemento.descuento / 100)
            const precio = document.createElement("h6")
            precio.className = "text-end"
            precio.innerHTML = `$ ${precioDescuento}`

        const btn = document.createElement("a")
        btn.className = "btn btn-primary btn-agregar-carrito"
        btn.innerHTML = "Agregar al carrito"
        btn.onclick = function () {
            //let productoCarrito = new ProductoCarrito (elemento.precio,precioDescuento)
            carrito.push (new ProductoCarrito (elemento.precio,precioDescuento))
            localStorage.setItem("carrito", JSON.stringify(carrito))
            console.table(carrito)
        }

        const cartel = document.createElement("p")
        cartel.className = "descuento"
        cartel.innerHTML = elemento.descuento + " % DE DESCUENTO"

        cardBody.appendChild(title)
        cardBody.appendChild(desc)
        cardBody.appendChild(descuento)
        cardBody.appendChild(precio)
        cardBody.appendChild(btn)
        card.appendChild(img)
        card.appendChild(cardBody)
        item.appendChild(card)
        carouselInner.appendChild(item)
    });
}





let productos = JSON.parse(localStorage.getItem("productos"));
productos == null ?  productos = [asus, auricularesJbl, consolaPioneer, ipad, joystick, pcGamer, play5, sillaGamer, tvXiaomi] : productos;
localStorage.setItem("productos", JSON.stringify(productos))

let carrito = JSON.parse(localStorage.getItem("carrito"));
productos == null ?  productos = [] : productos;

//let ofertas = JSON.parse(localStorage.getItem("ofertas"));
//ofertas == null ? ofertas = [asus, auricularesJbl, consolaPioneer, ipad] : ofertas;



    
renderProductos()

renderOfertas()
