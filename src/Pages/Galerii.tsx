import Gallery from "./components/Gallery";

const Galerii = () => {
    return (
        <div className="mx-auto pb-6 pt-24 laptop:w-8/12 w-10/12 bg-pink-100">
            <h1 className="flex 
            items-center 
            justify-center 
            text-center 
            laptop:text-left 
            laptop:justify-start 
            text-4xl 
            tablet:text-5xl 
            desktop:text-5xl 
            font-semibold">GALERII</h1>
            <Gallery />
        </div>
    )
}

export default Galerii;