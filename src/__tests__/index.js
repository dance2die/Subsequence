import { validate } from '../index'

test('Happy Path', () => {
  const input = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [1, 6, -1, 10]

  expect(validate(sequence, input)).toBe(true)
})

test('that if input and sequence are the same, sequence is the subsequence of the input', () => {
  const input = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [...input]

  expect(validate(sequence, input)).toBe(true)
})
