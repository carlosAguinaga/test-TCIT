// Propiedad intelectual: Esta prueba fue desarrollada por TCIT el año 2014 y registrada bajo propiedad intelectual, cualquier publicación o difamación podría estar sujeta a acciones legales. Hay otras empresas que nos han copiado esta prueba, no aceptes imitaciones, exige el original xD
// No realizar la prueba en repl.it al hacerlo su respuesta queda disponible para otros postulantes, tampoco subirla a repositorios de github públicos

// Sección de declaraciones, NO EDITAR

// Responsables de los cuarteles
const paddockManagers = [
  { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS' },
  { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA' },
  { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ' },
  { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS' },
  { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA' },
  { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' },
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
  { id: 1, name: 'PALTOS' },
  { id: 2, name: 'AVELLANOS' },
  { id: 3, name: 'CEREZAS' },
  { id: 4, name: 'NOGALES' },
];

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 1200,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2019,
    area: 500,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 20000,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 8401,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2020,
    area: 2877,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2017,
    area: 15902,
  },
  {
    paddockManagerId: 3,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 1736,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2020,
    area: 2965,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 4,
    harvestYear: 2018,
    area: 1651,
  },
  {
    paddockManagerId: 5,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 700,
  },
  {
    paddockManagerId: 1,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 7956,
  },
  {
    paddockManagerId: 5,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 3745,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 11362,
  },
  {
    paddockManagerId: 2,
    farmId: 3,
    paddockTypeId: 3,
    harvestYear: 2021,
    area: 300,
  },
  {
    paddockManagerId: 3,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 19188,
  },
  {
    paddockManagerId: 3,
    farmId: 1,
    paddockTypeId: 1,
    harvestYear: 2019,
    area: 17137,
  },
  {
    paddockManagerId: 4,
    farmId: 3,
    paddockTypeId: 2,
    harvestYear: 2020,
    area: 100,
  },
  {
    paddockManagerId: 2,
    farmId: 1,
    paddockTypeId: 3,
    harvestYear: 2019,
    area: 11845,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 1,
    harvestYear: 2018,
    area: 15969,
  },
  {
    paddockManagerId: 1,
    farmId: 3,
    paddockTypeId: 1,
    harvestYear: 2029,
    area: 10420,
  },
  {
    paddockManagerId: 5,
    farmId: 2,
    paddockTypeId: 3,
    harvestYear: 2010,
    area: 3200,
  },
  {
    paddockManagerId: 6,
    farmId: 1,
    paddockTypeId: 2,
    harvestYear: 2012,
    area: 10587,
  },
  {
    paddockManagerId: 2,
    farmId: 2,
    paddockTypeId: 2,
    harvestYear: 2018,
    area: 16750,
  },
];

const farms = [
  { id: 1, name: 'AGRICOLA SANTA ANA' },
  { id: 2, name: 'VINA SANTA PAULA' },
  { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' },
];

/*
    SECCIÓN PROBLEMAS
      - No promover la copia:
        - No preguntar en StackOverflow, foros, o similares ya que estas preguntas/respuestas quedan disponibles a otros candidatos
        - No subir a repositorios públicos (github, o similares)
        - Otros sitios como codepen o editores de texto on-line (codepen, repl, o similares), dejan guardado el código, por lo que les pedimos tampoco usar editores on-line, la mejor forma de debuggear su código es usando un intérprete de javascript como node y ejecutarlo de manera local
        - Para nosotros es fácil detectar pruebas con copia, no pierda su tiempo intentando hacerlo
        - Posteriormente, se evaluará conocimiento en es6 en entrevistas presenciales
      - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
      - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
      - Debe usar nombres explicativos para sus variables.
      - Usar sintaxis ES6.
      - Los resultados son evaluados con un test automatizado, revise que sus retornos sean con la estructura de datos solicitada en cada pregunta.
      - Métodos menos verbosos, DRY, y buenas prácticas en el código mejoran el puntaje final de su prueba
      - Si necesita hacer supuestos que afecten las respuestas entregadas, por favor déjelos escritos en el cuerpo del correo cuando envíe su prueba (No en este archivo). Supuestos que contradigan lo solicitado, no serán considerados como válidos.
      - Su prueba debe ejecutarse sin errores con: node nombre-apellido.js
    - Su prueba debe ejecutarse sin errores en la consola del inspector de Google Chrome
  */
// Tip: Una hectárea equivale a 10.000m2

// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
  return paddockManagers.map((paddockManager) => paddockManager.id);
}

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
  // CODE HERE
  return paddockManagers.sort((a, b) => (a.name > b.name ? 1 : -1));
}

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
  // CODE HERE
  const store = new Map();

  paddocks.forEach((el) => {
    //rellenar el store con la llave del paddockTypeId y la sumatoria del hectáreas
    if (store.get(el.paddockTypeId) === undefined) {
      store.set(el.paddockTypeId, el.area);
    } else {
      store.set(el.paddockTypeId, store.get(el.paddockTypeId) + el.area);
    }
  });

  // covertir el store en un array y ordenarlo de forma decreciente
  const arrSort = [...store.entries()].sort((a, b) => b[1] - a[1]);

  // componer array a partir del key en paddockType
  const arrTypes = arrSort.map((el) => {
    const item = paddockType.find((e) => e.id === el[0]);
    return item.name;
  });

  return arrTypes;
}

// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea() {
  // CODE HERE
  const store = {};
  paddocks.forEach((el) => {
    if (store[el.paddockManagerId] === undefined) {
      store[el.paddockManagerId] = el.area;
    } else {
      store[el.paddockManagerId] += el.area;
    }
  });

  const sortEntries = Object.entries(store).sort((a, b) => b[1] - a[1]);

  return sortEntries.map((el) => {
    const element = paddockManagers.find((e) => e.id == el[0]);
    return element.name;
  });
}

// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
  // convetir array s objetos
  const objFarm = {};
  const objManagers = {};
  farms.forEach((el) => (objFarm[el.id] = el.name));
  paddockManagers.forEach((el) => (objManagers[el.id] = el.name));

  // crear un store con el id Farm como llave y un array con los id de sus managers como valor
  const store = {};
  paddocks.forEach((el) => {
    if (store[el.farmId] === undefined) {
      store[el.farmId] = [el.paddockManagerId];
    } else {
      const oldArr = store[el.farmId];
      if (!oldArr.includes(el.paddockManagerId)) {
        store[el.farmId] = [...store[el.farmId], el.paddockManagerId];
      }
    }
  });

  //recorer store y convertir a una matris y reemplazar ids
  const arrManagers = Object.entries(store).map((el) => {
    const farm = objFarm[el[0]];
    const managers = el[1].map((el) => paddockManagers.find((e) => e.id == el));
    return [farm, managers];
  });

  // ordenar managers alfaveticamente y componer objeto de respuesta
  const objRespons = {};
  arrManagers.forEach((el) => {
    const sortedManager = el[1].sort((a, b) => (a.name > b.name ? 1 : -1));
    objRespons[el[0]] = sortedManager;
  });

  return objRespons;
}

// 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
function biggestAvocadoFarms() {
  // crear store con llave idFarm y valor con la sumatoria de m2 de paltos
  const store = {};
  paddocks.forEach((el) => {
    if (el.paddockTypeId !== 1) {
      return;
    }
    if (store[el.farmId] === undefined) {
      store[el.farmId] = el.area;
    } else {
      store[el.farmId] += el.area;
    }
  });

  // filtrar los que tienen mas de dos hectareas
  const totalsM2 = Object.values(store).filter((el) => el > 20000);
  // ordenar de manera decreciente
  const sortedTotalsM2 = totalsM2.sort((a, b) => b - a);
  return sortedTotalsM2;
}

// 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {
  // filtrar por managers de la Floresta que trabajan Cerezas
  const filteredPaddocks = paddocks.filter(
    (el) => el.farmId === 3 && el.paddockTypeId === 3
  );
  // crear un store con los idsManager y total m2 de cerezas
  const store = {};
  filteredPaddocks.forEach((el) => {
    if (store[el.farmId] === undefined) {
      store[el.farmId] = el.area;
    } else {
      store[el.farmId] += el.area;
    }
  });

  // crear array de respuesta con los nombres con mas de 1000 m2 de Cerezas
  const arrNames = [];
  Object.entries(store).forEach((el) => {
    const managerId = el[0];
    if (store[managerId] > 1000) {
      const nameManager = paddockManagers.find((e) => e.id == managerId).name;
      arrNames.push(nameManager);
    }
  });
  return arrNames;
}

// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
  // crear store con llave nameManager y de valor un array con con los nombres del los campos que administran, sin ordenar
  const store = {};
  paddocks.forEach((el) => {
    const nameManager = paddockManagers.find(
      (e) => e.id == el.paddockManagerId
    ).name;
    const nameFarm = farms.find((e) => e.id == el.farmId).name;

    if (store[nameManager] === undefined) {
      store[nameManager] = [nameFarm];
    } else if (!store[nameManager].includes(nameFarm)) {
      store[nameManager] = [...store[nameManager], nameFarm];
    }
  });

  // ordenar store
  Object.entries(store).forEach(
    (el) => (store[el[0]] = el[1].sort((a, b) => (a > b ? 1 : -1)))
  );

  return store;
}

// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
function paddocksManagers() {
  // CODE HERE { AVELLANOS-2020: {idAdmin: nameAdmin} }

  // crear store con llave
  const store = {};
  paddocks.forEach((el) => {
    // construir llave de objeto respuesta
    const typeName = paddockType.find((e) => e.id == el.paddockTypeId).name;
    const key = `${typeName}-${el.harvestYear}`;

    const objValue = {
      [el.paddockManagerId]: paddockManagers.find(
        (e) => e.id == el.paddockManagerId
      ).name,
    };
    if (store[key] === undefined) {
      store[key] = objValue;
    } else {
      // aqui estoy sobreescribiendo el valor que tienen algunas lleves y se perderan registros
      store[key] = objValue;
    }
  });

  return store;
}

// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newManagerRanking() {
  // CODE HERE
  const newManager = {
    id: 7,
    taxNumber: '43623456',
    name: 'CARLOS AGUINAGA SALINAS',
  };
  paddockManagers.push(newManager);
  paddocks.push({
    paddockManagerId: newManager.id,
    farmId: 1,
    paddockTypeId: 4,
    harvestYear: 2017,
    area: 900,
  });

  const ranking = sortFarmManagerByAdminArea();
  let position = null;
  ranking.forEach((el, i) => (el === newManager.name ? (position = i + 1) : null));
  return position
}

// No modificar, eliminar o alterar cualquier línea de código o comentario de acá para abajo
// Cualquier cambio hará que su prueba quede invalidada automáticamente
console.log('Pregunta 0');
console.log(listPaddockManagerIds());
console.log('Pregunta 1');
console.log(listPaddockManagersByName());
console.log('Pregunta 2');
console.log(sortPaddockTypeByTotalArea());
console.log('Pregunta 3');
console.log(sortFarmManagerByAdminArea());
console.log('Pregunta 4');
console.log(farmManagerNames());
console.log('Pregunta 5');
console.log(biggestAvocadoFarms());
console.log('Pregunta 6');
console.log(biggestCherriesManagers());
console.log('Pregunta 7');
console.log(farmManagerPaddocks());
console.log('Pregunta 8');
console.log(paddocksManagers());
console.log('Pregunta 9');
console.log(newManagerRanking());
