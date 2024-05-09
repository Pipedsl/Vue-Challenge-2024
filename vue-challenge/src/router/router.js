import { createRouter, createWebHashHistory } from "vue-router"
import FormComponent from "../components/FormComponent.vue";
import ResultComponent from "../components/ResultComponent.vue";
import CardComponent from "../components/CardComponent.vue";


const routes = [
        {
            path: "/",
            name: "home",
            component: FormComponent,  
        },
        {
            path: "/:monthlyPayment",
            name: "resultado",
            component: ResultComponent,
            props: ( route ) => {
                const monthlyPayment = Number(route.params.monthlyPayment);
                return isNaN( monthlyPayment ) ? { monthlyPayment: 1 } : { monthlyPayment }
            }
        },
        {
            path: "/creditos",
            name: "creditos",
            component: CardComponent,
            props: ( route ) => ({ 
                propertyValue: route.params.propertyValue,
                downPayment: route.params.downPayment,
                term: route.params.term 
                })
        }
    ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
