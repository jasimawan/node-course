const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiamFzaW1hd2FuIiwiYSI6ImNrMDZtNzhwczMyMzgzaXFkODR5ZXZvcGoifQ.jqk027Hu4vW1CcnZ3LC9yA&limit=1'
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location serices', undefined)
        }else if(body.features.length === 0){
            callback('No Matching result, Try again with corrent location name.', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode