//MINI JUEGO INTERACTIVO HISTORIA.

//PRIMERA PARTE DEL CÓDIGO.(SALUDO INICIAL)
function presentacionInicio(){
    
    saludoInicio = alert("BIENVENIDO A TEXAS SCAPE!!! ");
  
};
//SEGUNDA PARTE DEL CODIGO. (CREACIÓN DEL PERSONAJE)
function creacionPersonaje(){
                                     //(Bucle)Nombre del personaje + validación.   
  do{

    do {
      
      nombrePlayer = prompt("Elige cuál será tu nombre de personaje: ");

      if(nombrePlayer == "" || !(isNaN(nombrePlayer))){
          alert("Upss... el nombre elegido no es válido. \n \n Recuerda no introducir números.");
          salida = true;
        }else{
          salida =false;
      };
    } while (salida);
                                       //(Bucle)Sexo del personaje + validación.
    do{
      sexoPlayer = prompt("Elige el sexo de tu personaje: \n \n Introduce M si quieres ser varón o F si quieres ser mujer. ").toUpperCase();
  
      if (sexoPlayer == "M" && (isNaN(sexoPlayer)|| sexoPlayer == "")) { 
          salida = false;

        }else if(sexoPlayer == "F" && (isNaN(sexoPlayer)|| sexoPlayer == "")){
          salida =false;

        }else {
          alert(" Upss... el sexo elegido no es válido. \n \n Recuerda que debes introducir M o F para continuar. ");
          salida = true;
      };

    }while(salida)
                                       //(Bucle)profesion personaje + validaciones
    do{
      if((sexoPlayer == "M") && !(isNaN(profesionPlayer) && profesionPlayer == "")){
        do {   

          profesionPlayer = parseInt(prompt("Necesitas una profesión para tu personaje: \n \n Introduce el número de la profesión que prefieras: \n \n 1 - Militar Confederado. \n 2 - Doctor. \n 3 - Buscador de oro. \n 4 - Cazarecompensas."));
          sexoPlayer = "Hombre";
          //salida =false;
          if(profesionPlayer === 1){
              profesionPlayer = "Militar confederado";
              salida=false;   
            }else if(profesionPlayer === 2){
                profesionPlayer = "Doctor";
                salida=false;
            }else if(profesionPlayer === 3){
                profesionPlayer = "Buscador de oro";
                planDeHuida=false;
                salida=false;
            }else if(profesionPlayer === 4){
                profesionPlayer = "Cazarecompensas";
                salida=false;
            }else {
              alert("Upss... la profesión elegida no es válida. Recuerda debes introducir un número.");
              salida = true;
          };
        } while (salida);

      }else if((sexoPlayer == "F") && !(isNaN(profesionPlayer) && profesionPlayer == "")){
        do {
          profesionPlayer = parseInt(prompt("Necesitas una profesión para tu personaje: \n \n Introduce el número de la profesión que prefieras: \n \n 1 - Baquera. \n 2 - Doctora. \n 3 - Buscadora de oro. \n 4 - Cazarecompensas."));
          sexoPlayer = "Mujer";

            if(profesionPlayer === 1){
              profesionPlayer = "Baquera";
              salida=false;
              }else if(profesionPlayer === 2){
                profesionPlayer = "Doctora";
                salida=false;
              }else if(profesionPlayer === 3){
                profesionPlayer = "Buscadora de oro";
                planDeHuida=false;
                salida=false;
              }else if(profesionPlayer === 4){
                profesionPlayer = "Cazarecompensas";
                salida=false;
              }else {
                alert("Upss... la profesión elegida no es válida. Recuerda debes introducir un número.");
                salida =true;
          };
        } while (salida);

      };

    } while (salida); 

    salida = confirm("Tu personaje actual es: \n\n" + "\n Nombre: "+ nombrePlayer + ", " + "\n Sexo: "+ sexoPlayer + ", " + "\n Profesión: "+ profesionPlayer + "\n\n" + "Quieres unirte a la aventura?" );
    
  }while(!salida);
};

//TERCERA PARTE DEL CODIGO (FUNCIÓN INCLUIDA EN FUNCIÓN HISTORIA()--> FINAL DOCUMENTO)
  function lineaArgumental(){
  
    dialogoJoe = alert('Tras varios días urdiendo un plan para el escape. Te has dado cuenta de que necesitas algunos utensilios para efectuar la huída. \
    Hasta que en un recreo en patio de la carcel Joe se te acerca y sin mediar palabra te agarra del brazo para llamar tu atención.\n\
    Joe.H: shhhh... Tengo un amigo al que debes conocer, sígueme.\n\n\
    Decides seguirle.');
    dialogoJoe = alert('Tras dar un par de vueltas al patio, Joe te señala con la cabeza a un hombre alto pelirojo:\n\n\
    Joe.H: Él es Mc.Hount.Preguntalé que tiene de nuevo hoy?\n\
    Aunque no tienes claro que pretende optas por hacer lo que dice.\
    ');
    do {
      if((profesionPlayer === ('Buscador de oro') && (sexoPlayer === "Hombre")) || ((sexoPlayer === "Mujer") && (profesionPlayer=== "Buscadora de oro")) || (planDeHuida === (false) && (sexoPlayer === "Hombre" || sexoPlayer === "Mujer"))){
        do {
          truequeItem1= parseInt(prompt('Mc.Hount parece un tipo directo.\n\nMc.Hount: Que tienes para intercambiar?\n\n\
          Introduce el número del Item o conjunto de items para continuar:\n\n\
          1 - Tabaco = 100 $\n\
          2 - Pepita de oro = 200 $\n\
          3 - Tabaco y pepita de oro = 300 $'));
          switch (truequeItem1) {
            case 1:
              intercambioPrecio=100;
              salida= true;
              break;
            case 2:
              intercambioPrecio =200;
              salida= true;
              break;
            case 3: 
              intercambioPrecio =300;
              salida= true;
              break;
            default:
              alert("Upsss... Recuerda introducir únicamente el número del item o conjunto de items ");
              salida = false ;
              break;
          };
          
        } while (!salida);
       
      }else{
       
        do{  
          truequeItem1= parseInt(prompt('Mc.Hount parece un tipo directo.\n\nMc.Hount: Que tienes para intercambiar?\n\n\
            Introduce el número del Item o conjunto de items para continuar:\n\n\
            1 - Tabaco = 100 $\n\
            2 - Pepita de oro = 200 $\n\
            3 - Tabaco y pepita de oro = 300 $'));
            switch (truequeItem1) {
              case 1:
                intercambioPrecio=100;
                salida = true;
                break;
              
              default:
                alert("Upsss... Recuerda introducir únicamente el número del item o conjunto de items ");

                salida= false;
                break;
            };
        }while(!salida);
            
      };  
        salida =confirm('Recibes un toal de:' + intercambioPrecio + ' $. ' + '\n\nSí es el trato que elegiste pulsa aceptar.\nEn caso contrario pulsa cancelar');

    } while (!salida);

    do {
      if(planDeHuida == true){
        do {
          truequeItem2= parseInt(prompt('\n\nMc.Hount: Que quieres comprar? \
            \n\nIntroduce el número del Item o conjunto de items para continuar:\n\
            1 - Botella de whiskey = 100 $ \n\
            2 - Alicate = 200 $ \n\
            3 - Pico pequeño = 300 $'));
          switch (truequeItem2) {
            case 1:
              item = 'Botella de whiskey';
              compraPrecio = 100;
              break;
            case 2:
              alert('Mc Hount: No intentes engañarme no tienes suficiente. Por esta vez te la voy a pasar '+ nombrePlayer + 
                    '. Si tenias otra cosa para intercambiar no te la voy a aceptar. Así aprenderas como funcionan los negocios aquí.');
              break;
            case 3:
              alert('Mc Hount: No intentes engañarme no tienes suficiente. Por esta vez te la voy a pasar '+ nombrePlayer + 
                '. Si tenias otra cosa para intercambiar no te la voy a aceptar. Así aprenderas como funcionan los negocios aquí.');
              break;
            default:
              alert('Upsss... Recuerda introducir únicamente el número del item.');
            break;         
          };
        } while (truequeItem2 !== 1);
      }else{
        truequeItem2= parseInt(prompt('\n\nMc.Hount: Que quieres comprar? \
          \n\nIntroduce el número del Item o conjunto de items para continuar:\n\
          1 - Botella de whiskey = 100 $ \n\
          2 - Alicate = 200 $ \n\
          3 - Pico pequeño = 300 $'));
        switch (truequeItem2) {
          case 1:
            item = 'Botella de whiskey';
            compraPrecio = 100;
            break;
          case 2:
            item = 'Alicate';
            compraPrecio = 200;
            break;
          case 3:
            item = 'Pico pequeño';
            compraPrecio = 300;
            break;
          default:
              alert('Upsss... Recuerda introducir únicamente el número del item o conjunto de items');
          break;  
        };
      };
        if( (intercambioPrecio < compraPrecio)){
        alert('Mc Hount: No intentes engañarme no tienes suficiente. Por esta vez te la voy a pasar '+ nombrePlayer + 
          '. Si tenias otra cosa para intercambiar no te la voy a aceptar. Así aprenderas como funcionan los negocios aquí.');
        salida =false;
        }else{
          salida = confirm('Felicidades has adquirido tu '+ item +'.\n\n'+ 'Te queda un total de:' + resta() + ' $. ' + '\n\nSí es el trato que elegiste pulsa aceptar.\nEn caso contrario pulsa cancelar');
        }
        // salida =confirm('Te queda un total de:' + resta() + ' $. ' + '\n\nSí es el trato que elegiste pulsa aceptar.\nEn caso contrario pulsa cancelar');
    } while (!salida);  
  };

  //TERCERA PARTE DEL CÓDIGO ( FINALES // INCLUIDOS DENTRO DE LA FUNCIÓN HISTÓRIA --> FINAL DEL DOCUMENTO)

  function finalWiskey(){
    historiaFinal = alert('Cae la noche:\n\nJoe.H: Pero qué diantres has comprado? ufff... me parece que Mc Hount te ha engañado.\n\
    Puajjj... esto no es whiskey es gasolina. No te preocupes tengo una idea, el guardia de la puerta principal es un alcoholico si se la vendemos\
    seguro que esto lo hará dormir toda la noche.\ ');
    venta = 50;
    historiaFinal = alert('Has esperado todo el día: Joe ha hecho la transacción te ha dado las ganancias ahora tienes: ' + suma() +' no es una fortuna pero menos es nada.\n\n\
    Joe.H: ' + nombrePlayer + ', este es nuestro momento.\n\nJoe saca de su manga una barilla metálica y fuerza la cerradura de la puerta de la celda.\
    Con cuidado avanzais por los pasillos hasta llegar a la garita de vigilancia.\ ');
    historiaFinal =alert('Escondidos tras una columna, ves que efectivamente el guardia está dormido.\n\nJoe.H: ' + nombrePlayer + ' es el momento.');
  
    decisionFinal= confirm('Hueles la libertad pero debes mantener la calma podrian oirte.\n\nQue haces?\n\n\
    Sales corriendo --> [aceptar]\n\n vas andando con sigilo --> [cancelar] ');
    if(decisionFinal == true){
      historiaFinal = alert('Todo parecia ir bien al principio pero tus mayores temores se hacen realidad. \
        Debido a la velocidad no ves el foso del otro lado de la puerta...\ ');
        fin = alert('THE END');

    }else{
      historiaFinal = alert('La suerte te sonríe, gracias a que no fuiste deprisa pudiste ver el foso del otro lado de la puerta.Saltas con dificultad pero llegas al otro lado.');
      fin = alert('THE END');
    };
  }
  function finalAlicate(){
    historiaFinal = alert('Joe.H: Nunca dude de tu inteligencia, jajaja bien hecho '+ nombrePlayer +',\n\
    Tengo una idea, tardaremos un poco de tiempo pero no te preocupes,vamos a cortar la verja del patio todo saldrá bien.\n\n\
    Joe saca una cuchara, y levanta uno de los ladrillos del suelo y se pone a cavar enérgicamente.\ ');
    historiaFinal = alert('Tras unas semanas de trabajo duro, el túnel esta listo.\n\nCae la noche y Joe te da la señal para comenzar la huida.\nAmbos os dirigís\
    sigilosamente a la valla principal.\n\nMíras a ambos lados y Te dispones a usar los alicates. Finalmente consigues cortar un hueco lo suficiente grande para los dos.\n\
    Consigues salir por el agujero pero Joe se queda atascado y los guardias se acercan.\ ');
    decisionFinal= confirm('Hueles la libertad pero te encuentras ante una gran disyuntiva\n\nQue haces?\n\n\
    Ayudas a Joe --> [aceptar]\n\n Lo dejas tirado y huyes --> [cancelar] ');

    if(decisionFinal == true){
      historiaFinal = alert('Parecía que todo se había torcido pero tras un buen estiron eres capaz de sacar a Joe...\n\n\
        Joe esta herido pero puede caminar y os alejais todo lo posible de la verja.\
        Comienza el tiroteo pero Joe se avalanza sobre ti y consigue salvarte de un disparo.\n\
        Finalmente conseguís huir. \
          ');
        fin = alert('THE END');

    }else{
      historiaFinal = alert('La suerte no te sonríe. Joe es capturado por los guardias y te disparan.\
      Parece que has alcanzado la libertad pero una bala te atraviesa y caes al suelo.');
      fin = alert('THE END');
    };
  }
  function finalPico(){
    historiaFinal = alert('Joe.H: Nunca dude de tu inteligencia, jajaja bien hecho '+ nombrePlayer +',\n\
    Tengo una idea, tardaremos un poco de tiempo pero no te preocupes,vamos a cortar la verja del patio todo saldrá bien.\n\n\
    Joe saca una cuchara, y levanta uno de los ladrillos del suelo y se pone a cavar enérgicamente.\n\n\
    Joe.H: heyyy no te quedes mirando ayudame!! ');
    historiaFinal = alert('Tras unas semanas de trabajo duro, el túnel esta listo.\n\nCae la noche y Joe te da la señal para comenzar la huida.\n\
    Ambos os dirigís a entrar en el túnel y al tapar la entrada con una losa escuchais unos pasos que se acercan.\n\
    Joe lanza una piedra en sentido contrario a la celda y te empuja hacia el interior, hay que darse prisa nos han descubierto.');
    decisionFinal= confirm('Que mala suerte se ha puesto a llover muy fuerte y cuesta moverse dentro del tunel. A duras penas consigues salir tu pero Joe no tubo tanta suerte y te pide ayuda para salir\n\n\
    Que haces?\n\n\
    Sales corriendo y lo dejas tirado --> [aceptar]\n\n\
    Lo ayudas a salir, pese al riesgo de que os atrapen --> [cancelar]\ ');
      if(decisionFinal == true){
        historiaFinal = alert('La suerte no te sonríe, debes pensar por ti ahora. Joe se ahoga y sus gritos alertan a los guardias.\
          Parece que has alcanzado la libertad pero una luz muy brillante te enfoca y en un instante sabes que todo esta perdido,\
          una bala te atraviesa y caes al suelo.');
          fin = alert('THE END');

      }else{
        historiaFinal = alert('Parecía que todo se había torcido pero tras un buen estiron eres capaz de sacar a Joe...\n\n\
          Joe esta herido pero puede caminar y os alejais todo lo posible del tunel.\
          Comienza el tiroteo pero Joe es alcanzado por un disparo y cae al suelo.\n\
          Finalmente consegues huir. \
           ');
          fin = alert('THE END');
        
      };
  }
//TERCERA PARTE DEL DOCUMENTO (FUNCIONES SUMA Y RESTA ---> DENTRO DE LA FUNCIÓN (LINEAARGUMERNTAL()) )
  function suma (numero1,numero2){
    numero1= resultado;
    numero2= venta;
    return operacion = numero1 + numero2;
  }
  
  function resta(numero1, numero2){
    numero1 =intercambioPrecio;
    numero2 = compraPrecio;
   return resultado = numero1 - numero2;
  }
//TERCERA PARTE DEL DOCUMENTO         ****FUNCION HISTORIA()*****
  function historia (){
  if (sexoPlayer === 'Hombre'){
      historiaHombre = alert(' \n\nTe encuentras retenido contra tu voluntad en una cárcel estatal por un crimen que no cometiste.\
        \nHas intentado tomar el camino de la justicia pero nadie te hace caso.\
        \nTras una larga temporada a la sombra, te has decidido a escapar:\
        \n"Qué otra queda, mejor ser un forajido y conservar la libertad que seguir cautivo, no?". ');

      historiaHombre = alert('\n\nAntes de entrar en la en la carcel los malditos federales te requisaron todas tus pertenencias. \
        \nPor suerte mientras uno de ellos no miraba pudiste esconder un paquete de tabaco y una pepita de oro entre tu nuevo traje a rayas.\
        \n\n "Quíen dijo que no se podía engañar al sistema?" ' + '\n Una verdadera jugada maestra ' + nombrePlayer + ' , bien hecho!!!');

      historiaHombre = alert('Vaya suerte!!!\n\nTú compañero de celda Joe Hopkinson, tiene contactos.\
        Hace dos meses este viejo loco buscador de oro intentó escaparse cabando un túnel con una cuchara en el interior de su celda, pese a su ingenio fue capturado.\
        \n"Pobre diablo, es un poco bruto y algo sucio pero te cae bien, parece de fiar."\n\ ');

      DialogoJoe = alert("Joe.H: Ahhh... con que quieres salir de aquí. Será algo difícil pero con una buena idea y alguien que entretenga a los guardias, todo es posible. "
        + "\n\n" + nombrePlayer +": Ya se me ocurrirá algo, no te preocupes,soy "+ profesionPlayer +" conoces a alguien que me pueda ayudar con los guardias? ");
        if(profesionPlayer == "Buscador de oro"){
          alert('Joe.H: Jajaja,Claro por supuesto, como no voy a ayudar a un colega de profesión, hoy me has pillado en un buen día \
            no te pediré nada por mi ayuda. Ya hablaremos de negocios más adelante.');
          lineaArgumental();
          do{
            switch (item) {
              case'Botella de whiskey':
              finalWiskey();
                break;
              case'Alicate':
              finalAlicate();
                break;
                case 'Pico pequeño':
                finalPico();
                break;
            };
          } while (fin == 'THE END');
        
        }else{
          
            alert(" Joe.H: Jajaja, yo puedo ayudarte pero nada en la vida es gratis amigo, qué me ofreces a cambio?.\
              \nHe visto que escondes una pepita de oro ese sera el precio.");
              planDeHuida = confirm('"Maldito viejo loco"\nAcedes a darle la pepita de oro a Joe a cambio de entretener a los guardias ? ')
              // alert(PlanDeHuida);
              if(planDeHuida == true){
                alert("Bueno... aunque el trato no es justo, Joe parece de fiar asi que le vas a dar una oportunida, esperemos que no te delate. ");
              }else{
                alert('Bien hecho, mejor sólo que mal acompañado, te has desecho de un problema pero te puedes fiar de él para que no te delate?\n\
                "A partir de ahora tendras que ir con ojo."\ ');
              }
              lineaArgumental()
          do{
              switch (item) {
                case'Botella de whiskey':
                finalWiskey();
                  break;
                case'Alicate':
                finalAlicate();
                break;
                case 'Pico pequeño':
                  finalPico();
                break;
              }
          } while (fin == 'THE END');
        };

      }else if(sexoPlayer === 'Mujer'){
          
        
        historiaMujer = alert(' \n\nTe encuentras retenida contra tu voluntad en una cárcel estatal por un crimen que no cometiste.\
          \nHas intentado tomar el camino de la justicia pero nadie te hace caso.\
          Tras una larga temporada a la sombra, te has decidido a escapar:\
          \n"Qué otra queda, mejor ser una forajida y conservar la libertad que seguir cautiva, no?".');
            };
          historiaMujer = alert('\n\nAntes de entrar en la en la carcel los malditos federales te requisaron todas tus pertenencias. \
            \nPor suerte mientras uno de ellos no miraba pudiste esconder un paquete de tabaco y una pepita de oro entre tu nuevo traje a rayas.\
            \n\n "Quíen dijo que no se podía engañar al sistema?" ' + '\n Una verdadera jugada maestra ' + nombrePlayer + ' , bien hecho!!!');
        
          historiaMujer = alert('Vaya suerte!!!\n\nTú compañero de celda Joe Hopkinson, tiene contactos.\
            Hace dos meses este viejo loco buscador de oro intentó escaparse cabando un túnel con una cuchara en el interior de su celda, pese a su ingenio fue capturado.\
            \n"Pobre diablo, es un poco bruto y algo sucio pero te cae bien, parece de fiar."\n\ ');
        
          DialogoJoe = alert("Joe.H: Ahhh... con que quieres salir de aquí. Será algo difícil pero con una buena idea y alguien que entretenga a los guardias, todo es posible. "
            + "\n\n" + nombrePlayer +": Ya se me ocurrirá algo, no te preocupes,soy "+ profesionPlayer +" conoces a alguien que me pueda ayudar con los guardias? ");
        
            if(profesionPlayer == "Buscadora de oro"){
              alert('Joe.H: Jajaja,Claro por supuesto, como no voy a ayudar a un colega de profesión, hoy me has pillado en un buen día \
                no te pediré nada por mi ayuda. Ya hablaremos de negocios más adelante.');
              lineaArgumental();

              switch (item) {
                case'Botella de whiskey':
                finalWiskey();
                  break;
                case'Alicate':
                finalAlicate();
                  break;
                  case'Alicate':
                  finalPico();
                    break;
              };

            }else{
              alert(" Joe.H: Jajaja, yo puedo ayudarte pero nada en la vida es gratis amiga, qué me ofreces a cambio?.\
              \nHe visto que escondes una pepita de oro ese sera el precio.");
              planDeHuida = confirm('"Maldito viejo loco"\nAcedes a darle la pepita de oro a Joe a cambio de entretener a los guardias ? ')
              // alert(PlanDeHuida);
              if(planDeHuida == true){
                alert("Bueno... aunque el trato no es justo, Joe parece de fiar asi que le vas a dar una oportunida, esperemos que no te delate. ");
              }else{
                alert("Bien hecho, mejor sóla que mal acompañada, te has desecho de un problema pero te puedes fiar de él para que no te delate?\n\
                'A partir de ahora tendras que ir con ojo.\' ");
              }
            }
            lineaArgumental();
            switch (item) {
              case'Botella de whiskey':
              finalWiskey();
                break;
              case'Alicate':
              finalAlicate();
                break;
                case'Alicate':
                finalPico();
                  break;
            };
      };


//#### VARIABLES ####
//**** CÓDIGO ****/ 
let item = "";
let profesionPlayer = "";
let intercambioPrecio=0;
let compraPrecio=0;
let resultado =0;
let fin='THE END';



  presentacionInicio()
  creacionPersonaje()
  historia()

  



  


 
