# GlassBreaker - Activism Meets The Blockchain

A very much WIP effort to create an extensible open-source platform for anonymous sharing of information and whistleblower activities. 

So far, this is a skeletal, but reasonably well written hybrid mobile app written in Ionic 3 / Angular 5, with Cordova (for now) and a 100% serverless architecture: the DB is Firestore (the new beta release from Firebase) and we talk to it directly from the client app code. 

Blockchain integration is in progress, but everything else is ready: documents uploaded to the system are hashed, hashes are stored in an associated audit trail database, and (TO DO), will be written to the public BTC blockchain with a link back to the original document. That plus a simple system to compare the Md5 hashes in the DB and on the Blockchain will allow for foolproof authentication of documents.

Please forgive any boilerplate code hanging around from the Ionic Super Starter template - it was kinda overkill :P 