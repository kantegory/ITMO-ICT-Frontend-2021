<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>

.btn{
  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.1em 0.1em 0;
  border:0.16em solid rgba(0,0,0,0);
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  background-color: rgba(5, 179, 185, 0.8);
  font-weight:300;
  color: #020900;
  text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
  text-align:center;
  transition: all 0.2s;
}
.btn:hover{
  border-color: rgb(2, 9, 0);
}
@media all and (max-width:30em){
  .btn{
    display:block;
    margin:0.2em auto;
}
}
</style>