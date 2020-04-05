import Footer from './../../components/footer/footer.vue';
import mainMenu from './../../components/main-menu/main-menu.vue';
import Preloader from './../../components/preloader/preloader.vue';

export default {
    data: function () {
        return {
            tableHeaders: [
                {title: '№', class: 'num'},
                {title: 'страна', class: 'country'},
                {title: 'заболели', class: 'cases'},
                {title: 'заболели сегодня', class: 'todayCases'},
                {title: 'умерли', class: 'deaths'},
                {title: 'умерли сегодня', class: 'todayDeaths'},
                {title: 'выздоро-вели', class: 'recovered'},
                {title: 'болеют', class: 'active'},
                {title: 'крити-ческие', class: 'critical'},
                {title: 'случаев на миллион', class: 'casesPerOneMillion'},
                {title: 'смертей на миллион', class: 'deathsPerOneMillion'},
            ],
            columnNames: ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'active',
                'critical', 'casesPerOneMillion', 'deathsPerOneMillion'],
            tableRows: [],
            activeItem: 'cases',
            ascDirection: false,
            errorMessage: "К сожалению, сервер временно недоступен. Попробуйте получить информацию позднее",
            notScrolled: true,
            scrollTime: 1000,
            isLoaded: false
        }
    },
    components: {
        'my-footer': Footer,
        'main-menu': mainMenu,
        'preloader': Preloader
    },
    beforeCreate() {
        document.title = 'Карантин - детали';
        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
            .then((response) => {
                this.tableRows = response.data;
                this.sortData(this.activeItem, this.ascDirection);
            })
            .catch((error) => {
                // handle error
            })
            .then(() => {
                setTimeout(() => this.isLoaded = true, 1000);
        });
    },
    mounted() {
        this.$nextTick(() => {
            // Code that will run only after the
            // entire view has been rendered

            //если страница загрузилась с сохраненным скроллом
            if (window.pageYOffset > 100) {
                this.notScrolled = false;
            }
            // и при любом перемещении по документу
            window.addEventListener('scroll', () => {
                this.notScrolled = window.pageYOffset <= 100;
            });
        })
    },
    methods: {
        sortData(fieldKey, ascDirection) {
            if (ascDirection)
                this.tableRows.sort((a, b) => a[fieldKey] > b[fieldKey] ? 1 : -1);
            else
                this.tableRows.sort((a, b) => a[fieldKey] < b[fieldKey] ? 1 : -1);
            this.activeItem = fieldKey;
            this.ascDirection = ascDirection;
        },
        scrollHome() {
            let currentScroll = window.pageYOffset;
            let scrollStep = Math.trunc(currentScroll / this.scrollTime * 50);
            let timerId = setInterval(() => {
                if (window.pageYOffset > scrollStep) {
                    window.scrollBy(0, -scrollStep);
                } else {
                    window.scrollTo(0, 0);
                    clearInterval(timerId);
                }
            }, 50);
        }
    }

}
