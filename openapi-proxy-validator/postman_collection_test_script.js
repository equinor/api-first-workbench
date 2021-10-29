/*
* To be place in the Test tab at the collection level 
* The sl-violations HTTP response header is populate from Prism with any disrepancies from the OpenAPI contract
* This code converts the errors from Prism, into failed tests in Postman
* Prism documentation: https://meta.stoplight.io/docs/prism
* 
* 
*/
const errorString = pm.response.headers.get('sl-violations')

if (!errorString)
    return

const errors = JSON.parse(errorString)

for (let i = 0; i < errors.length; i++) {
    let current = errors[i]
    // dont validate responses when its client error
    if(pm.response.code >= 400 && pm.response.code <= 499 && current.location[0] === 'response') 
        continue

    if (current.message.includes('application/octet'))
        continue

     pm.test(pm.info.requestName, function () {
        let output = 'in ['+ current.location.join(' -> ')+'], '  
        output += 'subject ' + current.message
        var error = new Error(output)
        error.name = current.severity
        throw error
        
    })
}