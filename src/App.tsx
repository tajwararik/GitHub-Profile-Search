import "../src/globals.css";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="w-full max-w-[1880px] min-h-screen bg-[url('../resources/hero-image-github-profile.jpg')] max-[640px]:bg-[url('../resources/hero-image-github-profile-sm.jpg')] bg-no-repeat bg-top max-[1280px]:bg-contain min-[1281px]:bg-size-[100%_240px] bg-background">
      <Hero />
    </main>
  );
}

export default App;
