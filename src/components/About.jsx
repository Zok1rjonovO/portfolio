import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inViwe] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="containrt mx-auto">
        <div>
          {/* img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
            img
          </div>
          {/* text */}
          <div>text</div>
        </div>
      </div>
    </section>
  );
};

export default About;
