interface FormVideoProps {
    id: number;
    link: string;
}

interface FormVideosProps {
    formsVideo: FormVideoProps[];
    form: string;
}

export function FormVideos({ formsVideo, form }: FormVideosProps) {
    return (
        <section className="flex items-center justify-center py-10 px-6 sm:px-8 transition-colors duration-300 w-full">
            <div className="w-full mx-auto max-w-6xl">
                {formsVideo.map((video) => (
                    <div 
                        key={video.id}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
                    >
                        <iframe
                            src={video.link}
                            title={`Kyuki-Do Form ${form} Video`}
                            aria-label={`Kyuki-Do Form ${form} Video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share"
                            sandbox="allow-same-origin allow-scripts allow-popups"
                            referrerPolicy="strict-origin-when-cross-origin"
                            className="w-full min-w-[300px] aspect-video rounded-xl transition-all"
                            loading="lazy"
                        ></iframe>
                        <h2 className="text-center text-gray-700 dark:text-gray-300 mt-4 text-xl font-semibold">
                            Kyuki-Do Form - {form}
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    );
}
