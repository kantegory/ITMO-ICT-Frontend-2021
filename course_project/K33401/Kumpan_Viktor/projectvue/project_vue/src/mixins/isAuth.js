import {len} from "vuelidate/lib/validators/common";

const isAuth = {
    computed: {
        isAuth(){
            return localStorage.getItem("token") != null
        },
        isSelfProfile(){
            return len(this.$route.params) === 0;
        },
    },
}
export default isAuth


