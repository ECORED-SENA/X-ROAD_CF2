<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 5 
      .h3 Modelo de Madurez - Pasos para lograr implementar y lograr la madurez
    
    LineaTiempoC.color-acento-contenido
      .row(titulo="Paso 1")
        .col-md-6.mb-4.mb-md-0
          p.mb-3.txt_color_1
            strong 1 - Ausente
          p La entidad no ha empezado a implementar los lineamientos del Marco de interoperabilidad del Estado y carece de las capacidades necesarias para implementarlo.
      
        .col-md-6
          figure
            img.img-a(src='@/assets/curso/tema_5/img_1.png', alt='Texto que describa la imagen')

      .row(titulo="Paso 2")
        .col-md-6.mb-4.mb-md-0
          p.mb-3.txt_color_1
            strong 2 - Inicial
          p La entidad ha iniciado su proceso de implementación de los lineamientos del Marco de Interoperabilidad.
      
        .col-md-6
          figure
            img.img-a(src='@/assets/curso/tema_5/img_2.png', alt='Texto que describa la imagen')

      .row(titulo="Paso 3")
        .col-md-6.mb-4.mb-md-0
          p.mb-3.txt_color_1
            strong 3 - Intermedio 
          p La entidad ha venido trabajando en la implementación de los lineamientos del Marco de Interoperabilidad en algunos de sus servicios de intercambio de información.
      
        .col-md-6
          figure
            img.img-a(src='@/assets/curso/tema_5/img_3.png', alt='Texto que describa la imagen')

      .row(titulo="Paso 4")
        .col-md-6.mb-4.mb-md-0
          p.mb-3.txt_color_1
            strong 4 - Consolidado 
          p La entidad ha logrado que la implementación de los lineamientos del Marco de Interoperabilidad del Estado sea un tema conocido a nivel institucional sin embargo no ha logrado involucrar a todos los interesados.
      
        .col-md-6
          figure
            img.img-a(src='@/assets/curso/tema_5/img_4.png', alt='Texto que describa la imagen')

      .row(titulo="Paso 5")
        .col-md-6.mb-4.mb-md-0
          p.mb-3.txt_color_1
            strong 5 - Institucionalizado
          p La entidad ha logrado implementar de forma adecuada los lineamientos del Marco de Interoperabilidad para todos sus servicios de intercambio de información.
      
        .col-md-6
          figure
            img.img-a(src='@/assets/curso/tema_5/img_5.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
