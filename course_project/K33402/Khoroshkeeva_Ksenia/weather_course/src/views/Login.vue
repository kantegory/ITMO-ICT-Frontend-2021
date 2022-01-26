<template>
    <main>
        <div class="row">
            <div class="col-sm-5 my-3 mx-5">
                <LoginForm />
            </div>
            <div class="col-sm-5 my-3 mx-5">
                <img src="../assets/img2.jpg" class="card-img-top" alt="...">
            </div>
        </div>
    </main>
</template>

<script>
    import LoginForm from "@/components/LoginForm";
    export default {
        name: "Login",
        components: {LoginForm}
    }
</script>

<style scoped>

</style>