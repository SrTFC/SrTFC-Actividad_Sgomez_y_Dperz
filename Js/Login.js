
 
 
 
 let inicio =String
 let flag = null






function logeo(){

   let user = document.getElementById("user").value;

   let pass = document.getElementById("pass").value;



if((user.length == 0) & (pass.length == 0)){
    alert("Llenar ambos campos")
}
   else if(user.length == 0){
    alert("Ingrese un usuario")

   }else if (pass.length == 0){

    alert("Ingrese una contraseña")
   }else{
   
fetch('/Jason/Login.json')

.then(function(respuesta){

return respuesta.json()

})

.then(function(data){


data.forEach(function(val) {
    
if(val.usuario==user){
    if(val.contraseña==pass){
   
        

    alert("Bienvenid@: "+ val.nombre  +" " + val.apellido)
   inicio= (val.nombre) + " "+ (val.apellido)
   flag=true
    localStorage.setItem("Nombre", inicio);

    window.location.href="../index.html"
   

    }else{

        alert("Contraseña incorrecta")
        flag=true
    }
}

// User es el input

})

if(flag==null){

    alert("Usuario incorrecto")
}


})
   
.catch(function(error){

    alert(error)
})

}



}


function mostrar(){

   

    var nom = localStorage.getItem('Nombre')
    
    

document.getElementById('datos').innerHTML= "Bienvenido: "+nom;





}

function cerrar(){

    document.getElementById('datos').innerHTML= " ";
    localStorage.removeItem('Nombre');

    alert("Inicie sesion para continuar")
    window.location.href="html/login.html"
    
  
}





