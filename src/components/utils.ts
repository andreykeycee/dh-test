import last from 'lodash/last'
import initial from 'lodash/initial'
import { _Action, _Element } from '@/utils'


export const setNewValueToTargetElements = (
  elements: _Element[],
  { index, value }: { index: number, value: number }
): _Element[] => {
  const targetElement = elements.find((el, i) => i === index)
  const updatedElement = updateElementValue(targetElement, value)

  return elements.map((el, i) => {
    return i === index
      ? updatedElement
      : el
  })
}


export const addNewElementTo = (elements: _Element[]): _Element[] => {
  const lastElement = last(elements)
  const onMatch = null
  const { onFail } = lastElement

  const newElement = createElement(onFail, onMatch)
  const updatedLast = {
    ...lastElement,
    onFail: { action: 'fallthrough' }
  }
  return [ ...initial(elements), updatedLast, newElement ]
}


export const removeElementsFrom = (elements: _Element[], index: number): _Element[] => {
  const updatedElements = elements.filter((el, i) => i !== index)
  const isLastIndex: boolean = index === elements.length - 1

  return isLastIndex
    ? updateNewLastElement(elements, updatedElements)
    : updatedElements
}


const createElement = (onFail: _Action, onMatch: _Action): _Element => ({
  type: 'rule',
  condition: {
    entity: "contact",
    field: "followers",
    operand: "lt",
    value: 5000,
  },
  onFail,
  onMatch
})


const updateElementValue = (element: _Element, value: number): _Element => ({
  ...element,
  condition: {
    ...element.condition,
    value
  }
})


const updateNewLastElement = (
  oldElements: _Element[],
  newElements: _Element[]
): _Element[] => {
  const { onFail } = last(oldElements)

  return [
    ...initial(newElements), {
      ...last(newElements),
      onFail
    }
  ]
}