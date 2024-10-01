type HanoiTower = {
    originRod: number[]
    tempRod: number[]
    endRod: number[]
}

enum HanoiTowerPos {
    origin = "origin",
    temp = "temp",
    end = "end"
}

function createHanoiTower(amount: number) {
    const originRodInput = [] as number[]
    for(let i = amount; i > 0; i--) {
        originRodInput.push(i)
    }
    return { originRod: originRodInput, tempRod: [], endRod: []}
}

function moveHanoi(tower: HanoiTower, begin: HanoiTowerPos, end: HanoiTowerPos) {
    let beginRod =  tower.endRod;
    let endRod =  tower.endRod;
    if(begin = HanoiTowerPos.origin) { beginRod = tower.originRod }
    else if(begin = HanoiTowerPos.temp) { beginRod = tower.tempRod };
    if(end = HanoiTowerPos.origin) { endRod = tower.originRod }
    else if(end = HanoiTowerPos.temp) { endRod = tower.tempRod };

    endRod.push(beginRod[beginRod.length-1])
    beginRod.pop()
}

function sortHanoiTower(tower: HanoiTower) {
    if(tower.originRod.length === 1) {
        
    }
}


const startingHanoiTower = createHanoiTower(3)

moveHanoi(startingHanoiTower, HanoiTowerPos.origin, HanoiTowerPos.end)
moveHanoi(startingHanoiTower, HanoiTowerPos.origin, HanoiTowerPos.temp)

console.log("Starting rod:")
for(let i = 0; i < startingHanoiTower.originRod.length; i++) {
    console.log(startingHanoiTower.originRod[i])
}
console.log("Temporary rod:")
for(let i = 0; i < startingHanoiTower.tempRod.length; i++) {
    console.log(startingHanoiTower.tempRod[i])
}
console.log("End rod:")
for(let i = 0; i < startingHanoiTower.endRod.length; i++) {
    console.log(startingHanoiTower.endRod[i])
}

//sortHanoiTower(startingHanoiTower)
moveHanoi(startingHanoiTower, HanoiTowerPos.origin, HanoiTowerPos.end)
//console.log(anExampleVariable)