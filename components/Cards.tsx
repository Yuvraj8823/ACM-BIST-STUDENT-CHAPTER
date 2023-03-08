export default function Cards(props) {
  return (
    <>
      <div
        className="relative mx-20 my-12 w-[30rem] h-[20rem] bg-cover bg-center z-0 cursor-pointer shadow-2xl hover:drop-shadow-2xl"
        style={{ backgroundImage: `url(${props.img})` }}
      >

        <div className="absolute bottom-0  w-[100%] h-[8rem] backdrop-blur-[1.2rem] text-black z-10 ">
          <div className="absolute bottom-0 w-[100%] h-[8rem]  text-[5rem] bg-white opacity-50  z-20 py-[0.2rem]">
            <div className="text-[2rem] font-bold text-opacity-100 mx-4 my-1">{props.name}</div>
            <div className="text-[0.8rem] px-8">{props.date}</div>
          </div>
        </div>
      </div>
    </>
  );
}
