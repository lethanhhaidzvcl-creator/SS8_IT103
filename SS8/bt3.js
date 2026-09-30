portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06']
portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE']
portPowersKw = [250, 150, 60, 250, 60, 150]

const indexS01 = portIds.indexOf('S01');
portStatuses[indexS01] = 'CHARGING';

const indexS03 = portIds.indexOf('S03'); 
portStatuses[indexS03] = 'AVAILABLE';

let availableCount = 0;

for(let i = 0; i < portStatuses.length ; i++){
    if (portStatuses[i]==='AVAILABLE') {
        availableCount++
    }
}

let maxPower = 0;
let maxPort ='';

for (let i = 0; i < portIds.length; i++) {
    if (portStatuses[i]==='AVAILABLE' && portPowersKw[i] > maxPower) {
        maxPower= portPowersKw[i];
        maxPort = portIds[i];
    }
}

console.log('===== BAO CAO TRAM SAC ====='); 
for (let i = 0; i < portIds.length; i++) { 
    console.log( portIds[i] + ': ' + portStatuses[i] + ' - ' + portPowersKw[i] + ' kW' ); 
}

console.log('Tong so tru AVAILABLE:', availableCount); 
console.log('Tru AVAILABLE co cong suat lon nhat:', maxPort); 
console.log('Cong suat:', maxPower, 'kW');