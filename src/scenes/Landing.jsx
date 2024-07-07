import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section 
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >
            {/* IMAGES SECTION */}
            {/* Kenapa dibuat md:order-2 karena md adalah screen function untuk medium screen untuk lebar 1060px, akan diforce di posisi ke 2 jika lebar screen md, dan jika dibawah md maka akan posisinya kembali nomor 1 */}
            <div className="md:order-2 flex justify-between basis-2/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    // CSS disini adalah untuk memberikan border pada image, dan posisinya adalah dibelakang main image
                    <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                        <img 
                        src="assets/profile-riwandy-no-bg-modified.png"
                        className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[280px] mx-auto md:max-w-[300px]"
                        alt="profile" 
                    />
                    </div>
                ) : (
                    <img 
                        src="assets/profile-riwandy-no-bg-modified.png"
                        className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[280px] mx-auto md:max-w-[300px]"
                        alt="profile" 
                    />
                )}
            </div>

            {/* MAIN SECTIONS */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <p className="text-5xl font-playfair z-10 text-center md:text-start">
                        Riwandy S {""}
                        <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[100px] before:z-[-1]">
                            Lubis
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-sm text-center justify-end md:text-start">
                        With a professional journey that began in 2016, I have evolved from a PHP developer into the Head of IT, proudly holding a fullstack specialization. My passion lies in backend development, where I excel in leveraging the power of JavaScript, Python, and PHP to create innovative and robust solutions. My database expertise spans MySQL, MongoDB, and PostgreSQL, ensuring data integrity and efficiency across projects.
                        <br />
                        <br />
                        As a visionary leader in the tech industry, I thrive on designing comprehensive systems and meticulously selecting the right technology stacks to bring projects to life. My strategic approach and commitment to excellence have enabled me to drive transformative initiatives, leading teams to deliver scalable, high-performance solutions.
                    </p>
                </motion.div>
                
                {/*  CALL TO ACTIONS*/}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <AnchorLink
                        className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
                            Let's Talk
                        </div>
                    </AnchorLink>

                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.4, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0}
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    )
}

export default Landing;