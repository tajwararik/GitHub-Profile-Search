import SearchIcon from "../../resources/Search.svg";

function Hero() {
  return (
    <section className="w-[80%] bg-transparent flex flex-col items-center font-fn py-8 mx-auto my-0">
      <div className="w-[35%] relative">
        <img
          src={SearchIcon}
          alt="search icon"
          className="w-5 h-5 absolute top-2/4 -translate-y-1/2 left-2"
        />
        <input
          type="text"
          className="w-full self-center text-sm text-fn-white placeholder:text-fn-white bg-background py-3 pl-9 rounded-lg outline-0"
          placeholder="username"
        />
      </div>
    </section>
  );
}

export default Hero;
