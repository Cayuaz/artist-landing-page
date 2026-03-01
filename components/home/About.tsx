const About = () => {
  return (
    <div className="flex flex-col gap-5 w-5/6">
      <h1 className=" text-2xl font-bold uppercase tracking-wider italic text-center text-[#B35A44]">
        Sobre o artista
      </h1>

      <p className="text-[#F3F0E7] w-4/5 mx-auto italic tracking-tighter text-lg font-mono text-center mt-4 px-4 md:px-0">
        Murinani (Murilo Ernani) é um artista natural de Cuiabá, MT, que iniciou
        seus projetos musicais em 2025. Para ele, a música nunca foi sobre criar
        um produto para o mercado, mas sobre a necessidade vital de expressar o
        que o papel já não conseguia mais conter. O que antes era traduzido em
        desenhos e traços manuais, hoje encontra sua forma definitiva através
        das frequências sonoras.
      </p>

      <p className="text-[#F3F0E7] w-4/5 mx-auto italic tracking-tighter text-lg font-mono text-center mt-4 px-4 md:px-0">
        A obra de Murinani é um reflexo de quem enxerga a arte como um diálogo
        visceral. Suas composições narram a coragem de quebrar o retrovisor para
        enfrentar o que vem pela frente, a escolha de ser voz quando o silêncio
        se torna insuportável e o desejo de ver o tempo passar devagar ao lado
        de quem se ama.
      </p>

      <p className="text-[#F3F0E7] w-4/5 mx-auto italic tracking-tighter text-lg font-mono text-center mt-4 px-4 md:px-0">
        {`É nesse processo de peito aberto que nascem faixas como "Me Sinto Rei". A música é um desabafo direto sobre o peso das quedas e a coragem de se levantar, assumindo a própria história sem tentar apagar as marcas que a vida deixou. Ele rima sobre aceitar a dor como parte de quem somos, culminando em uma reflexão que bate de frente com a realidade:`}
      </p>

      <span className="text-[#B35A44] italic font-mono tracking-wider text-center block mt-4">
        {`"FERIDAS SE CURAM, CICATRIZES NÃO."`}
      </span>

      <p className="text-[#F3F0E7] w-4/5 mx-auto italic tracking-tighter text-lg font-mono text-center mt-4 px-4 md:px-0">
        Essa frase acabou virando a verdadeira identidade do artista cuiabano. É
        a filosofia de quem não pede licença para existir com todas as suas
        falhas e vivências, transformando o que antes era apenas uma ferida
        aberta em uma arte crua, honesta e real.
      </p>
    </div>
  );
};

export default About;
