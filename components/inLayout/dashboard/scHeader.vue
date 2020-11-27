<template>
    <section class="sc-h-16 sc-flex sc-items-center">
        <scTitreDashboard/>
        <scUserConnect/>
    </section>
</template>


<script>

import scTitreDashboard from '~/components/inLayout/dashboard/schoolHeader/scTitreDashboard.vue';
import scUserConnect from '~/components/inLayout/dashboard/schoolHeader/scUserConnect.vue';

export default {
    components: {
        scTitreDashboard,
        scUserConnect
    }
}
</script>


<style scoped>
    
</style>