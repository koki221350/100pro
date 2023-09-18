import React from "react";

export const Products = (props) => {
  return (
    <>
      <div className="products">Related Products</div>

      <div className="product-contents">
        <img
          src="https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG55TuUok74aGR5j448WXX6S9DQi4j6E-YYgLJQvhVLwt-aL-pH_qWbMIgV-6AIcuPU9NUlEBjSnkNpFmWlJp_B13RdGC9LV2RTOxOnXIMwAsffqNrfTLZwZRJ9cgBYOIGsCrXsxSpc9QPYyXFAPGtwXJ3MGGqR7mFl9wCVon74qtjPRAvihdj0mGpph8SVfcg36x1u7PE3hFj1tQl9OenK0=/d30525-550-163521-2.jpg?errorImage=false"
          alt="potatochips"
        />
        <p>{props.message}</p>
      </div>
    </>
  );
};

export default Products;
