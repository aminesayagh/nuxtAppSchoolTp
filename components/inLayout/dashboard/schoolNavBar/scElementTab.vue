<template>
  <div>
    <scElementMenu :menuContenus="scElementMenuImport"></scElementMenu>
  </div>
</template>

<script>
import scElementMenu from "@/components/uiKitElement/secondaire/scElementMenu.vue";

export default {
  components: {
    scElementMenu,
  },
  data () {
    return {
      scElementMenuImport: this.$store.state.scElementMenu.all
    }
  }
};
</script>


