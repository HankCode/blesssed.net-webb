"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlessedHeroKicker } from "@/components/kicker";
import { ArrowRight, Bird, BookOpen, MoonStar, StarHalf, Sword, Users } from "lucide-react";
import { feat } from "@/lib/data";
import Link from "next/link";

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
    <section className="relative overflow-hidden w-full pt-24">
      {/* Background images removed - now in page.tsx */}
      <Container section className="-mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* <motion.div whileHover={{ scale: 1.05 }}>
            <BlessedHeroKicker />
          </motion.div> */}
          {/* <div className="items-center space-x-2.5 justify-center rounded-full border inline-flex border-zinc-300 px-3 py-1">
            <MoonStar />
            <p className="text-lg">Your manifesting buddy</p>
          </div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-1.5 text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-[84px] max-w-4xl mx-auto xl:leading-[1.22]"
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
            Transform your life by learning and applying spiritual laws, simplified and supported by
            practical tools to easily bring them into your daily life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex justify-center space-x-2.5"
          >
            <Button size="lg">
              Get started <ArrowRight className="" />
            </Button>
            <Button size="lg" variant="link">
              Tell me more
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ opacity: scrollOpacity }}
        >
          {/* <ScrollIndicator /> */}
        </motion.div>
        <div className="mt-32 grid grid-cols-1 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:space-x-6 !bg-opacity-90">
          {feat.map((feature, index) => (
            <div key={index} className="p-10 flex flex-col rounded-lg bg-white">
              {/* <div className="inline-block rounded-sm bg-black p-2">
                <feature.icon size={32} className="text-white" />
              </div> */}

              <h3 className="mt-6">{feature.title}</h3>
              <p className="mt-3 text-slate-600 flex-1">{feature.description}</p>
              {/* <Link href="/learn" className="mt-6 font-bold text-sm">
                Learn more
              </Link> */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
