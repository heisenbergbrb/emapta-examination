import agileBase from './agile-base'

const COLLECTION_NAME = 'agile-principles'
const agilePrinciples = {
  namespaced: true,
  ...agileBase(COLLECTION_NAME)
}

export default agilePrinciples
