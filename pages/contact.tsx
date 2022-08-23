const Contact = () => {
    return (
        <div className="flex flex-col justify-center gap-y-20 page h-screen">

            <h1 className="lg:text-xl xl:text-3xl xl:leading-snug font-bold text-red-500 w-fit ml-12">Let's Talk.</h1>
                <div className="flex flex-col gap-y-14 content-center bg-transparent border-white border rounded-xl p-5">
                    <span className="flex flex-row items-center gap-x-10">
                        <button className="bg-white text-slate-900 py-2 px-5">
                            <a href="mailto: abc@example.com">Call Me</a>
                        </button>
                        <h1>No: 1234567890</h1>
                    </span>
                    <span className="flex flex-row items-center gap-x-10">
                        <button className="bg-white text-slate-900 py-2 px-5">
                            <a href="mailto: abc@example.com">Call Me</a>
                        </button>
                        <h1>No: 1234567890</h1>
                    </span>
                    <span className="flex flex-row items-center gap-x-10">
                        <button className="bg-white text-slate-900 py-2 px-5">
                            <a href="mailto: abc@example.com">Call Me</a>
                        </button>
                        <h1>No: 1234567890</h1>
                    </span>
                </div>

        </div>
    )
}

export default Contact;

