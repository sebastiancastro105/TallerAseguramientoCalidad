function promedioNotas(notas){
    let sumaNotas = 0
    
    for (const nota of notas) {
        sumaNotas += nota
    }

    if(notas.length === 0)
        return 0

    return sumaNotas / notas.length
}

 module.exports = promedioNotas