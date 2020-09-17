
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
            hasError: true,

            formData: {
                name: '',
                surname: '',
                email: ''
            },
            validationErrors: {
                name: '',
                surname: '',
                email: ''
            }
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
    },
    methods: {
        sendForm(e) {
            e.preventDefault();
            let axiosParams = new FormData();

            // set fillable fields to save
            for (let oneData in this.formData) {
                axiosParams.set(oneData, this.formData[oneData]);
                this.validationErrors[oneData] = '';
            }

            axios({
                method: 'post',
                url: 'api/test',
                data: axiosParams,
                headers: {'Content-Type': 'multipart/form-data'}
            }).then((response) => {
                console.log('this/is true');
                console.log(response.status);
                console.log(response.data);
            }).catch((error) => {
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    if (error.response.status === 422) {
                        // 422 - code of returning validation errors
                        for (let oneError in error.response.data.errors) {
                            console.log(oneError);
                            console.log(error.response.data.errors[oneError][0]);
                            if (this.validationErrors.hasOwnProperty(oneError)) {
                                this.validationErrors[oneError] = error.response.data.errors[oneError][0];
                            }
                            console.log(this.validationErrors);
                        }
                    } else {
                        this.hasError = true;
                    }
                } else {
                    this.hasError = true;
                }
            });









        }
    }
}
