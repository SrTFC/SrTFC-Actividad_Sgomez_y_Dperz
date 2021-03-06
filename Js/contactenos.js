
vector= []

function procesar(){

    
    
    var nom = document.getElementById('nom').value;
   
    var apel = document.getElementById('apel').value;
    
    var doc = document.getElementById('doc').value;
    
    var ale = document.getElementById('ale').value;
    
    var fec = document.getElementById('fec').value;

    var gen = document.getElementById('gen').value
    
    
    var ed = document.getElementById('ed').value;
    
    var tele= document.getElementById('tele').value;
    
    var cel= document.getElementById('cel').value;
    
    var cor= document.getElementById('cor').value;



    localStorage.setItem('Nombr',nom);

    localStorage.setItem('Apellidos',apel);
    
    localStorage.setItem('Documentos',doc);
    
    localStorage.setItem('Fecha',fec);

    localStorage.setItem('Genero',gen);
    
    localStorage.setItem('Edad',ed);
    
    localStorage.setItem('Telefono',tele);
    
    localStorage.setItem('Celular',cel);
    
    localStorage.setItem('Correo',cor);
   


/*
    localStorage.getItem('Nombre');

    localStorage.getItem('Apellidos');
    
    localStorage.getItem('Contraseña');
    
    localStorage.getItem('Confirmar');
    
    localStorage.getItem('Documentos');
    
    localStorage.getItem('Fecha');
    
    // localStorage.getItem('Genero');
    
    localStorage.getItem('Edad');
    
    localStorage.getItem('Telefono');
    
    localStorage.getItem('Celular');
    
    localStorage.getItem('Correo');
    
    
  */
    

  var variables={


    Nnombre:nom,
    Aapellidos:apel,
    
  
    
    Ddocumentos:doc,
    
    Aalergias:ale,
    
    Ffecha:fec,

    Ggenero:gen,

    Eedad:ed, 

    Ttelefono:tele,

    Ccelular:cel,

    Ccorreo:cor,

    };


    

    
   vector.push(variables)

    dt=
    `<tr>
   <th>Nombre</th>
   <th>Apellidos</th>
   <th>Documento</th>
   <th>Alergias</th>
   <th>Fecha</th>
   <th>Edad</th>
   <th>Telefono</th>
   <th>Celular</th>
   <th>Genero</th>
   <th>Correo</th>
  
   </tr>`

   email= /\w+@\w+\.+[a-z]/;



if (nom==""|| apel==""||  doc==""|| ale==""|| fec==""|| gen==""|| ed=="" || tele==""|| cel==""|| cor==""){

    alert("Obligatorio llenar todos los campos");

    return false;


}else if (isNaN(cel) & isNaN(tele) & isNaN(ed) & isNaN(doc)){


    alert("Celular\nTelefono\nEdad\nDocumento\nDeben ser valores numericos");



}

else if (isNaN(cel )){

    alert("El valor del celular debe ser numero");

    return false;
}

else if(isNaN(ed)){


   
    alert("La edad debe ser numerica");



}else if(isNaN(tele)){



alert("El telefono debe ser numerico");

}else if (isNaN(doc)){

 

 alert("El documento debe ser numero");

    return false;


}else if (!email.test(cor)){


alert("Correo mal escrito");

return false;



}

if (nom!=null|| apel!=null||  doc!=null|| ale!=null|| fec!=null|| gen!=null|| ed!=null || tele!=null|| cel!=null|| cor!=null){


for( var i = 0;i<vector.length;i++){



    
      dt += `
  <tr>
     <th>${vector[i].Nnombre}</th>
     <th>${vector[i].Aapellidos}</th>
     <th>${vector[i].Ddocumentos}</th>
     <th>${vector[i].Aalergias}</th>
     <th>${vector[i].Ffecha}</th>
     <th>${vector[i].Eedad}</th>
     <th>${vector[i].Ttelefono}</th>
     <th>${vector[i].Ccelular}</th>
     <th>${vector[i].Ggenero}</th>
     <th>${vector[i].Ccorreo}</th>
     
  
     </tr> `



    }
 
     document.getElementById('tabla').innerHTML= dt
    
    

    


    document.getElementById("nom").value="";
    document.getElementById("apel").value="";
    document.getElementById("doc").value="";
    document.getElementById("ale").value="";
    document.getElementById("fec").value="";
    document.getElementById("gen").value="";
    document.getElementById("ed").value="";
    document.getElementById("tele").value="";
    document.getElementById("cel").value="";
    document.getElementById("cor").value="";

  }
   
  }























function limpiar(){

 
  document.getElementById("nom").value="";
  document.getElementById("apel").value="";
  document.getElementById("doc").value="";
  document.getElementById("ale").value="";
  document.getElementById("fec").value="";
  document.getElementById("gen").value="";
  document.getElementById("ed").value="";
  document.getElementById("tele").value="";
  document.getElementById("cel").value="";
  document.getElementById("cor").value="";


  }


  







