<template>
    <section>
        <c-container>
            <v-row>
                <v-col cols="1">
                    <schoolNavBar/>
                </v-col>
                <v-col cols="11">
                    <v-row>
                        <schoolHeader/>
                    </v-row>
                    <v-row>
                        <Nuxt/>
                    </v-row>
                    
                    
                </v-col>
            </v-row>
        </c-container>
    </section>
</template>

<script>
    import schoolHeader from '@/components/inLayout/dashboard/scHeader.vue';
    import schoolNavBar from '@/components/inLayout/dashboard/scNavBar.vue';

    
    export default {
        components: {
            schoolHeader,
            schoolNavBar
        }
        
    }
</script>

<style lang="stylus" scoped>
    
</style>