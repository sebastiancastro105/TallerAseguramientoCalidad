const promedioNotas = require('./promedioNotas')

let vectorNotas = [3,4,5]

test('Promedio de notas caso exitoso', ()=>{
    expect(promedioNotas(vectorNotas)).toBe(4)
})

let vectorNotasDos = [10]

test('Promedio una sola nota', ()=>{
    expect(promedioNotas(vectorNotasDos)).toBe(10)
})

let vectorNotasTres = []

test('Promedio lista vacia', ()=>{
    expect(promedioNotas(vectorNotasTres)).toBe(0)
})

let vectorNotasCuatro = [2.5,3.5]

test('Promedio notas decimales', ()=>{
    expect(promedioNotas(vectorNotasCuatro)).toBe(3)
})