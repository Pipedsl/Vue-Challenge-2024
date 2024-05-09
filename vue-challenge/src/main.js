import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/router'

createApp(App)
    .use( router )
    .mount('#app')

function calcularCuotaMensual(valorPropiedad, pie, tasaInteres = 5, plazo) {
    const P = valorPropiedad - pie;
    const i = tasaInteres / 12 / 100;
    const n = plazo * 12;

  const cuotaMensual = (P * i) / (1 - Math.pow(1 + i, -n));
  const sueldoRequerido = cuotaMensual * 4;

    return { cuotaMensual, sueldoRequerido };
}

// Ejemplo de uso
const { cuotaMensual, sueldoRequerido } = calcularCuotaMensual(4000, 400, 5, 20);
console.log("Cuota Mensual:", cuotaMensual.toFixed(2)*37306, "UF");
console.log("Sueldo Requerido:", sueldoRequerido.toFixed(2)*37306, "UF");
