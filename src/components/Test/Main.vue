<template>
  <div class="test shadow" :class="backgrounds">
    <div class="progressbar"/>
    <div class="content-area">
      <h1 class="main-header" v-if="frameShow < 10">Подготовка к тренировке</h1>
      <h1 class="main-header" v-if="frameShow == 10">Результаты</h1>

      <router-view/>

      <div class="flex">
        <div class="link-button shadow flex" v-if="frameShow < 10" @click="isFilled(frameShow)">Далее</div>
        <div class="link-button shadow flex" v-if="frameShow == 10" @click="end()">Закончить</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./index.js"/>

<style scoped src="./styles.css"></style>
