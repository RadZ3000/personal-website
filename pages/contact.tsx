import { TypeAnimation } from 'react-type-animation';
import {
    FaPhone,
    FaEnvelope,
    FaComment,
} from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="page">

            <div id="intro" className="flex flex-col justify-center gap-y-20 page h-full lg:h-screen w-screen">

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
                        <button className="button">
                            <FaPhone className="text-red-700" />
                            <a href="mailto: abc@example.com">Call:</a>
                        </button>
                        <h1 className="text-xs md:text-sm  lg:text-base">+1 (123) 456–7890</h1>
                    </span>
                    <span className="flex flex-row gap-x-6 lg:flex-row items-center lg:gap-x-20">
                        <button className="button">
                            <FaEnvelope className="text-red-700" />
                            <a href="mailto: abc@example.com">Email:</a>
                        </button>
                        <h1 className="text-xs md:text-sm  lg:text-base">first.last@email.com</h1>
                    </span>
                    <span className="flex flex-row gap-x-6 lg:flex-row items-center lg:gap-x-20">
                        <button className="button">
                            <FaComment className="text-red-700" />
                            <a href="mailto: abc@example.com">Message:</a>
                        </button>
                        <h1 className="text-xs md:text-sm lg:text-base">linkedin.com/fullname</h1>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Contact;

