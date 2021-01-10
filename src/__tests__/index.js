import { validate } from '../index'

xtest('Happy Path', () => {
  const input = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [1, 6, -1, 10]

  expect(validate(sequence, input)).toBe(true)
})
