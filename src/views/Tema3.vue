<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normatividad
  
    .container.tarjeta.tarjeta--blanca
      .row
        .col-lg-8
          .cajon.color-acento-contenido.p-4
            p.mb-0 La normatividad direcciona conductas y procedimientos según criterios establecidos; para el caso propio del tema abordado en este componente formativo, permite establecer criterios de cumplimiento de medidas necesarias para el control de la sanidad vegetal, así como el control técnico de la producción y la comercialización de material vegetal.

          p.mt-3 Las buenas prácticas agrícolas (BPA) son un conjunto de normas aplicadas a las etapas de producción agrícola, que basan su importancia en establecer métodos de cultivo, cosecha, selección y almacenamiento desarrollados y aplicados que aseguren buenas condiciones sanitarias del proceso, reduciendo los peligros de contaminación biológica, química y física, con el fin de ofrecer productos de buena calidad e inocuidad, para, de esta manera, impactar lo menos posible el ambiente, la salud del operario y del consumidor, en el marco de una agricultura sostenible, basados en:
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
      
      .row.my-3
        .col-lg-4
          p.bgr-tarjeta.bgr-tarjeta-1 Obtención de productos sanos <br>(sin riesgos para el consumidor).
        .col-lg-4
          p.bgr-tarjeta.bgr-tarjeta-2 La protección del medio ambiente.
        .col-lg-4
          p.bgr-tarjeta.bgr-tarjeta-3 El bienestar de los agricultores. 
        
      .row.my-3
        p Se debe realizar la planificación del proceso, con el fin de determinar los factores que pueden favorecer o afectar el éxito de este (planificación de producción, análisis de riesgos, áreas de servicio e instalaciones, calidad y manejo del agua, manejo de plagas y enfermedades, manejo integrado del cultivo, protección del medio ambiente, documentos y trazabilidad del proceso), con el fin de proporcionar un marco de agricultura sustentable, documentado y evaluable.
      
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El monitoreo de las condiciones ambientales dentro del establecimiento y en el desarrollo del proceso permite controlar las plagas y enfermedades, además de las condiciones ambientales del entorno, pues se busca que el proceso productivo sea ambientalmente sostenible (equilibrio económico, social y ambiental), generando productos más inocuos y saludables para el autoconsumo y el consumidor en general.

      .row.my-5
        .col-lg-8
          p Para proteger los recursos naturales que están relacionados con la unidad productiva del proceso productivo, se deben aplicar normas de BPA, lo que garantice la sostenibilidad del sistema, la competitividad de la producción agrícola y la conservación de los factores ambientales.

          ul
            li Selección del lote.
            li Evaluación previa de los peligros (químicos, físicos y microbiológicos).
            li Manejo de residuos peligrosos generados en el proceso.
            li Manejo del recurso hídrico dentro del proceso.
            li Manejo de suelo.
            li Selección del material de propagación adecuado. 
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/img3.png', alt='Imagen decorativa')
      
      .row
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/img4.png', alt='Imagen decorativa')
        .col-lg-8
          p Adicionalmente, hay que fomentar condiciones de trabajo seguras y saludables para los trabajadores, realizando capacitaciones constantes del personal en materia de primeros auxilios, manejo del botiquín, normas de higiene, procedimientos en caso de accidentes y emergencias, y entrenamiento para el manejo de equipos complejos y peligrosos.

          .cajon.color-acento-botones.p-4
            p.mb-0 Los trabajadores deben estar equipados con ropa adecuada para el desempeño de su labor; aquellos que realizan actividades de desinfección deben someterse a estudios anuales de salud, de acuerdo con las pautas de salud local, además de garantizarse que las personas que laboran estén vinculadas a un régimen de salud, bajo términos y amparados en la ley.        
</template>

<script>
export default {
  name: 'Tema3',
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
