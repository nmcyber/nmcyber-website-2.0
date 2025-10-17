import { Globe, Mail, Phone, Search } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_FORM } from '@/utils/constants';
import { BlurElement } from '../shared/blur-element';

export default function ContactForm() {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <Card className="gradient-bg1 backdrop-blur-sm hover:border-t-accent/50 hover:border-r-accent/50 hover:border-l-accent/50 transition-all duration-300">
          <CardContent className="p-0 relative z-10">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              {/* Left Section - Contact Info & CTA */}
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-px bg-accent w-12"></div>
                      <span className="text-accent/80 text-sm font-bold font-[Poppins] leading-[14px] uppercase">
                        CONTACT US
                      </span>
                    </div>
                    <span
                      className="text-4xl font-bold text-white mb-4 sm:text-6xl leading-tight"
                      style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
                    >
                      {CONTACT_FORM.title}
                    </span>
                  </div>

                  {/* CTA Button with Phone Icon */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white text-sm">
                      <Phone className="w-5 h-5 text-accent" />
                      <p className="font-semibold text-white text-base">
                        {CONTACT_FORM.description}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="h-9 rounded-5xl bg-transparent outline outline-accent"
                    >
                      <p className="px-5 text-base leading-tight text-accent">
                        {CONTACT_FORM.cta} →
                      </p>
                    </Button>
                  </div>
                  {/* {Separator} */}
                  <div className="h-px w-7/9 bg-gray-500/30"></div>
                  {/* Contact Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white">
                      <Mail className="w-5 h-5 text-accent" />
                      <p className="text-sm font-medium text-white">{CONTACT_FORM.email}</p>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Globe className="w-5 h-5 text-accent" />
                      <p className="text-sm font-medium text-white">{CONTACT_FORM.website}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div className="bg-slate-800/30 p-12 flex flex-col justify-center ">
                <form className="space-y-6 outline outline-gray-400/30 rounded-5xl p-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Input
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="font-[Poppins] bg-slate-700/50 border-slate-600 text-white placeholder:text-white/50 focus:ring-accent/20 rounded-5xl h-12"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      className="font-[Poppins] bg-slate-700/50 border-slate-600 text-white placeholder:text-white/50 focus:ring-accent/20 rounded-5xl h-12"
                      required
                    />
                  </div>

                  {/* Company Field with Search Icon */}
                  <div className="space-y-2">
                    <div className="relative">
                      <Input
                        id="company"
                        type="text"
                        placeholder="Company"
                        className="font-[Poppins] bg-slate-700/50 border-slate-600 text-white placeholder:text-white/50 focus:ring-accent/20 rounded-5xl h-12 pr-12"
                        required
                      />
                      <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                    </div>
                  </div>

                  {/* Number of Employees */}
                  <div className="space-y-2">
                    <Input
                      id="employees"
                      type="text"
                      placeholder="Number of Employees"
                      className="font-[Poppins] bg-slate-700/50 border-slate-600 text-white placeholder:text-white/50 focus:ring-accent/20 rounded-5xl h-12"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      rows={4}
                      className="font-[Poppins] bg-slate-700/50 border-slate-600 text-white placeholder:text-white/50 focus:ring-accent/20 resize-none rounded-lg"
                    />
                  </div>

                  {/* Submit Button using hero style */}
                  <Button
                    type="submit"
                    className="h-auto w-full rounded-5xl px-6 py-5 bg-gradient-to-r from-[var(--button-gradient-start)] to-[var(--button-gradient-end)] sm:px-10"
                  >
                    <span className="font-[Poppins] text-lg font- leading-tight text-white transition-all duration-300 hover:opacity-95 hover:shadow-xl sm:text-xl sm:leading-[14px]">
                      {CONTACT_FORM.formCta}
                    </span>
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Background Elements using CSS variables */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        {/* Wavy Pattern */}
        <div className="absolute z-5 bottom-4 right-[-10%] w-64 h-32 pointer-events-none">
          <Image
            src={'/images/looper.svg'}
            alt="Background Pattern"
            width={1600}
            height={800}
            className="w-full h-auto object-right"
          />
        </div>
      </div>

      {/* Chatbot Icon using CSS variables */}
      <div className="absolute bottom-0 right-0 z-50">
        <Image
          src={CONTACT_FORM.chatbot}
          alt="Chatbot"
          width={60}
          height={60}
          className="w-full h-full object-contain"
        />
      </div>
      {/* Blur Elements for specific cards */}
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.8}
        size="300px"
        blur="80px"
        className="right-[5%] top-[20%]"
      />
      <BlurElement
        position="top"
        positionValue="10%"
        zIndex={-5}
        opacity={0.8}
        size="300px"
        blur="80px"
        className="left-[5%] top-[20%]"
      />
    </section>
  );
}
