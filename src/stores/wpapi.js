import axios from 'axios'
import { defineStore } from 'pinia'

export const useAPIstore = defineStore('apistore', {
    state: () => ({
        mySheetId: '',
        myAPIkey: '',
        myRange: ''
    }),
    actions: {
        async getGslsheetId(){
            try {
             const sheetInfo = await axios.get('http://celticfest.local/wp-json/gsl/v1/sheet-info');
             this.mySheetId = sheetInfo.data.sheet_id
             this.myAPIkey = sheetInfo.data.api_key
             this.myRange = sheetInfo.data.range
             console.log(this.mySheetId)
             console.log(this.myAPIkey)
             console.log(this.myRange)
            } catch(error){
                alert(error)
            }
        }

    }
})