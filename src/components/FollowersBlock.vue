<template>
  <div class="followers-block">
    <div class="title-block">
      <div class="title-block__sub-type">{{ displaySettings.subType }}</div>
      <div class="title-block__type">{{ displaySettings.type }}</div>
    </div>


  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { MockData } from '@/utils'

@Component({})
export default class FollowersBlock extends Vue {
  @Prop({ default: () => ({}) }) mockData!: MockData

  get displaySettings () {
    return this.mockData.displaySettings
  }
}
</script>

<style lang="sass" scoped>

</style>