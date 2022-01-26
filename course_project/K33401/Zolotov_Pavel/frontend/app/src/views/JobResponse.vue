<template>
  <section>
    <v-row>
      <v-col cols="10" class="mx-auto my-6">
        <v-btn
            color="indigo"
            outlined
            @click="$router.go(-1)"
        >
            ← Назад
        </v-btn>
        <v-card
        elevation="2"
        cols="2"
        class="mx-auto my-6">
            <v-toolbar
            flat
            color="primary"
            dark
            >
            <v-toolbar-title>Отправить отклик</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
                <v-form ref="form">
                    <v-text-field
                        filled
                        label="Ссылка на резюме"
                        :rules="[rules.required, rules.url]"
                        v-model="cv"
                    ></v-text-field>

                    <v-textarea
                        filled
                        label="Сопроводительное письмо"
                        :rules="[rules.required]"
                        v-model="text"
                    ></v-textarea>
                </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="success"
                depressed
                @click="submit"
            >
                Отправить
            </v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
const apiUrl = 'http://127.0.0.1:8000'

export default {
  components: { },
  name: 'JobResponse',

  data: () => ({
    job: {},
    text: '',
    cv: '',
    valid: false,
    rules: {
      required: value => !!value || 'Required',
      url: value => new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i').test(value) || 'URL is not valid'
    }
  }),

  methods: {
    async getJob () {
      try {
        var url = `${apiUrl}/api/jobs/${this.$route.params.id}`
        const response = await this.axios.get(url)

        if (response.status !== 200) {
          throw new Error(response.error)
        }

        this.job = response.data
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    },

    async submit () {
      this.$refs.form.validate()
      try {
        var url = `${apiUrl}/api/jobs-response/new`
        const response = await this.axios.post(url, {
          cv: this.cv,
          text: this.text,
          created_at: new Date().toISOString(),
          job: this.$route.params.id
        })

        window.location.href = '/responses'
        if (response.status !== 200) {
          throw new Error(response.error)
        }
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    }
  },

  created () {
    this.getJob()
  },

  isURL (str) {
    let verify

    try {
      verify = new URL(str)
    } catch (_) {
      return false
    }

    return verify.protocol === 'http:' || verify.protocol === 'https:'
  }
}
</script>

<style>
</style>
