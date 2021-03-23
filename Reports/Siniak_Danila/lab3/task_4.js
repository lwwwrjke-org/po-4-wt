function TASK_4()
{
    function union(arrays) {
        let a = [],
            obj = {};
    
        for (let i = 0; i < arrays.length; i++) {
          a = a.concat(arrays[i]);
        }
    
        for (let i = 0; i < a.length; i++) {
          let item = a[i];
          obj[item] = true;
        }
        return Object.keys(obj);
      }
    
      alert(union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]) );
}