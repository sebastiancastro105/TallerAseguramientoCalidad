function convertirGradosFahrenheit(temperaturaCentigrados){

    let temperaturaFahrenheit = 0
    let temperaturaNumero = parseInt(temperaturaCentigrados);

    temperaturaFahrenheit = 9/5 * temperaturaNumero + 32

    return temperaturaFahrenheit + '°F'

}

 module.exports = convertirGradosFahrenheit