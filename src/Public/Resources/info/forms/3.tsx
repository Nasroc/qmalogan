import belts from "../belts";
import { FormContent } from "./temps/formContent";
export function Forms3() {
    // Belt data for 12th Kup
    const beltData = belts.find(belt => belt.id === 3);
    if (!beltData) {
        return <div>Belt data not found.</div>;
    }
    const nextBelt = belts.find(belt => belt.id === 2);
    if (!nextBelt) {
        return <div>Next belt data not found.</div>;
    }
    const prevBelt = belts.find(belt => belt.id === 4);
    const nextFormLink = "/resources/info/forms/2";
    const prevFormLink = "/resources/info/forms/4";

    return (
        <FormContent 
            beltData={beltData} 
            nextBelt={nextBelt} 
            prevBelt={prevBelt} 
            nextFormLink={nextFormLink} 
            prevFormLink={prevFormLink} 
        />
    );
}
