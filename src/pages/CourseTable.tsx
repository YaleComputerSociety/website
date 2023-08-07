import { GeneralProduct } from "./GeneralProduct"

export const CourseTable = () => {
    return (
        <GeneralProduct 
            productName="CourseTable" 
            productColor="#006BBD" 
            productSlogan="The best place to shop for classes at Yale." 
            isWeb
            firstSectionTitle="Explore your interests"
            firstSectionText={["Browse through our catalog of ", <b>80,000+</b>, " classes.\nFilter by subject, rating, and workload to discover the best courses."]}
            secondSectionTitle="Simulate your schedule"
            secondSectionText="Add classes to your worksheet - see how they fit together. Make sure you have time for lunch!"
            thirdSectionTitle="Choose the right classes"
            thirdSectionText={["View ", <b>600,000+</b> , " course evaluation comments from past students. Everything you need to know to curate your perfect semester."]}
            productLink="https://www.coursetable.com/"
        />
    )
}