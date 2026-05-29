// Chat API endpoint
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST requests
    const { message } = req.body;
    
    // Add your chat logic here
    res.status(200).json({
      success: true,
      message: 'Message received',
      data: message
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
