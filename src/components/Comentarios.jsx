import Citacao from "../assets/citacao.png";
import Iconwhite from "../assets/Iconwhite.png";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center bg-[#2A2A2A] text-[#FEFEFE] rounded-4xl py-10 px-6 w-[37.75rem] h-[16rem]">
      <div className="flex flex-col w-[33.3rem]">
        <div className="flex flex-row gap-10 pb-[2.6rem] justify-between">
          <div className="flex gap-8">
            <div><img className="h-[3.5rem] w-[3.5rem]" src={Iconwhite} alt=""/></div>
            <div className="flex justify-center flex-col">
              <h5 className="font-bold">Vitor</h5>
              <h6>eng. software</h6>
            </div>
          </div>
          <div className="h-[2.2rem] w-[3.3rem]"><img src={Citacao} alt="" /></div>
        </div>
      </div>
      <div className="w-[33.3rem]"><p>tincidunt facilisis, ac egestas magna lectus sed libero. Integer sit amet tincidunt lectus.  Designs that make a lsting impression. tincidunt facilisis, ac egestas magna lectus sed libero. Integer sit amet tincidunt lectus.  Designs that make a lsting impression.</p></div>
    </div>
  );
}