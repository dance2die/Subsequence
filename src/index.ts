function validate<T>(toValidate: T[], input: T[]): boolean {
  const q = [...toValidate]

  for (let i = 0; i < input.length; i++) {
    if (q.length === 0) return true

    const curr = q[0]
    if (curr === input[i]) {
      q.shift()
    }
  }

  return q.length === 0
}

export { validate }
