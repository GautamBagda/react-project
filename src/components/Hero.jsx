import Typewriter from "typewriter-effect";

const Hero = ()=>{
    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] mx-auto w-full h-screen flex text-center flex-col justify-center">
                <p className="uppercase text-[#00df9a] font-bold p-2">growing with data analytics</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
                <div className="flex items-center justify-center space-x-2">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, flexible financing with</p>
                    <div className="md:text-5xl sm:text-4xl text-xl font-bold">
                        <Typewriter
                            options = {{
                                strings:["BTB", "BTC", "SASS"],
                                autoStart: true,
                                loop:true
                            }}
                        />
                    </div>
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analystics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className="bg-[#00df9a] w-[200px] mx-auto rounded-md font-medium text-black my-6 py-3">Get Started</button>
            </div>
        </div>
    )
}
export default Hero