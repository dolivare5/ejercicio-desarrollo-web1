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
        students.push({name, gender, age});
        i++;
    }

    /**
     * Se calcula el promedio de edades de hombres. Para ello se filtran los alumnos
     * que son hombres y se obtiene un array de hombres y se calcula el promedio de edades de hombres.
     */
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


/**
 * Cinco miembros de un club contra la obesidad desean saber cuanto han
 * bajado o subido de peso desde la última vez que se reunieron. Para esto se
 * debe realizar un ritual de pesaje en donde cada uno se pesa en diez básculas
 * distintas para así tener el pormedio mas exacto de su peso. Si existe
 * diferencia positiva entre este promedio de peso y el peso de la última
 * vez que se reunieron, significa que subieron de peso. Pero si la diferencia
 * es negativa, significa que bajaron. Lo que el problema requere es que por
 * cada persona se imprima un letrero que diga: “SUBIÓ” o “BAJÓ” y la cantidad
 * de kilos que subió o bajó de peso.
 */
const problem6 = () => {
    /**
     * Se crea un arreglo de objetos con los nombres de los miembros del club y su peso registrado
     * en la última reunión. Luego se simula el ritual de pesaje para cada miembro del club en las
     * diez básculas distintas y se calcula el promedio de peso de cada uno. Por último se compara
     * el promedio de peso con el peso registrado en la última reunión y se imprime un mensaje
     * indicando si subió o bajó de peso y la cantidad de kilos que subió o bajó.
     */
    const clubMembers = [
        {name: 'Juan', weight: 80.5},
        {name: 'Pedro', weight: 70.2},
        {name: 'Luis', weight: 90.2},
        {name: 'Ana', weight: 60.7},
        {name: 'María', weight: 75.3}
    ]

    /* Se recorre el arreglo de miembros del club */
    clubMembers.forEach((member) => {
        console.log(`A continuación se pesará a ${member.name} que pesó ${member.weight} kilos en la última reunión`);
        /* Weight es una variable que acumulará el peso de cada miembro en cada báscula */
        let weight = 0
        /* Se recorre las diez básculas */
        for (let i = 0; i < 10; i++) {
            /* Se le genera un peso aleatorio al miembro en la báscula. Otra forma seria pedirle al usuario que ingrese el peso */
            /* Se genera un número aleatorio entre 40 y 100kg */
            const weightBascule = (Math.random() * (100 - 40)) + 40;
            console.log(`El peso de ${member.name} en la báscula ${i + 1} es de ${weightBascule} kilos`);
            /* Se acumula el peso del miembro en la báscula */
            weight += weightBascule;
            if (i < 9 ){
                console.log(`Ahora se pesará a ${member.name} en la báscula ${i + 2}`);
            }
        }
        /* Se calcula el promedio de peso del miembro */
        const averageWeight = weight / 10
        /* Se calcula la diferencia de peso entre el promedio de peso y el peso registrado en la última reunión */
        const difference = averageWeight - member.weight
        if (difference > 0) {
            console.log(`${member.name} subistes ${difference} kilos. Al comienzo pesabas ${member.weight} kilos y ahora  ${averageWeight} kilos. Cuidado con la comida!`);
        } else {
            console.log(`${member.name} bajastes ${Math.abs(difference)} kilos. Al comienzo pesabas ${member.weight} kilos y ahora  ${averageWeight} kilos. Felicitaciones!`);
        }
        console.log('--------------------------------------------------------------------------------------');
        console.log('Siguiente miembro');
        console.log('--------------------------------------------------------------------------------------');
    })
}

/**
 * Solucionar el siguiente problema:
 * En un supermercado una ama de casa pone en su carrito los artículos que
 * va tomando de los estantes. La señora quiere asegurarse de que el cajero
 * le cobre bien lo que ella ha comprado, por lo que cada vez que toma un
 * artículo anota su precio junto con la cantidad de artículos iguales que ha
 * tomado y determina cuanto dinero gastará en ese artículo; a esto le suma lo
 * que irá gastando en los demás artículos, hasta que decide que ya tomó
 * tod@ lo que necesitaba. Ayúdele a esta señora a obtener el total de su
 * compra.
 */
const problem7 = () => {
    /* Se crea un arreglo de objetos con los artículos que la señora va a comprar */
    let shoppingCart = [];
    /* Variable que acumulará el total de la compra */
    let shoppingCartTotal = 0;
    let op = 0;
    do {
        op = parseInt(prompt('¿Qué desea hacer? \n1. Agregar producto o unidades al carrito \n2. Eliminar producto \n3. Quitar unidades de un producto \n4. Ver carrito \n5. Salir'));
        switch (op) {
            case 1:
                /* Se crea un nuevo producto. Si el producto ya existe en el carrito se le suma la cantidad */
                const product = addProduct(shoppingCart);
                if (product) {
                    const productIndex = shoppingCart.findIndex((prod) => prod.productName === product.productName);
                    if (productIndex >= 0) {
                        shoppingCart[productIndex].productUnits += product.productUnits;
                        shoppingCart[productIndex].total += product.total;
                    }else{
                        shoppingCart.push(product);
                    }
                    shoppingCartTotal += product.priceProduct * product.productUnits;
                    showProduct(product, shoppingCartTotal)
                }
                break;
            case 2:
                const productIdx = findOneProductById(shoppingCart, 'eliminar', shoppingCartTotal);
                if (productIdx !== -1) {
                    /* Se actualiza el total de la compra */
                    shoppingCartTotal -= shoppingCart[productIdx].priceProduct * shoppingCart[productIdx].productUnits;
                    /**
                     *Se elimina el producto del carrito. El método splice recibe como primer parámetro el índice del
                     *elemento a eliminar y como segundo parámetro la cantidad de elementos a eliminar
                     **/
                    shoppingCart.splice(productIdx, 1);
                    alert('Producto eliminado correctamente')
                }
                break;
            case 3:
                /* Se busca el producto a modificar */
                const prodIdx = findOneProductById(shoppingCart, 'modificar', shoppingCartTotal);
                /* Si el producto existe se le pide al usuario que ingrese la nueva cantidad */
                if (prodIdx !== -1) {
                    /* Se resta el total de la compra del producto que se va a modificar */
                    const product = takeOutUnits(shoppingCart[prodIdx]);
                    if (product) {
                        shoppingCartTotal -= product.priceProduct * product.productUnits;
                        shoppingCart[prodIdx] = product;
                        shoppingCartTotal += product.priceProduct * product.productUnits;
                        showProduct(product, shoppingCartTotal, 'modificadas')
                    }
                }
                break;
            case 4:
                /* Se muestra el carrito */
                const products = shoppingCart.map((product) => {
                    const {productName, productUnits, priceProduct} = product
                    return `${productName} - Cantidad: ${productUnits} - Precio por unidad: ${priceProduct} - Precio total: ${priceProduct * productUnits}\n`
                })
                alert(`Productos en el carrito: \n${products} El valor del carrito actual es de ${shoppingCartTotal}`)
                break;
            case 5:
                alert('Gracias por su compra')
                break;
            default:
                alert('Opción no válida, inténtelo nuevamente')
        }
    } while (op !== 5){}
}

/**
 * Método que permite agregar un producto al carrito
 */
const addProduct = (shoppingCart) => {
    /* Si existe un producto con el mismo nombre, se le suma la cantidad de unidades */
    const productName = takeOutProductName();
    if (productName) {
        const productUnits = addUnits(productName);
        if (productUnits) {
            /* Se busca si el producto ya existe en el carrito */
            let priceProduct;
            const product = shoppingCart.find((product) => product.productName === productName);
            priceProduct = product ? product.priceProduct : takeOutPriceProduct();
            /* Si existe un producto con el mismo nombre, se le suma la cantidad de unidades */
            if (priceProduct) {
                return {
                    id: shoppingCart.length + 1,
                    productName,
                    productUnits,
                    priceProduct
                }
            }
        }
    }
}

/**
 * Método que permite pedir el nombre del producto y lo retorna.
 */
const takeOutProductName = () => {
    const productName = prompt('Ingrese el nombre del producto');
    if (productName === '' || productName === null) {
        alert('Nombre no valido, inténtelo nuevamente')
        return
    }
    return productName
}

/**
 * Método que permite pedir la cantidad de unidades del producto y las retorna.
 */
const addUnits = (productName) => {
    const productUnits = parseInt(prompt(`Ingrese la cantidad de unidades de ${productName}`));
    if (isNaN(productUnits) || productUnits === undefined || productUnits === null || productUnits < 0) {
        alert('Cantidad no valida, inténtelo nuevamente')
        return
    }
    return productUnits
}

/**
 * Método que permite pedir el precio del producto y lo retorna.
 */
const takeOutPriceProduct = () => {
    const priceProduct = parseFloat(prompt('Ingrese el precio del producto'));
    if (isNaN(priceProduct) || priceProduct === undefined) {
        alert('Precio no valido, inténtelo nuevamente')
        return
    }
    return priceProduct
}

/**
 * Esta función busca un producto en el carrito de compras por el id
 * @param shoppingCart
 * @param action
 * @param shoppingCartTotal
 * @return {*}
 */
const findOneProductById = (shoppingCart, action, shoppingCartTotal) => {
    /* S extrae el nombre de todos los productos que se encuentran en el carrito  con su respectiva cantidad y precio */
    const products = shoppingCart.map((product) => {
        const {id, productName, productUnits, priceProduct} = product
        return `Código: ${id} - ${productName} - Cantidad: ${productUnits} - Precio por unidad: ${priceProduct} - Precio total: ${priceProduct * productUnits}\n`
    })
    /* Se le pregunta al usuario el producto que eliminar, agregar o modificar */
    const op = parseInt(prompt(`Ingrese el código del producto del cual desea ${action}? \n${products} El valor del carrito actual es de ${shoppingCartTotal}`))
    /* Se valida que el nombre del producto sea un string válido */
    if (isNaN(op) || op === undefined) {
        alert('Opción, inténtelo nuevamente')
        return;
    }
    /* Se valida que el producto no exista */
    // Array Method que permite regresar el índice de un elemento en un array
    const p = shoppingCart.findIndex((product) => product.id === op);
    console.log(p)
    return p
}

/**
 * Método que permite mostrar el producto agregado al carrito
 */
const showProduct = (product, shoppingCartTotal, action = 'agregado') => {
    const {productName, productUnits, priceProduct} = product
    alert(`Producto ${action}: \n${productName} - Cantidad: ${productUnits} - Precio por unidad: ${priceProduct} - Precio total: ${priceProduct * productUnits}\n El valor del carrito actual es de ${shoppingCartTotal}`)
}

/**
 * Método que permite actualizar la cantidad de unidades de un producto
 */
const takeOutUnits = (product) => {
    const {productName, productUnits, priceProduct} = product
    /* Se le pide la nueva cantidad de unidades. Pueden ser más o menos que las actuales */
    const productUnits2 = addUnits(productName);
    /* Si la cantidad de unidades es mayor a 0, se actualiza el producto  y se retorna */
    if (productUnits2) {
        return {
            id: product.id,
            productName,
            productUnits: productUnits2,
            priceProduct
        }
    }
}


/**
 * Un teatro otorga descuentos según la edad del cliente, determinar la cantidad
 * del dinero que el teatro deja de percibir por cada ua de las categorias. Tomar
 * en cuenta que los niños menores de 5 años no pueden entrar al teatro y que
 * existe un precio único en los asientos. Los descuentos se hacen tomando en
 * cuenta el siguiente cuadro:
 * Edad % Descuento
 * 5 – 14 35%
 * 15-19 25%
 * 20 – 45 10%
 * 46 – 65 25%
 * 66 en Adelante 35%
 */
const problem8 = () => {
    const prices = [1000, 800, 500, 300, 200];
    const categories = [
        { id: 0, name: 'Niños', discount: 0},
        { id: 1, name: 'Jovenes', discount: 0.25},
        { id: 2, name: 'Adultos', discount: 0.1},
        { id: 3, name: 'Adultos mayores', discount: 0.25},
        { id: 4, name: 'Ancianos', discount: 0.35}
    ];
    const people = [];
    let op = 0;
    do {
        op = parseInt(prompt('¿Qué desea hacer? \n1. Agregar persona \n2. Ver personas \n3. Salir'));
        switch (op) {
            case 1:
                const person = addPerson(categories);
                if (person) {
                    people.push(person);
                }
                break;
            case 2:
                const peopleList = people.map((person) => {
                    let {name, age, category} = person
                    return `${name} - Edad: ${age} - Categoría: ${category.name}\n`
                })
                alert(`Personas en el teatro: \n${peopleList}`)
                break;
            case 3:
                alert('Gracias por su visita')
                break;
            default:
                alert('Opción no válida, inténtelo nuevamente')
        }
    } while (op !== 3){
        /* Se calculan los ingresos totales */
        const total = people.reduce((acc, person) => {
            const {category} = person
            return acc + (prices[category.id] - (prices[category.id] * category.discount))
        }, 0)
        /* Se calculan lo que se deja de percibir por descuentos */
        const totalDiscount = people.reduce((acc, person) => {
            const {category} = person
            return acc + prices[category.id] * category.discount
        }, 0)
        alert(`El total de ingresos es de ${total} y lo que se deja de percibir por descuentos es de ${totalDiscount}`)
    }
}

const addPerson = (categories) => {
    const name = prompt('Ingrese el nombre de la persona');
    if (!name) {
        alert('El nombre es obligatorio');
        return;
    }
    const age = parseInt(prompt('Ingrese la edad de la persona'));
    if (!age) {
        alert('La edad es obligatoria');
        return;
    }
    if (age < 5) {
        alert('Los niños menores de 5 años no pueden ingresar al teatro');
        return;
    }
    const category = age < 15 ? categories[0] : age < 20 ? categories[1] : age < 46 ? categories[2] : age < 66 ? categories[3] : categories[4];
    return {name, age, category};

}
//problem1();
//problem2();
//problem3();
//problem4();
//problem5();
//problem6();
//problem7();
//problem8();