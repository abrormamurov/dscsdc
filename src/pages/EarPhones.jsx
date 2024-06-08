import React from "react";
import { Link } from "react-router-dom";
function EarPhones() {
  return (
    <div>
      <div className="head-p">
        <div className="align-element ">
          <h2>EARPHONES</h2>
        </div>
      </div>
      <div className="align-element naushnig">
        <img
          className=""
          width={540}
          height={560}
          src="/src/assets (3)/product-yx1-earphones/desktop/image-category-page-preview.jpg"
          alt=""
        />
        <div className="naushnig-text">
          <h5>NEW PRODUCT</h5>
          <h2>YX1 WIRELESS EARPHONES</h2>
          <p className="opacity-50">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <Link to="/speakers" className="btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>

      <div className="flex align-element reklama1 reklama2">
        <div className="align-element">
          <div className="link-img">
            <img
              src="/src/assets (3)/shared/desktop/image-category-thumbnail-headphones.png"
              alt=""
              width={193}
              height={250}
            />
          </div>
          <div className="p-l-i ">
            <h5 className="items-center text-center	">HEADPHONES</h5>
            <Link to="/headphones" className="flex gap-2 ar">
              SHOP{" "}
              <img
                src="/src/assets (3)/shared/desktop/icon-arrow-right.svg"
                alt=""
                width={10}
                height={6}
              />{" "}
            </Link>
          </div>
        </div>
        <div className="align-element">
          <div className="link-img mt-2">
            <img
              src="/src/assets (3)/shared/desktop/image-category-thumbnail-speakers.png"
              alt=""
              width={193}
              height={250}
            />
          </div>
          <div className="p-l-i ">
            <h5 className="items-center text-center ml-2	">SPEAKERS</h5>
            <Link to="/speakers" className="flex gap-2 ar">
              SHOP{" "}
              <img
                src="/src/assets (3)/shared/desktop/icon-arrow-right.svg"
                alt=""
                width={10}
                height={6}
              />{" "}
            </Link>
          </div>
        </div>
        <div className="align-element">
          <div className="link-img mt-5">
            <img
              src="/src/assets (3)/shared/desktop/image-category-thumbnail-earphones.png"
              alt=""
              width={193}
              height={250}
            />
          </div>
          <div className="p-l-i ">
            <h5 className="items-center text-center	">EARPHONES</h5>
            <Link to="earphones" className="flex gap-2 ar">
              SHOP{" "}
              <img
                src="/src/assets (3)/shared/desktop/icon-arrow-right.svg"
                alt=""
                width={10}
                height={6}
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarPhones;
