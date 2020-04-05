<template>
   <div class="error">
       {{errorMessage}}
   </div>
</template>

<style lang="scss" scoped>
    .error {
        font-size: 30px;
        font-weight: 700;
        color: #c80036;
        text-align: center;
        line-height: 2;
    }
</style>

<script>
    export default {
        data: function() {
            return {
                errorMessage: "К сожалению, сервер временно недоступен. Попробуйте получить информацию позднее",
            }
        }
    }
</script>
