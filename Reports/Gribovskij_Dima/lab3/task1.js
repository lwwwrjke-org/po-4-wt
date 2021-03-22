function task1() {
    function range(left, right, step = 1) {
        let result = [];
        let defstep = prompt("With default step?\n1-yes, 0-no", 1);
        if (defstep == 0) {
            step = parseInt(prompt("New step\nstep = ", 1));
        }
        if (step > 0) {
            for (let i = left; i <= right; i += step) {
                result.push(i);
            }
        } else if (step < 0) {
            for (let i = left; i >= right; i += step) {
                result.push(i);
            }
        } else {
            alert("Invalid step!");
        }
        
        return result;
    }

    let left  = prompt("Left border:\nleft = ", 1);
    left      = parseInt(left);
    let right = prompt("Right border:\nright = ", 1);
    right     = parseInt(right);
    alert(range(left,right));
}