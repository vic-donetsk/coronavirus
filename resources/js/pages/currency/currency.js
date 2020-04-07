
import Preloader from '../../components/preloader/preloader.vue';
import mainMenu from "../../components/main-menu/main-menu.vue";
import Footer from '../../components/footer/footer.vue';
import errorMessage from './../../components/errorMessage/errorMessage.vue';

export default {
    data: function () {
        return {
            curses: null,
            isLoaded: false,
            textDate:'',
            fileNames: ['dollar', 'euro', 'rouble'],
            currencyNames: ['доллар США', 'евро', 'Рубль России'],
            hasError: true
        }
    },
    components: {
        'preloader': Preloader,
        'main-menu': mainMenu,
        'my-footer': Footer,
        'error-message': errorMessage
    },
    created() {
        document.title = 'Карантин - курсы валют';
        axios.get('api/curses')
            .then((response) => {
                this.curses = response.data;
                let currentData = new Date();
                let monthA = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
                let minutes = (currentData.getMinutes() > 10) ? currentData.getMinutes() : '0' + String(currentData.getMinutes());
                this.textDate = currentData.getDate() + ' ' + monthA[currentData.getMonth()] + ' ' + currentData.getFullYear() + ' года,     ' +
                    currentData.getHours() + ':' + minutes;
                this.hasError = false;
            })
            .catch((error) => {
                // handle error
            })
            .then(() => {
                setTimeout(() => this.isLoaded = true, 1000);
            });
    }
}
