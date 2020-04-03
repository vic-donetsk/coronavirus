<template>
    <div class="main">
        <div class="main_aside"></div>
        <div class="main_content">

            <movement-virus/>

            <main-menu :activeItem="0" />

            <header class="main_header">
                <div class="main_header-name">{{mainHeader.name}}</div>
                <div class="main_header-feature">{{mainHeader.feature}}</div>
            </header>

            <div class="main_content-info">
                <div v-for="(virus, key, indexVirus) in virusInfo" :key="indexVirus">
                    {{virusTitle[indexVirus]}}
                    {{virus}}
                </div>
                <router-link v-for="(item, index) in menu" :key="'A'+index" :to="item.route">
                    {{item.title}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script src="./main.js"></script>

<style lang="scss">
    @import 'main';
</style>

