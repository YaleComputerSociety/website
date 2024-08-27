import { GeneralLab } from "@components/GeneralLab";
import { GeneralProduct } from "@components/GeneralProduct";

const Ymeets = () => {
  return (
    <GeneralProduct
      productName="ymeets"
      productColor="#006BBD"
      productSlogan="A cleaner, faster way to schedule meetings on Yale's Campus."
      isWeb
      firstSectionTitle="An improved version of when2meet"
      firstSectionText={
        "A cleaner interface that is mobile-friendly. Choose the best day and time and select it to inform the rest of the event participants"
      }
      secondSectionTitle="Complete (optional) integration with Google Calander"
      secondSectionText={
        "Load in your GCals to see times you're already busy! Once the event admin has selected the time to meet, they can add it straight to your GCal."
      }
      thirdSectionTitle={"Vote on not just the time to meet, but also place."}
      thirdSectionText={
        "Participants can vote on location options the admin added!"
      }
      productLink="https://www.ymeets.com"
    />
  );
};

export default Ymeets;
