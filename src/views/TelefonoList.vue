<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Telefonos
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-list lines="full" v-for="(phone, i) in phones" :key="i">
                <ion-item>
                    <ion-icon :icon="checkmarkCircle" color="success" slot="start"></ion-icon>
                    <ion-label>{{phone.name}}
                        <span v-if="phone.data && phone.data.hasOwnProperty('color')">
                           - ({{phone.data.color}})
                        </span>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonIcon, IonLabel } from "@ionic/vue";
import { checkmarkCircle } from "ionicons/icons";
import axios from 'axios';
export default {
    name: "NuevoTelefono",
    components: {
        IonPage, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonIcon, IonLabel
    },
    data(){
        return {
            checkmarkCircle,
            phones: []
        }
    },
    methods: {
        getTelefonos(){
            axios.get('https://api.restful-api.dev/objects')
            .then(response => {
                //Vamos a agregar los datos a  mi arreglo phones
                this.phones = response.data;

                //Imprimir en consola
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {

        this.getTelefonos();
    },
}
</script>

<style></style>