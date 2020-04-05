<template>
    <div class="virusPage">

        <preloader :isLoaded="isLoaded" />

        <div class="virusTable_wrapper">
            <main-menu :activeItem="1"/>

            <div v-if="!hasError" class="virusTable">
                <div class="virusTable_row mod_header">
                    <div v-for="(header, index) in tableHeaders"
                         class="virusTable_row-item mod_header-item"
                         :class="{ 'mod_name' : index===1, 'mod_num' : index===0}"
                    >

                        <div
                            :class="{header_title:[0, 1].indexOf(index) === -1, mod_active: activeItem === tableHeaders[index].class}"
                            @click="sortData(tableHeaders[index].class, false)"
                        >
                            {{tableHeaders[index].title}}
                        </div>

                        <div v-if="[0, 1].indexOf(index) === -1" class="virusTable_sort">
                            <svg class="virusTable_sort-item"
                                 :class="{mod_active: activeItem === tableHeaders[index].class && ascDirection}"
                                 @click="sortData(tableHeaders[index].class, true)"
                            >
                                <use xlink:href="#sortUp"></use>
                            </svg>
                            <svg class="virusTable_sort-item"
                                 :class="{mod_active: activeItem === tableHeaders[index].class && !ascDirection}"
                                 @click="sortData(tableHeaders[index].class, false)"
                            >
                                <use xlink:href="#sortDown"></use>
                            </svg>
                        </div>

                    </div>
                </div>

                <div v-for="(tableRow, i) in tableRows" class="virusTable_row">
                    <div class="virusTable_row-item mod_num">
                        {{i+1}}
                    </div>
                    <div v-for="(columnName, index) in columnNames"
                         :key='index'
                         class="virusTable_row-item"
                         :class="[columnName, { 'mod_name' : index===0, 'mod_today': tableRow[columnName] != 0}]"
                    >
                        <div v-if="tableRow[columnName] != 0">
                            <span v-if="['todayCases', 'todayDeaths'].indexOf(columnName) !== -1">+</span>
                            {{tableRow[columnName]}}
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="virusTable_error">
                <error-message />
            </div>

            <button class="virusTable_scrollButton" :class="{mod_home: notScrolled}" @click="scrollHome">
                UP
            </button>
        </div>

        <my-footer/>

    </div>
</template>

<script src="./virus.js">
</script>

<style lang="scss" scoped>
    @import 'virus';
</style>
