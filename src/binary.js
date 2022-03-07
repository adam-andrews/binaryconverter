export function convert(arr) {
    const rev = arr.reverse()
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        if (rev[i] === "1"){ 
            value += 2**i
        }
        else if (rev[i] !== "0") {

        value = "ERROR"
        break
      }
    }
    return value
}

const result = convert([1,1,1,1,0])
console.log(result)