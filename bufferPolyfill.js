// bufferPolyfill.js

(function() {
  if (typeof window.Buffer === 'undefined') {
    window.Buffer = {};
    console.log("Buffer not found. Creating window.Buffer object.");
  }

  if (typeof window.Buffer.from !== 'function') {
    window.Buffer.from = function(input, encoding) {
      // 僅支援 utf8 編碼
      if (typeof input === "string") {
        if (encoding && encoding.toLowerCase() !== "utf8") {
          console.error("Buffer.from polyfill: Only 'utf8' encoding is supported. Received encoding:", encoding);
          throw new Error("Buffer.from: Only 'utf8' encoding is supported in this polyfill.");
        }
        var utf8 = unescape(encodeURIComponent(input));
        var arr = new Uint8Array(utf8.length);
        for (var i = 0; i < utf8.length; i++) {
          arr[i] = utf8.charCodeAt(i);
        }
        return arr;
      } else if (Array.isArray(input)) {
        return new Uint8Array(input);
      } else {
        console.error("Buffer.from polyfill: Unsupported input type.", input);
        throw new Error("Buffer.from: Unsupported input type.");
      }
    };
    console.log("Buffer.from polyfill defined.");
  } else {
    console.log("Buffer.from already defined.");
  }
})();
