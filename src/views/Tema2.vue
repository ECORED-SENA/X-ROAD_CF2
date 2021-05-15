<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2 
      .h3 Modelo Conceptual de Interoperabilidad

    SlyderB.mb-5(:datos="datosSlyder")
    
    
    .titulo-segundo.mb-5
      #t_2_1.h4 2.1 Gobernanza de la Interoperabilidad

    .row.justify-content-center
      .col-lg-8
        .row.justify-content-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_1.m-top  1 
          .col-lg-6
            p Contrato de descripción del servicio de intercambio.
            hr
        .row.justify-content-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_3.m-top  2 
          .col-lg-6
            p Monitoreo y disponibilidad del servicio.
            hr
        .row.justify-content-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_4.m-top  3 
          .col-lg-6
            p Procesos de Gobierno.
            hr
        .row.justify-content-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_2.m-top  4 
          .col-lg-6
            p Procesos gobernados de interoperabilidad.

    img.img-a(src="@/assets/curso/tema_2/img_7.png")
    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '¿Qué es?',
        texto:
          'El <strong>Marco de Interoperabilidad</strong> proporciona la orientación necesaria a las entidades públicas y en general a todos aquellos que quieran intercambiar información.',
        imagen: require('@/assets/curso/tema_2/img_1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '¿Cómo lo hace?',
        texto:
          '<strong>Mediante</strong> un conjunto de lineamientos sobre cómo mejorar la gobernanza de las actividades relacionadas a la interoperabilidad.',
        imagen: require('@/assets/curso/tema_2/img_2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '¿Para qué?',
        texto:
          '<strong>Para</strong> establecer relaciones entre proveedores y consumidores de información y racionalizar los procesos que dan soporte a los trámites y servicios o cualquier servicio digital prestado por las entidades, de conformidad con el marco normativo vigente y con garantía de hacerlo en un entorno de confianza digital.',
        imagen: require('@/assets/curso/tema_2/img_3.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Componente 1',
        texto:
          '<strong>Cuatro Dominios:</strong> <br><br> <strong>1.</strong> Político - Legal. <br> <strong>2.</strong> Organizacional.<br> <strong>3.</strong> Semántico. <br> <strong>4.</strong> Técnico. <br><br> Cada uno de ellos trata un tema específico de la interoperabilidad.',
        imagen: require('@/assets/curso/tema_2/img_4.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Componente 2',
        texto:
          '<strong>Principios</strong> <br><br> Definen y orientan la concepción, diseño e implementación de los servicios de intercambio de información con un enfoque centrado en el ciudadano, seguro y de confianza.',
        imagen: require('@/assets/curso/tema_2/img_5.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Componente 3',
        texto:
          '<strong>Componentes Transversal</strong> <br><br> <strong>1.</strong> Lineamientos. <br> <strong>2.</strong> Gobierno.<br> <strong>3.</strong> Modelo de Madurez.',
        imagen: require('@/assets/curso/tema_2/img_6.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
