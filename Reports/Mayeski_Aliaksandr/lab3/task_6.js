function TASK_6() {
    function f(args)  {
        var res = [];
        var repeats = [];

        if (!(args instanceof Array)) {
            args = args.split('');
        }

        for (var value of args) {
            repeats[value] = (repeats[value] || 0) + 1;
        }

        for (var i in args) {
            if (repeats[args[i]] < 3) {
                res.push(args[i]);
            }
        }
        return res;
    }
    alert(f("mama ramu"))
    alert(f([1, 2, 1, 3, 1, 3, 1, 4]))
    
        
}