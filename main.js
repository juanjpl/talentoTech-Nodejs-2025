//alert("Bienvenido/a tu Home Banking");
let pin = "5701";
let ingresar = false;

for(let i =3; i>=1 ; i--){
    let ingreso = prompt("Ingresa tu Pin:")

    if(ingreso === pin){
        alert("Bienvenido ya podes operar!")
        ingresar = true;
        break;
    }else{
        alert("Error en ingreso. Volver a intentar.")
    }
}

if(ingresar){
    let saldo = 30000;
    let opcion = prompt (
        "Elegí una opción: /n1 - Saldo. /n2 - Retiro de dinero. /n3 - Deposito. /nPresioná X para finalizar"
    );
    while(opcion != "x"){
        switch(opcion){
            case "1":
                alert("Tu saldo es :$ " + saldo);
                break;
            default:
                break;
        }
    }

}else{
    alert("Retuvimos tu usuario. Comunicate al 0800-quete-ayude-toto")
}