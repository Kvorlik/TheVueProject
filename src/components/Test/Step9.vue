<template>
  <div>
    Измерение скоростно-силовой выносливости:
    <div class="flex column-flex frame-picture">
    <img src="@/assets/test/man1.png">
      <div align="justify">
        Измеряется максимальная частота сгибания рук в упоре лежа (женщины в упоре на коленях) за 30 секунд.
      </div>
      <input type="text" v-model="stats.rateStrength" placeholder="Значение ССВ, раз">
    </div>
  </div>
</template>

<script>
export default {
}
</script>
