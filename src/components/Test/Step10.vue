<template>
  <div>
    <div class="wrapper flex relative">
      <div class="container flex shadow frame10">
        <span>Ваш идеальный вес:&nbsp;</span>
        <span class="painted result">{{ idealWeiht() }}</span>
      </div>
      <div class="container flex shadow frame10">
        <span>Допустимый диапозон изменения пульса:&nbsp;</span>
        <span class="painted result">{{ pulseRange() }}</span>
      </div>
      <div class="container flex shadow frame10">
        <span>Тип телосложения:&nbsp;</span>
        <span class="painted">{{ bodyType() }}</span>
      </div>
    </div>

    <div class="result-strings">
      <div class="flex">
        <span>У вас&nbsp;</span>
        <span class="painted">{{ weightType() }}</span>
      </div>
      <div class="flex">
        <span>Ваш уровень физической подготовки&nbsp;</span>
        <span class="painted">{{ physicalLevel() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
