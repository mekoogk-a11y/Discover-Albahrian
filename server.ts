import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

// Server-side Gemini initialization adhering to gemini-api skill instructions
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// POST /api/tts - Generates enthusiastic Sudanese male advertising voice
app.post('/api/tts', async (req, res) => {
  try {
    const { text, style } = req.body;
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text prompt is required' });
    }

    if (!ai) {
      return res.status(503).json({
        error: 'Gemini API is not configured on server. Falling back to client-side audio.',
        fallback: true,
      });
    }

    // Call gemini-3.8-flash-lite-tts for speech generation
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: text,
              speechMetadata: {
                style:
                  style ||
                  'Enthusiastic authoritative male voice, warm Sudanese Arabic commercial advertising tone, energetic cadence without background music',
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            // 'Puck' or 'Charon' or 'Fenrir' for deep authoritative male tone
            prebuiltVoiceConfig: { voiceName: 'Charon' },
          },
        },
      },
    });

    const base64Audio =
      response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!base64Audio) {
      return res.status(502).json({
        error: 'No audio returned from speech model',
        fallback: true,
      });
    }

    return res.json({
      audioBase64: base64Audio,
      mimeType: 'audio/pcm;rate=24000',
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return res.status(500).json({
      error: errorMessage,
      fallback: true,
    });
  }
});

// Mount Vite middleware for dev mode or serve static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening at http://0.0.0.0:${port}`);
  });
}

startServer();
