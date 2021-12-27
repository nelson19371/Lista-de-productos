 class Producto{
     constructor(nombre,precio,anio){
         this.nombre= nombre;
         this.precio=precio;
         this.anio=anio;
         
     }
 }

// CLASE INTERFAZ
 class UI {
     agregarProducto(producto){
         const listaProducto = document.getElementById('product-list');
         const elemento = document.createElement('div');
         elemento.innerHTML= `
            <div class="card text-center mb-4">
                <div class="card-body">
                <strong>Producto</strong>: ${producto.nombre}
                <strong>Precio</strong>: ${producto.precio}
                <strong>Año</strong>: ${producto.anio}
                <a href="#" class="btn btn-danger" name="eliminar" >Eliminar</a>
                </div>
            </div>
         `;
         listaProducto.appendChild(elemento)

     }

     resetearFormulario(){
         document.getElementById('product-form').reset();
     }

     eliminarProducto(element){
         if(element.name==="eliminar"){
            element.parentElement.parentElement.parentElement.remove();
            this.mostrarMensaje("Producto eliminado satisfactoriamente","danger")
         }

     }

     mostrarMensaje(message,cssClass){
        const div= document.createElement('div');
        div.className= `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message))
        //mostrar en el dom
       const container= document.querySelector('.container');
       const app= document.querySelector('#App');
       container.insertBefore(div, app);
       setTimeout(function() {
           document.querySelector(".alert").remove()
       },2000)
     }
 }


//  DOM
document.getElementById('product-form').addEventListener('submit', function(e){
    const nombre= document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const anio = document.getElementById('anio').value;
    
    const producto = new Producto(nombre,precio,anio);
    console.log(producto);
    const ui = new UI();
    ui.agregarProducto(producto);

    ui.resetearFormulario();
    ui.mostrarMensaje('Producto agregado satisfactoriamente', 'success');
    e.preventDefault();
});


document.getElementById('product-list').addEventListener('click', function(e){

    const ui = new UI();
    ui.eliminarProducto(e.target)





  


})
