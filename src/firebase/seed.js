import { serverTimestamp } from "firebase/firestore";
import agileValues from '../constants/four-agile-manifesto.js'
import agilePrinciple from '../constants/twelve-agile-principles.js'

export function seedDatabase(firebase) {
  for (const item of agileValues.data) {
    firebase.firestore().collection('agile-values').add({
      name: item.text,
      isEditing: false,
      timestamp: serverTimestamp()
    })
  }
  for (const item of agilePrinciple.data.reverse()) {
    firebase.firestore().collection('agile-principles').add({
      name: item.text,
      isEditing: false,
      timestamp: serverTimestamp()
    })
  }
}
