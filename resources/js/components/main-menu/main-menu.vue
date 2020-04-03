<template>
    <nav class="mainMenu">
        <div v-for="(menuItem, index) in menuItems"
             class="mainMenu_item"
             :class="{mod_active: index === activeItem}"
             @click="gotoPage(index)"
        >
            {{menuItem.title}}
        </div>

    </nav>
</template>

<script src="./main-menu.js"></script>

<style lang="scss">
    @import "main-menu";
</style>
