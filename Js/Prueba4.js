
  
vector = []

    function Cargar(){


      

var cantidad1=document.getElementById('Perro').value;
cantidad1= parseInt(cantidad1)
var Perros = document.getElementById("popciones").value;
localStorage.setItem('Perros',cantidad1);

var cantidad2=document.getElementById('Hamburguesa').value;
cantidad2= parseInt(cantidad2)
var Hamburguesa = document.getElementById("hopciones").value;
localStorage.setItem('Hamburguesas',cantidad2);

var cantidad3 = document.getElementById('Pizza').value;
cantidad3= parseInt(cantidad3)
var Pizza = document.getElementById('piopciones').value;
localStorage.setItem("Pizzas",cantidad3)

var cantidad4=document.getElementById('Salchipapa').value;
cantidad4= parseInt(cantidad4)
var Salchipapa=document.getElementById('saopciones').value;
localStorage.setItem('Salchipapas',cantidad4);



if(Perros=="Mexicano"){

var totalPe = parseInt(cantidad1*6000)


}

else if(Perros=="Suizo"){

    totalPe = parseInt(cantidad1*5000)
    
 
    }

    else if(Perros=="Doble"){

        totalPe = parseInt(cantidad1*4000)
       
        
        }
        else if(Perros=="Sencillo"){

            totalPe = parseInt(cantidad1*3000)
            
           
            
            }
    


            


   

  

     

        if(Hamburguesa=="Mixta"){

            var totalha = parseInt(cantidad2*15000)
            

            }
                    
                        else if(Hamburguesa=="Mexicana"){
            
                            totalha = parseInt(cantidad2*20000)
                           
                            
                            }
                            
                               else if(Hamburguesa=="Beacon"){
            
                                            totalha= parseInt(cantidad2*22000)
                                            
                                           
                                            
                                            }
                                            else if(Hamburguesa=="Lafina"){
            
                                                totalha= parseInt(cantidad2*21000)
                                                
                                                
                                                
                                                }else if(Hamburguesa=="Laparea"){
            
                                                        totalha = parseInt(cantidad2*19000)
                                                            
                                                            
                                                            
                                                            }
                                                            else if(Hamburguesa=="Elmedio"){
            
                                                                totalha = parseInt(cantidad2*25000)
                                                                    
                                                                    
                                                                    
                                                              }else if(Hamburguesa=="Mcdomal"){
            
                                                                totalha = parseInt(cantidad2*10000)
                                                                
                                                               
                                                                
                                                                }


if(Pizza=="Currambera"){

    var totalpi = parseInt(cantidad3*25000)


}else if(Pizza=="Sabores"){
      
    totalpi = parseInt(cantidad3*35000 )

   

}   else if(Pizza=="Caprichosa"){

    totalpi = parseInt(cantidad3*26000 )

    
}   else if(Pizza == "Jamon"){


    totalpi = parseInt(cantidad3*18000 )

   
}  



if(Salchipapa=="Salchipollo"){


    var totalSal = parseInt(cantidad4*14000)
       
    }

    else if(Salchipapa=="Combinado"){


        totalSal = parseInt(cantidad4*18000)
         
        }else if(Salchipapa=="hawaiana"){


            totalSal = parseInt(cantidad4*18000)
           

        }else if(Salchipapa=="Sencilla"){


            totalSal = parseInt(cantidad4*10000)
            

        }
        if (cantidad1.length ==0 || cantidad2.length ==0 || cantidad3.length ==0|| cantidad4.length ==0){

            alert("Escoja un producto");}


            

   /* var Pizza = document.getElementById("piopciones").vale
    var cantidad3=document.getElementById('Pizza').value;
    localStorage.setItem('Pizzas',cantidad3);*/

    var total=totalpi+totalPe+totalSal+totalha;

    var totalp= cantidad4+cantidad1+cantidad2+cantidad3;

    var variables={


        Pperros:Perros,
        Hhamburguesas:Hamburguesa,
        Ssalchipapas:Salchipapa,
        Ppizzas:Pizza,

        Ccantidad:cantidad1,
        Ccantidad2:cantidad2,
        Ccantidad3:cantidad3,
        Ccantidad4:cantidad4,
        
        Ttotalpe:totalPe,
        Ttotalham:totalha,
        Ttotalpi:totalpi,
        Ttotalsal:totalSal,
        Ttotal:total,
        Ttotalp:totalp
        }
    
        
        


            

       vector.push(variables)
   

    dt=
    `<tr>
   <th>Perros</th>
   <th>Hamburguesa</th>
   <th>Pizzas</th>
   <th>Salchipapas</th>
   <th>Productos</th>
   
  
   </tr>`

   for( var i = 0;i<vector.length;i++){



    
    dt += `
<tr>
   <th>${vector[i].Pperros}</th>
   <th>${vector[i].Hhamburguesas}</th>
   <th>${vector[i].Ppizzas}</th>
   <th>${vector[i].Ssalchipapas}</th>
   <th>Vendidos</th>
  
   </tr> `

   dt+=

   ` <tr>
   <th>${vector[i].Ccantidad}</th>
   <th>${vector[i].Ccantidad2}</th>
   <th>${vector[i].Ccantidad3}</th>
   <th>${vector[i].Ccantidad4}</th>
   <th>${vector[i].Ttotalp}</th>

  
   </tr> `

   dt+=

   ` <tr>
   <th>${vector[i].Ttotalpe}</th>
   <th>${vector[i].Ttotalham}</th>
   <th>${vector[i].Ttotalpi}</th>
   <th>${vector[i].Ttotalsal}</th>
   <th>${vector[i].Ttotal}</th>

  
   </tr> `

  


   
   document.getElementById('tabla').innerHTML= dt
  }

  
}





function limpiar(){


    document.getElementById("Perro").value="";
    document.getElementById("Hamburguesa").value="";
    document.getElementById("Pizza").value="";
    document.getElementById("Salchipapa").value="";
   

}
