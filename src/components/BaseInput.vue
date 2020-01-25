<template>
  <div class="base-input">
    <div
      v-if="index > 0"
      class="base-input__delete-icon"
      @click="removeElement"
    >X</div>
    <input
      class="base-input__input"
      v-model="inputValue"
      ref="input"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class BaseInput extends Vue {
  @Prop() value: number
  @Prop({ default: 0 }) index: number

  $refs: {
    input: HTMLInputElement
  }

  get inputValue (): string {
    return `${this.value}`
  }
  set inputValue (value: string) {
    const numeral = +(value.replace(/\D/g, ''))
    const { index } = this

    this.$emit('input', {
      index,
      value: numeral
    })

    this.$nextTick(() => {
      this.$refs.input.value = `${numeral}`
    })
  }

  removeElement () {
    this.$emit('remove-element', this.index)
  }
}
</script>

<style lang="sass" scoped>
.base-input
  position: relative
  border-left: 1px dashed #a8a8a8
  border-bottom: 1px dashed #a8a8a8

  &__delete-icon
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: 4px
    cursor: pointer

  &__input
    display: block
    outline: none
    text-align: right
    border: none
    padding: 8px 4px
    color: #28C4A7
    caret-color: #28C4A7
</style>