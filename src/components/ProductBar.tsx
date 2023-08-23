import { PROJECTS } from "../data"

interface ProductBarProps {
    productBarHeader: string
}

export const ProductBar = ({productBarHeader}: ProductBarProps) => {

    return (
        <div className="py-28 flex flex-col items-center w-full">
            <div className="text-center bg-ycs-blue text-white text-3xl rounded-md font-normal p-4 mb-12 ">{productBarHeader}</div>
            <div className="w-3/4 h-28 bg-gray-400 shadow-lg shadow-black rounded-full flex items-center justify-evenly">
            {
                PROJECTS.map((project, i) => (
                    <img className="w-20 h-20 rounded-lg" key={i} src={project.image} alt={project.name} />
                ))
            }
            </div>
            <div className="w-3/4 h-6 relative mt-4 text-md text-gray-400 text-center flex justify-evenly">
            {
                PROJECTS.map((project, i) => (
                    <div key={i}>{project.name}</div>
                ))
            }
            </div>
        </div>
    )

}