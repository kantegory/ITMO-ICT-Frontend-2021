
<template>
    <h1 style="margin:20px">Билеты из: <span v-if="from"> {{ from }}</span></h1>
</template>
<script>
export default {
 name: 'PlaceForm',
 
 props: {
   from: String
 }
 
}
</script>
 
<style>


</style>
