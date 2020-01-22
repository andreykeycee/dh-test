export const mockData = {
  displaySettings: {
    subType: "condition",
    type: "followers",
  },
  elements: [
    {
      type: "rule",
      condition: {
        entity: "contact",
        field: "followers",
        operand: "lt",
        value: 5000,
      },
      onFail: {
        action: "fallthrough"
      },
      onMatch:  {
        action: "goto",
        target: "5e26e98027b2c58a70085d4f"
      }
    },
    {
      type: "rule",
      condition: {
        entity: "contact",
        field: "followers",
        operand: "lt",
        value: 15000,
      },
      onFail: {
        action: "goto",
        target: "5e26e98027b2c58a70085d4e"
      },
      onMatch: null
    }
  ]
}

export type MockData = {
  displaySettings: {
    subType: string,
    type: string
  },
  elements: _Element[]
}

export type _Element = {
  type: string,
  condition: {
    entity: string,
    field: string,
    operand: string,
    value: number
  },
  onFail: _Action,
  onMatch: _Action
}

export type _Action = {
  action: string,
  target?: string
} | null



