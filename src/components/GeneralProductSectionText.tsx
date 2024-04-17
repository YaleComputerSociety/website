<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import "@styles/GeneralProduct.css";

interface GeneralProductSectionTextProps {
  title: string;
  text: (string | JSX.Element)[] | string;
  productColor?: string;
  className?: string;
<<<<<<< HEAD
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
=======
import '../styles/GeneralProduct.css'
=======
import "../styles/GeneralProduct.css";
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
import "@styles/GeneralProduct.css";
>>>>>>> 6919d97 (Remove unused files)

interface GeneralProductSectionTextProps {
  title: string;
  text: (string | JSX.Element)[] | string;
  align: CanvasTextAlign;
  style?: string;
=======
>>>>>>> 4a0d865 (Make entire full product page responsive)
}

export const GeneralProductSectionText = ({
  title,
  text,
  className,
  productColor,
}: GeneralProductSectionTextProps) => (
<<<<<<< HEAD
  <div className={`section-text-container ${style}`}>
    <div className="text-container">
      <div className="section-text-title" style={{ textAlign: align }}>
        {title}
      </div>
      <div className="section-text" style={{ textAlign: align }}>
        {text}
      </div>
    </div>
<<<<<<< HEAD
)
>>>>>>> fb778c0 (Delete all remaining ds stores, merge the two component folders, create styles folder)
=======
=======
  <div
    style={productColor ? { borderColor: productColor, borderWidth: "4px" } : {}}
    className={`w-3/5 md:w-2/5 flex flex-col mb-8 rounded-xl p-2 md:p-12 md:border-none ${className}`}
  >
    <div className="font-bold text-2xl md:text-3xl">{title}</div>
    <div className="text-sm md:text-xl mt-4">{text}</div>
>>>>>>> 4a0d865 (Make entire full product page responsive)
  </div>
);
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
