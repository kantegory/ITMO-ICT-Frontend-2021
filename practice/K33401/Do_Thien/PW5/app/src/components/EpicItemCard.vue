<template>
  <v-card
    elevation="2"
    class="px-2 py-5"
  >
    <v-row>
      <v-col cols="4">
        <v-img :src="epicItem.image" />
      </v-col>

      <v-col cols="6">
        <v-card-text>
          {{ epicItem.caption }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'EpicItemCard',

  props: {
    epicItem: Object
  }
}
</script>

<style>
</style>
