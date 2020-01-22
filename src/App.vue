<template>
  <div id="app">
    <FollowersBlock
      :data="mockData"
      @on-update-data="updateData"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import FollowersBlock from '@/components/FollowersBlock.vue'
import { MockData, mockData } from '@/utils'

@Component({
  components: {
    FollowersBlock,
    HelloWorld,
  }
})
export default class App extends Vue {
  mockData: MockData = mockData

  updateData () {

  }
}
</script>

<style lang="sass">
#app
  width: fit-content
  margin: 60px auto
</style>
