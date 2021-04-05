function TASK_5(){
    (function () {
        let res = flatten([1, [2], [3, [4]]]);
        alert(res);
      
        function flatten(arr) {
          let res = [];
      
          (function flattening(arr) {
            for (let i = 0; i < arr.length; i++) {
              if (arr[i] instanceof Array) {
                flattening(arr[i]);
              } else {
                res.push(arr[i]);
              }
            }
          }(arr));
      
          return res;
        }
      })();
      
}