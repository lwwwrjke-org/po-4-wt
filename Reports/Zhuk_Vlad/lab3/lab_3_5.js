function lab_3_5() {
    function flatten(array) {
        let merged = [].concat.apply([], array);
        return merged;
    }
    array = [1, [2], [3, [4]]]
    alert(flatten(array));
} 