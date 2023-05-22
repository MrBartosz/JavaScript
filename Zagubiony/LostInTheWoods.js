function determineOutcome(dimensions, startCoord, directions) {
    const compass = ['N', 'E', 'S', 'W'];
    let currentDirection = compass.indexOf(directions[0]);
    let currentCoord = startCoord

    for(let i = 1; i < directions.length; i++) {
        let move = directions[i];
        
        if (typeof move === 'string') {
            currentDirection = (currentDirection + (move === 'R' ? 1 : -1) + 4) % 4;
        } else {
            switch(compass[currentDirection]) {
                case 'N':
                    currentCoord[1] += move;
                    break;
                case 'E':
                    currentCoord[0] += move;
                    break;
                case 'S':
                    currentCoord[1] -= move;
                    break;
                case 'W':
                    currentCoord[0] -= move;
                    break;
            }
        }
    }

    let isSafe = currentCoord[0] < 0 || currentCoord[1] < 0 || currentCoord[0] > dimensions[0] || currentCoord[1] > dimensions[1];
    return [currentCoord, isSafe];
}

console.log(determineOutcome([1000, 1000], [245, 656], 
    ['N', 'L', 124, 'R', 45, 'R', 65, 'R', 87, 'R', 187])); // [[-1, 614], true]

console.log(determineOutcome([1000, 1000], [400, 400], 
    ['N', 100, 'L', 100, 'L', 100, 'L', 100]));  // [[300, 500], false]

console.log(determineOutcome([1000, 1000], [400, 400], 
    ['N', 100, 'L', 100, 'L', 200, 'L', 100])); // [[200, 600], false]
console.log(determineOutcome([1000, 1000], [500, 500], 
    ['N', 500, 'L', 1000])); // [[-500, 1000], true]
    console.log(determineOutcome([1000, 1000], [500, 500], 
        ['S', 200, 'S', 300, 'R', 1000])); // [[-500, 0], true]