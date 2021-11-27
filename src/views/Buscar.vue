<template>
  <div class="buscar">
    <BuscarReceta msg="Encuentra tu receta 🥧"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BuscarReceta from '@/components/BuscarReceta.vue'

export default {
  name: 'Buscar',
  components: {
    BuscarReceta
  }
}
</script>