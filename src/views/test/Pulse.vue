<template>
  <div>
    Измерьте пульс в состоянии покоя. Для правилного измерения ознакомьтесь с
    <span class="painted">инструкцией</span>.
    <div class="flex column-flex frame-picture">
      <img src="./images/img4.png">
      <input type="text" v-model="pulse" placeholder="Пульс, уд/мин" id="autofocus">
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      pulse: null
    }
  },
  mounted() {
    document.querySelector('#autofocus').focus();
    document.querySelector('.painted').addEventListener('click', () =>{
      swal({
        icon: "info",
        title: "Как самостоятельно измерить пульс",
        text: "Замерить пульс в домашних условиях очень просто. Для этого нужны только часы с секундной стрелкой или цифровой секундомер. Найдите тихий уголок, где вас не побеспокоят, сядьте, и не менее чем через десять минут (чтобы гарантировать, что показания пульса сняты в состоянии покоя) посчитайте пульс, несильно прижав два пальца к внутренней стороне запястья, под большим пальцем. Считайте удары в течение 30 секунд. Он обычно составляет от 60 до 100 ударов в минуту.",
        buttons: ['Не понятно', 'Понятно!'],
        closeOnClickOutside: false,
        closeOnEsc: false
      })
      .then( answer => {
        if (!answer) window.open('https://www.google.com/search?q=как+самостоятельно+измерить+пульс');
      })
    });
  },
  beforeUpdate() {
    this.$store.dispatch('changePulse', this.pulse);
  }
}
</script>

<style scoped src="./styles.css"></style>
