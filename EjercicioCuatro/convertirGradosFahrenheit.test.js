const convertirGradosFahrenheit = require('./convertirGradosFahrenheit')

test('Caso prueba temperatura 0 grados centigrados', ()=>{
    expect(convertirGradosFahrenheit('0°C')).toBe('32°F')
})

test('Caso prueba temperatura 100 grados centigrados a 42 Fahrenheit', ()=>{
    expect(convertirGradosFahrenheit('100°C')).toBe('212°F')
})

test('Caso prueba temperatura 100 grados centigrados a 42 Fahrenheit', ()=>{
    expect(convertirGradosFahrenheit('-40°C')).toBe('-40°F')
})