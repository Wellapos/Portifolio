const username = ['John', 'Paul', 'George', 'Ringo']

const lastName = ['Doe', 'Smith', 'Jones', 'Williams']

export const randomUsername =
  username[Math.floor(Math.random() * username.length)] +
  ' ' +
  lastName[Math.floor(Math.random() * lastName.length)]
