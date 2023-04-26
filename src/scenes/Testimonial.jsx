import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

function Testimonial() {

    const testimonialStyle = "mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2";

    return (
        <section id='testimonials' className="pt-32 pd-16">
            {/* HEADING */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y:-50},
                    visible: {opacity: 1, y: 0}
            }}>
                <div>
                    <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                        TESTIMONIALS
                    </p>
                    <LineGradient width="mx-auto w-2/4" />
                </div>
                <p className="mt-10 mb-10 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat.
                </p>
            </motion.div>

            {/* TESTIMONIALS */}
            <div className="md:flex md:justify-between gap-8">
                <motion.div
                    className={`bg-blue ${testimonialStyle} before:content-person1`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y:-50},
                        visible: {opacity: 1, y: 0}
                }}>
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.</p>
                </motion.div>

                <motion.div
                    className={`bg-red ${testimonialStyle} before:content-person2`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y:-50},
                        visible: {opacity: 1, y: 0}
                }}>
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.</p>
                </motion.div>

                <motion.div
                    className={`bg-yellow ${testimonialStyle} before:content-person3`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y:-50},
                        visible: {opacity: 1, y: 0}
                }}>
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.</p>
                </motion.div>
            </div>
        </section>
    );
}

export default Testimonial;