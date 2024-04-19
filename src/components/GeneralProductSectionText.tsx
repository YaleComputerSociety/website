import "@styles/GeneralProduct.css";

interface GeneralProductSectionTextProps {
  title: string;
  text: (string | JSX.Element)[] | string;
  productColor?: string;
  className?: string;
}

export const GeneralProductSectionText = ({
  title,
  text,
  className,
  productColor,
}: GeneralProductSectionTextProps) => (
  <div
    style={productColor ? { borderColor: productColor, borderWidth: "4px" } : {}}
    className={`w-3/5 md:w-2/5 flex flex-col mb-8 rounded-xl p-2 md:p-12 md:border-none ${className}`}
  >
    <div className="font-bold text-2xl md:text-3xl">{title}</div>
    <div className="text-sm md:text-xl mt-4">{text}</div>
  </div>
);
