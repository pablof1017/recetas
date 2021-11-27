<template>
  <div class="crear">
    <CrearReceta msg="Nueva receta 🥧"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CrearReceta from '@/components/CrearReceta.vue'

export default {
  name: 'Crear',
  components: {
    CrearReceta
  }
}
</script>
