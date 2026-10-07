// Add repo URLs for BlockVerify and the QR platform in `github` when they are public.
export const projects = [
  {
    slug: 'blockverify', title: 'BlockVerify', subtitle: 'Blockchain File Integrity Monitoring System', year: '2025',
    summary: "Each file's SHA-256 hash is stored as a block linked to the one before it, so any tampering breaks the chain and is detected immediately.",
    tech: ['Python', 'Flask', 'React.js', 'Vite', 'Tailwind CSS', 'SQLite', 'SHA-256', 'GPG'],
    features: ['SHA-256 hash chaining with tamper detection', 'Risk Engine with three validation paths: Auto-Mine, Mining Arena, Reject', 'Chain-link verification on every request', 'React audit dashboard for upload, chain inspection and security events', 'GPG signature issuance and verification for tamper-evident audit logs', '80+ adversarial tests: hash collisions, mid-chain block replacement, signature stripping'],
    approach: ['Designed a file integrity protocol where each file hash is a block linked to its predecessor.', 'Built a Flask backend whose Risk Engine routes each file through Auto-Mine, Mining Arena or Reject, and verifies chain links on every request.', 'Added GPG signing so audit logs are tamper-evident.'],
    flow: ['React dashboard', 'Flask API', 'Risk Engine', 'SHA-256 chain (SQLite)', 'GPG-signed audit log'],
    outcome: ['End-to-end verification latency measured under 100 ms.', 'All 80+ adversarial test cases were detected.'],
    github: null, demo: null,
  },
  {
    slug: 'qr-platform', title: 'QR Code Customization Platform', subtitle: 'Built during the REVA NEST internship', year: 'Oct 2024 – Feb 2025',
    summary: 'A configurable QR generation engine with custom styling, JWT-secured REST API and per-scan analytics. It is the platform behind my REVA NEST internship.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'JWT', 'Canvas API'],
    features: ['Custom colors and shapes', 'Logo embedding and sticker overlays', 'Canvas API rendering with high-resolution PNG export', 'Stateless JWT authentication', 'RESTful API in Express.js', 'Scan analytics: device type, fingerprint and geolocation per scan event in MongoDB'],
    approach: ['Built the QR engine on the Canvas API and exported high-resolution PNGs.', 'Implemented stateless JWT authentication and a RESTful API layer in Express.js.', 'Designed the MongoDB schema for scan analytics.'],
    flow: ['React client', 'Express REST API (JWT)', 'MongoDB scan analytics'],
    outcome: ['Used by 50+ beta users through the REVA NEST pre-incubation program.', 'Perceived load time reduced by ~30% via Canvas pipeline optimization, lazy loading and code splitting.'],
    github: null, demo: null,
  },
  {
    slug: 'fake-news-detection', title: 'Fake News Detection', subtitle: 'Classical ML text classification with OCR input', year: '2026', team: true,
    summary: 'Classifies news text as REAL or FAKE with a probability score, using a scikit-learn pipeline behind a FastAPI backend.',
    tech: ['React', 'Vite', 'FastAPI', 'Python', 'scikit-learn', 'TF-IDF', 'Logistic Regression', 'Joblib', 'Tesseract.js', 'pytesseract', 'Pillow', 'Docker'],
    features: ['REAL / FAKE classification with probability score', 'Regex cleaning, TF-IDF unigrams and Logistic Regression, serialized with Joblib', '0.40 REAL-probability threshold read from a model metadata JSON file', 'Browser OCR with Tesseract.js; backend pytesseract + Pillow endpoint with image-type and 20-character minimum-text validation', 'Request timeouts, error messages with manual retry', 'Last 5 predictions kept in browser localStorage, plus REAL/FAKE feedback', 'Dockerfile (Python 3.11 + Tesseract), Render config with health check, Vercel config for the frontend'],
    approach: ['A React + Vite frontend talks to a FastAPI REST backend for prediction, health checks and feedback.', 'The API loads the serialized model at startup.', 'Image input is converted to text by Tesseract.js in the browser and sent to /api/predict.'],
    flow: ['React + Vite (Vercel)', 'Tesseract.js OCR', 'FastAPI /api/predict (Render, Docker)', 'TF-IDF + Logistic Regression (Joblib)'],
    outcome: [],
    github: 'https://github.com/abhiprabha03/fake-news-detection.git', demo: 'https://fake-news-detection-psi-three.vercel.app/home',
  },
]
