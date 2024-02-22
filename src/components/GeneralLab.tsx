import { GeneralProductHeader } from "../components/GeneralProductHeader";

interface GeneralLabProps {
  productName: string;
  productColor: string;
  productSlogan: string;
  isWeb: boolean;
}

export const GeneralLab = ({
  productName,
  productColor,
  productSlogan,
  isWeb,
}: GeneralLabProps) => {
  return (
    <GeneralProductHeader
      productName={productName}
      productColor={productColor}
      productSlogan={productSlogan}
      productLink="https://airtable.com/appqm7yvqSUcLQKV4/shrRxMb5gJOPjl20A"
      buttonDescription="Get Updates 🛠️"
      isWeb={isWeb}
    />
  );
};
