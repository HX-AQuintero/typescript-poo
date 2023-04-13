// Anteriormente, usábamos las interfaces así:
export interface Driver {
  database: string;
  password: string;
  port: number;
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

const driver: Driver = {
  database: '',
  password: '',
  port: 23,
  connect: () => {console.log('connected')},
  disconnect: () => {console.log('disconnected')},
  isConnected: (name) => {return name ? true : false}
}

// Vamos a usar las interfaces con las clases para crear contratos:
// OJO! NO es herencia, es implementación de las características de la interface que deben cumplir las clases, aparte de los demás atributos y métodos que se deseen definir:

class PostgresDriver implements Driver {
  constructor(
    public database: string, // Todos los atributos o métodos de interface serán públicos
    public password: string,
    public port: number,
    private host: number
  ){}

  connect(): void {};
  disconnect(): void {};
  isConnected(name: string): boolean {return name ? true : false}
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){}

  connect(): void {};
  disconnect(): void {};
  isConnected(name: string): boolean {return name ? true : false}
}