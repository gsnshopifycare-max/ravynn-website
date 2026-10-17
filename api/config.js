export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(204).end();
  res.json({
    cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
    cloudinary_upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET || '',
  });
}
