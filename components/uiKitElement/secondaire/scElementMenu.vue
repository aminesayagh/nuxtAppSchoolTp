<template>
    <div>
        <ul class="sc-flex-1">
            <li v-for="menuContenu in menuContenus" :key="menuContenu.id" class="sc-my-6">
                <a :href="menuContenu.lien" class="sc-flex sc-w-full sc-h-full sc-flex-col sc-items-center sc-justify-center sc-p-2 ">
                    <img :src="menuContenu.img" :alt="menuContenu.titre" class="sc-w-12/16 sc-py-3 sc-opacity-70">
                    <h4 class="sc-text-sm">{{menuContenu.titre}}</h4>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        menuContenus: Array,
    }
}
</script>