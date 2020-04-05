<template>
    <div>

        <preloader :isLoaded="isLoaded" />

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

    import Preloader from '../../components/preloader/preloader.vue';
    import mainMenu from "../../components/main-menu/main-menu.vue";
    import Footer from '../../components/footer/footer.vue';

    export default {
        data: function () {
            return {
                curses: null,
                isLoaded: false
            }
        },
        components: {
            'preloader': Preloader,
            'main-menu': mainMenu,
            'my-footer': Footer
        },
        beforeCreate() {
            document.title = 'Карантин - курсы валют';
            axios.get('api/curses')
                .then((response) => {
                    this.curses = response.data;
                })
                .catch((error) => {
                    // handle error
                })
                .then(() => {
                    setTimeout(() => this.isLoaded = true, 1000);
                });
        }


    }
</script>
