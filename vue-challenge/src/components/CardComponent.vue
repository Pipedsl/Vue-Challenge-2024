import { RouterLink } from 'vue-router';
<template>
    <div class="w-screen h-screen bg-orange-500">
    <div class="flex mt-4 justify-between">
        <h1 class="text-3xl  text-white font-bold content-center mb-4">Creditos Hipotecarios</h1>
        <router-link class="bg-black content-center text-white font-bold py-2 px-4 rounded-full hover:bg-orange-400 hover:text-black transition duration-300" to="/">Volver</router-link>
    </div>
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
    }
};
</script>
