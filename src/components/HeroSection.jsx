const HeroSection = () => {
  return (
    <div className="hero relative">
      <div className="absolute left-div top-0 left-0 opacity-70"></div>
      <div className="absolute right-div top-60 -right-12"></div>
      <section className="hero-section mx-9 flex justify-between flex-wrap sm:flex-nowrap relative">
        <div className="hero-content">
          <h1 className=" text-white font-bold text-5xl pt-20 lg:pt-40 mb-4 leading-snug">
            Trade & Earn{" "}
            <span className="bg-gradient-to-b from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              With Ease
            </span>{" "}
            <br />
            Lowest Trading Fees
          </h1>
          <p className="text-white text-xl font-medium leading-2.5 mb-12">
            Buy, sell and trade over 1000 cryptocurrencies like Bitcoin,
            <br />
            Ethereum, Litecoin, GolCoin, Gogol Coin, and many others!
          </p>
          <div className="cta-section flex gap-5 items-center">
            <div className="rounded-md bg-gradient-to-r from-purple-700 via-pink-500 via-red-500 to-yellow-500 p-[1px] w-max">
              <a
                href="#"
                className="register text-sm px-5 py-2 bg-black rounded-md flex gap-2 justify-center "
              >
                <img src="/rocket-icon.svg" alt="" />
                Start Trading
              </a>
            </div>
            <div className="register text-[#d6357e]">
              <a className="hover:bg-[#d6357e] hover:bg-opacity-5 hover:cursor-pointer rounded-lg px-5 py-2 text-sm flex items-center gap-2">
                Register Now
                <img src="/right-arrow.svg" alt="register arrow" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-img pt-48 pr-0 md:pr-8 lg:pr-32">
          <div className="relative">
            <img
              src="diamond.png"
              alt="diamond"
              className="absolute -top-32 left-32 z-10 bouncing-element"
            />
            <img src="hand.png" alt="hand" />
          </div>
        </div>
      </section>
      <div className="hero-sell-content mx-9 -mt-40 lg:-mt-44 xl:-mt-60 absolute -bottom">
        <div className="announcement text-white text-sm font-normal leading-5 flex gap-2">
          <img src="/sound.svg" alt="announcement" />
          New Pairs Listing: WAVESUSDT, LDOUSDT, FTMUSDT, BANDUSDT, GRTUSDT,
          QNTUSDT
        </div>
        <div className="image-sell grid grid-cols-1  md:grid-cols-4 gap-6 mt-5">
        <div>
          <img
            src="/Vector.png"
            alt="selling img"
            className="rounded-2xl w-full"
          />
        </div>
        <div>
          <img
            src="/Vector-1.png"
            alt="selling img"
            className="rounded-2xl w-full"
          />
        </div>
        <div>
          <img
            src="/Vector-2.png"
            alt="selling img"
            className="rounded-2xl w-full"
          />
        </div>
        <div>
          <img
            src="/Vector-3.png"
            alt="selling img"
            className="rounded-2xl w-full"
          />
        </div>
      </div>
      </div>
      {/* just for spacing */}
      <div className="hero-sell-content mx-9 -mt-40 lg:-mt-44 xl:-mt-60 opacity-0">
        <div className="announcement text-white text-sm font-normal leading-5 flex gap-2">
          <img src="/sound.svg" alt="announcement" />
          New Pairs Listing: WAVESUSDT, LDOUSDT, FTMUSDT, BANDUSDT, GRTUSDT,
          QNTUSDT
        </div>
        <div className="image-sell grid grid-cols-1  md:grid-cols-4 gap-6 mt-5">
        <div>
          <img
            src="/Vector.png"
            alt="selling img"
            className="rounded-2xl w-full"
          />
        </div>
        <div>
          <img
            src="/Vector-1.png"
            alt="selling img"
            className="rounded-2xl w-full"
          />
        </div>
        <div>
          <img
            src="/Vector-2.png"
            alt="selling img"
            className="rounded-2xl w-full"
          />
        </div>
        <div>
          <img
            src="/Vector-3.png"
            alt="selling img"
            className="rounded-2xl w-full"
          />
        </div>
      </div>
      </div>

    </div>
  );
};

export default HeroSection;
