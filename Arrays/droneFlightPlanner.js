// Pramp Problem

function calcDroneMinEnergy(route) {
  let minEnergyReq = 0;
  let prevPos = route[0][2];
  let totalEnergy = 0;
  for (let row = 1; row < route.length; row++) {
    let currentPos = route[row][2];
    if (prevPos > currentPos) {
      totalEnergy += prevPos - currentPos;
    }
    else {
      totalEnergy -= currentPos - prevPos;
    }

    if (totalEnergy < 0) {
      minEnergyReq += Math.abs(totalEnergy);
      totalEnergy = 0;
    }
    prevPos = currentPos;
  }
  return minEnergyReq;
}
//                                e: 0  minEnergyReq: 5
//input:  route = [ [0,   2, 10], 0
  //                [3,   5,  0], 10
    //              [9,  20,  6], 4
      //            [10, 12, 15], 0
        //          [10, 10,  8] ] 7
                           //   15,  0




// 10 cost:0   e:5
// 0  cost:-10 e:15
// 6  cost:6   e:9
// 15 cost:9   e:0
// 8  cost:-7  e:7

// minEnergyReq = 5
// 10 cost:0  e:0
// 0 cost:-10 e:10
// 6 cost:6   e:4
// 15 cost:9  e:0  minEnergyReq += 5
// 8 cost:-7  e:7
// 16 cost:8   e:0. minEnergyReq += 1


// 5 cost: 0   e:8
// 8 cost: 3   e:5
// 4 cost -4   e:9
// 10 cost: 6  e:3
// 13 cost: 3  e:0
// 7 cost: -6  e:6
// 3 cost: -4. e:10
/*
You’re an engineer at a disruptive drone delivery startup and your CTO asks you to come up with an efficient algorithm that calculates the minimum amount of energy required for the company’s drone to complete its flight. You know that the drone burns 1 kWh (kilowatt-hour is an energy unit) for every mile it ascends, and it gains 1 kWh for every mile it descends. Flying sideways neither burns nor adds any energy.

Given an array route of 3D points, implement a function calcDroneMinEnergy that computes and returns the minimal amount of energy the drone would need to complete its route. Assume that the drone starts its flight at the first point in route. That is, no energy was expended to place the drone at the starting point.

For simplicity, every 3D point will be represented as an integer array whose length is 3. Also, the values at indexes 0, 1, and 2 represent the x, y and z coordinates in a 3D point, respectively.

Explain your solution and analyze its time and space complexities.

Example:

input:  route = [ [0,   2, 10],
                  [3,   5,  0],
                  [9,  20,  6],
                  [10, 12, 15],
                  [10, 10,  8] ]

output: 5 # less than 5 kWh and the drone would crash before the finish
          # line. More than `5` kWh and it’d end up with excess energy
*/
