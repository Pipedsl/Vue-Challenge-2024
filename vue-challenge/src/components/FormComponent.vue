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
        <div class="mt-8 max-w-md mx-auto my-auto">
        <form class="space-y-6" @submit.prevent="calculateMortgage">
        <h2 class="text-4xl font-bold text-white">¡Bienvenido!</h2>
        <div>
            <label
            for="propertyValue"
            class="block text-lg font-bold text-white text-left"
            >Valor Propiedad (UF)</label
            >
            <input
            id="propertyValue"
            name="propertyValue"
            type="number"
            v-model.number="propertyValue"
            placeholder="Indique el valor de la propiedad en UF"
            required
            class="block w-full rounded-md border-pricipal-grey-400 border-2 shadow-sm py-2 px-3 focus:ring-pricipal-grey-400 focus:border-principal-grey-700 mt-1"
            />
        </div>
        <div>
            <label
            for="downPayment"
            class="block text-lg font-bold text-white text-left"
            >Pie (UF)</label
            >
            <input
            id="downPayment"
            name="downPayment"
            type="number"
            v-model.number="downPayment"
            placeholder="Indique el pie en UF"
            required
            class="block w-full rounded-md border-pricipal-grey-400 border-2 shadow-sm py-2 px-3 focus:ring-pricipal-grey-400 focus:border-principal-grey-700 mt-1"
            />
        </div>
        <div>
            <label
            for="interestRate"
            class="block text-lg font-bold text-white text-left"
            >Tasa de Interés %</label
            >
            <input
            id="interestRate"
            name="interestRate"
            type="number"
            value="5"
            v-model.number="interestRate"
            required
            class="block w-full rounded-md border-pricipal-grey-400 border-2 shadow-sm py-2 px-3 focus:ring-pricipal-grey-400 focus:border-principal-grey-700 mt-1"
            />
        </div>
        <div>
            <label
            for="term"
            class="block text-lg font-bold text-white text-left"
            >Plazo de pago (Años)</label
            >
            <select
            id="term"
            required
            v-model="term"
            class="block w-full rounded-md border-pricipal-grey-400 border-2 shadow-sm py-2 px-3 focus:ring-pricipal-grey-400 focus:border-principal-grey-700 mt-1"
            >
            <option value="" default>Seleccionar periodo</option>
            <option value="5">5 años</option>
            <option value="10">10 años</option>
            <option value="15">15 años</option>
            <option value="20">20 años</option>
            <option value="25">25 años</option>
            <option value="30">30 años</option>
            </select>
        </div>
        
        <div>
            <button
            type="submit"
            class="w-full py-3 bg-black text-white rounded-full shadow-md hover:bg-orange-400 hover:border-black  hover:text-white hover:font-extrabold transition duration-300"
            >
            Calcular Dividendo
            </button>
        </div>
        <div>
            <button
            type="button"
            @click="simulateCredit"
            class="w-full py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-orange-400 hover:border-black  hover:text-white hover:font-extrabold transition duration-300"
            >
            Simular Crédito
            </button>
        </div>
        </form>
    </div>
    </div>
    </div>
</div>
<div class="mobile-view">
            <img
                src="../assets/quiebre.png"
                alt="Logo"
                class="h-28 mx-auto w-screen content-center rounded-sm fixed top-0 opacity-70"
                />
    <div class="container-inicio-sesion bg-orange-500 w-screen h-screen content-center">
        <div class="mt-8 max-w-md mx-auto my-auto">
        <form class="space-y-4" @submit.prevent="calculateMortgage">
        <h2 class="text-4xl font-bold text-center pt-20 text-white">¡Bienvenida/o a tú simulador de crédito hipotecario!</h2>
        <p class="text-center pt-0 mt-0 text-white">Simula tu crédito para acceder a la casa que siempre soñaste</p>
        <div>
            <input
            id="propertyValue"
            name="propertyValue"
            type="number"
            v-model.number="propertyValue"
            placeholder="Indique el valor de la propiedad en UF"
            required
            class="block w-full rounded-md  border-pricipal-grey-400 border-2 shadow-sm py-2 px-3 mt-1"
            />
            <label
            for="propertyValue"
            class="block text-lg font-bold text-white text-center"
            >Valor Propiedad (UF)</label
            >
        </div>
        <div>
            <input
            id="downPayment"
            name="downPayment"
            type="number"
            v-model.number="downPayment"
            placeholder="Indique el pie en UF"
            required
            class="block w-full rounded-md border-pricipal-grey-400 border-2 shadow-sm py-2 px-3 focus:ring-pricipal-grey-400 focus:border-principal-grey-700 mt-1"
            />
            <label
            for="downPayment"
            class="block text-lg font-bold text-white text-center"
            >Pie (UF)</label
            >
        </div>
        <div>
            <input
            id="interestRate"
            name="interestRate"
            type="number"
            value="5"
            v-model.number="interestRate"
            required
            class="block w-full rounded-md border-pricipal-grey-400 border-2 shadow-sm py-2 px-3 focus:ring-pricipal-grey-400 focus:border-principal-grey-700 mt-1"
            />
            <label
            for="interestRate"
            class="block text-lg font-bold text-white text-center"
            >Tasa de Interés %</label
            >
        </div>
        <div>
            <select
            id="term"
            required
            v-model="term"
            class="block w-full rounded-md border-pricipal-grey-400 border-2 shadow-sm py-2 px-3 focus:ring-pricipal-grey-400 focus:border-principal-grey-700 mt-1"
            >
            <option value="" default>Seleccionar periodo</option>
            <option value="5">5 años</option>
            <option value="10">10 años</option>
            <option value="15">15 años</option>
            <option value="20">20 años</option>
            <option value="25">25 años</option>
            <option value="30">30 años</option>
            </select>
            <label
            for="term"
            class="block text-lg font-bold text-white text-center"
            >Plazo de pago (Años)</label
            >
        </div>
        
        <div>
            <button
            type="submit"
            class="w-full py-3 bg-black text-white rounded-full shadow-md hover:bg-orange-400 hover:border-black  hover:text-white hover:font-extrabold transition duration-300"
            >
            Calcular Dividendo
            </button>
        </div>
        <div>
            <button
            type="button"
            @click="simulateCredit"
            class="w-full py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-orange-400 hover:border-black  hover:text-white hover:font-extrabold transition duration-300"
            >
            Simular Crédito
            </button>
        </div>
        </form>
    </div>
    </div>

</div>
</template>

<script>

import {useRouter} from 'vue-router';
import { ref } from 'vue';
import CardComponent from './CardComponent.vue';
export default {
    components: { CardComponent },
    setup() {
    const router = useRouter();

    const propertyValue = ref(0);
    const downPayment = ref(0);
    const interestRate = ref(5);
    const term = ref(0);
    const monthlyPayment = ref(0);

    /**
     * Este metodo calcula el dividendo y envia el valor como monthlyPayment a ResultComponent, como parametro en la URL.
     */
    const calculateMortgage = () => {
    const initialAmount = propertyValue.value - downPayment.value;
    const interest = interestRate.value / 12 / 100;
    const payments = term.value * 12;

    if (payments > 0) {
        monthlyPayment.value = (initialAmount * interest) / (1 - Math.pow(1 + interest, - payments));
        router.push({ name: 'resultado', params: { monthlyPayment: monthlyPayment.value.toFixed(2)}});
    }
    }

    /**
     *  Este metodo envia los valores necesarios para la API a CardComponent, a traves de parametros en la URL.
     */
    const simulateCredit = () => {
        router.push({ 
        name: 'creditos', 
        query: {
            propertyValue: propertyValue.value,
            downPayment: downPayment.value,
            term: term.value
        }
        });
    };
    return { propertyValue, downPayment, interestRate, term, monthlyPayment, simulateCredit, calculateMortgage };
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