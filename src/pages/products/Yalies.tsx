import { GeneralProduct } from "../GeneralProduct"

export const Yalies = () => {
    return (
        <GeneralProduct 
            productName="Yalies" 
            productColor="#00356B" 
            productSlogan="A better directory of the student body!" 
            isWeb
            firstSectionTitle="Connect With Yalies"
            firstSectionText="Kind of remember someone's name and maybe what residential college they're in? Find and contact the Yalies you meet."
            secondSectionTitle="A clean, enhanced user experience"
            secondSectionText="Filter by year, college, major, and even birthday!"
            thirdSectionTitle="API for student developers"
            thirdSectionText={["Need information about the student body for a project? Feel free to use our ", <a href="https://yalies.io/apidocs" target="_blank" rel="noreferrer">Yalies API</a> , ". Happy building!"]}
            productLink="https://yalies.io/"
        />
    )
}