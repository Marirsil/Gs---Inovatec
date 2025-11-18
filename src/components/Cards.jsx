import Arrow from "../assets/Arrow.png";
import Icon from "../assets/Icon.png";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center bg-[#FEFEFE] text-black rounded-4xl py-10 px-6 w-[21.5rem]">
      <div className="flex flex-col">
        <div className="flex flex-row gap-10 pb-5">
          <div className="bg-black rounded-full"><img src={Icon} alt="" /></div>
          <div className="flex justify-center flex-col">
            <h5 className="font-bold">Vitor</h5>
            <h6>eng. software</h6>
          </div>
          <div className="bg-[#0A0A0A] h-[1.9rem] w-[1.9rem] rounded-full flex justify-center items-center"><img src={Arrow} alt="" /></div>
        </div>
      </div>
      <div className="w-[100%] bg-black h-[1px]"></div>
      <div className="w-[17.25rem] pt-8 text-xs"><p>tincidunt facilisis, ac egestas magna lectus sed libero. Integer sit amet tincidunt lectus.  Designs that make a lsting impression.</p></div>
    </div>
  );
}