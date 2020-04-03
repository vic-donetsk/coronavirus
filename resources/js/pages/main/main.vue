<template>
    <div class="main">
        <div class="main_aside"></div>
        <div class="main_content">
            <movement-virus/>
            <div class="main_content-info">
                <div v-for="(virus, key, indexVirus) in virusInfo" :key="indexVirus">
                    {{virusTitle[indexVirus]}}
                    {{virus}}
                </div>
                <router-link v-for="(item, index) in menu" :key="index" :to="item.route">
                    {{item.title}}
                </router-link>
            </div>
        </div>
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

<style lang="scss">
    .main {
        width: 100%;
        height: 100vh;
        display: flex;

        &_aside {
            width: 300px;
            height: 100%;
            background-image: url("/images/stalevar.jpg");
        }

        &_content {
            width: 100%;
            height: 100%;
            position: relative;

            &-info {

            }
        }

    }
</style>

