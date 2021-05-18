<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1 
      .h3 Herramienta que acompaña a las entidades en el desarrollo de sus capacidades de intercambio de información
      

    .titulo-segundo
      #t_1_1.h4 1.1 Antecedentes y Marco Legal

    p.mb-5 El Marco de Interoperabilidad de Gobierno Digital es la herramienta que acompaña a las entidades en el desarrollo de sus capacidades de intercambio de información, sin importar sus restricciones o su tamaño

    TabsA.color-acento-contenido.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-tab.p-4(titulo="Leyes")
        h4.mb-3 Leyes
        p.mb-3
          strong Ley 2052 de 2020

        p.mb-3 Ley de Racionalización de Trámites, gracias a la cual se avanza en la transformación digital del Estado porque crea las condiciones para racionalizar, automatizar y digitalizar trámites de las entidades públicas.

        p.mb-3
          strong Ley 1955 de 2019 PND

        p.mb-3 Por el cual se expide el Plan Nacional de Desarrollo 2018-2022. “Pacto por Colombia, Pacto por la Equidad”.

        p.mb-3 
          strong Ley 1151 de 2007 del Plan Nacional de Desarrollo, Artículo 6, Numeral 6.2.2

        p.mb-3 «Se avanzará en la automatización de trámites, para lo cual cada sector desarrollará los sistemas de información requeridos haciendo uso de la Intranet Gubernamental»

        p.mb-3
          strong Ley 962 de 2005

        p.mb-3 Determina en su artículo 14 lo siguiente: “Cuando las entidades de la Administración Pública requieran comprobar la existencia de alguna circunstancia necesaria para la solución de un procedimiento o petición de los particulares, que obre en otra entidad pública, procederán a solicitar a la entidad el envío de dicha información.

        p En tal caso, la carga de la prueba no corresponderá al usuario. Será permitido el intercambio de información entre distintas entidades oficiales, en aplicación del principio de colaboración. El envío de la información por fax o por cualquier otro medio de transmisión electrónica, proveniente de una entidad pública, prestará mérito suficiente y servirá de prueba en la actuación de que se trate, siempre y cuando se encuentre debidamente certificado digitalmente por la entidad que lo expide y haya sido solicitado por el funcionario superior de aquel a quien se atribuya el trámite”.


      .tarjeta.color-tab.p-4(titulo="Decretos")
        h4 Decretos

        p.mb-3
          strong Decreto 620 de 2020

        p.mb-3 Lineamientos generales en el uso y operación de los servicios ciudadanos digitales.

        p.mb-3
          strong Decreto 2106 de 2019

        p.mb-3 "Por el cual se dictan normas para simplificar, suprimir y reformar trámites, procesos y procedimientos innecesarios existentes en la administración pública".

        p.mb-3
          strong Decreto 1078 de 2015

        p.mb-3 “Por medio del cual se expide el Decreto Único Reglamentario del Sector de Tecnologías de la Información y las Comunicaciones”.

        p.mb-3 
          strong Decreto 2573 de 2014

        p.mb-3 Dispone los lineamientos generales de la Estrategia de Gobierno en Línea en lo que respecta a los fundamentos de la estrategia en los cuales se menciona la Interoperabilidad para fortalecer el intercambio de información entre entidades y sectores.

        p.mb-3
          strong Decreto 235 de 2010

        p.mb-3 Regula el intercambio de información entre entidades para el cumplimiento de la función pública y determina la obligación de las entidades de establecer mecanismos magnéticos, electrónicos o telemáticos para el intercambio de información con otras entidades que así lo requieran, sin que genere costo alguno para la entidad que la solicita.

        p.mb-3 
          strong Decreto 1151 de 2008 y su Manual para la implementación de la Estrategia de Gobierno en Línea.

        p «Las entidades deben realizar cambios en la manera de operar para eliminar límites con otras entidades y organizar sus trámites y servicios alrededor de necesidades de ciudadanos y empresas, a través de cadenas de trámites, ofreciendo servicios por medio de múltiples canales e intercambiando eficientemente la información, logrando establecer una visión unificada del Estado».
      .tarjeta.color-tab.p-4(titulo="Directivas")
        h4 Directivas
        p.mb-3
          strong Directiva 02 de 2019

        p Con el propósito de avanzar en la transformación digital del Estado e impactar positivamente la calidad de vida de los ciudadanos generando valor público en cada una de las interacciones digitales entre ciudadano y Estado y mejorar la provisión de servicios ciudadanos digitales de confianza y calidad.
      .tarjeta.color-tab.p-4(titulo="Documentos CONPES")
        h4 Documentos CONPES
        p.mb-3 Documento CONPES 3292 de 2004

        p Señala la necesidad de eliminar, racionalizar y estandarizar trámites a partir de asociaciones comunes sectoriales e intrasectoriales (cadenas de trámites), enfatizando en el flujo de información entre los eslabones que componen la cadena de procesos administrativos y soportados en desarrollos tecnológicos que permitan mayor eficiencia y transparencia en la prestación de servicios a los ciudadanos.

    .titulo-segundo.mb-3
      #t_1_2.h4 1.2 Colaboración entre Entidades para el Intercambio de la Información en la Administración Pública

    .card_colo1.mb-5.p-4
      .row.justify-content-center.align-items-center
        .col-lg-5
          p.mb-3 El uso del marco de interoperabilidad dirige las iniciativas de intercambio de información hacia interacciones entre las entidades públicas más eficientes, efectivas, oportunas y de alta calidad, que ayuda a reducir el costo y esfuerzo necesario al construir un entorno interoperable coherente, facilitando la prestación de trámites y servicios en línea que funcionan en conjunto tanto dentro como fuera de las entidades públicas.

          p El Marco de Interoperabilidad es promovido y mantenido por el Ministerio de Tecnologías de la Información y las Comunicaciones.

        .col-lg-6
          img.img-a(src="@/assets/curso/tema_1/img_1.png")

    .titulo-segundo.mb-3
      #t_1_3.h4 1.3 Objetivos del Marco de Interoperabilidad   

    img.img-a.mb-3(src="@/assets/curso/tema_1/img_2.png")

    .row.justify-content-center.mb-5
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_1.m-top  1 
          .col-lg-11
            p Apoyar a las entidades públicas en sus esfuerzos por diseñar y ofrecer trámites y servicios en línea a otras entidades públicas, ciudadanos y empresas que, en la medida de lo posible, sean digitales por defecto, es decir, que proporcionen servicios y datos preferentemente a través de medios digitales, siendo accesibles para todas las entidades, los ciudadanos y que permitan la reutilización, participación, acceso y transparencia.
            hr
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_3.m-top  2 
          .col-lg-11
            p Proporcionar orientación a las entidades públicas sobre el diseño y la actualización de los mecanismos de interoperabilidad, sus políticas, estrategias y directrices, así como la visión nacional que se promueve en interoperabilidad.
            hr
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-1
            ol.lista-ol
              li 
                span.h4.span.list_2.m-top  3 
          .col-lg-11
            p Contribuir al fortalecimiento de mecanismos de interoperabilidad en las entidades públicas para la prestación de trámites y servicios en línea.

    .titulo-segundo.mb-5
      #t_1_4.h4 1.4 ¿Quiénes deben usar el marco de interoperabilidad?

    .row.justify-content-center.mb-3
      .col-md-6.col-lg-5
        .tarjeta.color-tab.p-4.tamano-tarjeta
          .tarjeta-Avatar.mb-3
            img(src='@/assets/curso/tema_1/img_3.svg' alt='AvatarTop')
          .h4.text-center Entidades públicas
          ol.lista-ol
            li 
              span 
                strong 1.
              p Responsables de planear servicios que requieran colaboración interinstitucional.
          ol.lista-ol
            li 
              span 
                strong 2.
              p Que para mejorar su funcionamiento y relacionamiento con otras entidades a través del uso de las TIC.
      .col-md-6.col-lg-5
        .tarjeta.color-tab.p-4.tamano-tarjeta
          .tarjeta-Avatar.mb-3
            img(src='@/assets/curso/tema_1/img_4.svg' alt='AvatarTop')
          .h4.text-center Organizaciones privadas
          p Involucradas en la ejecución y/o evolución de la estrategia de Gobierno Digital.
    .row.justify-content-center.mb-3
      .col-md-6.col-lg-5.mb-5
        .tarjeta.color-tab.p-4.tamano-tarjeta_2
          .tarjeta-Avatar.mb-3
            img(src='@/assets/curso/tema_1/img_5.svg' alt='AvatarTop')
          .h4.text-center Miembros de gobiernos extranjeros
          p Interesados en la interoperabilidad con entidades del Estado colombiano.
      .col-md-6.col-lg-5.mb-5
        .tarjeta.color-tab.p-4.tamano-tarjeta_2
          .tarjeta-Avatar.mb-3
            img(src='@/assets/curso/tema_1/img_6.svg' alt='AvatarTop')
          .h4.text-center Miembros de la comunidad académica
          p Interesados en la interoperabilidad del Gobierno Digital.

    .titulo-segundo.mb-5
      #t_1_5.h4 1.5 Áreas de Aplicación de la Interoperabilidad

    .morada.p-4
      h4.mb-3 Otras entidades
      p.mb-3 Las distintas entidades del Estado suelen requerir información de otras entidades para brindar servicios a los ciudadanos, empresas y a otras entidades.

      p.mb-3 En múltiples casos, la información que requiere una entidad es gestionada por otra entidad, lo que en la práctica ha significado que el ciudadano deba desplazarse de un lugar a otro para obtener dicha información.

      p.mb-5 Bajo un escenario funcional de interoperabilidad, cuando una entidad requiera comprobar la existencia de alguna circunstancia necesaria para la prestación de un servicio que obre en otra entidad, no debe solicitarle dicha información al usuario, sino que deberá obtenerla de la entidad respectiva, a través de un mecanismo digital para el intercambio de información, sin que esto genere costo alguno para la entidad que solicita la información.

    img.i_top.mb-5(src="@/assets/curso/tema_1/img_7.png")

    .card_colo1.p-4.mb-3
      .row.justify-content-center
        .col-lg-10
          .h4.mb-5 Modelos de gobierno electrónico 
          img.img-a(src="@/assets/curso/tema_1/img_8.svg")
          ul.lista-ul--color
            li 
              span.lista-ul__vineta #[strong Gobierno al Ciudadano (G2C):] el Estado, con el propósito de atender la necesidades de la ciudadanía en general, identifica y habilita múltiples mecanismos que permitan acceder de manera simple y ágil a la información y servicios que el Estado provee.
            li 
              span.lista-ul__vineta #[strong Gobierno al Negocio (G2B):] generación de interacciones entre el Gobierno, las entidades privadas y los negocios.
            li 
              span.lista-ul__vineta #[strong Gobierno a Gobierno (G2G):] generación de interacciones entre entidades públicas


    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
}
</script>

<style lang="sass" scoped></style>
