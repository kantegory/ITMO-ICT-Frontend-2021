<template>
    <!-- Modal window "New password"-->
    <div class="modal fade" id="PassRenewModal" tabindex="-1" aria-labelledby="PassRenewModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content border-primary">
                <div class="modal-header border-0">
                    <h5 class="modal-title text-primary" id="PassRenewModalLabel">New password</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-primary text-center">
                    New password set.<br>Now you can login using the new password.
                </div>
                <div class="modal-footer border-0">
                    <a class="btn btn-outline-primary" href="/" role="button">Home</a>
                    <a class="btn btn-primary" href="/login" role="button"><span class="m-1">Log in</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PassRenewModal'
}
</script>

<style>

</style>
