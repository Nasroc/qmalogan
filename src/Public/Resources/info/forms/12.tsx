import belts from "../belts";
import { FormContent } from "./temps/formContent";


export function Forms12() {
    // Belt data for 12th Kup
    const beltData = belts.find(belt => belt.id === 12);
    if (!beltData) {
        return <div>Belt data not found.</div>;
    }
    const nextBelt = belts.find(belt => belt.id === 11);
    if (!nextBelt) {
        return <div>Next belt data not found.</div>;
    }
      const prevBelt = null;
        const nextFormLink = "/resources/info/forms/11";
        const prevFormLink = "/";
    
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
