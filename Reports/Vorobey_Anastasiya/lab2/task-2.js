  let button = document.querySelector('.js-button');
  
      while(true){
        var entrance = prompt("Введите число подъездов (от 1 до 10): ");
        var floors = prompt("Введите этажность (от 1 до 25): ");								  
        var countFloors = prompt("Введите число квартир на лестничной площадке (от 1 до 20): ");
      
        if (entrance >= 1 && entrance <= 10 && floors >= 1 && floors <= 25 && countFloors >= 1 && countFloors <= 20) {		
          alert("Всего " + (entrance * floors * countFloors) + " квартир.");                   			
          var number = prompt("№ кв");											 
          
          if ((entrance * floors * countFloors) < number){
            alert("Некорректный ввод данных.");                
            continue;
          }
          alert(`Квартира находится в ${Math.ceil(number / (floors * countFloors))} подъезде`);	 
          break;                                                            
        }                                                        
        else {
          alert("Некорректный ввод данных.");
        }
      }