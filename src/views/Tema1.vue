<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Sustratos y medios de enraizamiento
  
      .row.mb-5.align-items-center
        .col-lg-4.mb-4
          figure
            img(src="@/assets/curso/temas/tema1/img1.png", alt="A continuación de la imagen se define como el sustrato es esencial en la agricultura")
        .col-lg-8
          .row
            .row.mb-5
              h4(style='color:#0B481E') ¿Qué es un sustrato en la agricultura?
              p Un sustrato es cualquier medio diferente al suelo, ya sea natural, mineral u orgánico, que sirve como soporte para las plantas.
            .row
              .col-sm-12.col-md-4.mb-4.mb-lg-0
                .tarjeta--boton.color-primario.p-4(data-aos='flip-left')
                  .col-lg-7.m-auto(style='position:relative;top:-50px')
                    figure
                      img(src='@/assets/curso/temas/tema1/img47.svg', width='75px',height='75px', alt='Imagen decorativa')
                  .row.justify-content-center.mb-3
                      p Propiedades físicas: alta capacidad de retención de agua, estructura estable, baja densidad aparente. 
                      
              
              .col-sm-12.col-md-4.mb-4.mb-lg-0
                .tarjeta--boton.color-primario.p-4(data-aos='flip-left')
                  .col-lg-7.m-auto(style='position:relative;top:-50px')
                    figure
                      img(src='@/assets/curso/temas/tema1/img48.svg', width='75px',height='75px', alt='Imagen decorativa')
                  .row.justify-content-center.mb-3
                      p Propiedades químicas: baja CIC, baja salinidad, elevada capacidad tampón/buffer. 
                      
              .col-sm-12.col-md-4.mb-4.mb-lg-0
                .tarjeta--boton.color-primario.p-4(data-aos='flip-left')
                  .col-lg-7.m-auto(style='position:relative;top:-50px')
                    figure
                      img(src='@/assets/curso/temas/tema1/img49.svg', width='75px',height='75px', alt='Imagen decorativa')
                  .row.justify-content-center.mb-3
                      p Otras propiedades: libre de patógenos, arvenses, fácil disponibilidad y manejo.

              .row
                .col-lg-12.m-3(data-aos='flip-left',style='background: #CDDAC9; border-radius: 20px')
                  p.p-2 Aunque no existe un sustrato ideal, el éxito del mismo se determina por el cumplimiento de las anteriores características.
  
      .row
        .col-lg-8.mb-3.order-2.order-lg-1 
          p La planta utiliza el suelo como medio para conseguir el agua, los minerales y el oxígeno que necesita para su crecimiento y desarrollo vegetativo, brindando al mismo tiempo soporte a la planta. Es por ello por lo que el suelo debe tener porosidad y disposición de las partículas que permitan la penetración de las raíces, además de retención del agua y el aire en cantidades apropiadas, resultando un poco difícil encontrar un suelo que cumpla con todas estas condiciones, siendo necesario acudir a los sustratos. Es por esto que resulta importante definir el sustrato como material poroso que, combinado con otros materiales y dispuesto en recipientes adecuados, brinda un medio de anclaje y suministro de agua y oxígeno óptimo para la propagación vegetal. Una visión más amplia de ello se comparte a continuación:
        .col-lg-4.mb-3.order-1.order-lg-2
          figure
            img(src="@/assets/curso/temas/tema1/img2.png", alt="A continuación se relaciona la importancia del sustrato y otros materiales combinados que brindan una óptima propagación vegetal:")
      
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-acento-botones.p-5(data-aos='fade-down', style='background: #E1EDB5')
          .row.justify-content-center.mb-4
            .col-lg-10.m-auto
              figure
                img(src='@/assets/curso/temas/tema1/img6.svg',  alt='La propagación de la planta en contenedores tiene un crecimiento limitado en las raíces, en cambio el requerimiento de nutrientes, aire y agua es bastante significativo.' style='max-width:170px; max-height:170px; margin: auto')
            
          p La propagación de plantas en contenedores tiene un crecimiento limitado de las raíces, en cambio, el requerimiento de nutrientes, aire y agua es bastante significativo.
        .col-md.tarjeta.color-acento-botones.p-5(data-aos='fade-up', style='background: #FFF8DA')
          .row.justify-content-center.mb-4
            .col-lg-10
              figure
                img(src='@/assets/curso/temas/tema1/img5.svg', alt='La selección del sustrato juega un papel primordial para la producción del material vegetal.' style='max-width:170px; max-height:170px; margin: auto')
            
          p La selección del sustrato juega un papel primordial para la producción exitosa del material vegetal.
        .col-md.tarjeta.color-acento-botones.p-5(data-aos='fade-down',style='background: #E1EDB5')
          .row.justify-content-center.mb-4
            .col-lg-10
              figure
                img(src='@/assets/curso/temas/tema1/img4.svg', alt=' La condición mas importante que debe cumplir el sustrato es la suficiente cantidad de agua y aire a la planta.' style='max-width:170px; max-height:170px; margin: auto')
            
          p La condición más importante que debe cumplir el sustrato es la capacidad de proveer la cantidad suficiente de agua y aire a la planta.
        .col-md.tarjeta.color-acento-contenido.p-5(data-aos='fade-up',style='background: #FFF8DA')
          .row.justify-content-center.mb-4
            .col-lg-10
              figure
                img(src='@/assets/curso/temas/tema1/img3.svg', alt='El oxígeno aporta a la respiración de las raíces y un adecuado intercambio gaseoso, removiendo el exceso de dióxido de carbono en el aire.' style='max-width:170px; max-height:170px; margin: auto')
          p El oxígeno aporta a la respiración de las raíces y a un adecuado intercambio gaseoso, removiendo el exceso de dióxido de carbono en el aire cercano de la rizósfera.

      .row 
        p De esta manera, se presentan diferentes tipos de sustrato que pueden ser utilizados como medios de enraizamiento, los cuales deben cumplir con las características anteriormente mencionadas, para garantizar buena calidad (tamaño uniforme de partículas, ausencia de impurezas y un pH entre 5.5 y 6.5), lo cual permite que los nutrientes sean fácilmente asimilables por la planta, tales como el fósforo, que es indispensable para la biomasa radicular.
      .row 
        .col-lg-4 
          figure(data-aos='zoom-in')
            img(src='@/assets/curso/temas/tema1/img7.png', alt='Imagen decorativa')
        
        .col-lg-8
          p Las propiedades físicas son de gran importancia para el sustrato, debido a que, si la estructura física es inadecuada, difícilmente se puede mejorar una vez establecido el cultivo; en cambio, las propiedades químicas sí pueden ser mejoradas luego de establecido el cultivo, por ejemplo, en el caso de un sustrato que no posea el pH o la cantidad nutricional adecuada, se puede mejorar adicionando abono u otro mejorador. Por ende, la importancia de conocer las propiedades físicas y químicas de los materiales disponibles para la elaboración de los sustratos, con el fin de realizar las mezclas adecuadas para cada cultivo.
          p Cuando se habla de la capacidad de retención de agua, se hace referencia a la cantidad máxima de agua (volumen) que puede retener el sustrato bajo condiciones normalizadas, mientras que la densidad aparente debe ser baja, con el fin de facilitar la penetración de las raíces.
          p Un sustrato medio de cultivo de buena calidad debe cumplir con ciertas características físicas, tales como buena aireación, drenaje, retención de agua y baja densidad aparente; mientras que las propiedades químicas son indispensables, pues de ellas depende la disponibilidad de nutrientes.
      

      .row.mt-4
        .col-lg-12
          .cajon.color-acento-contenido.p-4
            p.mb-0
              strong Es importante
              |  tener en cuenta que los microorganismos compiten con la raíz por oxígeno y nutrientes, también pueden modificar las características físicas del sustrato, disminuyendo la capacidad de aireación, generando asfixia radicular por deficiencias de oxígeno y de nitrógeno, la liberación de sustancias fitotóxicas y contracción del sustrato.
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1 Tipos de sustrato
      
      .row.py-4(style="background: #FFFAEB")
        .col-lg-8
          p Los sustratos son medios que ejercen la función de suelo, el cual sirve como medio para el enraizamiento del cultivo, suministro de nutrientes, agua y oxígeno. Además, permiten que se genere el intercambio de gases hacia las raíces. Para ello, observe las propiedades que se deben tener para los sustratos de buena calidad.
          
          h4(style='color:#0B481E') Propiedades de sustratos de buena calidad
          .row.mx-4
            ol.lista-ol
              li
                span.text-bold 1. 
                | Gran capacidad de retención de la humedad.
              li 
                span.text-bold 2. 
                | Gran capacidad de aireación.
              li 
                span.text-bold 3. 
                | Estabilidad física, química y biológicamente inerte.
              li 
                span.text-bold 4. 
                | Buena capacidad de drenaje. 
              li 
                span.text-bold 5. 
                | Liviano. 
              li 
                span.text-bold 6. 
                | Bajo costo y buena disponibilidad. 
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema1/img8.png', alt='Imagen decorativa')
        
      .row
        strong.text-center.m-4 Un sustrato de buena calidad debe tener nutrientes en forma asimilable para la planta, tales como:

      .row.fondo-nutrientes.p-4
          .col-lg-6
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img52.svg', alt='El sustrato de buena calidad debe tener nutrientes en forma asimilable  para la planta como son: 1 Macronutrientes: nitrógeno, potasio, fósforo, azufre, calcio, magnesio, hierro. 2 Micronutrientes: cobre, zinc, sodio, magnesio, boro, cloro.')
          .col-lg-6
              .row
                  .col-6
                    .capa-primario1 Macronutrientes
                    .capa-secundario1 Nitrógeno
                    .capa-secundario1 Potasio
                    .capa-secundario1 Fósforo
                    .capa-secundario1 Azufre
                    .capa-secundario1 Calcio
                    .capa-secundario1 Magnasio
                    .capa-secundario1 Hierro
                  .col-6
                      .capa-primario2 Micronutrientes
                      .capa-secundario2 Cobre
                      .capa-secundario2 Zinc
                      .capa-secundario2 Sodio
                      .capa-secundario2 Magnesio
                      .capa-secundario2 Boro
                      .capa-secundario2 Cloro
                      .capa-secundario2 Molibdeno
      .row.p-3
          p Normalmente, los nutrientes como nitrógeno, fósforo y potasio deben ser aportados en grandes cantidades mediante abono, teniendo en cuenta las necesidades de la planta, y normalmente el espacio del recipiente (maceta) es reducido.

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1. 
        span Propiedades y características deseables de componentes orgánicos e inorgánicos para sustratos de cultivos

      .tabla-a.color-acento-contenido.mb-5
        table
          caption.text-center Nota. Adaptado de Manual de propagación de plantas superiores (2016).
          thead
            tr
              th Componentes
              th Características deseables
              th Inorgánicos 
          
          tbody
            tr
              td.text-center Inorgánicos 
              td.text-start 
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Alta capacidad de retención de agua y agua disponible.
                  li 
                    i.lista-ul__vineta
                    | Tener una baja densidad de partículas.
                  li 
                    i.lista-ul__vineta
                    | Tener buena distribución de tamaño de partículas.

              td.text-start
                ul.lista-ul
                  li
                    i.lista-ul__vineta 
                    | Vermiculita (tiene alta capacidad de intercambio catiónico (CIC), alta capacidad de retención de agua, baja densidad de partículas). 
                  li
                    i.lista-ul__vineta 
                    | Perlita (porosa, inerte, débil mecánicamente). 
                  li 
                    i.lista-ul__vineta 
                    | Arenas (alta densidad de partículas, baja CIC). 
                  li 
                    i.lista-ul__vineta 
                    | Arcilla calcinada (porosa, baja CIC). 
                  li 
                    i.lista-ul__vineta 
                    | Subproductos minerales (tales como óxidos metálicos).
            tr
              td.text-center Orgánicos
              td.text-start 
                ul.lista-ul
                  li 
                    i.lista-ul__vineta 
                    | Alta capacidad de retención de agua y agua disponible. 
                  li 
                    i.lista-ul__vineta 
                    | Bien compostados y/o tratados con nitrógeno.
                  li 
                    i.lista-ul__vineta 
                    | Tener un bajo contenido de sales solubles (conductividad eléctrica < 4 mmhos < cm-1). 
                  li 
                    i.lista-ul__vineta 
                    | Tener buena distribución de tamaño de partículas. 
                  li 
                    i.lista-ul__vineta 
                    | Que no contengan compuestos tóxicos (como toxinas vegetales o químicos orgánicos). 
                  li 
                    i.lista-ul__vineta 
                    | Que no sean portadores o vectores de plagas y/o enfermedades.

              td.text-start
                ul.lista-ul
                  li 
                    i.lista-ul__vineta 
                    | Turba <em>(peat moss)</em> (excelente retención de agua, CIC, baja densidad de partículas).
                  li 
                    i.lista-ul__vineta 
                    | Materia orgánica compostada (hojas de árboles, césped, residuos de poda).
                  li 
                    i.lista-ul__vineta 
                    | Productos y subproductos de madera (corteza, aserrín, virutas, etc.).
                  li 
                    i.lista-ul__vineta 
                    | Lodos de tratadora o depuradora (debe tenerse cuidado con textura fina y metales pesados).
                  li 
                    i.lista-ul__vineta 
                    | Otros materiales (estiércol, pajas, bagazos, cascarillas, etc.).

      .row.mb-4
        p Dado lo anterior, se logran diferenciar los siguientes elementos para los sustratos orgánicos: 

        TabsA.color-secundario
          .tarjeta.p-4(titulo="Sustratos orgánicos")
            .row.bgr-verde-claro.p-4.bordes-redondeados
              .col-lg-7.mb-4
                p Dentro de los sustratos orgánicos más comunes, se encuentra la turba <em>(peat moss)</em>, productos maderables procesados por composteo (corteza, aserrín, virutas), composta de materia orgánica, lodos de depuradora, fango, estiércol, paja y cascarillas (arroz).
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema1/img9.png', alt='Imagen decorativa')

          .tarjeta.p-4(titulo="Turba o <i>peat moss</i>")
            .row.bgr-verde-claro.p-4.bordes-redondeados
              .col-lg-7.mb-4
                p Sustrato que contiene gran porosidad y es un buen receptor de soluciones nutritivas, además, proporciona gran aireación a las raíces, y está libre de gérmenes y malas hierbas. Normalmente, tiene fácil movimiento del agua, bajo nivel de nitrógeno disponible y un pH entre 3.2 y 4.5.
                
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen decorativa')
          
          .tarjeta.p-4(titulo="Residuos forestales")
            .row.bgr-verde-claro.p-4.bordes-redondeados
              .col-lg-7.mb-4
                p Dentro de los residuos forestales, encontramos la corteza de pino, la cual se puede mezclar con turba en cantidades variables, también se utiliza el aserrín, cuyo origen no sea maderas tratadas con productos tóxicos para las plantas. Requieren dosis complementarias de abonos nitrogenados, ya que estos no aportan nitrógeno.
                
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen decorativa')
          
          .tarjeta.p-4(titulo="Residuos de fibra de coco")
            .row.bgr-verde-claro.p-4.bordes-redondeados
              .col-lg-7.mb-4
                p Estos residuos provienen de la fibra del fruto de la palma de coco, la cual es deshidratada y triturada.
                
              .col-lg-5
                figure
                  img(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen decorativa')
            
      .row
          strong.mt-4.mb-2.text-center Por otro lado, dentro de los sustratos inorgánicos encontramos:

      .tarjeta.p-4.bgr-beige-claro
        SlyderA(tipo="b")
          .row.px-5.pt-3
            .col-md-6.mb-4.mb-md-0
              h4 Arena
                p.mt-4 La arena del río es muy utilizada para la mezcla de sustratos, en pequeñas cantidades, debido a que mejora la estructura del sustrato, pero aporta peso al mismo, además, no retiene la humedad y requiere de riego más constante. La arena utilizada no debe contener arcillas, sales o plagas.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img13.png', alt='Imagen decorativa')
          .row.px-5.pt-3
            .col-md-6.mb-4.mb-md-0
              h4 Tezontle
                p.mt-4 Escoria volcánica constituida por silicatos de aluminio y feldespatos, los cuales se forman al ser expelida la lava y enfriarse de golpe, constituyendo el manto piroclástico. Tiene elevada capacidad de retención del agua fácilmente disponible, gran densidad. Están constituidos, en su gran mayoría, por óxido de silicio y óxido de aluminio, con cantidades pequeñas de hierro, calcio, magnesio, sodio, además de nitrógeno, fósforo y potasio.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img14.png', alt='Imagen decorativa')
          .row.px-5.pt-3
            .col-md-6.mb-4.mb-md-0
              h4 Perlita o agrolita
                p.mt-4 Sustrato de origen volcánico (perlita), que, sometido a altas temperaturas, se expande y forma partículas de poco peso, estériles y que proporcionan porosidad y aireación al sustrato. Tiene pH de 7 a 7.5.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img15.png', alt='Imagen decorativa')
          .row.px-5.pt-3
            .col-md-6.mb-4.mb-md-0
              h4 Vermiculita
                p.mt-4 Mantiene la humedad favoreciendo las condiciones de enraizamiento, se puede mezclar con agrolita o turba. Es muy segura y elimina el riesgo de asfixia y de agresión mecánica para la plántula, permitiendo, de manera exitosa, su desarrollo. 

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img16.png', alt='Imagen decorativa')
          
          .row.px-5.pt-3
            .col-md-6.mb-4.mb-md-0
              h4 Sustrato (promix, sunshine mix, pindstrup, BM2)
                p.mt-4 Es una mezcla comercial caracterizada por tener peso liviano, ser uniforme y brindar buena consistencia; está compuesto por Turba Canadiense Esfagracea (70-80 %), vermiculita silicato, piedra caliza, yeso agrícola, agente humectante, macronutrientes y micronutrientes. Tiene pH entre 6-7. Se caracteriza por ser un germen y brinda a las hierbas un excelente medio de crecimiento, con gran capacidad de retención de agua y drenaje, además, no requiere ser desinfectado, debido a que ya viene listo para usarse. 

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen decorativa')
          .row.px-5.pt-3
            .col-md-6.mb-4.mb-md-0
              h4 Sustrato compost, arena y cascarilla de arroz
                p.mt-4 Escoria volcánica constituida por silicatos de aluminio y feldespatos, los cuales se forman al ser expelida la lava y enfriarse de golpe, constituyendo el manto piroclástico. Tiene elevada capacidad de retención del agua fácilmente disponible, gran densidad. Están constituidos, en su gran mayoría, por óxido de silicio y óxido de aluminio, con cantidades pequeñas de hierro, calcio, magnesio, sodio, además de nitrógeno, fósforo y potasio.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img18.png', alt='Imagen decorativa')
          .row.px-5.pt-3
            .col-md-6.mb-4.mb-md-0
              h4 Tierra fermentada
                p.mt-4 Este proceso implica un curado natural del suelo por medio de altas temperaturas, donde se eliminan macro y microorganismos dañinos para la planta, así como semillas de maleza. Para la producción de tierra fermentada, se requiere tierra de zona poco cultivada, cascarilla de arroz, semolina, bocashi, melaza y agua, los cuales son apilados, mezclados y tapados, para posteriormente voltear y alcanzar temperaturas apropiadas para el proceso.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img19.png', alt='Imagen decorativa')
          .row.px-5.pt-3
            .col-md-6.mb-4.mb-md-0
              h4 Bocashi curtido o bocashi fermentado
                p.mt-4 Este sustrato consiste en una mezcla de bocashi, tierra cernida, carbón pulverizado o ceniza, en diferentes proporciones, por ejemplo, para hortalizas de hojas, se recomienda mezclar hasta un 20 % de bocashi, más carbón pulverizado, con tierra cernida; para hortalizas de cabeza, se recomienda utilizar un 40 % de bocashi, más carbón pulverizado; mientras que, para árboles frutales, se recomienda utilizar 50 % de ambos ingredientes.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img20.png', alt='Imagen decorativa')

      .row.mt-5.mb-3.align-items-center
        .col-auto
          img(src='@/assets/curso/temas/tema1/img22.png', alt='Imagen decorativa')
        .col.px-0
          h3.mb-0 Técnicas de desinfección

        p.mt-4 Un sustrato debe ser desinfectado cuando existe sospecha de contaminación, cuando se tienen especies muy susceptibles a enfermedades del suelo o, de pronto, si son especies de mucho valor (económico, investigativo, entre otros). No obstante, la desinfección del sustrato no siempre es necesaria, en gran parte depende del sustrato y del tipo de material vegetal que se vaya a propagar. 
        p.mb-4 Teniendo en cuenta la información anterior, dentro de las técnicas para lograr la desinfección del sustrato, se encuentran:

        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Solarización")
            .col-md-6.mb-4.mb-md-0
              p.text-small Un sustrato debe ser desinfectado cuando existe sospecha de contaminación, cuando se tienen especies muy susceptibles a enfermedades del suelo o, de pronto, si son especies de mucho valor (económico, investigativo, entre otros). No obstante, la desinfección del sustrato no siempre es necesaria, en gran parte depende del sustrato y del tipo de material vegetal que se vaya a propagar.
              p.text-small Teniendo en cuenta la información anterior, dentro de las técnicas para lograr la desinfección del sustrato, se encuentran:

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img23.png', alt='Imagen decorativa')
          
          .row(numero="2" titulo="Biofumigación")
            .col-md-6.mb-4.mb-md-0
              p.text-small Esta técnica se basa en  la acción de las sustancias volátiles generadas en la biodegradación de la materia orgánica, permitiendo controlar los patógenos de las plantas, pues ejerce un efecto fungicida e insecticida. Un punto a favor de la utilización de la materia  orgánica es que, además de mejorar la fertilidad del sustrato, sirve por su efecto tóxico, aunque su eficacia depende de la dosis y el método de aplicación.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img24.png', alt='Imagen decorativa')
          .row(numero="3" titulo="Biosolarización")
            .col-md-6.mb-4.mb-md-0
              p.text-small Consiste en la combinación de la técnica de solarización y biofumigación, donde se satura el suelo y, luego, se coloca el plástico, con el fin de aumentar la temperatura y la acción de las técnicas. 

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img25.png', alt='Imagen decorativa')
          .row(numero="4" titulo="Vapor de agua")
            .col-md-6.mb-4.mb-md-0
              p.text-small Consiste en pasar un flujo de vapor de agua caliente a través del sustrato, con el fin de elevar la temperatura y así destruir los organismos perjudiciales para el cultivo.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img26.png', alt='Imagen decorativa')

          .row(numero="5" titulo="Desinfección química")
            .col-md-6.mb-4.mb-md-0
              p.text-small Utilización de compuestos químicos como estrategia de desinfección, lo cual permite acortar el tiempo de desinfección. Esta técnica es combinada con otras técnicas (solarización) con el fin de disminuir la dosis de compuestos químicos, pero logrando buenos resultados.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img27.png', alt='Imagen decorativa')

      Separador
      
      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.2 Herramientas, equipos y técnicas

      .row
          p Las herramientas, equipos y técnicas juegan un papel fundamental en la eficiencia y eficacia del sustrato y el desarrollo del proceso de propagación vegetal, por lo cual, a continuación, se relacionan:

      .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        TabsB.color-acento-contenido
          .py-4.py-md-5.bgr-amarillo-claro(titulo="Porosos" :icono="require('@/assets/curso/temas/tema1/img28.svg')")
            .row.p-5
              .col-md-7.mb-4.mb-md-0.px-4
                p Son aquellos contenedores que permiten el paso de la humedad por sus paredes, lo que implica mayor riesgo. Además, las sales suspendidas en el agua se precipitan en la pared del contenedor, llegando con el tiempo a formar una concentración alta de sales donde hay gran cantidad de raíces. Los hay de barro, cerámica, cemento, cantera, entre otros.
            
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema1/img29.png', alt='Imagen decorativa')
                  
          .py-4.py-md-5.bgr-amarillo-claro(titulo="No porosos" :icono="require('@/assets/curso/temas/tema1/img32.svg')")
            .row.p-5
              .col-md-7.mb-4.mb-md-0.px-4
                p Son contenedores que no permiten el paso de la humedad por sus paredes. Al no haber pérdidas por las paredes, la humedad dura más y se evita la concentración de sales en el interior de sus paredes, pero es importante que tenga perforaciones en el fondo, con el fin de permitir un drenaje fácil y rápido. Los hay de plástico, vidrio, fibra de vidrio, metal, barro y cerámica vidriados en el interior, entre otros.
            
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema1/img33.png', alt='Imagen decorativa')
                  
          .py-4.py-md-5.bgr-amarillo-claro(titulo="No recuperables" :icono="require('@/assets/curso/temas/tema1/img31.svg')")
            .row.p-5
              .col-md-7.mb-4.mb-md-0.px-4
                p Son aquellos constituidos por plástico (polipropileno, poliestireno expandido y/o polietileno rígido) con diferentes niveles de rigidez; se pueden reutilizar en varias campañas de propagación o rotación del cultivo aplicando buenas prácticas de desinfección.
            
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema1/img34.png', alt='Imagen decorativa')
                  
          .py-4.py-md-5.bgr-amarillo-claro(titulo="Recuperables" :icono="require('@/assets/curso/temas/tema1/img30.svg')")
            .row.p-5
              .col-md-7.mb-4.mb-md-0.px-4
                p Son aquellos contenedores que permiten el paso de la humedad por sus paredes, lo que implica mayor riesgo. Además, las sales suspendidas en el agua se precipitan en la pared del contenedor, llegando con el tiempo a formar una concentración alta de sales donde hay gran cantidad de raíces. Los hay de barro, cerámica, cemento, cantera, entre otros.
            
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema1/img35.png', alt='Imagen decorativa')
      
      .row.p-5(style="background: #adce3240")
          
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2. 
          span Factores que afectan la eficiencia de un desinfectante
        .row.fnd-2.mb-3 
          figure(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img51.png', alt='Los contenedores recuperables de  plástico son: bolsas de polietileno, bandejas de uso horticola y contenedores de diversos tamaños y materiales  incluyendo vidrio.')
        figcaption.text-center Nota. 
          span Adaptado de Manual de propagación de plantas superiores (2016).      

      .row.my-5
        p Por otro lado, en un contenedor, el volumen de exploración del sistema radicular es limitado y está influenciado por variaciones del ambiente, por lo cual resulta necesario reducir los factores de estrés que puedan afectar el proceso de propagación; por ende, es necesario implementar técnicas de manejo que involucren la forma y tamaño del contenedor, el volumen y la calidad del riego, tipo de sustrato, con el fin de proveer soporte, retención de agua y nutrientes necesarios para la eficacia del proceso de propagación vegetal. Esto se puede ampliar teniendo presente:
        

      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img41.png", alt="Se relaciona a continuación los insecticidas químicos que se destacan: 1. Organoclorados: Altamente estables, de bajo costo, sin embargo, los residuos son de gran persistencia en el ambiente.")
            .crd_hover_txt--body.text-center
              h6.mb-3 Forma
              p.mb-0.text-white Es de gran importancia en el proceso de propagación vegetal, pues determina la existencia de un gradiente de humedad de arriba hacia abajo en los recipientes, relacionando la capacidad de retención del agua con la forma del contenedor.
        
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img42.png", alt="Se relaciona a continuación los insecticidas químicos que se destacan: 1. Organoclorados: Altamente estables, de bajo costo, sin embargo, los residuos son de gran persistencia en el ambiente.")
            .crd_hover_txt--body.text-center
              h6.mb-3 Volumen
              p.mb-0.text-white Determina el tamaño que puede alcanzar la planta que crezca dentro de dicho contenedor, es por ello que la dimensión ideal del recipiente depende de la especie, el tamaño que se desea alcance la planta, la densidad del cultivo, la duración del proceso de crecimiento y el medio de crecimiento seleccionado.

        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img43.png", alt="Se relaciona a continuación los insecticidas químicos que se destacan: 1. Organoclorados: Altamente estables, de bajo costo, sin embargo, los residuos son de gran persistencia en el ambiente.")
            .crd_hover_txt--body.text-center
              h6.mb-3 Diámetro
              p.mb-0.text-white Depende de la especie a ser cultivada, pues así mismo se establece el diámetro adecuado del contenedor con el fin de que el agua de riego llegue al sustrato.

        .row.justify-content-center.mb-5 
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/img44.png", alt="Se relaciona a continuación los insecticidas químicos que se destacan: 1. Organoclorados: Altamente estables, de bajo costo, sin embargo, los residuos son de gran persistencia en el ambiente.")
              .crd_hover_txt--body.text-center
                h6.mb-3 Densidad de las plantas
                p.mb-0.text-white En los contenedores con múltiples celdas o cavidades, es importante verificar la incidencia de la luz, agua y nutrientes que están disponibles para cada planta. Es así como el esparcimiento entre recipientes influye en la altura, rectitud de tallos, diámetro de cuello y frondosidad de la planta
          
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/img45.png", alt="Se relaciona a continuación los insecticidas químicos que se destacan: 1. Organoclorados: Altamente estables, de bajo costo, sin embargo, los residuos son de gran persistencia en el ambiente.")
              .crd_hover_txt--body.text-center
                h6.mb-3 Orificios de drenaje
                p.mb-0.text-white Influyen en la oxigenación de la raíz, por lo cual, si se cierran, se podría provocar anoxia en la planta, y si no se remedia, podría ocasionar hasta la muerte de la planta. Además, al fondo del recipiente, debe existir al menos una perforación, con el fin de que circule el excedente de agua generado en el proceso de drenaje.
          
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/img46.png", alt="Se relaciona a continuación los insecticidas químicos que se destacan: 1. Organoclorados: Altamente estables, de bajo costo, sin embargo, los residuos son de gran persistencia en el ambiente.")
              .crd_hover_txt--body.text-center
                h6.mb-3 Color
                p.mb-0.text-white Aunque suene raro, el color también es un parámetro a tener en cuenta, pues, en el caso de cultivos expuestos al sol, los contenedores negros elevan la temperatura, respecto a aquellos que son de color claro, lo cual termina siendo perjudicial para el sistema radicular, inhibiendo su crecimiento.
      .row
        p Todos los parámetros anteriormente mencionados son determinados según la especie a cultivar, pues el contenedor adecuado está definido por la planta y su sistema radicular, con el fin de lograr un buen crecimiento y desarrollo del cultivo a establecer.
  </template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
