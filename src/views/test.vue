<template>
    <h2 :key=item v-for="item in tableData">
    
        <p :key=itt v-for="itt in item"> {{itt}}</p>
        
    </h2>
</template>

<script lang="ts" setup>
    const tableData = [{
        ab:"asf",
        bc:"fd",
        bd:"dfdd",
        ddab:"dd"},

        {
            ss: "daf",
            ff: "fidis",
            sdc: "fidnnc",
            kk: "df"
        }
    ]
</script>

<style>

</style>