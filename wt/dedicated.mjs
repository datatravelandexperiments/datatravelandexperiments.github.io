
onmessage = function (event) {
  import("./v0.mjs").then((vendor) => {
    console.log('DEDICATED onmessage:', event.data);
    postMessage('DEDICATED replies "' + vendor.name + '" to: ' + event.data);
  });
};
