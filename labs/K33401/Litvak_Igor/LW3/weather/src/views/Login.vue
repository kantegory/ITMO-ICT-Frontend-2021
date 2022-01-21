<template>
    <div class="row g-2 justify-content-center">
        <div class="col-12 col-md-6">
            <div class="card bg-light">
                <div class="card-header">
                    <h5>Login</h5>
                </div>
                <div class="card-body">
                    <form class="row g-2 justify-content-center">
                        <div class="col-12 col-md-8">
                            <label for="email" class="form-label">Email</label>
                            <input class="form-control" type="email" id="email">
                        </div>
                        <div class="col-12 col-md-8">
                            <label for="password" class="form-label">Password</label>
                            <input class="form-control" type="password" id="password">
                        </div>
                        <div class="col-12 col-md-8">
                            <button class="btn btn-primary" type="submit">Login</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <router-link to="/register" class="link-secondary">Register</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>

</style>
