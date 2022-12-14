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
    const animals = [{name: 'Elefante', age: 1, quantity: 20}, {
        name: 'Jirafa',
        age: 2,
        quantity: 15
    }, {name: 'Chimpancé', age: 3, quantity: 40},]

    /* Se generan edades aleatorias para el animal seleccionado. Para ello se le pregunta al usuario que animal desea estudiar */
    const animal = parseInt(prompt('¿Qué animal desea estudiar?\n1. Elefante\n2. Jirafa\n3. Chimpancé'));
    /* Se valida que el animal sea un número válido */
    if (isNaN(animal) || animal === undefined || animal <= 0 || animal > 3) {
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
    if (isNaN(workers) || workers === undefined || workers <= 0) {
        alert('Valor no valido, inténtelo nuevamente ')
        return;
    }
    let total = 0;
    for (let i = 0; i < workers; i++) {
        const hours = parseInt(prompt(`¿Cuantas horas trabajo el obrero ${i + 1}`));
        /* Se valida que el número de horas sea un número válido */
        if (isNaN(hours) || hours === undefined || hours <= 0) {
            alert('Valor no valido, inténtelo nuevamente ')
            return;
        }
        const salaryPerWorker = hours <= 40 ? hours * 20 : (40 * 20) + ((hours - 40) * 25);
        total += salaryPerWorker;
        alert(`El obrero ${i + 1} trabajo ${hours} horas y su salario es de $${salaryPerWorker}`);

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
    if (isNaN(n) || n === undefined || n <= 0) {
        alert('Número no valido, inténtelo nuevamente ')
        return;
    }
    /* Se crea un array de n alumnos */
    const students = [];
    /* Se llena el array de n alumnos */
    let i = 0;
    while (i < n) {
        /* Se le pregunta al usuario el nombre del alumno */
        const name = prompt(`¿Cómo se llama el alumno o la alumna #${i + 1}?`);
        /* Se valida que el nombre del alumno sea un string válido */
        if (name === undefined || name === null || name === '') {
            alert('Nombre no valido, inténtelo nuevamente ')
            continue;
        }
        /* Se le pregunta al usuario el género del alumno */
        let gender = prompt(`¿Cuál es el género de ${name}? (M/F)`);
        gender = gender.toUpperCase();
        /* Se valida que el género sea un string válido */
        if ((gender === undefined || gender === null || gender === '') || (gender !== 'M' && gender !== 'F')) {
            alert('Género no valido, inténtelo nuevamente ')
            continue;
        }
        /* Se le pregunta al usuario la edad del alumno */
        const age = parseInt(prompt(`¿Cuál es la edad de ${name}?`));
        /* Se valida que la edad sea un número válido */
        if (isNaN(age) || age === undefined || age <= 0) {
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
        .reduce((acc, student) => acc + student.age, 0) / students.filter((student) => student.gender === 'F').length;

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
    if (isNaN(n) || n === undefined || n <= 0) {
        alert('Valor no valido, inténtelo nuevamente ')
        return;
    }
    /* Se le pregunta al usuario los números que desea ingresar */
    const numbers = prompt(`Ingrese los ${n} números separados por coma (,)`);
    /* Se valida que los números sean un string válido */
    if (numbers === undefined || numbers === null || numbers === '') {
        alert('Valor no valido, inténtelo nuevamente ')
        return;
    }
    /* Se convierte el string en un array */
    const numbersArray = numbers.split(',');
    /* Se valida que el array tenga la cantidad de números que el usuario ingresó */
    if (numbersArray.length !== n) {
        alert('Valor no valido, inténtelo nuevamente ')
        return;
    }
    /* Se convierte el array de strings a un array de números */
    const numbersArrayInt = numbersArray.map((number) => parseInt(number));
    /* Se valida que los números sean números válidos */
    if (numbersArrayInt.some((number) => isNaN(number))) {
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
    const clubMembers = [{name: 'Juan', weight: 80.5}, {name: 'Pedro', weight: 70.2}, {
        name: 'Luis',
        weight: 90.2
    }, {name: 'Ana', weight: 60.7}, {name: 'María', weight: 75.3}]

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
            if (i < 9) {
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
                    } else {
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
    } while (op !== 5)
    {
    }
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
                    id: shoppingCart.length + 1, productName, productUnits, priceProduct
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
            id: product.id, productName, productUnits: productUnits2, priceProduct
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
    const categories = [{id: 0, name: 'Niños', discount: 0}, {id: 1, name: 'Jovenes', discount: 0.25}, {
        id: 2,
        name: 'Adultos',
        discount: 0.1
    }, {id: 3, name: 'Adultos mayores', discount: 0.25}, {id: 4, name: 'Ancianos', discount: 0.35}];
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
    } while (op !== 3)
    {
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


/**
 * Kia Autos premia anualmente a sus mejores vendedores de acuerdo a la
 * siguiente tabla:
 * Valor vendido | Comisión
 * Menor o igual que 20 Millones | 10%
 * Mayor de 20 Millones y menor de 40 Millones | 15%
 * Mayor o igual de 40 Millones y menor de 80 Millones | 20%
 * Mayor o igual de 80 millones y menor de 160 Millones | 25%
 * De 160 Millones en adelante | 30%
 * Realice un método que diga cuanto vendió y la comisión de los 100
 * vendedores que tiene la empresa.
 */
const problem9 = () => {
    /* El arreglo de sales guarda el valor vendido por cada vendedor */
    const sales = [];
    /* Genero 100 ventas aleatorias */
    for (let i = 0; i < 100; i++) {
        sales.push({
            id: i + 1, sales: Math.floor(Math.random() * 1000000000)
        })
    }
    /* Se calcula la comisión de cada vendedor */
    const salesCommission = sales.map((sale) => {
        /* sale es un objeto que tiene el id del vendedor y el valor vendido */
        const {id, sales} = sale
        let commission = 0
        if (sales <= 20000000) {
            commission = sales * 0.1
        } else if (sales > 20000000 && sales < 40000000) {
            commission = sales * 0.15
        } else if (sales >= 40000000 && sales < 80000000) {
            commission = sales * 0.2
        } else if (sales >= 80000000 && sales < 160000000) {
            commission = sales * 0.25
        } else {
            commission = sales * 0.3
        }
        return `Vendedor ${id} - Ventas: ${sales} - Comisión: ${commission}`
    })
    console.log(salesCommission.join('\n'))
    /* Se calcula el total de ventas y comisiones */
    const totalSales = sales.reduce((acc, sale) => {
        return acc + sale.sales
    }, 0)
    /* Se extraen todos los datos del vendedor que más vendió */
    const bestSeller = sales.reduce((acc, sale) => {
        return acc.sales > sale.sales ? acc : sale
    }, {sales: 0});

    console.log(`El total de ventas es de ${totalSales} y el vendedor que más vendió fue el ${bestSeller.id} con ${bestSeller.sales} de ventas`)

}

/**
 * La empresa Encuestas S.A desea crear una función que les permita conocer
 * de los 50.000 votos obtenidos por 3 candidatos, cual de estos fue el ganador
 * o indicar si hubo empate y la cantidad de votos obtenidos.
 */
const problem10 = () => {
    /**
     * Creo un arreglo de 50.000 posiciones con números aleatorios entre 1 y 3
     */
    const votes = [];
    for (let i = 0; i < 50000; i++) {
        const vote = Math.floor(Math.random() * 3) + 1
        console.log(`Voto #${i + 1} a favor del candidato ${vote}`)
        votes.push(vote);
    }
    /**
     * Recorro el arreglo y cuento cuántos votos obtuvo cada candidato. Se hace uso del metodo reduce
     * para recorrer el arreglo y sumar los votos de cada candidato. acc es el acumulador, el cual se va
     * actualizando en cada iteración, y el valor inicial de acc es un objeto con las propiedades de los
     * candidatos, y el valor inicial de cada propiedad es 0. vote es el valor actual del arreglo, el cual
     * se va actualizando en cada iteración.
     */
    const votesCount = votes.reduce((acc, vote) => {
        /**
         * Se verifica si el candidato ya tiene votos, si es así, se le suma 1, si no, se le asigna 1.
         */
        if (acc[vote]) {
            acc[vote] += 1;
        } else {
            acc[vote] = 1;
        }
        /**
         * Se retorna el objeto con los votos actualizados
         */
        return acc;
    },
    /**
    * Se inicializa el objeto con las propiedades de los candidatos y el valor inicial de cada propiedad es 0
    */
    {
        /**
         * 1: 0, hace referencia a que el candidato 1 tiene 0 votos, y así sucesivamente
         */
         1: 0, 2: 0, 3: 0
    });
    /**
     * Comparo los votos obtenidos por cada candidato y determino el ganador
     * o si hubo empate y la cantidad de votos obtenidos por cada uno.
     */
    const {1: candidate1, 2: candidate2, 3: candidate3} = votesCount;
    console.log('-------------------------------------------')
    console.log('-------------------------------------------')
    console.log('-------------------------------------------')
    console.log('Resultados de las elecciones')
    console.log('-------------------------------------------')
    console.log('-------------------------------------------')
    console.log('-------------------------------------------')
    if (candidate1 > candidate2 && candidate1 > candidate3) {
        console.log(`El candidato 1 es el ganador con ${candidate1} votos`)
    }
    if (candidate2 > candidate1 && candidate2 > candidate3) {
        console.log(`El candidato 2 es el ganador con ${candidate2} votos`)
    }
    if (candidate3 > candidate1 && candidate3 > candidate2) {
        console.log(`El candidato 3 es el ganador con ${candidate3} votos`)
    }
    if (candidate1 === candidate2 && candidate1 > candidate3) {
        console.log(`Hubo empate entre los candidatos 1 y 2 con ${candidate1} votos y el candidato 3 obtuvo ${candidate3} votos ocupando el tercer lugar`)
    }
    if (candidate1 === candidate3 && candidate1 > candidate2) {
        console.log(`Hubo empate entre los candidatos 1 y 3 con ${candidate1} votos y el candidato 2 obtuvo ${candidate2} votos ocupando el tercer lugar`)
    }
    if (candidate2 === candidate3 && candidate2 > candidate1) {
        console.log(`Hubo empate entre los candidatos 2 y 3 con ${candidate2} votos y el candidato 1 obtuvo ${candidate1} votos ocupando el tercer lugar`)
    }
    if (candidate1 === candidate2 && candidate1 === candidate3) {
        console.log(`Hubo empate entre los 3 candidatos con ${candidate1} votos`)
    }
}

/**
 * De los n números primos contenidos en un intervalo (por ejemplo los números
 * primos del 1 al 100), calcule la sumatoria, la productoria y el promedio.
 */
const problem11 = () => {
    /* Se le pide al usuario que ingrese el intervalo */
    const start = parseInt(prompt('Ingrese el inicio del intervalo'))
    const end = parseInt(prompt('Ingrese el fin del intervalo'))
    if (isNaN(start) || isNaN(end) || start === undefined || end === undefined) {
        alert('Intervalo no valido, inténtelo nuevamente')
        return
    }
    /* Se valida que el intervalo sea correcto */
    if (start > end) {
        alert('Intervalo no valido, inténtelo nuevamente')
        return
    }
    /* Se crea un arreglo con los números primos del intervalo */
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(`El número ${i} es primo`)
            primes.push(i);
        }
    }
    /* Se calcula la sumatoria, productoria y promedio */
    const sum = primes.reduce((acc, prime) => acc + prime, 0);
    const product = primes.reduce((acc, prime) => acc * prime, 1);
    const average = sum / primes.length;
    /* Se muestran los resultados */
    console.log(`La sumatoria de los números primos del intervalo es ${sum}, la productoria es ${product} y el promedio es ${average}`)
}

const isPrime = (n) => {
    /* Se comienza en 2 porque 1 es un número primo */
    for (let i = 2; i < n; i++) {
        /* Si el número es divisible por otro número, no es primo */
        if (n % i === 0) {
            return false;
        }
    }
    /* Si n es mayor que 1 se retorna true, de lo contrario se retorna false */
    return n > 1;
}

/**
 * Teniendo como entrada un número entero, determinar cuantos dígitos tiene,
 * cuantos de ellos son pares e impares, calcule la sumatoria, la productoria y
 * el promedio de estos.
 */
const problem12 = () => {
    const number = parseInt(prompt('Ingrese un número entero'));
    if (isNaN(number) || number === undefined) {
        alert('Número no valido, inténtelo nuevamente')
        return
    }
    const numberString = number.toString();
    const numberLength = numberString.length;
    let evenNumbers = 0;
    let oddNumbers = 0;
    let sum = 0;
    let product = 1;
    for (let i = 0; i < numberLength; i++) {
        const number = parseInt(numberString[i]);
        if (number % 2 === 0) {
            evenNumbers++;
        } else {
            oddNumbers++;
        }
        sum += number;
        product *= number;
    }
    const average = sum / numberLength;
    alert(`El número ${number} tiene ${numberLength} dígitos, de los cuales ${evenNumbers} son pares y ${oddNumbers} son impares. La sumatoria de los dígitos es ${sum}, la productoria es ${product} y el promedio es ${average}`)
}


/**
 * De los n elementos de la serie de fibonacci diga cuantos son pares, cuantos
 * impares y cuantos ceros.
 */
const problem13 = () => {
    const n = parseInt(prompt('Ingrese el número de elementos de la serie de fibonacci'));
    if (n === 0 || n === 1) {
        console.log('El mínimo de elementos de la serie de fibonacci es 2');
    }
    if (isNaN(n) || n === undefined) {
        alert('Número no valido, inténtelo nuevamente')
        return
    }
    let fibonacci = [0, 1];
    let even = 0;
    let odd = 1;
    let zero = 1;
    /* I se inicializa en 2 porque los primeros 2 elementos de la serie de fibonacci ya están definidos */
    for (let i = 2; i <=n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        if (fibonacci[i] % 2 === 0) {
            even++;
        } else if (fibonacci[i] % 2 !== 0) {
            odd++;
        } else {
            zero++;
        }
    }
    alert(`La serie de fibonacci es: ${fibonacci} \nLa cantidad de números pares es: ${even} \nLa cantidad de números impares es: ${odd} \nLa cantidad de ceros es: ${zero}`)
}


/**
 * Realice un método que permita calcular el MCD (Máximo Común Divisor )
 * entre dos números.
 */
const problem14 = () => {
    const num1 = parseInt(prompt('Ingrese el primer número'));
    const num2 = parseInt(prompt('Ingrese el segundo número'));
    if (isNaN(num1) || isNaN(num2)) {
        alert('Número no valido, inténtelo nuevamente')
        return
    }
    const mcd = calculateMCD(num1, num2);
    alert(`El MCD entre ${num1} y ${num2} es ${mcd}`)
}

const calculateMCD = (num1, num2) => {
    /* Se crea la variable mcd que almacenará el MCD entre los dos números */
    let mcd = 0;
    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            mcd = i;
        }
    }
    return mcd;
}

/**
 * En 1994 el país A tiene una población de 25 Millones de Habitantes y el País
 * B de 19.9 Millones. Las tasas de crecimiento de la población son de 2% y 3%
 * respectivamente. Desarrollar un algoritmo para informar en que año la
 * población del país B supera la del país A.
 */
const problem15 = () => {
    const countryA = {
        population: 25000000,
        growthRate: 2
    }
    const countryB = {
        population: 19900000,
        growthRate: 3
    }
    let year = 0;
    let yearAchieved = 1994;
    while (countryA.population > countryB.population) {
        /* Se divide el crecimiento por 100 para obtener el porcentaje */
        countryA.population += countryA.population * countryA.growthRate / 100;
        countryB.population += countryB.population * countryB.growthRate / 100;
        yearAchieved++;
        console.log(`Año ${yearAchieved}: País A: ${countryA.population} País B: ${countryB.population} - País A tiene más población`)
        year++;
    }
    console.log(`La población del país B demoró ${year} años en superar a la del país A y ocurrió en el año ${1994 + year}`)
}

/**
 * Se crea un menu para que el usuario pueda elegir el problema que desea
 * ejecutar.
 */
const menu = () => {
    const option = parseInt(prompt('' +
        'Ingrese el número del problema que desea ejecutar: \n1. Problema 1 ' +
        '\n2. Problema 2 \n3. Problema 3 \n4. Problema 4 \n5. Problema 5 \n6. Problema 6 \n7. Problema 7 ' +
        '\n8. Problema 8 \n9. Problema 9 \n10. Problema 10 \n11. Problema 11 \n12. Problema 12 \n13. Problema 13 ' +
        '\n14. Problema 14 \n15. Problema 15. \n0. Salir \nPor favor abra la consola para ver los resultados de los problemas')
    );
    switch (option) {
        case 0:
            return;
        case 1:
            problem1();
            break;
        case 2:
            problem2();
            break;
        case 3:
            problem3();
            break;
        case 4:
            problem4();
            break;
        case 5:
            problem5();
            break;
        case 6:
            problem6();
            break;
        case 7:
            problem7();
            break;
        case 8:
            problem8();
            break;
        case 9:
            problem9();
            break;
        case 10:
            problem10();
            break;
        case 11:
            problem11();
            break;
        case 12:
            problem12();
            break;
        case 13:
            problem13();
            break;
        case 14:
            problem14();
            break;
        case 15:
            problem15();
            break;
        default:
            alert('Opción no valida, inténtelo nuevamente')
            break;
    }
}

menu();