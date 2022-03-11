export default {
  name: "getMyProfile",
  methods: {
    async getMyProfile() {
      try {
        const config = {
          headers: {
            Authorization: this.$store.getters.authHeader
          }
        }
        const resp = await this.axios.get(
          "http://localhost:8000/api/users/me",
          config
        )

        if (resp.status !== 200) {
          throw new Error(resp.error)
        }

        this.profile = resp.data
      } catch (e) {
        console.error("Error from API: ", e)
      }
    }
  }
}
