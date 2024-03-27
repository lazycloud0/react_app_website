import Hero from "../src/Hero/Hero.js";
import Review from "@/src/Review/Review.js";
import Main from "../src/Main/Main.js";
import RootLayout from "./layout.js";

// called rootlayout plus children components
export default function Home() {
  return (
    <RootLayout>
      <Hero /> <Review /> <Main />
    </RootLayout>
  );
}

// media queries in CSS
// prop obj = {all prop condtions}
// useState
// useEffect
// window.reload, window.back, window.redirect
