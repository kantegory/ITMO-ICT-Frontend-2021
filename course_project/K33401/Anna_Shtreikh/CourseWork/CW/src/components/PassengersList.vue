<template>
 <ul class="passengers-list">
   <li
     v-for="passenger in passengers"
     :key="passenger.id"
   >
     {{ passenger.username }} - {{ passenger.first_name }} {{ passenger.last_name }}
   </li>
 </ul>
</template>
 
<script>
export default {
 name: 'PassengersList',
 
 props: {
   passengers: Array
 }
}
</script>
 
<style>
.passengers-list li {
 text-align: left;
}
</style>