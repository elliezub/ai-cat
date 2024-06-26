import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex justify-center p-3 md:min-h-[88vh] sm:pt-32 pt-6">
      <div className="max-w-xl space-y-6">
        <h1 className="lg:text-[7.5rem] sm:text-[100px] text-7xl leading-none font-bold">
          <span className="text-nowrap">THE WORLD&apos;S</span> <br /> FAVORITE{" "}
          <br />
          AI CAT
        </h1>
        <div className="flex items-center">
          <div className="space-y-6 max-w-lg">
            <p>
              In a world full of lonely people seeking companionship, you knew
              it was only a matter of time before AI Cats became a thing.
            </p>
            <button className="bg-violet-200 text-xl p-3 px-6 font-bold rounded-md hover:bg-purple-300 transition ease-in-out delay-150">
              <Link to="/Shop">SHOP NOW</Link>
            </button>
          </div>
          <div className="lg:hidden relative bottom-12">
            <img
              className=""
              src="https://i.ibb.co/1JJLS3r/Untitled-design-9.png"
              alt="AI cat"
            />
            {/* TODO fix size/placement of img on md > */}
          </div>
        </div>
      </div>
      <div>
        <img
          className="lg:max-h-[550px] hidden lg:flex lg:pt-5"
          src="https://i.ibb.co/1JJLS3r/Untitled-design-9.png"
          alt="AI cat"
        />
      </div>
    </section>
  );
}
