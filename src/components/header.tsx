export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-center mt-8">
        <img src="/images/logoHeader.png" alt="" className="w-150" />
      </div>

      <div className="flex items-center -col justify-center">
        <div className="flex items-center flex-col justify-center text-primary font-PoetsenOne">
          <p className="text-xl mb-5 mt-10">Procurar por nome: </p>
          <input
            type="text"
            name="nome"
            placeholder="Nome do Pokémon:"
            className="w-full max-w-md px-4 py-2 border border-blue-900 rounded-full
                 shadow-[0_4px_6px_rgba(0,0,0,0.5)]  font-bold italic
                 text-center outline-none focus:ring-2"
          />
        </div>
        <img src="/images/pokebola.png" alt="" className="w-25 ml-30 mt-15" />
      </div>
    </header>
  );
}
