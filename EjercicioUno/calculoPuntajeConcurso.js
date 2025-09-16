function calculoPuntajeConcurso(respuestas, totalPreguntas){
    let totalPuntaje = 0;
    let contadorRespuestasCorrectas = 0;
    let contadorSinRespuestas = 0;


    for (let i = 0; i < respuestas.length; i++) {
        
        if(respuestas[i] === true){
            totalPuntaje += 10;
            contadorRespuestasCorrectas += 1
        }else if (respuestas[i] === false)
             totalPuntaje -= 2
        else
            contadorSinRespuestas +=1
    }

    if(contadorRespuestasCorrectas === totalPreguntas)
        totalPuntaje += 5 
    

     if(totalPuntaje < 0 || (contadorSinRespuestas === totalPreguntas))
        return 0
     
    return totalPuntaje
    
}

 module.exports = calculoPuntajeConcurso;