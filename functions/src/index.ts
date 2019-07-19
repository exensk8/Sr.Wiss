'use strict';

import {dialogflow} from 'actions-on-google';
import * as functions from 'firebase-functions'; 

const app = dialogflow({
  clientId: '846204642491-8korod83jr64fvo95jma21001tavc9tj.apps.googleusercontent.com',
  debug: true,
});

app.intent('start Task', (conv: any) => {
  // Do things
  console.log('conv',conv);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import {WebhookClient} from 'dialogflow-fulfillment';

// process.env.DEBUG = 'dialogflow:*'; // enables lib debugging statements
// admin.initializeApp(functions.config().firebase);
// // const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// const startTask = (agent:any) => {
//     let conv = agent.conv();
//     console.log('conv',conv.user.profile);
//     console.log('admin.auth();',admin.auth());

//   console.log('agent',agent);
//   console.log('agent.parameters',agent.parameters);
// }

// export const dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
//   console.log('Inside Main function.....yessssssss');
//   console.log('Request Headers: ' + JSON.stringify(request.headers));
//   console.log('Request Body: ' + JSON.stringify(request.body));

// const agent = new WebhookClient({ request, response });
// //  response.send("Hello from Firebase!");
//  console.log('hello');

//  const intentMap = new Map();
//  intentMap.set('start Task', startTask);
//  agent.handleRequest(intentMap).then().catch();

// });

