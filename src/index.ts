export type subsequence = () => {
  validate: () => boolean
}

const subsequence: subsequence = () => {
  return {
    validate: () => true,
  }
}

export default subsequence
