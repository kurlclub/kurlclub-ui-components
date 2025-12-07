export default {
  title: 'Introduction',
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  },
};

const IntroductionPage = () => (
  <div
    style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #11141c 0%, #1c1f24 100%)',
    }}
  >
    {/* Hero Section */}
    <div
      style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        background:
          'linear-gradient(180deg, rgba(211, 247, 2, 0.1) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(211, 247, 2, 0.2)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '0.375rem 0.875rem',
            background: 'rgba(211, 247, 2, 0.1)',
            border: '1px solid rgba(211, 247, 2, 0.3)',
            borderRadius: '2rem',
            marginBottom: '1.25rem',
            fontSize: '0.75rem',
            color: '#d3f702',
            fontWeight: '600',
          }}
        >
          🔒 INTERNAL USE ONLY - KURLCLUB DEV TEAM
        </div>

        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: '#fff',
            lineHeight: '1.2',
          }}
        >
          KurlClub
          <br />
          <span
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              color: '#d3f702',
              fontWeight: '700',
            }}
          >
            Design System
          </span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
            color: '#b5b6b9',
            marginBottom: '2rem',
            lineHeight: '1.6',
          }}
        >
          Your toolkit for building consistent, accessible, and beautiful
          KurlClub applications.
          <br />
          <span style={{ color: '#6f7176', fontSize: '0.875rem' }}>
            TypeScript • Tailwind CSS • Radix UI • React 19
          </span>
        </p>

        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://github.com/kurlclub/kurlclub-ui-components"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View KurlClub UI Components repository on GitHub"
            style={{
              padding: '0.75rem 1.5rem',
              background: '#d3f702',
              color: '#11141c',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9375rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 20px rgba(211, 247, 2, 0.3)',
            }}
          >
            <span>📦</span> View Repository
          </a>
          <a
            href="?path=/docs/composed-button--docs"
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid #d3f702',
              color: '#d3f702',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.9375rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(211, 247, 2, 0.05)',
            }}
          >
            <span>🚀</span> Browse Components
          </a>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div
      style={{
        padding: 'clamp(2rem, 5vw, 3.5rem) 1rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Getting Started Section */}
      <div style={{ marginBottom: '4rem' }}>
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            padding: '0 1rem',
          }}
        >
          <h2
            style={{
              fontSize: '1.875rem',
              fontWeight: '800',
              marginBottom: '0.75rem',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            Getting Started
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: '#9c9da1',
              textAlign: 'center',
              lineHeight: '1.6',
            }}
          >
            Follow these steps to integrate the KurlClub Design System into your
            application
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.25rem',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {[
            {
              step: '01',
              title: 'Installation',
              desc: 'Install the package via npm or yarn',
              code: 'npm install @kurlclub/ui-components',
            },
            {
              step: '02',
              title: 'Import Styles',
              desc: 'Add the stylesheet to your application entry point',
              code: "import '@kurlclub/ui-components/style.css';",
            },
            {
              step: '03',
              title: 'Configure Tailwind',
              desc: 'Extend your Tailwind configuration with our theme',
              code: `import { theme, themePlugin } from '@kurlclub/ui-components';

export default {
  theme: { extend: { ...theme } },
  plugins: [themePlugin],
};`,
            },
            {
              step: '04',
              title: 'Start Using Components',
              desc: 'Import and use components in your application',
              code: `import { Button } from '@kurlclub/ui-components';

<Button variant="default">Get Started</Button>`,
            },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                background: '#1c1f24',
                border: '1px solid #282b32',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: 'rgba(211, 247, 2, 0.08)',
                  lineHeight: '1',
                }}
              >
                {item.step}
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3
                  style={{
                    color: '#d3f702',
                    fontSize: '1.0625rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                  }}
                >
                  <span
                    style={{
                      width: '1.75rem',
                      height: '1.75rem',
                      background: 'rgba(211, 247, 2, 0.1)',
                      border: '1.5px solid #d3f702',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                    }}
                  >
                    {item.step}
                  </span>
                  {item.title}
                </h3>
                <p
                  style={{
                    color: '#9c9da1',
                    marginBottom: '1rem',
                    fontSize: '0.875rem',
                  }}
                >
                  {item.desc}
                </p>
                <pre
                  style={{
                    background: '#11141c',
                    padding: '1rem',
                    borderRadius: '0.375rem',
                    overflow: 'auto',
                    border: '1px solid #282b32',
                    margin: 0,
                  }}
                >
                  <code
                    style={{
                      color: '#e0e0e0',
                      fontSize: '0.8125rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {item.code}
                  </code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Principles */}
      <div style={{ marginBottom: '4rem' }}>
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto 2rem',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '1.875rem',
              fontWeight: '800',
              marginBottom: '0.5rem',
              color: '#fff',
            }}
          >
            Core Principles
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#9c9da1' }}>
            Built with enterprise-grade standards and developer experience in
            mind
          </p>
        </div>

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: '2rem 3rem',
          }}
        >
          {[
            {
              icon: '🎯',
              title: 'Consistency',
              desc: 'Unified design language across all KurlClub applications ensuring brand coherence and user familiarity.',
            },
            {
              icon: '♿',
              title: 'Accessibility',
              desc: 'WCAG 2.1 AA compliant components with full keyboard navigation and screen reader support.',
            },
            {
              icon: '⚡',
              title: 'Performance',
              desc: 'Optimized bundle sizes, tree-shaking support, and minimal runtime overhead for fast applications.',
            },
            {
              icon: '🔧',
              title: 'Developer Experience',
              desc: 'Full TypeScript support, comprehensive documentation, and intuitive API design.',
            },
            {
              icon: '🎨',
              title: 'Themeable',
              desc: 'Flexible theming system built on Tailwind CSS with custom design tokens and variants.',
            },
            {
              icon: '📦',
              title: 'Modular',
              desc: 'Import only what you need with tree-shakeable exports and minimal dependencies.',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  flexShrink: 0,
                  width: '3rem',
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(211, 247, 2, 0.1)',
                  borderRadius: '0.5rem',
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3
                  style={{
                    color: '#fff',
                    fontSize: '1.0625rem',
                    fontWeight: '700',
                    marginBottom: '0.375rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: '#9c9da1',
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div style={{ marginBottom: '3rem' }}>
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto 2rem',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '1.875rem',
              fontWeight: '800',
              marginBottom: '0.5rem',
              color: '#fff',
            }}
          >
            Technology Stack
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#9c9da1' }}>
            Modern, battle-tested technologies
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 140px), 1fr)),',
            gap: '1rem',
          }}
        >
          {[
            { label: 'React', value: '19.x' },
            { label: 'TypeScript', value: '5.9.x' },
            { label: 'Tailwind', value: '4.x' },
            { label: 'Radix UI', value: 'Latest' },
            { label: 'Storybook', value: '10.x' },
            { label: 'Version', value: 'v1.0.3' },
          ].map((tech) => (
            <div
              key={tech.label}
              style={{
                background: '#1c1f24',
                border: '1px solid #282b32',
                borderRadius: '0.5rem',
                padding: '1.25rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  color: '#d3f702',
                  marginBottom: '0.25rem',
                }}
              >
                {tech.value}
              </div>
              <div
                style={{
                  fontSize: '0.8125rem',
                  color: '#9c9da1',
                  fontWeight: '600',
                }}
              >
                {tech.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Footer */}
    <div
      style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        borderTop: '1px solid rgba(211, 247, 2, 0.1)',
        background: 'rgba(17, 20, 28, 0.5)',
      }}
    >
      <p style={{ color: '#6f7176', marginBottom: '1rem' }}>
        Made with ❤️ by KurlClub Development Team
      </p>
      <p style={{ color: '#53555b', fontSize: '0.875rem' }}>
        Internal use only • Not for public distribution
      </p>
    </div>
  </div>
);

export const Welcome = {
  render: () => <IntroductionPage />,
  parameters: {
    docs: {
      page: () => <IntroductionPage />,
    },
  },
};
