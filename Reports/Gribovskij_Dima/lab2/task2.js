function task2() {
    while(true) {
        //Num of floors
        let floors = prompt("Number of floors in house(1-25)\nfloors = ", 0);
        if (isNaN(floors)) {
            alert("Invalid input(not a number)!\n");
            break;
        }

        floors = parseInt(floors);
        if (floors < 1 || floors > 25) {
            alert("The number of floors on the site goes beyond 1-25!\n");
            break;
        }
        //num of entrances
        let entrances = prompt("The number of entrances(1-10)\nentrances = ", 0);
        if (isNaN(entrances)) {
            alert("Invalid input(not a number)!\n");
            break;
        }

        entrances = parseInt(entrances);
        if (entrances < 1 || entrances > 10) {
            alert("The number of entrances goes beyond 1-10!\n");
            break;
        }
        //num of apartments
        let ApartmentsOnFloor = prompt("The number of apartments on the site(1-20)\napartmens = ", 0);
        if (isNaN(ApartmentsOnFloor)) {
            alert("Invalid input(not a number)!\n");
            break;
        }

        ApartmentsOnFloor = parseInt(ApartmentsOnFloor);
        if (ApartmentsOnFloor < 1 || ApartmentsOnFloor > 20) {
            alert("The number of apartments on the site goes beyond 1-20!\n");
            break;
        }

        SearchApartment = prompt("Number of apartment to search\napartment = ", 0);
        if (isNaN(SearchApartment)) {
            alert("Invalid input!\n");
            break;
        }
        // serch for entrance
        SearchApartment = parseInt(SearchApartment);
        let ans = SearchApartment / floors / ApartmentsOnFloor;
        ans = Math.ceil(ans);

        if (ans <= entrances) {
            alert(`Apartment ${SearchApartment} must be in entrance: ${ans}`);
        } else {
            alert(`Apartment ${SearchApartment} must be in entrance ${ans}\n` 
            + `But entrance: ${ans} doesn't exist`);
        }
    }
}

