const contadorVocales = require('./contadorVocales')

test('Caso prueba contar variables con vacales', ()=>{
    expect(contadorVocales('hola')).toBe(2)
})

test('Caso prueba pabla sin vocales', ()=>{
    expect(contadorVocales('rhythm')).toBe(0)
})

test('Caso prueba palabra tildes y mayusculas', ()=>{
    expect(contadorVocales('Educación')).toBe(5)
})