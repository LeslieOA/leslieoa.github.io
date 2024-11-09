import AnimatedTransition from "@/components/AnimatedTransition";

const Header = () => {
  return (
    <AnimatedTransition>
      <header className="mb-[clamp(1rem,3vw,3rem)]">
        <h1 className="text-[clamp(30px,6vw,70px)]">
          Leslie Owusu-Appiah{" "}
          <span role="img" aria-label="peace sign">
            ✌️
          </span>
        </h1>
      </header>
    </AnimatedTransition>
  );
};

export default Header;
