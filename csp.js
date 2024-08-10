const policies = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://maps.googleapis.com'],
  'child-src': ["'self'"],
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    'https://fonts.googleapis.com',
    'https://use.typekit.net',
    'https://p.typekit.net',
    'https://www.api.mapy.cz',
    'https://raw.githubusercontent.com',
  ],
  'img-src': ["'self'", 'https://raw.githubusercontent.com', 'https://api.mapy.cz', 'data:'],
  'font-src': ["'self'", "'unsafe-inline'", 'https://use.typekit.net'],
  'frame-src': ["'self'"],
  'connect-src': ["'self'", 'https://maps.googleapis.com'],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')
