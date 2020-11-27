<template>
    <div>
        <scText/>
        <scButton/>
        <scTable/>
        <scForms/>
    </div>
</template>

<script>
    import scForms from "./principal/scForms.vue";
    import scButton from "./principal/scButton.vue";
    import scTable from "./principal/scTable.vue";
    import scText from "./principal/scText.vue";

    export default {
        components:{
            scForms,
            scButton,
            scTable,
            scText

        }
    }
</script>