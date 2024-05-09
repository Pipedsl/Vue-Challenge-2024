<template>
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
