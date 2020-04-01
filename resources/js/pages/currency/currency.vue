<template>
    <div>
        {{message}}
        <div class="currency">
            <div v-for="curs in curses">
                Покупка: {{curs[0]}} Продажа: {{curs[1]}}
            </div>
        </div>
<!--        <currency-table :curses="curses"/>-->
        <my-footer/>
    </div>
</template>

<script>

    import Footer from './../../components/footer.vue';
    import currencyTable from './../../components/currencyTable.vue';

    export default {
        data: function () {
            return {
                message: 'currency page',
                curses: null
            }
        },
        components: {
            'currency-table': currencyTable,
            'my-footer': Footer
        },
        beforeCreate() {
            document.title = 'Карантин - курсы валют';
            axios.get('api/curses')
                .then((response) => {
                    this.curses = response.data;
                });
        }


    }
</script>
