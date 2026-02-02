export const homeworkApp = (): void => {
  // Tipos
  const batman: string = "Bruce";
  console.log("Batman:", batman);

  const superman: string = "Clark";
  console.log("Superman:", superman);

  const existe: boolean = false;
  console.log("Existe:", existe);

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  console.log("Pareja Heroes:", parejaHeroes);

  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];
  console.log("Villano:", villano);

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
  console.log("Aliados:", aliados);

  //Enumeraciones
  enum FuerzaSuperHeroes {
    fuerzaFlash = 5,
    fuerzaSuperman = 100,
    fuerzaBatman = 1,
    fuerzaAcuaman = 0,
  }
  console.log("Fuerza Super Heroes:", FuerzaSuperHeroes);

  // Retorno de funciones
  const activarBatisenial = (): string => "Activada.";
  console.log("Activar Batiseñal:", activarBatisenial());

  const pedirAyuda = (): void => {
    console.log("¡Auxilio!");
  };

  pedirAyuda();

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
};
