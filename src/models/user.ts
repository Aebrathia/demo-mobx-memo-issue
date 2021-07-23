import { Instance } from "mobx-state-tree"
import { User } from './bad'
// import { User } from './better'
// import { User } from './good'

export interface IUser extends Instance<typeof User> {}

export const user = User.create({
  firstName: "Hubert",
  lastName: "Bonisseur de La Bath",
})
