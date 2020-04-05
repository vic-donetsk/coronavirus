<template>
    <div :class="{'preloader_hidden': isLoaded}" class="preloader_wrapper">
        <div class="preloader">
            <div v-for="(item, index) in [0,1,2,3,4,5,6,7,8]" class="preloader_item">
                <div class="preloader_item-circle" :class="'mod_' + index"></div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @import "./preloader";
</style>

<script src="./preloader.js"></script>
