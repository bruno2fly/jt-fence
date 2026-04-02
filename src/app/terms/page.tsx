import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container section-padding">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold font-heading text-primary-900 mb-8">
            Terms of Service
          </h1>

          <p className="text-secondary-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-secondary-600 mb-4">
              By accessing and using the jtfenceboston.com website and any related services, you
              accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-4">
              Use License
            </h2>
            <p className="text-secondary-600 mb-4">
              Permission is granted to temporarily download one copy of the materials (information
              or software) on JT Fence Inc. website for personal, non-commercial transitory
              viewing only. This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul className="list-disc list-inside text-secondary-600 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-4">
              Disclaimer
            </h2>
            <p className="text-secondary-600 mb-4">
              The materials on JT Fence Inc. website are provided on an 'as is' basis. JT Fence
              Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all
              other warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-4">
              Limitations
            </h2>
            <p className="text-secondary-600 mb-4">
              In no event shall JT Fence Inc. or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due to
              business interruption) arising out of the use or inability to use the materials on
              JT Fence Inc. website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-4">
              Accuracy of Materials
            </h2>
            <p className="text-secondary-600 mb-4">
              The materials appearing on JT Fence Inc. website could include technical,
              typographical, or photographic errors. JT Fence Inc. does not warrant that any of
              the materials on the website are accurate, complete, or current.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold font-heading text-primary-900 mb-4">
              Contact Us
            </h2>
            <p className="text-secondary-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
