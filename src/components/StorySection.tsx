import { MapPin, Leaf, Heart } from 'lucide-react';
import { site } from '../data/site';
import SectionReveal from './SectionReveal';

export default function StorySection() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-ivory" aria-labelledby="story-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <SectionReveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                {/* Replace with an actual Cafesa photograph */}
                <img
                  src="/images/story.svg"
                  alt="Illustrative café interior — replace with actual Cafesa photograph"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('bg-sand');
                      target.parentElement.innerHTML =
                        '<div class="flex items-center justify-center h-full text-espresso/30 font-serif text-xl italic">Photo coming soon</div>';
                    }
                  }}
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta/10 rounded-2xl -z-10" aria-hidden="true" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-olive/10 rounded-xl -z-10" aria-hidden="true" />
            </div>
          </SectionReveal>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <SectionReveal>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-4 block">
                Our Story
              </span>
              <h2
                id="story-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mb-8 leading-tight"
              >
                A little more <br className="hidden sm:block" />
                than a café.
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5 text-espresso/65 text-base sm:text-lg leading-relaxed mb-10">
                <p>
                  Cafesa is a place to slow down. A pure vegetarian café in the heart of Jaipur,
                  where every dish is prepared with care and every guest is welcomed with warmth.
                </p>
                <p>
                  Proudly women-owned, Cafesa was built on the simple belief that good food and
                  genuine hospitality can make an ordinary day feel a little more special.
                </p>
                <p>
                  Whether you're starting your morning with a quiet cup of coffee, catching up with
                  friends over a long lunch, or winding down after a busy day — there's a place
                  for you here.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center">
                    <Leaf size={18} className="text-olive" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-espresso">Pure Vegetarian</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <Heart size={18} className="text-terracotta" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-espresso">Women-Owned</span>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.25}>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 text-terracotta font-semibold text-sm hover:text-terracotta/80 transition-colors group"
              >
                <MapPin size={16} strokeWidth={2.5} aria-hidden="true" />
                Find Us in Jaipur
                <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
