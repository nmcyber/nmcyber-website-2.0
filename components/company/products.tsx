import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PRODUCTS } from "@/utils/constants";
import Image from "next/image";
import {Check} from "lucide-react";
import { BlurElement } from "../shared/blur-element";

export default function Products() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-primary-green-80/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-4">
            <div className="h-px bg-accent/60 w-16"></div>
            <span className="text-accent/80 text-sm font-medium tracking-wider uppercase">PRODUCTS</span>
            <div className="h-px bg-accent/60 w-16"></div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:gradient-text">
            {PRODUCTS.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {PRODUCTS.description}
          </p>
        </div>

         {/* Blur Elements for specific cards */}

         <BlurElement 
          position="top" 
          positionValue="10%" 
          zIndex={-5}
          opacity={0.6}
          size="300px" 
          blur="80px"
          className="right-[25%] top-[20%]" 
        />

         <BlurElement 
          position="top" 
          positionValue="10%" 
          zIndex={-5}
          opacity={0.7}
          size="200px" 
          blur="60px"
          className="left-[2%] top-[75%]" 
        />
       

        {/* Services Grid - 2x2 Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {PRODUCTS.services.map((service, index) => (
            <Card key={service.id} className="bg-card backdrop-blur-sm border border-border rounded-lg hover:border-accent/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={service.icon}
                    alt={`${service.name} icon`}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-3">
                  {service.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center items-center justify-center">
          <Button 
            size="sm"
            className="text-accent-foreground h-auto w-full rounded-2xl px-1 py-1 bg-gradient-to-r from-[#045B7D] to-[#64CDF6] sm:w-auto sm:px-10"
          >
            Read All
          </Button>
        </div>
      </div>
    </section>
  );
}