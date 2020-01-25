<template>
  <div class="title-block bordered">
    <div class="title-block__sub-type">{{ title }}</div>
    <div class="title-block__type">{{ subTitle }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class TitleBlock extends Vue {
  @Prop() title: string
  @Prop() subTitle: string
}
</script>

<style lang="sass" scoped>
.title-block
  text-transform: capitalize
  border-radius: 9px 9px 0 0

  &__sub-type, &__type
    padding: 4px

  &__sub-type
    border-bottom: 1px solid  #FF9B71
    background: rgba(255, 155, 113, 0.25)

  &__type
    font-size: 12px
    color: #F88859
</style>