<template>
      <div class="container">
        <h1>{{ msg }}</h1>
        <div @submit.prevent="buscarReceta" class="buscar">
          <input type="text" v-model="nombre" placeholder="🔎..." class="nombre-input">           
          <div class="radio">
            <input type="radio" id="dulce" value="Dulce" v-model="picked">
            <label for="dulce">Dulce</label>
            <input type="radio" id="salado" value="Salado" v-model="picked">
            <label for="salado">Salado</label>
          </div>
          <br>
          <div class="checkbox">           
            <input type="checkbox" id="banana" value="Banana" v-model="checkedIng">
            <label for="banana">Banana</label>
            <input type="checkbox" id="pan" value="Pan" v-model="checkedIng">
            <label for="pan">Pan</label>
            <input type="checkbox" id="azucar" value="Azucar" v-model="checkedIng">
            <label for="azucar">Azucar</label>
            <input type="checkbox" id="lentejas" value="Lentejas" v-model="checkedIng">
            <label for="lentejas">Lentejas</label>
            <input type="checkbox" id="salsa" value="Salsa" v-model="checkedIng">
            <label for="salsa">Salsa</label>
          </div>  
          <button type="submit" @click="buscarReceta(nombre,picked,checkedIng)">Buscar</button>
        </div>
        
          <div class="recetas" v-for="(receta, index) in recetasFiltradas" v-bind:key="index">
              <h4>Foto: {{receta.foto}}</h4>
              <h4>Nombre: {{receta.nombre}}</h4>
              <h4>Tipo: {{receta.picked}}</h4>
              <h4>Ingredientes: {{receta.checkedIng}}</h4>
          </div>
        
      </div>
      
</template>

<script>
export default {
  name: 'BuscarReceta',
  props: {
    msg: String
  },
  data() {
    return {
      recetas: [],
      nombre: "",
      picked: "",
      checkedIng: [],
      result: "",
      recetasFiltradas: []
    }
  },
  methods: {
    buscarReceta (nombre,picked,checkedIng) {
      let recetas = JSON.parse(localStorage.getItem("recetas-vue"));

      const result = recetas.filter(receta => {
        // console.log(receta.checkedIng[1] + " receta.checkedIng" )
        // console.log(checkedIng + " checkedIng" )

        let hasAllElems = true;


        for (let i = 0; i <  checkedIng.length; i++){  
          if (receta.checkedIng.indexOf(checkedIng[i]) === -1) {
            hasAllElems = false;
            break;
          } 
        }
        console.log(hasAllElems);

        return receta.nombre.includes(nombre) && receta.picked.includes(picked) && hasAllElems
      })
      this.recetasFiltradas = result 
     
      console.log(this.recetasFiltradas)
      return 
    } 
  }
}

</script>
<style scoped>

* {
  box-sizing: border-box;
}

h1 {
  padding: 20px;
  font-weight: 600;
}
.container {
  margin-top: 50px;
  padding: 10px;
  background-color: #e2decd;
  border-radius: 20px;
}

input[type="checkbox"] {
  display: none;
}

input[type="radio"] {
  display: none;
}

.radio {
  margin: 10px auto;
  margin-top: 30px;
  background: #fff;
  width: 180px;
  border-radius: 10px;
}

.radio label {
  margin: 5px;
  color: #394e3c;
  padding: 6px;
  display: inline-block;
  position: relative;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

input[type="radio"]:checked + label {
  padding: 5px 15px;
  background: #66806A;
  border-radius: 8px;
  color: #fff;
}

input[type="radio"]:checked + label:before {
  display: none;
}

.checkbox label {
  margin: 5px;
  color: #394e3c;
  padding: 5px 10px 5px 45px;
  display: inline-block;
  position: relative;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkbox label:hover {
  background: #afc2a0;
}

.checkbox label:before {
  content: "";
  width: 17px;
  height: 17px;
  display: inline-block;
  background-color: none;
  border: 3px solid #394e3c;
  border-radius: 50%;
  position: absolute;
  left: 20px;
  top: 12px;
}

.checkbox label:before {
  border-radius: 3px;
}

input[type="checkbox"]:checked + label {
  padding: 5px 15px;
  background: #66806A;
  border-radius: 8px;
  color: #fff;
}

input[type="checkbox"]:checked + label:before {
  display: none;
}

.buscar {
  border-radius: 8px;
  color: #c3d6b4;
  padding: 20px;
  margin: 10px;
  background-color: #94a587;
}
.nombre-input {
	display: block;
	width: 70%;
	padding: 10px;
	margin: 12px auto;
	box-sizing: border-box;
	border: none;
  border-radius: 8px;
	border-bottom: 2px solid #c3d6b4;
	background: transparent;
	outline: none;
	transition: background 0.4s;
	color: white;
}

.nombre-input::placeholder {
	color: #c3d6b4;
	transition: color 0.4s;
	letter-spacing: 1.5pt;
}

.nombre-input:hover {
	background: #394e3c;
}

.nombre-input:hover::placeholder {
	color: white;
}

button[type="submit"] {
  border: none;
  font-size: 25px;
  margin-top: 15px;
  margin-bottom: 20px;
	width: 30%;
	padding: 10px;
  border-radius: 8px;
	background: #546657;
	color: #fff;
	letter-spacing: 1.5pt;
}

button[type="submit"]:hover {
	background: #78917b;
	color:  white;
  transition: background 0.3s;
}

</style>