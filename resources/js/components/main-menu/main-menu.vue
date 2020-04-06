<template>
    <nav class="mainMenu">

        <div class="mainMenu_desktop">
            <div v-for="(menuItem, index) in menuItems"
                 class="mainMenu_item"
                 :class="{mod_active: index === activeItem}"
                 @click="gotoPage(index)"
            >
                {{menuItem.title}}
            </div>
        </div>

        <div class="mainMenu_mobile-wrapper">
            <button class="hamburger hamburger--spring" :class="{'is-active' : isActive}" type="button" @click="menuToggle">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <div class="mainMenu_mobile" :class="{'is-active' : isActive}">
                <div v-for="(menuItem, index) in menuItems"
                     class="mainMenu_item mod_mobile"
                     :class="{mod_active: index === activeItem}"
                     @click="gotoPage(index)"
                >
                    {{menuItem.title}}
                </div>
            </div>
        </div>

    </nav>
</template>

<script src="./main-menu.js"></script>

<style lang="scss" scoped>
    @import "main-menu";
</style>
