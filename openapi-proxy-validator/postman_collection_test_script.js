/*
* To be place in the Test tab at the collection level 
* 
* Test 1: Verify expectedHTTPStatusCode defined in endpoint pre-request script matches response
*
* Test 2: Create dynamic test in case OpenAPI validating proxy returns any errors
* The sl-violations HTTP response header is populate from Prism with any disrepancies from the OpenAPI contract
* This code converts the errors from Prism, into failed tests in Postman
* Prism documentation: https://meta.stoplight.io/docs/prism
* 
* 
*/
if (typeof expectedHTTPStatusCode ==='undefined'){
      pm.test('Configuration: expectedHTTPStatusCode', function () {
        pm.expect.fail('Endpoint has not defined a value for expectedHTTPStatusCode in pre-request test')
    });  
}else {
    pm.test('Request matches expected HTTP status code ' + expectedHTTPStatusCode, function () {
        pm.response.to.have.status(expectedHTTPStatusCode);
    });
}

const errorString = pm.response.headers.get('sl-violations')

if (!errorString){
    if (pm.request.url.getHost().indexOf('prism')!==-1){
        pm.test('Request validated according to API contract through Prism', function () {
            pm.expect(true).to.eql(true,'')      
        });    
        pm.test('Response validated according to API contract through Prism', function () {
            pm.expect(true).to.eql(true,'')      
        });   
    }
    return;
}

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

