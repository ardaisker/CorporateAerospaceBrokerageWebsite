export function RobotsTxt() {
  const robotsContent = `# Güler Aero Solutions - Robots.txt
# https://guleraero.com

User-agent: *
Allow: /

# Sitemap Location
Sitemap: https://guleraero.com/sitemap

# Disallow admin/test pages (if any)
Disallow: /admin/
Disallow: /_test/`;

  return (
    <pre style={{
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      padding: '20px',
      margin: 0,
      fontSize: '14px',
      lineHeight: '1.5',
      backgroundColor: '#f5f5f5'
    }}>
      {robotsContent}
    </pre>
  );
}
