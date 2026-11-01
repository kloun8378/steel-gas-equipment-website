import { Children, isValidElement, type ReactElement, type ReactNode } from "react";

// Замена react-helmet-async: React 19 сам поднимает <title>, <meta> и <link>
// в <head> (и при серверном рендере тоже). JSON-LD рендерится как есть.
type ElementProps = { children?: ReactNode; type?: string };

export function Helmet({ children }: { children?: ReactNode }) {
  return (
    <>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        const el = child as ReactElement<ElementProps>;
        if (el.type === "title") {
          const text = Children.toArray(el.props.children).join("");
          return <title>{text}</title>;
        }
        if (el.type === "script") {
          const text = Children.toArray(el.props.children).join("");
          return <script type={el.props.type} dangerouslySetInnerHTML={{ __html: text }} />;
        }
        return el;
      })}
    </>
  );
}

export default Helmet;
