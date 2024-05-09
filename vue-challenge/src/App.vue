
<script setup>
import { RouterView } from 'vue-router'
/**
 * Se utiliza App.vue para agregar el logo en todas las paginas 
 */
</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="container-logo py-80 bg-black w-screen h-screen content-center">
        <img
        src="./assets/quiebre.png"
        alt="Logo App Dopta"
        class="h-80 mx-auto"
        />
        <h1 class="text-4xl text-orange-500 text-center mb-4 font-bold">¡Bienvenida/o a tú simulador de crédito hipotecario!</h1>
        <p class="text-center  text-orange-500 font-bold">Simula tu credito para acceder a la casa que siempre soñaste</p>
    </div>
    <router-view></router-view>
  </div>

</template>


