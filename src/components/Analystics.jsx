import react from '../assets/react.svg';

const Analystics = ()=>{
    return(
        <div className="w-full bg-white py-16 px-20">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={react} alt="React image" className='md:h-[50%] md:w-[50%] mx-auto md:ml-5 w-[75%] h-[75%] sm:w-[50%]'/>
                <div className='flex flex-col justify-center'>
                    <p className='uppercase text-[#00df9a] font-bold'>data analystics dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analystics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores, excepturi impedit vitae placeat doloremque minus possimus, iste veniam esse ea rerum! Labore veniam at nulla possimus vel explicabo officiis.</p>
                    <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black md:mx-0'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
export default Analystics