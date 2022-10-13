/**
 * El departamento de Seguridad de Transito de Barranquilla, desea saber de
 * los n autos que entrar a la ciudad, cuantos entran con calcomanía de cada
 * color. Conociendo el último digito de la placa de cada automóvil se puede
 * determinar el color de la calcomanía utilizando la siguiente relación:
 * DIGITO COLOR
 * 1 o 2 Amarilla
 * 3 o 4 Rosa
 * 5 o 6 Roja
 * 7 u 8 Verde
 * 9 o 0 Azul
 */
const problem1 = () => {
    /**
     * Se simula la entrada de autos a la ciudad de Barranquilla a través de un ciclo repetitivo */
    /* Se crea un objeto que almacena la cantidad de autos que ingresan a la ciudad con cada color de calcomanía */
    const cars = [];
    const carsCalc = {amarilla: 0, rosa: 0, roja: 0, verde: 0, azul: 0};
    /* Se genera un número aleatorio entre 10 y 20 para simular la cantidad de autos que ingresan a la ciudad cada cierto tiempo */
    const carsNumber = Math.floor(Math.random() * 10) + 10;
    /* Se genera la placa de cada auto que ingresa a la ciudad */
    for (let i = 0; i < carsNumber; i++) {
        console.log('Ingresando auto a la ciudad');
        /* Se genera la placa del auto que ingresa a la ciudad. Esta placa es única */
        const plate = generatePlate(cars);
        /* Se extrae el último dígito de la placa del auto que ingresa a la ciudad */
        const lastDigit = plate[plate.length - 1];
        /* Se determina el color de la calcomanía del auto que ingresa a la ciudad */
        let color = '';
        switch (lastDigit) {
            case '1':
            case '2':
                carsCalc.amarilla++;
                color = 'amarilla';
                break;
            case '3':
            case '4':
                carsCalc.rosa++;
                color = 'rosa';
                break;
            case '5':
            case '6':
                carsCalc.roja++;
                color = 'roja';
                break;
            case '7':
            case '8':
                carsCalc.verde++;
                color = 'verde';
                break;
            case '9':
            case '0':
                carsCalc.azul++;
                color = 'azul';
                break;
        }
        /* Se imprime en consola la placa del auto que ingresa a la ciudad */
        console.log(`La placa del auto es: ${plate} y el color de la calcomanía es: ${color}`);
        /* Se almacena la placa del auto que ingresa a la ciudad */
        cars.push({plate, color});
    }

    console.log('----------------------------------------');
    console.log(`La cantidad de autos con calcomanía amarilla es: ${carsCalc.amarilla}`);
    console.log(`La cantidad de autos con calcomanía rosa es: ${carsCalc.rosa}`);
    console.log(`La cantidad de autos con calcomanía roja es: ${carsCalc.roja}`);
    console.log(`La cantidad de autos con calcomanía verde es: ${carsCalc.verde}`);
    console.log(`La cantidad de autos con calcomanía azul es: ${carsCalc.azul}`);
    console.log(`La cantidad de autos que ingresaron a la ciudad es: ${cars.length}`);
    console.log('--------------------------------------------');
}

/**
 * Esta función genera una placa de auto aleatoria. Pero esta placa es única.
 */
const generatePlate = cars => {
    /* Cada placas de auto tiene el siguiente formato: AAA-0000 donde AAA son letras y 0000 son números */
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    /* Se genera una letra aleatoria */
    const letter1 = letters.charAt(Math.floor(Math.random() * letters.length));
    const letter2 = letters.charAt(Math.floor(Math.random() * letters.length));
    const letter3 = letters.charAt(Math.floor(Math.random() * letters.length));
    /* Se genera un número aleatorio */
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    const number3 = Math.floor(Math.random() * 10);
    const number4 = Math.floor(Math.random() * 10);
    /* Se genera la placa del auto */
    const plate = `${letter1}${letter2}${letter3}-${number1}${number2}${number3}${number4}`;
    /* Se valida que la placa no exista */
    if (cars) {
        const car = cars.find(car => car.plate === plate);
        if (car) {
            return generatePlate(cars);
        }
    }
    /* Se retorna la placa del auto */
    return plate;
}

problem1();