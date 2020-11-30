<template>
    <section class="sc-px-6 sc-h-full">    
        <v-container>
            <v-row>
                <v-img>
                    <schoolLogo class="sc-p-2"/>
                </v-img>
            </v-row>
            <v-row>
                <schoolElementTab class=""/>
            </v-row>
        </v-container>
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
