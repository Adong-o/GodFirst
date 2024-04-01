import express from 'express';
import { json } from 'body-parser';
import mailchimp from 'mailchimp-api-v3';
import dotenv from 'dotenv';

dotenv.config({ path: './backend.env' }); 

const app = express();
const PORT = process.env.PORT || 3000;

const mc = new mailchimp(process.env.MAILCHIMP_API_KEY);

app.use(json());

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const response = await mc.post(`/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
      email_address: email,
      status: 'subscribed' 
    });

    console.log('Mailchimp API response:', response);

    res.status(200).json({ success: true, message: 'Subscription successful' });
  } catch (error) {
    console.error('Mailchimp API error:', error);
    res.status(500).json({ success: false, message: 'Subscription failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
