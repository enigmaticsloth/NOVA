/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./trade.js":
/*!******************!*\
  !*** ./trade.js ***!
  \******************/
/***/ (() => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // =====================\n  // DOM 元素取得\n  // =====================\n  var connectWalletBtn = document.getElementById(\"connectWalletBtn\");\n  var walletStatus = document.getElementById(\"walletStatus\");\n  var solInput = document.getElementById(\"solInput\");\n  var novaInput = document.getElementById(\"novaInput\");\n  var swapBtn = document.getElementById(\"swapBtn\");\n  var tradeStatus = document.getElementById(\"tradeStatus\");\n  var swapInputsBtn = document.getElementById(\"swapInputsBtn\");\n  console.log(\"DOM fully loaded. Checking elements:\");\n  console.log(\"connectWalletBtn:\", connectWalletBtn);\n  console.log(\"walletStatus:\", walletStatus);\n\n  // =====================\n  // 全域變數與常數設定\n  // =====================\n  var walletPublicKey = null;\n  var programId = new PublicKey(\"HEAz4vAABHTYdY23JuYD3VTHKSBRXSdyt7Dq8YVGDUWm\");\n  var globalStatePubkey = new PublicKey(\"HLSLMK51mUc375t69T93quNqpLqLdySZKvodjyeuNdp\");\n  var mintPubkey = new PublicKey(\"5vjrnc823W14QUvomk96N2yyJYyG92Ccojyku64vofJX\");\n  var mintAuthorityPubkey = new PublicKey(\"AfqG9eh244LzXTEBo4UDepa2pKKTopvZHWmX4sFadch7\");\n  var novaTreasuryPubkey = new PublicKey(\"4fuD8ELTbhRBcnG61WnSVe9TCdkVAhJLKteYz51yMnKH\");\n  var liquidityPoolPdaPubkey = new PublicKey(\"C7sSvpgZvRPVqLqfLSeDb3ErHWhMQYM3fvbRgSWBwVkF\");\n  var developerRewardPoolPubkey = new PublicKey(\"9WHRVWCiWeCC8Lhb4ohk3e2wdoZpALh6xNcnteP6E75o\");\n  var feeRecipientPubkey = new PublicKey(\"7MaisRjGojZVb9gS6B1UZqBtFqajAArTkwnXhp3Syubk\");\n  var PROGRAM_NAME = \"nova\";\n  var BUY_METHOD_NAME = \"buy\";\n  var BUY_METHOD_DISCM;\n\n  // =====================\n  // 定義 Borsh 序列化結構與 schema\n  // =====================\n  var BuyInstruction = /*#__PURE__*/_createClass(function BuyInstruction(fields) {\n    _classCallCheck(this, BuyInstruction);\n    this.solAmount = fields.solAmount;\n    this.currentNovaPrice = fields.currentNovaPrice;\n  });\n  var BuyInstructionSchema = new Map([[BuyInstruction, {\n    kind: 'struct',\n    fields: [['solAmount', 'u64'], ['currentNovaPrice', 'u64']]\n  }]]);\n  function serializeBuyData(solAmount, currentNovaPrice) {\n    var instructionData = new BuyInstruction({\n      solAmount: solAmount,\n      currentNovaPrice: currentNovaPrice\n    });\n    return borsh.serialize(BuyInstructionSchema, instructionData);\n  }\n\n  // =====================\n  // 動態計算 Discriminator\n  // =====================\n  function getDiscriminator(_x, _x2) {\n    return _getDiscriminator.apply(this, arguments);\n  }\n  function _getDiscriminator() {\n    _getDiscriminator = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(programName, instructionName) {\n      var message, encoder, data, hashBuffer, hashArray, discriminator;\n      return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n        while (1) switch (_context2.prev = _context2.next) {\n          case 0:\n            message = \"\".concat(programName, \":\").concat(instructionName);\n            encoder = new TextEncoder();\n            data = encoder.encode(message);\n            _context2.next = 5;\n            return crypto.subtle.digest('SHA-256', data);\n          case 5:\n            hashBuffer = _context2.sent;\n            hashArray = Array.from(new Uint8Array(hashBuffer));\n            discriminator = hashArray.slice(0, 8);\n            return _context2.abrupt(\"return\", new Uint8Array(discriminator));\n          case 9:\n          case \"end\":\n            return _context2.stop();\n        }\n      }, _callee2);\n    }));\n    return _getDiscriminator.apply(this, arguments);\n  }\n  function initializeDiscriminator() {\n    return _initializeDiscriminator.apply(this, arguments);\n  } // =====================\n  // 封裝編碼函式\n  // =====================\n  function _initializeDiscriminator() {\n    _initializeDiscriminator = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {\n      return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n        while (1) switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return getDiscriminator(PROGRAM_NAME, BUY_METHOD_NAME);\n          case 2:\n            BUY_METHOD_DISCM = _context3.sent;\n            console.log(\"Buy Instruction Discriminator:\", BUY_METHOD_DISCM);\n            // 期望輸出: Uint8Array(8) [28, 43, 80, 163, 53, 73, 88, 8]\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }, _callee3);\n    }));\n    return _initializeDiscriminator.apply(this, arguments);\n  }\n  function encodeBuyDataWithBorsh(solAmount, currentNovaPrice) {\n    if (!BUY_METHOD_DISCM) {\n      throw new Error(\"BUY_METHOD_DISCM is not initialized.\");\n    }\n    console.log(\"Using BUY_METHOD_DISCM:\", BUY_METHOD_DISCM);\n    var serializedData = serializeBuyData(solAmount, currentNovaPrice);\n    console.log(\"Serialized buy data (length =\", serializedData.length, \"):\", serializedData);\n    var data = new Uint8Array(BUY_METHOD_DISCM.length + serializedData.length);\n    data.set(BUY_METHOD_DISCM, 0);\n    data.set(serializedData, BUY_METHOD_DISCM.length);\n    console.log(\"Final encoded data (first 8 bytes):\", data.slice(0, 8));\n    return data;\n  }\n\n  // =====================\n  // 連接錢包函式\n  // =====================\n  function connectWallet() {\n    return _connectWallet.apply(this, arguments);\n  } // =====================\n  // 檢查或建立 ATA\n  // =====================\n  function _connectWallet() {\n    _connectWallet = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {\n      var resp;\n      return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n        while (1) switch (_context4.prev = _context4.next) {\n          case 0:\n            if (!(window.solana && window.solana.isPhantom)) {\n              _context4.next = 16;\n              break;\n            }\n            _context4.prev = 1;\n            _context4.next = 4;\n            return window.solana.connect();\n          case 4:\n            resp = _context4.sent;\n            walletPublicKey = resp.publicKey.toString();\n            walletStatus.innerText = \"Wallet Connected: \".concat(walletPublicKey);\n            console.log(\"Wallet connected:\", walletPublicKey);\n            _context4.next = 14;\n            break;\n          case 10:\n            _context4.prev = 10;\n            _context4.t0 = _context4[\"catch\"](1);\n            walletStatus.innerText = \"Connection Failed: \".concat(_context4.t0.message);\n            console.error(\"Connection failed:\", _context4.t0);\n          case 14:\n            _context4.next = 17;\n            break;\n          case 16:\n            walletStatus.innerText = \"Phantom wallet not found. Please install Phantom extension.\";\n          case 17:\n          case \"end\":\n            return _context4.stop();\n        }\n      }, _callee4, null, [[1, 10]]);\n    }));\n    return _connectWallet.apply(this, arguments);\n  }\n  function prepareBuyerAtaIfNeeded(_x3, _x4, _x5, _x6) {\n    return _prepareBuyerAtaIfNeeded.apply(this, arguments);\n  } // =====================\n  // 取得最新 blockhash (重試機制)\n  // =====================\n  function _prepareBuyerAtaIfNeeded() {\n    _prepareBuyerAtaIfNeeded = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(connection, userPubkey, mintPk, transaction) {\n      var ataPubkey, ataInfo, createIx;\n      return _regeneratorRuntime().wrap(function _callee5$(_context5) {\n        while (1) switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.prev = 0;\n            _context5.next = 3;\n            return getAssociatedTokenAddress(mintPk, userPubkey, false, TOKEN_PROGRAM_ID);\n          case 3:\n            ataPubkey = _context5.sent;\n            console.log(\"Derived ATA pubkey:\", ataPubkey.toBase58());\n            _context5.next = 7;\n            return connection.getAccountInfo(ataPubkey);\n          case 7:\n            ataInfo = _context5.sent;\n            if (!ataInfo) {\n              console.log(\"ATA not found. Creating ATA...\");\n              createIx = createAssociatedTokenAccountInstruction(userPubkey, ataPubkey, userPubkey, mintPk);\n              transaction.add(createIx);\n              console.log(\"Added ATA creation instruction.\");\n            } else {\n              console.log(\"ATA exists.\");\n            }\n            return _context5.abrupt(\"return\", ataPubkey);\n          case 12:\n            _context5.prev = 12;\n            _context5.t0 = _context5[\"catch\"](0);\n            console.error(\"Error preparing ATA:\", _context5.t0);\n            throw _context5.t0;\n          case 16:\n          case \"end\":\n            return _context5.stop();\n        }\n      }, _callee5, null, [[0, 12]]);\n    }));\n    return _prepareBuyerAtaIfNeeded.apply(this, arguments);\n  }\n  function getRecentBlockhashWithRetry(_x7) {\n    return _getRecentBlockhashWithRetry.apply(this, arguments);\n  } // =====================\n  // SwapNOVA 函式\n  // =====================\n  function _getRecentBlockhashWithRetry() {\n    _getRecentBlockhashWithRetry = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(connection) {\n      var retries,\n        i,\n        _yield$connection$get,\n        blockhash,\n        _args6 = arguments;\n      return _regeneratorRuntime().wrap(function _callee6$(_context6) {\n        while (1) switch (_context6.prev = _context6.next) {\n          case 0:\n            retries = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 3;\n            i = 0;\n          case 2:\n            if (!(i < retries)) {\n              _context6.next = 21;\n              break;\n            }\n            _context6.prev = 3;\n            _context6.next = 6;\n            return connection.getLatestBlockhash();\n          case 6:\n            _yield$connection$get = _context6.sent;\n            blockhash = _yield$connection$get.blockhash;\n            return _context6.abrupt(\"return\", blockhash);\n          case 11:\n            _context6.prev = 11;\n            _context6.t0 = _context6[\"catch\"](3);\n            console.warn(\"Attempt \".concat(i + 1, \" failed: \").concat(_context6.t0.message));\n            if (!(i === retries - 1)) {\n              _context6.next = 16;\n              break;\n            }\n            throw _context6.t0;\n          case 16:\n            _context6.next = 18;\n            return new Promise(function (resolve) {\n              return setTimeout(resolve, 1000);\n            });\n          case 18:\n            i++;\n            _context6.next = 2;\n            break;\n          case 21:\n          case \"end\":\n            return _context6.stop();\n        }\n      }, _callee6, null, [[3, 11]]);\n    }));\n    return _getRecentBlockhashWithRetry.apply(this, arguments);\n  }\n  function swapNOVA() {\n    return _swapNOVA.apply(this, arguments);\n  } // =====================\n  // 綁定按鈕事件\n  // =====================\n  function _swapNOVA() {\n    _swapNOVA = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {\n      var _connection, fromPubkey, solValue, lamports, approximateNovaPrice, transaction, buyerAta, data, buyAccounts, buyIx, signedTx, rawTx, signature, confirmation, parsedTx, _parsedTx;\n      return _regeneratorRuntime().wrap(function _callee7$(_context7) {\n        while (1) switch (_context7.prev = _context7.next) {\n          case 0:\n            console.log(\"swapNOVA function triggered!\");\n            if (walletPublicKey) {\n              _context7.next = 4;\n              break;\n            }\n            tradeStatus.innerText = \"Please connect your wallet first.\";\n            return _context7.abrupt(\"return\");\n          case 4:\n            _context7.prev = 4;\n            _connection = new Connection(\"https://nova-enigmaticsloths-projects.vercel.app/api/rpc-proxy\", \"confirmed\");\n            fromPubkey = new PublicKey(walletPublicKey);\n            console.log(\"Connected to Solana via proxy.\");\n            solValue = parseFloat(solInput.value);\n            if (!(isNaN(solValue) || solValue <= 0)) {\n              _context7.next = 12;\n              break;\n            }\n            tradeStatus.innerText = \"Please enter a valid SOL amount.\";\n            return _context7.abrupt(\"return\");\n          case 12:\n            lamports = Math.round(solValue * 1e9);\n            approximateNovaPrice = 1000000;\n            transaction = new Transaction();\n            console.log(\"Preparing ATA if needed...\");\n            _context7.next = 18;\n            return prepareBuyerAtaIfNeeded(_connection, fromPubkey, mintPubkey, transaction);\n          case 18:\n            buyerAta = _context7.sent;\n            console.log(\"Buyer ATA:\", buyerAta.toBase58());\n            data = encodeBuyDataWithBorsh(lamports, approximateNovaPrice);\n            console.log(\"Encoded buy data:\", data);\n            buyAccounts = [{\n              pubkey: fromPubkey,\n              isSigner: true,\n              isWritable: true\n            }, {\n              pubkey: globalStatePubkey,\n              isSigner: false,\n              isWritable: true\n            }, {\n              pubkey: buyerAta,\n              isSigner: false,\n              isWritable: true\n            }, {\n              pubkey: novaTreasuryPubkey,\n              isSigner: false,\n              isWritable: true\n            }, {\n              pubkey: mintAuthorityPubkey,\n              isSigner: false,\n              isWritable: false\n            }, {\n              pubkey: mintPubkey,\n              isSigner: false,\n              isWritable: true\n            }, {\n              pubkey: liquidityPoolPdaPubkey,\n              isSigner: false,\n              isWritable: true\n            }, {\n              pubkey: feeRecipientPubkey,\n              isSigner: false,\n              isWritable: true\n            }, {\n              pubkey: developerRewardPoolPubkey,\n              isSigner: false,\n              isWritable: true\n            }, {\n              pubkey: TOKEN_PROGRAM_ID,\n              isSigner: false,\n              isWritable: false\n            }, {\n              pubkey: SystemProgram.programId,\n              isSigner: false,\n              isWritable: false\n            }];\n            buyIx = new TransactionInstruction({\n              programId: programId,\n              keys: buyAccounts,\n              data: data\n            });\n            transaction.add(buyIx);\n            console.log(\"Added buy instruction to transaction.\");\n            transaction.feePayer = fromPubkey;\n            console.log(\"Setting fee payer:\", fromPubkey.toBase58());\n            _context7.next = 30;\n            return getRecentBlockhashWithRetry(_connection);\n          case 30:\n            transaction.recentBlockhash = _context7.sent;\n            console.log(\"Obtained recent blockhash:\", transaction.recentBlockhash);\n            console.log(\"Signing transaction...\");\n            _context7.next = 35;\n            return window.solana.signTransaction(transaction);\n          case 35:\n            signedTx = _context7.sent;\n            rawTx = signedTx.serialize();\n            console.log(\"Signed transaction.\");\n            console.log(\"Sending raw transaction...\");\n            _context7.next = 41;\n            return _connection.sendRawTransaction(rawTx);\n          case 41:\n            signature = _context7.sent;\n            tradeStatus.innerText = \"Transaction sent! Signature: \".concat(signature, \"\\n\");\n            console.log(\"Transaction sent! Signature:\", signature);\n            _context7.next = 46;\n            return _connection.confirmTransaction(signature, \"confirmed\");\n          case 46:\n            confirmation = _context7.sent;\n            console.log(\"Transaction confirmation result:\", confirmation);\n            _context7.next = 50;\n            return _connection.getParsedTransaction(signature);\n          case 50:\n            parsedTx = _context7.sent;\n            if (parsedTx && parsedTx.meta) {\n              console.log(\"Parsed transaction logs:\", parsedTx.meta.logMessages);\n            } else {\n              console.log(\"No parsed transaction logs available.\");\n            }\n            tradeStatus.innerText += \"Transaction confirmed!\";\n            console.log(\"Transaction confirmed!\");\n            _context7.next = 71;\n            break;\n          case 56:\n            _context7.prev = 56;\n            _context7.t0 = _context7[\"catch\"](4);\n            console.error(\"Swap transaction error:\", _context7.t0);\n            if (_context7.t0.logs) {\n              console.error(\"Transaction logs:\", _context7.t0.logs);\n              tradeStatus.innerText = \"Swap transaction error: \".concat(_context7.t0.message, \"\\nLogs:\\n\").concat(_context7.t0.logs.join('\\n'));\n            } else {\n              tradeStatus.innerText = \"Swap transaction error: \".concat(_context7.t0.message);\n            }\n            if (!_context7.t0.signature) {\n              _context7.next = 71;\n              break;\n            }\n            _context7.prev = 61;\n            _context7.next = 64;\n            return connection.getParsedTransaction(_context7.t0.signature);\n          case 64:\n            _parsedTx = _context7.sent;\n            if (_parsedTx && _parsedTx.meta) {\n              console.error(\"Detailed parsed logs:\", _parsedTx.meta.logMessages);\n            }\n            _context7.next = 71;\n            break;\n          case 68:\n            _context7.prev = 68;\n            _context7.t1 = _context7[\"catch\"](61);\n            console.error(\"Error parsing transaction logs:\", _context7.t1);\n          case 71:\n          case \"end\":\n            return _context7.stop();\n        }\n      }, _callee7, null, [[4, 56], [61, 68]]);\n    }));\n    return _swapNOVA.apply(this, arguments);\n  }\n  connectWalletBtn.addEventListener(\"click\", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          console.log(\"Connect Wallet button clicked!\");\n          _context.next = 3;\n          return initializeDiscriminator();\n        case 3:\n          console.log(\"After initialization, BUY_METHOD_DISCM:\", BUY_METHOD_DISCM);\n          connectWallet();\n        case 5:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  })));\n  swapBtn.addEventListener(\"click\", function () {\n    console.log(\"Swap button clicked!\");\n    swapNOVA();\n  });\n  swapInputsBtn.addEventListener('click', function () {\n    var tmp = solInput.value;\n    solInput.value = novaInput.value;\n    novaInput.value = tmp;\n    console.log(\"Swapped input values (SOL <-> NOVA)\");\n  });\n\n  // =====================\n  // 自動換算函式（SOL 與 NOVA 互換）\n  // =====================\n  function updateNovaFromSOL() {\n    var solVal = parseFloat(solInput.value);\n    console.log(\"updateNovaFromSOL triggered. SOL value:\", solVal, \"SOL_USD_PRICE:\", window.SOL_USD_PRICE, \"CURRENT_NOVA_PRICE_USD:\", window.CURRENT_NOVA_PRICE_USD);\n    if (!solInput.value || isNaN(solVal) || solVal <= 0) {\n      novaInput.value = \"\";\n      return;\n    }\n    var novaVal = solVal * (window.SOL_USD_PRICE / window.CURRENT_NOVA_PRICE_USD);\n    novaInput.value = novaVal.toFixed(5);\n  }\n  function updateSolFromNova() {\n    var novaVal = parseFloat(novaInput.value);\n    console.log(\"updateSolFromNova triggered. NOVA value:\", novaVal, \"SOL_USD_PRICE:\", window.SOL_USD_PRICE, \"CURRENT_NOVA_PRICE_USD:\", window.CURRENT_NOVA_PRICE_USD);\n    if (!novaInput.value || isNaN(novaVal) || novaVal <= 0) {\n      solInput.value = \"\";\n      return;\n    }\n    var solVal = novaVal * (window.CURRENT_NOVA_PRICE_USD / window.SOL_USD_PRICE);\n    solInput.value = solVal.toFixed(5);\n  }\n  solInput.addEventListener('input', updateNovaFromSOL);\n  novaInput.addEventListener('input', updateSolFromNova);\n});\n\n//# sourceURL=webpack://nova/./trade.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./trade.js"]();
/******/ 	
/******/ })()
;