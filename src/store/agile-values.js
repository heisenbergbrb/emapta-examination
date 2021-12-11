import agileBase from './agile-base'

const COLLECTION_NAME = 'agile-values'
const agileValues = {
  namespaced: true,
  ...agileBase(COLLECTION_NAME)
}

export default agileValues
