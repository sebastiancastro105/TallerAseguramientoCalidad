const palabrasPalindromas = require('./palabrasPalindromas')

test('Caso de prueba oso', ()=>{
    expect(palabrasPalindromas('oso')).toBe(true)
})

test('Caso de prueba casa', ()=>{
    expect(palabrasPalindromas('casa')).toBe(false)
})

test('Caso de prueba cadena vacia', ()=>{
    expect(palabrasPalindromas('')).toBe(true)
})

test('Caso de prueba mayuscula', ()=>{
    expect(palabrasPalindromas('Ana')).toBe(true)
})