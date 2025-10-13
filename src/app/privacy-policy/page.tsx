import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - GovIQ Solutions',
  description: 'Privacy Policy for GovIQ Solutions - Government AI Services',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gov-navy mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gov-navy mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as when you contact us through our website, 
                  request information about our services, or communicate with us.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Organization details (agency name, department, role)</li>
                  <li>Communication preferences</li>
                  <li>Information you provide in messages or inquiries</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gov-navy mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our services and solutions</li>
                  <li>Improve our services and develop new offerings</li>
                  <li>Communicate with you about updates and relevant information</li>
                  <li>Comply with legal obligations and government requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gov-navy mb-4">Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or government requests</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gov-navy mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. Our security practices include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Compliance with government security standards</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gov-navy mb-4">Data Retention</h2>
                <p className="text-gray-700">
                  We retain your personal information only as long as necessary to fulfill the purposes 
                  outlined in this privacy policy, comply with legal obligations, resolve disputes, 
                  and enforce our agreements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gov-navy mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gov-navy mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700">
                  Our website may use cookies and similar technologies to improve user experience 
                  and analyze website usage. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gov-navy mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this privacy policy from time to time. We will notify you of any 
                  material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gov-navy mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>GovIQ Solutions LLC</strong><br />
                    Email: privacy@goviq.com<br />
                    Phone: (555) 123-4567
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}