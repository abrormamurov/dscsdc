import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { Link } from "react-router-dom";

const url = "/products";

export const loader = async () => {
  const req = await customFetch(url);
  const products = req.data.data;

  return { products };
};
function Home() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div>
      {" "}
      <div
        style={{
          backgroundImage: `url("/src/assets (3)/home/desktop/image-hero.jpg")`,
        }}
        className="home-c"
      >
        <div className=" flex  align-element">
          <div className="home-text text-white ">
            <h5 className="opacity-50">NEW PRODUCT</h5>
            <h2>XX99 Mark II Headphones</h2>
            <p className="opacity-75">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/headphones" className="btn">
              SEE PRODUCT
            </Link>
          </div>

          <div className="home-img">
            {/* <img src="/src/assets (3)/home/desktop/image-hero.jpg" alt="" /> */}
          </div>
        </div>
      </div>
      <div className="flex align-element reklama1">
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
      <div className="align-element flex speakers1">
        <div>
          <img
            className="speaker-img"
            src="/src/assets (3)/home/desktop/image-speaker-zx9.png"
            width={490}
            height={553}
            alt=""
          />
        </div>
        <div className="speak-text">
          <h2>ZX9 SPEAKER</h2>
          <p className="opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/speakers" className="btn">
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("/src/assets (3)/home/desktop/image-speaker-zx7.jpg")`,
        }}
        className="align-element zx7  "
      >
        <h3>ZX7 SPEAKER</h3>
        <Link to="/speakers" className="btn border-black	">
          SEE PRODUCT
        </Link>
      </div>
      <div className="align-element flex">
        <div>
          <img
            className="ear"
            src="/src/assets (3)/home/desktop/image-earphones-yx1.jpg"
            width={540}
            height={320}
            alt=""
          />
        </div>
        <div className="yx1">
          <h3>YX1 EARPHONES</h3>
          <Link to="/earphones" className="btn border-black	">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
