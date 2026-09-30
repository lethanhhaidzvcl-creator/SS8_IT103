const fastChargingRate = 4500;
const waitingQueue = ['29A-112.33', '30E-889.12', '51K-678.99'];

const nextVehicle = waitingQueue.pop();
console.log('Xe duoc dieu phoi vao sac:', nextVehicle);

const completedSessionsKwh = [45.2, 30.5, 62.8, 28.0];
let totalKwh = 0;

for (let i = 0; i < completedSessionsKwh.length; i++) {
  totalKwh += completedSessionsKwh[i];
}

const totalRevenue = totalKwh * fastChargingRate;
console.log('Tong san luong:', totalKwh, 'kWh');
console.log('Tong doanh thu:', totalRevenue, 'VND');