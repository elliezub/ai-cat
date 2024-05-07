import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 flex justify-center lg:px-0 px-4 flex-col items-center w-full">
      {/* maybe add dif bg color here */}
      <div className="grid lg:grid-cols-5 md:max-w-full grid-cols-2 max-w-lg">
        <img src="https://i.postimg.cc/2S5DPx2R/1.jpg" alt="" className="" />
        <img src="https://i.postimg.cc/t4mjyVM1/3.jpg" alt="" className="" />
        <img
          src="https://i.postimg.cc/pdhtdXws/2.jpg"
          alt=""
          className="hidden lg:block"
        />
        <img src="https://i.postimg.cc/k50PRP9q/4.jpg" alt="" className="" />
        <div className="text-4xl leading-[3rem] bg-black text-slate-50 fonta flex items-center justify-center follow-us">
          <p>
            FOLLOW US <br /> ON <br /> TWITTER
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-12 pb-24 w-full max-w-6xl px-3">
        <div className="max-w-lg">
          <h2 className="text-8xl font-bold pb-4">AICAT</h2>
          <h3 className="text-4xl fonta font-medium">
            SUBSCRIBE TO OUR <br /> NEWSLETTER
          </h3>
          <p className="font-medium pt-6 text-sm pb-2">
            By subscribing to our newletter, you will recieve the latests tips,
            and promotions about our products and services straight to your
            inbox.
          </p>

          <div className="relative my-3">
            <input
              type="email"
              className="bg-slate-50 h-14 w-full px-4 pr-20 rounded-md"
              id="emailinput"
              required
            />
            <button
              className="h-10 rounded bg-black absolute top-2 text-sm right-2 px-3 text-white hover:bg-[#b676ff]"
              id="subbtn"
            >
              Subscribe Now
            </button>
          </div>

          <ul className="mt-12 flex space-x-4 fonta">
            <li>
              <a href="#">PRIVACY</a>
            </li>
            <li>
              <a href="#">TERMS</a>
            </li>
            <li>
              <a href="#">ACCESSIBILITY</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-4 font-bold mt-16 text-lg">
            <li>
              <Link to="/About">ABOUT</Link>
            </li>
            <li>
              <Link to="/Shop">SHOP</Link>
            </li>
            <li>
              <Link to="/Reviews">REVIEWS</Link>
            </li>
            <li>
              <Link to="/Social">SOCIAL</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
