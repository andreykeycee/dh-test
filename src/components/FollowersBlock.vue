<template>
  <div class="followers-block bordered">
    <TitleBlock
      :title="displaySettings.subType"
      :sub-title="displaySettings.type"
    />
    <MainBlock
      :elements="data.elements"
      @update-elements="updateElements"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { _Element, MockData } from '@/utils'
import TitleBlock from '@/components/TitleBlock.vue'
import MainBlock from '@/components/MainBlock.vue'

@Component({
  components: {MainBlock, TitleBlock }
})
export default class FollowersBlock extends Vue {
  @Prop({ default: () => ({}) }) data: MockData

  get displaySettings () {
    return this.data.displaySettings
  }

  updateElements (elements: _Element[]) {
    const newData = {
      ...this.data,
      elements
    }

    this.$emit('update-data', newData)
  }
}
</script>

<style lang="sass" scoped>
.followers-block
  border-radius: 10px
</style>