<template>
    <div class="row mx-auto justify-content-center">
        <div class="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12">
            <div class="card border-primary">
                <div class="card-body text-primary">
                    <h4 class="card-title text-center">Password reset</h4>
                    <form action="" class="d-flex flex-column">
                        <input class="form-control border-primary text-primary mt-2 mb-2" type="email" placeholder="Enter your E-mail">
                        <button type="button" class="btn btn-primary mt-2 mb-2" data-bs-toggle="modal" data-bs-target="#PassResetModal">Continue</button>
                        <a class="btn btn-outline-primary mb-1" href="/" role="button">Home</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PassReset1'
}
</script>

<style>
</style>
