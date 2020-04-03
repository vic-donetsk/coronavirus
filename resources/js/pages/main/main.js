import movementVirus from './../../components/movement/movement';
import mainMenu from './../../components/main-menu/main-menu.vue';

export default {
    components: {
        'movement-virus': movementVirus,
        'main-menu': mainMenu
    },
    data: function () {
        return {
            virusInfo: {
                cases: null,
                deaths: null,
                recovered: null
            },
            menu: [
                {title: 'Вирус по странам', route: '/virus'},
                {title: 'Курсы валют', route: '/currency'}
            ],
            mainHeader: {name: 'Мариуполь', feature: 'на карантине'},
            virusTitle: ['Всего инфицировано:', 'Умерли:', 'Выздоровели:'],
        }
    },
    beforeCreate() {
        axios.get('https://coronavirus-19-api.herokuapp.com/all')
            .then((response) => {
                for (let key in response.data) {
                    this.virusInfo[key] = response.data[key];
                }
            });
    }
}
