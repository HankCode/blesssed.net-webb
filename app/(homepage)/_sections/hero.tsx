"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { motion, useScroll, useTransform } from "framer-motion";

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
      <section className="">
        <Container section className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-slate-200 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-200"
            >
              <span>Get started 100% for free</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto xl:leading-[1.22]"
            >
              Living your dreamlife is your birthright
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
            >
              Understand and implement the principles of manifestation to transform your life. Based
              on the teachings of Kabbalah, Neville Goddard, A Course in Miracles, and the Bible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex justify-center gap-4"
            >
              <Button
                size="lg"
                className="h-12 px-6 text-base font-semibold transition-all hover:scale-105 rounded-full"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-6 text-base font-semibold transition-all hover:scale-105 rounded-full"
              >
                Learn More
              </Button>
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
