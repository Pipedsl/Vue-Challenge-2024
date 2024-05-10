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
        <h1 class="text-4xl text-orange-500 text-center mb-4 font-bold">¡Bienvenida/o a tú simulador de crédito hipotecario!</h1>
        <p class="text-center  text-orange-500 font-bold">Simula tu credito para acceder a la casa que siempre soñaste</p>
    </div>
    <div class="container-inicio-sesion bg-orange-500 w-screen h-screen content-center">
        <div class="mt-8 mx-auto my-auto bg-orange-400 w-1/2 h-1/2 content-center">
            <h2 class="text-4xl font-bold text-white text-center">¡Resultado simulación!</h2>
            <div class="my-8 ">
                <h3 class="text-white font-semibold text-center">Dividendo:  <span class="font-extrabold">${{formatNumber(((monthlyPayment)*37306).toFixed(0))}} pesos</span></h3>
            </div>
            <div class="my-8" >
                <h3 class="text-white font-semibold text-center">Renta mínima:  <span class="font-extrabold">${{formatNumber((((monthlyPayment)*37306)*4).toFixed(0))}} pesos</span></h3>
            </div>
            <div class="my-8" >
                <h6 class="text-white text-center">Esta información es meramente referencial el cálculo real siempre esta sujeto a evaluación por las entidades financieras.</h6>
            </div>
            <div class="flex justify-center">
                <RouterLink class="flex justify-center w-1/2 bg-black hover:bg-orange-400 hover:border-black hover:border-2 hover:text-white hover:font-extrabold text-white font-bold py-2 px-4 rounded-full" to="/">Volver</RouterLink>
            </div>
        </div>
    </div>
    </div>
</div>    
<div class="mobile-view">

        <img
        src="../assets/quiebre.png"
        alt="Logo"
        class="h-28 mx-auto rounded-full content-center fixed top-4 right-0 opacity-50"
        />

    <div class="container-inicio-sesion bg-orange-500 w-screen h-screen content-center">
        <div class="mt-8 mx-auto rounded-lg my-auto bg-orange-400 w-1/2 h-1/2 content-center">
            <h2 class="text-4xl font-bold text-white text-center">¡Resultado simulación!</h2>
            <div class="my-8 ">
                <h3 class="text-white font-semibold text-center">Dividendo:  <span class="font-extrabold">${{formatNumber(((monthlyPayment)*37306).toFixed(0))}} pesos</span></h3>
            </div>
            <div class="my-8" >
                <h3 class="text-white font-semibold text-center">Renta mínima:  <span class="font-extrabold">${{formatNumber((((monthlyPayment)*37306)*4).toFixed(0))}} pesos</span></h3>
            </div>
            <div class="my-8" >
                <h6 class="text-white text-center">Esta información es meramente referencial el cálculo real siempre esta sujeto a evaluación por las entidades financieras.</h6>
            </div>
            <div class="flex justify-center">
                <RouterLink class="flex justify-center w-1/2 bg-black hover:bg-orange-400 hover:border-black hover:border-2 hover:text-white hover:font-extrabold text-white font-bold py-2 px-4 rounded-full" to="/">Volver</RouterLink>
            </div>
        </div>
    </div>

    <img
        src="../assets/quiebre.png"
        alt="Logo"
        class="h-28 mx-auto rounded-full content-center fixed bottom-4 left-0 opacity-50"
        />
</div>
</template>

<script>

export default {
    props: {
        //Valor que viene de FormComponent y en el mismo template lo multiplica por 4 para calcular la Renta mínima (Linea 11).
        monthlyPayment:{
            type: Number,
            required: true
        },
    },
        /**
         * Este metodo es para poner los puntos en las cifras númericas, cada 3 numeros agrega un punto .
         */
        methods: {
        formatNumber(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    }

}
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