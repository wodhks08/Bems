<template>
    <div>
        <h2>users-edit</h2>
        {{ userId }}
    </div>
</template>


<script>
export default {
    computed:{
        userId(){
            return this.$route.params.id
        }
    },
}
</script>