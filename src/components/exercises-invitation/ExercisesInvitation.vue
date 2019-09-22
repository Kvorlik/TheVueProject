<template>
  <div class="test-invitation flex">
    <slot/>
    <regular-button
      :href="href"
      :width="450"
      :height="90"
      :font-size="25"
    >
      {{ buttonText }}
    </regular-button>
  </div>
</template>

<script>
import { RegularButton } from '@/components';

export default {
  name: 'ExercisesInvitation',
  props: {
    buttonText: String,
    href: String
  },
  components: {
    RegularButton
  }
}
</script>

<style scoped lang="css" src="./ExercisesInvitation.css"/>