function manhattanDist(num) {
    let squareRoot = Math.ceil(Math.sqrt(num));
    squareRoot = squareRoot % 2 === 1 ? squareRoot : squareRoot + 1;

    // Get the max corner
    const cornerNum = squareRoot * squareRoot;

    // Get halfway from corner to middle of side
    const halfWay = Math.floor(squareRoot / 2);

    // Get the difference from one corner to the next
    const edgeDiff = halfWay * 2;

    // Just the corners
    const cornerArr = [cornerNum, cornerNum - edgeDiff, cornerNum - edgeDiff * 2, cornerNum - edgeDiff * 3];

    // Just the middle of each side
    const mids = [cornerArr[0] - halfWay, cornerArr[1] - halfWay, cornerArr[2] - halfWay, cornerArr[3] - halfWay];

    let notInMiddle = true;
    let steps = 0;

    while (notInMiddle) {

        for (let i = 0; i < 4; i++) {
            if (num < cornerArr[i] && num > mids[i]) {
                num--;
                steps++;
            } else if (num > cornerArr[i] && num < mids[i]) {
                num++;
                steps++;
            } else if (num === cornerArr[i]) {
                num--;
                steps++;
            } else if (num === mids[i]) {
                notInMiddle = false;
            }
        }

    }

    return steps + halfWay;

}

manhattanDist(265149);

function spiralAdd(num) {

    const spiral = [];

    let x = 0;
    let y = 0;
    let val = 1;
    let side = 1;
    let layer = 1;
    let edgeDist = 1;
    let position = 0;

    while (val <= num) {

        position++;
        edgeDist = layer - 1;

        const o = {};

        o.val = val;
        o.layer = layer;
        o.x = x;
        o.y = y;

        if (side === 1 && layer !== 1) {
            o.x = Math.floor(layer / 2);
            o.y = position - edgeDist / 2;
        } else if (side === 3) {
            o.x = Math.floor(layer / 2) * -1;
            o.y = ((position - edgeDist / 2) * -1);
        }

        if (side === 2) {
            o.x = ((position - edgeDist / 2) * -1);
            o.y = Math.floor(layer / 2);
        } else if (side === 4) {
            o.x = position - edgeDist / 2;
            o.y = Math.floor(layer / 2) * -1;
        }

        const filtered = spiral.filter((item) => {
            if (Math.abs(item.x - o.x) <= 1 && Math.abs(item.y - o.y) <= 1) {
                return item;
            }
        })

        let reduced;

        if (filtered.length > 0) {
            reduced = filtered.reduce((a, b) => {
                return {val: a.val + b.val};
            }, {val: 0})
        }

        if (typeof reduced !== 'undefined') {
            val = reduced.val;
            o.val = val;
        };

        spiral.push(o);

        const numOfLayer = spiral.filter((item) => {
            return item.layer === layer;
        })

        if (numOfLayer.length >= (layer - 1) * 4) {
            layer += 2;
            side = 1;
            position= 0;
        } else {
            if (position === edgeDist) {
                position = 0;
                side++;
            }
        }

    }

    return spiral;

}

spiralAdd(265149);
