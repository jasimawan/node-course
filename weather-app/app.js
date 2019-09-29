const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')


const address = process.argv[2]

if(!address){
    console.log('Please provide an address.')
}else{
    geocode(address, (error, {latitude, longitude, location}) => {
        if(error){
            return console.log(error)
        }
        forcast(latitude,longitude, (error, myForcastData) => {
            if(error){
                return  console.log(error)
            }
            console.log(location)
            console.log(myForcastData)
    })
    })
}
