<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Crear receta</router-link> |
      <router-link to="/buscar">Buscar receta</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4f6352;
}

#nav {
  padding: 20px;
  background-color: #66806A;
}

#nav a:hover {
  background: #7d9c82;
  border-radius: 8px;
  transition: background 0.4s;
}

#nav a {
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #2a3a2b;
}

#nav a.router-link-exact-active {
  color: #c6e6cb;
}
</style>
