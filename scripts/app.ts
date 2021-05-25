import {update} from "./modules/update.js";

let index: number = -1;

function next() {
    switch (index) {
        case 0:
            index++;
            break;
        case 1:
            index++;
            break;
        case 2:
            index++;
            break;
        default:
            index = 0;
            break;
    }
    update(index);
}

function autoRefresh(t: number) {
    setTimeout("next();autoRefresh(25000)", t);
}

document.getElementById("output")!.addEventListener('click', function () {
    next();
})

document.getElementById("value")!.addEventListener('click', function () {
    next();
})

next();