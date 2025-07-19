import Image from "next/image";




export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-6xl h-[300px] md:h-[420px] mt-6">
      <Image src="/assets/images/HeroBG.jpg" alt=""  fill priority className="object-cover rounded-2xl"/>
      <div className="absolute inset-0 bg-black/30 rounded-2xl" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-3xl font-bold md:text-6xl drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="mt-2 text-sm md:text-xl drop-shadow">
            The best prices for over 2&nbsp;million properties worldwide
          </p>
        </div>
      </div>
    </div>
  );
}