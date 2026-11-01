import { Quote } from 'lucide-react';
import { site } from '../data/site';
import SectionReveal from './SectionReveal';

export default function TestimonialSection() {
  return (
    <section
      id="testimonial"
      className="py-24 sm:py-32 bg-espresso text-ivory"
      aria-labelledby="testimonial-heading"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionReveal>
          <div className="text-center">
            {/* Decorative quote mark */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-terracotta/20 flex items-center justify-center">
                <Quote size={28} className="text-terracotta" aria-hidden="true" />
              </div>
            </div>

            <h2 id="testimonial-heading" className="sr-only">
              Customer Testimonial
            </h2>

            <blockquote>
              <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed sm:leading-relaxed text-ivory/90 italic mb-8">
                "{site.testimonial.quote}"
              </p>
              <footer className="text-ivory/50 text-sm tracking-wide">
                — {site.testimonial.attribution}
              </footer>
            </blockquote>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
