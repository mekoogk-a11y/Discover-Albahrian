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
    const { text, style, voiceName = 'Fenrir' } = req.body;
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text prompt is required' });
    }

    if (!ai) {
      return res.status(503).json({
        error: 'Gemini API is not configured on server. Falling back to client-side audio.',
        fallback: true,
      });
    }

    const selectedVoice = ['Fenrir', 'Charon', 'Puck'].includes(voiceName)
      ? voiceName
      : 'Fenrir';

    // Call gemini-3.8-flash-lite-tts for speech generation
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `تحدث بنبرة إعلانية حماسية وقوية جداً بالعامية السودانية، بصوت رجل جهوري وإذاعي نقي بدون أي موسيقى: ${text}`,
              speechMetadata: {
                style:
                  style ||
                  'Enthusiastic and authoritative Sudanese Arabic commercial advertising tone, energetic male radio broadcaster voice, upbeat pace without background music',
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: selectedVoice },
          },
        },
      },
    });

    const part = response.candidates?.[0]?.content?.parts?.[0];
    const base64Audio = part?.inlineData?.data;
    const mimeType = part?.inlineData?.mimeType || 'audio/wav';

    if (!base64Audio) {
      return res.status(502).json({
        error: 'No audio returned from speech model',
        fallback: true,
      });
    }

    return res.json({
      audioBase64: base64Audio,
      mimeType: mimeType,
      voice: selectedVoice,
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
