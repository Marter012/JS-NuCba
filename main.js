let saveCuentas = JSON.parse(localStorage.getItem(`saveCuentas`)) || [{
}] 

let CompraReserva = JSON.parse(localStorage.getItem(`CompraReserva`)) || [];
/*-----------------------------------------------------------------------------------------------------------------------------------*/

const servicios = [
    {
        id:1,
        nombre: "Tinte" ,
        img: `./img/section/servicios/tinte.jpg`,
        precio: 5000,
    },
    {
        id:2,
        nombre: "Barba" ,
        img: `./img/section/servicios/barba.jpg`,
        precio: 700,
    },
    {
        id:3,
        nombre: "Corte Niño",
        img: `./img/section/servicios/niño.jpg`,
        precio: 700,
    },
    {
        id:4,
        nombre: "Corte Adulto",
        img: `./img/section/servicios/corte.jpg`,
        precio: 1000,
    },
    {
        id:5,
        nombre: "Corte y Barbar" ,
        img: `./img/section/servicios/corte y barba.jpg`,
        precio: 1400,
    },,
    {
        id:6,
        nombre: "Mascarilla Negra",
        img: `./img/section/servicios/mascarilla.jpg`,
        precio: 1500,
    },
    {
        id:7,
        nombre: "Tratamiento Facial Simple",
        img: `./img/section/servicios/depilado.jpg`,
        precio: 1500,
    },
    {
        id:8,
        nombre: "Tratamiento Facial Completo" ,
        img: `./img/section/servicios/depilado barba.jpg`,
        precio: 2500,
    }
]

const renderServicio = (servicio)=> {
    const {id,img,nombre,precio} = servicio
    return`
            <div class="cont-servicios-opc">                
                <div>
                    <img src="${img} " alt="">
                </div>
                <h4 class="p1">${nombre}</h4>
                <div class="cont-servicios-texto ocultar
                ">
                    <p >$${precio}</p>
                    <button class="reserva" id="${id}"  data-id='${id}'>Reservar</button>
                </div>
            </div>
    `
}
const renderServicios = servicios => {
    contenedorServicios.innerHTML = servicios.map(renderServicio).join("");
}

/*-----------------------------------------------------------------------------------------------------------------------------------*/

const productos = [
    {   
        id: 9,
        categoria: "maquina",
        nombre: `Kit maquina 1`,
        titulo: "Máquina Clipper de Corte Profesional Super Motor con cable Babyliss Pro" ,
        precio: 34990,
        img: `./img/section/productos/1.jpg`,
        descrip: `El Kit Contiene:
        <br> - Cable fijo a toma 220v.
        <br> - 5 posiciones de cuchillas.
        <br> - Cuchilla acero inoxidable.
        <br> - 8 Peines.
        <br> - Aceite Lubricante.
        <br> - Cepillo de limpieza.`,
    },
    {   
        id: 10,
        categoria: "maquina",
        nombre: `Kit maquina 2`,
        titulo: "B-WAY Combo Maquina Corta Pelo Prof. + Shaver B-way Ultra King" ,
        precio: 50000,
        img: `./img/section/productos/2.jpg`,
        descrip: `El Kit Contiene:
        <br> - 4 peines guía magnéticos (1.5mm, 3mm, 4.5mm, 6mm),
        <br> - Peine de borde plano
        <br> - Tijera
        <br> - Protector de cuchilla
        <br> - Aceite lubricante
        <br> - Cepillo de limpieza
        <br> - Llave de ajuste`,
    },
    {
           
        id: 11,
        categoria: "maquina",
        nombre: `Kit maquina 3`,
        titulo: "Maquina Cortar Pelo Wahl Extreme Grip Barbero Profesional" ,
        precio: 19000,
        img: `./img/section/productos/3.jpg`,
        descrip: `El Kit Contiene:
        <br> - Clipper
        <br> - Caja de almacenamiento
        <br> - 10 peines de fijación (# 1-8, peines cónicos para la oreja izquierda y derecha)
        <br> - Peines guia: 3mm, 6mm, 10mm, 13mm, 16mm, 19mm, 22mm, 25mm.
        <br> - tijera
        <br> - Peine de peluquero
        <br> - Aceite de cuchilla
        <br> - Cepillo de limpieza`,
    },
    {   
        id: 12,
        categoria: "ceras",
        nombre: `Sir Fausto`,
        titulo: "Cera Barbería Pelo Cabello Sir Fausto Pomada Suave 100gr" ,
        precio: 2300,
        img: `./img/section/productos/4.jpg`,
        descrip: `
        <br> - Brinda engrosamiento de la fibra capilar por humectación
        <br> - Suaviza y acondiciona
        <br> - Se puede aplicar tanto en pelo húmedo como seco
        <br> - 100 % natural de extracto de Quina,Abedul,Romero y Ortiga Blanca protegiendo el cuero cabelludo`,
    },
    {   
        id: 13,
        categoria: "ceras",
        nombre: `Don Barbero`,
        titulo: "Cera Fijadora Don Barbero Maxybelt" ,
        precio: 15000,
        img: `./img/section/productos/5.jpg`,
        descrip: `
        <br> - Sensación de frescura.
        <br> - Regenera el pelo de la barba y bigote.
        <br> - Humecta la piel evitando así su resecamiento y descamación.
        <br> - Brillo y suavidad sin dejar sensación grasosa.
        <br> - Antiséptico.
        <br> - Sellador de puntas.
        <br> - Evita el frizz.
        <br> - Antioxidante.
        `,
    },
    {   
        id: 14,
        categoria: "ceras",
        nombre: `Mr Blonde`,
        titulo: "Cera Pomade Mr Blonde Barberia" ,
        precio: 2000,
        img: `./img/section/productos/6.jpg`,
        descrip: `
        <br> - Cera pomade mr blonde barbería suave estilo barbero.
        <br> - Fácil lavado. 
        <br> - No deja residuos.
        <br> - Aroma Cherry.
        `,
    },
    {   
        id: 15,
        categoria: "navajas",
        nombre: `Navaja Zeepk`,
        titulo: "NAVAJA CUCHILLA MAQUINILLA DE AFEITAR 10 AZUL ZEEPK USA" ,
        precio: 2400,
        img: `./img/section/productos/7.jpg`,
        descrip: `Navaja con mango de resina color bordo, textura fina anti deslizante
        con agarre facil para corte.`,
    },
    {   
        id:16,
        categoria: "navajas",
        nombre: `Navaja Eurostil`,
        titulo: "Navaja Navajin Barbero Peluquero Eurostil + 10 Filos Cloud" ,
        precio: 1500,
        img: `./img/section/productos/8.jpg`,
        descrip: `Navaja con mango angosto y de plastico color negro.`,
    },
    {   
        id: 17,
        categoria: "navajas",
        nombre: `Navaja Lord`,
        titulo: "Navajas De Afeitar De Barbero Profesional Acero Inoxidable Estuche De Cuero Lord 100 Blades" ,
        precio: 7000,
        img: `./img/section/productos/9.jpg`,
        descrip: `Navaja profesional, mango de acero inoxidable, antidestilzante, con agarra firme recubierto por silicona`,
    },
]


const renderProducto = (producto)=> {
    const {id,img,titulo,precio,descrip} = producto
    return`
            <div class="cont-productos-opc">                
                <div>
                    <img src="${img} " alt="">
                </div>
                <h4>${titulo}</h4>
                <p>${descrip} </p>
                <div class="cont-productos-opc-texto ocultar ">
                    <h5>$${precio}</h5> 
                    <button class="comprar" id="${id}" data-id='${id}' >Comprar</button>
                </div>
            </div>
    `
}
const renderProductos = productos => {
    contenedorProductos.innerHTML = productos.map(renderProducto).join("");
}

/*-----------------------------------------------------------------------------------------------------------------------------------*/
const estaVacio = (valor) =>!valor == "" ? true : false;
 
const showError = (input,message) => {  
    input.classList.remove(`success`)
    input.classList.add(`error`)
    const divPadre = input.parentElement;
    const error = divPadre.querySelector(`span`)
    error.textContent = message;
}

const showSuccesse = input => {
    input.classList.add(`success`)
    input.classList.remove(`error`)
    const divPadre = input.parentElement;
    const error = divPadre.querySelector(`span`)
    error.textContent = "";
}
const showStart = input => {
    input.classList.remove(`success`)
    input.classList.remove(`error`)
    const divPadre = input.parentElement;
    const error = divPadre.querySelector(`span`)
    error.textContent = "";
}
const emailValido = email => {
    const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    return re.test(email)
}

const checkEmailLogin = (email) => {
    let valid = false;
    const emailValor = email.value
    let CuentaFiltrada = saveCuentas.filter(cuentas => cuentas.email === emailValor)
    if(!estaVacio(emailValor)){
        showError(email,`El email es obligatorio`)
        valid = false;
    }else if(!emailValido(emailValor)){      
        showError(email,`El Email no es valido`)
        valid = false;
    }else if(!CuentaFiltrada.length){
        showError(email,`No existe una cuenta vinculada con el email`)
        valid = false;
    }else{
        showSuccesse(email)
        valid = true;
    }
    return valid;
}
const checkPassLogin = () => {
    let valid = false;
    const passValor = password.value;
    let CuentaFiltrada = saveCuentas.filter(cuentas => cuentas.email === email.value)
    if(!estaVacio(passValor)){
        valid = false;
        showError(password,`La contraseña es obligatoria`)        
    }else{
        MapContraseña(passValor,CuentaFiltrada)
        valid = MapContraseña(passValor,CuentaFiltrada)
    } return valid
}

const MapContraseña = (contraseña,cuenta) => { 
    let valid = false;
    let comprobacion = cuenta.filter(cuenta => cuenta.password === contraseña)   
    if(!comprobacion.length){
        showError(password,`Contraseña Incorrecta`);
        valid = false;
    }else{
        showSuccesse(password)
        valid = true
    } return valid
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/
const renderTotal = (CompraReserva) => {
    let suma = 0;
    CompraReserva.forEach(element => {
        suma = suma + element.precio        
    });
    contenedorSumaTotal.innerHTML=
    `
        <p>Total</p>
        <p>$${suma} </p>
    `
}

/*-----------------------------------------------------------------------------------------------------------------------------------*/
const verificarCuenta = (e) =>{
    e.preventDefault();
    let checkCuentaE = checkEmailLogin(email);
    let checkCuentaP = checkPassLogin()
    let formularioValido = checkCuentaE && checkCuentaP;
    vaciarCarrito();
    if(!formularioValido)return           
    setTimeout(() => {
        btnCarrito.classList.remove(`ocultar`);
        btnExit.classList.remove(`ocultar`);
        btnMiCuenta.classList.add(`ocultar`)
        cerraPestaña(pestañaCuenta);  
        for(let i = 0; i < contenedorTextoServcio.length;i++){
            contenedorTextoServcio[i].classList.remove(`ocultar`)            
        }
        for(let i = 0; i < contenedorTextoProducto.length;i++){
            contenedorTextoProducto[i].classList.remove(`ocultar`)            
            contenedorClassProducto[i].classList.add(`intro`)
        }
    }, 1000);    
}

const abrirPestaña = (valor) => {  
    valor.classList.remove(`ocultar`)
    overlay.classList.remove(`ocultar`)
};
const cerraPestaña = (valor) => {          
   showStart(email);
   showStart(password); 
   showStart(inputApellido);
   showStart(inputNombre);
   showStart(inputEmail);
   showStart(inputPassword);
   valor.classList.add(`ocultar`)
   overlay.classList.add(`ocultar`)
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/
const saveLocalStorageReservas = () =>localStorage.setItem(`CompraReserva`,JSON.stringify(CompraReserva))

const renderPedido = (pedido) => {
    const {img,precio,nombre,id} = pedido
    let back = ""
    if(id > 9){back = `carritoEstilo-Servicio`}
    return `
                <div class="carritoEstilo-producto ${back} ">
                    <img src="${img}" alt="">
                    <h4>${nombre}</h4>
                    <p>$${precio}</p>
                </div> 
    `
}
const renderPedidos = (CompraReserva)=>{
    contenedorCarrito.innerHTML= CompraReserva.map(item => renderPedido(item)).join("");
}
const agregarPedidoReserva = (e) => {
    if(!e.target.classList.contains(`reserva`)){return}
    const {id} = e.target.dataset;
    const data = servicios.filter(item=>item.id == id)
    CompraReserva = [...CompraReserva, data[0]]
    renderTotal(CompraReserva);
    comprobarCarrito();
    renderPedidos(CompraReserva);
    saveLocalStorageReservas();    
    abrirPestaña(pestañaCarrito)
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/
const agregarCompraProducto = (e) => {
    if(!e.target.classList.contains(`comprar`))return    
    const {id} = e.target.dataset;
    const data = productos.filter(item=>item.id == id)
    CompraReserva = [...CompraReserva, data[0]]        
    renderTotal(CompraReserva);
    comprobarCarrito();
    renderPedidos(CompraReserva);
    saveLocalStorageReservas();    
    abrirPestaña(pestañaCarrito)
}

const vaciarCarrito =() => {
    CompraReserva = []
    renderTotal(CompraReserva);
    comprobarCarrito();
    renderPedidos(CompraReserva);
    saveLocalStorageReservas();
}

const comprobarCarrito = () => {
    if(!CompraReserva.length){
        btnVaciar.classList.add(`ocultar`)
        btnComprar.classList.add(`ocultar`)
        contenedorCarritoVacio.classList.remove(`ocultar`)
    }else{
        btnVaciar.classList.remove(`ocultar`)
        btnComprar.classList.remove(`ocultar`)
        contenedorCarritoVacio.classList.add(`ocultar`)
    }
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/
const saveLocalStorageCuentas = () =>localStorage.setItem(`saveCuentas`,JSON.stringify(saveCuentas))

const checkEmailRegisro = (email) => {
    let inputValido = false
    const emailValor = email.value
    if(!estaVacio(emailValor)){
        showError(inputEmail,`El email es obligatorio`)
    }else if(!emailValido(emailValor)){      
        showError(inputEmail,`El Email no es valido`)
    }else{
        email.classList.remove(`error`)
        inputValido = true;
    }
    return inputValido;
}
const PassSegura = pass => {
    const re =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    return re.test(pass)
}
const checkPassRegistro = (pass) => {
    let inputValido = false
    const passValor = pass.value.trim()
    if(!estaVacio(passValor)){
        showError(pass,`La contraseña es obligatoria`)        
    }else if (!PassSegura(passValor)){
        showError(pass,`La contraseña no es segura debe tener como minimo 1 mayuscula, 1 minuscula, numeros y 1 simbolo.`)
    }else{
        showSuccesse(pass); 
        inputValido = true;
    }
    return inputValido;
}
const nombreObligatorio = (nombre)=> { 
    let inputValido = false
    let NombreValor = inputNombre.value.trim();
    if(!estaVacio(NombreValor)){
        showError(nombre,"Campo Obligatorio");
    }else{
        showSuccesse(nombre);  
        inputValido = true;
    }
    return inputValido;
}
const ApellidoObligatorio = (apellido)=> { 
    let inputValido = false
    let ApellidoValor = inputApellido.value.trim();
    if(!estaVacio(ApellidoValor)){
        showError(apellido,"Campo Obligatorio");
    }else{
        showSuccesse(apellido);
        inputValido = true;    
    }
    return inputValido;
}
const agregarCuenta = (e) => {
    e.preventDefault();
     let NombreValor = inputNombre.value.trim();
     let ApellidoValor = inputApellido.value.trim();
     let EmailValor = inputEmail.value.trim();
     let PasswordValor = inputPassword.value.trim(); 

     let NombreValorValido = ApellidoObligatorio(inputApellido);
     let ApellidoValorValido = nombreObligatorio(inputNombre);
     let EmailValorValido = checkEmailRegisro(inputEmail);
     let PasswordValorValido = checkPassRegistro(inputPassword); 

     let valid = NombreValorValido && ApellidoValorValido && EmailValorValido && PasswordValorValido;
    if(valid){
        if(!saveCuentas.filter(cuenta=> cuenta.email === EmailValor).length){
            saveCuentas = [... saveCuentas,{
                nombre:NombreValor,
                email:EmailValor,
                apellido: ApellidoValor,
                password: PasswordValor,
            }];
        inputEmail.classList.add(`success`)
        cerraPestaña(contenedorRegistro)
        abrirPestaña(pestañaCuenta)
        saveLocalStorageCuentas();   
        return   
        }
        showError(inputEmail,`Email existente.`)  
    }
        
}        

const realizarCompra = () => {
    CompraReserva = [];
    cerraPestaña(pestañaCarrito)    
    overlay.classList.remove(`ocultar`)
    if(window.confirm(`¿Desea confirmar su compra?`)){
        setTimeout(() => {
            saveLocalStorageReservas();
            vaciarCarrito();
            comprobarCarrito();
            renderPedidos(CompraReserva)
            overlay.classList.add(`ocultar`)
            alert(`Pedido Exitoso`)
        }, 1500);
        return
    }
    saveLocalStorageReservas();
    vaciarCarrito();
    comprobarCarrito();
    renderPedidos(CompraReserva);
    overlay.classList.add(`ocultar`);
}
const abrirMenu = () => {
    contenedorMenu.classList.add(`ver`)
    overlay.classList.remove(`ocultar`)
}
const cerrarMenu = ()=> {
    contenedorMenu.classList.remove(`ver`)
    overlay.classList.add(`ocultar`)
}
const direccionarMenu = ()=> {    
    contenedorMenu.classList.remove(`ver`)
    overlay.classList.add(`ocultar`)
    
}
const init = () => {    
    renderTotal(CompraReserva);
    renderProductos(productos);
    renderServicios(servicios); 
    comprobarCarrito();
    renderPedidos(CompraReserva);
    btnMiCuenta.addEventListener(`click`,()=>abrirPestaña(pestañaCuenta));
    overlay.addEventListener(`click`,()=>cerraPestaña(pestañaCuenta)); 
    formIngreso.addEventListener(`submit`,verificarCuenta);
    btnExit.addEventListener(`click`,()=>abrirPestaña(pestañaCuentaExit));    
    overlay.addEventListener(`click`,()=>cerraPestaña(pestañaCuentaExit));
    contenedorServicios.addEventListener(`click`,agregarPedidoReserva)
    contenedorProductos.addEventListener(`click`,agregarCompraProducto)
    btnCarrito.addEventListener(`click`,()=>abrirPestaña(pestañaCarrito))
    overlay.addEventListener(`click`,()=>cerraPestaña(pestañaCarrito));
    btnComprar.addEventListener('click',realizarCompra)
    btnVaciar.addEventListener(`click`,vaciarCarrito)
    btnRegistrarme.addEventListener(`click`,()=>abrirPestaña(contenedorRegistro))
    overlay.addEventListener(`click`,()=>cerraPestaña(contenedorRegistro))
    btnRegistrado.addEventListener(`click`,agregarCuenta)
    btnMenu.addEventListener(`click`,abrirMenu)
    contenedorMenu.addEventListener(`click`,direccionarMenu)
    btnCerrarCuenta.addEventListener(`click`,()=>window.location.replace(`./index.html`))
    btnCloseLogin.addEventListener(`click`,()=>cerraPestaña(pestañaCuenta))
    btnCloseRegister.addEventListener(`click`,()=>{cerraPestaña(contenedorRegistro);cerraPestaña(pestañaCuenta)})
}
init();
