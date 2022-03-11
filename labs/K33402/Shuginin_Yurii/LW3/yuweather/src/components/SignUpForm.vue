<template>
    <div class="row mx-auto justify-content-center">
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
            <div class="card border-primary">
                <div class="card-body text-primary">
                    <h4 class="card-title text-center">Registration</h4>
                    <form action="" class="d-flex flex-column">
                        <input class="form-control border-primary text-primary mt-2 mb-3" type="text" placeholder="Username *" required>
                        <input class="form-control border-primary text-primary mb-3" type="password" placeholder="Password *" required>
                        <input class="form-control border-primary text-primary mb-3" type="email" placeholder="E-mail *" required>
                        <input class="form-control border-primary text-primary mb-3" type="text" placeholder="Name">
                        <input class="form-control border-primary text-primary mb-3" type="text" placeholder="Surname">
                        <button type="submit" class="btn btn-primary mb-2">Create account</button>
                        <a class="btn btn-outline-primary mb-1" href="login" role="button">Log in</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SignUpForm'
}
</script>

<style>
</style>
