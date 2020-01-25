<template>
  <div class="main-block bordered">
    <div class="main-block__editor">
      <div class="main-block__description padding">
        Followers count is
        <span>less</span>
        than
      </div>

      <div class="main-block__inputs">
        <BaseInput
          v-for="(element, index) in elements"
          :key="index"
          :index="index"
          :value="element.condition.value"
          @input="setValue"
          @remove-element="removeElement"
        />

        <div class="main-block__add-value">
          <div class="main-block__add-value__button" @click="addElement">
            + Add value
          </div>
        </div>
      </div>
    </div>
    <div class="main-block__results">
      <div class="main-block__description padding">
        Followers count is
      </div>
      <div class="main-block__followers-count padding">
        {{ followersCount }} or greater
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { _Element } from '@/utils'
import BaseInput from '@/components/BaseInput.vue'
import {
  addNewElementTo,
  removeElementsFrom,
  setNewValueToTargetElements
} from '@/components/utils'

@Component({
  components: { BaseInput }
})
export default class MainBlock extends Vue {
  @Prop({ default: () => [] }) elements: _Element[]

  get followersCount (): number {
    return this.elements.reduce((sum, { condition }) => sum + condition.value, 0)
  }

  setValue (input: { index: number, value: number }) {
    const newElements = setNewValueToTargetElements(this.elements, input)

    this.$emit('update-elements', newElements)
  }

  addElement () {
    const newElements = addNewElementTo(this.elements)

    this.$emit('update-elements', newElements)
  }

  removeElement (index) {
    const newElements = removeElementsFrom(this.elements, index)

    this.$emit('update-elements', newElements)
  }
}
</script>

<style lang="sass" scoped>
.main-block
  border-radius: 0 0 9px 9px

  &__editor, &__results
    display: flex

  &__results
    border-top: 1px dashed #a8a8a8

  &__description,
  &__followers-count,
  &__inputs
    flex-basis: 178px
    flex-shrink: 0
    flex-grow: 0

  &__followers-count
    border-left: 1px dashed #a8a8a8

  &__add-value__button
    padding: 8px 4px
    cursor: pointer
    border-left: 1px dashed #a8a8a8
</style>