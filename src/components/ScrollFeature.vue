<template>
    <div class="credits-container ma-10">
      <div class="credits-scroll align-center" ref="creditsScroll" @animationiteration="resetAnimation">
        <div class="credit-item" v-for="(credit, index) in maininfo" :key="index">
            <h2 class="scroller"> {{ credit.name }} - {{ credit.amount }}</h2>
        </div>
      </div>
    </div>
</template>

<script>
//import axios from 'axios';
import { VDataTable } from 'vuetify/labs/VDataTable'
//import { useAPIstore } from './stores/wpapi'
//import { mapActions, mapState } from 'pinia';


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
  methods: {
    resetAnimation() {
      const scrollContainer = this.$refs.creditsScroll;
      const containerHeight = scrollContainer.offsetHeight;
      const contentHeight = scrollContainer.scrollHeight;

      // Check if the content is taller than the container, to avoid scrolling if not needed
      if (contentHeight > containerHeight) {
        scrollContainer.style.animation = 'none'; // Disable animation
        scrollContainer.scrollTop = 0; // Reset to the top
        scrollContainer.style.animation = null; // Re-enable animation
      }
    },

  },
};
</script>

<style scoped>
.credits-container {
  overflow: hidden;
  height: 50px; /* Adjust the height based on your requirements */
}

.credits-scroll {
  animation: scrollCredits 15s linear infinite;
  display: flex;
  flex-direction: column;
}

@keyframes scrollCredits {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-100% - 10px)); /* Adjust the value based on the number of credits and spacing */
  }
}

.credit-item {
  margin-bottom: 10px; /* Add spacing between each credit item */
  /* Add your desired CSS styles for each credit item */
}

h1, h3 {
  color: white;
}
</style>