import Arrow from "../assets/Arrow.png";
import Icon from "../assets/Icon.png";
import { useTheme } from "../context/ThemeProvider";

export default function Cards({ nome = "Vitor", cargo = "eng. software", descricao = "tincidunt facilisis, ac egestas magna lectus sed libero. Integer sit amet tincidunt lectus.  Designs that make a lsting impression.", onClick, id }) {
  // Gerar URL de imagem aleatória baseada no ID ou nome
  const imageId = id || nome.length;
  const imageUrl = `https://i.pravatar.cc/150?img=${imageId}`;
  const { DarkMode} = useTheme();

  return (
    <div 
      onClick={onClick}
      className="flex justify-center flex-col items-center bg-[#FEFEFE] border dark:border-[#0a0a0a] text-black rounded-4xl py-10 px-6 w-[21.5rem] cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col">
        <div className="flex flex-row gap-10 pb-5">
          <div className="rounded-full overflow-hidden">
            <img src={imageUrl} alt={nome} className="w-12 h-12 object-cover rounded-full" />
          </div>
          <div className="flex justify-center flex-col">
            <h5 className="font-bold">{nome}</h5>
            <h6>{cargo}</h6>
          </div>
          <div className="bg-[#0A0A0A] h-[1.9rem] w-[1.9rem] rounded-full flex justify-center items-center"><img src={Arrow} alt="" /></div>
        </div>
      </div>
      <div className="w-[100%] bg-black h-[1px] "></div>
      <div className="w-[17.25rem] pt-8 text-xs "><p>{descricao}</p></div>
    </div>
  );
}