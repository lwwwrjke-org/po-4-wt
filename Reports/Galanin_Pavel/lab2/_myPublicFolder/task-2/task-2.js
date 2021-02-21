function isNumber(x) {
    if (x.replace(/\d/g, '').length) {
        return 1;
    }
    else {
        return 0;
    }
}

while (1) {
    //input number of storeys
    let NumOfStoreys = prompt(
        "Number of storeys\n"
        + "(количество этажей)\n"
        + "(1-25)",
        10
    );
    if (isNumber(NumOfStoreys)) {
        alert("Input - not a number\n(ввод - не число)");
        break;
    }
    else if (!(1 <= NumOfStoreys && NumOfStoreys <= 25)) {
        alert(
            "Number of storeys not in set [1; 25]\n"
            + "(Количество этажей не во множестве [1; 25])"
        );
        break;
    }

    //input number of entrances
    let NumOfEntrances = prompt(
        "Number of entrances\n"
        + "(количество подъездов)\n"
        + "(1-10)",
        3
    );
    if (isNumber(NumOfEntrances)) {
        alert("Input - not a number\n(ввод - не число)");
        break;
    }
    else if (!(1 <= NumOfEntrances && NumOfEntrances <= 10)) {
        alert(
            "Number of entrances not in set [1; 10]\n"
            + "(Количество подъездов не во множестве [1; 10])"
        );
        break;
    }

    //input number of entrances
    let NumOfApartmentOnTheSite = prompt(
        "Number of entrances\n"
        + "(количество квартир на площадке)\n"
        + "(1-20)",
        4
    );
    if (isNumber(NumOfApartmentOnTheSite)) {
        alert("Input - not a number\n(ввод - не число)");
        break;
    }
    else if (!(1 <= NumOfApartmentOnTheSite && NumOfApartmentOnTheSite <= 20)) {
        alert(
            "Number of entrances on the site not in set [1; 20]\n"
            + "(Количество квартир на площадке не во множестве [1; 20])"
        );
        break;
    }

    //input apartment number
    let ApartmentNumber = prompt("Apartment number\n(номер квартиры)", 51);
    if (isNumber(ApartmentNumber)) {
        alert("Input - not a number\n(ввод - не число)");
        break;
    }

    //task
    let result = ApartmentNumber / NumOfStoreys / NumOfApartmentOnTheSite;
    result = Math.ceil(result);

    let msg = `Apartment number ${ApartmentNumber} at the entrance number <<${result}>>\n`
        + `(Квартира номер ${ApartmentNumber} в подъезде номер <<${result}>>)`;
    if (result <= NumOfEntrances) {
        alert(msg);
    }
    else {
        alert(
            `${msg}\n\n`
            + `But the entrance number ${result} <<not build>>\n`
            + `(Но подъезд номер ${result} <<не построен>>)`
        );
    }

} //end infinity while
