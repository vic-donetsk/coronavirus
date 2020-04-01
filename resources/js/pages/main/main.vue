<template>
    <div>
        <movement-virus/>
        <div>
            <div v-for="(virus, key, index) in virusInfo" :key="index">
                {{virusTitle[index]}}
                {{virus}}
            </div>
        </div>


        <router-link v-for="(item, index) in menu" :key="index" :to="item.route">
            {{item.title}}
        </router-link>
    </div>
</template>

<script>

    import movementVirus from './../../components/movement';

    export default {
        components: {
            'movement-virus': movementVirus
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
</script>

