import InstagramEmbed from "./components/InstagramEmbed"

const Blogi = () => {
    
    return (
        <>
            <div className="mx-auto pb-6 pt-24 w-8/12 bg-pink-100">
                <div className="flex flex-wrap justify-between">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=600&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1343616186331441" 
                    width="500" height="650" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <InstagramEmbed />
                </div>
            </div>
        </>
    )

}

export default Blogi