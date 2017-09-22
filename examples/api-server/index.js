require('dotenv').config();

const hyperdb = require('hyperdb');
const ram = require('random-access-memory')

const storage = function (filename) {
    return ram()
}

const log = (object) => {
   console.log(JSON.stringify(object))
}

const base64ToBuffer = (string) => {
    return new Buffer(string, 'base64')
}

const options = {
    createIfMissing: true, // create a new hypercore key pair if none was present in storage
    overwrite: false, // overwrite any old hypercore that might already exist
    valueEncoding: 'utf-8',
    sparse: false, // do not mark the entire feed to be downloaded
    secretKey: base64ToBuffer(process.env.HYPERDB_SECRET_KEY), // optionally pass the corresponding secret key yourself
    storeSecretKey: true // if false, will not save the secret key
}


const db = hyperdb(storage, base64ToBuffer(process.env.HYPERDB_KEY), options)

db.on('ready', function () {
    const {
        key,
        discoveryKey,
    } = db;

    const secretKey = db.local.secretKey
    log({
        key: key.toString('base64'),
        discoveryKey: discoveryKey.toString('base64'),
        secretKey: secretKey.toString('base64')
    })
})
