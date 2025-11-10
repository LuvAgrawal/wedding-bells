import { servicesData } from "../assets/data/pageData";
import Heading from "./Heading";

const ServicesCard = () => {
    return (<>
        <div className="grid lg:grid-cols-3 text-center">
            {servicesData.map((service, index) => (
                <div key={index} className="my-2.5 p-5">
                    <span className="">{service.icon}</span>
                    <h2 className="font-bold text-xl">{index + 1}{". "}{service.title}</h2>
                    <p className="font-light ">{service.desc}</p>
                </div>
            ))}
        </div>
    </>)
}

const Services = () => {
    return (<>
        <section id="services" className="bg-[#f1f1f1] p-5">
            <Heading heading={"Our Services"} />
            <p className="text-center">We help you transform your dream wedding into a true masterpiece</p>
            <ServicesCard />
        </section>
    </>);
}

export default Services;