import { Link } from "react-router-dom";
import ScrollNav from "./scrollNav";
import { FormFacts } from "./formFacts";
import { FormMoves } from "./formMoves";
import { formsData } from "../../formDetails";
import { formsVideo } from "../../formVideos";
import { FormVideos } from "./formVideo";
import { FormTechniques } from "./formsTech"

export function FormContent({ beltData, nextBelt, prevBelt, nextFormLink, prevFormLink }: { beltData: any, nextBelt: any, prevBelt: any, nextFormLink: string, prevFormLink: string }) {
    
    const formData = beltData;
    const id = beltData.id;
    const formDetails = formsData.find((form: { id: number }) => form.id === parseInt(id));
    const formId = Number(beltData?.id);
    const formVideo = formsVideo.find((video) => video.id === formId);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    return (
        <section className="flex flex-col items-center justify-start gap-12 py-20 px-8 custom-bg custom-dark min-h-screen transition-colors duration-300">
            {/* Back to Resources Link */}
            <div className="w-full text-left">
                <Link 
                    to="/resources/info/forms" 
                    className="text-blue-600 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                >
                    <h1 className="text-2xl font-semibold tracking-wide">
                        ← Back to Forms
                    </h1>
                </Link>
            {/* Page Title */}
                <div className="text-center">
                        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight">
                            {beltData?.form}
                        </h1>
                        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight">
                            {beltData?.korean}
                        </h1>
                    <div className={`${beltData?.id === 0 ? 'hidden' : ''}`}>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Rank form for {beltData?.kup} ({beltData.name})
                        </p>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            {nextBelt ? `Testing for ${nextBelt.kup} (${nextBelt.name})` : 'Testing for (Black Belt)'}
                        </p>
                        {/* Belt Image */}
                        <img 
                            src={beltData?.image} 
                            alt="Belt" 
                            className="h-auto mx-auto mt-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Navigation */}
            <ScrollNav 
                sections={[
                    { id: 'scrollToFacts', label: 'Facts' },
                    { id: 'scrollToMovements', label: 'Movements' },
                    { id: 'scrollToVideo', label: 'Video' },
                    { id: 'scrollToTechniques', label: 'Techniques' },
                ]} 
            />

            {/* Navigation Links */}
            <div className="flex justify-between w-full max-w-3xl">
                <div className="flex-1 text-left">
                    {prevFormLink && prevBelt && (
                        <Link 
                            to={prevFormLink} 
                            className="text-blue-600 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                        >
                            {/* Previous Form Link */}
                            <h2 className="text-xl font-semibold tracking-wide">
                                ← Previous Form ({prevBelt?.name})
                            </h2>
                        </Link>
                    )}
                </div>
                <div className="flex-1 text-right">
                    {nextFormLink && nextBelt && (
                        <Link 
                            to={nextFormLink} 
                            className="text-blue-600 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                        >
                            <h2 className="text-xl font-semibold tracking-wide">
                                Next Form ({nextBelt?.name}) →
                            </h2>
                        </Link>
                    )}
                </div>
            </div>

            {/* Form Facts */}
            <div id="scrollToFacts" className="w-full">
                <FormFacts facts={formData} />
            </div>

            {/* Form Movements */}
            <div id="scrollToMovements" className="w-full">
                <FormMoves 
                    readyPosition={formDetails?.readyPosition || ''}
                    pathImg={formDetails?.pathImg || ''}
                    steps={formDetails?.steps || []}
                    paro={formDetails?.paro || ''}
                />
            </div>

            {/* Form Video */}
            <div id="scrollToVideo" className="w-screen items-center justify-center">
                {formVideo ? (
                    <FormVideos 
                        formsVideo={[{ id: formVideo.id, link: formVideo.link }]} 
                        form = {beltData.form}
                    />
                ) : (
                    <p className="text-gray-500">No video available</p>
                )}
            </div>

            {/* Form Techniques */}
            <div id="scrollToTechniques" className="w-full">
                <FormTechniques id={beltData?.id} />
            </div>

            {/* Sticky Back to Top Button */}
            <div 
                className="fixed bottom-4 inset-x-0 flex justify-center z-50"
            >
                <button 
                    onClick={handleScrollToTop}
                    className="bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-all"
                >
                    Back to Top ↑
                </button>
            </div>
        </section>
    );
}
