<template>
    <section>
        <schoolNavBar/>
        <div>
            <schoolHeader/>
            <Nuxt/>
        </div>
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