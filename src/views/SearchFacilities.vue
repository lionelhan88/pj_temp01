<template>
    <div>
        some content in search facilities
    
    </div>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    import { useRouter, useRoute } from "vue-router";

    const route = useRoute();
    const dddd = route.query;
</script>

<style lang="scss">

</style>