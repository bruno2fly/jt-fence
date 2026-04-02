interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <div key={step.number} className="relative">
          {/* Connection Line */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-12 left-[calc(50%+32px)] right-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-transparent"></div>
          )}

          {/* Card */}
          <div className="relative bg-white border border-[#E8E4DF] rounded-lg p-8 hover:shadow-lg transition-shadow">
            {/* Step Number Circle */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-[#C9A84C] text-white rounded-full flex items-center justify-center font-heading font-bold text-lg">
              {step.number}
            </div>

            {/* Content */}
            <div className="pt-4">
              <h3 className="font-heading text-lg font-semibold text-[#1B4332] mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-[#2D3436] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
