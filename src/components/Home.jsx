/* eslint-disable react/no-unescaped-entities */
import { HiArrowNarrowRight} from "react-icons/hi";
const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">

            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#ffffff]">Hi,My Name is</p>
                <h1 className="text-3xl sm:7xl font-bold text-[#ccd6f6]">Aisha Muhyiddeen Ahmad</h1>
                <h2 className="text-3xl sm:7xl font-bold text-[#8892b0]">I'm a Frontend Developer.</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a frontend developer who have a deep passion for developing and building solutions that are 
                    user-friendly with fuctional and beautiful user experience to help achieve meaningful results.
                   
                </p>
                <div>
                    <button className="text-white group border-2 px-6 py-2 my-2 flex items-center hover:bg-[#8892b0] hover:border-[#8892b0]">View Work 
                    <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                    </span>
                    </button>
                </div>

            </div>
        </div>

        );
}

export default Home 