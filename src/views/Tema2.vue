<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Desinfectantes
  
    .container.tarjeta.tarjeta--blanca
      .row

        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los desinfectantes son productos que se aplican con el fin de eliminar o frenar el crecimiento de microorganismos patógenos. A la hora de seleccionar un desinfectante, este debe ser apropiado para combatir bacteria, virus, hongos, nematodos, además de no ser irritante, tóxico o corrosivo, pues no solo debe ser potente contra agentes patógenos, si no seguro para las personas y de bajo impacto para los equipos, entorno y plantas. 

    p.text-bold.text-center.mt-5.mb-4 Es importante tener en cuenta que la eficacia de los desinfectantes se ve afectada por:
    .row.justify-content-center.d-flex.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2. 
          span Factores que afectan la eficiencia de un desinfectante
        
        .row.fnd-2.mb-3 
          figure
            img.d-lg-block.d-none(src='@/assets/curso/temas/tema2/img2.svg', alt='A continuación de la imagen  relacionamos los factores que afectan la eficiencia de un desinfectante.')
            img.d-lg-none.d-block(src='@/assets/curso/temas/tema2/img17.svg', alt='A continuación de la imagen  relacionamos los factores que afectan la eficiencia de un desinfectante.')
        figcaption.mb-5.text-center Nota. 
          span Adaptado de Selección y uso de desinfectantes para la producción en viveros (2016). 
    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 2.1 Tipos
    p.pb-3 La desinfección del sustrato y el material vegetal previa al proceso de propagación debe realizarse usando los desinfectantes adecuados y en concentraciones indicadas, para no afectar la planta, pues, al ser sometidos a los distintos métodos, se pierden nutrientes y condiciones apropiadas para el desarrollo de la planta.

    .row.mb-3.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Desinfección química

    p.mt-4 Este tipo de desinfección se destaca por su elevada eficacia insecticida, nematicida, fungicida y herbicida; no obstante, a la hora de seleccionarlo, es importante analizar sus efectos sobre la salud, el medio ambiente y la translocación de este a la planta. A continuación los principales desinfectantes.

    .row 
      .col-lg-6
        .row.bgr-tarjeta-quimica1.align-items-center
          .col-lg-4
            img.icono-quimico(src='@/assets/curso/temas/tema2/img10.svg', alt='Relacionamos a continuación los principales desinfectantes: 1. Fungicida Terraclor 75 %, nombre común pentacloronitrobenceno De síntesis orgánica y sirve para desinfectar sustratos y semillas.')
          .col-lg-8
            h4 Fungicida Terraclor 75%, nombre común pentacloronitrobenceno
            p De síntesis orgánica y sirve para desinfectar sustratos y semillas.
      .col-lg-6  
        .row.bgr-tarjeta-quimica2.align-items-center
          .col-lg-4
            img.icono-quimico(src='@/assets/curso/temas/tema2/img11.svg', alt='4. Bromuro de metilo Contribuye al control de un alto espectro de plagas. Repercusiones al medio ambiente, la salud.')
          .col-lg-8 
            h4 Bromuro de metilo
            p Contribuye al control de un alto espectro de plagas. Repercusiones al medio ambiente, la salud.
    .row 
      .col-lg-6 
        .row.bgr-tarjeta-quimica3.align-items-center
          .col-lg-4
            img.icono-quimico(src='@/assets/curso/temas/tema2/img12.svg', alt='2. Cloropicrina (PIC) Se utiliza el nematicida, tiene efecto sobre insectos del suelo, semillas de hierbas.')
          .col-lg-8
            h4 Cloropicrina (PIC)
            p Se utiliza el nematicida, tiene efecto sobre insectos del suelo, semillas de hierbas.
      .col-lg-6
        .row.bgr-tarjeta-quimica3.align-items-center
          .col-lg-4
            img.icono-quimico(src='@/assets/curso/temas/tema2/img13.svg', alt='5. 1-3 dicloropropeno Hidrocarburo clorado, organoclorado, con propiedades nematicidas, fungicidas, insecticidas y herbicidas.')
          .col-lg-8
            h4 1-3 dicloropropeno
            p Hidrocarburo clorado, organoclorado, con propiedades nematicidas, fungicidas, insecticidas y herbicidas.
    .row 
      .col-lg-6 
        .row.bgr-tarjeta-quimica2.align-items-center
          .col-lg-4
            img.icono-quimico(src='@/assets/curso/temas/tema2/img14.svg', alt='3. Metam-sodio,Desinfectar suelos destinados a semilleros, viveros y cultivos varios, posee actividad fungicida, insecticida, herbicida y nematicida. ')
          .col-lg-8 
            h4 Metam-sodio
            p Desinfectar suelos destinados a semilleros, viveros y cultivos varios, posee actividad fungicida, insecticida, herbicida y nematicida.
      .col-lg-6
        .row.bgr-tarjeta-quimica1.align-items-center
          .col-12.col-lg-4.mx-auto  
            img.icono-quimico(src='@/assets/curso/temas/tema2/img15.svg', alt='6.Dazomet, Tiene acción sobre insectos, hongos, nematodos y hierbas, resulta fitotóxico para las plantas verdes.')
          .col-lg-8 
            h4 Dazomet
            p Tiene acción sobre insectos, hongos, nematodos y hierbas, resulta fitotóxico para las plantas verdes.

    .row 
      .col-lg-6.m-auto 
        .row.bgr-tarjeta-quimica3.align-items-center
          .col-lg-4
            img.icono-quimico(src='@/assets/curso/temas/tema2/img16.svg', alt='7. Basamid Tiene acción sobre insectos, hongos, nematodos y hierbas, resulta fitotóxico para las plantas verdes Prevención y control de nematodos, hongos, bacterias, insectos y otras malezas, bajo riesgo de contaminación.')
          .col-lg-8 
            h4 Basamid
            p Prevención y control de nematodos, hongos, bacterias, insectos y otras malezas, bajo riesgo de contaminación.

    

    .row.mt-5.mb-4.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Alternativas no químicas
    
    .p Existen otras alternativas para la desinfección de las plantas, que, al igual que otro tipo de desinfectantes, buscan conservar las propiedades de estas; de esta manera, observe las alternativas no químicas que se pueden llevar a cabo: 

    figure.my-3
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/QGP_2QF7lV8?si=jSVRoYA2fE8hk8od" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mt-5.mb-4.align-items-center
      .col-auto
        img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Técnicas y preparación
    
      p.my-4 Para llevar a cabo el proceso de desinfección, es importante seleccionar el método adecuado dependiendo de las características propias del sustrato, además del análisis de los posibles impactos que se generan en la salud, el medio ambiente y el material vegetal. Para ello, se tienen en cuenta los siguientes aspectos que se comparten desde la preparación: 

    .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      .tarjeta.tarjeta--gris.p-4
        PasosB.color-acento-contenido
          .row(titulo="")
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Se relaciona a continuación de la imagen los aspectos de como seria la preparación.')
          .row(titulo="")
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Imagen decorativa')
          .row(titulo="")
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imagen decorativa')
          .row(titulo="")
            figure
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='Imagen decorativa')
          .row(titulo="")
            figure
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='Imagen decorativa')
          .row(titulo="")
            figure
              img(src='@/assets/curso/temas/tema2/img9.svg', alt='Imagen decorativa')
        
        
        
</template>

<script>
export default {
  name: 'Tema2',
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
