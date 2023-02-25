const Api = require('growatt')

const user = 'myp3uk'
const passwort = '123456'
const options = {}

async function test() {
  const growatt = new Api({})
  const login = await growatt.login(user, passwort).catch((e) => { console.log(e) })
  console.log('login:', login)
  const getAllPlantData = await growatt.getAllPlantData(options).catch((e) => { console.log(e) })
  console.log('getAllPlatData:', JSON.stringify(getAllPlantData, null, ' '))
  const logout = await growatt.logout().catch((e) => { console.log(e) })
  console.log('logout:', logout)
  return getAllPlantData
}

module.exports = test
