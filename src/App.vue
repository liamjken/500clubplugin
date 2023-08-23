<template>
  <v-card class="ma-10">
    <Scroller :maininfo="sheetInfo" />
<TableFeature :maininfo="sheetInfo" />

  </v-card>
</template>

<script>
import axios from 'axios';
import { useAPIstore } from './stores/wpapi'
import { mapActions, mapState } from 'pinia';
import Scroller from './components/ScrollFeature.vue';
import TableFeature from './components/TableFeature.vue';


export default {
  components: {
  Scroller,
  TableFeature
},
  data() {
    return {
      sheetInfo: [],
    };
  },
  computed: {
...mapState(useAPIstore,['mySheetId', 'myAPIkey', 'myRange'])
  },
 async mounted(){
     await this.getGslsheetId();
     this.getSheetData();
  },
  methods: {
   async getSheetData() {
      try {
const data = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${this.mySheetId}/values/details!${this.myRange}?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=${this.myAPIkey}`)
this.sheetInfo = data.data.values.map((row) => {
    return {
      name: row[0],
      amount: row[1],
    };
  });

// this.sheetInfo = data.data.values
} catch(error) {
alert(error)
}
      
   },

   ...mapActions(useAPIstore, ['getGslsheetId']),

  },
};
</script>

<style scoped>

</style>