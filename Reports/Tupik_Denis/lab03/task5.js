function task5(){
    function flatten(input){
        let output = []

        function flat(middle){
            for (let array of middle){
                if (Array.isArray(array)){
                    flat(array)
                } else{
                    output.push(array)
                }
            }
        }
        
        flat(input)
        return output
    }

    let result = flatten([1, [2], [3, [4]]])
    alert(result)
}

document.getElementById('task5').onclick = task5