<template>
    <div class="currency_wrapper">

        <preloader :isLoaded="isLoaded"/>

        <main-menu :activeItem="2"/>

        <div class="currency">
            <div v-if="!hasError">
                <div class="currency_title">Курсы по состоянию на {{textDate}}</div>
                <div class="currency_row">
                    <div class="currency_row-item"></div>
                    <div class="currency_row-item mod_head">Покупка</div>
                    <div class="currency_row-item mod_head">Продажа</div>
                </div>
                <div v-for="(curs, index) in curses" class="currency_row">
                    <div class="currency_row-item mod_name">
                        <img :src="'/images/'+fileNames[index]+'.png'" alt="" class="coin">
                        <p>{{currencyNames[index]}}</p>
                    </div>
                    <div class="currency_row-item mod_data">{{curs[0]}}</div>
                    <div class="currency_row-item mod_data">{{curs[1]}}</div>
                </div>
            </div>
            <error-message v-else/>

        </div>

        <form class="currency mod_form" @submit="sendForm" novalidate="true">

            <div v-for="(value, name) in formData" class="form_item">
                <div class="form_item-title">{{name}}</div>
                <input :id="name" type="text" v-model="formData[name]" :class="{hasError : validationErrors[name]}">
                <div v-if="validationErrors[name]" class="form_item-error">{{validationErrors[name]}}</div>
            </div>


            <button type="submit" >Send</button>
        </form>


        <my-footer/>

    </div>
</template>

<script src="./currency.js">

</script>

<style lang="scss" scoped>
    @import './currency.scss';
</style>
