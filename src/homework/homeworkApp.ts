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
  const aliados: string[] = ["Mujer Maravilla", "Aquaman", "San", "Flash"];
  console.log("Aliados:", aliados);

  //Enumeraciones
  enum FuerzaSuperHeroes {
    fuerzaAquaman = 0,
    fuerzaBatman = 1,
    fuerzaFlash = 5,
    fuerzaSuperman = 100,
  }
  console.log("Fuerza Super Heroes:", FuerzaSuperHeroes);

  const fuerzaAquaman: FuerzaSuperHeroes = FuerzaSuperHeroes.fuerzaAquaman;
  console.log("Fuerza Aquaman:", fuerzaAquaman);

  const fuerzaBatman: FuerzaSuperHeroes = FuerzaSuperHeroes.fuerzaBatman;
  console.log("Fuerza Batman:", fuerzaBatman);

  const fuerzaFlash: FuerzaSuperHeroes = FuerzaSuperHeroes.fuerzaFlash;
  console.log("Fuerza Flash:", fuerzaFlash);

  const fuerzaSuperman: FuerzaSuperHeroes = FuerzaSuperHeroes.fuerzaSuperman;
  console.log("Fuerza Superman:", fuerzaSuperman);

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
