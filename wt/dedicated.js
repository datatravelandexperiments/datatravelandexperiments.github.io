onmessage = function (event) {
  console.log('DEDICATED onmessage:', event.data);
  postMessage('DEDICATED reply to: ' + event.data);
};
