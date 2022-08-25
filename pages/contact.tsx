import { TypeAnimation } from 'react-type-animation';
import {
    FaPhone,
    FaEnvelope,
    FaComment,
} from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="page">

            <div id="intro" className="flex flex-col justify-center items-center gap-y-20 page h-full lg:h-screen w-full">

                <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-3xl xl:leading-snug font-bold text-red-500 w-fit">
                    <code>
                        <TypeAnimation
                            sequence={[
                                "Let's Talk.",
                            ]}
                        />
                    </code>
                </h1>
                <div className="flex flex-col gap-y-14 content-center bg-slate-800 border-slate-800 border w-11/12 sm:w-2/3 md:w-3/5 lg:w-3/5 xl:w-3/5 rounded-xl py-4 px-8 lg:py-8 lg:px-16">
                    <span className="flex flex-row gap-x-6 lg:flex-row items-center lg:gap-x-20">
                        <a href="tel:8323019096">
                            <button className="button">
                                <FaPhone className="text-red-700" />
                                Call:
                            </button>
                        </a>
                        <h1 className="text-xs md:text-sm  lg:text-base">+1 (832) 301–9096</h1>
                    </span>
                    <span className="flex flex-row gap-x-6 lg:flex-row items-center lg:gap-x-20">
                        <a href="mailto: abc@example.com">
                            <button className="button">
                                <FaEnvelope className="text-red-700" />
                                Email:
                            </button>
                        </a>
                        <h1 className="text-xs md:text-sm lg:text-base break-all">herald.adowei@gmail.com</h1>
                    </span>
                    <span className="flex flex-row gap-x-6 lg:flex-row items-center lg:gap-x-20">
                            <a href="https://www.linkedin.com/in/heraldadowei" target="_blank" rel="noopener noreferrer">
                                <button className="button">
                                    <FaComment className="text-red-700" />
                                    Message:
                                </button>
                            </a>
                        <h1 className="text-xs md:text-sm lg:text-base break-all">linkedin.com/in/heraldadowei</h1>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Contact;

