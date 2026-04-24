import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import IconRenderer from "@/components/IconRenderer";
import { Service } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { getServices } from "@/sanity/lib/queries";

export default async function ServicesSection() {
  const services: Service[] = await client.fetch(getServices);

  if (!services?.length) {
    return null;
  }

  const [featuredService, ...supportingServices] = services;

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
          <IconRenderer iconName="Sparkles" className="w-4 h-4 text-[#3d98f4]" />
          <span className="text-[#9cabba] text-sm font-medium">Services</span>
        </div>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Systems That Save Time And Ship Value
        </h2>
        <p className="text-[#9cabba] text-base sm:text-lg max-w-3xl mx-auto">
          Production-grade web apps, automation pipelines, and AI workflows built
          around measurable outcomes.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-5 sm:gap-6">
        <Card className="relative overflow-hidden bg-gradient-to-br from-[#1b2127] via-[#151a1f] to-[#0d1117] border-[#3d98f4]/40 rounded-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(61,152,244,0.22),transparent_36%)]" />
          <CardContent className="relative p-6 sm:p-8 lg:p-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="space-y-4">
                <Badge className="w-fit bg-[#3d98f4]/15 border border-[#3d98f4]/30 text-[#8ec7ff]">
                  {featuredService.eyebrow || "Core Offering"}
                </Badge>
                <div className="space-y-3">
                  <div className="size-12 rounded-2xl bg-[#3d98f4]/15 border border-[#3d98f4]/30 flex items-center justify-center">
                    <IconRenderer
                      iconName={featuredService.icon}
                      className="w-6 h-6 text-[#3d98f4]"
                    />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-bold">
                    {featuredService.title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-[#c7d0da] text-base sm:text-lg leading-relaxed max-w-2xl">
              {featuredService.description}
            </p>

            {!!featuredService.metrics?.length && (
              <div className="grid sm:grid-cols-3 gap-3">
                {featuredService.metrics.map((metric) => (
                  <div
                    key={`${metric.value}-${metric.label}`}
                    className="rounded-2xl border border-[#3b4754] bg-[#111418]/70 p-4"
                  >
                    <div className="text-2xl font-black text-[#3d98f4]">
                      {metric.value}
                    </div>
                    <div className="text-xs text-[#9cabba] mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            {!!featuredService.technologies?.length && (
              <div className="flex flex-wrap gap-2">
                {featuredService.technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant="outline"
                    className="border-[#3b4754] bg-[#283039]/60 text-[#c7d0da]"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {supportingServices.map((service, index) => (
            <Card
              key={service._id}
              className="group bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754] hover:border-[#3d98f4]/60 rounded-3xl transition-all duration-300"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="p-5 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="size-11 shrink-0 rounded-2xl bg-[#283039] border border-[#3b4754] flex items-center justify-center group-hover:border-[#3d98f4]/60">
                    <IconRenderer
                      iconName={service.icon}
                      className="w-5 h-5 text-[#3d98f4]"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#3d98f4]">
                      {service.eyebrow || String(index + 2).padStart(2, "0")}
                    </p>
                    <h3 className="text-white text-lg font-bold">{service.title}</h3>
                    <p className="text-[#9cabba] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
