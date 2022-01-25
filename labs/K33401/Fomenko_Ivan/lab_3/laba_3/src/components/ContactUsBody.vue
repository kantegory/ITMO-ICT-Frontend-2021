<template>
    <main class="">
        <div class="container py-5">
            <div class="card">
                <div class="card-body">
                    <h2 class="font-weight-light text-center py-2">Contact Us</h2>
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="row pt-3">
                                <div class="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                                    <span style="font-size: 30px; color: cadetblue;"><i class="fa fa-map-marker-alt"></i></span>
                                </div>
                                <div class="col-lg-10 col-md-9 col-sm-9 col-9">
                                    <h3 class="font-weight-light">Find Us at office</h3>
                                    <p>Bld Mihail Kogalniceanu, nr. 9, <br>
                                    7653 Bucharest, <br>
                                    Romania</p>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                                    <span style="font-size: 30px; color: coral;"><i class="fas fa-phone-volume"></i></span>
                                </div>
                                <div class="col-lg-10 col-md-9 col-sm-9 col-9">
                                    <h3 class="font-weight-light">Give Us a ring</h3>
                                    <p>Michael Jordan, <br>
                                    +40 762 321 762, <br>
                                    Mon - Fri, 8:00-20:00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            <form>
                                <div class="row">
                                    <div class="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                                        <label class="kicker">First Name</label>
                                        <input type="text" class="form-control" placeholder="First Name">
                                    </div>
                                    <div class="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                                        <label class="kicker">Last Name</label>
                                        <input type="text" class="form-control" placeholder="Last Name">
                                    </div>
                                </div>
                                <label class="kicker">Email</label>
                                <input type="Email" class="form-control" placeholder="Email">
                                <label class="kicker">Type your message:</label>
                                <textarea class="form-control" placeholder="Message" cols="30" rows="5"></textarea>
                                <button class="btn btn-class float-right">Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'ContactUsBody'
}
</script>

<style scoped>

</style>
