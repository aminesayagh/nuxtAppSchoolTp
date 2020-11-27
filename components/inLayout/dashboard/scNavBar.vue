<template>
    <section class="">
        <div  class="sc-w-1/16 sc-px-4 sc-h-full sc-py-8 sc-fixed">
        <schoolLogo class="sc-p-1 sc-w-12 sc-text-center"/>
        <schoolElementTab class="sc-my-20"/>
        <div></div></div>
    </section>
</template>


<script>

import schoolElementTab from '~/components/inLayout/dashboard/schoolNavBar/scElementTab.vue';
import schoolLogo from '~/components/inLayout/dashboard/schoolNavBar/scLogo.vue';


export default {
    components: {
        schoolElementTab,
        schoolLogo
    }
    
}
</script>

<style scoped>

</style>
