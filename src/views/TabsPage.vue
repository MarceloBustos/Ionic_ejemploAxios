<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="telefonos" href="/tabs/telefonos">
          <ion-icon aria-hidden="true" :icon="menuOutline" />
          <ion-label>Listar</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="nuevo" href="/tabs/nuevo">
          <ion-icon aria-hidden="true" :icon="serverSharp" />
          <ion-label>Nuevo</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { menuOutline, serverSharp } from 'ionicons/icons';
</script>
