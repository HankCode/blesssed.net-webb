"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlessedHeroKicker } from "@/components/kicker";

export default function Hero() {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <section className="relative overflow-hidden h-screen w-full">
        {/* <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-primary to-accent" /> */}
        <img
          src="/img/bg.jpg"
          alt=""
          className="absolute inset-0 object-cover w-full hidden sm:block"
        />
        <img
          src="/img/bg_mobile.jpg"
          alt=""
          className="absolute inset-0 object-cover w-full sm:hidden"
        />
        <Container section className="relative flex justify-center items-center h-full -mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              // className="inline-flex items-center bg-slate-200 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-200"
            >
              {/* <BlessedHeroKicker /> */}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-4 text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-[84px] max-w-4xl mx-auto xl:leading-[1.22]"
            >
              It is your <span className="">birthright</span> to live your{" "}
              <span className="">dreamlife</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mx-auto mt-7 leading-normal max-w-xl text-xl text-slate-600"
            >
              Transform your life by learning and applying spiritual laws, simplified and supported
              by practical tools to easily bring them into your daily life.
              {/* Based on
              the teachings of Kabbalah, Neville Goddard, A Course in Miracles, and the Bible. */}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Button size="lg">Get Started</Button>
              {/* <Button variant="outline" size="lg">
                Learn More
              </Button> */}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            style={{ opacity: scrollOpacity }}
          >
            {/* <ScrollIndicator /> */}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
