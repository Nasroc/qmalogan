import belts from "../belts";
import { FormContent } from "./temps/formContent";

export function Forms8() {
    // Belt data for 12th Kup
    const beltData = belts.find(belt => belt.id === 8);
    if (!beltData) {
        return <div>Belt data not found.</div>;
    }
    const nextBelt = belts.find(belt => belt.id === 7);
    if (!nextBelt) {
        return <div>Next belt data not found.</div>;
    }
      const prevBelt = belts.find(belt => belt.id === 9);
        const nextFormLink = "/resources/info/forms/7";
        const prevFormLink = "/resources/info/forms/9";
    
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
