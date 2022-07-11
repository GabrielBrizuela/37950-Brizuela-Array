const prendas = [     
    {producto: 'Pantalón deportivo', precio: 4800},     
    {producto: 'Remera entrenamiento', precio: 3500},     
    {producto: 'Campera entrenamiento', precio: 7500},     
    {producto: 'Calzado deportivo', precio: 9800},     
    {producto: 'Medias anatomicas', precio: 800},     
    {producto: 'Calzas termicas', precio: 2300},
    {producto: 'Buzo termico', precio: 6400},
    {producto: 'Guantes de neopren entramiento', precio: 2100},
];

class producto {
    constructor (producto, precio) {
        this.producto=producto,
        this.precio=precio
    }
}

function agregarProducto(){
    const maya = new producto ("Maya natación", 3290);
    prendas.push(maya)

    const gorras = new producto ("Gorras", 1200);
    prendas.push(gorras)
}

agregarProducto();
console.log(prendas);

