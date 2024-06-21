<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(style='text-align:justify') Le damos la bienvenida al componente formativo denominado 
      span.text-bold “Propagación vegetal” 
      | , en el cual se desarrollan temáticas enfocadas a la implementación del proceso de propagación vegetal, teniendo en cuenta: sustratos, técnicas de propagación, equipos y herramientas, métodos de desinfección,  alternativas de propagación de material vegetal <em>in vitro</em>; además de identificar las condiciones óptimas (luz, temperatura, humedad, nutrientes, sanidad) para la  ejecución del proceso y desarrollo de habilidades frente al sistema agroecológico según requerimientos. Comencemos con la siguiente información: 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/e6-be5YGpU0?si=As-AaYCFfyIvYz6t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
