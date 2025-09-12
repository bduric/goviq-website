export default function About() {
  const awards = [
    {
      year: "2022",
      title: "Smart Cities North America Awards",
      organization: "International Data Corporation (IDC)",
      description: "Transportation - Connected & Autonomous Vehicles category"
    },
    {
      year: "2021",
      title: "Smart 50 Award",
      organization: "Smart Cities Connect",
      description: "Public-private sector data sharing program"
    },
    {
      year: "2020",
      title: "LocalSmart Award Winner",
      organization: "StateScoop",
      description: "Traffic data-sharing partnership innovation"
    },
    {
      year: "2020",
      title: "Digital Cities Survey Winner",
      organization: "Government Technology",
      description: "StormSense coastal flooding prediction project"
    },
    {
      year: "2019",
      title: "AWS City on Cloud Innovation Challenge",
      organization: "Amazon Web Services",
      description: "Dream Big Category - Open Data Portal"
    },
    {
      year: "2019",
      title: "Governor's Technology Award",
      organization: "COVITS Virginia",
      description: "Traffic Data-Sharing Partnership"
    }
  ]

  const expertise = [
    {
      icon: "🏛️",
      title: "Government Insider Knowledge",
      description: "15+ years working within government agencies, understanding real challenges and constraints"
    },
    {
      icon: "🤖",
      title: "Proven AI Implementation",
      description: "10+ years in AI/ML with exceptional ROI results in predictive analytics and automation"
    },
    {
      icon: "🌊",
      title: "Mission-Critical Solutions",
      description: "Sea level rise prediction, emergency response, and public safety applications"
    },
    {
      icon: "♿",
      title: "Accessibility & Compliance",
      description: "Making government data and websites ADA compliant and truly accessible"
    }
  ]

  return (
    <section id="about" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Built by Government Veterans, For Government Excellence
          </h2>
          <p className="text-xl text-gov-gray max-w-4xl mx-auto leading-relaxed">
            GovIQ is founded by seasoned government contractors and employees with 15+ years of experience 
            delivering transformative AI solutions across local, state, and federal agencies. We understand 
            government because we are government.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Government Experience</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gov-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">15+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Years of Government Contracting</h4>
                  <p className="text-gov-gray">Local government, DoD, state agencies, and higher education advisory roles</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gov-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">10+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Years in AI & Machine Learning</h4>
                  <p className="text-gov-gray">Specialized in government-applicable AI with proven ROI results</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gov-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">🏆</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">State Data Advisory Member</h4>
                  <p className="text-gov-gray">Active participation in state-level data governance and policy development</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Expertise Areas</h3>
            <div className="grid grid-cols-1 gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gov-gray">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Nationwide Recognition & Awards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-br from-gov-blue/5 to-gov-green/5 rounded-xl p-6 border border-gov-blue/20">
                <div className="text-gov-blue font-bold text-lg mb-2">{award.year}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{award.title}</h4>
                <p className="text-sm text-gov-blue font-medium mb-2">{award.organization}</p>
                <p className="text-sm text-gov-gray">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-gov-blue to-gov-navy rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Our Mission: Government Efficiency Through Innovation
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We believe there are no small improvements in government - every marginal improvement, 
              when applied at government scale, delivers massive impact to citizens and communities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold mb-2">Quick & Impactful</h4>
                <p className="text-sm text-blue-200">Rapid deployment of solutions that make immediate difference</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">User-Focused</h4>
                <p className="text-sm text-blue-200">Technology in the hands of the people who need it most</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🔧</div>
                <h4 className="font-semibold mb-2">Bottleneck Breakers</h4>
                <p className="text-sm text-blue-200">Identifying and solving skills, people, and technology constraints</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Small Team, Agile Impact
            </h3>
            <p className="text-lg text-gov-gray leading-relaxed">
              As a newly founded, small and agile team focused exclusively on the USA market, 
              we combine deep government experience with cutting-edge AI expertise. We know government 
              challenges because we've lived them, and we know AI solutions because we've built them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}