export const homeworkApp = (): void => {
  // Tipos
  const batman: string = "Bruce";
  console.log("batman:", batman);

  const superman: string = "Clark";
  console.log("superman:", superman);

  const existe: boolean = false;
  console.log("existe:", existe);

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  console.log("parejaHeroes:", parejaHeroes);

  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];
  console.log("villano:", villano);

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
  console.log("aliados:", aliados);

  //Enumeraciones
  enum FuerzaSuperHeroes {
    fuerzaFlash = 5,
    fuerzaSuperman = 100,
    fuerzaBatman = 1,
    fuerzaAcuaman = 0,
  }
  console.log("FuerzaSuperHeroes:", FuerzaSuperHeroes);

  // Retorno de funciones
  const activarBatisenial = (): string => "Activada.";
  console.log("activarBatisenial:", activarBatisenial());

  const pedirAyuda = (): void => {
    console.log("¡Auxilio!");
  };

  pedirAyuda();

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
};
