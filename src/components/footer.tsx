import Link from "next/link";

export default function Footer(){

    const companyLinks = [
        {
            url: "#",
            title: "Our Manifesto"
        },
        {
            url: "#",
            title: "Book Ralph to Speak"
        },
        {
            url: "#",
            title: "Contact Us"
        },
        {
            url: "#",
            title: "Careers"
        }
    ];

    const resourcesLink = [

        {
            url: "#",
            title: "Podcast",
        },
        {
            url: "#",
            title: "Case Studies",
        },

    ];

    const ourServicesLink = [
        {
            url: "#",
            title: "Paid Search Ads"
        },
        {
            url: "#",
            title: "Conversion Rate Optimization"
        },
        {
            url: "#",
            title: "Facebook Ads"
        }
    ]

    return (

        <footer className="w-full py-16 px-32">

            <div className="grid grid-cols-1 sm:grid-cols-5">
                <div className="footer-logo-container">

                    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=fuchsia&shade=300" alt="Your Company" className="h-20 w-auto" />

                </div>
                <div className="company-column-container">
                    <h5 className="text-blue-900 font-bold mb-3">COMPANY</h5>
                    <ul className="list-none">
                        {companyLinks.map(company => (
                            <li className="mb-3" key={company.title}>
                                <Link href={company.url} className="text-blue-500 font-bold">{company.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="company-column-container">
                    <h5 className="text-blue-900 font-bold mb-3">RESOURCES</h5>
                    <ul className="list-none">
                        {resourcesLink.map(resource => (
                            <li className="mb-3" key={resource.title}>
                                <Link href={resource.url} className="text-blue-500 font-bold">{resource.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="company-column-container">
                    <h5 className="text-blue-900 font-bold mb-3">OUR SERVICES</h5>
                    <ul className="list-none">
                        {ourServicesLink.map(service => (
                            <li className="mb-3" key={service.title}>
                                <Link href={service.url} className="text-blue-500 font-bold">{service.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="company-column-container">
                    <h5 className="text-blue-900 font-bold mb-3">OUR SERVICES</h5>
                    <ul className="list-none">
                        {ourServicesLink.map(service => (
                            <li className="mb-3" key={service.title}>
                                <Link href={service.url} className="text-blue-500 font-bold">{service.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </footer>

    );

}