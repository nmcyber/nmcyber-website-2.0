import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SERVICES_PAGE } from '@/utils/constants';
import BlurElement from '../shared/blur-element';

export default function ServicesPricingStrategy() {
  const { pricingStrategy } = SERVICES_PAGE;
  return (
    <section>
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="gradient-heading2 text-center mb-12">{pricingStrategy.title}</h2>
        <p className="text-left text-base sm:text-xl text-white font-bold font-plus-jakarta-sans mb-3">
          {pricingStrategy.note}
        </p>
        <ul className="max-w-3xl text-white space-y-4 mb-8">
          {pricingStrategy.bullets.map((bullet, index) => (
            <li
              key={`bullet-${bullet.title.slice(0, 20)}-${index}`}
              className="flex items-start gap-3"
            >
              <Image
                src={pricingStrategy.flashIcon}
                alt="flash"
                width={16}
                height={16}
                className="flex-shrink-0 mt-0.5"
              />
              <div>
                <h4 className="text-white font-semibold text-base mb-1">{bullet.title}</h4>
                <p className="text-muted-foreground text-sm">{bullet.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="text-center text-3xl sm:text-4xl gradient-heading3 mb-12 py-4">
          {pricingStrategy.monthlyPricing.title}
        </h3>
        <div className="overflow-x-auto">
          <div className="relative rounded-2xl border-1 border-white/10 overflow-hidden">
            <Table className="w-full text-left">
              <TableHeader>
                <TableRow>
                  <TableHead className="py-3 px-4 text-base sm:text-lg font-plus-jakarta-sans text-white font-bold">
                    {pricingStrategy.monthlyPricing.headers.tier}
                  </TableHead>
                  <TableHead className="py-3 px-4 text-base sm:text-lg font-plus-jakarta-sans text-white font-bold">
                    {pricingStrategy.monthlyPricing.headers.monthly}
                  </TableHead>
                  <TableHead className="py-3 px-4 text-base sm:text-lg font-plus-jakarta-sans text-white font-bold">
                    {pricingStrategy.monthlyPricing.headers.annual}
                  </TableHead>
                  <TableHead className="py-3 px-4 text-base sm:text-lg font-plus-jakarta-sans text-white font-bold">
                    {pricingStrategy.monthlyPricing.headers.bestFor}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingStrategy.monthlyPricing.rows.map((r, _rowIndex) => (
                  <TableRow key={r.tier}>
                    <TableCell className="py-3 px-4 text-sm sm:text-base font-medium font-[poppins] text-white">
                      {r.tier}
                    </TableCell>
                    <TableCell className="py-3 px-4 text-sm sm:text-base font-medium font-[poppins] text-white">
                      {r.monthly}
                    </TableCell>
                    <TableCell className="py-3 px-4 text-sm sm:text-base font-medium font-[poppins] text-white">
                      {r.annual}
                    </TableCell>
                    <TableCell className="py-3 px-4 text-sm sm:text-base font-medium font-[poppins] text-white">
                      {r.bestFor}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <BlurElement
        position="top"
        positionValue="20%"
        zIndex={-5}
        opacity={0.2}
        size="600px"
        blur="120px"
        className="left-[5%] top-[0%]"
      />

      <BlurElement
        position="top"
        positionValue="60%"
        zIndex={-5}
        opacity={0.15}
        size="400px"
        blur="100px"
        className="right-[0%] top-[10%]"
      />
      <div className="absolute right-0 top-0 hidden md:block">
        <Image
          src={pricingStrategy.looper}
          alt="Looper"
          width={150}
          height={150}
          className="absolute right-0 top-0"
          style={{
            objectFit: 'contain',
            objectPosition: 'right top',
          }}
          quality={90}
          priority
        />
      </div>
    </section>
  );
}
