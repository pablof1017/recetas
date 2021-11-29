<template>
      <div class="container">
        <h1>{{ msg }}</h1>
        <div @submit.prevent="buscarReceta" class="buscar">
          <input type="text" v-model.trim="nombre" placeholder="🔎 Nombre..." class="nombre-input" required>           
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
          <div :class="receta.foto == '1'? 'background-1': 'background-2'"></div>
          <h4><b>Nombre:</b> {{receta.nombre}}</h4>
          <h4><b>Tipo:</b> {{receta.picked}}</h4>
          <h4><b>Ingredientes:</b> {{receta.checkedIng.join(", ")}}</h4>
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
      if (nombre) {
        let recetas = JSON.parse(localStorage.getItem("recetas-vue"));
      
        const result = recetas.filter(receta => {

          let hasAllElems = true;
        
          for (let i = 0; i < checkedIng.length; i++){  
            if (receta.checkedIng.indexOf(checkedIng[i]) === -1) {
              hasAllElems = false;
              break;
            } 
          }
        return receta.nombre.includes(nombre) && receta.picked.includes(picked) && hasAllElems
      });
      this.recetasFiltradas = result 
      return;
      } else {
        alert("Busca con el nombre de la receta.");
        return;
      }      
    } 
  }
}

</script>
<style scoped>

* {
  box-sizing: border-box;
}

.background-1 {
  width: 150px;
  height: 150px;
  background-image: url("../assets/pan.jpg");
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px black;
  background-size: cover;
}

.background-2{
  width: 150px;
  height: 150px;
  background-image: url("../assets/guiso.jpg");
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px black;
  background-size: cover;
}

h4 {
  margin-top: 10px;
  font-size: 15px;
}

h1 {
  padding: 10px;
  font-weight: 600;
  font-size: 30px;
}
.container {
  max-width: 800px;
  margin: auto;
  margin-top: 30px;
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
  width: 150px;
  border-radius: 10px;
}

.radio label {
  margin: 5px;
  color: #394e3c;
  padding: 6px;
  display: inline-block;
  position: relative;
  font-size: 15px;
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
  font-size: 15px;
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
  top: 7px;
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
  padding: 10px;
  margin: 10px;
  background-color: #7b9c73;
}
.nombre-input {
  font-size: 20px;
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
	transition: 0.4s;
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
  font-size: 20px;
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
  transition: 0.3s;
}

.recetas {
  display: inline-block;
  width: 250px;
  padding-top: 10px;
  padding-left: 10px;
  border-radius: 8px;
  color: #394d3c;
  margin: 10px 40px;
  background-color: #c5d3c8;
  text-align: left;
}

</style>