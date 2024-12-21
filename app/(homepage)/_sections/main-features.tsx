import Container from "@/components/Container";
import {
  Bell,
  Bird,
  BookOpen,
  Group,
  GroupIcon,
  Heart,
  PersonStandingIcon,
  Sword,
  Users,
} from "lucide-react";
import React from "react";

const feat = [
  {
    icon: BookOpen,
    title: "Metaphysics demystified",
    description:
      "Gain a clear and modern understanding of the profound teachings from the Bible, Kabbalah, A Course in Miracles, and mystics like Neville Goddard, James Allen, Florence Scovel Shinn, and Emmet Fox. These principles are demystified and presented in a simplified way, connecting them to modern science",
  },
  {
    icon: Sword,
    title: "Practical Application",
    description:
      "Utilize a cutting-edge, AI-powered platform to integrate these teachings into daily life. With tools for spotting and overcoming limiting beliefs, journaling, progress tracking, and personalized reminders, this system helps you rewire your mind for transformation.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Thrive within a motivated and active community of like-minded individuals. Share experiences, exchange insights, and celebrate milestones together as you transform world.",
  },
  {
    icon: Bird,
    title: "Professional Guidance",
    description:
      "Get additional support from trained professionals on the platform. Access personalized assistance through group sessions or one-on-one coaching to accelerate your progress and deepen your transformation.",
  },
];

const HomeMainFeatures = () => {
  return (
    <section className="bg-[#f2f2f2]">
      <Container section>
        <h1 className="text-center mb-4">Platform core features</h1>
        <p className="max-w-3xl mx-auto text-xl text-center text-slate-600">
          Dive into the foundational principles and key practices that shape our platform, designed
          to guide you on your journey to manifesting your dream life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:space-x-6 mt-16">
          {feat.map((feature, index) => (
            <div key={index} className="p-10 rounded-lg bg-[#e8e8e8]">
              <div className="inline-block rounded-sm bg-black p-2">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="mt-6">{feature.title}</h3>
              <p className="mt-3 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeMainFeatures;
