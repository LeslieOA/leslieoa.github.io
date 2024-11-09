import AnimatedTransition from "@/components/AnimatedTransition";
import socialLinks from "@/data/social-links.json";

const Footer = () => {
  return (
    <AnimatedTransition>
      <footer className="mt-[clamp(1rem,3vw,3rem)] space-x-4">
        {socialLinks.map((item) => {
          const { label, uri, title } = item;
          return (
            <a
              key={item.label}
              href={uri}
              title={title}
              className="text-[clamp(24px,4vw,48px)] text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-muted"
            >
              {label}
            </a>
          );
        })}
      </footer>
    </AnimatedTransition>
  );
};

export default Footer;
