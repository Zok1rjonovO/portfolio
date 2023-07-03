import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const services = [
  {
    name: "Front-end developer",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis possimus, atque minima provident vero laborum obcaecati nam numquam odit?",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis possimus, atque minima provident vero laborum obcaecati nam numquam odit?",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis possimus, atque minima provident vero laborum obcaecati nam numquam odit?",
    link: "Learn more",
  },
  {
    name: "Software engineer",
    description: "NO SYSTEM IS SAFE!",
    link: "Learn more",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial= "hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          style={{borderRadius: '6px'}} className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16 col-black">  I'm a freelance Front-end Developer with over 1 years of
              expirience</h3>
              <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
           variants={fadeIn('left', 0.5)}
           initial= "hidden"
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className="flex-1">
            <div>
              {
                services.map((service, index)=> {
                  const {name, description, link} = service;
                  return (
                    <div className="border-b border-white/20 h-[146px] mb-[36px] flex" key={index}>
                      <div className="max-w-[467px]">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6" style={{marginLeft: '50px'}}>{name}</h4>
                        <p className="font-secondary leading-tight" style={{marginLeft: '50px'}}>{description}</p>
                      </div>
                      <div className="flex flex-col flex-1 items-end" style={{marginLeft: '50px'}}>
                        <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                          <BsArrowUpRight/>
                        </a>
                        <a href="#" className="text-gradient text-sm">{link}</a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
