import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Careers@thelyft.in',
      link: 'mailto:Careers@thelyft.in',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9642232781',
      link: 'tel:+919642232781',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: '4th floor, Chikoti Garden Rd, Old Patigadda, Chikoti Gardens, Begumpet, Hyderabad, Telangana 500016',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      name: 'WhatsApp',
      link: 'https://whatsapp.com/channel/0029VaqdQR6JENy4BsCCCD0I',
      color: 'hover:text-green-400',
      isReactIcon: true,
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/thelyft',
      color: 'hover:text-blue-400',
      isReactIcon: false,
    },
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://www.instagram.com/the_lyft/',
      color: 'hover:text-pink-400',
      isReactIcon: false,
    },
    {
      icon: Youtube,
      name: 'YouTube',
      link: 'https://www.youtube.com/@thelyft_official',
      color: 'hover:text-red-400',
      isReactIcon: false,
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white border border-[#5392d5]/30 rounded-full text-sm text-[#5392d5] mb-6 font-heading shadow-sm">
            Get in Touch
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#151515] mb-6 font-heading">
            Ready to Build Your
            <span className="text-[#5392d5]"> Dream Team?</span>
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto font-body">
            Get in touch today and let us help you find the perfect talent for your organization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="group p-8 bg-white border border-[#5392d5]/20 rounded-2xl hover:border-[#5392d5]/50 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-[#5392d5]/30 to-[#f0c831]/30 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <info.icon className="w-8 h-8 text-[#5392d5]" strokeWidth={2} />
              </div>
              <h3 className="text-[#4A4A4A] text-sm mb-2 font-heading">{info.title}</h3>
              <p className="text-[#151515] text-lg font-semibold font-body">{info.value}</p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white border border-[#5392d5]/20 rounded-xl text-[#4A4A4A] ${social.color} transition-all duration-300 hover:border-[#5392d5]/50 hover:scale-110 hover:shadow-md`}
              >
                {social.isReactIcon ? (
                  <social.icon className="w-6 h-6" />
                ) : (
                  <social.icon className="w-6 h-6" />
                )}
              </a>
            ))}
          </div>

          <div className="inline-block p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white border border-[#5392d5]/30 rounded-3xl max-w-3xl shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#151515] mb-4 font-heading">
              Let's Discuss Your Staffing Needs
            </h3>
            <p className="text-[#4A4A4A] mb-8 font-body">
              Connect with us today to discuss your hiring requirements and discover how we can help you build a successful team
            </p>
            <a
              href="/form"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#5392d5] to-[#2F6FB3] text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#5392d5]/30 hover:bg-gradient-to-r hover:from-[#2F6FB3] hover:to-[#1F4F85] transition-all duration-300 transform hover:-translate-y-1 font-heading"
            >
              Connect With Us
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
