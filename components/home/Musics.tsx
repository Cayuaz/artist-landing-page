import Music from "./Music";

const Musics = () => {
  return (
    <div className="flex flex-col gap-5 w-5/6">
      <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-wider italic text-center">
        Músicas de destaque
      </h2>
      {/* Lista de músicas */}
      <div className="mt-15 flex flex-col gap-20 items-center">
        {/* Música 1 */}
        <Music
          musicName="Primeira vista"
          musicLink="https://on.soundcloud.com/ybR5NW0yjCpl2kxxIs"
          musicUrl="/primeira-vista.jpg"
          musicDescription="Primeira Vista é uma música que fala sobre aquele choque de ver alguém especial pela primeira vez e sentir que o mundo parou, e te faz sentir leve, como se você estivesse flutuando enquanto tenta processar que um encontro desses realmente aconteceu."
          year={2026}
        />
        {/* Música 2 */}
        <Music
          musicName="Weboceano"
          musicLink="https://on.soundcloud.com/QdvJEqf4A0zPYo2ORf"
          musicUrl="/weboceano.jpg"
          musicDescription="Weboceano é uma música que fala sobre a exaustão de se sentir perdido na própria rotina e a ansiedade de tentar se encontrar em meio ao caos, e te faz sentir aquela agitação de quem já não sabe mais para onde correr, como se estivesse travado em um ciclo que não para."
          year={2026}
        />
        {/* Música 3 */}
        <Music
          musicName="Fica mais um pouco"
          musicLink="https://on.soundcloud.com/T5sWGvRBBVnJDJC63r"
          musicUrl="/siames.jpg"
          musicDescription="Fica mais um pouco, uma das faixas que dá o tom do álbum Siamês, fala sobre o desejo de congelar o tempo ao lado de quem se ama, fazendo planos simples para um futuro inteiro juntos, e te faz sentir um conforto imediato, como se você estivesse em um fim de tarde calmo, assistindo o sol nascer sem pressa nenhuma de ir embora."
          year={2025}
        />
      </div>
    </div>
  );
};

export default Musics;
