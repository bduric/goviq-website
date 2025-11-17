export default function Solutions() {
  const solutions = [
    {
      title: "A3 - AI Audio Analysis",
      description: "Enterprise-grade platform for analyzing audio calls (911, 311, Radio) with AI-powered transcription and quality assurance.",
      features: ["Call Transcription", "Quality Scoring", "Modern Web Interface"],
      link: "/products/a3-audio-analysis.html",
      demoLink: "https://a3-demo.goviq.us"
    },
    {
      title: "IDP1 - Intelligent Document Processing",
      description: "Automated processing and analysis of government documents with advanced OCR and NLP capabilities.",
      features: ["Form Processing", "Data Extraction", "Compliance Checking"],
      link: "/products/idp1-document-processing.html",
      demoLink: "https://idp1-demo.goviq.us"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights for better decision making and resource allocation across government operations.",
      features: ["Budget Forecasting", "Risk Assessment", "Performance Metrics"],
      link: null
    },
    {
      title: "On-Premises Deployment",
      description: "Secure deployment behind your firewall with private endpoints and managed identity architecture.",
      features: ["Private Network", "VNet Integration", "Zero External Access"],
      link: null
    }
  ]

  return (
    <section id="solutions" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            AI Solutions Built for Government
          </h2>
          <p className="text-xl text-gov-gray max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions designed to meet the unique needs and security requirements of government agencies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                {solution.link && (
                  <a 
                    href={solution.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gov-blue hover:text-gov-navy transition-colors"
                    title="View detailed information"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-gov-gray mb-4">{solution.description}</p>
              <ul className="space-y-2 mb-4">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gov-gray">
                    <svg className="w-4 h-4 text-gov-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              {solution.demoLink && (
                <a 
                  href={solution.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gov-blue hover:text-gov-navy font-medium transition-colors"
                >
                  See Demo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}