import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { GiOpenBook } from "react-icons/gi";
import { ReactTyped } from "react-typed";
function LandingPage() {
  const steps = [
    {
      style: {
        opacity: 0,
      },
      duration: 2000,
    },
    {
      style: {
        opacity: 1,
        transform: "translate(0, 0)",
      },
      duration: 2000,
    },
    {
      style: {
        transform: "translate(100px, 100px)",
      },
      duration: 5000,
    },
  ];

  return (
    <div className="landing-page">
      <Navigation />
      <section className="section-hero p-1 bg-Bgmain sm:p-8 md:p-16 h-screen">
        <div className="mt-20 text-center">
          <ReactTyped
            strings={[
              "Get <span style='color: white;'>Quotes</span> on the Fly instantly without an account!",
            ]}
            typeSpeed={20} // Adjust typing speed here
          >
            <h1 className="font-black text-mainTint1 text-center text-3xl tracking-wide md:text-4xl lg:text-5xl lg:px-16"></h1>
          </ReactTyped>

          <p className="mt-2 text-white sm:mt-1 sm:px-2 md:px-10 md:text-2xl lg:px-16 lg:mt-6">
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-2 before:rounded-md before:bg-pink-500 relative inline-block">
              <span class="relative text-white text-inherit">
                Want to win an argument?
              </span>
            </span>
            or any other situation: Find the right quotes with our extensive
            quotes database and use them anywhere.
          </p>
          <button className="cta cursor-pointer rounded-lg text-white bg-main hover:bg-mainShade1 px-6 py-3 font-bold mt-10 animate-jump animate-infinite animate-duration-[2000ms] animate-delay-1000">
            <Link to={"/app"} className="">
              <span>Search Quotes</span>
              <span>
                <GiOpenBook
                  style={{ display: "inline-block", marginLeft: "5px" }}
                  fontFamily="Merriweather"
                  fontSize={20}
                />
              </span>
            </Link>
          </button>
        </div>
        ;
        <div className="mt-20 p-4 text-center text-white">
          <h4>
            Used by over <strong className="font-extrabold">{"14.45"}</strong>{" "}
            Million users!
          </h4>
        </div>
      </section>
      ;
    </div>
  );
}

export default LandingPage;
