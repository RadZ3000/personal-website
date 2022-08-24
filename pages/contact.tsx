import { TypeAnimation } from 'react-type-animation';
import {
    FaPhone,
    FaEnvelope,
    FaComment,
} from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="page">

            <div id="intro" className="flex flex-col justify-center gap-y-20 page h-screen w-screen">

                <h1 className="lg:text-xl xl:text-3xl xl:leading-snug font-bold text-red-500 w-fit">
                    <code>
                        <TypeAnimation
                            sequence={[
                                "Let's Talk.",
                            ]}
                        />
                    </code>
                </h1>
                <div className="flex flex-col gap-y-14 content-center bg-slate-800 border-slate-800 border w-2/5 rounded-xl py-8 px-16">
                    <span className="flex flex-row items-center gap-x-20">
                        <button className="button">
                            <FaPhone className="text-red-700" />
                            <a href="mailto: abc@example.com">Call Me:</a>
                        </button>
                        <h1>+1 (123) 456–7890</h1>
                    </span>
                    <span className="flex flex-row items-center gap-x-20">
                        <button className="button">
                            <FaEnvelope className="text-red-700" />
                            <a href="mailto: abc@example.com">Email Me:</a>
                        </button>
                        <h1>first.last@email.com</h1>
                    </span>
                    <span className="flex flex-row items-center gap-x-20">
                        <button className="button">
                            <FaComment className="text-red-700" />
                            <a href="mailto: abc@example.com">Message Me:</a>
                        </button>
                        <h1>www.linkedin.com/fullname</h1>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Contact;

