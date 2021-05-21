function convertFahrToCelsius(F) {
    let quote = '';
    let calc = typeof (F);
    if (typeof (F) === 'string' || typeof (F) === 'number') {
      let convNum = Number(F);
      let C = (convNum - 32) * 5 / 9;
      let cel = C.toFixed(4);
      return cel;
    }
    if (toString.call(F) === "[object Array]") {
  
      let arrayVal = JSON.stringify(F);
      return quote = `${arrayVal} is not a valid number but an Array.`
    }
    if (F instanceof Object) {
      let objectVal = JSON.stringify(F);
      return results = `${objectVal} is not a valid number but an object.`
    }
    else {
      quote = `${JSON.stringify(F)} is not a valid number but a/an ${calc}.`
      return endPoint;
    }
  }
  
  console.log(convertFahrToCelsius(0))
  console.log(convertFahrToCelsius("0"))
  console.log(convertFahrToCelsius([1,2,3]))
  console.log(convertFahrToCelsius({temp: 0}))

  
  
  
  function checkYuGiOh(num) {
    try {
      let arr = [...new Array(Number(num))].map((_value, index) => {
        
        index++;
       
        const [_2, _3, _5] = ["yu", "gi", "oh"];
       
        if (index % 2 === 0 && index % 3 === 0 && index % 5 === 0)
          return _2 + "-" + _3 + "-" + _5;      
        else if (index % 2 === 0 && index % 3 == 0) return _2 + "-" + _3;
        else if (index % 2 === 0 && index % 5 === 0) return _2 + "-" + _5;
        else if (index % 3 === 0 && index % 5 === 0) return _3 + "-" + _5;        
        else if (index % 2 === 0) return _2;
        else if (index % 3 === 0) return _3;
        else if (index % 5 === 0) return _5;
        return index;
      });
      return arr;
    } catch (err) {
      return `'${num}' is an invalid parameter`;
    }
  }
   
  console.log(checkYuGiOh(10));
  console.log(checkYuGiOh(5));
  