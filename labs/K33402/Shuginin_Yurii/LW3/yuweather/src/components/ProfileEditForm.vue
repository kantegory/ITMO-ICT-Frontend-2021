<template>
    <div class="row mx-auto justify-content-center mt-3">
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
            <form action="" class="d-flex flex-column">
                <label for="username" class="text-primary"><h6>Username</h6></label>
                <input class="form-control border-primary text-primary mb-3" type="text" id="username" value="my_username" required>
                <label for="password" class="text-primary"><h6>Password</h6></label>
                <input class="form-control border-primary text-primary mb-3" type="password" id="password" value="password" required>
                <label for="email" class="text-primary"><h6>E-mail</h6></label>
                <input class="form-control border-primary text-primary mb-3" type="email" id="email" value="yurii.shuginin@yandex.ru" required>
                <label for="name" class="text-primary"><h6>Name</h6></label>
                <input class="form-control border-primary text-primary mb-3" type="text" id="name" value="Yurii">
                <label for="surname" class="text-primary"><h6>Surname</h6></label>
                <input class="form-control border-primary text-primary mb-4" type="text" id="surname" value="Shuginin">
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary btn-lg px-5">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProfileEditForm'
}
</script>

<style>
</style>
