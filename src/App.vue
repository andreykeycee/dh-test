<template>
  <div id="app">
    <FollowersBlock
      :data="mockData"
      @update-data="updateData"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FollowersBlock from '@/components/FollowersBlock.vue'
import { MockData, mockData } from '@/utils'

@Component({
  components: {
    FollowersBlock
  }
})
export default class App extends Vue {
  mockData: MockData = mockData

  updateData (data: MockData) {

    console.log(data)
    this.mockData = data
  }
}
</script>

<style lang="sass">

#app
  width: fit-content
  margin: 60px auto

.bordered
  border: 1px solid #a8a8a8

.padding
  padding: 8px 12px 8px 8px
</style>
