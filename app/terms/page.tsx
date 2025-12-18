import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - AI Report Studio",
  description: "Read the terms and conditions for using AI Report Studio's project report generation platform.",
}

export default function TermsOfService() {
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
          <h1>Terms of Service</h1>
          <p className="text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <p>
            Welcome to AI Report Studio. These Terms of Service ("Terms") govern your use of our AI-powered project
            report generation platform and services. By accessing or using our platform, you agree to be bound by these
            Terms. Please read them carefully.
          </p>

          <h2>1. Acceptance of Terms</h2>

          <p>
            By creating an account, accessing, or using AI Report Studio ("Service," "Platform," "we," "us," or "our"),
            you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy
            Policy. If you do not agree with these Terms, you must not use our Service.
          </p>

          <h2>2. Eligibility</h2>

          <p>To use our Service, you must:</p>
          <ul>
            <li>Be at least 13 years of age (or the age of majority in your jurisdiction)</li>
            <li>Have the legal capacity to enter into binding contracts</li>
            <li>Not be prohibited from using the Service under applicable laws</li>
            <li>Provide accurate and complete registration information</li>
          </ul>

          <p>
            Our Service is primarily designed for college and university students. If you are under 18, you should have
            parental or guardian consent to use the Service.
          </p>

          <h2>3. Account Registration and Security</h2>

          <h3>3.1 Account Creation</h3>
          <p>To access certain features, you must create an account by providing:</p>
          <ul>
            <li>A valid email address</li>
            <li>A secure password</li>
            <li>Any other required information</li>
          </ul>

          <h3>3.2 Account Security</h3>
          <p>You are responsible for:</p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized access</li>
            <li>Ensuring your account information remains accurate and up-to-date</li>
          </ul>

          <h3>3.3 Account Termination</h3>
          <p>We reserve the right to suspend or terminate your account if you:</p>
          <ul>
            <li>Violate these Terms</li>
            <li>Engage in fraudulent or illegal activities</li>
            <li>Abuse our Service or harm other users</li>
            <li>Provide false or misleading information</li>
          </ul>

          <h2>4. Service Description</h2>

          <p>
            AI Report Studio provides an AI-powered platform that helps students generate structured, academic project
            reports. Our Service includes:
          </p>
          <ul>
            <li>AI-assisted content generation for academic reports</li>
            <li>Professional templates and formatting tools</li>
            <li>Citation management and bibliography generation</li>
            <li>Plagiarism detection capabilities</li>
            <li>Export options in multiple formats (PDF, DOCX, LaTeX)</li>
          </ul>

          <p>
            We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or
            without notice.
          </p>

          <h2>5. Acceptable Use Policy</h2>

          <h3>5.1 Permitted Use</h3>
          <p>You may use our Service to:</p>
          <ul>
            <li>Generate academic project reports for legitimate educational purposes</li>
            <li>Organize and structure your research and writing</li>
            <li>Create citations and bibliographies</li>
            <li>Improve your academic writing skills</li>
          </ul>

          <h3>5.2 Prohibited Activities</h3>
          <p>You must NOT:</p>
          <ul>
            <li>Use the Service for plagiarism or academic dishonesty</li>
            <li>Submit AI-generated content as entirely your own work without proper disclosure</li>
            <li>Share your account credentials with others</li>
            <li>Attempt to reverse engineer or copy our AI algorithms</li>
            <li>Use automated tools (bots, scrapers) to access the Service</li>
            <li>Upload malicious code or viruses</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights of others</li>
            <li>Harass, threaten, or harm other users</li>
            <li>Resell or redistribute our Service without authorization</li>
          </ul>

          <h2>6. Academic Integrity</h2>

          <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
            <strong>Important Notice:</strong> AI Report Studio is designed as a writing assistance tool. You are
            responsible for ensuring that your use of our Service complies with your institution's academic integrity
            policies.
          </p>

          <p>We strongly recommend that you:</p>
          <ul>
            <li>Review your institution's policies on AI-assisted writing</li>
            <li>Use our Service as a starting point and add your own research and analysis</li>
            <li>Properly cite and attribute all sources</li>
            <li>Disclose the use of AI assistance when required</li>
            <li>Seek guidance from your instructors when uncertain</li>
          </ul>

          <h2>7. Subscription Plans and Payments</h2>

          <h3>7.1 Pricing</h3>
          <p>We offer various subscription plans:</p>
          <ul>
            <li>
              <strong>Free Plan:</strong> Limited features and usage
            </li>
            <li>
              <strong>Student Plan:</strong> Enhanced features with monthly limits
            </li>
            <li>
              <strong>Pro Plan:</strong> Unlimited access to all features
            </li>
          </ul>

          <p>Pricing is subject to change with 30 days' notice to existing subscribers.</p>

          <h3>7.2 Payment Terms</h3>
          <ul>
            <li>Payments are processed through secure third-party payment processors</li>
            <li>Subscriptions automatically renew unless cancelled</li>
            <li>You authorize us to charge your payment method on each renewal date</li>
            <li>All fees are non-refundable except as required by law</li>
          </ul>

          <h3>7.3 Cancellation</h3>
          <p>
            You may cancel your subscription at any time through your account settings. Cancellation will be effective
            at the end of the current billing period. No refunds will be provided for partial subscription periods.
          </p>

          <h3>7.4 Free Trial</h3>
          <p>If you sign up for a free trial:</p>
          <ul>
            <li>You will be charged when the trial period ends unless you cancel</li>
            <li>One free trial per user</li>
            <li>We may require payment information at the start of the trial</li>
          </ul>

          <h2>8. Intellectual Property Rights</h2>

          <h3>8.1 Our Intellectual Property</h3>
          <p>All content on the Platform, including but not limited to:</p>
          <ul>
            <li>Software, code, and algorithms</li>
            <li>Templates and design elements</li>
            <li>Text, graphics, logos, and images</li>
            <li>Trademarks and brand assets</li>
          </ul>
          <p>are owned by or licensed to AI Report Studio and protected by intellectual property laws.</p>

          <h3>8.2 Your Content</h3>
          <p>You retain ownership of the content you create using our Service. By using our Service, you grant us:</p>
          <ul>
            <li>A license to store and process your content to provide the Service</li>
            <li>The right to use anonymized, aggregated data for improving our AI algorithms</li>
            <li>The right to display your content in the Platform interface</li>
          </ul>

          <h3>8.3 AI-Generated Content</h3>
          <p>
            Content generated by our AI is provided "as-is" for your use in creating academic reports. You are
            responsible for:
          </p>
          <ul>
            <li>Reviewing and editing AI-generated content</li>
            <li>Ensuring accuracy and appropriateness</li>
            <li>Verifying all citations and references</li>
            <li>Complying with academic integrity requirements</li>
          </ul>

          <h2>9. Disclaimers and Limitations of Liability</h2>

          <h3>9.1 Service "As-Is"</h3>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
            NON-INFRINGEMENT.
          </p>

          <h3>9.2 No Guarantee of Results</h3>
          <p>We do not guarantee that:</p>
          <ul>
            <li>The Service will meet your specific requirements</li>
            <li>AI-generated content will be error-free or accurate</li>
            <li>Reports will receive specific grades or acceptance</li>
            <li>The Service will be uninterrupted or secure</li>
          </ul>

          <h3>9.3 Limitation of Liability</h3>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, AI REPORT STUDIO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR ACADEMIC
            STANDING.
          </p>

          <p>
            OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT
            YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>

          <h2>10. Indemnification</h2>

          <p>
            You agree to indemnify, defend, and hold harmless AI Report Studio, its officers, directors, employees, and
            agents from and against any claims, liabilities, damages, losses, and expenses arising out of or related to:
          </p>
          <ul>
            <li>Your use or misuse of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Your violation of academic integrity policies</li>
            <li>Any content you submit or generate</li>
          </ul>

          <h2>11. Data and Privacy</h2>

          <p>
            Your use of the Service is also governed by our Privacy Policy, which explains how we collect, use, and
            protect your personal information. Please review our Privacy Policy at{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              /privacy
            </Link>
            .
          </p>

          <h2>12. Modifications to Terms</h2>

          <p>We reserve the right to modify these Terms at any time. When we make changes, we will:</p>
          <ul>
            <li>Update the "Last updated" date</li>
            <li>Post a notice on the Platform</li>
            <li>Send an email notification for material changes</li>
          </ul>

          <p>
            Your continued use of the Service after changes become effective constitutes acceptance of the modified
            Terms. If you do not agree to the changes, you must stop using the Service.
          </p>

          <h2>13. Termination</h2>

          <p>Either party may terminate this agreement at any time:</p>

          <h3>13.1 By You</h3>
          <p>You may terminate by closing your account through account settings or contacting us.</p>

          <h3>13.2 By Us</h3>
          <p>We may terminate or suspend your access immediately, without prior notice, if you:</p>
          <ul>
            <li>Breach these Terms</li>
            <li>Engage in prohibited activities</li>
            <li>Pose a security risk</li>
            <li>Fail to pay applicable fees</li>
          </ul>

          <h3>13.3 Effect of Termination</h3>
          <p>Upon termination:</p>
          <ul>
            <li>Your right to use the Service will immediately cease</li>
            <li>You will lose access to your account and content</li>
            <li>We may delete your data in accordance with our Privacy Policy</li>
            <li>Provisions that should survive termination will remain in effect</li>
          </ul>

          <h2>14. Dispute Resolution</h2>

          <h3>14.1 Informal Resolution</h3>
          <p>
            Before filing a claim, you agree to contact us at info@aiprojectreport.com to attempt to resolve the
            dispute informally.
          </p>

          <h3>14.2 Arbitration</h3>
          <p>
            Any disputes not resolved informally shall be resolved through binding arbitration in accordance with the
            rules of the American Arbitration Association, except for disputes that may be brought in small claims
            court.
          </p>

          <h3>14.3 Class Action Waiver</h3>
          <p>
            You agree that disputes must be brought on an individual basis only, and not as part of any class,
            consolidated, or representative action.
          </p>

          <h2>15. Governing Law</h2>

          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where AI
            Report Studio operates, without regard to its conflict of law provisions.
          </p>

          <h2>16. Miscellaneous</h2>

          <h3>16.1 Entire Agreement</h3>
          <p>
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and AI Report
            Studio.
          </p>

          <h3>16.2 Severability</h3>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will
            remain in full force and effect.
          </p>

          <h3>16.3 Waiver</h3>
          <p>
            Our failure to enforce any right or provision of these Terms will not constitute a waiver of such right or
            provision.
          </p>

          <h3>16.4 Assignment</h3>
          <p>
            You may not assign or transfer these Terms without our prior written consent. We may assign our rights and
            obligations without restriction.
          </p>

          <h3>16.5 Force Majeure</h3>
          <p>We shall not be liable for any failure to perform due to circumstances beyond our reasonable control.</p>

          <h2>17. Contact Information</h2>

          <p>If you have questions about these Terms of Service, please contact us:</p>

          <p>
            <strong>AI Report Studio</strong>
            <br />
            Email: info@aiprojectreport.com
            <br />
            Website: https://www.aiprojectreport.com/
          </p>

          <hr />

          <p className="text-sm text-gray-600">
            By using AI Report Studio, you acknowledge that you have read, understood, and agree to be bound by these
            Terms of Service.
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