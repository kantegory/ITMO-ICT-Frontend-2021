<template>
    <div class="row mx-auto justify-content-center">
        <div class="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12">
            <div class="card border-primary">
                <div class="card-body text-primary">
                    <h4 class="card-title text-center">New password</h4>
                    <form action="" class="d-flex flex-column">
                        <input class="form-control border-primary text-primary mt-2 mb-2" type="password" placeholder="Enter new password">
                        <input class="form-control border-primary text-primary  mb-2" type="password" placeholder="Repeat new password">
                        <button type="button" class="btn btn-primary mt-2 mb-1" data-bs-toggle="modal" data-bs-target="#PassRenewModal">Save password</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PassReset2'
}
</script>

<style>
</style>
