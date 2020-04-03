<template>
    <div>
        <main-menu :activeItem="2" />
        <div class="currency">
            <div v-for="curs in curses">
                Покупка: {{curs[0]}} Продажа: {{curs[1]}}
            </div>
        </div>
        <my-footer/>
    </div>
</template>

<script>

    import Footer from '../../components/footer/footer.vue';
    // import currencyTable from '../../components/currencyTable/currencyTable.vue';
    import mainMenu from "../../components/main-menu/main-menu.vue";

    export default {
        data: function () {
            return {
                curses: null
            }
        },
        components: {
            // 'currency-table': currencyTable,
            'my-footer': Footer,
            'main-menu': mainMenu
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
