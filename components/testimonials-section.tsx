import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { getTestimonials } from "@/sanity/lib/queries";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export default async function TestimonialsSection() {
  const testimonials: Testimonial[] = await client.fetch(getTestimonials);

  if (!testimonials?.length) {
    return null;
  }

  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
          <Star className="w-4 h-4 text-[#f59e0b]" />
          <span className="text-[#9cabba] text-sm font-medium">Social Proof</span>
        </div>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          What Clients Say
        </h2>
        <p className="text-[#9cabba] text-base sm:text-lg max-w-3xl mx-auto">
          Feedback from people who trusted me to build practical, reliable systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        {testimonials.map((testimonial) => {
          const rating = testimonial.rating ?? 5;

          return (
            <Card
              key={testimonial._id}
              className="group h-full rounded-3xl bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754] hover:border-[#3d98f4]/50 transition-all duration-300"
            >
              <CardContent className="p-6 space-y-6 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <Quote className="w-8 h-8 text-[#3d98f4]/70" />
                  <div className="flex gap-1">
                    {Array.from({ length: rating }).map((_, index) => (
                      <Star
                        key={`${testimonial._id}-${index}`}
                        className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-[#c7d0da] leading-relaxed flex-1">
                  “{testimonial.quote}”
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="size-12 rounded-full overflow-hidden bg-[#283039] border border-[#3b4754] flex items-center justify-center">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.clientName}
                        width={48}
                        height={48}
                        className="size-full object-cover"
                      />
                    ) : (
                      <span className="text-white font-bold">
                        {testimonial.initials ||
                          testimonial.clientName
                            .split(" ")
                            .map((part) => part[0])
                            .join("")
                            .slice(0, 2)}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-white font-bold">{testimonial.clientName}</div>
                    <div className="text-[#9cabba] text-sm">
                      {testimonial.projectLabel ||
                        [testimonial.clientRole, testimonial.company]
                          .filter(Boolean)
                          .join(" · ")}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
