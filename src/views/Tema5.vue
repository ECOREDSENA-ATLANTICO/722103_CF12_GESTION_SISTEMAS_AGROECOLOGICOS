<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Biotecnología para propagación vegetal
  
    .container.tarjeta.tarjeta--blanca
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p El cultivo de tejidos es aquel que requiere un medio libre de microorganismos y soluciones nutritivas, mezcladas con hormonas vegetales que promueven el crecimiento de raíces, tallos y hojas a partir de un segmento de planta. 
          p.mb-0 La propagación de plantas <em>in vitro</em> involucra cultivar material vegetal dentro de recipientes de vidrio, bajo condiciones ambientales artificiales, siendo pieza clave para el desarrollo científico.
    
      .row.m-4.p-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 6. 
          span Comparación de características del proceso de propagación in vitro e in vivo

        figure
          img(src='@/assets/curso/temas/tema5/img2.svg', alt='A continuación de la imagen se relaciona los procesos de propagación in vitro e in vivo.')
          figcaption.my-4.text-center Nota. 
            span Adaptado de Guía de técnicas, métodos y procedimientos de reproducción sexual o vegetativa de las plantas (2015).    
      .row.mb-3.align-items-center
        .col-auto
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
        .col.px-0
          h3.mb-0 Tipos y técnicas de propagación en laboratorio
      
    
      p.my-4 La micropropagación de plantas <em>in vitro</em> es una técnica consistente en propagar plantas de forma asexual, a través de un explante, mediante hojas, tallos, raíces, semillas o cualquier otro órgano, cuyo lugar de propagación sea el laboratorio y la cual permita obtener una planta idéntica a la madre.
      
      .row.align-items-center
        .col-lg-6.crd.crd--avatarHorizontal-bgr1.py-3.mb-3
          .row.align-items-center
            .col-auto(style="z-index:1")
              figure
                img(src="@/assets/curso/temas/tema5/img3.svg", alt="", style="width: 100px")
            .col(style="z-index:1")
              strong.m-0.text-small Embriogénesis genética, 
              span.text-small o somática, técnica mediante la cual se desarrolla un embrión sin la unión y fertilización de gametos. Se encuentran embriogénesis directa e indirecta. 
        .col-lg-6.crd.crd--avatarHorizontal-right-bgr1.py-3.mb-3
          .row.align-items-center
            .col(style="z-index:1;padding-left: 30px")
              strong.m-0.text-small Organogénesis, 
              span.text-small técnica que consiste en obtener tallos, raíces o flores por medio de una yema; se puede llevar a cabo de manera directa, desde el explante, o indirecta, desde los callos; no obstante, para ambos casos, se requiere de medios de cultivo.
            .col-auto(style="z-index:1")
              figure
                img(src="@/assets/curso/temas/tema5/img4.svg", alt="", style="width: 100px")
            
        .col-lg-6
          p.mb-0
      p.text-bold.text-center.my-4 Para realizar el proceso de micropropagación vegetal, se requiere de:

      PasosA.color-acento-contenido.mb-5(tipo="l")
        .row
          .col-lg-12.mb-4.mb-md-0
            p Seleccionar y preparar la planta madre, la cual debe ser de alta producción, resistente a enfermedades y al medio ambiente, para lo cual se introduce por semana o meses en un invernadero que cuente con las condiciones controladas, con el fin de lograr explantes libres de enfermedades.

        .row
          .col-lg-12.mb-4.mb-md-0
            p Desinfección del material. Al extraer las partes de la planta madre, se debe hacer con asepsia, desinfectando cada parte, para eliminar los contaminantes externos.
        
        .row
          .col-lg-12.mb-4.mb-md-0
            p Establecimiento del cultivo. Se da inicio al ciclo <em>in vitro</em>, al cual se le ha controlado la selección, aislamiento y esterilización de explantes, introduciendo todo en un cultivo estéril y se esperan dos semanas a que inicie el proceso de germinación.
        
        .row
          .col-lg-12.mb-4.mb-md-0
            p Desarrollo y multiplicación de brotes. En esta fase, los explantes empiezan a brotar, con varias hojas, todos los brotes se subcultivan en recipientes adecuados, pues la idea es mantener y multiplicar la cantidad de los mismos para la siguiente fase.
        
        .row
          .col-lg-12.mb-4.mb-md-0
            p Enraizamiento. Cuando los brotes empiezan a mostrar raíces, se procede a enraizar (aplicación de enraizante químico o natural) para estimular el crecimiento de la raíz, proceso que dura aproximadamente 20 días.
        .row
          .col-lg-12.mb-4.mb-md-0
            p Aclimatación de las plántulas. Si el enraizamiento se hace in vitro, las plántulas deben contar con un ambiente adecuado para su crecimiento.

      .row.mb-3.align-items-center
        .col-auto
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
        .col.px-0
          h3.mb-0 Medios, materiales, equipos

      p Para realizar el proceso de propagación de plantas in vitro, se requiere:

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3. 
          span Medios, materiales y equipos para propagación <em>in vitro</em>

      .tabla-a.color-acento-contenido.mb-3
        table
          caption.mt-2.mb-4 Nota. 
            | Sena (2022). 
          thead.text-center
            tr(style="background: #FFA686")
              th Medios
              th Materiales
              th Equipos
          
          tbody
            tr
              td
                ul.lista-ul
                  li 
                    i.lista-ul__vineta                  
                    | Explante (material biológico).
                  li 
                    i.lista-ul__vineta                  
                    | Ambientes artificiales y controlados (temperatura, humedad, nutrientes), que permiten el crecimiento exitoso de una planta.
                  li 
                    i.lista-ul__vineta                  
                    | Reguladores de crecimiento (citoquinas y ácido giberélicos).
                  li 
                    i.lista-ul__vineta                  
                    | Enraizante (natural o químico).

              td
                ul
                  li 
                    i.lista-ul__vineta                  
                    | Reactivos
                  li 
                    i.lista-ul__vineta                  
                    | Recipientes de cristal
                  li 
                    i.lista-ul__vineta                  
                    | Bisturí
                  li 
                    i.lista-ul__vineta                  
                    | Pinzas
              td
                ul
                  li 
                    i.lista-ul__vineta                  
                    | Volumétricos
                  li 
                    i.lista-ul__vineta                  
                    | Agitadores
                  li 
                    i.lista-ul__vineta                  
                    | Autoclave
                  li 
                    i.lista-ul__vineta                  
                    | Cabina de flujo laminar
                  li 
                    i.lista-ul__vineta                  
                    | Recintos o salas de incubación
      
      .row

      .row.my-4.align-items-center
        .col-auto
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
        .col.px-0
          h3.mb-0 Protocolos para la siembra de material <i>in vitro</i>
      
      p El protocolo para siembra de material <em>in vitro</em> permite diseñar el paso a paso del proceso, con el fin de poder realizar un alistamiento de los medios (material vegetal y explantes), materiales (preparación del medio de cultivo), además de verificar lo que se necesita para desarrollar la desinfección del material vegetal y el análisis de las variables a considerar, con el fin de lograr un proceso exitoso.
      p Describe el procedimiento a desarrollar, para finalmente poder analizar los resultados obtenidos y establecer estrategias de mejora que permitan optimizar el proceso y, de esta manera, lograr el fin inicial.
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

<style lang="sass"></style>
