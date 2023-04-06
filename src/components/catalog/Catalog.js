import { CatalogItem } from "./CatalogItem.js";
import "./CatalogStyles.css";

export const Catalog = () => {
  return (
    <>
      <div className="background-image"> 
      <section className="catalog-page">
        <CatalogItem />
      </section>
      </div>
    </>
  );
};
