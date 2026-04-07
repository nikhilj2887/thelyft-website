import { Award, Target, TrendingUp, Users as Users2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: 'Integrity',
      description: 'Building trust through honest and transparent partnerships',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Leveraging cutting-edge recruitment strategies and technology',
    },
    {
      icon: TrendingUp,
      title: 'Dedication',
      description: 'Committed to finding the perfect match for every position',
    },
    {
      icon: Users2,
      title: 'Quality Focus',
      description: 'Delivering exceptional talent that drives business success',
    },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden bg-gray-50">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-[#5392d5]/10 backdrop-blur-sm border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-6 font-heading">
                About thelyft
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 leading-tight font-heading">
                More Than Just a
                <span className="text-[#5392d5]"> Staffing Agency</span>
              </h2>
            </div>

            <div className="space-y-6 text-[#4A4A4A] text-lg font-body">
              <p>
                thelyft is your strategic partner in building a successful team. Founded on the principles
                of integrity, innovation, and dedication, we are committed to connecting exceptional talent
                with outstanding companies.
              </p>

              <p>
                We understand that finding the right people is more than just filling positions—it's about
                building teams that drive your business forward. Our comprehensive approach combines deep
                industry knowledge with advanced recruitment tools to deliver results that exceed expectations.
              </p>

              <p>
                Whether you need permanent staffing, temporary solutions, executive search, or full recruitment
                process outsourcing, we provide tailored services that align with your unique business goals
                and company culture.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 bg-gradient-to-r from-[#5392d5]/10 to-[#f0c831]/10 backdrop-blur-sm border border-[#5392d5]/30 rounded-lg text-[#151515] font-heading">
                Staffing Solutions
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-[#5392d5]/10 to-[#f0c831]/10 backdrop-blur-sm border border-[#5392d5]/30 rounded-lg text-[#151515] font-heading">
                Executive Search
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-[#5392d5]/10 to-[#f0c831]/10 backdrop-blur-sm border border-[#5392d5]/30 rounded-lg text-[#151515] font-heading">
                HR Consulting
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white backdrop-blur-sm border border-[#5392d5]/20 rounded-2xl hover:border-[#5392d5]/50 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-[#5392d5]/30 to-[#f0c831]/30 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-[#5392d5]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-[#151515] mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-[#4A4A4A] text-sm font-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
