function task1() 
{
    function range(start, finish, step) {
        if (typeof step !== 'number') step = 1;
        if ((start > finish && step > 0) || (start < finish && step < 0) || step === 0) return;
        var a = [];
        if (step > 0) for (var i = start; i <= finish; i += step) a.push(i);
        else for (var i = start; i >= finish; i += step) a.push(i);
        return a;
    }

    alert(range(5, 2, -1));
}