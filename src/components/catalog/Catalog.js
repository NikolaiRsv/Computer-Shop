import { useComputerContext } from "../../contexts/ComputerContext.js";
import { CatalogItem } from "./CatalogItem.js";
import "./CatalogStyles.css";

export const Catalog = () => {
  const { computers } = useComputerContext();
  return (
    <>
      <div className="background-image">
        <section className="catalog-page">
          {computers.map((x) => (
            <CatalogItem key={x._id} {...x} />
          ))}

          {computers.length === 0 && <p className="no-ads">No ads yet!</p>}
        </section>
      </div>
    </>
  );
};
