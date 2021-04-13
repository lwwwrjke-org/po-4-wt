function task4(){
    function union(...arrays) {
        var dictionary = [], key = {}

        for (var i = 0; i < arrays.length; i++) {
            dictionary = dictionary.concat(arrays[i]);
        }

        for (let i = 0; i < dictionary.length; i++) {
            let item = dictionary[i];
            key[item] = true;
        }
        return Object.keys(key);
    }

    alert(union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]));
    union()
}

document.getElementById('task4').onclick = task4