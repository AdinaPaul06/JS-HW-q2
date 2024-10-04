function EmptyBoxes(boxes) {
    let countOfEmptyBoxes = 0;
    let resultArray = [];

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] !== 0) {
            resultArray.push(boxes[i]);
        } else {
            countOfEmptyBoxes++;
        }
    }

    for (let i = 0; i < countOfEmptyBoxes; i++) {
        resultArray.push(0);
    }

    return {
        modifiedArray: resultArray,
        emptyBoxCount: countOfEmptyBoxes
    };
}
const Boxes = [1, 0, 2, 0, 3, 4, 0, 5];
const result = EmptyBoxes(Boxes);

console.log("Modified Array:", result.modifiedArray); 
console.log("Count of Empty Boxes:", result.emptyBoxCount);