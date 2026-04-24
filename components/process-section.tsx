import { Card, CardContent } from "@/components/ui/card";
import IconRenderer from "@/components/IconRenderer";
import { ProcessStep } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { getProcessSteps } from "@/sanity/lib/queries";

export default async function ProcessSection() {
  const steps: ProcessStep[] = await client.fetch(getProcessSteps);

  if (!steps?.length) {
    return null;
  }

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 space-y-8">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
        <div className="space-y-5 lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 bg-[#1b2127] border border-[#3b4754] rounded-full px-4 py-2">
            <IconRenderer iconName="Workflow" className="w-4 h-4 text-[#3d98f4]" />
            <span className="text-[#9cabba] text-sm font-medium">How I Work</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            A Process Built For Results
          </h2>
          <p className="text-[#9cabba] text-base sm:text-lg leading-relaxed">
            Clear scope, fast iteration, and practical handoff so every build
            lands as a working system instead of a vague deliverable.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <Card
              key={step._id}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b2127] to-[#151a1f] border-[#3b4754] hover:border-[#3d98f4]/50 transition-all duration-300"
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="size-12 rounded-2xl bg-[#283039] border border-[#3b4754] flex items-center justify-center text-[#3d98f4] font-black">
                      {step.stepNumber || String(index + 1).padStart(2, "0")}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px h-full min-h-10 bg-[#283039] mt-3" />
                    )}
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        {step.label && (
                          <p className="text-xs uppercase tracking-[0.22em] text-[#3d98f4]">
                            {step.label}
                          </p>
                        )}
                        <h3 className="text-white text-xl font-bold">{step.title}</h3>
                      </div>
                      {step.timeline && (
                        <span className="text-sm text-[#10b981]">{step.timeline}</span>
                      )}
                    </div>
                    <p className="text-[#9cabba] leading-relaxed">{step.description}</p>
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
