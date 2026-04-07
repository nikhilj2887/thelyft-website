import { UserPlus, Clock, Users, FileText, Lightbulb, Presentation } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: UserPlus,
      title: 'Permanent Staffing',
      description: 'Find the perfect long-term fit for your team with our targeted recruitment for permanent positions. We match exceptional candidates with roles where they can thrive and grow.',
      features: [
        'Comprehensive candidate screening',
        'Cultural fit assessment',
        'Long-term placement success',
        'Quality guarantee programs',
      ],
      color: 'from-[#5392d5] to-[#f0c831]',
    },
    {
      icon: Clock,
      title: 'Temporary Staffing',
      description: 'Get the flexibility you need with temporary staffing solutions for short-term projects or seasonal demands. Quick turnaround with qualified professionals ready to contribute immediately.',
      features: [
        'Rapid deployment of talent',
        'Flexible engagement models',
        'Seasonal workforce solutions',
        'Project-based staffing',
      ],
      color: 'from-[#5392d5] to-[#f0c831]',
    },
    {
      icon: Users,
      title: 'Executive Search',
      description: 'Access top-tier executive talent with our specialized search services for senior and leadership roles. We connect you with industry leaders who drive transformation.',
      features: [
        'C-suite recruitment',
        'Leadership assessment',
        'Confidential search process',
        'Strategic hiring partnerships',
      ],
      color: 'from-[#5392d5] to-[#f0c831]',
    },
    {
      icon: FileText,
      title: 'Recruitment Process Outsourcing',
      description: 'Let us handle all aspects of your recruitment process, from sourcing to onboarding, to streamline your hiring and improve efficiency. Full-cycle recruitment management.',
      features: [
        'End-to-end recruitment management',
        'Candidate sourcing & screening',
        'Interview coordination',
        'Onboarding support',
      ],
      color: 'from-[#5392d5] to-[#f0c831]',
    },
    {
      icon: Lightbulb,
      title: 'Consulting Services',
      description: 'Benefit from our expert advice on workforce planning, talent management, and HR strategy. Strategic guidance to optimize your talent acquisition and retention.',
      features: [
        'Workforce planning strategies',
        'Talent management consulting',
        'HR process optimization',
        'Compensation benchmarking',
      ],
      color: 'from-[#5392d5] to-[#f0c831]',
    },
    {
      icon: Presentation,
      title: 'Candidate Presentation',
      description: 'Receive a curated shortlist of candidates, complete with detailed profiles and recommendations. We present only the best matches for your specific requirements.',
      features: [
        'Detailed candidate profiles',
        'Skills assessment reports',
        'Interview recommendations',
        'Background verification',
      ],
      color: 'from-[#5392d5] to-[#f0c831]',
    },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#5392d5]/10 backdrop-blur-sm border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-6 font-heading">
            Our Services
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 font-heading">
            Comprehensive Staffing
            <span className="text-[#5392d5]"> Solutions</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto font-body">
            From permanent placements to executive search, we provide end-to-end recruitment services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 lg:p-10 bg-white backdrop-blur-xl border border-[#5392d5]/20 rounded-3xl hover:border-[#5392d5]/50 hover:shadow-lg transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#5392d5]/20 to-[#f0c831]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className={`inline-flex p-4 bg-gradient-to-br from-[#5392d5]/30 to-[#f0c831]/30 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 w-fit`}>
                  <service.icon className="w-8 h-8 text-[#5392d5]" strokeWidth={2} />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#151515] mb-4 font-heading">
                  {service.title}
                </h3>

                <p className="text-[#4A4A4A] mb-6 leading-relaxed font-body">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 text-[#4A4A4A] font-body">
                      <svg className="w-5 h-5 text-[#5392d5] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/form"
                  className="inline-flex items-center justify-center mt-auto px-6 py-3 bg-gradient-to-r from-[#5392d5] to-[#2F6FB3] text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-[#5392d5]/30 hover:bg-gradient-to-r hover:from-[#2F6FB3] hover:to-[#1F4F85] transition-all duration-300 transform hover:-translate-y-0.5 font-heading"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
