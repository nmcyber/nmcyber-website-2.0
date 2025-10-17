import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS_PAGE } from '@/utils/constants';

export default function ProductLineup() {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="gradient-heading2">{PRODUCTS_PAGE.lineup.title}</h2>
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {PRODUCTS_PAGE.lineup.products.map((product) => (
            <div
              key={product.id}
              className="group relative backdrop-blur-sm outline outline-muted hover:border-t-2 border-t-accent rounded-2xl p-6 sm:p-8 hover:bg-background/80 flex flex-col max-w-3xs"
            >
              {/* Product Icon */}
              <div className="flex justify-start mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent border-t-2 border-t-accent/50 border-r-2 border-r-accent/50 border-l-2 border-l-accent/50 transition-all duration-300">
                  <Image
                    src={product.icon}
                    alt={`${product.title} icon`}
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
              </div>

              {/* Product Title */}
              <h3 className="gradient-heading3 text-left mb-4 text-lg sm:text-xl font-bold">
                {product.title}
              </h3>

              {/* Product Description */}
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 text-left flex-grow">
                {product.description}
              </p>

              {/* Read More Link */}
              <div className="text-left">
                <Link
                  href={product.linkHref}
                  className="inline-flex items-center font-[Poppins] text-accent hover:text-accent/80 font-medium text-sm sm:text-base transition-colors duration-300 group-hover:translate-x-1 transform"
                >
                  {product.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      {/* Right Binary Background */}
      <div className="absolute right-0 top-1/2 -z-10 h-1/2 w-1/2 opacity-90 hidden md:block">
        <Image
          src="/images/binary.svg"
          alt="Binary Background"
          fill
          style={{ objectFit: 'contain', objectPosition: 'right' }}
        />
      </div>
    </section>
  );
}
