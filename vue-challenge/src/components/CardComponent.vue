import { RouterLink } from 'vue-router';
<template>
<div class="desktop-view">
    <div class="flex w-screen h-screen">
        <div class="container-logo py-80 bg-black w-screen h-screen content-center">
            <img
            src="../assets/quiebre.png"
            alt="Logo"
            class="h-80 mx-auto"
            />
            <h1 class="text-4xl text-orange-500 text-center mb-4 font-bold">Créditos Hipotecarios</h1>
            <p class="text-center  text-orange-500 font-bold">Simula tu crédito para acceder a la casa que siempre soñaste</p>
            <div class="flex mt-4 justify-center">
                <router-link class="bg-black content-center text-white font-bold py-2 px-4 rounded-full hover:bg-orange-400 hover:text-black transition duration-300" to="/">Volver</router-link>
            </div>
        </div>
        <div class="w-screen h-screen bg-orange-500">
        <div v-if="banksData.length === 0" class="text-center">Cargando ...</div>
        <div v-else class="overflow-y-auto max-h-screen">
            <div v-for="bankData in banksData" :key="bankData.banco.nombre">
            <div class="bg-orange-400 text-white rounded-md shadow-md p-4 m-2">
                <h3 class="text-xl font-bold">BANCO - {{ bankData.banco && bankData.banco.nombre ? bankData.banco.nombre : 'Nombre no disponible' }}</h3>
                <p class="mt-2">Credito: {{bankData.banco.nombre}} {{ bankData.tasaDeInteres }}</p>
                <p class="mt-2">Plazo: {{ bankData.maximoPlazo }}</p>
                <!--Aquí se pueden agregar más caracteristicas del crédito si se necesitan-->
            </div>
            </div>
        </div>
        </div>
    </div>
</div>    
<div class="mobile-view" >
    <div class="">
                <img
                src="../assets/quiebre.png"
                alt="Logo"
                class="h-28 mx-auto rounded-full content-center fixed bottom-4 right-4 opacity-50"
                />
        <div class="flex mt-4 justify-center fixed top-0 right-4">
                    <router-link class="bg-black opacity-65 content-center text-white font-bold py-2 px-4 rounded-full hover:bg-orange-400 hover:text-black hover:opacity-80 transition duration-300" to="/">Volver</router-link>
        </div>    
        <div class="w-screen h-screen bg-orange-500">
            <div v-if="banksData.length === 0" class="text-center">Cargando...</div>
            <div v-else class="overflow-y-auto max-h-screen">
                <div v-for="bankData in banksData" :key="bankData.banco.nombre">
                <div class="bg-orange-400 text-white rounded-md shadow-md p-4 m-2">
                    <h3 class="text-xl font-bold">BANCO - {{ bankData.banco && bankData.banco.nombre ? bankData.banco.nombre : 'Nombre no disponible' }}</h3>
                    <p class="mt-2">Credito: {{bankData.banco.nombre}} {{ bankData.tasaDeInteres }}</p>
                    <p class="mt-2">Plazo: {{ bankData.maximoPlazo }}</p>
                    <!--Aquí se pueden agregar más caracteristicas del crédito si se necesitan-->
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>



<script>
export default {
data() {
    return {
        banksData: []
    }
},
/**
 * retorna un Json con la información de la simulación, según los valores enviados por la ruta, los valores vienen de FormComponent.
 */
async mounted() {
    try {
        const url = `https://api.hipotecarios.info/creditos/?valorPropiedad=${this.$route.query.propertyValue}&Pie=${this.$route.query.downPayment}&Tiempo=${this.$route.query.term}&Dfl2=true`;
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error('Error al obtener los datos');
        }
        const responseData = await response.json();
        console.log(url);

        const banksData = Object.values(responseData).flat();
        this.banksData = banksData;
    } catch (error) {
        console.error(error);
    }
    },




};
</script>

<style>

.desktop-view {
    display: none; 
}

.mobile-view {
    display: block; 
}

/* Media query para cambiar entre la vista de escritorio y móvil */
@media (min-width: 769px) {
.desktop-view {
    display: block; 
}
.mobile-view {
    display: none; 
}
}
</style>