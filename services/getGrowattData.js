import axios from 'axios'

const getGrowattData = async (login, pass) => {
  const url = 'https://proxyservergrowatt-makerov88.b4a.run/api/v1'
    const data = await axios.post(url, { login, pass })
    const [userId] = Object.keys(data.data)
    const [deviceId] = Object.keys(data.data[userId].devices)
    const growattData = {
      generate: data.data[userId].devices[deviceId].historyLast.ppv,
      consumption: data.data[userId].devices[deviceId].historyLast.pacToLocalLoad,
      powerCraft: data.data[userId].devices[deviceId].historyLast.pacToUserTotal,
      total: data.data[userId].devices[deviceId].historyLast.epvTotal,
      voltage: data.data[userId].devices[deviceId].historyLast.vac1,
      amperage: data.data[userId].devices[deviceId].historyLast.iac1,
      temperature: data.data[userId].devices[deviceId].historyLast.temp5,
    }
    return growattData
}

export default getGrowattData
