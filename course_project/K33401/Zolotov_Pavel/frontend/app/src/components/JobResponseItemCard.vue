<template>
 <v-card
   elevation="2"
   class="mx-auto my-6">
    <v-card-title class="text-h5">
        {{ `${jobResponseItem.job.title} в ${jobResponseItem.job.company.name}` }}
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
                {{ time }}
            </div>
        </v-row>
    </v-card-text>
    <v-card-actions>
      <v-chip
        class="ma-2"
        v-if="jobResponseItem.accepted == null"
        >
        На рассмотрении
      </v-chip>

      <v-chip
        class="ma-2"
        v-if="jobResponseItem.accepted == false"
        color="red"
        text-color="white"
        >
        Отказ
      </v-chip>

      <v-chip
        class="ma-2"
        v-if="jobResponseItem.accepted == false"
        color="green"
        text-color="white"
        >
        Приглашение на собеседование
      </v-chip>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
            <p>
                <a v-bind:href="`${jobResponseItem.cv}`" target="_blank"> {{ jobResponseItem.cv }} </a>
            </p>
            <p>
                {{ jobResponseItem.text }}
            </p>
        </v-card-text>
      </div>
    </v-expand-transition>
</v-card>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  data: () => ({
    show: false,
    time: ''
  }),
  name: 'JobResponseItemCard',
  props: {
    jobResponseItem: Object
  },

  created () {
    this.time = DateTime.fromISO(this.jobResponseItem.created_at).toFormat('dd/MM/yyyy HH:mm')
  }
}
</script>
