<template>
    <div class="currency">
        <div v-for="curs in curses">
            Покупка: {{curs[0]}} Продажа: {{curs[1]}}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['curses'],
    }
</script>

<style lang="scss" scoped>
    @import 'currencyTable';
</style>
