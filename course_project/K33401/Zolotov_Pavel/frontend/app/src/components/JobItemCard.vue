<template>
 <router-link
 style="text-decoration: none; color: inherit;"
 :to="{ name: 'JobDetails', params: { id: jobItem.id }}">
 <v-card
   elevation="2"
   class="mx-auto my-6">
    <v-card-title class="text-h5">
        {{ jobItem.title }}
    </v-card-title>
    <v-card-text>
        <!--<v-row
            align="center"
            class="mx-0 mb-1 black--text text-subtitle-1"
        >
            {{Intl.NumberFormat('ru').format(100000)}} ₽
        </v-row>-->
        <v-row
            align="center"
            class="mb-2 mx-0 my-2"
        >
            <div class="me-2">
                {{ jobItem.company.name }}
            </div>
            <v-rating
                :value=jobItem.company.rating
                color="amber"
                dense
                half-increments
                readonly
                size="14"
                ></v-rating>
        </v-row>
    </v-card-text>
</v-card>
 </router-link>
</template>

<script>
export default {
  name: 'JobItemCard',

  props: {
    jobItem: Object
  }
}
</script>
