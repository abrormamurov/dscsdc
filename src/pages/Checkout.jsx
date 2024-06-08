import React from "react";
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div className="checkout-2   ">
      <div className="align-element flex gap-8">
        {" "}
        <div className=" checkout-1">
          <h2>CHECKOUT</h2>
          <h4>BILLING DETAILS</h4>
          <div className="flex gap-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Alexei"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email Address</span>
              </div>
              <input
                type="text"
                placeholder="alexei@gmail.com"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone Number</span>
            </div>
            <input
              type="number"
              placeholder="+1 (202) 555-0136"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <h4>SHIPPING INFO</h4>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Addres</span>
            </div>
            <input
              type="number"
              placeholder="1137 Williams Avenue"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="flex gap-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">ZIP Code</span>
              </div>
              <input
                type="text"
                placeholder="10001"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">City</span>
              </div>
              <input
                type="text"
                placeholder="New York"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Country</span>
            </div>
            <input
              type="text"
              placeholder="United States"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <h4>PAYMENT DETAILS</h4>
          <div className="flex">
            <h5>Payment Method</h5>
          </div>
        </div>
        <div className="card-1">
          <h3>SUMMARY</h3>
          <Link>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              CONTINUE
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <img
                  src="/src/assets (3)/checkout/icon-order-confirmation.svg"
                  alt=""
                />
                <h2>THANK YOU FOR YOUR ORDER</h2>
                <p>You will receive an email confirmation shortly.</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">BACK TO HOME</button>
                  </form>
                </div>
              </div>
            </dialog>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
