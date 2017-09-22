const DHT = require('bittorrent-dht');

const dht = new DHT();

dht.listen(6881, function () {
  console.log('dht listening on 6881')
});

dht.on('peer', function (peer, infoHash, from) {
  console.log(JSON.stringify({ peer, infoHash, from }));
});

setInterval(function () {
  console.log(JSON.stringify(dht));
}, 60000);
