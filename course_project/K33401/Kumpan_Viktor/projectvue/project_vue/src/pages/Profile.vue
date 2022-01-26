<template>
  <profile-item :prof="prof"
                :selfprofile="this.isSelfProfile"
                @dialog="showDialog"
  ></profile-item>

  <div v-if="this.isSelfProfile">
  <my-dialog v-model:show="dialogVisible">
    <profile-form @create="updateProfile"
    />
  </my-dialog>
  </div>
</template>

<script>
import ProfileItem from "@/components/profile/ProfileItem";
import ProfileForm from "@/components/profile/ProfileForm";
import MyButton from "@/components/UI/MyButton";
import MyDialog from "@/components/UI/MyDialog";
import isSelfProfile from "@/mixins/isAuth";
import newsRequest from "@/mixins/newsRequest";

export default {
  name: "Profile",
  components: {ProfileForm, ProfileItem, MyButton, MyDialog},
  mixins: [isSelfProfile, newsRequest],
  data() {
    return {
      dialogVisible: false,
      prof: {
        username: "",
        email: "",
        password: "",
        first_name: "",
        second_name: "",
        town: "",
        age: "",
        education: ""
      },
    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true
    },
    async getPfoile() {
      let data;
      if (this.isSelfProfile) {
        console.log("GET MY PROFILE")
        data = await this.newsRequest('api/profile', {}, "GET")
      } else {
        console.log("GET OUR PROFILE")
        data = await this.newsRequest(`api/profile/${this.$route.params.id}`, {}, "GET")
      }
      this.prof = data[0]
    },
    updateProfile(event) {
      this.prof = newsRequest.methods.reload_data(event, this.prof)
      const response = this.newsRequest('api/profilee', event, "PUT")
      this.dialogVisible = false
    }
  },
  mounted() {
    this.getPfoile();
  },
}
</script>

<style scoped>

</style>