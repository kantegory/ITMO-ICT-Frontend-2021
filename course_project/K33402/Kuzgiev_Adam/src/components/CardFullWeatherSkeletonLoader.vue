<template>
  <v-sheet
      :color="`grey lighten-4`"
      class="pt-8 pb-6 mt-2"
  >
    <div class="px-7">
      <v-skeleton-loader
          type="heading"
          class="mb-2"
          max-width="500"
      >
      </v-skeleton-loader>
      <v-skeleton-loader
          type="text"
          max-width="150"
          class="mb-10"
      >
      </v-skeleton-loader>
      <v-skeleton-loader
          type="heading"
          class="mb-8"
          max-width="700"
      >
      </v-skeleton-loader>
      <v-chip-group
          column
          class="mr-2 mb-3"
      >
        <v-skeleton-loader
            v-for="x in 5"
            :key="x"
            type="chip"
            class="mr-2 mb-3"
        ></v-skeleton-loader>
      </v-chip-group>
    </div>
    <v-divider></v-divider>
    <v-sheet
        class="mx-auto my-4 px-6"
        max-width="100%"
        style="background: none"
    >
      <v-slide-group show-arrows>
        <v-skeleton-loader
            v-for="x in 48"
            :key="x"
            type="image"
            class="mr-4 ml-1"
            height="90"
            width="60"
        ></v-skeleton-loader>
      </v-slide-group>
    </v-sheet>
    <v-divider></v-divider>
    <v-sheet
        class="mx-auto mt-4 px-6"
        max-width="100%"
        style="background: none"
    >
      <v-slide-group show-arrows>
        <v-skeleton-loader
            v-for="x in 8"
            :key="x"
            type="image"
            class="mr-4 ml-1"
            height="120"
            width="60"
        ></v-skeleton-loader>
      </v-slide-group>
    </v-sheet>
  </v-sheet>
</template>

<script>
  export default {
    name: 'CardFullWeatherSkeletonLoader',
  }
</script>