let arr = [2, 4, 1, -5, 54, 32, 14]

function minNum(arr) {
    arr.sort((a, b) => {
        return a - b
    })
    alert(arr[0])
}

let users = [
    {name: "John", surname: "Smith", id: 1},
    {name: "Pete", surname: "Hunt", id: 2},
    {name: "Mary", surname: "Key", id: 3}
];

function mapFunc(object) {
    let usersMapped = object.map((v) => {
        return {
            fullName: `${v.name} ${v.surname}`,
            id: v.id,
        }
    })
    console.log(usersMapped)
}



function Calculator(str) {
    alert(eval(str))
}

