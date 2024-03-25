import Capability from './capability.js'

const ReceiveTransactionCapability = new Capability({
  title: 'Receive Transaction',
  authors: ['Miguel Duarte (Money Button)', 'Ryan X. Charles (Money Button)', 'Ivan Mlinaric (Handcash)', 'Rafa (Handcash)'],
  version: '1.1',
  method: 'POST'
})

export default ReceiveTransactionCapability
