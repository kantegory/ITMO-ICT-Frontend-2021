<template>
    <!-- Modal window "Password reset"-->
    <div class="modal fade" id="PassResetModal" tabindex="-1" aria-labelledby="PassResetModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content border-primary">
                <div class="modal-header border-0">
                    <h5 class="modal-title text-primary" id="PassResetModalLabel">Password reset</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-primary text-center">
                    Alright!<br>The message with further instructions was sent to your E-mail.
                </div>
                <div class="modal-footer border-0">
                    <a class="btn btn-outline-primary" href="/" role="button">Home</a>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"><span class="m-1">Close</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PassResetModal'
}
</script>

<style>

</style>
