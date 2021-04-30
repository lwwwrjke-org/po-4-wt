function f(x) {
    if ((typeof(x) == "string") || (typeof(x) == "object" && x.length > 0)) {
        var obj = {};
        for (var i = 0; i < x.length; i++) {
            if (x[i] in obj) {
                obj[x[i]] += 1;
            } else {
                obj[x[i]] = 1;
            }
        }
        console.log(obj);

        var result = [];
        for (var key in obj) {
            if (obj[key] >= 0 && obj[key] < 3) {
                result.push(key);
            }
        }

        return result;
    } else {
        console.log('other type');
        return [];
    }
}

function main_task6() {
    alert(
        `f([1, 2, 1, 3, 1, 3, 1, 4]) = [${f([1, 2, 1, 3, 1, 3, 1, 4])}]\n\n` +
        `f("mama ramu") = [${f("mama ramu")}]`
    );
}

document.getElementById("task6").onclick = main_task6;