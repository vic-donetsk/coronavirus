<template>
    <div class="main">

        <preloader :isLoaded="isLoaded" />

        <div class="main_aside"></div>
        <div class="main_content">
            <div>
                <main-menu :activeItem="0"/>

                <header class="main_header">
                    <div class="main_header-name">{{mainHeader.name}}</div>
                    <div class="main_header-feature">{{mainHeader.feature}}</div>
                </header>

                <h1 class="main_content-title">Сводные данные по планете:</h1>

                <div class="main_content-info">
                    <div v-for="(virus, key, indexVirus) in virusInfo" :key="indexVirus" class="info-row">
                        <p>{{virusTitle[indexVirus].title}}</p>
                        <p :style="'color:' + virusTitle[indexVirus].color">{{virus}}</p>
                    </div>
                </div>

                <div class="main_content-links">
                    <router-link v-for="(item, index) in menu"
                                 :key="'A'+index"
                                 :to="item.route"
                                 class="links_item">
                        {{item.title}}
                    </router-link>
                </div>
            </div>

            <my-footer/>

            <movement-virus/>

        </div>
    </div>
</template>

<script src="./main.js"></script>

<style lang="scss" scoped>
    @import 'main';
</style>

