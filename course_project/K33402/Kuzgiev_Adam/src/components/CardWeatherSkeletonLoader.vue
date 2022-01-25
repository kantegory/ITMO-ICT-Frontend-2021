<template>
  <v-card class="mx-auto ma-2 pt-6 fill-height">
    <div class="px-4">
      <v-skeleton-loader
          type="heading"
          class="mb-2"
          max-width="500"
      >
      </v-skeleton-loader>
      <v-skeleton-loader
          type="text"
          max-width="150"
          class="mb-6"
      >
      </v-skeleton-loader>
      <div class="mb-6 d-flex align-center">
        <v-skeleton-loader
            type="heading"
            width="30%"
        >
        </v-skeleton-loader>
        <v-skeleton-loader
            type="avatar"
            width="20%"
        >
        </v-skeleton-loader>
        <v-skeleton-loader
            type="list-item-two-line"
            width="50%"
        >
        </v-skeleton-loader>
      </div>
      <v-chip-group
          column
          class="mr-2"
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
    <v-skeleton-loader
        type="heading"
        width="300"
        class="px-4 pt-2"
    ></v-skeleton-loader>
  </v-card>
</template>

<script>
  export default {
    name: 'CardWeatherSkeletonLoader',
  }
</script>