<template lang="pug">
.curso-main-container.pb-3
  BannerInterno  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Manejo Ecológico de Plagas y Enfermedades (MEPE)

    .row.mb-4.align-items-center
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4(style="background: #FFFAE3")
          p.mb-0 La implementación de diversas técnicas de agricultura ha venido generando problemas en cuanto a plagas y enfermedades, y la posible solución anticipada de utilizar plaguicidas de origen químico, de manera no controlada ni guiada, en vez de mejorar la situación, ha generado fuertes daños a la productividad, al ser humano y al medio ambiente.

        p No solo se trata de pensar en satisfacer una necesidad agrícola, sino de planificar todo lo que conlleva, como el tipo de reproducción, materiales, medios y equipos, y las medidas necesarias para contrarrestar cualquier perturbación que se pudiera presentar al hombre o al medio ambiente, para lo cual se requiere tener en cuenta:

        .row
          ul(style="padding-left: 50px") 
            li 
              i.lista-ul__vineta                  
              | Conocimiento de los organismos nocivos y benéficos del proceso.
            li 
              i.lista-ul__vineta                  
              | Plagas.
            li
              i.lista-ul__vineta                  
              | Enfermedades.
            li 
              i.lista-ul__vineta                  
              | Medidas de control.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema6/img1.png', alt='Imagen decorativa')
    
    .row.mb-5.align-items-center
      .col-lg-10.crd.crd--avatarHorizontal-bgr2.py-3.mb-2.m-auto
        .row.align-items-center
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema6/img2.svg", alt="", style="width: 100px")
          .col(style="z-index:1")
            p.m-0 El manejo integrado de plagas involucra una metodología que emplea todos los procedimientos aceptables económicamente, ecológicamente y toxicológicamente, para mantener las poblaciones de organismos patógenos por debajo del umbral de propagación de dichos organismos, aplicando medidas biológicas, biotécnicas y fitomejoramiento.

    .row.mb-3.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Medidas para la protección natural

    p Existen métodos para proteger los cultivos de otros animales o de enfermedades, para lo cual se debe realizar un manejo agroecológico de plagas que involucre:

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 4. 
      span Medidas de protección natural

    .tabla-a.color-acento-contenido.mb-5
      table
        caption.mb-5.text-center Nota. 
          span Tomado de Manejo ecológico de plagas y enfermedades (2004).
        thead.text-center(style="background: #FFA686")
          tr
            th Control cultural
            th Control biológico
            th Control con plantas insecticidas 
        tbody
          tr
            td
              ul
                li 
                  i.lista-ul__vineta                  
                  | Control manual de insectos.
                li 
                  i.lista-ul__vineta                  
                  | Eliminación de plantas o frutas enfermas.
                li 
                  i.lista-ul__vineta                  
                  | Barbecho.
                li 
                  i.lista-ul__vineta                  
                  | Variedades resistentes.
                li 
                  i.lista-ul__vineta                  
                  | Rotación y asociación de cultivos.
                li 
                  i.lista-ul__vineta                  
                  | Manejo de densidad y fechas de siembra.
                li 
                  i.lista-ul__vineta                  
                  | Manejo de riego para combate de malezas.
                li 
                  i.lista-ul__vineta                  
                  | Cercas vivas para crear refugios para los enemigos naturales.
                li 
                  i.lista-ul__vineta                  
                  | Trampas.
                li 
                  i.lista-ul__vineta                  
                  | Caldos minerales.
            td
              ul
                li 
                  i.lista-ul__vineta                  
                  | Conservación o fomento de los enemigos naturales de las plagas.
                li 
                  i.lista-ul__vineta                  
                  | Aumento de organismos benéficos.
                li 
                  i.lista-ul__vineta                  
                  | Introducción de enemigos naturales contra plagas exóticas.
            td
              ul
                li 
                  i.lista-ul__vineta                  
                  | Uso de polvos, extractos, aceites de plantas con propiedades insecticidas, reguladores de crecimiento, repelentes o que alteren el comportamiento de las plagas.

    

    .row.mb-3.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Insecticidas

    .row
      p Los innumerables problemas fitosanitarios presentados en el área agronómica se han combatido desde hace muchos siglos con insecticidas químicos de rápida acción, entre los cuales se destacan:
    

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img3.png", alt="Se relaciona a continuación los insecticidas químicos que se destacan: 1. Organoclorados: Altamente estables, de bajo costo, sin embargo, los residuos son de gran persistencia en el ambiente.")
          .crd_hover_txt--body.text-center
            h6.mb-3 Organoclorados
            p.mb-0.text-white Altamente estables, de bajo costo, sin embargo, los residuos son de gran persistencia en el ambiente.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img4.png", alt="2. Organofosforados")
          .crd_hover_txt--body.text-center
            h6.mb-3 Organofosforados
            p.mb-0.text-white Actúan como insecticidas de contacto, son más tóxicos para vertebrados, no son persistentes en el ambiente.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img5.png", alt="3. Carbamatos")
          .crd_hover_txt--body.text-center
            h6.mb-3 Carbamatos
            p.mb-0.text-white Se utilizan como insecticidas, herbicidas y fungicidas.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img6.png", alt="4. Piretroides")
          .crd_hover_txt--body.text-center
            h6.mb-3 Piretroides
            p.mb-0.text-white Sirven para combatir plagas agrícolas, se obtienen a partir de flores secas de crisantemo. 
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
