const admin = require("firebase-admin"),
    serviceAccount = require("./firebase-admin.json");

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const messaging = admin.messaging()

const sendFCM = async message => {
    const res = await messaging.send(message);
    console.log(res);
};

module.exports = { firebaseAdmin: admin, sendFCM };