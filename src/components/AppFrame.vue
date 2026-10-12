<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <template v-slot:prepend>
          <v-list-item
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            subtitle="Logged in"
            title="Jane Smith"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-account-cog" title="Settings"  to="/settings"></v-list-item>
          <v-list-item prepend-icon="mdi-poll" title="Analytics" to="/analytics"></v-list-item>
          <v-list-item prepend-icon="mdi-bookshelf" title="Books" to="/books"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const drawer = ref(true)
</script>

