onconnect = function (event) {
  console.log('SHARED onconnect');
  var port = event.ports[0];
  port.onmessage = function (event) {
    console.log('SHARED onmessage', event.data);
    port.postMessage('SHARED reply to: ' + event.data);
  };
  port.postMessage('SHARED connected');
};
