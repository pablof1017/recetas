<template>
  <div class="crear">
      <div class="container">
        <form @submit.prevent="agregarReceta" class="form">
            <h1>{{ msg }}</h1>
            <div class="nombre">
              <h4>Nombre:</h4>          
              <input type="text" v-model.trim="nombre" placeholder="Escribe un nombre..." class="nombre-input" required>
            </div>
            <div class="container-ing">
              <h4>Ingredientes:</h4>
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
            </div>
            <div class="container-tipo">
              <h4>Tipo:</h4>
              <div class="radio">
                <input type="radio" id="dulce" value="Dulce" v-model="picked">
                <label for="dulce">Dulce</label>
                <input type="radio" id="salado" value="Salado" v-model="picked">
                <label for="salado">Salado</label>
              </div>
            </div>
            <div class="container-img">
              <h4>Foto:</h4>
              <div class="img">
                <img src="../assets/pan.jpg" alt="Pan de banana" title="Pan de banana"> 
                <input type="radio" id="foto-1" value="1" v-model="foto">
                <label for="foto-1">Foto 1</label>
                <img src="../assets/guiso.jpg" alt="Guiso de lentejas" title="Guiso de lentejas">
                <input type="radio" id="foto-2" value="2" v-model="foto">
                <label for="foto-2">Foto 2</label>
              </div>
            </div>
            <button class="boton" type="submit">Crear</button>
        </form>
        <div class="tabla">
            <div class="recetas" v-for="(receta, index) in recetas" v-bind:key="index">
              <div :class="receta.foto == '1'? 'background-1': 'background-2'"></div>
              <h4><b>Nombre:</b> {{receta.nombre}}</h4>
              <h4><b>Tipo:</b> {{receta.picked}}</h4>   
              <h4><b>Ingredientes:</b> {{receta.checkedIng.join(", ")}}</h4>
              <span class="btn-delete" title="Eliminar" role="button" @click="eliminarReceta(receta.id)"><i class="fas fa-times"></i></span>    
            </div>
        </div>      
      </div>    
  </div>
</template>

<script>
export default {
  name: 'CrearReceta',
  props: {
    msg: String
  },
  data() {
    return {
      nombre: "",
      checkedIng: [],
      picked: "",
      foto: "",
      recetas: [],
      id: "",
    }   
  },
  methods: {
    agregarReceta() {
      if (this.nombre === "") {
        console.log("Nombre está vacio")
        return
      }
      let data = {
        nombre: this.nombre,
        checkedIng: this.checkedIng,
        picked: this.picked,
        foto: this.foto,
        id: Date.now()
      }
      this.recetas.push(data);
      this.nombre = "";
      this.checkedIng = [];
      this.picked = "";
      this.foto = "";

      localStorage.setItem("recetas-vue", JSON.stringify(this.recetas));
    },
    eliminarReceta(id) {  
        this.recetas = this.recetas.filter(receta => receta.id !== id);
        localStorage.setItem("recetas-vue", JSON.stringify(this.recetas));
        return;
    }    
  },
  created: function(){
    let datosLS = JSON.parse(localStorage.getItem("recetas-vue"));
    if (datosLS === null) {
      this.recetas = [];
    } else {
      this.recetas = datosLS;
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

.tabla {
  max-width: 800px;
  margin: auto;
  margin-top: 20px;
  background: #e2decd;
  border-radius: 20px;  
}

.recetas { 
  display: inline-block;
  width: 250px;
  border-radius: 8px;
  color: #394d3c;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  margin: 10px 40px; 
  background-color: #c5d3c8;
  text-align: left;
}

.btn-delete {
  width: 50px;
  display: flex;
  margin: auto;
  padding: 5px;
  background: #7f9e84;
  justify-content: center;
  border-radius: 5px;
}

.btn-delete:hover {
  background: #92b498;
  transition: 0.3s;
}

img {
  margin: 10px;
  width: 150px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px black;
}

h1 {
  padding: 10px;
  font-weight: 600;
  font-size: 30px;
}

.form {
  margin: auto;
  max-width: 800px;
  margin-top: 30px;
  padding: 10px;
  background-color: #e2decd;
  border-radius: 20px;
}

.nombre {
  border-radius: 8px;
  color: #c3d6b4;
  padding: 20px;
  margin: 10px;
  background-color: #66806A;
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

.container-ing {
  border-radius: 8px;
  color: #394d3c;
  padding: 20px;
  margin: 10px;
  background-color: #a1b492;
}

.container-tipo {
  border-radius: 8px;
  color: #394d3c;
  padding: 20px;
  margin: 10px;
  background-color: #c3d6b4;
}

.form input[type="checkbox"],
.form input[type="radio"] {
  display: none;
} 

.form .checkbox label,
.form .radio label,
.form .img label {
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

.form .checkbox label:hover,
.form .radio label:hover,
.form .img label:hover {
  background: #afc2a0;
}

.form .checkbox label:before,
.form .radio label:before,
.form .img label:before {
  content: "";
  width: 17px;
  height: 17px;
  display: inline-block;
  background-color: none;
  border: 3px solid #394e3c;
  border-radius: 50%;
  position: absolute;
  left: 20px;
  top: 8px;
}

.form .checkbox label:before {
  border-radius: 3px;
}

.form .img label:before {
  border-radius: 3px;
}

.form input[type="checkbox"]:checked + label,
.form input[type="radio"]:checked + label {
  padding: 5px 15px;
  background: #66806A;
  border-radius: 8px;
  color: #fff;
}

.form input[type="checkbox"]:checked + label:before,
.form input[type="radio"]:checked + label:before {
  display: none;
}

.container-img {
  border-radius: 8px;
  color: #394d3c;
  padding: 20px;
  margin: 10px;
  background-color: #c5d3c8;
}

h4 {
  font-size: 15px;
  margin-top: 10px;
}

button[type="submit"] {
  border: none;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 20px;
	width: 150px;
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

</style>
