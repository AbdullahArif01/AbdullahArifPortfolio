import React from 'react';

const externalLinkClass =
  'text-primary-700 underline decoration-primary-400 underline-offset-2 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-200';

const PrivacyPolicy: React.FC = () => (
  <article className="bg-white px-4 py-16 text-gray-800 dark:bg-gray-900 dark:text-gray-200 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl">
      <header className="mb-12 border-b border-gray-200 pb-8 dark:border-gray-700">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          ExpertGamers
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-xl font-medium text-gray-600 dark:text-gray-300">TinyTopple MR</p>
      </header>

      <div className="space-y-10 leading-7">
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">1. Who We Are</h2>
          <p>
            TinyTopple MR (&quot;the Game&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is an
            immersive Mixed Reality (MR) tabletop physics puzzle experience developed for the Meta
            Horizon platform (Meta Quest headsets). We act as the data controller for the purposes
            of the EU General Data Protection Regulation (GDPR) and other applicable privacy
            regulations with respect to any personal data described in this Policy.
          </p>
          <p className="mt-3">
            Contact for privacy inquiries and data requests:{' '}
            <a className={externalLinkClass} href="mailto:arifa2908@gmail.com">
              arifa2908@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
            2. Scope of This Policy
          </h2>
          <p>
            This Policy explains how data is handled when you play TinyTopple MR on Meta Quest
            devices (including Meta Quest 2, Quest 3, Quest 3S, and Quest Pro). It covers:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>What data the Game itself accesses, processes, or stores.</li>
            <li>
              How Mixed Reality (MR) sensor data, such as Hand Tracking and Spatial Scene Data
              (Passthrough), is handled.
            </li>
            <li>
              How the Game interacts with the Meta Platform SDK for cloud saves, achievements, and
              age category verification.
            </li>
            <li>What platforms (Meta Platforms, Inc.) collect on their own behalf.</li>
          </ul>
          <p className="mt-3">
            This Policy does not govern the independent practices of Meta Platforms, Inc., which
            are governed by the{' '}
            <a
              className={externalLinkClass}
              href="https://www.meta.com/legal/quest/privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              Meta Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
            3. Information the Game Itself Collects
          </h2>
          <p>By design, TinyTopple MR prioritizes player privacy:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>No Separate Accounts:</strong> We do not require registration, login
              credentials, usernames, or passwords.
            </li>
            <li>
              <strong>No Third-Party Analytics or Ads:</strong> We do not embed third-party
              advertising SDKs, tracking pixels, or external analytics frameworks (such as Google
              Analytics, Unity Analytics, or Firebase).
            </li>
            <li>
              <strong>No Social or Voice Data:</strong> The game is a single-player experience with
              no online matchmaking, text chat, or voice communications.
            </li>
            <li>
              <strong>Local Device Storage:</strong> All level progression, stars earned, high
              scores, and audio/comfort settings are saved locally on your headset device.
            </li>
          </ul>
          <p className="mt-3">
            We do not operate external private servers that collect, store, or profile your personal
            data.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
            4. Mixed Reality Sensors: Hand Tracking and Scene Data
          </h2>
          <p>
            Because TinyTopple MR is a Mixed Reality tabletop game, it utilizes device permissions
            strictly for local gameplay mechanics:
          </p>
          <h3 className="mb-2 mt-5 text-lg font-semibold text-gray-900 dark:text-white">
            A. Hand Tracking (com.oculus.permission.HAND_TRACKING)
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>How it works:</strong> The Game uses Meta Quest optical hand tracking to let
              you pinch the slingshot rubber band, aim, and tap the wrist menu with your bare hands.
            </li>
            <li>
              <strong>Data handling:</strong> Hand skeleton and gesture data are processed strictly
              on-device in real-time RAM. This data is never recorded, never stored on disk, and
              never transmitted over the internet to us or any third party.
            </li>
          </ul>
          <h3 className="mb-2 mt-5 text-lg font-semibold text-gray-900 dark:text-white">
            B. Spatial Scene Data and Passthrough (com.oculus.permission.USE_SCENE)
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>How it works:</strong> The Game accesses spatial environment data to detect
              real-world horizontal surfaces (such as your desk, coffee table, or floor) so that the
              virtual floating island can be anchored stably in your room.
            </li>
            <li>
              <strong>Data handling:</strong> Passthrough camera feeds and room geometry are managed
              entirely at the Meta Horizon OS system level. The Game receives surface bounds solely
              to align virtual 3D coordinates. No photos, video streams, camera feeds, or room
              layouts are ever captured, saved, or transmitted.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
            5. Meta Platform SDK: Integrated Services
          </h2>
          <p>
            TinyTopple MR utilizes standard Meta Platform SDK features subject to Meta&apos;s
            Developer Data Use Policy:
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-6">
            <li>
              <strong>Cloud Backup (Cloud Saves):</strong> Your Meta Account ID is linked with your
              game progress (stars, unlocked levels, and settings) so Meta can automatically restore
              your saved game progress if you switch headsets or reinstall the game. This data is
              transmitted directly from your headset to Meta&apos;s secure servers.
            </li>
            <li>
              <strong>Achievements:</strong> Your Meta Account ID, achievement IDs unlocked, and
              unlock timestamps are used to display unlocked achievements on your Meta Horizon
              profile.
            </li>
            <li>
              <strong>Age Category Detection:</strong> A coarse age signal (e.g., child 10-12, teen
              13-17, adult 18+) is provided directly by the Meta Horizon OS to ensure compliance
              with Meta&apos;s Mixed Ages app guidelines and age-appropriate platform restrictions.
              We never receive your exact date of birth or name.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
            6. How to Request Deletion of Your Data
          </h2>
          <p>You have complete control over your data at all times:</p>
          <ul className="mt-3 list-disc space-y-3 pl-6">
            <li>
              <strong>Delete Cloud Save Backups (Self-Service):</strong> Sign in to your Meta
              account on a browser, navigate to the{' '}
              <a
                className={externalLinkClass}
                href="https://secure.oculus.com/my/cloud-backup/"
                target="_blank"
                rel="noreferrer"
              >
                Meta Cloud Backups Page
              </a>
              , locate TinyTopple MR, and click Delete.
            </li>
            <li>
              <strong>Delete Local Headset Data:</strong> Uninstalling the game from your Meta Quest
              headset via the Horizon OS library removes all local save files and cache immediately.
            </li>
            <li>
              <strong>Delete Support Correspondence:</strong> If you have emailed us for customer
              or technical support and wish to have your email address and messages deleted, email
              us at{' '}
              <a className={externalLinkClass} href="mailto:support@tinytopplegame.com">
                support@tinytopplegame.com
              </a>{' '}
              with the subject line &quot;Delete My Data&quot;. We will permanently delete your
              records within 30 days.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
            7. Children&apos;s and Mixed-Audience Privacy (COPPA and GDPR-K)
          </h2>
          <p>TinyTopple MR is designed for players age 13 and older:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>We do not knowingly collect personal contact information from children.</li>
            <li>We do not run behavioral advertising, profiling, or social chat features.</li>
            <li>
              We rely on Meta&apos;s parent-managed accounts and built-in age category signals to
              ensure age-appropriate safety standards.
            </li>
          </ul>
          <p className="mt-3">
            If a parent or guardian believes their child has contacted us directly with personal
            information, please contact us immediately, and we will delete the correspondence
            promptly.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
            8. Legal Basis for Processing (GDPR / UK GDPR)
          </h2>
          <p>Where applicable under European data protection laws:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Direct support correspondence is processed based on your consent (Art. 6(1)(a) GDPR)
              or our legitimate interest in assisting users and troubleshooting technical issues
              (Art. 6(1)(f) GDPR).
            </li>
            <li>
              Cloud saves and achievements are processed by Meta Platforms, Inc. as an independent
              data controller under Meta&apos;s legal frameworks.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
            9. California Privacy Rights (CCPA / CPRA)
          </h2>
          <p>If you are a California resident:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>No Sale or Sharing:</strong> We do not sell your personal information, nor do
              we share it for cross-context behavioral advertising.
            </li>
            <li>
              <strong>No Sensitive Personal Information:</strong> We do not collect or store precise
              geolocation, biometric identification templates, or government IDs.
            </li>
            <li>
              <strong>Your Rights:</strong> You have the right to request access to or deletion of
              any support data we hold. Contact us at{' '}
              <a className={externalLinkClass} href="mailto:arifa2908@gmail.com">
                arifa2908@gmail.com
              </a>{' '}
              without fear of discrimination.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">10. Contact Us</h2>
          <p>
            If you have any questions, feedback, or data privacy requests regarding TinyTopple MR,
            please reach out to us:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>App Title:</strong> TinyTopple MR
            </li>
            <li>
              <strong>Developer / Studio:</strong> ExpertGamers
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a className={externalLinkClass} href="mailto:arifa2908@gmail.com">
                arifa2908@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </article>
);

export default PrivacyPolicy;
