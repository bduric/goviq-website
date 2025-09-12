export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gov-blue to-gov-navy text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Solutions for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-green-200">
                Government Excellence
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Secure, compliant, and innovative artificial intelligence solutions designed specifically for government agencies. Transform public services with trusted AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-white text-gov-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center">
                Request Demo
              </a>
              <a href="#solutions" className="border-2 border-white text-white hover:bg-white hover:text-gov-blue font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-center">
                View Solutions
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gov-green rounded-full"></div>
                    <span className="text-sm">On-Premises Deployment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gov-green rounded-full"></div>
                    <span className="text-sm">Behind Firewall Security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gov-green rounded-full"></div>
                    <span className="text-sm">Private Network Only</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gov-green rounded-full"></div>
                    <span className="text-sm">Enterprise Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}