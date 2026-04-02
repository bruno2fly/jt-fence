import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container section-padding">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold font-heading text-primary-900 mb-8">
            Privacy Policy
          </h1>

          <p className="text-secondary-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-4">
              Introduction
            </h2>
            <p className="text-secondary-600 mb-4">
              JT Fence Inc. ("we," "our," or "us") operates the jtfenceboston.com website. This
              page informs you of our policies regarding the collection, use, and disclosure of
              personal data when you use our website and the choices you have associated with that
              data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-4">
              Information Collection and Use
            </h2>
            <p className="text-secondary-600 mb-4">
              We collect several different types of information for various purposes to provide
              and improve our service to you.
            </p>

            <h3 className="text-xl font-bold font-heading text-primary-900 mb-3 mt-6">
              Types of Data Collected:
            </h3>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-4">
              <li>Personal identification information (name, email address, phone number, etc.)</li>
              <li>Device information (browser type, IP address, pages visited, etc.)</li>
              <li>Usage data (how you interact with our website)</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-4">
              Use of Data
            </h2>
            <p className="text-secondary-600 mb-4">
              JT Fence Inc. uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside text-secondary-600 space-y-2">
              <li>To provide and maintain our website</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our website</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so we can improve our website</li>
              <li>To monitor the usage of our website</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-4">
              Security of Data
            </h2>
            <p className="text-secondary-600 mb-4">
              The security of your data is important to us but remember that no method of
              transmission over the Internet or method of electronic storage is 100% secure.
              While we strive to use commercially acceptable means to protect your personal data,
              we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-4">
              Contact Us
            </h2>
            <p className="text-secondary-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc list-inside text-secondary-600 space-y-2">
              <li>By email: info@jtfenceboston.com</li>
              <li>By phone: (781) 420-5858</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
