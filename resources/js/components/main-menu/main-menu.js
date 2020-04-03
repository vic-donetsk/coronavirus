export default {
    data: function () {
        return {
            menuItems: [
                {title: 'Главная', route: '/'},
                {title: 'Информация по странам', route: 'virus'},
                {title: 'Курсы валют', route: 'currency'},
            ]
        }
    },
    props: ['activeItem'],
    methods: {
        gotoPage(index) {
            if (index !== this.activeItem) {
                this.$router.push(this.menuItems[index].route);
            }
        }
    }
}
