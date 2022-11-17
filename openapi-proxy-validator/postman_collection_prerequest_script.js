// due to prism decompression error. Prism has aldready unzipped the response so postman wont have to
pm.request.addHeader({
    key: 'Accept-Encoding',
    value: ''
});

switch (pm.request.method) {
    case 'GET':
        expectedHTTPStatusCode = 200
        break
    case 'POST':
        expectedHTTPStatusCode = 201
        break
     case 'PATCH':
        expectedHTTPStatusCode = 204
        break
         case 'DELETE':
        expectedHTTPStatusCode = 204
        break
    default:
        break
}
