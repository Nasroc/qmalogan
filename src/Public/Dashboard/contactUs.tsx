export function ContactUs() {
    return (
        <section 
            className="flex flex-col items-center justify-start py-12 w-full custom-dark transition-colors duration-300"
        >
            {/* Header */}
            <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white text-center mb-10">
                Contact Us
            </h2>

            {/* Contact Details */}
            <dl className="flex flex-wrap text-xl gap-2">
                <div className="flex w-full gap-5">
                    <dt className="font-semibold w-1/3 text-right text-gray-600 dark:text-gray-400 ">Email</dt>
                    <dd className="ml-auto w-2/3"><a href="mailto:logankarate@gmail.com" className="text-blue-500 dark:text-blue-400 hover:text-yellow-500">logankarate@gmail.com</a></dd>
                </div>
                <div className="flex w-full gap-5">
                    <dt className="font-semibold w-1/3 text-right text-gray-600 dark:text-gray-400 ">Phone</dt>
                    <dd className="ml-auto w-2/3"><a href="tel:435-278-9272" className="text-blue-500 dark:text-blue-400 hover:text-yellow-500">(435) 278-9272</a></dd>
                </div>
                <div className="flex w-full gap-5">
                    <dt className="font-semibold w-1/3 text-right text-gray-600 dark:text-gray-400 ">Address</dt>
                    <dd className="ml-auto w-2/3"><a href="geo:0,0?q=917+W+600+N+STE+109,+Logan,+UT+84321" className="text-blue-500 dark:text-blue-400 hover:text-yellow-500">917 W 600 N STE 109, Logan, UT 84321</a></dd>
                </div>
            </dl>
        </section>
    );
}
