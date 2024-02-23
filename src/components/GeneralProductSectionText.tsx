import "@styles/GeneralProduct.css";

interface GeneralProductSectionTextProps {
  title: string;
  text: (string | JSX.Element)[] | string;
  align: CanvasTextAlign;
}

export const GeneralProductSectionText = ({
  title,
  text,
  align,
}: GeneralProductSectionTextProps) => (
  <div className="section-text-container">
    <div className="text-container">
      <div className="section-text-title" style={{ textAlign: align }}>
        {title}
      </div>
      <div className="section-text" style={{ textAlign: align }}>
        {text}
      </div>
    </div>
  </div>
);
