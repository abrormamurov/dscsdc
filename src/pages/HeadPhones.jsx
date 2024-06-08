import React from "react";
import { Link } from "react-router-dom";
function HeadPhones() {
  return (
    <div>
      <div className="head-p">
        <div className="align-element ">
          <h2>HEADPHONES</h2>
        </div>
      </div>
      <div className="align-element naushnig">
        <img
          className=""
          width={540}
          height={560}
          src="/src/assets (3)/shared/desktop/image-xx99-mark-two-headphones.jpg"
          alt=""
        />
        <div className="naushnig-text">
          <h5>NEW PRODUCT</h5>
          <h2>XX99 Mark II Headphones</h2>
          <p className="opacity-50">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Link to="/speakers" className="btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <div className="align-element naushnig">
        <div className="naushnig-text">
          <h2>XX99 Mark I Headphones</h2>
          <p className="opacity-50">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <Link to="/speakers" className="btn">
            SEE PRODUCT
          </Link>
        </div>
        <img
          className=""
          width={540}
          height={560}
          src="/src/assets (3)/shared/desktop/image-xx99-mark-one-headphones.jpg"
          alt=""
        />
      </div>
      <div className="align-element naushnig">
        <img
          className=""
          width={540}
          height={560}
          src="/src/assets (3)/shared/desktop/image-xx59-headphones.jpg"
          alt=""
        />
        <div className="naushnig-text">
          <h2>XX59 Headphones</h2>
          <p className="opacity-50">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
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

export default HeadPhones;
