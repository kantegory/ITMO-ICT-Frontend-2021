<template>
    <v-card-text> <!--
      <h2 class="text-h6 mb-2">
        Что Вас интересует?
      </h2> -->
      <div class="text-center">
      <v-chip-group
        v-model="selection"
        column
        centered
        multiple
        active-class="teal--text text--darken-3"
      >
        <v-chip
          filter
          outlined
        >
          Серьги
        </v-chip>
        <v-chip
          filter
          outlined
        >
          Кольца
        </v-chip>
        <v-chip
          filter
          outlined
        >
          Кулоны
        </v-chip>
      </v-chip-group>
      </div>
    </v-card-text>
</template>
<script>
export default {
  name: 'selection'
}
</script>
<style>
    .v-chip-group {
    width: 350px;
    justify-content: center;
}
</style>
