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

/**
 * Un Zoólogo pretende determinar el porcentaje de animales que hay en las
 * siguiente categorias de edades: 0 a 1 año, de mas de 1 año y menos de 3 y
 * de 3 o mas años. El zoológico todavía no está seguro del animal que va
 * estudiar. Si se decide por elefantes solo tomará una muestra de 20 de ellos;
 * si se decide por jirafas, tomara 15 de muestras y si son chompancés tomará
 * 40.
 */
const problem2 = () => {
    /**
     * Se crea un objeto que almacena la cantidad de animales que hay en cada categoría de edad
     */
    const animals = [
        {name: 'Elefante', age: 1, quantity: 20},
        {name: 'Jirafa', age: 2, quantity: 15},
        {name: 'Chimpancé', age: 3, quantity: 40},
    ]

    /* Se generan edades aleatorias para el animal seleccionado. Para ello se le pregunta al usuario que animal desea estudiar */
    const animal = parseInt(prompt('¿Qué animal desea estudiar?\n1. Elefante\n2. Jirafa\n3. Chimpancé'));
    /* Se valida que el animal sea un número válido */
    if (isNaN(animal) || animal === undefined || animal <= 0 || animal > 3){
        alert('Opción no valida, inténtelo nuevamente')
        return;
    }
    /* Se extrae el animal seleccionado */
    const animalSelected = animals[animal - 1];
    /* Se genera un array con las edades aleatorias. Esto generar edades aleatorias entre 0 y 10, incluyendo decimales */
    const ages = [];
    for (let i = 0; i < animalSelected.quantity; i++) {
        ages.push(Math.round(Math.random() * 10));
        console.log(`El ${animalSelected.name} ${i + 1} tiene ${ages[i]} años`);
    }
    /* Ahora se filtran las edades para saber cuantas edades hay en cada categoría */
    const ages0to1 = ages.filter((age) => age >= 0 && age <= 1);
    const ages1to3 = ages.filter((age) => age > 1 && age < 3);
    const ages3toMore = ages.filter((age) => age >= 3);

    /* Se calcula el porcentaje de edades en cada categoría */
    const percentage0to1 = (ages0to1.length * 100) / animalSelected.quantity;
    const percentage1to3 = (ages1to3.length * 100) / animalSelected.quantity;
    const percentage3toMore = (ages3toMore.length * 100) / animalSelected.quantity;

    /* Se muestran los resultados */
    console.log(`El porcentaje de edades entre 0 y 1 año es de ${percentage0to1}%, entre 1 y 3 años es de ${percentage1to3}% y de 3 años o más es de ${percentage3toMore}%`)
}

/**
 * Una empresa se requiere calcular el salario semanal de cada uno de los n
 * obreros que laboran en ella. El salario se obtiene de la siguiente forma:
 * a. Si el obrero trabaja 40 horas o menos se le paga $20 por hora
 * b. Si trabaja mas de 40 horas se le paga $20 por cada una de las primeras
 * 40 horas y $25 por cada hora extra.
 */
const problem3 = () => {
    const workers = parseInt(prompt('¿Cuantos obreros desea registrar?'));
    /* Se valida que el número de obreros sea un número válido */
    if (isNaN(workers) || workers === undefined || workers <=0){
        alert('Valor no valido, inténtelo nuevamente ')
        return;
    }
    let total = 0;
    for (let i = 0; i < workers; i++) {
        const hours = parseInt(prompt(`¿Cuantas horas trabajo el obrero ${i+1}`));
        /* Se valida que el número de horas sea un número válido */
        if (isNaN(hours) || hours === undefined || hours <=0){
            alert('Valor no valido, inténtelo nuevamente ')
            return;
        }
        const salaryPerWorker = hours <= 40 ? hours * 20 : (40 * 20) + ((hours - 40) * 25);
        total+= salaryPerWorker;
        alert(`El obrero ${i+1} trabajo ${hours} horas y su salario es de $${salaryPerWorker}`);

    }
    alert(`El total a pagar a los obreros es $${total}`)

}


/**
 * Calcular el promedio de edades de hombres, mujeres y de tod@ un grupo
 * de alumnos.
 */
const problem4 = () => {
    /**
     * Se llena el array n alumnos y se calcula el promedio de edades de hombres,
     * mujeres y de tod@ un grupo de alumnos.
     */
    const n = parseInt(prompt('¿Cuantos alumnos desea ingresar?'));
    /* Se valida que el número de alumnos sea un número válido */
    if (isNaN(n) || n === undefined || n <=0){
        alert('Número no valido, inténtelo nuevamente ')
        return;
    }
    /* Se crea un array de n alumnos */
    const students = [];
    /* Se llena el array de n alumnos */
    let i = 0;
    while ( i < n) {
        /* Se le pregunta al usuario el nombre del alumno */
        const name = prompt(`¿Cómo se llama el alumno o la alumna #${i+1}?`);
        /* Se valida que el nombre del alumno sea un string válido */
        if (name === undefined || name === null || name === ''){
            alert('Nombre no valido, inténtelo nuevamente ')
            continue;
        }
        /* Se le pregunta al usuario el género del alumno */
        let gender = prompt(`¿Cuál es el género de ${name}? (M/F)`);
        gender = gender.toUpperCase();
        /* Se valida que el género sea un string válido */
        if((gender === undefined || gender === null || gender === '') || (gender !== 'M' && gender !== 'F')){
            alert('Género no valido, inténtelo nuevamente ')
            continue;
        }
        /* Se le pregunta al usuario la edad del alumno */
        const age = parseInt(prompt(`¿Cuál es la edad de ${name}?`));
        /* Se valida que la edad sea un número válido */
        if (isNaN(age) || age === undefined || age <=0){
            alert('Edad no valida, inténtelo nuevamente ')
            continue;
        }
        /* Se agrega el objeto alumno al array de alumnos */
        const student = { name, gender, age };
        students[i] = {name, gender, age};
        i++;
    }

    /**
     * Se calcula el promedio de edades de hombres. Para ello se filtran los alumnos
     * que son hombres y se obtiene un array de hombres y se calcula el promedio de edades de hombres.
     */
    console.log(students);
    const ageMen = students.filter((student) => student.gender === 'M');
     const sumAgeMen = ageMen.reduce((acc, student) => acc + student.age, 0);
     const countMen = ageMen.length;
     const averageAgeMen = sumAgeMen / countMen;

    /* Se calcula el promedio de edades de mujeres. Pero de manera diferente. Más corta */
    const averageAgeWomen = students.filter((student) => student.gender === 'F')
            .reduce((acc, student) => acc + student.age, 0) /
        students.filter((student) => student.gender === 'F').length
    ;

    /* Se calcula el promedio de edades del grupo de alumnos */
    const averageAgeAll = students.reduce((acc, student) => acc + student.age, 0) / students.length;
    /* Se imprime el promedio de edades de hombres, mujeres y del grupo de alumnos */
    alert(`El promedio de edades de hombres es de ${averageAgeMen} años, el promedio de edades de mujeres es de ${averageAgeWomen} años y el promedio de edades de todo el grupo de alumnos es de ${averageAgeAll} años`);

}

/**
 * 5. Encontrar el menor valor de un conjunto de n números dados
 */
const problem5 = () => {
    /* Se le pregunta al usuario cuantos números desea ingresar */
    const n = parseInt(prompt('¿Cuantos números desea ingresar?'));
    /* Se valida que el número sea un número válido */
    if (isNaN(n) || n === undefined || n <=0){
        alert('Valor no valido, inténtelo nuevamente ')
        return;
    }
    /* Se le pregunta al usuario los números que desea ingresar */
    const numbers = prompt(`Ingrese los ${n} números separados por coma (,)`);
    /* Se valida que los números sean un string válido */
    if (numbers === undefined || numbers === null || numbers === ''){
        alert('Valor no valido, inténtelo nuevamente ')
        return;
    }
    /* Se convierte el string en un array */
    const numbersArray = numbers.split(',');
    /* Se valida que el array tenga la cantidad de números que el usuario ingresó */
    if (numbersArray.length !== n){
        alert('Valor no valido, inténtelo nuevamente ')
        return;
    }
    /* Se convierte el array de strings a un array de números */
    const numbersArrayInt = numbersArray.map((number) => parseInt(number));
    /* Se valida que los números sean números válidos */
    if (numbersArrayInt.some((number) => isNaN(number))){
        alert('Valor no valido, inténtelo nuevamente ')
        return;
    }
    /* Se obtiene el menor número del array */
    const minNumber = Math.min(...numbersArrayInt);
    alert(`El menor número es ${minNumber}`)
}


//problem1();
//problem2();
//problem3();
//problem4();
//problem5();