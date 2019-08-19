<template>
  <div>
    Выберите ваш пол:
    <div class="wrapper flex">
      <div class="container flex" :class="{ shadow: isSelected != 'man', selected: isSelected == 'man' }" @click="$emit('gender-choice', 'man')">
        <img src="@/assets/test/Man.png">
        <div class="link-button shadow offset flex">Мужской</div>
      </div>
      <div class="container flex" :class="{ shadow: isSelected != 'woman', selected: isSelected == 'woman' }" @click="$emit('gender-choice', 'woman')">
        <img src="@/assets/test/Woman.png">
        <div class="link-button shadow offset flex">Женский</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isSelected']
}
</script>

<style scoped src="./styles.css"></style>
