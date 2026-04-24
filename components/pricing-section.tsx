import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PricingPlan } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { getPricingPlans } from "@/sanity/lib/queries";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default async function PricingSection() {
  const plans: PricingPlan[] = await client.fetch(getPricingPlans);

  if (!plans?.length) {
    return null;
  }

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
          <ShieldCheck className="w-4 h-4 text-[#10b981]" />
          <span className="text-[#9cabba] text-sm font-medium">Pricing</span>
        </div>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Simple Project Ranges
        </h2>
        <p className="text-[#9cabba] text-base sm:text-lg max-w-3xl mx-auto">
          Clear starting ranges for common builds. Final scope is confirmed after
          a short discovery call.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {plans.map((plan) => (
          <Card
            key={plan._id}
            className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
              plan.highlighted
                ? "bg-gradient-to-br from-[#123029] via-[#1b2127] to-[#151a1f] border-[#10b981]/60 shadow-2xl shadow-[#10b981]/10"
                : "bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754] hover:border-[#3d98f4]/50"
            }`}
          >
            {plan.badge && (
              <div className="absolute right-4 top-4">
                <Badge className="bg-[#10b981] text-[#07130f] font-bold">
                  {plan.badge}
                </Badge>
              </div>
            )}
            <CardContent className="p-6 space-y-6">
              <div className="space-y-3">
                <h3 className="text-white text-xl font-black">{plan.title}</h3>
                <div>
                  <div className="text-3xl font-black text-[#3d98f4]">
                    {plan.priceRange}
                  </div>
                  {plan.subtitle && (
                    <p className="text-[#9cabba] text-sm mt-1">{plan.subtitle}</p>
                  )}
                </div>
                {plan.deliveryTime && (
                  <p className="text-[#10b981] text-sm font-medium">
                    Delivery: {plan.deliveryTime}
                  </p>
                )}
              </div>

              {!!plan.features?.length && (
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-[#c7d0da]">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#10b981]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <Button
                asChild
                className={`w-full ${
                  plan.highlighted
                    ? "bg-[#10b981] hover:bg-[#059669] text-[#07130f]"
                    : "bg-[#3d98f4] hover:bg-[#2d7bd4] text-white"
                } font-semibold`}
              >
                <Link href={plan.ctaHref || "/#contact"}>
                  {plan.ctaLabel || "Book a free call"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-3xl bg-[#111418] border-[#283039]">
        <CardContent className="p-6 sm:p-8 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
          <div>
            <h3 className="text-white text-2xl font-black">Ready to build?</h3>
            <p className="text-[#9cabba] mt-2">
              Bring the workflow, bottleneck, or product idea. I will help turn it
              into a practical implementation plan.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#3d98f4] to-[#10b981] hover:from-[#2d7bd4] hover:to-[#059669] text-white font-semibold"
          >
            <Link href="/#contact">
              Let&apos;s scope it
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
