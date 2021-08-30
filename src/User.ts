import { Instance, types } from 'mobx-state-tree';

const User = types.model({
  id: types.number,
  firstName: types.string,
  lastName: types.string,
}).views((self) => ({
  get fullName() {
    return `${self.firstName} ${self.lastName}`
  }
}))

export const user = User.create({
  id: 1,
  firstName: 'Tim',
  lastName: 'B'
});

export interface IUser extends Instance<typeof User> {}
