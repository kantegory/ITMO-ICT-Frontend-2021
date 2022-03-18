<template>
 <ul class="planes-list">
   <li
     v-for="plane in planes"
     :key="plane.id"
   >
     <span class="Plane">{{ plane.model }}</span>
     <br>
     <span class="Bold">Авиакомпания:</span> {{ plane.company }}
     <br>
     <span class="Bold">Дата производства:</span> {{ plane.prod_date }}
   </li>
 </ul>
</template>
 
<script>
export default {
 name: 'PlanesList',
 
 props: {
   planes: Array
 }
}
</script>
 
<style>
.planes-list li {
 text-align: left;
}

.Bold {
  font-style: italic;
  color: rgb(46, 82, 182);
}
.Plane {
   font-weight: bolder;
   font-size: 18px;
}
</style>