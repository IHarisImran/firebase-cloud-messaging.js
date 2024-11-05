const { sendFCM } = require("./firebase-admin");

const sendMessage = async () => {
  const token = ""; // This token generates from frontend.

  try {
    await sendFCM({
      notification: {
        title: 'New Notification',
        body: 'Hello, this is a test notification!',
        imageUrl: 'https://placehold.co/100'
      },
      token
    });
  } catch (err) { console.error('Error sending message:', err) };
};

sendMessage()
