<template>
      <v-card-title>
     Find your Name below!
      <v-spacer></v-spacer>
      <v-text-field
      class="pb-5 pt-5 gsl-search"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="maininfo"
    :search="search"
    item-value="name"
    class="elevation-1 pa-5"
  ></v-data-table>
  </template>
  
  <script>
  import { VDataTable } from 'vuetify/labs/VDataTable'
  
  
  export default {
    components: {
    VDataTable,
  },
  props: {
    maininfo: {
        type: Array,
        required: true
    }
  },
    data() {
      return {
        search: '',
        itemsPerPage: 5,
        headers: [
          {
            title: 'Name',
            align: 'start',
            sortable: true,
            key: 'name',
          },
          { 
            title: 'Amount', 
            align: 'end', 
            key: 'amount',
         },
        ],
      };
    },
  };
  </script>
