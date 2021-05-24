function task6()
{
    let f = (args) =>
    {
        let array = [];
        let repeats = [];

        for (let value of args)
            repeats[value] = (repeats[value] || 0) + 1;

        for(let i in args)
            if ( repeats[ args[i] ] < 3 )
                array.push(args[i]);

        return (`Массив:[`+ args +`]`+`\nРезультат:[`+ array +`]`);
    }
    console.log(f([1, 2, 6, 3, 7, 3, 9, 4, 6, 3, 8, 3]));
    console.log(f("maloommkkhhhaamu"));
}