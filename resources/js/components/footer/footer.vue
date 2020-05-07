<template>
    <footer>
        <div v-for="(thank, index) in thanks" :key="index" class="footer_thanks">
            {{thank.text}} <span>{{thank.owner}}</span>: <a :href="thank.link" target="_blank">{{thank.link}}</a>
        </div>
        <div class="footer_copyright">© Оформление и разработка сайта. Vic Pavlovsky, 2020</div>
    </footer>
</template>

<script>
    export default {
        data: function () {
            return {
                thanks: [
                    {text:'Постоянно обновляющиеся сведения о жертвах коронавирусной пандемии любезно предоставлены',
                        owner: `господином Javieraviles`,
                        link: 'https://github.com/javieraviles/covidAPI'},
                    {text:'В качестве источника информации о ситуации на валютном рынке Мариуполя используются актуальные курсы',
                        owner: 'обменного пункта на пр.Мира, 68',
                        link: 'https://obmenka-mariupol.com.ua'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'footer';
</style>
