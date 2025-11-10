import logo from "../assets/images/icon.png"

const AboutUs = () => {
    return (<>
        <section id="about" name="about my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center p-5">
                <div className="flex flex-col lg:px-10">
                    <h1 className="cursive font-light py-5 text-3xl md:text-6xl ">
                        About <span className="text-[#ee0548]">Us</span>
                    </h1>
                    <img src={logo} className="h-[30dvh] object-fit md:hidden" />
                    <p className="text-justify">
                        Technology rules us and the world today. So, how can our Big Fat Indian Weddings remain untouched by it?<br /><br />

                        Here comes Wedding Bells at your doorstep to induce the flavor of technology in desi Indian weddings.<br />
                        We are the next gen tech-savvy wedding invitation website providers creating a perfect start for perfect wedding, offering you a platform where you can share your stories, memorable moments and your wedding details with people who are important to you.<br /><br />

                        We firmly believe that Marriage is an important event in everyone's life, Every couple aspires to make it unique and different. Wedding Bells makes that dream come true.
                    </p>
                </div>
                <div className="hidden md:flex md:items-center md:justify-center">
                    <img src={logo} className="h-[75dvh] object-cover" />
                </div>
            </div>
        </section>
    </>)
}

export default AboutUs