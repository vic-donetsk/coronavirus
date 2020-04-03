import Footer from './../../components/footer.vue';

export default {
    head: {
        title: 'Карантин INFO - вирус'
    },
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
            tableRows: [],
            activeItem: 'cases',
            ascDirection: false
        }
    },
    components: {
        'my-footer': Footer
    },
    // computed: {
    //     sortedTable: function() {
    //
    //     }
    // },
    beforeCreate() {
        document.title = 'Карантин - детали';
        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
            .then((response) => {
                this.tableRows = response.data;
                this.sortData(this.activeItem, this.ascDirection);
            });
    },
    methods: {
        sortData(fieldKey, ascDirection) {
            if (ascDirection)
                this.tableRows.sort((a, b) => a[fieldKey] > b[fieldKey] ? 1 : -1);
            else
                this.tableRows.sort((a, b) => a[fieldKey] < b[fieldKey] ? 1 : -1);
            this.activeItem = fieldKey;
            this.ascDirection = ascDirection;
        }
    }

}
