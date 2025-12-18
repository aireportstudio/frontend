import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - AI Report Studio",
  description: "Learn about how AI Report Studio collects, uses, and protects your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold font-serif gradient-text">
              AI Report Studio
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/blog">
                <Button variant="ghost" size="sm">
                  Blog
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <article className="bg-white rounded-lg shadow-lg p-8 md:p-12 prose-content">
          <h1>Privacy Policy</h1>
          <p className="text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <p>
            Welcome to AI Report Studio ("we," "our," or "us"). We are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our AI-powered project report generation platform.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Personal Information</h3>
          <p>When you register for an account or use our services, we may collect:</p>
          <ul>
            <li>Name and email address</li>
            <li>Educational institution information</li>
            <li>Payment information (processed securely through third-party payment processors)</li>
            <li>Profile information and preferences</li>
            <li>Communication history with our support team</li>
          </ul>

          <h3>1.2 Usage Information</h3>
          <p>We automatically collect information about how you interact with our platform:</p>
          <ul>
            <li>Log data (IP address, browser type, operating system)</li>
            <li>Device information</li>
            <li>Usage patterns and feature interactions</li>
            <li>Report generation history and preferences</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3>1.3 Content Information</h3>
          <p>To provide our AI-powered services, we process:</p>
          <ul>
            <li>Project titles and descriptions you provide</li>
            <li>Report content generated through our platform</li>
            <li>Citations and references</li>
            <li>Uploaded documents and materials</li>
          </ul>

          <h2>2. How We Use Your Information</h2>

          <p>We use the collected information for the following purposes:</p>

          <h3>2.1 Service Provision</h3>
          <ul>
            <li>Generate and deliver AI-powered project reports</li>
            <li>Manage your account and subscriptions</li>
            <li>Process payments and transactions</li>
            <li>Provide customer support and respond to inquiries</li>
          </ul>

          <h3>2.2 Service Improvement</h3>
          <ul>
            <li>Analyze usage patterns to improve our AI algorithms</li>
            <li>Develop new features and functionalities</li>
            <li>Conduct research and analytics</li>
            <li>Enhance user experience and platform performance</li>
          </ul>

          <h3>2.3 Communication</h3>
          <ul>
            <li>Send service-related notifications and updates</li>
            <li>Provide educational content and tips</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Respond to your requests and feedback</li>
          </ul>

          <h3>2.4 Security and Compliance</h3>
          <ul>
            <li>Detect and prevent fraud and abuse</li>
            <li>Ensure platform security and integrity</li>
            <li>Comply with legal obligations</li>
            <li>Enforce our Terms of Service</li>
          </ul>

          <h2>3. How We Share Your Information</h2>

          <p>We do not sell your personal information. We may share your information in the following circumstances:</p>

          <h3>3.1 Service Providers</h3>
          <p>We work with third-party service providers who help us operate our platform, including:</p>
          <ul>
            <li>Cloud hosting and storage providers</li>
            <li>Payment processors</li>
            <li>Email service providers</li>
            <li>Analytics and monitoring services</li>
            <li>Customer support tools</li>
          </ul>

          <h3>3.2 Legal Requirements</h3>
          <p>We may disclose your information if required by law or in response to:</p>
          <ul>
            <li>Legal processes (subpoenas, court orders)</li>
            <li>Requests from government authorities</li>
            <li>Protection of our rights and property</li>
            <li>Safety concerns for users or the public</li>
          </ul>

          <h3>3.3 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or sale of assets, your information may be transferred to the
            acquiring entity.
          </p>

          <h2>4. Data Security</h2>

          <p>We implement industry-standard security measures to protect your information:</p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Secure authentication and access controls</li>
            <li>Regular security audits and updates</li>
            <li>Employee training on data protection</li>
            <li>Incident response procedures</li>
          </ul>

          <p>
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive
            to protect your personal information, we cannot guarantee absolute security.
          </p>

          <h2>5. Your Rights and Choices</h2>

          <h3>5.1 Access and Control</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Delete your account and associated data</li>
            <li>Export your data in a portable format</li>
            <li>Object to certain processing activities</li>
          </ul>

          <h3>5.2 Marketing Communications</h3>
          <p>You can opt out of marketing emails by:</p>
          <ul>
            <li>Clicking the unsubscribe link in any marketing email</li>
            <li>Updating your communication preferences in your account settings</li>
            <li>Contacting us directly at info@aiprojectreport.com</li>
          </ul>

          <h3>5.3 Cookies</h3>
          <p>
            You can manage cookie preferences through your browser settings. Note that disabling cookies may affect
            platform functionality.
          </p>

          <h2>6. Data Retention</h2>

          <p>We retain your information for as long as necessary to:</p>
          <ul>
            <li>Provide our services to you</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
            <li>Maintain backup and security measures</li>
          </ul>

          <p>
            When you delete your account, we will delete or anonymize your personal information within 30 days, except
            where retention is required by law.
          </p>

          <h2>7. Children's Privacy</h2>

          <p>
            Our platform is designed for college and university students. We do not knowingly collect personal
            information from children under 13 years of age. If we discover that we have collected information from a
            child under 13, we will delete it immediately.
          </p>

          <h2>8. International Data Transfers</h2>

          <p>
            Your information may be transferred to and processed in countries other than your country of residence. We
            ensure appropriate safeguards are in place to protect your information in accordance with this Privacy
            Policy and applicable laws.
          </p>

          <h2>9. Third-Party Links</h2>

          <p>
            Our platform may contain links to third-party websites. We are not responsible for the privacy practices of
            these external sites. We encourage you to review their privacy policies before providing any personal
            information.
          </p>

          <h2>10. Updates to This Policy</h2>

          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal
            requirements. We will notify you of significant changes by:
          </p>
          <ul>
            <li>Posting a notice on our platform</li>
            <li>Sending an email to your registered address</li>
            <li>Updating the "Last updated" date at the top of this policy</li>
          </ul>

          <p>
            Your continued use of our platform after changes become effective constitutes acceptance of the updated
            policy.
          </p>

          <h2>11. Contact Us</h2>

          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please
            contact us:
          </p>

          <p>
            <strong>AI Report Studio</strong>
            <br />
            Email: info@aiprojectreport.com
            <br />
            Website: https://www.aiprojectreport.com/
          </p>

          <h2>12. Regional-Specific Provisions</h2>

          <h3>12.1 For EU/EEA Users (GDPR)</h3>
          <p>
            If you are located in the European Union or European Economic Area, you have additional rights under the
            General Data Protection Regulation (GDPR):
          </p>
          <ul>
            <li>Right to data portability</li>
            <li>Right to restrict processing</li>
            <li>Right to object to processing</li>
            <li>Right to lodge a complaint with a supervisory authority</li>
          </ul>

          <h3>12.2 For California Users (CCPA)</h3>
          <p>
            If you are a California resident, you have additional rights under the California Consumer Privacy Act
            (CCPA):
          </p>
          <ul>
            <li>Right to know what personal information is collected</li>
            <li>Right to know if personal information is sold or disclosed</li>
            <li>Right to opt-out of the sale of personal information</li>
            <li>Right to non-discrimination for exercising your rights</li>
          </ul>

          <hr />

          <p className="text-sm text-gray-600">
            By using AI Report Studio, you acknowledge that you have read and understood this Privacy Policy and agree
            to its terms.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AI Report Studio. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}