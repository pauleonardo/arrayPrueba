// const m = 4
// const C = [123,'1',444,'1']
// const sum = 1;

const search = ( sum , arr ) => {
  //ORDERNANDO ARRAY
  arr = arr.sort(( a, b) => {return a - b });

  let result = false
  let i = 0
  let value
  let newArr

  //VALIDAR STRING PARA SUM
  if( typeof sum ==='string'){
    console.error('no acepta string')
    return false;
  }

  while( i <= arr.length ) {
    newArr = arr.slice(0);
    value = (sum) - (arr[i])

    if (  ( (value % 2) === 0 || (value % 3) === 0 || (value % 5) === 0)  || (value % value) === 0 && value < 10  ) {
      newArr.splice(i,1)
    }

    result = binarySearch( value, newArr );

    if(result){
      break;
    }

    i++;
  }

  return result;

}

const binarySearch = (element, arr) => {

    let max = arr.length
    let last, position = 0,
        delta = 0

    do {
        last = position;

        if (parseInt(arr[position]) > parseInt(element)) {
            max = position + 1
            position -= delta
        } else if (parseInt(arr[position]) === parseInt(element)) {
            return true
        }

        delta = Math.floor((max - position) / 2)
        position += delta

    }while (last !== position)

    return false

};

export default search;
