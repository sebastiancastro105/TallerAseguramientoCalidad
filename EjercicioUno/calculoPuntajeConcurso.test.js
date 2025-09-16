const calculoPuntajeConcurso = require('./calculoPuntajeConcurso')

const respuesta = [true, true, true, false, false];

test('Jugador con 3 correctas y 2 incorrectas',()=>{
    expect(calculoPuntajeConcurso(respuesta, 5)).toBe(26)
})

const respuesta2 = [true, true, true, true, true];

test('Jugador con todas correctas',()=>{
    expect(calculoPuntajeConcurso(respuesta2, 5)).toBe(55)
})

const respuesta3 = [false, false, false, false, false];

test('Jugador con todas incorrectas',()=>{
    expect(calculoPuntajeConcurso(respuesta3, 5)).toBe(0)
})

const respuesta4 = [false, false, false, false, false];


test('Jugador sin respuestas',()=>{
    expect(calculoPuntajeConcurso(respuesta4, 5)).toBe(0)
})

const respuesta5 = [true, false, false, false, false];

test('1 correcta y nada más',()=>{
    expect(calculoPuntajeConcurso(respuesta5, 5)).toBe(2)
})