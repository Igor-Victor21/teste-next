import Image from "next/image";
import img1 from "../app/assets/img-foda.jpg"

export default function Home() {
  return (
   <>
    <section className="w-full h-screen bg-black">
      <h1 className="text-white text-center">ESSE EMOJI É FODA</h1>
      <Image className="w-[100px] h=[auto] flex items-center justify-center flex-col" src={img1} alt="emoji foda"/>
    </section>
    <section className="w-full h-screen bg-black">
      <h1 className="text-white">sessao 2</h1>
    </section>
    <section className="w-full h-screen bg-black">
      <h1 className="text-white">sessao 3</h1>
    </section>
   </>
  );
}
