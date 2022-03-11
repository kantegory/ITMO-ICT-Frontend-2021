<template>
    <main>
        <div class="row">
            <div class="col-sm-5 my-3 mx-5">
                <RegistrationForm />
            </div>
            <div class="col-sm-5 my-3 mx-5">
                <img src="../assets/img3.jpg" class="card-img-top" alt="...">
            </div>
        </div>
    </main>
</template>

<script>
    import RegistrationForm from "@/components/RegistrationForm";
    export default {
        name: "Registration",
        components: {RegistrationForm}
    }
</script>

<style scoped>

</style>