/*
  Archivo de sets LEGO Star Wars 1999–2002.
  Datos: Brickipedia (piezas, minifiguras, edades, año), Brickset (subtema y año)
  e imágenes de BrickLink y Rebrickable.
*/
'use strict';

var SW_ERAS = {
  ot:  { name: 'Trilogía Original', short: 'Clásica' },
  ep1: { name: 'Episodio I', short: 'Episodio I' },
  ep2: { name: 'Episodio II', short: 'Episodio II' }
};

var SW_SETS = [
  {
    num: '7101', name: 'Lightsaber Duel', es: 'Duelo de sables de luz',
    year: 1999, era: 'ep1', film: 'La amenaza fantasma', pieces: 50, ages: '6-10', rrp: '5,99',
    minifigs: ['Darth Maul', 'Qui-Gon Jinn'],
    summary: 'Darth Maul llega en su speeder Sith y se enfrenta a Qui-Gon Jinn junto a un vaporizador de humedad de Tatooine.',
    notes: ['Es el set con el número más bajo de toda la línea Star Wars.', 'En el reverso de la caja se mostraba un aerodeslizador alternativo pilotado por Qui-Gon.']
  },
  {
    num: '7110', name: 'Landspeeder', es: 'Deslizador terrestre',
    year: 1999, era: 'ot', film: 'Una nueva esperanza', pieces: 47, ages: '7-12', rrp: '5,99',
    minifigs: ['Luke Skywalker', 'Ben Kenobi'],
    summary: 'El deslizador de Luke con tres turbinas para cruzar las dunas de Tatooine. Obi-Wan trae su sable de luz por si aparecen soldados imperiales.',
    notes: ['Uno de los primeros sets de la ola de lanzamiento de 1999.']
  },
  {
    num: '7111', name: 'Droid Fighter', es: 'Caza droide',
    year: 1999, era: 'ep1', film: 'La amenaza fantasma', pieces: 62, ages: '6-10', rrp: '5,99',
    minifigs: [],
    summary: 'Las alas del caza droide de la Federación de Comercio pasan de modo crucero a modo ataque y, al girar la cabeza, se transforma en droide caminante.',
    notes: ['Uno de los pocos sets Star Wars de sistema sin ninguna minifigura.', 'El manual incluye un robot gigante como modelo alternativo.']
  },
  {
    num: '7121', name: 'Naboo Swamp', es: 'Pantano de Naboo',
    year: 1999, era: 'ep1', film: 'La amenaza fantasma', pieces: 81, ages: '7-12', rrp: '9,99',
    minifigs: ['Qui-Gon Jinn', 'Jar Jar Binks', 'Droide de combate', 'Droide de combate'],
    summary: 'Dos droides de combate en plataformas STAP persiguen a Qui-Gon y Jar Jar por la vegetación del pantano de Naboo.',
    notes: ['Las plataformas STAP se sostienen sobre peanas transparentes.']
  },
  {
    num: '7130', name: 'Snowspeeder', es: 'Speeder de nieve',
    year: 1999, era: 'ot', film: 'El Imperio contraataca', pieces: 212, ages: '7-12', rrp: '19,99',
    minifigs: ['Luke Skywalker (piloto)', 'Dak Ralter', 'Soldado de Hoth'],
    summary: 'Luke y Dak frenan el avance imperial en Hoth con dos cañones láser frontales y el arpón trasero. El soldado de Hoth rastrea la nave con su radar.',
    notes: ['Primer Snowspeeder de LEGO.', 'Es casi todo gris, aunque la nave de la película es blanca.']
  },
  {
    num: '7131', name: "Anakin's Podracer", es: 'Vaina de carreras de Anakin',
    year: 1999, era: 'ep1', film: 'La amenaza fantasma', pieces: 134, ages: '7-12', rrp: '14,99',
    minifigs: ['Anakin Skywalker', 'Padmé Amidala', 'Droide de foso'],
    summary: 'La vaina azul y amarilla con la que Anakin corre la Boonta Eve Classic, unida a sus dos motores por un haz de energía.',
    notes: ['Uno de los solo cuatro sets de la época que incluyen a Padmé.']
  },
  {
    num: '7140', name: 'X-Wing Fighter', es: 'Caza Ala-X',
    year: 1999, era: 'ot', film: 'Una nueva esperanza', pieces: 263, ages: '7-12', rrp: '30,00',
    minifigs: ['Luke Skywalker (piloto)', 'R2-D2', 'Biggs Darklighter', 'Mecánico rebelde'],
    summary: 'Las alas se abren de posición de vuelo a posición de ataque. Incluye un vehículo de tierra con herramientas para preparar el Ala-X antes de cada misión.',
    notes: ['Considerado el primer set Star Wars lanzado por LEGO.', 'Fue portada de un catálogo LEGO.', 'Se reeditó en 2002 como 7142.']
  },
  {
    num: '7141', name: 'Naboo Fighter', es: 'Caza de Naboo',
    year: 1999, era: 'ep1', film: 'La amenaza fantasma', pieces: 174, ages: '7-12', rrp: '19,99',
    minifigs: ['Anakin Skywalker', 'R2-D2', 'Droide de combate', 'Droide de combate'],
    summary: 'El caza N-1 amarillo con cabina abatible y hueco para R2-D2. Trae un pequeño vehículo de servicio y dos droides de combate.',
    notes: ['El vehículo de servicio no aparece en la película.']
  },
  {
    num: '7150', name: 'TIE Fighter & Y-Wing', es: 'Caza TIE y Ala-Y',
    year: 1999, era: 'ot', film: 'Una nueva esperanza', pieces: 407, ages: '8-12', rrp: '49,99',
    minifigs: ['Darth Vader', 'Dutch Vander', 'R4-D5'],
    summary: 'Dos naves en una caja: el bombardero Ala-Y con cañones de iones giratorios y el TIE de Darth Vader. Tú decides quién gana.',
    notes: ['Incluido también en el pack 78744 Star Wars Value Pack.']
  },
  {
    num: '7151', name: 'Sith Infiltrator', es: 'Infiltrador Sith',
    year: 1999, era: 'ep1', film: 'La amenaza fantasma', pieces: 243, ages: '8-12', rrp: '29,99',
    minifigs: ['Darth Maul', 'Droide sonda Sith', 'Droide sonda Sith', 'Droide sonda Sith'],
    summary: 'La nave de Darth Maul libera tres droides sonda y abre su escotilla trasera para sacar el speeder Sith. La parte posterior se separa como transporte.',
    notes: ['Usa azul en el casco, un color que no corresponde a la nave de la película.', 'Primer set con droides sonda Sith como minifiguras.']
  },
  {
    num: '7161', name: 'Gungan Sub', es: 'Submarino gungan',
    year: 1999, era: 'ep1', film: 'La amenaza fantasma', pieces: 375, ages: '8-12', rrp: '24,99',
    minifigs: ['Qui-Gon Jinn', 'Obi-Wan Kenobi (padawan)', 'Jar Jar Binks'],
    summary: 'El bongo gungan con hélice giratoria rumbo a Theed. A diferencia de la película, tiene tres cabinas y se divide en tres partes.',
    notes: ['Incluye plantas submarinas y una mantarraya en lugar del monstruo de la caja.', 'Obi-Wan lleva capucha, algo que no ocurre en la escena original.']
  },
  {
    num: '7171', name: 'Mos Espa Podrace', es: 'Carrera de vainas de Mos Espa',
    year: 1999, era: 'ep1', film: 'La amenaza fantasma', pieces: 894, ages: '8-12', rrp: '89,99',
    minifigs: ['Anakin Skywalker', 'Padmé Amidala', 'Qui-Gon Jinn', 'Jar Jar Binks', 'R2-D2', 'Sebulba', 'Gasgano', 'Droide de foso', 'Droide de foso', 'Droide de foso'],
    summary: 'Tres vainas de carreras (Anakin, Sebulba y Gasgano), tribuna y tres droides de foso. El set más grande de la primera ola.',
    notes: ['Los brazos color arena que unen las vainas no existen en la película: dan estabilidad al modelo.', 'En España y México se promocionó con Nesquik bajo el lema «Que la suerte te acompañe».']
  },
  {
    num: '7104', name: 'Desert Skiff', es: 'Esquife del desierto',
    year: 2000, era: 'ot', film: 'El retorno del Jedi', pieces: 53, ages: '6-10', rrp: '5,99',
    minifigs: ['Luke Skywalker (Jedi)', 'Han Solo'],
    summary: 'Luke y Han escapan sobre el esquife en el desierto de Tatooine. Luke tiene su sable de luz listo por si hay problemas.',
    notes: ['El esquife regresó en 2006 dentro del 6210 Jabba\'s Sail Barge.']
  },
  {
    num: '7115', name: 'Gungan Patrol', es: 'Patrulla gungan',
    year: 2000, era: 'ep1', film: 'La amenaza fantasma', pieces: 77, ages: '7-12', rrp: '9,99',
    minifigs: ['Jar Jar Binks', 'Guerrero gungan'],
    summary: 'Jar Jar y un guerrero gungan patrullan Naboo a lomos de dos kaadu, con un carro de boomas de energía.',
    notes: ['Los kaadu solo aparecieron en este set.', 'Seis ladrillos redondos 1x1 hacen de boomas.']
  },
  {
    num: '7124', name: 'Flash Speeder', es: 'Speeder Flash',
    year: 2000, era: 'ep1', film: 'La amenaza fantasma', pieces: 105, ages: '7-12', rrp: '9,99',
    minifigs: ['Oficial de seguridad de Naboo'],
    summary: 'El speeder verde de las fuerzas de seguridad reales de Naboo, con bláster de persecución para mantener seguras las calles de Theed.',
    notes: ['Se podía reconstruir como grúa o como otro deslizador.', 'Rediseñado en 2015 como 75091.']
  },
  {
    num: '7134', name: 'A-Wing Fighter', es: 'Caza Ala-A',
    year: 2000, era: 'ot', film: 'El retorno del Jedi', pieces: 123, ages: '7-12', rrp: '14,99',
    minifigs: ['Piloto de Ala-A', 'Mecánico rebelde'],
    summary: 'El caza más rápido de la Alianza, con dos cañones bláster pivotantes en las alas y cabina que se abre.',
    notes: []
  },
  {
    num: '7144', name: 'Slave I', es: 'Slave I',
    year: 2000, era: 'ot', film: 'El Imperio contraataca', pieces: 165, ages: '7-12', rrp: '19,99',
    minifigs: ['Boba Fett', 'Han Solo (en carbonita)'],
    summary: 'Boba Fett transporta a Han Solo congelado en carbonita hacia Jabba. Las alas color arena giran y un compartimento oculto guarda el bloque de carbonita.',
    notes: ['Primer Slave I de LEGO y el más pequeño fuera de la línea Mini.', 'Incluido en el pack 65030 Star Wars Co-Pack.']
  },
  {
    num: '7180', name: 'B-Wing at Rebel Control Center', es: 'Ala-B en el centro de control rebelde',
    year: 2000, era: 'ot', film: 'El retorno del Jedi', pieces: 338, ages: '8-12', rrp: '29,99',
    minifigs: ['Piloto de Ala-B', 'Mecánico rebelde', 'R4-D5'],
    summary: 'La cabina del Ala-B se mantiene estable mientras el resto de la nave gira. Incluye el centro de control rebelde donde el mecánico prepara la nave.',
    notes: []
  },
  {
    num: '7190', name: 'Millennium Falcon', es: 'Halcón Milenario',
    year: 2000, era: 'ot', film: 'Una nueva esperanza', pieces: 659, ages: '8-12', rrp: '99,99',
    minifigs: ['Han Solo', 'Chewbacca', 'Princesa Leia', 'Luke Skywalker', 'R2-D2', 'C-3PO'],
    summary: 'El primer Halcón Milenario de LEGO: 30 cm de lado a lado, dos cañones cuádruples, tablero de dejarik y compartimentos de contrabando.',
    notes: ['La caja original anunciaba sus 12 pulgadas de largo como reclamo.']
  },
  {
    num: '7106', name: 'Droid Escape', es: 'Escape de los droides',
    year: 2001, era: 'ot', film: 'Una nueva esperanza', pieces: 44, ages: '6-12', rrp: '6,99',
    minifigs: ['C-3PO', 'R2-D2'],
    summary: 'R2-D2 y C-3PO huyen con los planos de la Estrella de la Muerte en la cápsula de escape. Al aterrizar, la escotilla se abre.',
    notes: []
  },
  {
    num: '7127', name: 'Imperial AT-ST', es: 'AT-ST imperial',
    year: 2001, era: 'ot', film: 'El retorno del Jedi', pieces: 107, ages: '7-12', rrp: '9,99',
    minifigs: ['Chewbacca'],
    summary: 'Chewbacca se hace con un AT-ST en Endor. Patas articuladas, cañones bláster y cabina de mando que se abre por arriba.',
    notes: ['Su Chewbacca es marrón oscuro, distinto del marrón rojizo de versiones posteriores.']
  },
  {
    num: '7166', name: 'Imperial Shuttle', es: 'Lanzadera imperial',
    year: 2001, era: 'ot', film: 'El retorno del Jedi', pieces: 234, ages: '8-12', rrp: '34,99',
    minifigs: ['Emperador Palpatine', 'Guardia real', 'Guardia real', 'Piloto imperial'],
    summary: 'La lanzadera clase Lambda del Emperador. La rampa trasera baja para el embarque y las alas se despliegan para el vuelo.',
    notes: []
  },
  {
    num: '7103', name: 'Jedi Duel', es: 'Duelo Jedi',
    year: 2002, era: 'ep2', film: 'El ataque de los clones', pieces: 81, ages: '7-12', rrp: '9,99',
    minifigs: ['Yoda', 'Conde Dooku'],
    summary: 'El Conde Dooku intenta huir en su speeder y solo Yoda puede detenerlo. Incluye el primer Yoda minifigura.',
    notes: ['Incluido en el pack 65106 Episode II Co-Pack.']
  },
  {
    num: '7143', name: 'Jedi Starfighter', es: 'Caza estelar Jedi',
    year: 2002, era: 'ep2', film: 'El ataque de los clones', pieces: 138, ages: '8-12', rrp: '19,99',
    minifigs: ['Obi-Wan Kenobi', 'R4-P17'],
    summary: 'Obi-Wan persigue a Jango Fett a través del campo de asteroides de Geonosis en su caza Delta-7, con R4-P17 integrado en el ala.',
    notes: ['Primera aparición de la cabina curva transparente.', 'Incluye unos prismáticos, posible guiño a una escena eliminada.']
  },
  {
    num: '7153', name: "Jango Fett's Slave I", es: 'Slave I de Jango Fett',
    year: 2002, era: 'ep2', film: 'El ataque de los clones', pieces: 358, ages: '8-12', rrp: '49,99',
    minifigs: ['Jango Fett', 'Boba Fett (niño)'],
    summary: 'Jango y el joven Boba huyen en el Slave I a través del campo de asteroides. Más del doble de piezas que la versión del 2000.',
    notes: ['También se vendió como 65153, con un maletín de carga de regalo.']
  },
  {
    num: '7163', name: 'Republic Gunship', es: 'Cañonera de la República',
    year: 2002, era: 'ep2', film: 'El ataque de los clones', pieces: 686, ages: '8-12', rrp: '89,99',
    minifigs: ['Soldado clon', 'Soldado clon', 'Soldado clon', 'Soldado clon', 'Súper droide de combate', 'Súper droide de combate', 'Droideka', 'Caballero Jedi'],
    summary: 'La cañonera LAAT/i llega al rescate en Geonosis tripulada por soldados clon. Las compuertas frontales esconden compartimentos secretos.',
    notes: ['Único set con súper droides de combate azul metalizado.']
  }
];

function swFindSet(num) {
  for (var i = 0; i < SW_SETS.length; i++) {
    if (SW_SETS[i].num === String(num)) return SW_SETS[i];
  }
  return null;
}

/* Fotos revisadas a mano: qué imagen de cada set es un recorte limpio sobre blanco.
   png = BrickLink (modelo), alt = Rebrickable (contenido). El resto son fotos de caja o escena. */
var SW_CUTOUTS = {
  png: ['7106', '7111', '7115', '7127', '7134', '7141', '7144', '7151', '7153', '7161', '7163', '7166', '7180', '7190'],
  alt: ['7103', '7104', '7106', '7115', '7124', '7127', '7134', '7140', '7141', '7143', '7144', '7150', '7153', '7163', '7166', '7180', '7190']
};
