import * as m from "@/paraglide/messages";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {m.products()}
      <div>{children}</div>
    </div>
  );
};

export default ProductsLayout;
