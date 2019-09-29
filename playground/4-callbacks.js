setTimeout(() => {
    console.log("Two seconds are up")
}, 2000)

const names = ['Jasim', 'Saqib', 'Noman']
const shortNames = names.filter((name) => {
            return name.length <=4
})

const geocode = (adress, callback ) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

const add = (arg1 , arg2 , callback) => {
    setTimeout(() => {
        sum = arg1 + arg2;
        callback(sum)
    }, 2000)
}


geocode("Islamabad", (data) => {
    console.log(data)
})

add(1, 4, (sum) => {
    console.log(sum)
})


