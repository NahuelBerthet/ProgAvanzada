//! Ejercicio 1: Crear un objeto literal para un dispositivo de red
const router = {
  modelo: "Modelo 1 ",
  marca: "TP-Link",
  puertos: "3",
  velocidad: "20 Mbps",
  soportawifi: true
};
// console.log(router);
//! Ejercicio 2: Array de dispositivos de red
const dispositivosRed = [
  { tipo: "Router", marca: "TP-Link", modelo: "AX3000", precio: 89.99},
  { tipo: "Switch", marca: "Cisco", modelo: "SG250-08", precio: 129.99},
  { tipo: "Firewall", marca: "Fortinet", modelo: "FortiGate 40F", precio: 349.0},
  { tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi UAP-AC-PRO", precio: 139.0},
  { tipo: "Router", marca: "Netgear", modelo: "Nighthawk RAX50", precio: 199.99},
];
// console.log(dispositivosRed);

//! Ejercicio 3: Filtrar dispositivos por marca.

const marcaEspecifica = dispositivosRed.filter(
  (dispositivo) => dispositivo.marca == "Netgear"
);
console.log('Dispositivo marca especifica: ',marcaEspecifica);

//! Ejercicio 4: Mapear direcciones ip

const servidores = [
  { nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux" },
  { nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" },
  { nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux" },
  { nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux" },
  { nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows" },
];
const ips = servidores.map(servidor => servidor.ip);

console.log('Filtro por ip: ', ips);

//! Ejercicio 5: Filtrar y ordenar paquetes de datos.

const paquetesDatos = [
{ id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3 },
{ id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1 },
{ id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5 },
{ id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2 },
{ id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 }
];

const paqFiltradosYOrdenados = paquetesDatos.filter(paquete => paquete.tamaño > 1000).sort((a, b) => b.prioridad - a.prioridad); 

console.log('Mayores a 1000 y ordenados: ',paqFiltradosYOrdenados);


//! Ejercicio 6: Calcular estadisticas de red 

const traficoRed = {
  "08:00": 1250,
  "09:00": 1870,
  "10:00": 2100,
  "11:00": 1950,
  "12:00": 1600,
  "13:00": 1300,
  "14:00": 1700,
  "15:00": 2200,
  "16:00": 1800,
  "17:00": 1500
};

let totalDatos = 0;
let horaMaxima = "";
let maximoTrafico = 0;

for (const hora in traficoRed) {
  const datos = traficoRed[hora];
  totalDatos += datos;

  if (datos > maximoTrafico) {
    maximoTrafico = datos;
    horaMaxima = hora;
  }
}

console.log("Total de datos transferidos:", totalDatos, "MB");
console.log("Hora con mayor trafico:", horaMaxima, "con", maximoTrafico, "MB");


//! Ejercicio 7: Analizar conexiones de red

const conexiones = [
  { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" },
  { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" },
  { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" },
  { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" },
  { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" },
  { id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" },
  { id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" },
  { id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" }
];
//Crea un objeto para contar las conexiones por protocolo
const conexionesPorProtocolo = {};
// Tu código aquí (recorre el array y cuenta las conexiones)
for (const conexion of conexiones) {
  const protocolo = conexion.protocolo;

  if (conexionesPorProtocolo[protocolo]) {
    conexionesPorProtocolo[protocolo]++;
  } else {
    conexionesPorProtocolo[protocolo] = 1;
  }
}

console.log("Conexiones por protocolo:", conexionesPorProtocolo);

//! Ejercicio 8: Filtrar y transformar alertas de seguridad
const alertas = [
  { id: 1, nivel: "alto", mensaje: "Acceso no autorizado detectado", origen: "192.168.1.10", hora: "12:00" },
  { id: 2, nivel: "medio", mensaje: "Uso elevado de CPU", origen: "192.168.1.20", hora: "17:45" },
  { id: 3, nivel: "alto", mensaje: "Falta de recursos", origen: "10.0.0.5", hora: "20:30" },
  { id: 4, nivel: "bajo", mensaje: "Dispositivo desconectado", origen: "192.168.1.15", hora: "02:15" }
];

const alertasAltas = alertas.filter(alerta => alerta.nivel === "alto");

const mensajesAdministrador = alertasAltas.map(alerta => {
  return `Alerta ALTA [${alerta.hora}]: ${alerta.mensaje} desde ${alerta.origen}`;
});

console.log("Alertas filtradas de nivel alto:", alertasAltas);
console.log("Mensajes para el administrador:");
mensajesAdministrador.forEach(msg => console.log(msg));


const dispositivos = [
  { id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" },
  { id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" },
  { id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" },
  { id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" }
];

const conexionesActivas = [
  { origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500 },
  { origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 },
  { origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200 }
];
// Crea un informe que combine la información de dispositivos y conexiones
const informeActividad = conexionesActivas.map(conexion => {
  // Encuentra los dispositivos de origen y destino
  const origenDispositivo = dispositivos.find(d => d.ip === conexion.origen);
  const destinoDispositivo = dispositivos.find(d => d.ip === conexion.destino);

  // Retorna un objeto con la información combinada
  return {
    origen: {
      ip: origenDispositivo?.ip,
      nombre: origenDispositivo?.nombre,
      tipo: origenDispositivo?.tipo
    },
    destino: {
      ip: destinoDispositivo?.ip,
      nombre: destinoDispositivo?.nombre,
      tipo: destinoDispositivo?.tipo
    },
    protocolo: conexion.protocolo,
    bytes: conexion.bytes
  };
});

console.log("Informe de actividad de red:", informeActividad);


//! Ejercicio 9: Combinar datos de dispositivos y conexiones

const topologiaRed = {
nodos: [
{ id: "A", tipo: "Router", ubicacion: "Planta 1" },
{ id: "B", tipo: "Switch", ubicacion: "Planta 1" },
{ id: "C", tipo: "Switch", ubicacion: "Planta 2" },
{ id: "D", tipo: "Switch", ubicacion: "Planta 3" },

{ id: "E", tipo: "Router", ubicacion: "Planta 3" }
],
conexiones: [
{ origen: "A", destino: "B", ancho_banda: 1000 },
{ origen: "A", destino: "C", ancho_banda: 1000 },
{ origen: "B", destino: "C", ancho_banda: 100 },
{ origen: "B", destino: "D", ancho_banda: 100 },
{ origen: "C", destino: "D", ancho_banda: 100 },
{ origen: "C", destino: "E", ancho_banda: 1000 },
{ origen: "D", destino: "E", ancho_banda: 1000 }
]
};

// Cuenta el número de conexiones por nodo
const conexionesPorNodo = {};
topologiaRed.nodos.forEach(nodo => {
conexionesPorNodo[nodo.id] = 0;
});

// Tu código aquí para contar las conexiones
topologiaRed.conexiones.forEach(({origen, destino}) => {
  conexionesPorNodo[origen] ++;
  conexionesPorNodo[destino]++;
})

// Encuentra los nodos con más conexiones
const nodosOrdenados = Object.entries(conexionesPorNodo)
.sort((a,b) => a[1] - b[1]);

// Sugiere optimizaciones (por ejemplo, los nodos con más de 2 conexiones podrían necesitar más
// ancho de banda)
const sugerencias = [];
// Tu código aquí
nodosOrdenados.forEach(([id, cantidad]) => {
  if (cantidad > 2) {
    const nodo = topologiaRed.nodos.find(n => n.id === id);
    sugerencias.push("El nodo", nodo.id , " tiene", cantidad, " de conexiones por lo que podria necesitar mas ancho de banda")
  }
});


console.log("Conexiones por nodo:", conexionesPorNodo);
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados);
console.log("Sugerencias de optimización:", sugerencias);

//! Ejercicio 10: Analizar y optimizar topología de red

