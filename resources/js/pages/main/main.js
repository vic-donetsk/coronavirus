import movementVirus from './../../components/movement/movement';
import mainMenu from './../../components/main-menu/main-menu.vue';
import Footer from './../../components/footer/footer.vue';
import Preloader from './../../components/preloader/preloader.vue';

export default {
    components: {
        'preloader': Preloader,
        'movement-virus': movementVirus,
        'main-menu': mainMenu,
        'my-footer': Footer
    },
    data: function () {
        return {
            virusInfo: {
                cases: null,
                deaths: null,
                recovered: null
            },
            menu: [
                {title: 'Детально по государствам', route: '/virus'},
                {title: 'Состояние валютного рынка', route: '/currency'}
            ],
            mainHeader: {name: 'Мариуполь', feature: 'на карантине'},
            virusTitle: [
                {title: 'Всего инфицировано:', color: '#ff9700'},
                {title: 'Умерли:', color: '#b60009'},
                {title: 'Выздоровели:', color: '#43ff00'}],
            isLoaded: false
        }
    },
    beforeCreate() {
        axios.get('https://coronavirus-19-api.herokuapp.com/all')
            .then((response) => {
                for (let key in response.data) {
                    this.virusInfo[key] = new Intl.NumberFormat('ru-RU').format(response.data[key]);
                }
                this.isLoaded = true;
            });
    }
}
