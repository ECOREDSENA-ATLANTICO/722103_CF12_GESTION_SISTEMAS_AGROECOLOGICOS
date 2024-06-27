<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tipo de material vegetal
  
    .container.tarjeta.tarjeta--blanca
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Para propagar especies vegetales, se requiere de material vegetal (semillas, polen, partes de la planta o tejido vegetal) de calidad, el cual, bajo unas condiciones ideales, logre su desarrollo y, de esta manera, contribuya con la productividad, la salud, la industria alimentaria, investigación, entre otros.
            p.mb-0 Existe gran variedad de métodos, que van desde procedimientos sencillos (estacas) hasta los más complejos, que incluyen técnicas de biotecnología (cultivo <em>in vitro</em>). 
  
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2(data-aos='flip-left') 4.1 Sexual
    p La semilla es el órgano de propagación vegetal mediante el cual el nuevo individuo se dispersa; la semilla, propiamente dicha, proviene de un fruto, que, a su vez, proviene de una flor, y el nivel de éxito de que el individuo se establezca depende de las características fisiológicas y bioquímicas de la semilla. Sin embargo, hay otros factores externos que intervienen, como el sustrato, el clima, la competencia, la depredación, entre otros; es por ello que las reservas (carbohidratos, lípidos y proteínas) que contenga serán claves para esta se mantenga hasta que la plántula sea capaz de utilizar la luz y hacerse autótrofa. Las semillas son la principal fuente de alimentación en el mundo.

    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")    
        .row(titulo="Polinización y fecundación")
          .col-lg-8.mb-md-0
            p Dos grupos de plantas producen semillas, las gimnospermas (semillas desnudas-coníferas) y las angiospermas (el óvulo y la semilla se desarrollan dentro de un ovario, el cual da origen al fruto). La fecundación inicia con la unión de núcleo masculino haploide, procedente del grano de polen, con un núcleo haploide femenino, dentro del óvulo, para formar un nuevo organismo diploide, es decir, la fecundación está precedida por la polinización, luego de la llegada del polen al estigma de la flor (angiospermas) o cerca del micrópilo del óvulo (gimnospermas).
       
          .col-lg-4.px-4
            figure
              img(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa')
  
        .row(titulo="Desarrollo de la semilla en angiospermas")
          .col-lg-12.mb-4.mb-md-0
            p En la fecundación, el óvulo, en una angiosperma, consta de una o dos cubiertas protectoras (integumentos) y un tejido central (la nucela). La  meiosis de la célula madre, dentro de la nucela, seguida de varias divisiones mitóticas, es lo que genera la formación del saco embrional (estructura haploide de 8 núcleos y 7 células), la cual ocupa espacio central de la nucela. Cuando el tubo polínico llega al saco embrionario, libera dos gametos masculinos, donde uno de ellos se une a uno de los núcleos del saco embrional (célula huevo) para formar un zigoto, que después se convierte en planta embrionaria diploide; en cuanto al segundo gameto masuclino, este se une con otros dos núcleos femeninos (núcleos polares) para formar una célula triploide, que después se convierte en el endosperma, tejido que actúa como reserva nutritiva para el desarrollo del embrión. Finalmente, los otros cinco núcleos del saco embrional (dos sinérgidas y tres células antipodales) no desempeñan ninguna función en el desarrollo de la semilla, pues, para que se desarrolle una buena semilla, es necesario que se produzca tanto la fecundación de la célula huevo como la triple fusión con los núcleos polares.
        
          .col-lg-11.m-auto
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 3. 
              span Desarrollo de la semilla en angiospermas
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='Imagen decorativa')

            figcaption.mb-5.text-center Nota. 
              span Adaptado de Selección y uso de desinfectantes para la producción en viveros (2016).
        
        
        .row(titulo="Desarrollo del fruto en angiospermas")
          .col-lg-12.mb-md-0
            p En la fecundación, el óvulo, en una angiosperma, consta de una o dos cubiertas protectoras (integumentos) y un tejido central (la nucela). La  meiosis de la célula madre, dentro de la nucela, seguida de varias divisiones mitóticas, es lo que genera la formación del saco embrional (estructura haploide de 8 núcleos y 7 células), la cual ocupa espacio central de la nucela. Cuando el tubo polínico llega al saco embrionario, libera dos gametos masculinos, donde uno de ellos se une a uno de los núcleos del saco embrional (célula huevo) para formar un zigoto, que después se convierte en planta embrionaria diploide; en cuanto al segundo gameto masuclino, este se une con otros dos núcleos femeninos (núcleos polares) para formar una célula triploide, que después se convierte en el endosperma, tejido que actúa como reserva nutritiva para el desarrollo del embrión. Finalmente, los otros cinco núcleos del saco embrional (dos sinérgidas y tres células antipodales) no desempeñan ninguna función en el desarrollo de la semilla, pues, para que se desarrolle una buena semilla, es necesario que se produzca tanto la fecundación de la célula huevo como la triple fusión con los núcleos polares.
          .tarjeta--container.row.m-0
            .col-md.tarjeta.bgr-verde-tarjeta.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img16.png', alt='Imagen decorativa')
                
              h2.text-center Dehiscentes
              p.text-center Aquellos que abren cuando está maduro, para soltar las semillas de su interior, además, pueden ser secos, semicarnosos o carnosos. Ejemplo: leguminosas.
            
            .col-md.tarjeta.bgr-rosa-tarjeta.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img17.png', alt='Imagen decorativa')
                
              h2.text-center Indehiscente o seco
              p.text-center Se encuentra muy fundido con la semilla. Ejemplo: la nuez.
            
            .col-md.tarjeta.bgr-verde-tarjeta.p-5
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema4/img18.png', alt='Imagen decorativa')
                
              h2.text-center Indehiscente y carnoso
              p.text-center Se caracterizan por tener color, olor y sabor llamativos, para atraer aves o animales frugívoros. Se distingue la baya (<em>Diospyros</em>) y drupa (<em>prunus</em>).
      
        .row(titulo="Desarrollo de la semilla en las gimnospermas")
          .col-md-12.mb-md-0
            p Comúnmente, existe un solo integumento protector, que se encuentra fundido con la escama ovulífera que porta los óvulos emparejados. Dentro del integumento, se encuentra la nucela, que, durante la fecundación, se separa del integumento solo en la región del micrópilo. La meiosis que se produce en la nucela, seguida de la división celular mitótica, lleva a la formación de un tejido haploide multicelular (gametófito femenino). Se ha desarrollado el saco embrional de ocho núcleos y ha desplazado a la nucela, cada arquegonio contiene una célula huevo. 
            p La semilla madura está integrada por cubierta seminal o testa, el perisperma, tejido haploide del gametofito femenino, el embrión. 

          .col-lg-10.m-auto
            .row.m-3.p-3.tarjetas-bordeadas.bgr-tarjetas-bordeada-rosa
              span.text-bold Desarrollo del fruto en gimnospermas.
              br
              span Después de la fecundación, el cono femenino aumenta de tamaño y peso, así como de contenido de humedad y reservas nutritivas, y cuando estos se acercan a la madurez, su humedad disminuye, las reservas nutritivas pasan a la semilla y el cono se vuelve leñoso.
            .row.m-3.p-3.tarjetas-bordeadas.bgr-tarjetas-bordeada-verde
              span.text-bold Riesgo de la producción de la semilla.
              br
              span La calidad y cantidad de la cosecha de semillas puede verse afectada por factores externos (clima, temperatura, humedad, viento, lluvia); por ejemplo, el clima afecta la abundancia de la floración y, a su vez, la producción de la semilla, así como animales y otros organismos, incluyendo los microorganismos, pueden generar un riesgo en la producción del material vegetal.
            .row.m-3.p-3.tarjetas-bordeadas.bgr-tarjetas-bordeada-amarilla
              span.text-bold Dispersión y germinación de la semilla en gimnospermas.
              br
              span La maduración y desecación del cono y la semilla hacen que las escamas se abran y suelten las semillas, su dispersión se genera por el viento, pues la dispersión por animales es poco frecuente.
              br
              span En cuanto a la germinación de la semilla, esta consiste en la absorción de agua, lo cual hace que la semilla se infle y termine abriendo la cubierta; luego, viene la actividad enzimática e incremento de las tasas de respiración y asimilación, que indican la utilización de alimento almacenado y su transposición a las zonas de crecimiento; y finalmente, el engrandecimiento y división celular, que tienen como consecuencia la aparición de la radícula y la plúmula.
              br
              span La latencia es una condición de la semilla que impide que esta germine en condiciones (temperatura, humedad, y medio ambiente gaseoso) inapropiadas. En el mantenimiento o interrupción de la latencia, interactúan algunas hormonas promotoras del crecimiento (giberilina) e inhibidoras del crecimiento.
        
        .row(titulo="Tipos de semillas")
          p Existen muchos tipos de semillas, las cuales cumplen con funciones y utilidades variadas; algunas son comestibles, otras tienen cubierta dura y color variado, entre las cuales encontramos:

          .row.p-4
            .titulo-sexto.color-acento-contenido.mb-4(data-aos='fade-right')
              h5 Tabla 2. 
              span Tipo de semillas

            .tabla-a.color-acento-contenido.px-0.mb-5
              table
                caption.text-center Nota. Sena (2022).
                thead
                  tr
                    th Tipo de semilla
                    th Características
                tbody
                  tr
                    td Semillas criollas
                    td Autóctonas, es decir, que se adaptan al entorno gracias a un proceso de selección natural o manual. <br> Ayudan a evitar el agotamiento del terreno de cultivo, además de poder obtenerse nuevas semillas para otra siembra.
                  tr
                    td Semillas mejoradas
                    td Son seleccionadas con técnicas y procesos de polinización controlada, tienen alta resistencia a enfermedades y plagas, alta producción y fácil adaptación a todo tipo de regiones.
                  tr
                    td Semillas Baby
                    td Son aquellas tratadas para detener su desarrollo.
                  tr
                    td Semillas híbridas
                    td Se trata de cruce de variedades puras, tienen uniformidad, rápido crecimiento, raíces y tallos con más resistencia y más robustos, y fruto de mejor calidad. Se puede conseguir gran resistencia a plagas y enfermedades, manteniendo el rendimiento y la uniformidad de frutos. <br> Pueden ser de crecimiento determinado o de crecimiento libre.
                  tr
                    td Semillas de hortalizas 
                    td Son variadas, pero la necesidad de humedad es común en todos los casos, pues el requerimiento es necesario para que se dé la germinación. 
                  tr
                    td Semillas de flores 
                    td Su tamaño es muy reducido, y su dispersión se da muy fácil por el viento o los insectos.
                  tr
                    td Semillas de frutos 
                    td Cada fruta tiene una semilla diferente.
                  tr
                    td Semillas comestibles	
                    td Tienen gran aporte de nutrientes (proteínas y vitamina B, calcio, vitamina E).

          p Al haber variedad de semillas, cada una tiene unos requerimientos específicos y condiciones ideales para su desarrollo.

          .row
            span.text-bold Técnicas para la producción y manejo de semillas
            br
            span Para llevar a cabo la producción, se necesita conocer los métodos que existen para producir semillas, así como la aplicación en diferentes plantas; a su vez, hay que determinar las condiciones que requiere cada una para ser almacenada sin perder su calidad.

            .col-lg-10.m-auto
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 4. 
                span Condiciones ideales para la germinación de la semilla 
              
              figure
                img(src='@/assets/curso/temas/tema4/img4.svg', alt='Imagen decorativa')
          
          .row
            .col-lg-8
              span.text-bold Técnicas para la producción, extracción y conservación de semillas 
              br
              p Se deben seleccionar las plantas vigorosas, sanas, sin plagas o enfermedades, que tengan las características propias de lo que se desea multiplicar y plantas con buena producción de frutos, los cuales deben estar de buen color, uniformes y en la mitad del ciclo de cosecha, comprobando su madurez, y, asimismo, utilizar herramientas limpias para la extracción del material (semillas).
              p Las semillas deben conservarse en condiciones adecuadas de humedad y temperatura, por lo cual se someten a un proceso de secado y, en algunos casos, a adición de algunos extractos de plantas que permitan conservarlas (aceites vegetales, entre otros). También es importante seleccionar el recipiente adecuado para el proceso de almacenamiento, de tal modo que puedan ser colocadas en lugares frescos y secos, con luz regulada (bancos).
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema4/img5.png', alt='Imagen decorativa')

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2(data-aos='flip-left') 4.2 Propagación asexual

    p La semilla es el órgano de propagación vegetal mediante el cual el nuevo individuo se dispersa; la semilla, propiamente dicha, proviene de un fruto, que, a su vez, proviene de una flor, y el nivel de éxito de que el individuo se establezca depende de las características fisiológicas y bioquímicas de la semilla. Sin embargo, hay otros factores externos que intervienen, como el sustrato, el clima, la competencia, la depredación, entre otros; es por ello que las reservas (carbohidratos, lípidos y proteínas) que contenga serán claves para esta se mantenga hasta que la plántula sea capaz de utilizar la luz y hacerse autótrofa. Las semillas son la principal fuente de alimentación en el mundo.

    .row.py-4.align-items-center
      .col-lg-7
        p Mediante este método de propagación vegetal, las plantas que no producen semilla logran perpetuarse, pues se reproducen utilizando partes vegetativas de una planta original, gracias a la capacidad de regeneración de tallos y raíces, o por la unión de partes vegetativas o injertos, así como también mediante cultivos in vitro.
        .cajon.color-acento-contenido.p-4
          p.mb-0 También se pueden generar plantas con características asexuales, por medio de semillas apomícticas (semillas con embriones de origen totalmente materno), las cuales provienen del saco embrionario; por ejemplo, la naranja. 
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema4/img6.png', alt='Imagen decorativa')
    
    .row.mt-4.mb-3.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Modalidades de reproducción asexual
      
    p.my-3 En las modalidades de reproducción asexual, un solo organismo da lugar a otros seres genéticamente idénticos al progenitor, mediante divisiones por mitosis. A continuación, se presenta la siguiente imagen:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-botones.p-5(style='background: #E1EDB5')
        .row.justify-content-center.mb-4
          .col-lg-10.col-md-12.col-sm-6
            figure
              img(src='@/assets/curso/temas/tema4/img7.png', alt='Las modalidades de reproducción asexual se representa así:- Gemación: Mitosis asimétrica que se genera en organismos unicelulares como la levadura.')
        h4 Gemación
        p Mitosis asimétrica que se genera en organismos unicelulares como la levadura.

      .col-md.tarjeta.color-acento-botones.p-5(style='background: #FFF8DA')
        .row.justify-content-center.mb-4
          .col-lg-10.col-md-12.col-sm-6
            figure
              img(src='@/assets/curso/temas/tema4/img8.png', alt='-Esporulación o esporogénesis: Reproducción de esporas y endosporas, mediante esporangios ubicados en el envés de la hoja. ')
          
        h4 Esporulación o esporogénesis
        p Reproducción de esporas y endosporas, mediante esporangios ubicados en el envés de la hoja. 

      .col-md.tarjeta.color-acento-contenido.p-5(style='background: #E1EDB5')
        .row.justify-content-center.mb-4
          .col-lg-10.col-md-12.col-sm-6
            figure
              img(src='@/assets/curso/temas/tema4/img9.png', alt='-Poliembrionía: Se desarrollan dos o más embriones en un solo óvulo fertilizado; por ejemplo, el mango.')
        h4 Poliembrionía
        p Se desarrollan dos o más embriones en un solo óvulo fertilizado; por ejemplo, el mango.
      
      .col-md.tarjeta.color-acento-contenido.p-5(style='background: #FFF8DA')
        .row.justify-content-center.mb-4
          .col-lg-10.col-md-12.col-sm-6
            figure
              img(src='@/assets/curso/temas/tema4/img10.png', alt='-Apomixis: Cuando una parte de la planta se divide (tallo, rama, brote, tubérculo, rizoma) y se desarrolla por separado, hasta convertirse en una nueva planta.')
        h4 Apomixis
        p Cuando una parte de la planta se divide (tallo, rama, brote, tubérculo, rizoma) y se desarrolla por separado, hasta convertirse en una nueva planta.

    .row.mb-3.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Reproducción asexual o multiplicación vegetativa artificial
    

    .row.my-3
      .col-lg-8
        p Para llevar a cabo la multiplicación vegetativa artificial, se presenta el injerto. La multiplicación vegetal artificial mediante injerto se lleva a cabo mediante la combinación de injerto, que va a constituirse en la parte superior de la nueva planta, llamándose púa, y en la parte baja, la planta, denominándose patrón o portainjerto.
        .row
          p En la preparación de un injerto, se deben conectar dos porciones de un tejido vegetal vivo, de tal manera que puedan seguir viviendo y posteriormente se comporten como una sola planta, combinando las características del injerto y del patrón. Dentro de los injertos más usados, están: 

          ul.lista-ul
            li 
              i.lista-ul__vineta
              span.color-verde Escudete. 
              | Es una t invertida para protegerse de la acumulación de agua; duración de 2 a 3 semanas.
            li 
              i.lista-ul__vineta
              span.color-verde Púa. 
              | Involucra una porción de tallo con varias yemas sobre un patrón.
            li 
              i.lista-ul__vineta
              span.color-verde Parche. 
              | Se extrae del patrón un parche rectangular.
            li 
              i.lista-ul__vineta
              span.color-verde De aproximación. 
              | Se emplea cuando la corteza del patrón es mucho más gruesa que la planta que servirá de injerto.
            li 
              i.lista-ul__vineta
              span.color-verde Puente. 
              | Se utiliza para reparar corteza del tronco lesionado.  
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img11.png', alt='Imagen decorativa')
      
      .row.my-3
        .col-lg-8.crd.crd--avatarHorizontal-bgr3.py-3.mb-2.m-auto
          .row.align-items-center
            .col-auto(style="z-index:1")
              figure
                img(src="@/assets/curso/temas/tema4/img19.png", alt="", style="width: 100px")
            .col(style="z-index:1")
              p.m-0 Para poder seleccionar alguno de los tipos de injerto anteriormente mencionados, es importante tener en cuenta rendimiento, calidad de frutos y demás productos, rapidez de producción, cambios y variedades.

        
    .row.my-4.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img13.png', alt='Imagen decorativa')
      .col-lg-8.my-4
        span.text-bold Acodo
        p Permite que un tallo o rama desarrolle raíces sin ser separado de la planta madre y, una vez que la rama ha generado raíces, se corta por debajo de ese punto, se planta y se obtiene una planta independiente pero idéntica a la madre. Dentro de los acodos, se tienen:

        ul.lista-ul.mb-4
          li 
            i.lista-ul__vineta(style="color: red")
            span.color-verde Aéreo simple: 
            | un solo acorde por rama.
          li
            i.lista-ul__vineta
            span.color-verde Aéreo múltiple: 
            | varios acodos en una misma rama.
          li
            i.lista-ul__vineta
            span.color-verde Subterráneo simple: 
            | se entierra solo una porción del tallo próximo al suelo.
          li
            i.lista-ul__vineta
            span.color-verde Subterráneo compuesto: 
            | se entierran varias porciones de tallo en forma de serpentina.

        .cajon.color-primario.p-4(style="background: #DEEBAD")
          p.mb-0 Para realizar un buen acodo, se debe seleccionar una buena rama o tallo, debajo de un nudo y hasta el extremo distal (15 cm), y efectuar unos dos cortes paralelos (separados de 2 a 3 cm), colocar papel aluminio (4 a 5 pulgadas), el material de enraizamiento (musgo o coco), colocar sobre el anillado y apretar el papel.
    
    .row.my-4.mb-3.align-items-center
      .col-lg-8
        span.text-bold Estacas 
        p se corta un fragmento del tallo con yemas y se entierra; luego de que broten raíces, ya se ha obtenido una nueva planta. Es importante tener en cuenta humedad, luz, y temperatura.

        p Para que el tallo o ramo desarrolle raíces, se deben tener 3 a 4 nudos con hojas, que deben seguir haciendo fotosíntesis para crecer; se debe seleccionar un buen sustrato; la siembra debe hacerse rápidamente, evitando la deshidratación; los cortes deben colocarse a una profundidad de 2 a 3 cm; entre la 3ª y la 8ª semana el esqueje ya tendrá raíces suficientes para realizar el trasplante.
      .col-lg-4.my-4
        figure
          img(src='@/assets/curso/temas/tema4/img14.png', alt='Imagen decorativa')
    
    p.mt-4.mb-3.text-bold.text-center Tipos de estructuras asexuales reproductivas

    .tarjeta.p-4.bgr-beige-claro
      SlyderA(tipo="b")
        .row.px-5.pt-3
          .col-md-6.mb-4.mb-md-0
            h4 Estolón, brote lateral 
              p.mt-4 Nace en la base del tallo de plantas herbáceas y crece horizontalmente al nivel del suelo, es decir, son tallos especiales modificados, pueden ser postrados o desparramados.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img15.png', alt='Imagen decorativa')
        .row.px-5.pt-3
          .col-md-6.mb-4.mb-md-0
            h4 Hijos o macollos
              p.mt-4 Tallo engrosado, acortado y con aspecto de roseta; muchos bulbos se reproducen, produciendo bulbos en la base.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img20.png', alt='Imagen decorativa')

        .row.px-5.pt-3
          .col-md-6.mb-4.mb-md-0
            h4 Rizomas
              p.mt-4 Tallos que crecen bajo la superficie de la tierra (jengibre, romero).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img21.png', alt='Imagen decorativa')

        .row.px-5.pt-3
          .col-md-6.mb-4.mb-md-0
            h4 Tubérculos
              p.mt-4 Tallos subterráneos engrosados por acumulación de sustancias alimenticias (papa, batata).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img22.png', alt='Imagen decorativa')

        .row.px-5.pt-3
          .col-md-6.mb-4.mb-md-0
            h4 Bulbos, tallos cortos y engrosados
              p.mt-4 A partir de yemas axilares de hojas carnosas, se desarrollan subterráneos; los hay tunicados (cebolla cabezona) y no tunicados (lilium).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img23.png', alt='Imagen decorativa')

        .row.px-5.pt-3
          .col-md-6.mb-4.mb-md-0
            h4 Cormo
              p.mt-4 Base hinchada de un vástago de tallo, envuelta por hojas secas, de escamas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img24.png', alt='Imagen decorativa')

        .row.px-5.pt-3
          .col-md-6.mb-4.mb-md-0
            h4 Raíces tuberosas
              p.mt-4 La raíz crece subterránea, con geotropismo positivo (a favor de la gravedad).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img25.png', alt='Imagen decorativa')
    
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2(data-aos='flip-left') 4.3 Tratamientos

    .row.my-3.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img26.svg', alt='Imagen decorativa')
      .col-lg-8.my-4
        .cajon.color-acento-contenido.p-4
          p.mb-0 Cuando la planta no produce semilla, se debe buscar alguna alternativa de propagación y, a través de cada uno de los métodos anteriormente citados, se puede generar un clon y así tener variedad con valor genético; no obstante, cada técnica requiere de un alistamiento y tratamiento especial, con el fin de que se logre perpetuar la propagación. 

        p.my-3 Se deben tratar los factores externos, como temperatura, humedad, luz, tiempo, sustrato, requerimiento nutricional, cortes, trazos, entre otros, los cuales permiten controlar las condiciones ideales para el proceso de propagación.
</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass">
ul
  padding-left: 40px !important

i.lista-ul__vineta
  color: green !important
  font-weight: bolder
  font-size: 1.2em

li
  margin-bottom: 0 !important
</style>
