// import { Mail } from 'lucide-react';
import Image from 'next/image';
import { ACADEMY } from '@/utils/constants';
import ContactForm from '../landing/contact-form';
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
            <p className="mb-10">{ACADEMY.description.paragraph1}</p>
            <p>{ACADEMY.description.paragraph2}</p>
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

      <ContactForm />
    </>
  );
}
