function TASK_2() 
{
    var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    

    function sorting(a, comporator) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (comporator(a[i], a[i + 1])) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }
    
    function num_compare(left, right) {
        return left > right;
    }
    
  
    sorting(a, num_compare);   
    alert(a);
  
    
    
}
