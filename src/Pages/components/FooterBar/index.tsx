const FooterBar = () => {
    const flexBetween = "flex items-center justify-center";

    return (
        <div className={`${flexBetween} bg-blue-100 fixed bottom-0 z-30 w-full`}>
            <p>© 2024 Porkuni Koertehotell</p>
        </div>
    )

}

export default FooterBar