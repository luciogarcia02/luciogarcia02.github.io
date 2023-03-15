<template>

  <div id="app" >
  <div class="container">
    
    <nav class="navbar navbar-expand-lg ">
    <div id="logo-container">
    <a href="/"><img class="responsive-img" src="../archivos/logo.jpg"></a>
    </div>
    <div class="container-fluid">
    <a class="navbar-brand" href="/"> María Laura Cali </a>
    
    <button
          id="menu-hamburguesa"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > 
         <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        
        
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Biografía
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link class="nav-link" to="/bio">Formación</router-link></li>
                <li><router-link class="nav-link" to="/bio/actriz">Actriz</router-link></li>
                <li><router-link class="nav-link" to="/bio/realizadora">Realizadora Audiovisual</router-link></li>

            </ul>
        
        <li class="nav-item">

        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/photos">Galería de fotos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/videos">Videos</router-link>
        </li>
      </ul>
    </div>
  </div>

</nav>

</div>

    <router-view id="router"></router-view>

  </div>
</template>

<style>
        
  #app{
    background-color: #fff7e6;
    color:#c0c0c0;
  }

  .responsive-img {
    max-width: 100%;
    height: auto
  }

  #logo-container{   
    width: 160px;
  }  

</style>

<script>
import { useNt2Store } from "./store";
export default {
  setup() {
    //vamos a dejar disponible el state
    const store = useNt2Store();
    return { store };
  },
  
};
</script>

