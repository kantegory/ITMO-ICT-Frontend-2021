<template>
    <!-- Modal window "Log out confirmation"-->
    <div class="modal fade" id="LogOutModal" tabindex="-1" aria-labelledby="LogOutModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content border-primary">
                <div class="modal-header border-0">
                    <h5 class="modal-title text-primary" id="LogOutModalLabel">Log out confirmation</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-primary">
                    Are you sure you want to log out of your account?
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="/" role="button">Log out</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LogoutModal'
}
</script>

<style>

</style>
