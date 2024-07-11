<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title> Inventario </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-grid>
                <ion-row>
                    <ion-col size="12">
                        <ion-input label-placement="stacked" fill="outline" shape="round" color="success" label="ID"
                            :disabled="true" v-model="id"></ion-input>
                    </ion-col>

                    <ion-col size="12">
                        <ion-input label-placement="stacked" fill="outline" shape="round" color="success"
                            label="Nombre del teléfono" v-model="phone.name"></ion-input>
                    </ion-col>

                    <ion-col size="12">
                        <ion-input label-placement="stacked" fill="outline" shape="round" color="success"
                            label="Año" v-model="phone.data.year"></ion-input>
                    </ion-col>

                    <ion-col size="12">
                        <ion-input label-placement="stacked" fill="outline" shape="round" color="success"
                            label="Precio" v-model="phone.data.price"></ion-input>
                    </ion-col>

                    <ion-col size="12">
                        <ion-input label-placement="stacked" fill="outline" shape="round" color="success"
                            label="CPU Model" v-model="phone.data['CPU Model']"></ion-input>
                    </ion-col>

                    <ion-col size="12">
                        <ion-input label-placement="stacked" fill="outline" shape="round" color="success"
                            label="Capacidad de memoria" v-model="phone.data['Hard disk size']"></ion-input>
                    </ion-col>

                    <ion-col size="4">
                        <ion-button shape="round" color="primary" expand="full" @click="agregarTelefono">
                            Agregar
                        </ion-button>
                    </ion-col>

                    <ion-col size="4">
                        <ion-button shape="round" color="success" expand="full" @click="editarTelefono">
                            Editar
                        </ion-button>
                    </ion-col>

                    <ion-col size="4">
                        <ion-button shape="round" color="danger" expand="full" @click="eliminarTelefono">
                            Eliminar
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <!-- Toast para mensaje -->
            <ion-toast :icon="informationOutline" :message="toastMessage" :duration="2000" :is-open="errorState" @didDismiss="showToast(false)">

            </ion-toast>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonToast } from "@ionic/vue";

import {informationOutline} from 'ionicons/icons'

//Importar Axios
import axios from "axios";

export default {
    name: "NuevoTelefono",
    components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonInput, IonButton, IonToast
    },
    data() {
        return {
            //Esta variable nos permitira editar y eliminar un telefono
            id:0,
            //Esta variable guardara los datos del formulario
            phone:{
                "name": "Iphone 15 pro max",
                "data":{
                    "year":2023,
                    "price": 1000,
                    "CPU Model": "A15 pro",
                    "Hard disk size": "1 TB"
                }
            },
            //Variable para visibilidad del toast
            errorState: false,
            // Mensaje del toast
            toastMessage: '',
            // Icono del mensaje
            informationOutline
        }
    },
    methods: {
        agregarTelefono(){
            //Consumir el endpoint para insertar un telefono
            axios.post("https://api.restful-api.dev/objects", this.phone)
            .then(response => {
                console.log(response.data);
                this.id = response.data.id;
                this.showToast(true, 'Telefono agregado');

            })
            .catch(error => {
                console.log(error);
            })
        },
        editarTelefono(){

            if(this.id !== 0){

                axios.put(`https://api.restful-api.dev/objects/${this.id}`,this.phone)
                .then(response=>{
                    console.log(response.data);
                    this.showToast(true, 'Telefono editado');
                })
                .catch(error => {
                    console.log(error);
                })
            }
            else{
                this.showToast(true, 'El ID del telefono no existe');
            }
        },
        eliminarTelefono(){
            if(this.id !== 0){
                axios.delete(`https://api.restful-api.dev/objects/${this.id}`)
                    .then(response=>{
                        console.log(response.data);
                        this.showToast(true, 'Telefono eliminado');
                        this.id = 0;
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }else{
                    this.showToast(true, 'El ID del telefono no existe');
                }
        },
        showToast(state, message){
            this.errorState = state;
            this.toastMessage = message;

        }
    }
}
</script>

<style></style>