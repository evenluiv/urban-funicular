import FacebookPageEmbed from "./components/FacebookEmbed";
import InstagramEmbed from "./components/InstagramEmbed";

const Blogi = () => {
    
    return (
        <div className="mx-auto pb-6 pt-24 laptop:w-8/12 w-10/12 bg-pink-100">
            <h1 className="flex 
                items-center 
                justify-center 
                text-center 
                desktop:text-left 
                desktop:justify-start 
                text-4xl 
                tablet:text-5xl 
                desktop:text-5xl 
                font-semibold
                z-10">
                BLOGI
            </h1>
            <div className="grid grid-cols-1 gap-6 pt-4">
                <div className="flex justify-center">
                    <FacebookPageEmbed href="https://www.facebook.com/facebook" />
                </div>
                <div className="flex justify-center z-10">
                    <InstagramEmbed url="https://www.instagram.com/instagram/" />
                </div>
            </div>
        </div>
    );
};

export default Blogi;
