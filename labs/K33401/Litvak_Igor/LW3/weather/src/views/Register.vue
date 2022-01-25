<template>
    <div class="row g-2 justify-content-center">
        <div class="col-12 col-md-6">
            <div class="card bg-light">
                <div class="card-header">
                    <h5>Register</h5>
                </div>
                <div class="card-body">
                    <form class="row g-2 justify-content-center">
                        <div class="col-12 col-md-8">
                            <label for="name" class="form-label">Name</label>
                            <input class="form-control" type="text" id="name">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="email" class="form-label">Email</label>
                            <input class="form-control" type="text" id="email">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="password" class="form-label">Password</label>
                            <input class="form-control" type="password" id="password">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="password2" class="form-label">Repeat password</label>
                            <input class="form-control" type="password" id="password2">
                        </div>
                        <div class="col-12 col-md-8">
                            <button class="btn btn-primary" type="submit">Register</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <router-link to="/login" class="link-secondary">Already have an account?</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register"
}
</script>

<style scoped>

</style>
