import Image from "next/image";

export default function Navbar(){
    return(
        <>
        <div className="flex justify-between bg-[#537FE7] px-4 py-4">
            <div className="inline-block">
                <Image src={'logo.svg'} width={120} height={100} alt="logo"/>
            </div>
            <div className="inline-block">
                <ul className="flex space-x-10 py-1 align-middle text-[#181823] font-bold ">
                    <li className="cursor-pointer hover:text-fuchsia-100">Home</li>
                    <li className="cursor-pointer hover:text-fuchsia-100">About</li>
                    <li className="cursor-pointer hover:text-fuchsia-100">Team</li>
                    <li className="cursor-pointer hover:text-fuchsia-100">Blogs</li>
                    <li className="cursor-pointer hover:text-fuchsia-100">Events</li>
                    <li className="cursor-pointer hover:text-fuchsia-100">Join Now</li>
                </ul>
            </div>
            <div className="inline-block"></div>
        </div>
        </>
    )
}