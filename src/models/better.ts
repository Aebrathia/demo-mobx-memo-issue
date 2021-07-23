import { types } from "mobx-state-tree"

export const User = types
  .model({
    firstName: types.optional(types.string, ""),
    lastName: types.optional(types.string, ""),
  })
  .views(self => ({
    get fullName() {
      console.log('get fullName')
      return `${self.firstName} ${self.lastName}`;
    }
  }))
  .views(self => ({
    get fullNameAndTitle() {
      console.log('get fullNameAndTitle')
      return `M. ${self.fullName}`;
    }
  }))
  .views(self => ({
    get formalGreetings() {
      console.log('get formalGreetings')
      return `Bonjour, ${self.fullNameAndTitle}`;
    }
  }))
