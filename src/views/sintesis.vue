<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis: Propagación vegetal.")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Es importante tener cuenta que existen diversas formas de propagación vegetal de las plantas, por lo cual es necesario conocer la especie y las condiciones propias que permitan que desarrolle el proceso a cabalidad y de manera exitosa, identificando las variables técnicas, ambientales, sociales y económicas que involucre, con miras a obtener los resultados esperados.
    p Luego del proceso de planificación, se requiere de la implementación de las técnicas para obtener el material vegetal (método de propagación), y la utilización de los materiales, medios y equipos adecuados para que el proceso se desarrolle exitosamente.
    p Dentro del proceso de propagación vegetal, se deben tener en cuenta procedimientos, protocolos y demás elementos claves que lo guíen, con el fin de poder obtener los resultados esperados y, asimismo, analizar los resultados, estableciendo las variables que lo influencian.
    p.mb-5 Así pues, un resumen en el presente componente podrá ser representado en el siguiente mapa conceptual.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La propagación vegetal requiere de la elaboración de sustratos, realizar la desinfección, implementar buenas prácticas agrícolas, seleccionar la técnica de propagación ya se sexual o asexual, manejo ecológico de plagas y enfermedades.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
