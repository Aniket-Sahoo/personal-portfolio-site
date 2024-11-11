// api/getClarityProjectId.js
export default function handler(req, res) {
  res.json({ projectId: process.env.CLARITY_PROJECT_ID });
}