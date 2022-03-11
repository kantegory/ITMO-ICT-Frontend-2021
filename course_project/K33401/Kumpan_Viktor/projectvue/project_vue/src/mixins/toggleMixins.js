export  default  {
    props:{
        show:{
            type: Boolean,
            required:true,
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    },
}

