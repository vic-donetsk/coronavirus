<template>
    <div>

        <my-footer/>

        <div class="virusTable">
            <div class="virusTable_row">
                <div v-for="(header, index) in tableHeaders" class="virusTable_row-item mod_header" :class="{ 'mod_name' : index===1, 'mod_num' : index===0}">
                    {{tableHeaders[index]}}
                </div>
            </div>
            <div v-for="(tableRow, i) in tableRows" class="virusTable_row">
                <div class="virusTable_row-item mod_num">
                    {{i+1}}
                </div>
                <div v-for="(country, key, index) in tableRow" :key='index' v-if="key !== 'firstCase'" class="virusTable_row-item" :class="{ 'mod_name' : index===0}">
                    <div >
                        {{country}}
                    </div>
                </div>
            </div>
        </div>


        <my-footer/>

    </div>
</template>

<script>

    import Footer from './../../components/footer.vue';

    export default {
        head: {
            title: 'Карантин INFO - вирус'
        },
        data: function () {
            return {
                tableHeaders: ['№', 'страна', 'заболели', 'заболели сегодня', 'умерли', 'умерли сегодня', 'выздоровели', 'болеют', 'критические', 'случаев на миллион', 'смертей на миллион'],
                tableRows: [],
            }
        },
        components: {
            'my-footer': Footer
        },
        beforeCreate() {
            document.title = 'Карантин - детали';
            axios.get('https://coronavirus-19-api.herokuapp.com/countries')
                .then((response) => {
                    this.tableRows = response.data;
                });
        }

    }
</script>

<style lang="scss">
    @import 'virus';
</style>
