import { Mail } from 'lucide-react';
import Image from 'next/image';
import BlurElement from '../shared/blur-element';

export default function AcademyComingSoon() {
  return (
    <>
      <section id="coming-soon">
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="gradient-heading1 py-2 mb-6">NMCYBER Academy</h1>
          {/* Description */}
          <div className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            <p className="mb-10">
              We're building something amazing! NMCYBER Academy will be your comprehensive learning
              hub for cybersecurity awareness and training.
            </p>
            <p>
              Get ready for interactive courses, certifications, and hands-on learning experiences
              designed to transform your team into cyber defenders.
            </p>
          </div>
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
            Coming Soon
          </div>
          {/* Features Preview */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="card-shadow border border-gray-200/20 rounded-lg p-6">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/images/chapter.svg"
                  alt="Courses"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-[Poppins]">
                Interactive Courses
              </h3>
              <p className="text-sm text-muted-foreground">
                Engaging, scenario-based learning modules tailored to your role and industry.
              </p>
            </div>
            <div className="card-shadow border border-gray-200/20 rounded-lg p-6">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/images/dashboard.svg"
                  alt="Progress Tracking"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-[Poppins]">
                Progress Tracking
              </h3>
              <p className="text-sm text-muted-foreground">
                Monitor your learning journey with detailed analytics and achievement tracking.
              </p>
            </div>
          </div>
          {/* Footer Wave */}
          <div className="relative">
            <Image
              src="/images/footer_wave.svg"
              alt="Footer wave"
              width={1920}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 hidden md:block">
          {/* Hero Net Background Image */}
          <Image
            src="/images/hero-bg.svg"
            alt="Hero Background"
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'center bottom',
              opacity: 0.4,
            }}
            quality={90}
            priority
            className="translate-y-1/4"
          />

          {/* Binary Background */}
          <div className="absolute right-0 top-0 h-[90dvh] w-3/10">
            <Image
              src="/images/binary.svg"
              alt="Binary Background"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        {/* Blur Elements */}
        <BlurElement
          position="top"
          positionValue="10%"
          zIndex={-5}
          opacity={0.8}
          size="150px"
          blur="60px"
          className="left-[35%] top-[2%]"
        />
        <BlurElement
          position="top"
          positionValue="10%"
          zIndex={-5}
          opacity={0.3}
          size="650px"
          blur="60px"
          className="right-0 top-[2%]"
        />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="mx-auto max-w-6xl p-12 sm:p-20 gradient-bg1 opacity-90 backdrop-blur-[108.8px] border border-white/10 rounded-2xl hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300">
          <div className="space-y-4 sm:space-y-6">
            {/* Subtitle */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px bg-accent/60 w-16" />
              <span className="text-accent/80 text-sm font-bold font-plus-jakarta-sans uppercase">
                CONTACT US
              </span>
              <div className="h-px bg-accent/60 w-16" />
            </div>

            {/* Main Title */}
            <h2 className="gradient-heading2 py-2 text-center">Interested in NMCYBER Academy?</h2>

            {/* Description and Email CTA */}
            <div className="mx-auto space-y-4">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed text-center">
                Be the first to know when NMCYBER Academy launches! Contact us to get early access
                and updates.
              </p>
              <div className="flex items-start justify-center gap-1 text-center">
                <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="text-white text-sm sm:text-base font-medium">
                  Contact us at{' '}
                  <span className="font-semibold text-accent">info@nmcyber.com.au</span> to join our
                  early access list.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Chatbot Icon */}
        <div className="absolute z-10 right-0 bottom-0 scale-35 md:scale-100">
          <Image
            src="/images/chatbot.svg"
            alt="Icon"
            width={60}
            height={60}
            className="w-full h-full object-contain"
          />
        </div>
      </section>
    </>
  );
}
