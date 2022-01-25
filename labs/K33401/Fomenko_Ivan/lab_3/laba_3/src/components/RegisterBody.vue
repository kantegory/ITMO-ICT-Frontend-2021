<template>
    <main class="">
        <div class="container-fluid">
            <div class="row content">
                <div class="col-4 col-xl-8 col-lg-7 col-md-6 col-sm-5">
                    <div class="row">
                        <div class="col-8 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                            <img src="../../public/flying_stuff/login.gif" class="img-fluid">
                            <img src="../../public/flying_stuff/login.gif" class="img-fluid">
                            <img src="../../public/flying_stuff/login.gif" class="img-fluid">
                        </div>
                        <div class="col-8 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                            <img src="../../public/flying_stuff/login.gif" class="img-fluid">
                            <img src="../../public/flying_stuff/login.gif" class="img-fluid">
                            <img src="../../public/flying_stuff/login.gif" class="img-fluid">
                        </div>
                        <div class="col-8 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                            <img src="../../public/flying_stuff/login.gif" class="img-fluid">
                            <img src="../../public/flying_stuff/login.gif" class="img-fluid">
                            <img src="../../public/flying_stuff/login.gif" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-8 col-xl-4 col-lg-5 col-md-6 col-sm-7">
                    <h3 class="mb-3">R - Registration!</h3>
                    <form>
                        <div class="form-group">
                            <label for="email" class="kicker">Email</label>
                            <input type="email" name="email" class="form-control" id="email" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label for="password" class="kicker">Password</label>
                            <input type="password" name="password" class="form-control" id="password">
                            <input type="checkbox" class="kicker"><small>Remember me</small>
                        </div>
                        <button class="btn btn-class">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'RegisterBody'
}
</script>

<style scoped>

</style>
