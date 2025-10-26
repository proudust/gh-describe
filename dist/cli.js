var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/errors.js
var require_errors = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/errors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WriteZero = exports2.UnexpectedEof = exports2.TimedOut = exports2.PermissionDenied = exports2.NotFound = exports2.NotConnected = exports2.InvalidData = exports2.Interrupted = exports2.Http = exports2.ConnectionReset = exports2.ConnectionRefused = exports2.ConnectionAborted = exports2.Busy = exports2.BrokenPipe = exports2.BadResource = exports2.AlreadyExists = exports2.AddrNotAvailable = exports2.AddrInUse = void 0;
    var AddrInUse = class extends Error {
    };
    exports2.AddrInUse = AddrInUse;
    var AddrNotAvailable = class extends Error {
    };
    exports2.AddrNotAvailable = AddrNotAvailable;
    var AlreadyExists = class extends Error {
    };
    exports2.AlreadyExists = AlreadyExists;
    var BadResource = class extends Error {
    };
    exports2.BadResource = BadResource;
    var BrokenPipe = class extends Error {
    };
    exports2.BrokenPipe = BrokenPipe;
    var Busy = class extends Error {
    };
    exports2.Busy = Busy;
    var ConnectionAborted = class extends Error {
    };
    exports2.ConnectionAborted = ConnectionAborted;
    var ConnectionRefused = class extends Error {
    };
    exports2.ConnectionRefused = ConnectionRefused;
    var ConnectionReset = class extends Error {
    };
    exports2.ConnectionReset = ConnectionReset;
    var Http = class extends Error {
    };
    exports2.Http = Http;
    var Interrupted = class extends Error {
    };
    exports2.Interrupted = Interrupted;
    var InvalidData = class extends Error {
    };
    exports2.InvalidData = InvalidData;
    var NotConnected = class extends Error {
    };
    exports2.NotConnected = NotConnected;
    var NotFound = class extends Error {
      constructor() {
        super(...arguments);
        this.code = "ENOENT";
      }
    };
    exports2.NotFound = NotFound;
    var PermissionDenied = class extends Error {
    };
    exports2.PermissionDenied = PermissionDenied;
    var TimedOut = class extends Error {
    };
    exports2.TimedOut = TimedOut;
    var UnexpectedEof = class extends Error {
    };
    exports2.UnexpectedEof = UnexpectedEof;
    var WriteZero = class extends Error {
    };
    exports2.WriteZero = WriteZero;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/errorMap.js
var require_errorMap = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/errorMap.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var errors = __importStar(require_errors());
    var mapper = (Ctor) => (err) => Object.assign(new Ctor(err.message), {
      stack: err.stack
    });
    var map = {
      EEXIST: mapper(errors.AlreadyExists),
      ENOENT: mapper(errors.NotFound),
      EBADF: mapper(errors.BadResource)
    };
    var isNodeErr = (e) => {
      return e instanceof Error && "code" in e;
    };
    function mapError(e) {
      var _a;
      if (!isNodeErr(e))
        return e;
      return ((_a = map[e.code]) === null || _a === void 0 ? void 0 : _a.call(map, e)) || e;
    }
    exports2.default = mapError;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/stat.js
var require_stat = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/stat.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stat = exports2.denoifyFileInfo = void 0;
    var promises_1 = require("node:fs/promises");
    var os = __importStar(require("node:os"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var isWindows2 = os.platform() === "win32";
    function denoifyFileInfo(s) {
      return {
        atime: s.atime,
        birthtime: s.birthtime,
        blksize: isWindows2 ? null : s.blksize,
        blocks: isWindows2 ? null : s.blocks,
        dev: s.dev,
        gid: isWindows2 ? null : s.gid,
        ino: isWindows2 ? null : s.ino,
        isDirectory: s.isDirectory(),
        isFile: s.isFile(),
        isSymlink: s.isSymbolicLink(),
        isBlockDevice: isWindows2 ? null : s.isBlockDevice(),
        isCharDevice: isWindows2 ? null : s.isCharacterDevice(),
        isFifo: isWindows2 ? null : s.isFIFO(),
        isSocket: isWindows2 ? null : s.isSocket(),
        mode: isWindows2 ? null : s.mode,
        mtime: s.mtime,
        nlink: isWindows2 ? null : s.nlink,
        rdev: isWindows2 ? null : s.rdev,
        size: s.size,
        uid: isWindows2 ? null : s.uid
      };
    }
    exports2.denoifyFileInfo = denoifyFileInfo;
    var stat = async (path) => {
      try {
        return denoifyFileInfo(await (0, promises_1.stat)(path));
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports2.stat = stat;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstat.js
var require_fstat = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstat.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fstat = void 0;
    var fs = __importStar(require("fs"));
    var util_1 = require("util");
    var stat_js_1 = require_stat();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var nodeFstat = (0, util_1.promisify)(fs.fstat);
    var fstat = async function(fd) {
      try {
        return (0, stat_js_1.denoifyFileInfo)(await nodeFstat(fd));
      } catch (err) {
        throw (0, errorMap_js_1.default)(err);
      }
    };
    exports2.fstat = fstat;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstatSync.js
var require_fstatSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstatSync.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fstatSync = void 0;
    var fs_1 = require("fs");
    var stat_js_1 = require_stat();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var fstatSync = function fstatSync2(fd) {
      try {
        return (0, stat_js_1.denoifyFileInfo)((0, fs_1.fstatSync)(fd));
      } catch (err) {
        throw (0, errorMap_js_1.default)(err);
      }
    };
    exports2.fstatSync = fstatSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncate.js
var require_ftruncate = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ftruncate = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var _ftruncate = (0, util_1.promisify)(fs_1.ftruncate);
    exports2.ftruncate = _ftruncate;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncateSync.js
var require_ftruncateSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncateSync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ftruncateSync = void 0;
    var fs_1 = require("fs");
    exports2.ftruncateSync = fs_1.ftruncateSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasync.js
var require_fdatasync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fdatasync = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var _fdatasync = (0, util_1.promisify)(fs_1.fdatasync);
    exports2.fdatasync = _fdatasync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasyncSync.js
var require_fdatasyncSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasyncSync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fdatasyncSync = void 0;
    var fs_1 = require("fs");
    exports2.fdatasyncSync = fs_1.fdatasyncSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/read.js
var require_read = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/read.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.read = void 0;
    var util_1 = require("util");
    var fs_1 = require("fs");
    var _read = (0, util_1.promisify)(fs_1.read);
    var read = async function read2(rid, buffer) {
      if (buffer == null) {
        throw new TypeError("Buffer must not be null.");
      }
      if (buffer.length === 0) {
        return 0;
      }
      const { bytesRead } = await _read(rid, buffer, 0, buffer.length, null);
      return bytesRead === 0 ? null : bytesRead;
    };
    exports2.read = read;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readSync.js
var require_readSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.readSync = void 0;
    var fs = __importStar(require("fs"));
    var readSync = (fd, buffer) => {
      const bytesRead = fs.readSync(fd, buffer);
      return bytesRead === 0 ? null : bytesRead;
    };
    exports2.readSync = readSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/write.js
var require_write = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/write.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.write = void 0;
    var fs = __importStar(require("fs"));
    var util_1 = require("util");
    var nodeWrite = (0, util_1.promisify)(fs.write);
    var write = async (fd, data2) => {
      const { bytesWritten } = await nodeWrite(fd, data2);
      return bytesWritten;
    };
    exports2.write = write;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeSync.js
var require_writeSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.writeSync = void 0;
    var fs = __importStar(require("fs"));
    exports2.writeSync = fs.writeSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/FsFile.js
var require_FsFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/FsFile.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __classPrivateFieldGet2 = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _a;
    var _b;
    var _c;
    var _d;
    var _FsFile_closed;
    var _FsFile_readableStream;
    var _FsFile_writableStream;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.File = exports2.FsFile = void 0;
    var fs = __importStar(require("node:fs"));
    var stream = __importStar(require("node:stream"));
    var fstat_js_1 = require_fstat();
    var fstatSync_js_1 = require_fstatSync();
    var ftruncate_js_1 = require_ftruncate();
    var ftruncateSync_js_1 = require_ftruncateSync();
    var fdatasync_js_1 = require_fdatasync();
    var fdatasyncSync_js_1 = require_fdatasyncSync();
    var read_js_1 = require_read();
    var readSync_js_1 = require_readSync();
    var write_js_1 = require_write();
    var writeSync_js_1 = require_writeSync();
    (_a = (_c = Symbol).dispose) !== null && _a !== void 0 ? _a : _c.dispose = Symbol("Symbol.dispose");
    (_b = (_d = Symbol).asyncDispose) !== null && _b !== void 0 ? _b : _d.asyncDispose = Symbol("Symbol.asyncDispose");
    var FsFile = class {
      constructor(rid) {
        this.rid = rid;
        _FsFile_closed.set(this, false);
        _FsFile_readableStream.set(this, void 0);
        _FsFile_writableStream.set(this, void 0);
      }
      [(_FsFile_closed = /* @__PURE__ */ new WeakMap(), _FsFile_readableStream = /* @__PURE__ */ new WeakMap(), _FsFile_writableStream = /* @__PURE__ */ new WeakMap(), Symbol.dispose)]() {
        if (!__classPrivateFieldGet2(this, _FsFile_closed, "f")) {
          this.close();
        }
      }
      async write(p) {
        return await (0, write_js_1.write)(this.rid, p);
      }
      writeSync(p) {
        return (0, writeSync_js_1.writeSync)(this.rid, p);
      }
      async truncate(len) {
        await (0, ftruncate_js_1.ftruncate)(this.rid, len);
      }
      truncateSync(len) {
        return (0, ftruncateSync_js_1.ftruncateSync)(this.rid, len);
      }
      read(p) {
        return (0, read_js_1.read)(this.rid, p);
      }
      readSync(p) {
        return (0, readSync_js_1.readSync)(this.rid, p);
      }
      seek(_offset, _whence) {
        throw new Error("Method not implemented.");
      }
      seekSync(_offset, _whence) {
        throw new Error("Method not implemented.");
      }
      async stat() {
        return await (0, fstat_js_1.fstat)(this.rid);
      }
      statSync() {
        return (0, fstatSync_js_1.fstatSync)(this.rid);
      }
      sync() {
        throw new Error("Method not implemented.");
      }
      syncSync() {
        throw new Error("Method not implemented.");
      }
      syncData() {
        return (0, fdatasync_js_1.fdatasync)(this.rid);
      }
      syncDataSync() {
        return (0, fdatasyncSync_js_1.fdatasyncSync)(this.rid);
      }
      utime(_atime, _mtime) {
        throw new Error("Method not implemented.");
      }
      utimeSync(_atime, _mtime) {
        throw new Error("Method not implemented.");
      }
      close() {
        __classPrivateFieldSet(this, _FsFile_closed, true, "f");
        fs.closeSync(this.rid);
      }
      get readable() {
        if (__classPrivateFieldGet2(this, _FsFile_readableStream, "f") == null) {
          const nodeStream = fs.createReadStream(null, {
            fd: this.rid,
            autoClose: false
          });
          __classPrivateFieldSet(this, _FsFile_readableStream, stream.Readable.toWeb(nodeStream), "f");
        }
        return __classPrivateFieldGet2(this, _FsFile_readableStream, "f");
      }
      get writable() {
        if (__classPrivateFieldGet2(this, _FsFile_writableStream, "f") == null) {
          const nodeStream = fs.createWriteStream(null, {
            fd: this.rid,
            autoClose: false
          });
          __classPrivateFieldSet(this, _FsFile_writableStream, stream.Writable.toWeb(nodeStream), "f");
        }
        return __classPrivateFieldGet2(this, _FsFile_writableStream, "f");
      }
    };
    exports2.FsFile = FsFile;
    var File = FsFile;
    exports2.File = File;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/PermissionStatus.js
var require_PermissionStatus = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/PermissionStatus.js"(exports2) {
    "use strict";
    var _a;
    var _b;
    var _c;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PermissionStatus = void 0;
    (_a = (_c = globalThis).EventTarget) !== null && _a !== void 0 ? _a : _c.EventTarget = (_b = require("events").EventTarget) !== null && _b !== void 0 ? _b : null;
    var PermissionStatus = class extends EventTarget {
      /** @internal */
      constructor(state) {
        super();
        this.state = state;
        this.onchange = null;
        this.partial = false;
      }
    };
    exports2.PermissionStatus = PermissionStatus;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/Permissions.js
var require_Permissions = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/Permissions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Permissions = void 0;
    var PermissionStatus_js_1 = require_PermissionStatus();
    var Permissions = class {
      query(desc) {
        return Promise.resolve(this.querySync(desc));
      }
      querySync(_desc) {
        return new PermissionStatus_js_1.PermissionStatus("granted");
      }
      revoke(desc) {
        return Promise.resolve(this.revokeSync(desc));
      }
      revokeSync(_desc) {
        return new PermissionStatus_js_1.PermissionStatus("denied");
      }
      request(desc) {
        return this.query(desc);
      }
      requestSync(desc) {
        return this.querySync(desc);
      }
    };
    exports2.Permissions = Permissions;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes.js
var require_classes = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PermissionStatus = exports2.Permissions = exports2.FsFile = exports2.File = void 0;
    var FsFile_js_1 = require_FsFile();
    Object.defineProperty(exports2, "File", { enumerable: true, get: function() {
      return FsFile_js_1.File;
    } });
    Object.defineProperty(exports2, "FsFile", { enumerable: true, get: function() {
      return FsFile_js_1.FsFile;
    } });
    var Permissions_js_1 = require_Permissions();
    Object.defineProperty(exports2, "Permissions", { enumerable: true, get: function() {
      return Permissions_js_1.Permissions;
    } });
    var PermissionStatus_js_1 = require_PermissionStatus();
    Object.defineProperty(exports2, "PermissionStatus", { enumerable: true, get: function() {
      return PermissionStatus_js_1.PermissionStatus;
    } });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/enums/SeekMode.js
var require_SeekMode = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/enums/SeekMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SeekMode = void 0;
    var SeekMode;
    (function(SeekMode2) {
      SeekMode2[SeekMode2["Start"] = 0] = "Start";
      SeekMode2[SeekMode2["Current"] = 1] = "Current";
      SeekMode2[SeekMode2["End"] = 2] = "End";
    })(SeekMode || (exports2.SeekMode = SeekMode = {}));
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/enums.js
var require_enums = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/enums.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SeekMode = void 0;
    var SeekMode_js_1 = require_SeekMode();
    Object.defineProperty(exports2, "SeekMode", { enumerable: true, get: function() {
      return SeekMode_js_1.SeekMode;
    } });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/build.js
var require_build = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/build.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.build = void 0;
    var os = __importStar(require("os"));
    exports2.build = {
      arch: "x86_64",
      os: /* @__PURE__ */ ((p) => p === "win32" ? "windows" : p === "darwin" ? "darwin" : "linux")(os.platform()),
      vendor: "pc",
      target: /* @__PURE__ */ ((p) => p === "win32" ? "x86_64-pc-windows-msvc" : p === "darwin" ? "x86_64-apple-darwin" : "x86_64-unknown-linux-gnu")(os.platform())
    };
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/customInspect.js
var require_customInspect = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/customInspect.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.customInspect = void 0;
    exports2.customInspect = Symbol.for("nodejs.util.inspect.custom");
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/env.js
var require_env = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/env.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.env = void 0;
    exports2.env = {
      get(key) {
        assertValidKey(key);
        return process.env[key];
      },
      set(key, value) {
        assertValidKey(key);
        assertValidValue(value);
        process.env[key] = value;
      },
      has(key) {
        assertValidKey(key);
        return key in process.env;
      },
      delete(key) {
        assertValidKey(key);
        delete process.env[key];
      },
      // @ts-expect-error https://github.com/denoland/deno/issues/10267
      toObject() {
        return { ...process.env };
      }
    };
    var invalidKeyChars = ["=", "\0"].map((c) => c.charCodeAt(0));
    var invalidValueChar = "\0".charCodeAt(0);
    function assertValidKey(key) {
      if (key.length === 0) {
        throw new TypeError("Key is an empty string.");
      }
      for (let i = 0; i < key.length; i++) {
        if (invalidKeyChars.includes(key.charCodeAt(i))) {
          const char = key.charCodeAt(i) === "\0".charCodeAt(0) ? "\\0" : key[i];
          throw new TypeError(`Key contains invalid characters: "${char}"`);
        }
      }
    }
    function assertValidValue(value) {
      for (let i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) === invalidValueChar) {
          throw new TypeError('Value contains invalid characters: "\\0"');
        }
      }
    }
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/mainModule.js
var require_mainModule = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/mainModule.js"(exports2) {
    "use strict";
    var _a;
    var _b;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mainModule = void 0;
    var path_1 = require("path");
    var url_1 = require("url");
    exports2.mainModule = (0, url_1.pathToFileURL)((_b = (_a = require.main) === null || _a === void 0 ? void 0 : _a.filename) !== null && _b !== void 0 ? _b : (0, path_1.join)(__dirname, "$deno$repl.ts")).href;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/metrics.js
var require_metrics = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/metrics.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.metrics = void 0;
    var metrics = function metrics2() {
      return {
        opsDispatched: 0,
        opsDispatchedSync: 0,
        opsDispatchedAsync: 0,
        opsDispatchedAsyncUnref: 0,
        opsCompleted: 0,
        opsCompletedSync: 0,
        opsCompletedAsync: 0,
        opsCompletedAsyncUnref: 0,
        bytesSentControl: 0,
        bytesSentData: 0,
        bytesReceived: 0,
        ops: {}
      };
    };
    exports2.metrics = metrics;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/noColor.js
var require_noColor = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/noColor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.noColor = void 0;
    exports2.noColor = process.env.NO_COLOR !== void 0;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/permissions.js
var require_permissions = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/permissions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.permissions = void 0;
    var Permissions_js_1 = require_Permissions();
    exports2.permissions = new Permissions_js_1.Permissions();
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/pid.js
var require_pid = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/pid.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.pid = void 0;
    exports2.pid = process.pid;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/ppid.js
var require_ppid = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/ppid.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ppid = void 0;
    exports2.ppid = process.ppid;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/resources.js
var require_resources = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/resources.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resources = void 0;
    var resources = function resources2() {
      console.warn([
        "Deno.resources() shim returns a dummy object that does not update.",
        "If you think this is a mistake, raise an issue at https://github.com/denoland/node_deno_shims/issues"
      ].join("\n"));
      return {};
    };
    exports2.resources = resources;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/std.js
var require_std = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/std.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stderr = exports2.stdout = exports2.stdin = void 0;
    var node_stream_1 = __importDefault(require("node:stream"));
    var node_tty_1 = __importDefault(require("node:tty"));
    var readSync_js_1 = require_readSync();
    var writeSync_js_1 = require_writeSync();
    function chain(fn, cleanup) {
      let prev;
      return function _fn(...args) {
        const curr = (prev || Promise.resolve()).then(() => fn(...args)).finally(cleanup || (() => {
        })).then((result) => {
          if (prev === curr)
            prev = void 0;
          return result;
        });
        return prev = curr;
      };
    }
    var stdinReadable;
    exports2.stdin = {
      rid: 0,
      isTerminal() {
        return node_tty_1.default.isatty(this.rid);
      },
      read: chain((p) => {
        return new Promise((resolve3, reject) => {
          process.stdin.resume();
          process.stdin.on("error", onerror);
          process.stdin.once("readable", () => {
            var _a;
            process.stdin.off("error", onerror);
            const data2 = (_a = process.stdin.read(p.length)) !== null && _a !== void 0 ? _a : process.stdin.read();
            if (data2) {
              p.set(data2);
              resolve3(data2.length > 0 ? data2.length : null);
            } else {
              resolve3(null);
            }
          });
          function onerror(error) {
            reject(error);
            process.stdin.off("error", onerror);
          }
        });
      }, () => process.stdin.pause()),
      get readable() {
        if (stdinReadable == null) {
          stdinReadable = node_stream_1.default.Readable.toWeb(process.stdin);
        }
        return stdinReadable;
      },
      readSync(buffer) {
        return (0, readSync_js_1.readSync)(this.rid, buffer);
      },
      close() {
        process.stdin.destroy();
      },
      setRaw(mode, options) {
        if (options === null || options === void 0 ? void 0 : options.cbreak) {
          throw new Error("The cbreak option is not implemented.");
        }
        process.stdin.setRawMode(mode);
      }
    };
    var stdoutWritable;
    exports2.stdout = {
      rid: 1,
      isTerminal() {
        return node_tty_1.default.isatty(this.rid);
      },
      write: chain((p) => {
        return new Promise((resolve3) => {
          const result = process.stdout.write(p);
          if (!result) {
            process.stdout.once("drain", () => resolve3(p.length));
          } else {
            resolve3(p.length);
          }
        });
      }),
      get writable() {
        if (stdoutWritable == null) {
          stdoutWritable = node_stream_1.default.Writable.toWeb(process.stdout);
        }
        return stdoutWritable;
      },
      writeSync(data2) {
        return (0, writeSync_js_1.writeSync)(this.rid, data2);
      },
      close() {
        process.stdout.destroy();
      }
    };
    var stderrWritable;
    exports2.stderr = {
      rid: 2,
      isTerminal() {
        return node_tty_1.default.isatty(this.rid);
      },
      write: chain((p) => {
        return new Promise((resolve3) => {
          const result = process.stderr.write(p);
          if (!result) {
            process.stderr.once("drain", () => resolve3(p.length));
          } else {
            resolve3(p.length);
          }
        });
      }),
      get writable() {
        if (stderrWritable == null) {
          stderrWritable = node_stream_1.default.Writable.toWeb(process.stderr);
        }
        return stderrWritable;
      },
      writeSync(data2) {
        return (0, writeSync_js_1.writeSync)(this.rid, data2);
      },
      close() {
        process.stderr.destroy();
      }
    };
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/version.js
var require_version = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/version.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.typescript = exports2.deno = void 0;
    exports2.deno = "1.40.3";
    exports2.typescript = "5.3.3";
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/version.js
var require_version2 = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/version.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.version = void 0;
    var version_js_1 = require_version();
    exports2.version = {
      deno: version_js_1.deno,
      typescript: version_js_1.typescript,
      v8: process.versions.v8
    };
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables.js
var require_variables = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.version = exports2.resources = exports2.ppid = exports2.pid = exports2.permissions = exports2.noColor = exports2.metrics = exports2.mainModule = exports2.errors = exports2.env = exports2.customInspect = exports2.build = void 0;
    var build_js_1 = require_build();
    Object.defineProperty(exports2, "build", { enumerable: true, get: function() {
      return build_js_1.build;
    } });
    var customInspect_js_1 = require_customInspect();
    Object.defineProperty(exports2, "customInspect", { enumerable: true, get: function() {
      return customInspect_js_1.customInspect;
    } });
    var env_js_1 = require_env();
    Object.defineProperty(exports2, "env", { enumerable: true, get: function() {
      return env_js_1.env;
    } });
    exports2.errors = __importStar(require_errors());
    var mainModule_js_1 = require_mainModule();
    Object.defineProperty(exports2, "mainModule", { enumerable: true, get: function() {
      return mainModule_js_1.mainModule;
    } });
    var metrics_js_1 = require_metrics();
    Object.defineProperty(exports2, "metrics", { enumerable: true, get: function() {
      return metrics_js_1.metrics;
    } });
    var noColor_js_1 = require_noColor();
    Object.defineProperty(exports2, "noColor", { enumerable: true, get: function() {
      return noColor_js_1.noColor;
    } });
    var permissions_js_1 = require_permissions();
    Object.defineProperty(exports2, "permissions", { enumerable: true, get: function() {
      return permissions_js_1.permissions;
    } });
    var pid_js_1 = require_pid();
    Object.defineProperty(exports2, "pid", { enumerable: true, get: function() {
      return pid_js_1.pid;
    } });
    var ppid_js_1 = require_ppid();
    Object.defineProperty(exports2, "ppid", { enumerable: true, get: function() {
      return ppid_js_1.ppid;
    } });
    var resources_js_1 = require_resources();
    Object.defineProperty(exports2, "resources", { enumerable: true, get: function() {
      return resources_js_1.resources;
    } });
    __exportStar(require_std(), exports2);
    var version_js_1 = require_version2();
    Object.defineProperty(exports2, "version", { enumerable: true, get: function() {
      return version_js_1.version;
    } });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/addSignalListener.js
var require_addSignalListener = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/addSignalListener.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.addSignalListener = void 0;
    var process_1 = __importDefault(require("process"));
    function denoSignalToNodeJs(signal) {
      if (signal === "SIGEMT") {
        throw new Error("SIGEMT is not supported");
      }
      return signal;
    }
    var addSignalListener = (signal, handler) => {
      process_1.default.addListener(denoSignalToNodeJs(signal), handler);
    };
    exports2.addSignalListener = addSignalListener;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chdir.js
var require_chdir = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chdir.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.chdir = void 0;
    var url_1 = require("url");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var chdir = function(path) {
      try {
        return process.chdir(path instanceof URL ? (0, url_1.fileURLToPath)(path) : path);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), chdir '${path}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.chdir = chdir;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmod.js
var require_chmod = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmod.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.chmod = void 0;
    var fs = __importStar(require("fs/promises"));
    exports2.chmod = fs.chmod;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmodSync.js
var require_chmodSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmodSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.chmodSync = void 0;
    var fs = __importStar(require("fs"));
    exports2.chmodSync = fs.chmodSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chown.js
var require_chown = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chown.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.chown = void 0;
    var fs = __importStar(require("fs/promises"));
    var chown = async (path, uid, gid) => await fs.chown(path, uid !== null && uid !== void 0 ? uid : -1, gid !== null && gid !== void 0 ? gid : -1);
    exports2.chown = chown;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chownSync.js
var require_chownSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chownSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.chownSync = void 0;
    var fs = __importStar(require("fs"));
    var chownSync = (path, uid, gid) => fs.chownSync(path, uid !== null && uid !== void 0 ? uid : -1, gid !== null && gid !== void 0 ? gid : -1);
    exports2.chownSync = chownSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/close.js
var require_close = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/close.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.close = void 0;
    var fs = __importStar(require("fs"));
    exports2.close = fs.closeSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/Conn.js
var require_Conn = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/Conn.js"(exports2) {
    "use strict";
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet2 = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Conn_socket;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TlsConn = exports2.Conn = void 0;
    var net_1 = require("net");
    var FsFile_js_1 = require_FsFile();
    var Conn = class extends FsFile_js_1.FsFile {
      constructor(rid, localAddr, remoteAddr, socket) {
        super(rid);
        this.rid = rid;
        this.localAddr = localAddr;
        this.remoteAddr = remoteAddr;
        _Conn_socket.set(this, void 0);
        __classPrivateFieldSet(this, _Conn_socket, socket || new net_1.Socket({ fd: rid }), "f");
      }
      [(_Conn_socket = /* @__PURE__ */ new WeakMap(), Symbol.dispose)]() {
        this.close();
      }
      async closeWrite() {
        await new Promise((resolve3) => __classPrivateFieldGet2(this, _Conn_socket, "f").end(resolve3));
      }
      setNoDelay(enable) {
        __classPrivateFieldGet2(this, _Conn_socket, "f").setNoDelay(enable);
      }
      setKeepAlive(enable) {
        __classPrivateFieldGet2(this, _Conn_socket, "f").setKeepAlive(enable);
      }
      ref() {
        __classPrivateFieldGet2(this, _Conn_socket, "f").ref();
      }
      unref() {
        __classPrivateFieldGet2(this, _Conn_socket, "f").unref();
      }
    };
    exports2.Conn = Conn;
    var TlsConn = class extends Conn {
      handshake() {
        console.warn("@deno/shim-deno: Handshake is not supported.");
        return Promise.resolve({
          alpnProtocol: null
        });
      }
    };
    exports2.TlsConn = TlsConn;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/connect.js
var require_connect = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/connect.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.connect = void 0;
    var net_1 = require("net");
    var Conn_js_1 = require_Conn();
    var connect = function connect2(options) {
      if (options.transport === "unix") {
        throw new Error("Unstable UnixConnectOptions is not implemented");
      }
      const { transport = "tcp", hostname = "127.0.0.1", port } = options;
      if (transport !== "tcp") {
        throw new Error("Deno.connect is only implemented for transport: tcp");
      }
      const socket = (0, net_1.createConnection)({ port, host: hostname });
      socket.on("error", (err) => console.error(err));
      return new Promise((resolve3) => {
        socket.once("connect", () => {
          const rid = socket._handle.fd;
          const localAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.remoteAddress,
            port: socket.remotePort,
            transport: "tcp"
          };
          resolve3(new Conn_js_1.Conn(rid, localAddr, remoteAddr, socket));
        });
      });
    };
    exports2.connect = connect;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFile.js
var require_readTextFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFile.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.readTextFile = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readTextFile = async (path, { signal } = {}) => {
      try {
        return await (0, promises_1.readFile)(path, { encoding: "utf8", signal });
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports2.readTextFile = readTextFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/connectTls.js
var require_connectTls = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/connectTls.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.connectTls = void 0;
    var tls_1 = require("tls");
    var Conn_js_1 = require_Conn();
    var readTextFile_js_1 = require_readTextFile();
    var connectTls = async function connectTls2({ port, hostname = "127.0.0.1", certFile }) {
      const cert = certFile && await (0, readTextFile_js_1.readTextFile)(certFile);
      const socket = (0, tls_1.connect)({ port, host: hostname, cert });
      return new Promise((resolve3) => {
        socket.on("connect", () => {
          const rid = socket._handle.fd;
          const localAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.remoteAddress,
            port: socket.remotePort,
            transport: "tcp"
          };
          resolve3(new Conn_js_1.TlsConn(rid, localAddr, remoteAddr, socket));
        });
      });
    };
    exports2.connectTls = connectTls;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/consoleSize.js
var require_consoleSize = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/consoleSize.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.consoleSize = void 0;
    var consoleSize = function consoleSize2() {
      const pipes = [process.stderr, process.stdout];
      for (const pipe of pipes) {
        if (pipe.columns != null) {
          const { columns, rows } = pipe;
          return { columns, rows };
        }
      }
      throw new Error("The handle is invalid.");
    };
    exports2.consoleSize = consoleSize;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/consts.js
var require_consts = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/consts.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DEFAULT_BUFFER_SIZE = void 0;
    exports2.DEFAULT_BUFFER_SIZE = 32 * 1024;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copy.js
var require_copy = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.copy = void 0;
    var consts_js_1 = require_consts();
    var copy = async function copy2(src, dst, options) {
      var _a;
      let n = 0;
      const bufSize = (_a = options === null || options === void 0 ? void 0 : options.bufSize) !== null && _a !== void 0 ? _a : consts_js_1.DEFAULT_BUFFER_SIZE;
      const b = new Uint8Array(bufSize);
      let gotEOF = false;
      while (gotEOF === false) {
        const result = await src.read(b);
        if (result === null) {
          gotEOF = true;
        } else {
          let nwritten = 0;
          while (nwritten < result) {
            nwritten += await dst.write(b.subarray(nwritten, result));
          }
          n += nwritten;
        }
      }
      return n;
    };
    exports2.copy = copy;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFile.js
var require_copyFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFile.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.copyFile = void 0;
    var fs = __importStar(require("fs/promises"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var errors = __importStar(require_errors());
    var copyFile = async (src, dest) => {
      try {
        await fs.copyFile(src, dest);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new errors.NotFound(`File not found, copy '${src}' -> '${dest}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.copyFile = copyFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFileSync.js
var require_copyFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFileSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.copyFileSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var errors = __importStar(require_errors());
    var copyFileSync = (src, dest) => {
      try {
        fs.copyFileSync(src, dest);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new errors.NotFound(`File not found, copy '${src}' -> '${dest}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.copyFileSync = copyFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/fs_flags.js
var require_fs_flags = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/fs_flags.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getFsFlag = exports2.getCreationFlag = exports2.getAccessFlag = void 0;
    var errors = __importStar(require_errors());
    var fs_1 = require("fs");
    var os_1 = __importDefault(require("os"));
    var { O_APPEND, O_CREAT, O_EXCL, O_RDONLY, O_RDWR, O_TRUNC, O_WRONLY } = fs_1.constants;
    function getAccessFlag(opts) {
      if (opts.read && !opts.write && !opts.append)
        return O_RDONLY;
      if (!opts.read && opts.write && !opts.append)
        return O_WRONLY;
      if (opts.read && opts.write && !opts.append)
        return O_RDWR;
      if (!opts.read && opts.append)
        return O_WRONLY | O_APPEND;
      if (opts.read && opts.append)
        return O_RDWR | O_APPEND;
      if (!opts.read && !opts.write && !opts.append) {
        throw new errors.BadResource("EINVAL: One of 'read', 'write', 'append' is required to open file.");
      }
      throw new errors.BadResource("EINVAL: Invalid fs flags.");
    }
    exports2.getAccessFlag = getAccessFlag;
    function getCreationFlag(opts) {
      if (!opts.write && !opts.append) {
        if (opts.truncate || opts.create || opts.createNew) {
          throw new errors.BadResource("EINVAL: One of 'write', 'append' is required to 'truncate', 'create' or 'createNew' file.");
        }
      }
      if (opts.append) {
        if (opts.truncate && !opts.createNew) {
          throw new errors.BadResource("EINVAL: unexpected 'truncate': true and 'createNew': false when 'append' is true.");
        }
      }
      if (!opts.create && !opts.truncate && !opts.createNew)
        return 0;
      if (opts.create && !opts.truncate && !opts.createNew)
        return O_CREAT;
      if (!opts.create && opts.truncate && !opts.createNew) {
        if (os_1.default.platform() === "win32") {
          return O_CREAT | O_TRUNC;
        } else {
          return O_TRUNC;
        }
      }
      if (opts.create && opts.truncate && !opts.createNew) {
        return O_CREAT | O_TRUNC;
      }
      if (opts.createNew)
        return O_CREAT | O_EXCL;
      throw new errors.BadResource("EINVAL: Invalid fs flags.");
    }
    exports2.getCreationFlag = getCreationFlag;
    function getFsFlag(flags) {
      return getAccessFlag(flags) | getCreationFlag(flags);
    }
    exports2.getFsFlag = getFsFlag;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/open.js
var require_open = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/open.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.open = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var FsFile_js_1 = require_FsFile();
    var fs_flags_js_1 = require_fs_flags();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var nodeOpen = (0, util_1.promisify)(fs_1.open);
    var open = async function open2(path, { read, write, append, truncate, create, createNew, mode = 438 } = {
      read: true
    }) {
      const flagMode = (0, fs_flags_js_1.getFsFlag)({
        read,
        write,
        append,
        truncate,
        create,
        createNew
      });
      try {
        const fd = await nodeOpen(path, flagMode, mode);
        return new FsFile_js_1.File(fd);
      } catch (err) {
        throw (0, errorMap_js_1.default)(err);
      }
    };
    exports2.open = open;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/create.js
var require_create = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/create.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.create = void 0;
    var open_js_1 = require_open();
    var create = async function create2(path) {
      return await (0, open_js_1.open)(path, { write: true, create: true, truncate: true });
    };
    exports2.create = create;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/openSync.js
var require_openSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/openSync.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.openSync = void 0;
    var fs_1 = require("fs");
    var FsFile_js_1 = require_FsFile();
    var fs_flags_js_1 = require_fs_flags();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var openSync = function openSync2(path, { read, write, append, truncate, create, createNew, mode = 438 } = {
      read: true
    }) {
      const flagMode = (0, fs_flags_js_1.getFsFlag)({
        read,
        write,
        append,
        truncate,
        create,
        createNew
      });
      try {
        const fd = (0, fs_1.openSync)(path, flagMode, mode);
        return new FsFile_js_1.File(fd);
      } catch (err) {
        throw (0, errorMap_js_1.default)(err);
      }
    };
    exports2.openSync = openSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/createSync.js
var require_createSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/createSync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createSync = void 0;
    var openSync_js_1 = require_openSync();
    var createSync = function createSync2(path) {
      return (0, openSync_js_1.openSync)(path, {
        create: true,
        truncate: true,
        read: true,
        write: true
      });
    };
    exports2.createSync = createSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/cwd.js
var require_cwd = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/cwd.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.cwd = void 0;
    exports2.cwd = process.cwd;
  }
});

// dist/dnt/node_modules/isexe/dist/cjs/posix.js
var require_posix = __commonJS({
  "dist/dnt/node_modules/isexe/dist/cjs/posix.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sync = exports2.isexe = void 0;
    var fs_1 = require("fs");
    var promises_1 = require("fs/promises");
    var isexe = async (path, options = {}) => {
      const { ignoreErrors = false } = options;
      try {
        return checkStat(await (0, promises_1.stat)(path), options);
      } catch (e) {
        const er = e;
        if (ignoreErrors || er.code === "EACCES")
          return false;
        throw er;
      }
    };
    exports2.isexe = isexe;
    var sync = (path, options = {}) => {
      const { ignoreErrors = false } = options;
      try {
        return checkStat((0, fs_1.statSync)(path), options);
      } catch (e) {
        const er = e;
        if (ignoreErrors || er.code === "EACCES")
          return false;
        throw er;
      }
    };
    exports2.sync = sync;
    var checkStat = (stat, options) => stat.isFile() && checkMode(stat, options);
    var checkMode = (stat, options) => {
      const myUid = options.uid ?? process.getuid?.();
      const myGroups = options.groups ?? process.getgroups?.() ?? [];
      const myGid = options.gid ?? process.getgid?.() ?? myGroups[0];
      if (myUid === void 0 || myGid === void 0) {
        throw new Error("cannot get uid or gid");
      }
      const groups = /* @__PURE__ */ new Set([myGid, ...myGroups]);
      const mod = stat.mode;
      const uid = stat.uid;
      const gid = stat.gid;
      const u = parseInt("100", 8);
      const g = parseInt("010", 8);
      const o = parseInt("001", 8);
      const ug = u | g;
      return !!(mod & o || mod & g && groups.has(gid) || mod & u && uid === myUid || mod & ug && myUid === 0);
    };
  }
});

// dist/dnt/node_modules/isexe/dist/cjs/win32.js
var require_win32 = __commonJS({
  "dist/dnt/node_modules/isexe/dist/cjs/win32.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sync = exports2.isexe = void 0;
    var fs_1 = require("fs");
    var promises_1 = require("fs/promises");
    var isexe = async (path, options = {}) => {
      const { ignoreErrors = false } = options;
      try {
        return checkStat(await (0, promises_1.stat)(path), path, options);
      } catch (e) {
        const er = e;
        if (ignoreErrors || er.code === "EACCES")
          return false;
        throw er;
      }
    };
    exports2.isexe = isexe;
    var sync = (path, options = {}) => {
      const { ignoreErrors = false } = options;
      try {
        return checkStat((0, fs_1.statSync)(path), path, options);
      } catch (e) {
        const er = e;
        if (ignoreErrors || er.code === "EACCES")
          return false;
        throw er;
      }
    };
    exports2.sync = sync;
    var checkPathExt = (path, options) => {
      const { pathExt = process.env.PATHEXT || "" } = options;
      const peSplit = pathExt.split(";");
      if (peSplit.indexOf("") !== -1) {
        return true;
      }
      for (let i = 0; i < peSplit.length; i++) {
        const p = peSplit[i].toLowerCase();
        const ext = path.substring(path.length - p.length).toLowerCase();
        if (p && ext === p) {
          return true;
        }
      }
      return false;
    };
    var checkStat = (stat, path, options) => stat.isFile() && checkPathExt(path, options);
  }
});

// dist/dnt/node_modules/isexe/dist/cjs/options.js
var require_options = __commonJS({
  "dist/dnt/node_modules/isexe/dist/cjs/options.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// dist/dnt/node_modules/isexe/dist/cjs/index.js
var require_cjs = __commonJS({
  "dist/dnt/node_modules/isexe/dist/cjs/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sync = exports2.isexe = exports2.posix = exports2.win32 = void 0;
    var posix = __importStar(require_posix());
    exports2.posix = posix;
    var win32 = __importStar(require_win32());
    exports2.win32 = win32;
    __exportStar(require_options(), exports2);
    var platform = process.env._ISEXE_TEST_PLATFORM_ || process.platform;
    var impl = platform === "win32" ? win32 : posix;
    exports2.isexe = impl.isexe;
    exports2.sync = impl.sync;
  }
});

// dist/dnt/node_modules/which/lib/index.js
var require_lib = __commonJS({
  "dist/dnt/node_modules/which/lib/index.js"(exports2, module2) {
    var { isexe, sync: isexeSync } = require_cjs();
    var { join: join3, delimiter, sep, posix } = require("path");
    var isWindows2 = process.platform === "win32";
    var rSlash = new RegExp(`[${posix.sep}${sep === posix.sep ? "" : sep}]`.replace(/(\\)/g, "\\$1"));
    var rRel = new RegExp(`^\\.${rSlash.source}`);
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, {
      path: optPath = process.env.PATH,
      pathExt: optPathExt = process.env.PATHEXT,
      delimiter: optDelimiter = delimiter
    }) => {
      const pathEnv = cmd.match(rSlash) ? [""] : [
        // windows always checks the cwd first
        ...isWindows2 ? [process.cwd()] : [],
        ...(optPath || /* istanbul ignore next: very unusual */
        "").split(optDelimiter)
      ];
      if (isWindows2) {
        const pathExtExe = optPathExt || [".EXE", ".CMD", ".BAT", ".COM"].join(optDelimiter);
        const pathExt = pathExtExe.split(optDelimiter).flatMap((item) => [item, item.toLowerCase()]);
        if (cmd.includes(".") && pathExt[0] !== "") {
          pathExt.unshift("");
        }
        return { pathEnv, pathExt, pathExtExe };
      }
      return { pathEnv, pathExt: [""] };
    };
    var getPathPart = (raw, cmd) => {
      const pathPart = /^".*"$/.test(raw) ? raw.slice(1, -1) : raw;
      const prefix = !pathPart && rRel.test(cmd) ? cmd.slice(0, 2) : "";
      return prefix + join3(pathPart, cmd);
    };
    var which = async (cmd, opt = {}) => {
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (const envPart of pathEnv) {
        const p = getPathPart(envPart, cmd);
        for (const ext of pathExt) {
          const withExt = p + ext;
          const is = await isexe(withExt, { pathExt: pathExtExe, ignoreErrors: true });
          if (is) {
            if (!opt.all) {
              return withExt;
            }
            found.push(withExt);
          }
        }
      }
      if (opt.all && found.length) {
        return found;
      }
      if (opt.nothrow) {
        return null;
      }
      throw getNotFoundError(cmd);
    };
    var whichSync = (cmd, opt = {}) => {
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (const pathEnvPart of pathEnv) {
        const p = getPathPart(pathEnvPart, cmd);
        for (const ext of pathExt) {
          const withExt = p + ext;
          const is = isexeSync(withExt, { pathExt: pathExtExe, ignoreErrors: true });
          if (is) {
            if (!opt.all) {
              return withExt;
            }
            found.push(withExt);
          }
        }
      }
      if (opt.all && found.length) {
        return found;
      }
      if (opt.nothrow) {
        return null;
      }
      throw getNotFoundError(cmd);
    };
    module2.exports = which;
    which.sync = whichSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/execPath.js
var require_execPath = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/execPath.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.execPath = void 0;
    var which_1 = __importDefault(require_lib());
    var execPath = () => which_1.default.sync("deno");
    exports2.execPath = execPath;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/exit.js
var require_exit = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/exit.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.exit = void 0;
    var exit2 = function exit3(code2) {
      return process.exit(code2);
    };
    exports2.exit = exit2;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsync.js
var require_fsync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fsync = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var fsync = function fsync2(rid) {
      return (0, util_1.promisify)(fs_1.fsync)(rid);
    };
    exports2.fsync = fsync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsyncSync.js
var require_fsyncSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsyncSync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fsyncSync = void 0;
    var fs_1 = require("fs");
    var fsyncSync = function fsyncSync2(rid) {
      return (0, fs_1.fsyncSync)(rid);
    };
    exports2.fsyncSync = fsyncSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/gid.js
var require_gid = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/gid.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.gid = void 0;
    var process_1 = __importDefault(require("process"));
    exports2.gid = (_a = process_1.default.getgid) !== null && _a !== void 0 ? _a : (() => null);
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/hostname.js
var require_hostname = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/hostname.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.hostname = void 0;
    var os = __importStar(require("os"));
    var hostname = function hostname2() {
      return os.hostname();
    };
    exports2.hostname = hostname;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/inspect.js
var require_inspect = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/inspect.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.inspect = void 0;
    var util = __importStar(require("util"));
    var inspect2 = (value, options = {}) => util.inspect(value, options);
    exports2.inspect = inspect2;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/kill.js
var require_kill = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/kill.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.kill = void 0;
    var os_1 = __importDefault(require("os"));
    var process_1 = __importDefault(require("process"));
    var kill = function(pid, signo) {
      if (pid < 0 && os_1.default.platform() === "win32") {
        throw new TypeError("Invalid pid");
      }
      process_1.default.kill(pid, signo);
    };
    exports2.kill = kill;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/link.js
var require_link = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/link.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.link = void 0;
    var fs = __importStar(require("fs/promises"));
    exports2.link = fs.link;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/linkSync.js
var require_linkSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/linkSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.linkSync = void 0;
    var fs = __importStar(require("fs"));
    exports2.linkSync = fs.linkSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/Listener.js
var require_Listener = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/Listener.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet2 = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Listener_listener;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Listener = void 0;
    var close_js_1 = require_close();
    var errors = __importStar(require_errors());
    var Listener = class {
      constructor(rid, addr, listener) {
        this.rid = rid;
        this.addr = addr;
        _Listener_listener.set(this, void 0);
        __classPrivateFieldSet(this, _Listener_listener, listener, "f");
      }
      [(_Listener_listener = /* @__PURE__ */ new WeakMap(), Symbol.dispose)]() {
        this.close();
      }
      async accept() {
        if (!__classPrivateFieldGet2(this, _Listener_listener, "f")) {
          throw new errors.BadResource("Listener not initialised");
        }
        const result = await __classPrivateFieldGet2(this, _Listener_listener, "f").next();
        if (result.done) {
          throw new errors.BadResource("Server not listening");
        }
        return result.value;
      }
      async next() {
        let conn;
        try {
          conn = await this.accept();
        } catch (error) {
          if (error instanceof errors.BadResource) {
            return { value: void 0, done: true };
          }
          throw error;
        }
        return { value: conn, done: false };
      }
      return(value) {
        this.close();
        return Promise.resolve({ value, done: true });
      }
      close() {
        (0, close_js_1.close)(this.rid);
      }
      ref() {
        throw new Error("Not implemented");
      }
      unref() {
        throw new Error("Not implemented");
      }
      [Symbol.asyncIterator]() {
        return this;
      }
    };
    exports2.Listener = Listener;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/listen.js
var require_listen = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/listen.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.listen = void 0;
    var net_1 = require("net");
    var Conn_js_1 = require_Conn();
    var Listener_js_1 = require_Listener();
    async function* _listen(server, waitFor) {
      await waitFor;
      while (server.listening) {
        yield new Promise((resolve3) => server.once("connection", (socket) => {
          socket.on("error", (err) => console.error(err));
          const rid = socket._handle.fd;
          const localAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.remoteAddress,
            port: socket.remotePort,
            transport: "tcp"
          };
          resolve3(new Conn_js_1.Conn(rid, localAddr, remoteAddr));
        }));
      }
    }
    var listen = function listen2(options) {
      if (options.transport === "unix") {
        throw new Error("Unstable UnixListenOptions is not implemented");
      }
      const { port, hostname = "0.0.0.0", transport = "tcp" } = options;
      if (transport !== "tcp") {
        throw new Error("Deno.listen is only implemented for transport: tcp");
      }
      const server = (0, net_1.createServer)();
      const waitFor = new Promise((resolve3) => (
        // server._handle.fd is assigned immediately on .listen()
        server.listen(port, hostname, resolve3)
      ));
      const listener = new Listener_js_1.Listener(server._handle.fd, {
        hostname,
        port,
        transport: "tcp"
      }, _listen(server, waitFor));
      return listener;
    };
    exports2.listen = listen;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFileSync.js
var require_readTextFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFileSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.readTextFileSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readTextFileSync = function(path) {
      try {
        return fs.readFileSync(path, "utf8");
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports2.readTextFileSync = readTextFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/listenTls.js
var require_listenTls = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/listenTls.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.listenTls = void 0;
    var tls_1 = require("tls");
    var Conn_js_1 = require_Conn();
    var Listener_js_1 = require_Listener();
    var readTextFileSync_js_1 = require_readTextFileSync();
    async function* _listen(server, waitFor) {
      await waitFor;
      while (server.listening) {
        yield new Promise((resolve3) => server.once("secureConnection", (socket) => {
          socket.on("error", (err) => console.error(err));
          const rid = socket._handle.fd;
          const localAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.remoteAddress,
            port: socket.remotePort,
            transport: "tcp"
          };
          resolve3(new Conn_js_1.TlsConn(rid, localAddr, remoteAddr));
        }));
      }
    }
    var listenTls = function listen({ port, hostname = "0.0.0.0", transport = "tcp", certFile, keyFile }) {
      if (transport !== "tcp") {
        throw new Error("Deno.listen is only implemented for transport: tcp");
      }
      const [cert, key] = [certFile, keyFile].map((f) => f == null ? void 0 : (0, readTextFileSync_js_1.readTextFileSync)(f));
      const server = (0, tls_1.createServer)({ cert, key });
      const waitFor = new Promise((resolve3) => (
        // server._handle.fd is assigned immediately on .listen()
        server.listen(port, hostname, resolve3)
      ));
      const listener = new Listener_js_1.Listener(server._handle.fd, {
        hostname,
        port,
        transport: "tcp"
      }, _listen(server, waitFor));
      return listener;
    };
    exports2.listenTls = listenTls;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/loadavg.js
var require_loadavg = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/loadavg.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadavg = void 0;
    var os = __importStar(require("os"));
    var loadavg = function loadavg2() {
      return os.loadavg();
    };
    exports2.loadavg = loadavg;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstat.js
var require_lstat = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstat.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.lstat = void 0;
    var fs = __importStar(require("fs/promises"));
    var stat_js_1 = require_stat();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var lstat = async (path) => {
      try {
        return (0, stat_js_1.denoifyFileInfo)(await fs.lstat(path));
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports2.lstat = lstat;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstatSync.js
var require_lstatSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstatSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.lstatSync = void 0;
    var fs = __importStar(require("fs"));
    var stat_js_1 = require_stat();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var lstatSync = (path) => {
      try {
        return (0, stat_js_1.denoifyFileInfo)(fs.lstatSync(path));
      } catch (err) {
        throw (0, errorMap_js_1.default)(err);
      }
    };
    exports2.lstatSync = lstatSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDir.js
var require_makeTempDir = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDir.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.makeTempDir = void 0;
    var promises_1 = require("fs/promises");
    var path_1 = require("path");
    var os_1 = require("os");
    var makeTempDir = function makeTempDir2({ prefix = "" } = {}) {
      return (0, promises_1.mkdtemp)((0, path_1.join)((0, os_1.tmpdir)(), prefix || "/"));
    };
    exports2.makeTempDir = makeTempDir;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDirSync.js
var require_makeTempDirSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDirSync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.makeTempDirSync = void 0;
    var fs_1 = require("fs");
    var path_1 = require("path");
    var os_1 = require("os");
    var makeTempDirSync = function makeTempDirSync2({ prefix = "" } = {}) {
      return (0, fs_1.mkdtempSync)((0, path_1.join)((0, os_1.tmpdir)(), prefix || "/"));
    };
    exports2.makeTempDirSync = makeTempDirSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/random_id.js
var require_random_id = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/random_id.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.randomId = void 0;
    var randomId = () => {
      const n = (Math.random() * 1048575 * 1e6).toString(16);
      return "" + n.slice(0, 6);
    };
    exports2.randomId = randomId;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFile.js
var require_writeTextFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFile.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.writeTextFile = void 0;
    var fs = __importStar(require("fs/promises"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var fs_flags_js_1 = require_fs_flags();
    var writeTextFile = async function writeTextFile2(path, data2, { append = false, create = true, createNew = false, mode, signal } = {}) {
      const truncate = create && !append;
      const flag = (0, fs_flags_js_1.getFsFlag)({
        append,
        create,
        createNew,
        truncate,
        write: true
      });
      try {
        await fs.writeFile(path, data2, { flag, mode, signal });
        if (mode !== void 0)
          await fs.chmod(path, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.writeTextFile = writeTextFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFile.js
var require_makeTempFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFile.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.makeTempFile = void 0;
    var os_1 = require("os");
    var path_1 = require("path");
    var random_id_js_1 = require_random_id();
    var writeTextFile_js_1 = require_writeTextFile();
    var makeTempFile = async function makeTempFile2({ prefix = "" } = {}) {
      const name = (0, path_1.join)((0, os_1.tmpdir)(), prefix, (0, random_id_js_1.randomId)());
      await (0, writeTextFile_js_1.writeTextFile)(name, "");
      return name;
    };
    exports2.makeTempFile = makeTempFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFileSync.js
var require_writeTextFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFileSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.writeTextFileSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var writeTextFileSync = (path, data2, { append = false, create = true, mode } = {}) => {
      const flag = create ? append ? "a" : "w" : "r+";
      try {
        fs.writeFileSync(path, data2, { flag, mode });
        if (mode !== void 0)
          fs.chmodSync(path, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.writeTextFileSync = writeTextFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFileSync.js
var require_makeTempFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFileSync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.makeTempFileSync = void 0;
    var os_1 = require("os");
    var path_1 = require("path");
    var random_id_js_1 = require_random_id();
    var writeTextFileSync_js_1 = require_writeTextFileSync();
    var makeTempFileSync = function makeTempFileSync2({ prefix = "" } = {}) {
      const name = (0, path_1.join)((0, os_1.tmpdir)(), prefix, (0, random_id_js_1.randomId)());
      (0, writeTextFileSync_js_1.writeTextFileSync)(name, "");
      return name;
    };
    exports2.makeTempFileSync = makeTempFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/memoryUsage.js
var require_memoryUsage = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/memoryUsage.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.memoryUsage = void 0;
    exports2.memoryUsage = process.memoryUsage;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdir.js
var require_mkdir = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdir.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mkdir = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var mkdir = async function mkdir2(path, options) {
      try {
        await (0, promises_1.mkdir)(path, options);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "EEXIST") {
          throw new variables_js_1.errors.AlreadyExists(`File exists (os error 17), mkdir '${path}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.mkdir = mkdir;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdirSync.js
var require_mkdirSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdirSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mkdirSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var mkdirSync = (path, options) => {
      try {
        fs.mkdirSync(path, options);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "EEXIST") {
          throw new variables_js_1.errors.AlreadyExists(`File exists (os error 17), mkdir '${path}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.mkdirSync = mkdirSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/osRelease.js
var require_osRelease = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/osRelease.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.osRelease = void 0;
    var os_1 = require("os");
    var osRelease = function osRelease2() {
      return (0, os_1.release)();
    };
    exports2.osRelease = osRelease;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/osUptime.js
var require_osUptime = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/osUptime.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.osUptime = void 0;
    var os_1 = require("os");
    var osUptime = function osUptime2() {
      return (0, os_1.uptime)();
    };
    exports2.osUptime = osUptime;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDir.js
var require_readDir = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDir.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.readDir = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readDir = async function* readDir2(path) {
      try {
        for await (const e of await (0, promises_1.opendir)(String(path))) {
          const ent = {
            name: e.name,
            isFile: e.isFile(),
            isDirectory: e.isDirectory(),
            isSymlink: e.isSymbolicLink()
          };
          yield ent;
        }
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports2.readDir = readDir;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDirSync.js
var require_readDirSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDirSync.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.readDirSync = void 0;
    var fs_1 = require("fs");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readDirSync = function* readDir(path) {
      try {
        for (const e of (0, fs_1.readdirSync)(String(path), { withFileTypes: true })) {
          const ent = {
            name: e.name,
            isFile: e.isFile(),
            isDirectory: e.isDirectory(),
            isSymlink: e.isSymbolicLink()
          };
          yield ent;
        }
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports2.readDirSync = readDirSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFile.js
var require_readFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFile.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.readFile = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readFile = async function readFile2(path, { signal } = {}) {
      try {
        const buf = await (0, promises_1.readFile)(path, { signal });
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports2.readFile = readFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFileSync.js
var require_readFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFileSync.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.readFileSync = void 0;
    var fs_1 = require("fs");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readFileSync = function readFileSync2(path) {
      try {
        const buf = (0, fs_1.readFileSync)(path);
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports2.readFileSync = readFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLink.js
var require_readLink = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLink.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.readLink = void 0;
    var fs = __importStar(require("fs/promises"));
    exports2.readLink = fs.readlink;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLinkSync.js
var require_readLinkSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLinkSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.readLinkSync = void 0;
    var fs = __importStar(require("fs"));
    exports2.readLinkSync = fs.readlinkSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPath.js
var require_realPath = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPath.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.realPath = void 0;
    var fs = __importStar(require("fs/promises"));
    exports2.realPath = fs.realpath;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPathSync.js
var require_realPathSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPathSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.realPathSync = void 0;
    var fs = __importStar(require("fs"));
    exports2.realPathSync = fs.realpathSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/remove.js
var require_remove = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/remove.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.remove = void 0;
    var promises_1 = require("fs/promises");
    var remove = async function remove2(path, options = {}) {
      const innerOptions = options.recursive ? { recursive: true, force: true } : {};
      try {
        return await (0, promises_1.rm)(path, innerOptions);
      } catch (err) {
        if (err.code === "ERR_FS_EISDIR") {
          return await (0, promises_1.rmdir)(path, innerOptions);
        } else {
          throw err;
        }
      }
    };
    exports2.remove = remove;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSignalListener.js
var require_removeSignalListener = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSignalListener.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.removeSignalListener = void 0;
    var process_1 = __importDefault(require("process"));
    var removeSignalListener = (signal, handler) => {
      process_1.default.removeListener(signal, handler);
    };
    exports2.removeSignalListener = removeSignalListener;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSync.js
var require_removeSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.removeSync = void 0;
    var fs = __importStar(require("fs"));
    var removeSync = (path, options = {}) => {
      const innerOptions = options.recursive ? { recursive: true, force: true } : {};
      try {
        fs.rmSync(path, innerOptions);
      } catch (err) {
        if (err.code === "ERR_FS_EISDIR") {
          fs.rmdirSync(path, innerOptions);
        } else {
          throw err;
        }
      }
    };
    exports2.removeSync = removeSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/rename.js
var require_rename = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/rename.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.rename = void 0;
    var promises_1 = require("fs/promises");
    var rename = function rename2(oldpath, newpath) {
      return (0, promises_1.rename)(oldpath, newpath);
    };
    exports2.rename = rename;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/renameSync.js
var require_renameSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/renameSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.renameSync = void 0;
    var fs = __importStar(require("fs"));
    exports2.renameSync = fs.renameSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/resolveDns.js
var require_resolveDns = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/resolveDns.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveDns = void 0;
    var dns_1 = __importDefault(require("dns"));
    var resolveDns = function resolveDns2(query, recordType, options) {
      if (options) {
        throw Error(`resolveDns option not implemnted yet`);
      }
      switch (recordType) {
        case "A":
        /* falls through */
        case "AAAA":
        case "CNAME":
        case "NS":
        case "PTR":
          return new Promise((resolve3, reject) => {
            dns_1.default.resolve(query, recordType, (err, addresses) => {
              if (err) {
                reject(err);
              } else {
                resolve3(addresses);
              }
            });
          });
        case "ANAME":
        case "CAA":
        case "MX":
        case "NAPTR":
        case "SOA":
        case "SRV":
        case "TXT":
        default:
          throw Error(`resolveDns type ${recordType} not implemnted yet`);
      }
    };
    exports2.resolveDns = resolveDns;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/streams.js
var require_streams = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/streams.js"(exports2) {
    "use strict";
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet2 = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _BufferStreamReader_instances;
    var _BufferStreamReader_stream;
    var _BufferStreamReader_error;
    var _BufferStreamReader_ended;
    var _BufferStreamReader_pendingActions;
    var _BufferStreamReader_runPendingActions;
    var _StreamWriter_stream;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamWriter = exports2.BufferStreamReader = void 0;
    var BufferStreamReader = class {
      constructor(stream) {
        _BufferStreamReader_instances.add(this);
        _BufferStreamReader_stream.set(this, void 0);
        _BufferStreamReader_error.set(this, void 0);
        _BufferStreamReader_ended.set(this, false);
        _BufferStreamReader_pendingActions.set(this, []);
        __classPrivateFieldSet(this, _BufferStreamReader_stream, stream, "f");
        __classPrivateFieldGet2(this, _BufferStreamReader_stream, "f").pause();
        __classPrivateFieldGet2(this, _BufferStreamReader_stream, "f").on("error", (error) => {
          __classPrivateFieldSet(this, _BufferStreamReader_error, error, "f");
          __classPrivateFieldGet2(this, _BufferStreamReader_instances, "m", _BufferStreamReader_runPendingActions).call(this);
        });
        __classPrivateFieldGet2(this, _BufferStreamReader_stream, "f").on("readable", () => {
          __classPrivateFieldGet2(this, _BufferStreamReader_instances, "m", _BufferStreamReader_runPendingActions).call(this);
        });
        __classPrivateFieldGet2(this, _BufferStreamReader_stream, "f").on("end", () => {
          __classPrivateFieldSet(this, _BufferStreamReader_ended, true, "f");
          __classPrivateFieldGet2(this, _BufferStreamReader_instances, "m", _BufferStreamReader_runPendingActions).call(this);
        });
      }
      readAll() {
        return new Promise((resolve3, reject) => {
          const chunks = [];
          const action = () => {
            if (__classPrivateFieldGet2(this, _BufferStreamReader_error, "f")) {
              reject(__classPrivateFieldGet2(this, _BufferStreamReader_error, "f"));
              return;
            }
            const buffer = __classPrivateFieldGet2(this, _BufferStreamReader_stream, "f").read();
            if (buffer != null) {
              chunks.push(buffer);
              __classPrivateFieldGet2(this, _BufferStreamReader_pendingActions, "f").push(action);
            } else if (__classPrivateFieldGet2(this, _BufferStreamReader_ended, "f")) {
              const result = Buffer.concat(chunks);
              resolve3(result);
            } else {
              __classPrivateFieldGet2(this, _BufferStreamReader_pendingActions, "f").push(action);
            }
          };
          action();
        });
      }
      read(p) {
        return new Promise((resolve3, reject) => {
          const action = () => {
            if (__classPrivateFieldGet2(this, _BufferStreamReader_error, "f")) {
              reject(__classPrivateFieldGet2(this, _BufferStreamReader_error, "f"));
              return;
            }
            const readBuffer = __classPrivateFieldGet2(this, _BufferStreamReader_stream, "f").read(p.byteLength);
            if (readBuffer && readBuffer.byteLength > 0) {
              readBuffer.copy(p, 0, 0, readBuffer.byteLength);
              resolve3(readBuffer.byteLength);
              return;
            }
            if (__classPrivateFieldGet2(this, _BufferStreamReader_ended, "f")) {
              resolve3(null);
            } else {
              __classPrivateFieldGet2(this, _BufferStreamReader_pendingActions, "f").push(action);
            }
          };
          action();
        });
      }
    };
    exports2.BufferStreamReader = BufferStreamReader;
    _BufferStreamReader_stream = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_error = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_ended = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_pendingActions = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_instances = /* @__PURE__ */ new WeakSet(), _BufferStreamReader_runPendingActions = function _BufferStreamReader_runPendingActions2() {
      const errors = [];
      for (const action of __classPrivateFieldGet2(this, _BufferStreamReader_pendingActions, "f").splice(0)) {
        try {
          action();
        } catch (err) {
          errors.push(err);
        }
      }
      if (errors.length > 0) {
        throw errors.length > 1 ? new globalThis.AggregateError(errors) : errors[0];
      }
    };
    var StreamWriter = class {
      constructor(stream) {
        _StreamWriter_stream.set(this, void 0);
        __classPrivateFieldSet(this, _StreamWriter_stream, stream, "f");
      }
      write(p) {
        return new Promise((resolve3, reject) => {
          __classPrivateFieldGet2(this, _StreamWriter_stream, "f").write(p, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve3(p.byteLength);
            }
          });
        });
      }
    };
    exports2.StreamWriter = StreamWriter;
    _StreamWriter_stream = /* @__PURE__ */ new WeakMap();
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/run.js
var require_run = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/run.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet2 = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var _Process_process;
    var _Process_stderr;
    var _Process_stdout;
    var _Process_stdin;
    var _Process_status;
    var _Process_receivedStatus;
    var _ProcessReadStream_stream;
    var _ProcessReadStream_bufferStreamReader;
    var _ProcessReadStream_closed;
    var _ProcessWriteStream_stream;
    var _ProcessWriteStream_streamWriter;
    var _ProcessWriteStream_closed;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Process = exports2.run = void 0;
    var child_process_1 = __importDefault(require("child_process"));
    var fs_1 = __importDefault(require("fs"));
    var os_1 = __importDefault(require("os"));
    var url_1 = __importDefault(require("url"));
    var events_1 = require("events");
    var which_1 = __importDefault(require_lib());
    var streams_js_1 = require_streams();
    var errors = __importStar(require_errors());
    var run3 = function run4(options) {
      const [cmd, ...args] = options.cmd;
      if (options.cwd && !fs_1.default.existsSync(options.cwd)) {
        throw new Error("The directory name is invalid.");
      }
      const commandName = getCmd(cmd);
      if (!which_1.default.sync(commandName, { nothrow: true })) {
        throw new errors.NotFound("The system cannot find the file specified.");
      }
      const process2 = child_process_1.default.spawn(commandName, args, {
        cwd: options.cwd,
        env: getEnv2(options),
        uid: options.uid,
        gid: options.gid,
        shell: false,
        stdio: [
          getStdio(options.stdin, "in"),
          getStdio(options.stdout, "out"),
          getStdio(options.stderr, "out")
        ]
      });
      return new Process(process2);
    };
    exports2.run = run3;
    function getStdio(value, kind) {
      if (value === "inherit" || value == null) {
        return "inherit";
      } else if (value === "piped") {
        return "pipe";
      } else if (value === "null") {
        return "ignore";
      } else if (typeof value === "number") {
        switch (kind) {
          case "in":
            return fs_1.default.createReadStream(null, { fd: value });
          case "out":
            return fs_1.default.createWriteStream(null, { fd: value });
          default: {
            const _assertNever = kind;
            throw new Error("Unreachable.");
          }
        }
      } else {
        const _assertNever = value;
        throw new Error("Unknown value.");
      }
    }
    function getCmd(firstArg) {
      if (firstArg instanceof URL) {
        return url_1.default.fileURLToPath(firstArg);
      } else {
        return firstArg;
      }
    }
    function getEnv2(options) {
      var _a;
      const env = (_a = options.env) !== null && _a !== void 0 ? _a : {};
      for (const name in process.env) {
        if (!Object.prototype.hasOwnProperty.call(env, name)) {
          if (options.clearEnv) {
            if (os_1.default.platform() === "win32") {
              env[name] = "";
            } else {
              delete env[name];
            }
          } else {
            env[name] = process.env[name];
          }
        }
      }
      return env;
    }
    var Process = class {
      /** @internal */
      constructor(process2) {
        var _a, _b, _c;
        _Process_process.set(this, void 0);
        _Process_stderr.set(this, void 0);
        _Process_stdout.set(this, void 0);
        _Process_stdin.set(this, void 0);
        _Process_status.set(this, void 0);
        _Process_receivedStatus.set(this, false);
        __classPrivateFieldSet(this, _Process_process, process2, "f");
        __classPrivateFieldSet(this, _Process_stdout, (_a = ProcessReadStream.fromNullable(__classPrivateFieldGet2(this, _Process_process, "f").stdout)) !== null && _a !== void 0 ? _a : null, "f");
        __classPrivateFieldSet(this, _Process_stderr, (_b = ProcessReadStream.fromNullable(__classPrivateFieldGet2(this, _Process_process, "f").stderr)) !== null && _b !== void 0 ? _b : null, "f");
        __classPrivateFieldSet(this, _Process_stdin, (_c = ProcessWriteStream.fromNullable(__classPrivateFieldGet2(this, _Process_process, "f").stdin)) !== null && _c !== void 0 ? _c : null, "f");
        __classPrivateFieldSet(this, _Process_status, (0, events_1.once)(process2, "exit"), "f");
      }
      get rid() {
        return NaN;
      }
      get pid() {
        return __classPrivateFieldGet2(this, _Process_process, "f").pid;
      }
      get stdin() {
        return __classPrivateFieldGet2(this, _Process_stdin, "f");
      }
      get stdout() {
        return __classPrivateFieldGet2(this, _Process_stdout, "f");
      }
      get stderr() {
        return __classPrivateFieldGet2(this, _Process_stderr, "f");
      }
      async status() {
        const [receivedCode, signalName] = await __classPrivateFieldGet2(this, _Process_status, "f");
        const signal = signalName ? os_1.default.constants.signals[signalName] : receivedCode > 128 ? receivedCode - 128 : void 0;
        const code2 = receivedCode != null ? receivedCode : signal != null ? 128 + signal : void 0;
        const success = code2 === 0;
        __classPrivateFieldSet(this, _Process_receivedStatus, true, "f");
        return { code: code2, signal, success };
      }
      async output() {
        if (!__classPrivateFieldGet2(this, _Process_stdout, "f")) {
          throw new TypeError("stdout was not piped");
        }
        const result = await __classPrivateFieldGet2(this, _Process_stdout, "f").readAll();
        __classPrivateFieldGet2(this, _Process_stdout, "f").close();
        return result;
      }
      async stderrOutput() {
        if (!__classPrivateFieldGet2(this, _Process_stderr, "f")) {
          throw new TypeError("stderr was not piped");
        }
        const result = await __classPrivateFieldGet2(this, _Process_stderr, "f").readAll();
        __classPrivateFieldGet2(this, _Process_stderr, "f").close();
        return result;
      }
      close() {
        __classPrivateFieldGet2(this, _Process_process, "f").unref();
        __classPrivateFieldGet2(this, _Process_process, "f").kill();
      }
      kill(signo = "SIGTERM") {
        if (__classPrivateFieldGet2(this, _Process_receivedStatus, "f")) {
          throw new errors.NotFound("entity not found");
        }
        __classPrivateFieldGet2(this, _Process_process, "f").kill(signo);
      }
    };
    exports2.Process = Process;
    _Process_process = /* @__PURE__ */ new WeakMap(), _Process_stderr = /* @__PURE__ */ new WeakMap(), _Process_stdout = /* @__PURE__ */ new WeakMap(), _Process_stdin = /* @__PURE__ */ new WeakMap(), _Process_status = /* @__PURE__ */ new WeakMap(), _Process_receivedStatus = /* @__PURE__ */ new WeakMap();
    var ProcessReadStream = class _ProcessReadStream {
      constructor(stream) {
        _ProcessReadStream_stream.set(this, void 0);
        _ProcessReadStream_bufferStreamReader.set(this, void 0);
        _ProcessReadStream_closed.set(this, false);
        __classPrivateFieldSet(this, _ProcessReadStream_stream, stream, "f");
        __classPrivateFieldSet(this, _ProcessReadStream_bufferStreamReader, new streams_js_1.BufferStreamReader(stream), "f");
      }
      static fromNullable(stream) {
        return stream ? new _ProcessReadStream(stream) : void 0;
      }
      readAll() {
        if (__classPrivateFieldGet2(this, _ProcessReadStream_closed, "f")) {
          return Promise.resolve(new Uint8Array(0));
        } else {
          return __classPrivateFieldGet2(this, _ProcessReadStream_bufferStreamReader, "f").readAll();
        }
      }
      read(p) {
        if (__classPrivateFieldGet2(this, _ProcessReadStream_closed, "f")) {
          return Promise.resolve(null);
        } else {
          return __classPrivateFieldGet2(this, _ProcessReadStream_bufferStreamReader, "f").read(p);
        }
      }
      close() {
        __classPrivateFieldSet(this, _ProcessReadStream_closed, true, "f");
        __classPrivateFieldGet2(this, _ProcessReadStream_stream, "f").destroy();
      }
      get readable() {
        throw new Error("Not implemented.");
      }
      get writable() {
        throw new Error("Not implemented.");
      }
    };
    _ProcessReadStream_stream = /* @__PURE__ */ new WeakMap(), _ProcessReadStream_bufferStreamReader = /* @__PURE__ */ new WeakMap(), _ProcessReadStream_closed = /* @__PURE__ */ new WeakMap();
    var ProcessWriteStream = class _ProcessWriteStream {
      constructor(stream) {
        _ProcessWriteStream_stream.set(this, void 0);
        _ProcessWriteStream_streamWriter.set(this, void 0);
        _ProcessWriteStream_closed.set(this, false);
        __classPrivateFieldSet(this, _ProcessWriteStream_stream, stream, "f");
        __classPrivateFieldSet(this, _ProcessWriteStream_streamWriter, new streams_js_1.StreamWriter(stream), "f");
      }
      static fromNullable(stream) {
        return stream ? new _ProcessWriteStream(stream) : void 0;
      }
      write(p) {
        if (__classPrivateFieldGet2(this, _ProcessWriteStream_closed, "f")) {
          return Promise.resolve(0);
        } else {
          return __classPrivateFieldGet2(this, _ProcessWriteStream_streamWriter, "f").write(p);
        }
      }
      close() {
        __classPrivateFieldSet(this, _ProcessWriteStream_closed, true, "f");
        __classPrivateFieldGet2(this, _ProcessWriteStream_stream, "f").end();
      }
    };
    _ProcessWriteStream_stream = /* @__PURE__ */ new WeakMap(), _ProcessWriteStream_streamWriter = /* @__PURE__ */ new WeakMap(), _ProcessWriteStream_closed = /* @__PURE__ */ new WeakMap();
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/shutdown.js
var require_shutdown = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/shutdown.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.shutdown = void 0;
    var net_1 = require("net");
    var shutdown = async function shutdown2(rid) {
      await new Promise((resolve3) => new net_1.Socket({ fd: rid }).end(resolve3));
    };
    exports2.shutdown = shutdown;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/statSync.js
var require_statSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/statSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.statSync = void 0;
    var fs = __importStar(require("fs"));
    var stat_js_1 = require_stat();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var statSync = (path) => {
      try {
        return (0, stat_js_1.denoifyFileInfo)(fs.statSync(path));
      } catch (err) {
        throw (0, errorMap_js_1.default)(err);
      }
    };
    exports2.statSync = statSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlink.js
var require_symlink = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlink.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.symlink = void 0;
    var fs = __importStar(require("fs/promises"));
    var symlink = async (oldpath, newpath, options) => await fs.symlink(oldpath, newpath, options === null || options === void 0 ? void 0 : options.type);
    exports2.symlink = symlink;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlinkSync.js
var require_symlinkSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlinkSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.symlinkSync = void 0;
    var fs = __importStar(require("fs"));
    var symlinkSync = (oldpath, newpath, options) => fs.symlinkSync(oldpath, newpath, options === null || options === void 0 ? void 0 : options.type);
    exports2.symlinkSync = symlinkSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno-test/dist/definitions.js
var require_definitions = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno-test/dist/definitions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.testDefinitions = void 0;
    exports2.testDefinitions = [];
  }
});

// dist/dnt/node_modules/@deno/shim-deno-test/dist/test.js
var require_test = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno-test/dist/test.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.test = void 0;
    var definitions_js_1 = require_definitions();
    exports2.test = Object.assign(function test() {
      handleDefinition(arguments);
    }, {
      ignore() {
        handleDefinition(arguments, { ignore: true });
      },
      only() {
        handleDefinition(arguments, { only: true });
      }
    });
    function handleDefinition(args, additional) {
      var _a, _b;
      let testDef;
      const firstArg = args[0];
      const secondArg = args[1];
      const thirdArg = args[2];
      if (typeof firstArg === "string") {
        if (typeof secondArg === "object") {
          if (typeof thirdArg === "function") {
            if (secondArg.fn != null) {
              throw new TypeError("Unexpected 'fn' field in options, test function is already provided as the third argument.");
            }
          }
          if (secondArg.name != null) {
            throw new TypeError("Unexpected 'name' field in options, test name is already provided as the first argument.");
          }
          testDef = { name: firstArg, fn: thirdArg, ...secondArg };
        } else {
          testDef = { name: firstArg, fn: secondArg };
        }
      } else if (firstArg instanceof Function) {
        if (firstArg.name.length === 0) {
          throw new TypeError("The test function must have a name");
        }
        testDef = { fn: firstArg, name: firstArg.name };
        if (secondArg != null) {
          throw new TypeError("Unexpected second argument to Deno.test()");
        }
      } else if (typeof firstArg === "object") {
        testDef = { ...firstArg };
        if (typeof secondArg === "function") {
          testDef.fn = secondArg;
          if (firstArg.fn != null) {
            throw new TypeError("Unexpected 'fn' field in options, test function is already provided as the second argument.");
          }
          if (testDef.name == null) {
            if (secondArg.name.length === 0) {
              throw new TypeError("The test function must have a name");
            }
            testDef.name = secondArg.name;
          }
        } else {
          if (typeof firstArg.fn !== "function") {
            throw new TypeError("Expected 'fn' field in the first argument to be a test function.");
          }
        }
      } else {
        throw new TypeError("Unknown test overload");
      }
      if (typeof testDef.fn !== "function") {
        throw new TypeError("Missing test function");
      }
      if (((_b = (_a = testDef.name) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) === 0) {
        throw new TypeError("The test name can't be empty");
      }
      if (additional === null || additional === void 0 ? void 0 : additional.ignore) {
        testDef.ignore = true;
      }
      if (additional === null || additional === void 0 ? void 0 : additional.only) {
        testDef.only = true;
      }
      definitions_js_1.testDefinitions.push(testDef);
    }
  }
});

// dist/dnt/node_modules/@deno/shim-deno-test/dist/index.js
var require_dist = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno-test/dist/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.testDefinitions = exports2.Deno = void 0;
    exports2.Deno = require_test();
    __exportStar(require_test(), exports2);
    var definitions_js_1 = require_definitions();
    Object.defineProperty(exports2, "testDefinitions", { enumerable: true, get: function() {
      return definitions_js_1.testDefinitions;
    } });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/test.js
var require_test2 = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/test.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.test = void 0;
    var shim_deno_test_1 = require_dist();
    Object.defineProperty(exports2, "test", { enumerable: true, get: function() {
      return shim_deno_test_1.test;
    } });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncate.js
var require_truncate = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncate.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.truncate = void 0;
    var fs = __importStar(require("fs/promises"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var truncate = async (name, len) => {
      try {
        return await fs.truncate(name, len);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), truncate '${name}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.truncate = truncate;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncateSync.js
var require_truncateSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncateSync.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.truncateSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var truncateSync = (name, len) => {
      try {
        return fs.truncateSync(name, len);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), truncate '${name}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.truncateSync = truncateSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/uid.js
var require_uid = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/uid.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.uid = void 0;
    var process_1 = __importDefault(require("process"));
    exports2.uid = (_a = process_1.default.getuid) !== null && _a !== void 0 ? _a : (() => null);
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/iterutil.js
var require_iterutil = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/iterutil.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.merge = exports2.filterAsync = exports2.mapAsync = exports2.map = void 0;
    function* map(iter, f) {
      for (const i of iter) {
        yield f(i);
      }
    }
    exports2.map = map;
    async function* mapAsync(iter, f) {
      for await (const i of iter) {
        yield f(i);
      }
    }
    exports2.mapAsync = mapAsync;
    async function* filterAsync(iter, filter) {
      for await (const i of iter) {
        if (filter(i)) {
          yield i;
        }
      }
    }
    exports2.filterAsync = filterAsync;
    async function* merge(iterables) {
      const racers = new Map(map(map(iterables, (iter) => iter[Symbol.asyncIterator]()), (iter) => [iter, iter.next()]));
      while (racers.size > 0) {
        const winner = await Promise.race(map(racers.entries(), ([iter, prom]) => prom.then((result) => ({ result, iter }))));
        if (winner.result.done) {
          racers.delete(winner.iter);
        } else {
          yield await winner.result.value;
          racers.set(winner.iter, winner.iter.next());
        }
      }
    }
    exports2.merge = merge;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/watchFs.js
var require_watchFs = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/watchFs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.watchFs = void 0;
    var promises_1 = require("fs/promises");
    var path_1 = require("path");
    var iterutil_js_1 = require_iterutil();
    var watchFs = function watchFs2(paths, options = { recursive: true }) {
      paths = Array.isArray(paths) ? paths : [paths];
      const ac = new AbortController();
      const { signal } = ac;
      const rid = -1;
      const masterWatcher = (0, iterutil_js_1.merge)(paths.map((path) => (0, iterutil_js_1.mapAsync)((0, iterutil_js_1.filterAsync)((0, promises_1.watch)(path, { recursive: options === null || options === void 0 ? void 0 : options.recursive, signal }), (info) => info.filename != null), (info) => ({
        kind: "modify",
        paths: [(0, path_1.resolve)(path, info.filename)]
      }))));
      function close() {
        ac.abort();
      }
      return Object.assign(masterWatcher, {
        rid,
        close,
        [Symbol.dispose]: close
      });
    };
    exports2.watchFs = watchFs;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFile.js
var require_writeFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFile.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.writeFile = void 0;
    var fs = __importStar(require("fs/promises"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var fs_flags_js_1 = require_fs_flags();
    var writeFile = async function writeFile2(path, data2, { append = false, create = true, createNew = false, mode, signal } = {}) {
      const truncate = create && !append;
      const flag = (0, fs_flags_js_1.getFsFlag)({ append, create, createNew, truncate, write: true });
      try {
        await fs.writeFile(path, data2, { flag, signal });
        if (mode != null)
          await fs.chmod(path, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.writeFile = writeFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFileSync.js
var require_writeFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFileSync.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.writeFileSync = void 0;
    var os_1 = require("os");
    var openSync_js_1 = require_openSync();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var statSync_js_1 = require_statSync();
    var chmodSync_js_1 = require_chmodSync();
    var writeFileSync = function writeFileSync2(path, data2, options = {}) {
      try {
        if (options.create !== void 0) {
          const create = !!options.create;
          if (!create) {
            (0, statSync_js_1.statSync)(path);
          }
        }
        const openOptions = {
          write: true,
          create: true,
          createNew: options.createNew,
          append: !!options.append,
          truncate: !options.append
        };
        const file = (0, openSync_js_1.openSync)(path, openOptions);
        if (options.mode !== void 0 && options.mode !== null && (0, os_1.platform)() !== "win32") {
          (0, chmodSync_js_1.chmodSync)(path, options.mode);
        }
        let nwritten = 0;
        while (nwritten < data2.length) {
          nwritten += file.writeSync(data2.subarray(nwritten));
        }
        file.close();
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports2.writeFileSync = writeFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/args.js
var require_args = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/args.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.args = void 0;
    exports2.args = process.argv.slice(2);
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions.js
var require_functions = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.read = exports2.osUptime = exports2.osRelease = exports2.openSync = exports2.open = exports2.mkdirSync = exports2.mkdir = exports2.memoryUsage = exports2.makeTempFileSync = exports2.makeTempFile = exports2.makeTempDirSync = exports2.makeTempDir = exports2.lstatSync = exports2.lstat = exports2.loadavg = exports2.listenTls = exports2.listen = exports2.linkSync = exports2.link = exports2.kill = exports2.inspect = exports2.hostname = exports2.gid = exports2.ftruncateSync = exports2.ftruncate = exports2.fsyncSync = exports2.fsync = exports2.fstatSync = exports2.fstat = exports2.fdatasyncSync = exports2.fdatasync = exports2.exit = exports2.execPath = exports2.cwd = exports2.createSync = exports2.create = exports2.copyFileSync = exports2.copyFile = exports2.copy = exports2.consoleSize = exports2.connectTls = exports2.connect = exports2.close = exports2.chownSync = exports2.chown = exports2.chmodSync = exports2.chmod = exports2.chdir = exports2.addSignalListener = exports2.isatty = void 0;
    exports2.utimeSync = exports2.utime = exports2.futimeSync = exports2.futime = exports2.args = exports2.writeTextFileSync = exports2.writeTextFile = exports2.writeSync = exports2.writeFileSync = exports2.writeFile = exports2.write = exports2.watchFs = exports2.uid = exports2.truncateSync = exports2.truncate = exports2.test = exports2.symlinkSync = exports2.symlink = exports2.statSync = exports2.stat = exports2.shutdown = exports2.run = exports2.Process = exports2.resolveDns = exports2.renameSync = exports2.rename = exports2.removeSync = exports2.removeSignalListener = exports2.remove = exports2.realPathSync = exports2.realPath = exports2.readTextFileSync = exports2.readTextFile = exports2.readSync = exports2.readLinkSync = exports2.readLink = exports2.readFileSync = exports2.readFile = exports2.readDirSync = exports2.readDir = void 0;
    var fs_1 = __importDefault(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var tty_1 = require("tty");
    Object.defineProperty(exports2, "isatty", { enumerable: true, get: function() {
      return tty_1.isatty;
    } });
    var addSignalListener_js_1 = require_addSignalListener();
    Object.defineProperty(exports2, "addSignalListener", { enumerable: true, get: function() {
      return addSignalListener_js_1.addSignalListener;
    } });
    var chdir_js_1 = require_chdir();
    Object.defineProperty(exports2, "chdir", { enumerable: true, get: function() {
      return chdir_js_1.chdir;
    } });
    var chmod_js_1 = require_chmod();
    Object.defineProperty(exports2, "chmod", { enumerable: true, get: function() {
      return chmod_js_1.chmod;
    } });
    var chmodSync_js_1 = require_chmodSync();
    Object.defineProperty(exports2, "chmodSync", { enumerable: true, get: function() {
      return chmodSync_js_1.chmodSync;
    } });
    var chown_js_1 = require_chown();
    Object.defineProperty(exports2, "chown", { enumerable: true, get: function() {
      return chown_js_1.chown;
    } });
    var chownSync_js_1 = require_chownSync();
    Object.defineProperty(exports2, "chownSync", { enumerable: true, get: function() {
      return chownSync_js_1.chownSync;
    } });
    var close_js_1 = require_close();
    Object.defineProperty(exports2, "close", { enumerable: true, get: function() {
      return close_js_1.close;
    } });
    var connect_js_1 = require_connect();
    Object.defineProperty(exports2, "connect", { enumerable: true, get: function() {
      return connect_js_1.connect;
    } });
    var connectTls_js_1 = require_connectTls();
    Object.defineProperty(exports2, "connectTls", { enumerable: true, get: function() {
      return connectTls_js_1.connectTls;
    } });
    var consoleSize_js_1 = require_consoleSize();
    Object.defineProperty(exports2, "consoleSize", { enumerable: true, get: function() {
      return consoleSize_js_1.consoleSize;
    } });
    var copy_js_1 = require_copy();
    Object.defineProperty(exports2, "copy", { enumerable: true, get: function() {
      return copy_js_1.copy;
    } });
    var copyFile_js_1 = require_copyFile();
    Object.defineProperty(exports2, "copyFile", { enumerable: true, get: function() {
      return copyFile_js_1.copyFile;
    } });
    var copyFileSync_js_1 = require_copyFileSync();
    Object.defineProperty(exports2, "copyFileSync", { enumerable: true, get: function() {
      return copyFileSync_js_1.copyFileSync;
    } });
    var create_js_1 = require_create();
    Object.defineProperty(exports2, "create", { enumerable: true, get: function() {
      return create_js_1.create;
    } });
    var createSync_js_1 = require_createSync();
    Object.defineProperty(exports2, "createSync", { enumerable: true, get: function() {
      return createSync_js_1.createSync;
    } });
    var cwd_js_1 = require_cwd();
    Object.defineProperty(exports2, "cwd", { enumerable: true, get: function() {
      return cwd_js_1.cwd;
    } });
    var execPath_js_1 = require_execPath();
    Object.defineProperty(exports2, "execPath", { enumerable: true, get: function() {
      return execPath_js_1.execPath;
    } });
    var exit_js_1 = require_exit();
    Object.defineProperty(exports2, "exit", { enumerable: true, get: function() {
      return exit_js_1.exit;
    } });
    var fdatasync_js_1 = require_fdatasync();
    Object.defineProperty(exports2, "fdatasync", { enumerable: true, get: function() {
      return fdatasync_js_1.fdatasync;
    } });
    var fdatasyncSync_js_1 = require_fdatasyncSync();
    Object.defineProperty(exports2, "fdatasyncSync", { enumerable: true, get: function() {
      return fdatasyncSync_js_1.fdatasyncSync;
    } });
    var fstat_js_1 = require_fstat();
    Object.defineProperty(exports2, "fstat", { enumerable: true, get: function() {
      return fstat_js_1.fstat;
    } });
    var fstatSync_js_1 = require_fstatSync();
    Object.defineProperty(exports2, "fstatSync", { enumerable: true, get: function() {
      return fstatSync_js_1.fstatSync;
    } });
    var fsync_js_1 = require_fsync();
    Object.defineProperty(exports2, "fsync", { enumerable: true, get: function() {
      return fsync_js_1.fsync;
    } });
    var fsyncSync_js_1 = require_fsyncSync();
    Object.defineProperty(exports2, "fsyncSync", { enumerable: true, get: function() {
      return fsyncSync_js_1.fsyncSync;
    } });
    var ftruncate_js_1 = require_ftruncate();
    Object.defineProperty(exports2, "ftruncate", { enumerable: true, get: function() {
      return ftruncate_js_1.ftruncate;
    } });
    var ftruncateSync_js_1 = require_ftruncateSync();
    Object.defineProperty(exports2, "ftruncateSync", { enumerable: true, get: function() {
      return ftruncateSync_js_1.ftruncateSync;
    } });
    var gid_js_1 = require_gid();
    Object.defineProperty(exports2, "gid", { enumerable: true, get: function() {
      return gid_js_1.gid;
    } });
    var hostname_js_1 = require_hostname();
    Object.defineProperty(exports2, "hostname", { enumerable: true, get: function() {
      return hostname_js_1.hostname;
    } });
    var inspect_js_1 = require_inspect();
    Object.defineProperty(exports2, "inspect", { enumerable: true, get: function() {
      return inspect_js_1.inspect;
    } });
    var kill_js_1 = require_kill();
    Object.defineProperty(exports2, "kill", { enumerable: true, get: function() {
      return kill_js_1.kill;
    } });
    var link_js_1 = require_link();
    Object.defineProperty(exports2, "link", { enumerable: true, get: function() {
      return link_js_1.link;
    } });
    var linkSync_js_1 = require_linkSync();
    Object.defineProperty(exports2, "linkSync", { enumerable: true, get: function() {
      return linkSync_js_1.linkSync;
    } });
    var listen_js_1 = require_listen();
    Object.defineProperty(exports2, "listen", { enumerable: true, get: function() {
      return listen_js_1.listen;
    } });
    var listenTls_js_1 = require_listenTls();
    Object.defineProperty(exports2, "listenTls", { enumerable: true, get: function() {
      return listenTls_js_1.listenTls;
    } });
    var loadavg_js_1 = require_loadavg();
    Object.defineProperty(exports2, "loadavg", { enumerable: true, get: function() {
      return loadavg_js_1.loadavg;
    } });
    var lstat_js_1 = require_lstat();
    Object.defineProperty(exports2, "lstat", { enumerable: true, get: function() {
      return lstat_js_1.lstat;
    } });
    var lstatSync_js_1 = require_lstatSync();
    Object.defineProperty(exports2, "lstatSync", { enumerable: true, get: function() {
      return lstatSync_js_1.lstatSync;
    } });
    var makeTempDir_js_1 = require_makeTempDir();
    Object.defineProperty(exports2, "makeTempDir", { enumerable: true, get: function() {
      return makeTempDir_js_1.makeTempDir;
    } });
    var makeTempDirSync_js_1 = require_makeTempDirSync();
    Object.defineProperty(exports2, "makeTempDirSync", { enumerable: true, get: function() {
      return makeTempDirSync_js_1.makeTempDirSync;
    } });
    var makeTempFile_js_1 = require_makeTempFile();
    Object.defineProperty(exports2, "makeTempFile", { enumerable: true, get: function() {
      return makeTempFile_js_1.makeTempFile;
    } });
    var makeTempFileSync_js_1 = require_makeTempFileSync();
    Object.defineProperty(exports2, "makeTempFileSync", { enumerable: true, get: function() {
      return makeTempFileSync_js_1.makeTempFileSync;
    } });
    var memoryUsage_js_1 = require_memoryUsage();
    Object.defineProperty(exports2, "memoryUsage", { enumerable: true, get: function() {
      return memoryUsage_js_1.memoryUsage;
    } });
    var mkdir_js_1 = require_mkdir();
    Object.defineProperty(exports2, "mkdir", { enumerable: true, get: function() {
      return mkdir_js_1.mkdir;
    } });
    var mkdirSync_js_1 = require_mkdirSync();
    Object.defineProperty(exports2, "mkdirSync", { enumerable: true, get: function() {
      return mkdirSync_js_1.mkdirSync;
    } });
    var open_js_1 = require_open();
    Object.defineProperty(exports2, "open", { enumerable: true, get: function() {
      return open_js_1.open;
    } });
    var openSync_js_1 = require_openSync();
    Object.defineProperty(exports2, "openSync", { enumerable: true, get: function() {
      return openSync_js_1.openSync;
    } });
    var osRelease_js_1 = require_osRelease();
    Object.defineProperty(exports2, "osRelease", { enumerable: true, get: function() {
      return osRelease_js_1.osRelease;
    } });
    var osUptime_js_1 = require_osUptime();
    Object.defineProperty(exports2, "osUptime", { enumerable: true, get: function() {
      return osUptime_js_1.osUptime;
    } });
    var read_js_1 = require_read();
    Object.defineProperty(exports2, "read", { enumerable: true, get: function() {
      return read_js_1.read;
    } });
    var readDir_js_1 = require_readDir();
    Object.defineProperty(exports2, "readDir", { enumerable: true, get: function() {
      return readDir_js_1.readDir;
    } });
    var readDirSync_js_1 = require_readDirSync();
    Object.defineProperty(exports2, "readDirSync", { enumerable: true, get: function() {
      return readDirSync_js_1.readDirSync;
    } });
    var readFile_js_1 = require_readFile();
    Object.defineProperty(exports2, "readFile", { enumerable: true, get: function() {
      return readFile_js_1.readFile;
    } });
    var readFileSync_js_1 = require_readFileSync();
    Object.defineProperty(exports2, "readFileSync", { enumerable: true, get: function() {
      return readFileSync_js_1.readFileSync;
    } });
    var readLink_js_1 = require_readLink();
    Object.defineProperty(exports2, "readLink", { enumerable: true, get: function() {
      return readLink_js_1.readLink;
    } });
    var readLinkSync_js_1 = require_readLinkSync();
    Object.defineProperty(exports2, "readLinkSync", { enumerable: true, get: function() {
      return readLinkSync_js_1.readLinkSync;
    } });
    var readSync_js_1 = require_readSync();
    Object.defineProperty(exports2, "readSync", { enumerable: true, get: function() {
      return readSync_js_1.readSync;
    } });
    var readTextFile_js_1 = require_readTextFile();
    Object.defineProperty(exports2, "readTextFile", { enumerable: true, get: function() {
      return readTextFile_js_1.readTextFile;
    } });
    var readTextFileSync_js_1 = require_readTextFileSync();
    Object.defineProperty(exports2, "readTextFileSync", { enumerable: true, get: function() {
      return readTextFileSync_js_1.readTextFileSync;
    } });
    var realPath_js_1 = require_realPath();
    Object.defineProperty(exports2, "realPath", { enumerable: true, get: function() {
      return realPath_js_1.realPath;
    } });
    var realPathSync_js_1 = require_realPathSync();
    Object.defineProperty(exports2, "realPathSync", { enumerable: true, get: function() {
      return realPathSync_js_1.realPathSync;
    } });
    var remove_js_1 = require_remove();
    Object.defineProperty(exports2, "remove", { enumerable: true, get: function() {
      return remove_js_1.remove;
    } });
    var removeSignalListener_js_1 = require_removeSignalListener();
    Object.defineProperty(exports2, "removeSignalListener", { enumerable: true, get: function() {
      return removeSignalListener_js_1.removeSignalListener;
    } });
    var removeSync_js_1 = require_removeSync();
    Object.defineProperty(exports2, "removeSync", { enumerable: true, get: function() {
      return removeSync_js_1.removeSync;
    } });
    var rename_js_1 = require_rename();
    Object.defineProperty(exports2, "rename", { enumerable: true, get: function() {
      return rename_js_1.rename;
    } });
    var renameSync_js_1 = require_renameSync();
    Object.defineProperty(exports2, "renameSync", { enumerable: true, get: function() {
      return renameSync_js_1.renameSync;
    } });
    var resolveDns_js_1 = require_resolveDns();
    Object.defineProperty(exports2, "resolveDns", { enumerable: true, get: function() {
      return resolveDns_js_1.resolveDns;
    } });
    var run_js_1 = require_run();
    Object.defineProperty(exports2, "Process", { enumerable: true, get: function() {
      return run_js_1.Process;
    } });
    Object.defineProperty(exports2, "run", { enumerable: true, get: function() {
      return run_js_1.run;
    } });
    var shutdown_js_1 = require_shutdown();
    Object.defineProperty(exports2, "shutdown", { enumerable: true, get: function() {
      return shutdown_js_1.shutdown;
    } });
    var stat_js_1 = require_stat();
    Object.defineProperty(exports2, "stat", { enumerable: true, get: function() {
      return stat_js_1.stat;
    } });
    var statSync_js_1 = require_statSync();
    Object.defineProperty(exports2, "statSync", { enumerable: true, get: function() {
      return statSync_js_1.statSync;
    } });
    var symlink_js_1 = require_symlink();
    Object.defineProperty(exports2, "symlink", { enumerable: true, get: function() {
      return symlink_js_1.symlink;
    } });
    var symlinkSync_js_1 = require_symlinkSync();
    Object.defineProperty(exports2, "symlinkSync", { enumerable: true, get: function() {
      return symlinkSync_js_1.symlinkSync;
    } });
    var test_js_1 = require_test2();
    Object.defineProperty(exports2, "test", { enumerable: true, get: function() {
      return test_js_1.test;
    } });
    var truncate_js_1 = require_truncate();
    Object.defineProperty(exports2, "truncate", { enumerable: true, get: function() {
      return truncate_js_1.truncate;
    } });
    var truncateSync_js_1 = require_truncateSync();
    Object.defineProperty(exports2, "truncateSync", { enumerable: true, get: function() {
      return truncateSync_js_1.truncateSync;
    } });
    var uid_js_1 = require_uid();
    Object.defineProperty(exports2, "uid", { enumerable: true, get: function() {
      return uid_js_1.uid;
    } });
    var watchFs_js_1 = require_watchFs();
    Object.defineProperty(exports2, "watchFs", { enumerable: true, get: function() {
      return watchFs_js_1.watchFs;
    } });
    var write_js_1 = require_write();
    Object.defineProperty(exports2, "write", { enumerable: true, get: function() {
      return write_js_1.write;
    } });
    var writeFile_js_1 = require_writeFile();
    Object.defineProperty(exports2, "writeFile", { enumerable: true, get: function() {
      return writeFile_js_1.writeFile;
    } });
    var writeFileSync_js_1 = require_writeFileSync();
    Object.defineProperty(exports2, "writeFileSync", { enumerable: true, get: function() {
      return writeFileSync_js_1.writeFileSync;
    } });
    var writeSync_js_1 = require_writeSync();
    Object.defineProperty(exports2, "writeSync", { enumerable: true, get: function() {
      return writeSync_js_1.writeSync;
    } });
    var writeTextFile_js_1 = require_writeTextFile();
    Object.defineProperty(exports2, "writeTextFile", { enumerable: true, get: function() {
      return writeTextFile_js_1.writeTextFile;
    } });
    var writeTextFileSync_js_1 = require_writeTextFileSync();
    Object.defineProperty(exports2, "writeTextFileSync", { enumerable: true, get: function() {
      return writeTextFileSync_js_1.writeTextFileSync;
    } });
    var args_js_1 = require_args();
    Object.defineProperty(exports2, "args", { enumerable: true, get: function() {
      return args_js_1.args;
    } });
    var futime = async function(rid, atime, mtime) {
      try {
        await new Promise((resolve3, reject) => {
          fs_1.default.futimes(rid, atime, mtime, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve3();
            }
          });
        });
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.futime = futime;
    var futimeSync = function(rid, atime, mtime) {
      try {
        fs_1.default.futimesSync(rid, atime, mtime);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.futimeSync = futimeSync;
    var utime = async function(path, atime, mtime) {
      try {
        await fs_1.default.promises.utimes(path, atime, mtime);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), utime '${path}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.utime = utime;
    var utimeSync = function(path, atime, mtime) {
      try {
        fs_1.default.utimesSync(path, atime, mtime);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), utime '${path}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports2.utimeSync = utimeSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/types.js
var require_types = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/main.js
var require_main = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_classes(), exports2);
    __exportStar(require_enums(), exports2);
    __exportStar(require_functions(), exports2);
    __exportStar(require_types(), exports2);
    __exportStar(require_variables(), exports2);
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno.js
var require_deno = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_main(), exports2);
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/index.js
var require_dist2 = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Deno = void 0;
    exports2.Deno = __importStar(require_deno());
  }
});

// dist/dnt/esm/_dnt.shims.js
var import_shim_deno = __toESM(require_dist2(), 1);
var import_shim_deno2 = __toESM(require_dist2(), 1);
var dntGlobals = {
  Deno: import_shim_deno.Deno
};
var dntGlobalThis = createMergeProxy(globalThis, dntGlobals);
function createMergeProxy(baseObj, extObj) {
  return new Proxy(baseObj, {
    get(_target, prop, _receiver) {
      if (prop in extObj) {
        return extObj[prop];
      } else {
        return baseObj[prop];
      }
    },
    set(_target, prop, value) {
      if (prop in extObj) {
        delete extObj[prop];
      }
      baseObj[prop] = value;
      return true;
    },
    deleteProperty(_target, prop) {
      let success = false;
      if (prop in extObj) {
        delete extObj[prop];
        success = true;
      }
      if (prop in baseObj) {
        delete baseObj[prop];
        success = true;
      }
      return success;
    },
    ownKeys(_target) {
      const baseKeys = Reflect.ownKeys(baseObj);
      const extKeys = Reflect.ownKeys(extObj);
      const extKeysSet = new Set(extKeys);
      return [...baseKeys.filter((k) => !extKeysSet.has(k)), ...extKeys];
    },
    defineProperty(_target, prop, desc) {
      if (prop in extObj) {
        delete extObj[prop];
      }
      Reflect.defineProperty(baseObj, prop, desc);
      return true;
    },
    getOwnPropertyDescriptor(_target, prop) {
      if (prop in extObj) {
        return Reflect.getOwnPropertyDescriptor(extObj, prop);
      } else {
        return Reflect.getOwnPropertyDescriptor(baseObj, prop);
      }
    },
    has(_target, prop) {
      return prop in extObj || prop in baseObj;
    }
  });
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/_os.js
var isWindows = dntGlobalThis.Deno?.build.os === "windows" || dntGlobalThis.navigator?.platform?.startsWith("Win") || dntGlobalThis.process?.platform?.startsWith("win") || false;

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/_common/assert_path.js
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError(`Path must be a string, received "${JSON.stringify(path)}"`);
  }
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/_common/strip_trailing_separators.js
function stripTrailingSeparators(segment, isSep) {
  if (segment.length <= 1) {
    return segment;
  }
  let end = segment.length;
  for (let i = segment.length - 1; i > 0; i--) {
    if (isSep(segment.charCodeAt(i))) {
      end = i;
    } else {
      break;
    }
  }
  return segment.slice(0, end);
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/_common/constants.js
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/posix/_util.js
function isPosixPathSeparator(code2) {
  return code2 === CHAR_FORWARD_SLASH;
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/windows/_util.js
function isPosixPathSeparator2(code2) {
  return code2 === CHAR_FORWARD_SLASH;
}
function isPathSeparator(code2) {
  return code2 === CHAR_FORWARD_SLASH || code2 === CHAR_BACKWARD_SLASH;
}
function isWindowsDeviceRoot(code2) {
  return code2 >= CHAR_LOWERCASE_A && code2 <= CHAR_LOWERCASE_Z || code2 >= CHAR_UPPERCASE_A && code2 <= CHAR_UPPERCASE_Z;
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/_common/dirname.js
function assertArg(path) {
  assertPath(path);
  if (path.length === 0)
    return ".";
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/posix/dirname.js
function dirname(path) {
  assertArg(path);
  let end = -1;
  let matchedNonSeparator = false;
  for (let i = path.length - 1; i >= 1; --i) {
    if (isPosixPathSeparator(path.charCodeAt(i))) {
      if (matchedNonSeparator) {
        end = i;
        break;
      }
    } else {
      matchedNonSeparator = true;
    }
  }
  if (end === -1) {
    return isPosixPathSeparator(path.charCodeAt(0)) ? "/" : ".";
  }
  return stripTrailingSeparators(path.slice(0, end), isPosixPathSeparator);
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/windows/dirname.js
function dirname2(path) {
  assertArg(path);
  const len = path.length;
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  const code2 = path.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code2)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return path;
            }
            if (j !== last) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code2)) {
      if (path.charCodeAt(1) === CHAR_COLON) {
        rootEnd = offset = 2;
        if (len > 2) {
          if (isPathSeparator(path.charCodeAt(2)))
            rootEnd = offset = 3;
        }
      }
    }
  } else if (isPathSeparator(code2)) {
    return path;
  }
  for (let i = len - 1; i >= offset; --i) {
    if (isPathSeparator(path.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) {
    if (rootEnd === -1)
      return ".";
    else
      end = rootEnd;
  }
  return stripTrailingSeparators(path.slice(0, end), isPosixPathSeparator2);
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/dirname.js
function dirname3(path) {
  return isWindows ? dirname2(path) : dirname(path);
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/_common/glob_to_reg_exp.js
var REG_EXP_ESCAPE_CHARS = [
  "!",
  "$",
  "(",
  ")",
  "*",
  "+",
  ".",
  "=",
  "?",
  "[",
  "\\",
  "^",
  "{",
  "|"
];
var RANGE_ESCAPE_CHARS = ["-", "\\", "]"];
function _globToRegExp(c, glob, {
  extended = true,
  globstar: globstarOption = true,
  // os = osType,
  caseInsensitive = false
} = {}) {
  if (glob === "") {
    return /(?!)/;
  }
  let newLength = glob.length;
  for (; newLength > 1 && c.seps.includes(glob[newLength - 1]); newLength--)
    ;
  glob = glob.slice(0, newLength);
  let regExpString = "";
  for (let j = 0; j < glob.length; ) {
    let segment = "";
    const groupStack = [];
    let inRange = false;
    let inEscape = false;
    let endsWithSep = false;
    let i = j;
    for (; i < glob.length && !c.seps.includes(glob[i]); i++) {
      if (inEscape) {
        inEscape = false;
        const escapeChars = inRange ? RANGE_ESCAPE_CHARS : REG_EXP_ESCAPE_CHARS;
        segment += escapeChars.includes(glob[i]) ? `\\${glob[i]}` : glob[i];
        continue;
      }
      if (glob[i] === c.escapePrefix) {
        inEscape = true;
        continue;
      }
      if (glob[i] === "[") {
        if (!inRange) {
          inRange = true;
          segment += "[";
          if (glob[i + 1] === "!") {
            i++;
            segment += "^";
          } else if (glob[i + 1] === "^") {
            i++;
            segment += "\\^";
          }
          continue;
        } else if (glob[i + 1] === ":") {
          let k = i + 1;
          let value = "";
          while (glob[k + 1] !== void 0 && glob[k + 1] !== ":") {
            value += glob[k + 1];
            k++;
          }
          if (glob[k + 1] === ":" && glob[k + 2] === "]") {
            i = k + 2;
            if (value === "alnum")
              segment += "\\dA-Za-z";
            else if (value === "alpha")
              segment += "A-Za-z";
            else if (value === "ascii")
              segment += "\0-\x7F";
            else if (value === "blank")
              segment += "	 ";
            else if (value === "cntrl")
              segment += "\0-\x7F";
            else if (value === "digit")
              segment += "\\d";
            else if (value === "graph")
              segment += "!-~";
            else if (value === "lower")
              segment += "a-z";
            else if (value === "print")
              segment += " -~";
            else if (value === "punct") {
              segment += `!"#$%&'()*+,\\-./:;<=>?@[\\\\\\]^_\u2018{|}~`;
            } else if (value === "space")
              segment += "\\s\v";
            else if (value === "upper")
              segment += "A-Z";
            else if (value === "word")
              segment += "\\w";
            else if (value === "xdigit")
              segment += "\\dA-Fa-f";
            continue;
          }
        }
      }
      if (glob[i] === "]" && inRange) {
        inRange = false;
        segment += "]";
        continue;
      }
      if (inRange) {
        segment += glob[i];
        continue;
      }
      if (glob[i] === ")" && groupStack.length > 0 && groupStack[groupStack.length - 1] !== "BRACE") {
        segment += ")";
        const type = groupStack.pop();
        if (type === "!") {
          segment += c.wildcard;
        } else if (type !== "@") {
          segment += type;
        }
        continue;
      }
      if (glob[i] === "|" && groupStack.length > 0 && groupStack[groupStack.length - 1] !== "BRACE") {
        segment += "|";
        continue;
      }
      if (glob[i] === "+" && extended && glob[i + 1] === "(") {
        i++;
        groupStack.push("+");
        segment += "(?:";
        continue;
      }
      if (glob[i] === "@" && extended && glob[i + 1] === "(") {
        i++;
        groupStack.push("@");
        segment += "(?:";
        continue;
      }
      if (glob[i] === "?") {
        if (extended && glob[i + 1] === "(") {
          i++;
          groupStack.push("?");
          segment += "(?:";
        } else {
          segment += ".";
        }
        continue;
      }
      if (glob[i] === "!" && extended && glob[i + 1] === "(") {
        i++;
        groupStack.push("!");
        segment += "(?!";
        continue;
      }
      if (glob[i] === "{") {
        groupStack.push("BRACE");
        segment += "(?:";
        continue;
      }
      if (glob[i] === "}" && groupStack[groupStack.length - 1] === "BRACE") {
        groupStack.pop();
        segment += ")";
        continue;
      }
      if (glob[i] === "," && groupStack[groupStack.length - 1] === "BRACE") {
        segment += "|";
        continue;
      }
      if (glob[i] === "*") {
        if (extended && glob[i + 1] === "(") {
          i++;
          groupStack.push("*");
          segment += "(?:";
        } else {
          const prevChar = glob[i - 1];
          let numStars = 1;
          while (glob[i + 1] === "*") {
            i++;
            numStars++;
          }
          const nextChar = glob[i + 1];
          if (globstarOption && numStars === 2 && [...c.seps, void 0].includes(prevChar) && [...c.seps, void 0].includes(nextChar)) {
            segment += c.globstar;
            endsWithSep = true;
          } else {
            segment += c.wildcard;
          }
        }
        continue;
      }
      segment += REG_EXP_ESCAPE_CHARS.includes(glob[i]) ? `\\${glob[i]}` : glob[i];
    }
    if (groupStack.length > 0 || inRange || inEscape) {
      segment = "";
      for (const c2 of glob.slice(j, i)) {
        segment += REG_EXP_ESCAPE_CHARS.includes(c2) ? `\\${c2}` : c2;
        endsWithSep = false;
      }
    }
    regExpString += segment;
    if (!endsWithSep) {
      regExpString += i < glob.length ? c.sep : c.sepMaybe;
      endsWithSep = true;
    }
    while (c.seps.includes(glob[i]))
      i++;
    j = i;
  }
  regExpString = `^${regExpString}$`;
  return new RegExp(regExpString, caseInsensitive ? "i" : "");
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/posix/glob_to_regexp.js
var constants = {
  sep: "/+",
  sepMaybe: "/*",
  seps: ["/"],
  globstar: "(?:[^/]*(?:/|$)+)*",
  wildcard: "[^/]*",
  escapePrefix: "\\"
};
function globToRegExp(glob, options = {}) {
  return _globToRegExp(constants, glob, options);
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/windows/glob_to_regexp.js
var constants2 = {
  sep: "(?:\\\\|/)+",
  sepMaybe: "(?:\\\\|/)*",
  seps: ["\\", "/"],
  globstar: "(?:[^\\\\/]*(?:\\\\|/|$)+)*",
  wildcard: "[^\\\\/]*",
  escapePrefix: "`"
};
function globToRegExp2(glob, options = {}) {
  return _globToRegExp(constants2, glob, options);
}

// dist/dnt/esm/deps/jsr.io/@std/path/1.0.6/glob_to_regexp.js
function globToRegExp3(glob, options = {}) {
  return isWindows ? globToRegExp2(glob, options) : globToRegExp(glob, options);
}

// dist/dnt/esm/git-wrapper/exec.js
async function exec(args) {
  const process2 = import_shim_deno2.Deno.run({
    cmd: ["git", ...args],
    stdout: "piped",
    stderr: "piped"
  });
  const [{ code: code2 }, stdout, stderr] = await Promise.all([
    process2.status(),
    process2.output(),
    process2.stderrOutput()
  ]);
  if (code2 === 0) {
    return new TextDecoder().decode(stdout).trim();
  } else {
    throw new GitError(args, code2, new TextDecoder().decode(stderr).trim());
  }
}
var GitError = class extends Error {
  constructor(args, code2, stderr) {
    super(`\`git ${args.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ")}\` exit code is not zero, ExitCode: ${code2}
${stderr}`);
    Object.defineProperty(this, "args", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: args
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: code2
    });
    Object.defineProperty(this, "stderr", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: stderr
    });
  }
};

// dist/dnt/esm/git-wrapper/describe.js
function createArgs({ cwd }) {
  const args = [];
  if (cwd)
    args.push("-C", cwd);
  args.push("describe", "--tags");
  return args;
}
async function describe(options = {}) {
  const args = createArgs(options);
  return await exec(args);
}

// dist/dnt/esm/git-wrapper/list_remotes.js
function createArgs2({ cwd }) {
  const args = [];
  if (cwd)
    args.push("-C", cwd);
  args.push("remote", "-v");
  return args;
}
function parseRemotes(stdout) {
  const lines = stdout.split("\n").map((x) => /(.+)\s+(.+)\s+\((push|fetch)\)/.exec(x) || []).filter((x) => x.length === 4);
  const remotes = [];
  let name = void 0;
  let fetchUrl = void 0;
  let pushUrl = void 0;
  for (const [_, lineName, lineUrl, type] of lines) {
    if (!name) {
      name = lineName;
    } else if (name != lineName) {
      remotes.push({ name, fetchUrl, pushUrl });
      name = lineName;
      fetchUrl = pushUrl = void 0;
    }
    switch (type) {
      case "fetch":
        fetchUrl = lineUrl;
        break;
      case "push":
        pushUrl = lineUrl;
        break;
    }
  }
  if (name) {
    remotes.push({ name, fetchUrl, pushUrl });
  }
  return remotes;
}
async function listRemotes(options = {}) {
  const args = createArgs2(options);
  const stdout = await exec(args);
  return parseRemotes(stdout);
}

// dist/dnt/esm/git-wrapper/rev_parse.js
function createArgs3({ arg, cwd }) {
  const args = [];
  if (cwd)
    args.push("-C", cwd);
  args.push("rev-parse", arg);
  return args;
}
async function revParse(options) {
  const args = createArgs3(options);
  return await exec(args);
}

// dist/dnt/esm/deps/jsr.io/@std/fmt/1.0.8/colors.js
var colors_exports = {};
__export(colors_exports, {
  bgBlack: () => bgBlack,
  bgBlue: () => bgBlue,
  bgBrightBlack: () => bgBrightBlack,
  bgBrightBlue: () => bgBrightBlue,
  bgBrightCyan: () => bgBrightCyan,
  bgBrightGreen: () => bgBrightGreen,
  bgBrightMagenta: () => bgBrightMagenta,
  bgBrightRed: () => bgBrightRed,
  bgBrightWhite: () => bgBrightWhite,
  bgBrightYellow: () => bgBrightYellow,
  bgCyan: () => bgCyan,
  bgGreen: () => bgGreen,
  bgMagenta: () => bgMagenta,
  bgRed: () => bgRed,
  bgRgb24: () => bgRgb24,
  bgRgb8: () => bgRgb8,
  bgWhite: () => bgWhite,
  bgYellow: () => bgYellow,
  black: () => black,
  blue: () => blue,
  bold: () => bold,
  brightBlack: () => brightBlack,
  brightBlue: () => brightBlue,
  brightCyan: () => brightCyan,
  brightGreen: () => brightGreen,
  brightMagenta: () => brightMagenta,
  brightRed: () => brightRed,
  brightWhite: () => brightWhite,
  brightYellow: () => brightYellow,
  cyan: () => cyan,
  dim: () => dim,
  getColorEnabled: () => getColorEnabled,
  gray: () => gray,
  green: () => green,
  hidden: () => hidden,
  inverse: () => inverse,
  italic: () => italic,
  magenta: () => magenta,
  red: () => red,
  reset: () => reset,
  rgb24: () => rgb24,
  rgb8: () => rgb8,
  setColorEnabled: () => setColorEnabled,
  strikethrough: () => strikethrough,
  stripAnsiCode: () => stripAnsiCode,
  underline: () => underline,
  white: () => white,
  yellow: () => yellow
});
var { Deno: Deno3 } = dntGlobalThis;
var noColor = typeof Deno3?.noColor === "boolean" ? Deno3.noColor : false;
var enabled = !noColor;
function setColorEnabled(value) {
  if (Deno3?.noColor) {
    return;
  }
  enabled = value;
}
function getColorEnabled() {
  return enabled;
}
function code(open, close) {
  return {
    open: `\x1B[${open.join(";")}m`,
    close: `\x1B[${close}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, "g")
  };
}
function run(str, code2) {
  return enabled ? `${code2.open}${str.replace(code2.regexp, code2.open)}${code2.close}` : str;
}
function reset(str) {
  return run(str, code([0], 0));
}
function bold(str) {
  return run(str, code([1], 22));
}
function dim(str) {
  return run(str, code([2], 22));
}
function italic(str) {
  return run(str, code([3], 23));
}
function underline(str) {
  return run(str, code([4], 24));
}
function inverse(str) {
  return run(str, code([7], 27));
}
function hidden(str) {
  return run(str, code([8], 28));
}
function strikethrough(str) {
  return run(str, code([9], 29));
}
function black(str) {
  return run(str, code([30], 39));
}
function red(str) {
  return run(str, code([31], 39));
}
function green(str) {
  return run(str, code([32], 39));
}
function yellow(str) {
  return run(str, code([33], 39));
}
function blue(str) {
  return run(str, code([34], 39));
}
function magenta(str) {
  return run(str, code([35], 39));
}
function cyan(str) {
  return run(str, code([36], 39));
}
function white(str) {
  return run(str, code([37], 39));
}
function gray(str) {
  return brightBlack(str);
}
function brightBlack(str) {
  return run(str, code([90], 39));
}
function brightRed(str) {
  return run(str, code([91], 39));
}
function brightGreen(str) {
  return run(str, code([92], 39));
}
function brightYellow(str) {
  return run(str, code([93], 39));
}
function brightBlue(str) {
  return run(str, code([94], 39));
}
function brightMagenta(str) {
  return run(str, code([95], 39));
}
function brightCyan(str) {
  return run(str, code([96], 39));
}
function brightWhite(str) {
  return run(str, code([97], 39));
}
function bgBlack(str) {
  return run(str, code([40], 49));
}
function bgRed(str) {
  return run(str, code([41], 49));
}
function bgGreen(str) {
  return run(str, code([42], 49));
}
function bgYellow(str) {
  return run(str, code([43], 49));
}
function bgBlue(str) {
  return run(str, code([44], 49));
}
function bgMagenta(str) {
  return run(str, code([45], 49));
}
function bgCyan(str) {
  return run(str, code([46], 49));
}
function bgWhite(str) {
  return run(str, code([47], 49));
}
function bgBrightBlack(str) {
  return run(str, code([100], 49));
}
function bgBrightRed(str) {
  return run(str, code([101], 49));
}
function bgBrightGreen(str) {
  return run(str, code([102], 49));
}
function bgBrightYellow(str) {
  return run(str, code([103], 49));
}
function bgBrightBlue(str) {
  return run(str, code([104], 49));
}
function bgBrightMagenta(str) {
  return run(str, code([105], 49));
}
function bgBrightCyan(str) {
  return run(str, code([106], 49));
}
function bgBrightWhite(str) {
  return run(str, code([107], 49));
}
function clampAndTruncate(n, max = 255, min = 0) {
  return Math.trunc(Math.max(Math.min(n, max), min));
}
function rgb8(str, color) {
  return run(str, code([38, 5, clampAndTruncate(color)], 39));
}
function bgRgb8(str, color) {
  return run(str, code([48, 5, clampAndTruncate(color)], 49));
}
function rgb24(str, color) {
  if (typeof color === "number") {
    return run(str, code([38, 2, color >> 16 & 255, color >> 8 & 255, color & 255], 39));
  }
  return run(str, code([
    38,
    2,
    clampAndTruncate(color.r),
    clampAndTruncate(color.g),
    clampAndTruncate(color.b)
  ], 39));
}
function bgRgb24(str, color) {
  if (typeof color === "number") {
    return run(str, code([48, 2, color >> 16 & 255, color >> 8 & 255, color & 255], 49));
  }
  return run(str, code([
    48,
    2,
    clampAndTruncate(color.r),
    clampAndTruncate(color.g),
    clampAndTruncate(color.b)
  ], 49));
}
var ANSI_PATTERN = new RegExp([
  "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
  "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TXZcf-nq-uy=><~]))"
].join("|"), "g");
function stripAnsiCode(string2) {
  return string2.replace(ANSI_PATTERN, "");
}

// dist/dnt/esm/deps/jsr.io/@cliffy/ansi/1.0.0-rc.8/colors.js
var proto = /* @__PURE__ */ Object.create(null);
var methodNames = Object.keys(colors_exports);
for (const name of methodNames) {
  if (name === "setColorEnabled" || name === "getColorEnabled") {
    continue;
  }
  Object.defineProperty(proto, name, {
    get() {
      return factory([...this._stack, name]);
    }
  });
}
var colors = factory();
function factory(stack = []) {
  const colors2 = function(str, ...args) {
    if (typeof str !== "undefined") {
      const lastIndex = stack.length - 1;
      return stack.reduce((str2, name, index) => index === lastIndex ? colors_exports[name](str2, ...args) : colors_exports[name](str2), str);
    }
    const tmp = stack.slice();
    stack = [];
    return factory(tmp);
  };
  Object.setPrototypeOf(colors2, proto);
  colors2._stack = stack;
  return colors2;
}

// dist/dnt/esm/deps/jsr.io/@std/text/1.0.16/levenshtein_distance.js
var { ceil } = Math;
var peq = new Uint32Array(1114112);
function myers32(t, p) {
  const n = t.length;
  const m = p.length;
  for (let i = 0; i < m; i++) {
    peq[p[i].codePointAt(0)] |= 1 << i;
  }
  const last = m - 1;
  let pv = -1;
  let mv = 0;
  let score = m;
  for (let j = 0; j < n; j++) {
    const eq = peq[t[j].codePointAt(0)];
    const xv = eq | mv;
    const xh = (eq & pv) + pv ^ pv | eq;
    let ph = mv | ~(xh | pv);
    let mh = pv & xh;
    score += (ph >>> last & 1) - (mh >>> last & 1);
    ph = ph << 1 | 1;
    mh = mh << 1;
    pv = mh | ~(xv | ph);
    mv = ph & xv;
  }
  for (let i = 0; i < m; i++) {
    peq[p[i].codePointAt(0)] = 0;
  }
  return score;
}
function myersX(t, p) {
  const n = t.length;
  const m = p.length;
  const h = new Int8Array(n).fill(1);
  const bmax = ceil(m / 32) - 1;
  for (let b = 0; b < bmax; b++) {
    const start2 = b * 32;
    const end = (b + 1) * 32;
    for (let i = start2; i < end; i++) {
      peq[p[i].codePointAt(0)] |= 1 << i;
    }
    let pv2 = -1;
    let mv2 = 0;
    for (let j = 0; j < n; j++) {
      const hin = h[j];
      let eq = peq[t[j].codePointAt(0)];
      const xv = eq | mv2;
      eq |= hin >>> 31;
      const xh = (eq & pv2) + pv2 ^ pv2 | eq;
      let ph = mv2 | ~(xh | pv2);
      let mh = pv2 & xh;
      h[j] = (ph >>> 31) - (mh >>> 31);
      ph = ph << 1 | -hin >>> 31;
      mh = mh << 1 | hin >>> 31;
      pv2 = mh | ~(xv | ph);
      mv2 = ph & xv;
    }
    for (let i = start2; i < end; i++) {
      peq[p[i].codePointAt(0)] = 0;
    }
  }
  const start = bmax * 32;
  for (let i = start; i < m; i++) {
    peq[p[i].codePointAt(0)] |= 1 << i;
  }
  const last = m - 1;
  let pv = -1;
  let mv = 0;
  let score = m;
  for (let j = 0; j < n; j++) {
    const hin = h[j];
    let eq = peq[t[j].codePointAt(0)];
    const xv = eq | mv;
    eq |= hin >>> 31;
    const xh = (eq & pv) + pv ^ pv | eq;
    let ph = mv | ~(xh | pv);
    let mh = pv & xh;
    score += (ph >>> last & 1) - (mh >>> last & 1);
    ph = ph << 1 | -hin >>> 31;
    mh = mh << 1 | hin >>> 31;
    pv = mh | ~(xv | ph);
    mv = ph & xv;
  }
  for (let i = start; i < m; i++) {
    peq[p[i].codePointAt(0)] = 0;
  }
  return score;
}
function levenshteinDistance(str1, str2) {
  let t = [...str1];
  let p = [...str2];
  if (t.length < p.length) {
    [p, t] = [t, p];
  }
  if (p.length === 0) {
    return t.length;
  }
  return p.length <= 32 ? myers32(t, p) : myersX(t, p);
}

// dist/dnt/esm/deps/jsr.io/@std/text/1.0.16/closest_string.js
function closestString(givenWord, possibleWords, options) {
  if (possibleWords.length === 0) {
    throw new TypeError("When using closestString(), the possibleWords array must contain at least one word");
  }
  const { caseSensitive, compareFn = levenshteinDistance } = { ...options };
  if (!caseSensitive) {
    givenWord = givenWord.toLowerCase();
  }
  let nearestWord = possibleWords[0];
  let closestStringDistance = Infinity;
  for (const each of possibleWords) {
    const distance = caseSensitive ? compareFn(givenWord, each) : compareFn(givenWord, each.toLowerCase());
    if (distance < closestStringDistance) {
      nearestWord = each;
      closestStringDistance = distance;
    }
  }
  return nearestWord;
}

// dist/dnt/esm/deps/jsr.io/@cliffy/flags/1.0.0-rc.8/_utils.js
function paramCaseToCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
function getOption(flags, name) {
  while (name[0] === "-") {
    name = name.slice(1);
  }
  for (const flag of flags) {
    if (isOption(flag, name)) {
      return flag;
    }
  }
  return;
}
function didYouMeanOption(option, options) {
  const optionNames = options.map((option2) => [option2.name, ...option2.aliases ?? []]).flat().map((option2) => getFlag(option2));
  return didYouMean(" Did you mean option", getFlag(option), optionNames);
}
function didYouMeanType(type, types) {
  return didYouMean(" Did you mean type", type, types);
}
function didYouMean(message, type, types) {
  const match = types.length ? closestString(type, types) : void 0;
  return match ? `${message} "${match}"?` : "";
}
function getFlag(name) {
  if (name.startsWith("-")) {
    return name;
  }
  if (name.length > 1) {
    return `--${name}`;
  }
  return `-${name}`;
}
function isOption(option, name) {
  return option.name === name || option.aliases && option.aliases.indexOf(name) !== -1;
}
function matchWildCardOptions(name, flags) {
  for (const option of flags) {
    if (option.name.indexOf("*") === -1) {
      continue;
    }
    let matched = matchWildCardOption(name, option);
    if (matched) {
      matched = { ...matched, name };
      flags.push(matched);
      return matched;
    }
  }
}
function matchWildCardOption(name, option) {
  const parts = option.name.split(".");
  const parts2 = name.split(".");
  if (parts.length !== parts2.length) {
    return false;
  }
  const count = Math.max(parts.length, parts2.length);
  for (let i = 0; i < count; i++) {
    if (parts[i] !== parts2[i] && parts[i] !== "*") {
      return false;
    }
  }
  return option;
}
function getDefaultValue(option) {
  return typeof option.default === "function" ? option.default() : option.default;
}

// dist/dnt/esm/deps/jsr.io/@cliffy/flags/1.0.0-rc.8/_errors.js
var FlagsError = class _FlagsError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, _FlagsError.prototype);
  }
};
var UnknownRequiredOptionError = class _UnknownRequiredOptionError extends FlagsError {
  constructor(option, options) {
    super(`Unknown required option "${getFlag(option)}".${didYouMeanOption(option, options)}`);
    Object.setPrototypeOf(this, _UnknownRequiredOptionError.prototype);
  }
};
var UnknownConflictingOptionError = class _UnknownConflictingOptionError extends FlagsError {
  constructor(option, options) {
    super(`Unknown conflicting option "${getFlag(option)}".${didYouMeanOption(option, options)}`);
    Object.setPrototypeOf(this, _UnknownConflictingOptionError.prototype);
  }
};
var UnknownTypeError = class _UnknownTypeError extends FlagsError {
  constructor(type, types) {
    super(`Unknown type "${type}".${didYouMeanType(type, types)}`);
    Object.setPrototypeOf(this, _UnknownTypeError.prototype);
  }
};
var ValidationError = class _ValidationError extends FlagsError {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, _ValidationError.prototype);
  }
};
var DuplicateOptionError = class _DuplicateOptionError extends ValidationError {
  constructor(name) {
    super(`Option "${getFlag(name).replace(/^--no-/, "--")}" can only occur once, but was found several times.`);
    Object.setPrototypeOf(this, _DuplicateOptionError.prototype);
  }
};
var InvalidOptionError = class _InvalidOptionError extends ValidationError {
  constructor(option, options) {
    super(`Invalid option "${getFlag(option)}".${didYouMeanOption(option, options)}`);
    Object.setPrototypeOf(this, _InvalidOptionError.prototype);
  }
};
var UnknownOptionError = class _UnknownOptionError extends ValidationError {
  constructor(option, options) {
    super(`Unknown option "${getFlag(option)}".${didYouMeanOption(option, options)}`);
    Object.setPrototypeOf(this, _UnknownOptionError.prototype);
  }
};
var MissingOptionValueError = class _MissingOptionValueError extends ValidationError {
  constructor(option) {
    super(`Missing value for option "${getFlag(option)}".`);
    Object.setPrototypeOf(this, _MissingOptionValueError.prototype);
  }
};
var InvalidOptionValueError = class _InvalidOptionValueError extends ValidationError {
  constructor(option, expected, value) {
    super(`Option "${getFlag(option)}" must be of type "${expected}", but got "${value}".`);
    Object.setPrototypeOf(this, _InvalidOptionValueError.prototype);
  }
};
var UnexpectedOptionValueError = class extends ValidationError {
  constructor(option, value) {
    super(`Option "${getFlag(option)}" doesn't take a value, but got "${value}".`);
    Object.setPrototypeOf(this, InvalidOptionValueError.prototype);
  }
};
var OptionNotCombinableError = class _OptionNotCombinableError extends ValidationError {
  constructor(option) {
    super(`Option "${getFlag(option)}" cannot be combined with other options.`);
    Object.setPrototypeOf(this, _OptionNotCombinableError.prototype);
  }
};
var ConflictingOptionError = class _ConflictingOptionError extends ValidationError {
  constructor(option, conflictingOption) {
    super(`Option "${getFlag(option)}" conflicts with option "${getFlag(conflictingOption)}".`);
    Object.setPrototypeOf(this, _ConflictingOptionError.prototype);
  }
};
var DependingOptionError = class _DependingOptionError extends ValidationError {
  constructor(option, dependingOption) {
    super(`Option "${getFlag(option)}" depends on option "${getFlag(dependingOption)}".`);
    Object.setPrototypeOf(this, _DependingOptionError.prototype);
  }
};
var MissingRequiredOptionError = class _MissingRequiredOptionError extends ValidationError {
  constructor(option) {
    super(`Missing required option "${getFlag(option)}".`);
    Object.setPrototypeOf(this, _MissingRequiredOptionError.prototype);
  }
};
var UnexpectedRequiredArgumentError = class _UnexpectedRequiredArgumentError extends ValidationError {
  constructor(arg) {
    super(`An required argument cannot follow an optional argument, but "${arg}"  is defined as required.`);
    Object.setPrototypeOf(this, _UnexpectedRequiredArgumentError.prototype);
  }
};
var UnexpectedArgumentAfterVariadicArgumentError = class _UnexpectedArgumentAfterVariadicArgumentError extends ValidationError {
  constructor(arg) {
    super(`An argument cannot follow an variadic argument, but got "${arg}".`);
    Object.setPrototypeOf(this, _UnexpectedArgumentAfterVariadicArgumentError.prototype);
  }
};
var InvalidTypeError = class extends ValidationError {
  constructor({ label, name, value, type }, expected) {
    super(`${label} "${name}" must be of type "${type}", but got "${value}".` + (expected ? ` Expected values: ${expected.map((value2) => `"${value2}"`).join(", ")}` : ""));
    Object.setPrototypeOf(this, MissingOptionValueError.prototype);
  }
};

// dist/dnt/esm/deps/jsr.io/@cliffy/flags/1.0.0-rc.8/deprecated.js
var OptionType;
(function(OptionType2) {
  OptionType2["STRING"] = "string";
  OptionType2["NUMBER"] = "number";
  OptionType2["INTEGER"] = "integer";
  OptionType2["BOOLEAN"] = "boolean";
})(OptionType || (OptionType = {}));

// dist/dnt/esm/deps/jsr.io/@cliffy/flags/1.0.0-rc.8/types/boolean.js
var boolean = (type) => {
  if (~["1", "true"].indexOf(type.value)) {
    return true;
  }
  if (~["0", "false"].indexOf(type.value)) {
    return false;
  }
  throw new InvalidTypeError(type, ["true", "false", "1", "0"]);
};

// dist/dnt/esm/deps/jsr.io/@cliffy/flags/1.0.0-rc.8/types/number.js
var number = (type) => {
  const value = Number(type.value);
  if (Number.isFinite(value)) {
    return value;
  }
  throw new InvalidTypeError(type);
};

// dist/dnt/esm/deps/jsr.io/@cliffy/flags/1.0.0-rc.8/types/string.js
var string = ({ value }) => {
  return value;
};

// dist/dnt/esm/deps/jsr.io/@cliffy/flags/1.0.0-rc.8/_validate_flags.js
function validateFlags(ctx, opts, options = /* @__PURE__ */ new Map()) {
  if (!opts.flags) {
    return;
  }
  setDefaultValues(ctx, opts);
  const optionNames = Object.keys(ctx.flags);
  if (!optionNames.length && opts.allowEmpty) {
    return;
  }
  if (ctx.standalone) {
    validateStandaloneOption(ctx, options, optionNames);
    return;
  }
  for (const [name, option] of options) {
    validateUnknownOption(option, opts);
    validateConflictingOptions(ctx, option);
    validateDependingOptions(ctx, option);
    validateRequiredValues(ctx, option, name);
  }
  validateRequiredOptions(ctx, options, opts);
}
function validateUnknownOption(option, opts) {
  if (!getOption(opts.flags ?? [], option.name)) {
    throw new UnknownOptionError(option.name, opts.flags ?? []);
  }
}
function setDefaultValues(ctx, opts) {
  if (!opts.flags?.length) {
    return;
  }
  for (const option of opts.flags) {
    let name;
    let defaultValue = void 0;
    if (option.name.startsWith("no-")) {
      const propName = option.name.replace(/^no-/, "");
      if (typeof ctx.flags[propName] !== "undefined") {
        continue;
      }
      const positiveOption = getOption(opts.flags, propName);
      if (positiveOption) {
        continue;
      }
      name = paramCaseToCamelCase(propName);
      defaultValue = true;
    }
    if (!name) {
      name = paramCaseToCamelCase(option.name);
    }
    const hasDefaultValue = (!opts.ignoreDefaults || typeof opts.ignoreDefaults[name] === "undefined") && typeof ctx.flags[name] === "undefined" && (typeof option.default !== "undefined" || typeof defaultValue !== "undefined");
    if (hasDefaultValue) {
      ctx.flags[name] = getDefaultValue(option) ?? defaultValue;
      ctx.defaults[option.name] = true;
      if (typeof option.value === "function") {
        ctx.flags[name] = option.value(ctx.flags[name]);
      }
    }
  }
}
function validateStandaloneOption(ctx, options, optionNames) {
  if (!ctx.standalone || optionNames.length === 1) {
    return;
  }
  for (const [_, opt] of options) {
    if (!ctx.defaults[opt.name] && opt !== ctx.standalone) {
      throw new OptionNotCombinableError(ctx.standalone.name);
    }
  }
}
function validateConflictingOptions(ctx, option) {
  if (!option.conflicts?.length) {
    return;
  }
  for (const flag of option.conflicts) {
    if (isset(flag, ctx.flags)) {
      throw new ConflictingOptionError(option.name, flag);
    }
  }
}
function validateDependingOptions(ctx, option) {
  if (!option.depends) {
    return;
  }
  for (const flag of option.depends) {
    if (!isset(flag, ctx.flags) && !ctx.defaults[option.name]) {
      throw new DependingOptionError(option.name, flag);
    }
  }
}
function validateRequiredValues(ctx, option, name) {
  if (!option.args) {
    return;
  }
  const isArray = option.args.length > 1;
  for (let i = 0; i < option.args.length; i++) {
    const arg = option.args[i];
    if (arg.optional) {
      continue;
    }
    const hasValue = isArray ? typeof ctx.flags[name][i] !== "undefined" : typeof ctx.flags[name] !== "undefined";
    if (!hasValue) {
      throw new MissingOptionValueError(option.name);
    }
  }
}
function validateRequiredOptions(ctx, options, opts) {
  if (!opts.flags?.length) {
    return;
  }
  const optionsValues = [...options.values()];
  for (const option of opts.flags) {
    if (!option.required || paramCaseToCamelCase(option.name) in ctx.flags) {
      continue;
    }
    const conflicts = option.conflicts ?? [];
    const hasConflict = conflicts.find((flag) => !!ctx.flags[flag]);
    const hasConflicts = hasConflict || optionsValues.find((opt) => opt.conflicts?.find((flag) => flag === option.name));
    if (hasConflicts) {
      continue;
    }
    throw new MissingRequiredOptionError(option.name);
  }
}
function isset(flagName, flags) {
  const name = paramCaseToCamelCase(flagName);
  return typeof flags[name] !== "undefined";
}

// dist/dnt/esm/deps/jsr.io/@cliffy/flags/1.0.0-rc.8/types/integer.js
var integer = (type) => {
  const value = Number(type.value);
  if (Number.isInteger(value)) {
    return value;
  }
  throw new InvalidTypeError(type);
};

// dist/dnt/esm/deps/jsr.io/@cliffy/flags/1.0.0-rc.8/flags.js
var DefaultTypes = {
  string,
  number,
  integer,
  boolean
};
function parseFlags(argsOrCtx, opts = {}) {
  let args;
  let ctx;
  if (Array.isArray(argsOrCtx)) {
    ctx = {};
    args = argsOrCtx;
  } else {
    ctx = argsOrCtx;
    args = argsOrCtx.unknown;
    argsOrCtx.unknown = [];
  }
  args = args.slice();
  ctx.flags ??= {};
  ctx.literal ??= [];
  ctx.unknown ??= [];
  ctx.stopEarly = false;
  ctx.stopOnUnknown = false;
  ctx.defaults ??= {};
  opts.dotted ??= true;
  validateOptions(opts);
  const options = parseArgs(ctx, args, opts);
  validateFlags(ctx, opts, options);
  if (opts.dotted) {
    parseDottedOptions(ctx);
  }
  return ctx;
}
function validateOptions(opts) {
  opts.flags?.forEach((opt) => {
    opt.depends?.forEach((flag) => {
      if (!opts.flags || !getOption(opts.flags, flag)) {
        throw new UnknownRequiredOptionError(flag, opts.flags ?? []);
      }
    });
    opt.conflicts?.forEach((flag) => {
      if (!opts.flags || !getOption(opts.flags, flag)) {
        throw new UnknownConflictingOptionError(flag, opts.flags ?? []);
      }
    });
  });
}
function parseArgs(ctx, args, opts) {
  const optionsMap = /* @__PURE__ */ new Map();
  let inLiteral = false;
  for (let argsIndex = 0; argsIndex < args.length; argsIndex++) {
    let parseNext = function(option2) {
      if (negate) {
        setFlagValue(false);
        return;
      } else if (!option2.args?.length) {
        setFlagValue(void 0);
        return;
      }
      const arg = option2.args[optionArgsIndex];
      if (!arg) {
        const flag = next();
        throw new UnknownOptionError(flag, opts.flags ?? []);
      }
      if (!arg.type) {
        arg.type = OptionType.BOOLEAN;
      }
      if (!option2.args?.length && arg.type === OptionType.BOOLEAN && arg.optional === void 0) {
        arg.optional = true;
      }
      if (arg.optional) {
        inOptionalArg = true;
      } else if (inOptionalArg) {
        throw new UnexpectedRequiredArgumentError(option2.name);
      }
      let result;
      let increase = false;
      if (arg.list && hasNext(arg)) {
        const parsed = next().split(arg.separator || ",").map((nextValue) => {
          const value = parseValue(option2, arg, nextValue);
          if (typeof value === "undefined") {
            throw new InvalidOptionValueError(option2.name, arg.type ?? "?", nextValue);
          }
          return value;
        });
        if (parsed?.length) {
          result = parsed;
        }
      } else {
        if (hasNext(arg)) {
          result = parseValue(option2, arg, next());
        } else if (arg.optional && arg.type === OptionType.BOOLEAN) {
          result = true;
        }
      }
      if (increase && typeof currentValue === "undefined") {
        argsIndex++;
        if (!arg.variadic) {
          optionArgsIndex++;
        } else if (option2.args[optionArgsIndex + 1]) {
          throw new UnexpectedArgumentAfterVariadicArgumentError(next());
        }
      }
      if (typeof result !== "undefined" && (option2.args.length > 1 || arg.variadic)) {
        if (!ctx.flags[propName]) {
          setFlagValue([]);
        }
        ctx.flags[propName].push(result);
        if (hasNext(arg)) {
          parseNext(option2);
        }
      } else {
        setFlagValue(result);
      }
      function hasNext(arg2) {
        if (!option2.args?.length) {
          return false;
        }
        const nextValue = currentValue ?? args[argsIndex + 1];
        if (!nextValue) {
          return false;
        }
        if (option2.args.length > 1 && optionArgsIndex >= option2.args.length) {
          return false;
        }
        if (!arg2.optional) {
          return true;
        }
        if (option2.equalsSign && arg2.optional && !arg2.variadic && typeof currentValue === "undefined") {
          return false;
        }
        if (arg2.optional || arg2.variadic) {
          return nextValue[0] !== "-" || typeof currentValue !== "undefined" || arg2.type === OptionType.NUMBER && !isNaN(Number(nextValue));
        }
        return false;
      }
      function parseValue(option3, arg2, value) {
        const result2 = opts.parse ? opts.parse({
          label: "Option",
          type: arg2.type || OptionType.STRING,
          name: `--${option3.name}`,
          value
        }) : parseDefaultType(option3, arg2, value);
        if (typeof result2 !== "undefined") {
          increase = true;
        }
        return result2;
      }
    }, setFlagValue = function(value) {
      ctx.flags[propName] = value;
      if (ctx.defaults[propName]) {
        delete ctx.defaults[propName];
      }
    };
    let option;
    let current = args[argsIndex];
    let currentValue;
    let negate = false;
    if (inLiteral) {
      ctx.literal.push(current);
      continue;
    } else if (current === "--") {
      inLiteral = true;
      continue;
    } else if (ctx.stopEarly || ctx.stopOnUnknown) {
      ctx.unknown.push(current);
      continue;
    }
    const isFlag = current.length > 1 && current[0] === "-";
    if (!isFlag) {
      if (opts.stopEarly) {
        ctx.stopEarly = true;
      }
      ctx.unknown.push(current);
      continue;
    }
    const isShort = current[1] !== "-";
    const isLong = isShort ? false : current.length > 3 && current[2] !== "-";
    if (!isShort && !isLong) {
      throw new InvalidOptionError(current, opts.flags ?? []);
    }
    if (isShort && current.length > 2 && current[2] !== ".") {
      args.splice(argsIndex, 1, ...splitFlags(current));
      current = args[argsIndex];
    } else if (isLong && current.startsWith("--no-")) {
      negate = true;
    }
    const equalSignIndex = current.indexOf("=");
    if (equalSignIndex !== -1) {
      currentValue = current.slice(equalSignIndex + 1) || void 0;
      current = current.slice(0, equalSignIndex);
    }
    if (opts.flags) {
      option = getOption(opts.flags, current);
      if (!option) {
        const name = current.replace(/^-+/, "");
        option = matchWildCardOptions(name, opts.flags);
        if (!option) {
          if (opts.stopOnUnknown) {
            ctx.stopOnUnknown = true;
            ctx.unknown.push(args[argsIndex]);
            continue;
          }
          throw new UnknownOptionError(current, opts.flags);
        }
      }
    } else {
      option = {
        name: current.replace(/^-+/, ""),
        optionalValue: true,
        type: OptionType.STRING
      };
    }
    if (option.standalone) {
      ctx.standalone = option;
    }
    const positiveName = negate ? option.name.replace(/^no-?/, "") : option.name;
    const propName = paramCaseToCamelCase(positiveName);
    if (typeof ctx.flags[propName] !== "undefined") {
      if (!opts.flags?.length) {
        option.collect = true;
      } else if (!option.collect && !ctx.defaults[option.name]) {
        throw new DuplicateOptionError(current);
      }
    }
    if (option.type && !option.args?.length) {
      option.args = [{
        type: option.type,
        optional: option.optionalValue,
        variadic: option.variadic,
        list: option.list,
        separator: option.separator
      }];
    }
    if (opts.flags?.length && !option.args?.length && typeof currentValue !== "undefined") {
      throw new UnexpectedOptionValueError(option.name, currentValue);
    }
    let optionArgsIndex = 0;
    let inOptionalArg = false;
    const next = () => currentValue ?? args[argsIndex + 1];
    const previous = ctx.flags[propName];
    parseNext(option);
    if (typeof ctx.flags[propName] === "undefined") {
      if (option.args?.length && !option.args?.[optionArgsIndex].optional) {
        throw new MissingOptionValueError(option.name);
      } else if (typeof option.default !== "undefined" && (option.type || option.value || option.args?.length)) {
        ctx.flags[propName] = getDefaultValue(option);
      } else {
        setFlagValue(true);
      }
    }
    if (option.value) {
      const value = option.value(ctx.flags[propName], previous);
      setFlagValue(value);
    } else if (option.collect) {
      const value = typeof previous !== "undefined" ? Array.isArray(previous) ? previous : [previous] : [];
      value.push(ctx.flags[propName]);
      setFlagValue(value);
    }
    optionsMap.set(propName, option);
    opts.option?.(option, ctx.flags[propName]);
  }
  return optionsMap;
}
function parseDottedOptions(ctx) {
  ctx.flags = Object.keys(ctx.flags).reduce((result, key) => {
    if (~key.indexOf(".")) {
      key.split(".").reduce((result2, subKey, index, parts) => {
        if (index === parts.length - 1) {
          result2[subKey] = ctx.flags[key];
        } else {
          result2[subKey] = result2[subKey] ?? {};
        }
        return result2[subKey];
      }, result);
    } else {
      result[key] = ctx.flags[key];
    }
    return result;
  }, {});
}
function splitFlags(flag) {
  flag = flag.slice(1);
  const normalized = [];
  const index = flag.indexOf("=");
  const flags = (index !== -1 ? flag.slice(0, index) : flag).split("");
  if (isNaN(Number(flag[flag.length - 1]))) {
    flags.forEach((val) => normalized.push(`-${val}`));
  } else {
    normalized.push(`-${flags.shift()}`);
    if (flags.length) {
      normalized.push(flags.join(""));
    }
  }
  if (index !== -1) {
    normalized[normalized.length - 1] += flag.slice(index);
  }
  return normalized;
}
function parseDefaultType(option, arg, value) {
  const type = arg.type || OptionType.STRING;
  const parseType = DefaultTypes[type];
  if (!parseType) {
    throw new UnknownTypeError(type, Object.keys(DefaultTypes));
  }
  return parseType({
    label: "Option",
    type,
    name: `--${option.name}`,
    value
  });
}

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/_utils.js
function getFlag2(name) {
  if (name.startsWith("-")) {
    return name;
  }
  if (name.length > 1) {
    return `--${name}`;
  }
  return `-${name}`;
}
function didYouMean2(message, type, types) {
  const match = types.length ? closestString(type, types) : void 0;
  return match ? `${message} "${match}"?` : "";
}
function didYouMeanCommand(command, commands, excludes = []) {
  const commandNames = commands.map((command2) => command2.getName()).filter((command2) => !excludes.includes(command2));
  return didYouMean2(" Did you mean command", command, commandNames);
}
var ARGUMENT_REGEX = /^[<\[].+[\]>]$/;
var ARGUMENT_DETAILS_REGEX = /[<\[:>\]]/;
function splitArguments(args) {
  const parts = args.trim().split(/[, =] */g);
  const typeParts = [];
  while (parts[parts.length - 1] && ARGUMENT_REGEX.test(parts[parts.length - 1])) {
    typeParts.unshift(parts.pop());
  }
  const typeDefinition = typeParts.join(" ");
  return { flags: parts, typeDefinition, equalsSign: args.includes("=") };
}
function parseArgumentsDefinition(argsDefinition, validate = true, all) {
  const argumentDetails = [];
  let hasOptional = false;
  let hasVariadic = false;
  const parts = argsDefinition.split(/ +/);
  for (const arg of parts) {
    if (validate && hasVariadic) {
      throw new UnexpectedArgumentAfterVariadicArgumentError(arg);
    }
    const parts2 = arg.split(ARGUMENT_DETAILS_REGEX);
    if (!parts2[1]) {
      if (all) {
        argumentDetails.push(parts2[0]);
      }
      continue;
    }
    const type = parts2[2] || OptionType.STRING;
    const details = {
      optional: arg[0] === "[",
      name: parts2[1],
      action: parts2[3] || type,
      variadic: false,
      list: type ? arg.indexOf(type + "[]") !== -1 : false,
      type
    };
    if (validate && !details.optional && hasOptional) {
      throw new UnexpectedRequiredArgumentError(details.name);
    }
    if (arg[0] === "[") {
      hasOptional = true;
    }
    if (details.name.length > 3) {
      const istVariadicLeft = details.name.slice(0, 3) === "...";
      const istVariadicRight = details.name.slice(-3) === "...";
      hasVariadic = details.variadic = istVariadicLeft || istVariadicRight;
      if (istVariadicLeft) {
        details.name = details.name.slice(3);
      } else if (istVariadicRight) {
        details.name = details.name.slice(0, -3);
      }
    }
    argumentDetails.push(details);
  }
  return argumentDetails;
}
function dedent(str) {
  const lines = str.split(/\r?\n|\r/g);
  let text = "";
  let indent = 0;
  for (const line of lines) {
    if (text || line.trim()) {
      if (!text) {
        text = line.trimStart();
        indent = line.length - text.length;
      } else {
        text += line.slice(indent);
      }
      text += "\n";
    }
  }
  return text.trimEnd();
}
function getDescription(description, short) {
  return short ? description.trim().split("\n", 1)[0].trim() : dedent(description);
}
function underscoreToCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase().replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/_errors.js
var CommandError = class _CommandError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, _CommandError.prototype);
  }
};
var ValidationError2 = class _ValidationError extends CommandError {
  constructor(message, { exitCode } = {}) {
    super(message);
    Object.defineProperty(this, "exitCode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cmd", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.setPrototypeOf(this, _ValidationError.prototype);
    this.exitCode = exitCode ?? 2;
  }
};
var DuplicateOptionNameError = class _DuplicateOptionNameError extends CommandError {
  constructor(optionName, commandName) {
    super(`An option with name '${bold(getFlag2(optionName))}' is already registered on command '${bold(commandName)}'. If it is intended to override the option, set the '${bold("override")}' option of the '${bold("option")}' method to true.`);
    Object.setPrototypeOf(this, _DuplicateOptionNameError.prototype);
  }
};
var MissingCommandNameError = class _MissingCommandNameError extends CommandError {
  constructor() {
    super("Missing command name.");
    Object.setPrototypeOf(this, _MissingCommandNameError.prototype);
  }
};
var DuplicateCommandNameError = class _DuplicateCommandNameError extends CommandError {
  constructor(name) {
    super(`Duplicate command name "${name}".`);
    Object.setPrototypeOf(this, _DuplicateCommandNameError.prototype);
  }
};
var DuplicateCommandAliasError = class _DuplicateCommandAliasError extends CommandError {
  constructor(alias) {
    super(`Duplicate command alias "${alias}".`);
    Object.setPrototypeOf(this, _DuplicateCommandAliasError.prototype);
  }
};
var CommandNotFoundError = class _CommandNotFoundError extends CommandError {
  constructor(name, commands, excluded) {
    super(`Unknown command "${name}".${didYouMeanCommand(name, commands, excluded)}`);
    Object.setPrototypeOf(this, _CommandNotFoundError.prototype);
  }
};
var DuplicateTypeError = class _DuplicateTypeError extends CommandError {
  constructor(name) {
    super(`Type with name "${name}" already exists.`);
    Object.setPrototypeOf(this, _DuplicateTypeError.prototype);
  }
};
var DuplicateCompletionError = class _DuplicateCompletionError extends CommandError {
  constructor(name) {
    super(`Completion with name "${name}" already exists.`);
    Object.setPrototypeOf(this, _DuplicateCompletionError.prototype);
  }
};
var DuplicateExampleError = class _DuplicateExampleError extends CommandError {
  constructor(name) {
    super(`Example with name "${name}" already exists.`);
    Object.setPrototypeOf(this, _DuplicateExampleError.prototype);
  }
};
var DuplicateEnvVarError = class _DuplicateEnvVarError extends CommandError {
  constructor(name) {
    super(`Environment variable with name "${name}" already exists.`);
    Object.setPrototypeOf(this, _DuplicateEnvVarError.prototype);
  }
};
var MissingRequiredEnvVarError = class _MissingRequiredEnvVarError extends ValidationError2 {
  constructor(envVar) {
    super(`Missing required environment variable "${envVar.names[0]}".`);
    Object.setPrototypeOf(this, _MissingRequiredEnvVarError.prototype);
  }
};
var TooManyEnvVarValuesError = class _TooManyEnvVarValuesError extends CommandError {
  constructor(name) {
    super(`An environment variable can only have one value, but "${name}" has more than one.`);
    Object.setPrototypeOf(this, _TooManyEnvVarValuesError.prototype);
  }
};
var UnexpectedOptionalEnvVarValueError = class _UnexpectedOptionalEnvVarValueError extends CommandError {
  constructor(name) {
    super(`An environment variable cannot have an optional value, but "${name}" is defined as optional.`);
    Object.setPrototypeOf(this, _UnexpectedOptionalEnvVarValueError.prototype);
  }
};
var UnexpectedVariadicEnvVarValueError = class _UnexpectedVariadicEnvVarValueError extends CommandError {
  constructor(name) {
    super(`An environment variable cannot have an variadic value, but "${name}" is defined as variadic.`);
    Object.setPrototypeOf(this, _UnexpectedVariadicEnvVarValueError.prototype);
  }
};
var DefaultCommandNotFoundError = class _DefaultCommandNotFoundError extends CommandError {
  constructor(name, commands) {
    super(`Default command "${name}" not found.${didYouMeanCommand(name, commands)}`);
    Object.setPrototypeOf(this, _DefaultCommandNotFoundError.prototype);
  }
};
var UnknownCommandError = class _UnknownCommandError extends ValidationError2 {
  constructor(name, commands, excluded) {
    super(`Unknown command "${name}".${didYouMeanCommand(name, commands, excluded)}`);
    Object.setPrototypeOf(this, _UnknownCommandError.prototype);
  }
};
var NoArgumentsAllowedError = class _NoArgumentsAllowedError extends ValidationError2 {
  constructor(name) {
    super(`No arguments allowed for command "${name}".`);
    Object.setPrototypeOf(this, _NoArgumentsAllowedError.prototype);
  }
};
var MissingArgumentsError = class _MissingArgumentsError extends ValidationError2 {
  constructor(names) {
    super(`Missing argument(s): ${names.join(", ")}`);
    Object.setPrototypeOf(this, _MissingArgumentsError.prototype);
  }
};
var MissingArgumentError = class _MissingArgumentError extends ValidationError2 {
  constructor(name) {
    super(`Missing argument: ${name}`);
    Object.setPrototypeOf(this, _MissingArgumentError.prototype);
  }
};
var TooManyArgumentsError = class _TooManyArgumentsError extends ValidationError2 {
  constructor(args) {
    super(`Too many arguments: ${args.join(" ")}`);
    Object.setPrototypeOf(this, _TooManyArgumentsError.prototype);
  }
};

// dist/dnt/esm/deps/jsr.io/@cliffy/internal/1.0.0-rc.8/runtime/exit.js
function exit(code2) {
  const { Deno: Deno4, process: process2 } = globalThis;
  const exit2 = Deno4?.exit ?? process2?.exit;
  if (exit2) {
    exit2(code2);
  }
  throw new Error("unsupported runtime");
}

// dist/dnt/esm/deps/jsr.io/@cliffy/internal/1.0.0-rc.8/runtime/get_args.js
function getArgs() {
  const { Deno: Deno4, process: process2 } = globalThis;
  return Deno4?.args ?? process2?.argv.slice(2) ?? [];
}

// dist/dnt/esm/deps/jsr.io/@cliffy/internal/1.0.0-rc.8/runtime/get_env.js
function getEnv(name) {
  const { Deno: Deno4, process: process2 } = globalThis;
  if (Deno4) {
    return Deno4.env.get(name);
  } else if (process2) {
    return process2.env[name];
  }
  throw new Error("unsupported runtime");
}

// dist/dnt/esm/deps/jsr.io/@cliffy/table/1.0.0-rc.8/border.js
var border = {
  top: "\u2500",
  topMid: "\u252C",
  topLeft: "\u250C",
  topRight: "\u2510",
  bottom: "\u2500",
  bottomMid: "\u2534",
  bottomLeft: "\u2514",
  bottomRight: "\u2518",
  left: "\u2502",
  leftMid: "\u251C",
  mid: "\u2500",
  midMid: "\u253C",
  right: "\u2502",
  rightMid: "\u2524",
  middle: "\u2502"
};

// dist/dnt/esm/deps/jsr.io/@cliffy/table/1.0.0-rc.8/cell.js
var Cell = class _Cell {
  /** Get cell length. */
  get length() {
    return this.toString().length;
  }
  /**
   * Any unterminated ANSI formatting overflowed from previous lines of a
   * multi-line cell.
   */
  get unclosedAnsiRuns() {
    return this.options.unclosedAnsiRuns ?? "";
  }
  set unclosedAnsiRuns(val) {
    this.options.unclosedAnsiRuns = val;
  }
  /**
   * Create a new cell. If value is a cell, the value and all options of the cell
   * will be copied to the new cell.
   *
   * @param value Cell or cell value.
   */
  static from(value) {
    let cell;
    if (value instanceof _Cell) {
      cell = new this(value.getValue());
      cell.options = { ...value.options };
    } else {
      cell = new this(value);
    }
    return cell;
  }
  /**
   * Cell constructor.
   *
   * @param value Cell value.
   */
  constructor(value) {
    Object.defineProperty(this, "value", {
      enumerable: true,
      configurable: true,
      writable: true,
      value
    });
    Object.defineProperty(this, "options", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  /** Get cell string value. */
  toString() {
    return this.value.toString();
  }
  /** Get cell value. */
  getValue() {
    return this.value;
  }
  /**
   * Set cell value.
   *
   * @param value Cell or cell value.
   */
  setValue(value) {
    this.value = value;
    return this;
  }
  /**
   * Clone cell with all options.
   *
   * @param value Cell or cell value.
   */
  clone(value) {
    return _Cell.from(value ?? this);
  }
  /**
   * Setter:
   */
  /**
   * Enable/disable cell border.
   *
   * @param enable    Enable/disable cell border.
   * @param override  Override existing value.
   */
  border(enable = true, override = true) {
    if (override || typeof this.options.border === "undefined") {
      this.options.border = enable;
    }
    return this;
  }
  /**
   * Set col span.
   *
   * ```ts
   * import { Cell, Table } from "./mod.ts";
   *
   * new Table()
   *   .body([
   *     [
   *       new Cell("Row 1 & 2 Column 1").rowSpan(2),
   *       "Row 1 Column 2",
   *       "Row 1 Column 3",
   *     ],
   *     [new Cell("Row 2 Column 2 & 3").colSpan(2)],
   *   ])
   *   .border()
   *   .render();
   * ```
   *
   * @param span      Number of cols to span.
   * @param override  Override existing value.
   */
  colSpan(span, override = true) {
    if (override || typeof this.options.colSpan === "undefined") {
      this.options.colSpan = span;
    }
    return this;
  }
  /**
   * Set row span.
   *
   * ```ts
   * import { Cell, Table } from "./mod.ts";
   *
   * new Table()
   *   .body([
   *     [
   *       new Cell("Row 1 & 2 Column 1").rowSpan(2),
   *       "Row 1 Column 2",
   *       "Row 1 Column 3",
   *     ],
   *     [new Cell("Row 2 Column 2 & 3").colSpan(2)],
   *   ])
   *   .border()
   *   .render();
   * ```
   *
   * @param span      Number of rows to span.
   * @param override  Override existing value.
   */
  rowSpan(span, override = true) {
    if (override || typeof this.options.rowSpan === "undefined") {
      this.options.rowSpan = span;
    }
    return this;
  }
  /**
   * Align cell content.
   *
   * @param direction Align direction.
   * @param override  Override existing value.
   */
  align(direction, override = true) {
    if (override || typeof this.options.align === "undefined") {
      this.options.align = direction;
    }
    return this;
  }
  /**
   * Getter:
   */
  /** Check if cell has border. */
  getBorder() {
    return this.options.border === true;
  }
  /** Get col span. */
  getColSpan() {
    return typeof this.options.colSpan === "number" && this.options.colSpan > 0 ? this.options.colSpan : 1;
  }
  /** Get row span. */
  getRowSpan() {
    return typeof this.options.rowSpan === "number" && this.options.rowSpan > 0 ? this.options.rowSpan : 1;
  }
  /** Get row span. */
  getAlign() {
    return this.options.align ?? "left";
  }
};

// dist/dnt/esm/deps/jsr.io/@cliffy/table/1.0.0-rc.8/column.js
var Column = class _Column {
  constructor() {
    Object.defineProperty(this, "opts", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  /**
   * Create a new cell from column options or an existing column.
   * @param options
   */
  static from(options) {
    const opts = options instanceof _Column ? options.opts : options;
    return new _Column().options(opts);
  }
  /** Set column options. */
  options(options) {
    Object.assign(this.opts, options);
    return this;
  }
  /** Set min column width. */
  minWidth(width) {
    this.opts.minWidth = width;
    return this;
  }
  /** Set max column width. */
  maxWidth(width) {
    this.opts.maxWidth = width;
    return this;
  }
  /** Set column border. */
  border(border2 = true) {
    this.opts.border = border2;
    return this;
  }
  /** Set column padding. */
  padding(padding) {
    this.opts.padding = padding;
    return this;
  }
  /** Set column alignment. */
  align(direction) {
    this.opts.align = direction;
    return this;
  }
  /** Get min column width. */
  getMinWidth() {
    return this.opts.minWidth;
  }
  /** Get max column width. */
  getMaxWidth() {
    return this.opts.maxWidth;
  }
  /** Get column border. */
  getBorder() {
    return this.opts.border;
  }
  /** Get column padding. */
  getPadding() {
    return this.opts.padding;
  }
  /** Get column alignment. */
  getAlign() {
    return this.opts.align;
  }
};

// dist/dnt/esm/deps/jsr.io/@cliffy/table/1.0.0-rc.8/unicode_width.js
var tables = null;
var data = {
  "UNICODE_VERSION": "15.0.0",
  "tables": [
    {
      "d": "AAECAwQFBgcICQoLDA0OAw8DDwkQCRESERIA",
      "r": "AQEBAgEBAQEBAQEBAQEBBwEHAVABBwcBBwF4"
    },
    {
      "d": "AAECAwQFBgcGCAYJCgsMDQ4PEAYREhMUBhUWFxgZGhscHR4fICEiIyIkJSYnKCkqJSssLS4vMDEyMzQ1Njc4OToGOzwKBj0GPj9AQUIGQwZEBkVGR0hJSktMTQZOBgoGT1BRUlNUVVZXWFkGWgZbBlxdXl1fYGFiY2RlZmdoBmlqBmsGAQZsBm1uO29wcXI7czt0dXZ3OwY7eHkGent8Bn0Gfn+AgYKDhIWGBoc7iAZdO4kGiosGAXGMBo0GjgaPBpAGkQaSBpMGlJUGlpcGmJmam5ydnp+gLgahLKIGo6SlpganqKmqqwasBq0Grq8GsLGyswa0BrUGtre4Brm6uwZHvAa9vga/wME7wjvDxAbFO8bHO8gGyQbKywbMzQbOBs/Q0QbSBr8GvgbT1AbUBtUG1gbXBtjZ2tsG3N0G3t/g4eLjO+Tl5ufoO+k76gbrBuztOwbu7/AGO+XxCgYKCwZd8g==",
      "r": "AQEBAQEBAQEBAQEBAQEBAQEBAQMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECBQEOAQEBAQEBAQEBAwEBAQEBAQEBAQIBAwEIAQEBAQEBAQEBAQEBAQIBAQEBAQEBAQEBAQEBAQEBDQEBBQEBAQEBAgEBAwEBAQEBAQEBAQEBbQHaAQEFAQEBBAECAQEBAQEBAQEBAwGuASFkCAELAQEBAQEBAQEHAQMBAQEaAQIBCAEFAQEBAQEBAQEBAQEBAQEBAQEBAQECAQEBAQIBAQEBAQEBAwEDAQEBAQEBAQUBAQEBAQEBBAEBAVIBAdkBARABAQFfARMBAYoBBAEBBQEmAUkBAQcBAQIBHgEBARUBAQEBAQUBAQcBDwEBARoBAgEBAQEBAQECAQEBAQEBAQEBAQEBAQEBAQMBBAEBAgEBAQEUfwEBAQIDAXj/AQ=="
    },
    {
      "d": "AFUVAF3Xd3X/93//VXVVV9VX9V91f1/31X93XVXdVdVV9dVV/VVX1X9X/131VfXVVXV3V1VdVV1V1/1dV1X/3VUAVf3/3/9fVf3/3/9fVV1V/11VFQBQVQEAEEEQVQBQVQBAVFUVAFVUVQUAEAAUBFBVFVFVAEBVBQBUVRUAVVFVBRAAAVBVAVVQVQBVBQBAVUVUAQBUUQEAVQVVUVVUAVRVUVUFVUVBVVRBFRRQUVVQUVUBEFRRVQVVBQBRVRQBVFVRVUFVBVVFVVRVUVVUVQRUBQRQVUFVBVVFVVBVBVVQVRVUAVRVUVUFVVFVRVUFRFVRAEBVFQBAVVEAVFUAQFVQVRFRVQEAQAAEVQEAAQBUVUVVAQQAQVVQBVRVAVRVRUFVUVVRVaoAVQFVBVRVBVUFVQVVEABQVUUBAFVRVRUAVUFVUVVAFVRVRVUBVRUUVUUAQEQBAFQVABRVAEBVAFUEQFRFVRUAVVBVBVAQUFVFUBFQVQAFVUAABABUUVVUUFUVANd/X3//BUD3XdV1VQAEAFVXVdX9V1VXVQBUVdVdVdV1VX111VXVV9V//1X/X1VdVf9fVV9VdVdV1VX31dfVXXX9193/d1X/VV9VV3VVX//1VfVVXVVdVdVVdVWlVWlVqVaWVf/f/1X/Vf/1X1Xf/19V9VVf9df1X1X1X1XVVWlVfV31VVpVd1V3VapV33/fVZVVlVX1WVWlVelV+v/v//7/31Xv/6/77/tVWaVVVlVdVWaVmlX1/1WpVVZVlVWVVlVW+V9VFVBVAKqaqlWqWlWqVaoKoKpqqapqgapVqaqpqmqqVapqqv+qVqpqVRVAAFBVBVVQVUUVVUFVVFVQVQBQVRVVBQBQVRUAUFWqVkBVFQVQVVFVAUBBVRVVVFVUVQQUVAVRVVBVRVVRVFFVqlVFVQCqWlUAqmqqaqpVqlZVqmpVAV1VUVVUVQVAVQFBVQBVQBVVQVUAVRVUVQFVBQBUVQVQVVFVAEBVFFRVFVBVFUBBUUVVUVVAVRUAAQBUVRVVUFUFAEBVARRVFVAEVUVVFQBAVVRVBQBUAFRVAAVEVUVVFQBEFQRVBVBVEFRVUFUVAEARVFUVUQAQVQEFEABVFQBBVRVEFVUABVVUVQEAQFUVABRAVRVVAUABVQUAQFBVAEAAEFUFAAUABEFVAUBFEAAQVVARVRVUVVBVBUBVRFVUFQBQVQBUVQBAVRVVFUBVqlRVWlWqVapaVapWVaqpqmmqalVlVWpZVapVqlVBAFUAUABAVRVQVRUAQAEAVQVQVQVUVQBAFQBUVVFVVFUVAAEAVQBAABQAEARAVUVVAFUAQFUAQFVWVZVV/39V/1//X1X/76uq6v9XVWpVqlWqVlVaVapaVapWVamqmqqmqlWqapWqVapWqmqmqpaqWlWVaqpVZVVpVVZVlapVqlpVVmqpVapVlVZVqlZVqlVWVapqqpqqVapWqlZVqpqqWlWlqlWqVlWqVlVRVQD/Xw==",
      "r": "CBcBCAEBAQEBAQEBAQECAQEBAQEBAQEBAQEBAQMBAQECAQEBAQEBAQEBAQEBBAEBGAEDAQwBAwEIAQEBAQEBAQgcCAEDAQEBAQEDAQEBDQEDEAELAQEBEQEKAQEBDgEBAgIBAQoBBQQBCAEBAQEBAQEHAQEHBgEWAQIBDQECAgEFAQECAgEKAQ0BAQIKAQ0BDQEBAQEBAQEBAgEHAQ4BAQEBAQQBBgEBDgEBAQEBAQcBAQIBAQEBBAEFAQEBDgEBAQEBAQECAQcBDwECAQwCDQEBAQEBAQECAQgBAQEEAQcBDQEBAQEBAQQBBwERAQEBARYBAQECAQEBGAECAQIBARIBBgEBDQECAQEBAQECAQgBAQEZAQEBAgYBAQEDAQECAQEBAQMBCBgIBwEMAQEGAQcBBwEQAQEBAQEBAgIBCgEBDQEIAQ0BAQEBAQEBBgEBDgEBAQEBAQEBAgEMBwEMAQwBAQEBCQECAwEHAQEBAQ0BAQEBDgIBBgEDAQEBAQEBAQMBAQEBAgEBAQEBAQEBCAEBAgEBAQEBAQkBCAgBAwECAQEBAgEBAQkBAQEBAwECAQMBAQIBBwEFAQEDAQYBAQEBAgEBAQEBAQEBAQECAgEDAQECBAIDAgIBBQEEAQEBAwEPAQEBCyIBCAEJAwQBAQIBAQEBAgECAQEBAQMBAQEBAwEBAQEBAQEBAQgBAQMDAgEBAwEEAQIBAQEBBAEBAQEBAQECAQEBAQEBAQEBAQEHAQQBAwEBAQcBAgUBBgECAQYBAQwBAQEUAQELCAYBFgMFAQYDAQoBAQMBARQBAQkBAQoBBgEVAwsBCgIPAQ0BGQEBAgEHARQBAwIBBgEBAQUBBgQBAgEJAQEBBQECAQMHAQELAQECCQEQAQECAgECAQsBDAEBAQEBCgEBAQsBAQEECQ4BCAQCAQEECAEEAQEFCAEPAQEEAQEPAQgBFAEBAQEBAQEKAQEJAQ8BEAEBEwEBAQIBCwEBDgENAwEKAQEBAQELAQEBAQECAQwBCAEBAQEBDgEDAQwBAQECAQEXAQEBAQEHAgEBBQEIAQEBAQEQAgEBBQEUAQEBAQEbAQEBAQEGARQBAQEBARkBAQEBCQEBAQEQAQIBDwEBARQBAQEBBwEBAQkBAQEBAQECAQEBCwECAQEVAQEBAQQBBQEBAQEOAQEBAQEBEgEBFgEBAgEMAQEBAQ8BAQMBFgEBDgEBBQEPAQETAQECAQMOAgUBCgIBGQEBAQEIAQMBBwEBAwECEwgBAQcLAQUBFwEBAQEDAQEBBwEBBAEBDg0BAQwBAQEDAQQBAQEDBAEBBAEBAQEBEAEPAQgBAQsBAQ4BEQEMAgEBBwEOAQEHAQEBAQQBBAEDCwECAQEBAwEBBggBAgEBAREBBQMKAQEBAwQCEQEBHgEPAQIBAQYEAQYBAwEUAQUMAQEBAQEBAQECAQEBAgEIAwEBBgsBAgEODAMBAgEBCwEBAQEBAwECAQECAQEBBwgPAQ=="
    }
  ]
};
function lookupWidth(cp) {
  if (!tables)
    tables = data.tables.map(runLengthDecode);
  const t1Offset = tables[0][cp >> 13 & 255];
  const t2Offset = tables[1][128 * t1Offset + (cp >> 6 & 127)];
  const packedWidths = tables[2][16 * t2Offset + (cp >> 2 & 15)];
  const width = packedWidths >> 2 * (cp & 3) & 3;
  return width === 3 ? 1 : width;
}
var cache = /* @__PURE__ */ new Map();
function charWidth(char) {
  if (cache.has(char))
    return cache.get(char);
  const codePoint = char.codePointAt(0);
  let width = null;
  if (codePoint < 127) {
    width = codePoint >= 32 ? 1 : codePoint === 0 ? 0 : null;
  } else if (codePoint >= 160) {
    width = lookupWidth(codePoint);
  } else {
    width = null;
  }
  cache.set(char, width);
  return width;
}
function unicodeWidth(str) {
  return [...str].map((ch) => charWidth(ch) ?? 0).reduce((a, b) => a + b, 0);
}
function runLengthDecode({ d, r }) {
  const data2 = atob(d);
  const runLengths = atob(r);
  let out = "";
  for (const [i, ch] of [...runLengths].entries()) {
    out += data2[i].repeat(ch.codePointAt(0));
  }
  return Uint8Array.from([...out].map((x) => x.codePointAt(0)));
}

// dist/dnt/esm/deps/jsr.io/@cliffy/table/1.0.0-rc.8/_utils.js
function longest(index, rows, maxWidth) {
  const cellLengths = rows.map((row) => {
    const cell = row[index];
    const cellValue = cell instanceof Cell && cell.getColSpan() > 1 ? "" : cell?.toString() || "";
    return cellValue.split("\n").map((line) => {
      const str = typeof maxWidth === "undefined" ? line : consumeWords(maxWidth, line);
      return strLength(str) || 0;
    });
  }).flat();
  return Math.max(...cellLengths);
}
var strLength = (str) => {
  return unicodeWidth(stripAnsiCode(str));
};
var ansiRegexSource = (
  // deno-lint-ignore no-control-regex
  /\x1b\[(?:(?<_0>0)|(?<_22>1|2|22)|(?<_23>3|23)|(?<_24>4|24)|(?<_27>7|27)|(?<_28>8|28)|(?<_29>9|29)|(?<_39>30|31|32|33|34|35|36|37|38;2;\d+;\d+;\d+|38;5;\d+|39|90|91|92|93|94|95|96|97)|(?<_49>40|41|42|43|44|45|46|47|48;2;\d+;\d+;\d+|48;5;\d+|49|100|101|102|103|104|105|106|107))m/.source
);
function getUnclosedAnsiRuns(text) {
  const tokens = [];
  for (const { groups } of text.matchAll(new RegExp(ansiRegexSource, "g"))) {
    const [_kind, content] = Object.entries(groups).find(([_, val]) => val);
    tokens.push({ kind: _kind.slice(1), content });
  }
  let unclosed = [];
  for (const token of tokens) {
    unclosed = [...unclosed.filter((y) => y.kind !== token.kind), token];
  }
  unclosed = unclosed.filter(({ content, kind }) => content !== kind);
  const currentSuffix = unclosed.map(({ kind }) => `\x1B[${kind}m`).reverse().join("");
  const nextPrefix = unclosed.map(({ content }) => `\x1B[${content}m`).join("");
  return {
    /** The suffix to be appended to the text to close all unclosed runs. */
    currentSuffix,
    /**
     * The prefix to be appended to the next segment to continue unclosed
     * runs if the input text forms the first segment of a multi-line string.
     */
    nextPrefix
  };
}

// dist/dnt/esm/deps/jsr.io/@cliffy/table/1.0.0-rc.8/consume_words.js
function consumeWords(length, content) {
  let consumed = "";
  const words = content.split("\n")[0]?.split(/ /g);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (consumed) {
      const nextLength = strLength(word);
      const consumedLength = strLength(consumed);
      if (consumedLength + nextLength >= length) {
        break;
      }
    }
    consumed += (i > 0 ? " " : "") + word;
  }
  return consumed;
}
function consumeChars(length, content) {
  let consumed = "";
  const chars = [
    ...content.split("\n")[0].matchAll(new RegExp(`(?:${ansiRegexSource})+|.`, "gu"))
  ].map(([match]) => match);
  for (const char of chars) {
    if (consumed) {
      const nextLength = strLength(char);
      const consumedLength = strLength(consumed);
      if (consumedLength + nextLength > length) {
        break;
      }
    }
    consumed += char;
  }
  return consumed;
}

// dist/dnt/esm/deps/jsr.io/@cliffy/table/1.0.0-rc.8/row.js
var Row = class _Row extends Array {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "options", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  /**
   * Create a new row. If cells is a row, all cells and options of the row will
   * be copied to the new row.
   *
   * @param cells Cells or row.
   */
  static from(cells) {
    const row = new this(...cells);
    if (cells instanceof _Row) {
      row.options = { ...cells.options };
    }
    return row;
  }
  /** Clone row recursively with all options. */
  clone() {
    const row = new _Row(...this.map((cell) => cell instanceof Cell ? cell.clone() : cell));
    row.options = { ...this.options };
    return row;
  }
  /**
   * Setter:
   */
  /**
   * Enable/disable cell border.
   *
   * @param enable    Enable/disable cell border.
   * @param override  Override existing value.
   */
  border(enable = true, override = true) {
    if (override || typeof this.options.border === "undefined") {
      this.options.border = enable;
    }
    return this;
  }
  /**
   * Align row content.
   *
   * @param direction Align direction.
   * @param override  Override existing value.
   */
  align(direction, override = true) {
    if (override || typeof this.options.align === "undefined") {
      this.options.align = direction;
    }
    return this;
  }
  /**
   * Getter:
   */
  /** Check if row has border. */
  getBorder() {
    return this.options.border === true;
  }
  /** Check if row or any child cell has border. */
  hasBorder() {
    return this.getBorder() || this.some((cell) => cell instanceof Cell && cell.getBorder());
  }
  /** Get row alignment. */
  getAlign() {
    return this.options.align ?? "left";
  }
};

// dist/dnt/esm/deps/jsr.io/@cliffy/table/1.0.0-rc.8/_layout.js
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TableLayout_instances;
var _TableLayout_getRows;
var TableLayout = class {
  /**
   * Table layout constructor.
   * @param table   Table instance.
   * @param options Render options.
   */
  constructor(table, options) {
    _TableLayout_instances.add(this);
    Object.defineProperty(this, "table", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: table
    });
    Object.defineProperty(this, "options", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: options
    });
  }
  /** Generate table string. */
  toString() {
    const opts = this.createLayout();
    return opts.rows.length ? this.renderRows(opts) : "";
  }
  /**
   * Generates table layout including row and col span, converts all none
   * Cell/Row values to Cells and Rows and returns the layout rendering
   * settings.
   */
  createLayout() {
    Object.keys(this.options.chars).forEach((key) => {
      if (typeof this.options.chars[key] !== "string") {
        this.options.chars[key] = "";
      }
    });
    const hasBodyBorder = this.table.getBorder() || this.table.hasBodyBorder();
    const hasHeaderBorder = this.table.hasHeaderBorder();
    const hasBorder = hasHeaderBorder || hasBodyBorder;
    const rows = __classPrivateFieldGet(this, _TableLayout_instances, "m", _TableLayout_getRows).call(this);
    const columns = Math.max(...rows.map((row) => row.length));
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const row = rows[rowIndex];
      const length = row.length;
      if (length < columns) {
        const diff = columns - length;
        for (let i = 0; i < diff; i++) {
          row.push(this.createCell(null, row, rowIndex, length + i));
        }
      }
    }
    const padding = [];
    const width = [];
    for (let colIndex = 0; colIndex < columns; colIndex++) {
      const column = this.options.columns.at(colIndex);
      const minColWidth = column?.getMinWidth() ?? (Array.isArray(this.options.minColWidth) ? this.options.minColWidth[colIndex] : this.options.minColWidth);
      const maxColWidth = column?.getMaxWidth() ?? (Array.isArray(this.options.maxColWidth) ? this.options.maxColWidth[colIndex] : this.options.maxColWidth);
      const colWidth = longest(colIndex, rows, maxColWidth);
      width[colIndex] = Math.min(maxColWidth, Math.max(minColWidth, colWidth));
      padding[colIndex] = column?.getPadding() ?? (Array.isArray(this.options.padding) ? this.options.padding[colIndex] : this.options.padding);
    }
    return {
      padding,
      width,
      rows,
      columns,
      hasBorder,
      hasBodyBorder,
      hasHeaderBorder
    };
  }
  /**
   * Fills rows and cols by specified row/col span with a reference of the
   * original cell.
   */
  spanRows(rows) {
    const rowSpan = [];
    let colSpan = 1;
    let rowIndex = -1;
    while (true) {
      rowIndex++;
      if (rowIndex === rows.length && rowSpan.every((span) => span === 1)) {
        break;
      }
      const row = rows[rowIndex] = this.createRow(rows[rowIndex] || []);
      let colIndex = -1;
      while (true) {
        colIndex++;
        if (colIndex === row.length && colIndex === rowSpan.length && colSpan === 1) {
          break;
        }
        if (colSpan > 1) {
          colSpan--;
          rowSpan[colIndex] = rowSpan[colIndex - 1];
          row.splice(colIndex, this.getDeleteCount(rows, rowIndex, colIndex), row[colIndex - 1]);
          continue;
        }
        if (rowSpan[colIndex] > 1) {
          rowSpan[colIndex]--;
          rows[rowIndex].splice(colIndex, this.getDeleteCount(rows, rowIndex, colIndex), rows[rowIndex - 1][colIndex]);
          continue;
        }
        const cell = row[colIndex] = this.createCell(row[colIndex] || null, row, rowIndex, colIndex);
        colSpan = cell.getColSpan();
        rowSpan[colIndex] = cell.getRowSpan();
      }
    }
    return rows;
  }
  getDeleteCount(rows, rowIndex, colIndex) {
    return colIndex <= rows[rowIndex].length - 1 && typeof rows[rowIndex][colIndex] === "undefined" ? 1 : 0;
  }
  /**
   * Create a new row from existing row or cell array.
   * @param row Original row.
   */
  createRow(row) {
    return Row.from(row).border(this.table.getBorder(), false).align(this.table.getAlign(), false);
  }
  /**
   * Create a new cell from existing cell or cell value.
   *
   * @param cell      Original cell.
   * @param row       Parent row.
   * @param rowIndex  The row index of the cell.
   * @param colIndex  The column index of the cell.
   */
  createCell(cell, row, rowIndex, colIndex) {
    const column = this.options.columns.at(colIndex);
    const isHeaderRow = this.isHeaderRow(rowIndex);
    return Cell.from(cell ?? "").border((isHeaderRow ? null : column?.getBorder()) ?? row.getBorder(), false).align((isHeaderRow ? null : column?.getAlign()) ?? row.getAlign(), false);
  }
  isHeaderRow(rowIndex) {
    return rowIndex === 0 && this.table.getHeader() !== void 0;
  }
  /**
   * Render table layout.
   * @param opts Render options.
   */
  renderRows(opts) {
    let result = "";
    const rowSpan = new Array(opts.columns).fill(1);
    for (let rowIndex = 0; rowIndex < opts.rows.length; rowIndex++) {
      result += this.renderRow(rowSpan, rowIndex, opts);
    }
    return result.slice(0, -1);
  }
  /**
   * Render row.
   * @param rowSpan     Current row span.
   * @param rowIndex    Current row index.
   * @param opts        Render options.
   * @param isMultiline Is multiline row.
   */
  renderRow(rowSpan, rowIndex, opts, isMultiline) {
    const row = opts.rows[rowIndex];
    const prevRow = opts.rows[rowIndex - 1];
    const nextRow = opts.rows[rowIndex + 1];
    let result = "";
    let colSpan = 1;
    if (!isMultiline && rowIndex === 0 && row.hasBorder()) {
      result += this.renderBorderRow(void 0, row, rowSpan, opts);
    }
    let isMultilineRow = false;
    result += " ".repeat(this.options.indent || 0);
    for (let colIndex = 0; colIndex < opts.columns; colIndex++) {
      if (colSpan > 1) {
        colSpan--;
        rowSpan[colIndex] = rowSpan[colIndex - 1];
        continue;
      }
      result += this.renderCell(colIndex, row, opts);
      if (rowSpan[colIndex] > 1) {
        if (!isMultiline) {
          rowSpan[colIndex]--;
        }
      } else if (!prevRow || prevRow[colIndex] !== row[colIndex]) {
        rowSpan[colIndex] = row[colIndex].getRowSpan();
      }
      colSpan = row[colIndex].getColSpan();
      if (rowSpan[colIndex] === 1 && row[colIndex].length) {
        isMultilineRow = true;
      }
    }
    if (opts.columns > 0) {
      if (row[opts.columns - 1].getBorder()) {
        result += this.options.chars.right;
      } else if (opts.hasBorder) {
        result += " ";
      }
    }
    result += "\n";
    if (isMultilineRow) {
      return result + this.renderRow(rowSpan, rowIndex, opts, isMultilineRow);
    }
    if (opts.rows.length > 1 && (rowIndex === 0 && opts.hasHeaderBorder || rowIndex < opts.rows.length - 1 && opts.hasBodyBorder)) {
      result += this.renderBorderRow(row, nextRow, rowSpan, opts);
    }
    if (rowIndex === opts.rows.length - 1 && row.hasBorder()) {
      result += this.renderBorderRow(row, void 0, rowSpan, opts);
    }
    return result;
  }
  /**
   * Render cell.
   * @param colIndex  Current col index.
   * @param row       Current row.
   * @param opts      Render options.
   * @param noBorder  Disable border.
   */
  renderCell(colIndex, row, opts, noBorder) {
    let result = "";
    const prevCell = row[colIndex - 1];
    const cell = row[colIndex];
    if (!noBorder) {
      if (colIndex === 0) {
        if (cell.getBorder()) {
          result += this.options.chars.left;
        } else if (opts.hasBorder) {
          result += " ";
        }
      } else {
        if (cell.getBorder() || prevCell?.getBorder()) {
          result += this.options.chars.middle;
        } else if (opts.hasBorder) {
          result += " ";
        }
      }
    }
    let maxLength = opts.width[colIndex];
    const colSpan = cell.getColSpan();
    if (colSpan > 1) {
      for (let o = 1; o < colSpan; o++) {
        maxLength += opts.width[colIndex + o] + opts.padding[colIndex + o];
        if (opts.hasBorder) {
          maxLength += opts.padding[colIndex + o] + 1;
        }
      }
    }
    const { current, next } = this.renderCellValue(cell, maxLength);
    row[colIndex].setValue(next);
    if (opts.hasBorder) {
      result += " ".repeat(opts.padding[colIndex]);
    }
    result += current;
    if (opts.hasBorder || colIndex < opts.columns - 1) {
      result += " ".repeat(opts.padding[colIndex]);
    }
    return result;
  }
  /**
   * Render specified length of cell. Returns the rendered value and a new cell
   * with the rest value.
   * @param cell      Cell to render.
   * @param maxLength Max length of content to render.
   */
  renderCellValue(cell, maxLength) {
    const length = Math.min(maxLength, strLength(cell.toString()));
    let words = consumeWords(length, cell.toString());
    const breakWord = strLength(words) > length;
    if (breakWord) {
      words = consumeChars(length, words);
    }
    const next = cell.toString().slice(words.length + (breakWord ? 0 : 1));
    words = cell.unclosedAnsiRuns + words;
    const { currentSuffix, nextPrefix } = getUnclosedAnsiRuns(words);
    words += currentSuffix;
    cell.unclosedAnsiRuns = nextPrefix;
    const fillLength = maxLength - strLength(words);
    const align = cell.getAlign();
    let current;
    if (fillLength === 0) {
      current = words;
    } else if (align === "left") {
      current = words + " ".repeat(fillLength);
    } else if (align === "center") {
      current = " ".repeat(Math.floor(fillLength / 2)) + words + " ".repeat(Math.ceil(fillLength / 2));
    } else if (align === "right") {
      current = " ".repeat(fillLength) + words;
    } else {
      throw new Error("Unknown direction: " + align);
    }
    return { current, next };
  }
  /**
   * Render border row.
   * @param prevRow Previous row.
   * @param nextRow Next row.
   * @param rowSpan Current row span.
   * @param opts    Render options.
   */
  renderBorderRow(prevRow, nextRow, rowSpan, opts) {
    let result = "";
    let colSpan = 1;
    for (let colIndex = 0; colIndex < opts.columns; colIndex++) {
      if (rowSpan[colIndex] > 1) {
        if (!nextRow) {
          throw new Error("invalid layout");
        }
        if (colSpan > 1) {
          colSpan--;
          continue;
        }
      }
      result += this.renderBorderCell(colIndex, prevRow, nextRow, rowSpan, opts);
      colSpan = nextRow?.[colIndex].getColSpan() ?? 1;
    }
    return result.length ? " ".repeat(this.options.indent) + result + "\n" : "";
  }
  /**
   * Render border cell.
   * @param colIndex  Current index.
   * @param prevRow   Previous row.
   * @param nextRow   Next row.
   * @param rowSpan   Current row span.
   * @param opts      Render options.
   */
  renderBorderCell(colIndex, prevRow, nextRow, rowSpan, opts) {
    const a1 = prevRow?.[colIndex - 1];
    const a2 = nextRow?.[colIndex - 1];
    const b1 = prevRow?.[colIndex];
    const b2 = nextRow?.[colIndex];
    const a1Border = !!a1?.getBorder();
    const a2Border = !!a2?.getBorder();
    const b1Border = !!b1?.getBorder();
    const b2Border = !!b2?.getBorder();
    const hasColSpan = (cell) => (cell?.getColSpan() ?? 1) > 1;
    const hasRowSpan = (cell) => (cell?.getRowSpan() ?? 1) > 1;
    let result = "";
    if (colIndex === 0) {
      if (rowSpan[colIndex] > 1) {
        if (b1Border) {
          result += this.options.chars.left;
        } else {
          result += " ";
        }
      } else if (b1Border && b2Border) {
        result += this.options.chars.leftMid;
      } else if (b1Border) {
        result += this.options.chars.bottomLeft;
      } else if (b2Border) {
        result += this.options.chars.topLeft;
      } else {
        result += " ";
      }
    } else if (colIndex < opts.columns) {
      if (a1Border && b2Border || b1Border && a2Border) {
        const a1ColSpan = hasColSpan(a1);
        const a2ColSpan = hasColSpan(a2);
        const b1ColSpan = hasColSpan(b1);
        const b2ColSpan = hasColSpan(b2);
        const a1RowSpan = hasRowSpan(a1);
        const a2RowSpan = hasRowSpan(a2);
        const b1RowSpan = hasRowSpan(b1);
        const b2RowSpan = hasRowSpan(b2);
        const hasAllBorder = a1Border && b2Border && b1Border && a2Border;
        const hasAllRowSpan = a1RowSpan && b1RowSpan && a2RowSpan && b2RowSpan;
        const hasAllColSpan = a1ColSpan && b1ColSpan && a2ColSpan && b2ColSpan;
        if (hasAllRowSpan && hasAllBorder) {
          result += this.options.chars.middle;
        } else if (hasAllColSpan && hasAllBorder && a1 === b1 && a2 === b2) {
          result += this.options.chars.mid;
        } else if (a1ColSpan && b1ColSpan && a1 === b1) {
          result += this.options.chars.topMid;
        } else if (a2ColSpan && b2ColSpan && a2 === b2) {
          result += this.options.chars.bottomMid;
        } else if (a1RowSpan && a2RowSpan && a1 === a2) {
          result += this.options.chars.leftMid;
        } else if (b1RowSpan && b2RowSpan && b1 === b2) {
          result += this.options.chars.rightMid;
        } else {
          result += this.options.chars.midMid;
        }
      } else if (a1Border && b1Border) {
        if (hasColSpan(a1) && hasColSpan(b1) && a1 === b1) {
          result += this.options.chars.bottom;
        } else {
          result += this.options.chars.bottomMid;
        }
      } else if (b1Border && b2Border) {
        if (rowSpan[colIndex] > 1) {
          result += this.options.chars.left;
        } else {
          result += this.options.chars.leftMid;
        }
      } else if (b2Border && a2Border) {
        if (hasColSpan(a2) && hasColSpan(b2) && a2 === b2) {
          result += this.options.chars.top;
        } else {
          result += this.options.chars.topMid;
        }
      } else if (a1Border && a2Border) {
        if (hasRowSpan(a1) && a1 === a2) {
          result += this.options.chars.right;
        } else {
          result += this.options.chars.rightMid;
        }
      } else if (a1Border) {
        result += this.options.chars.bottomRight;
      } else if (b1Border) {
        result += this.options.chars.bottomLeft;
      } else if (a2Border) {
        result += this.options.chars.topRight;
      } else if (b2Border) {
        result += this.options.chars.topLeft;
      } else {
        result += " ";
      }
    }
    const length = opts.padding[colIndex] + opts.width[colIndex] + opts.padding[colIndex];
    if (rowSpan[colIndex] > 1 && nextRow) {
      result += this.renderCell(colIndex, nextRow, opts, true);
      if (nextRow[colIndex] === nextRow[nextRow.length - 1]) {
        if (b1Border) {
          result += this.options.chars.right;
        } else {
          result += " ";
        }
        return result;
      }
    } else if (b1Border && b2Border) {
      result += this.options.chars.mid.repeat(length);
    } else if (b1Border) {
      result += this.options.chars.bottom.repeat(length);
    } else if (b2Border) {
      result += this.options.chars.top.repeat(length);
    } else {
      result += " ".repeat(length);
    }
    if (colIndex === opts.columns - 1) {
      if (b1Border && b2Border) {
        result += this.options.chars.rightMid;
      } else if (b1Border) {
        result += this.options.chars.bottomRight;
      } else if (b2Border) {
        result += this.options.chars.topRight;
      } else {
        result += " ";
      }
    }
    return result;
  }
};
_TableLayout_instances = /* @__PURE__ */ new WeakSet(), _TableLayout_getRows = function _TableLayout_getRows2() {
  const header = this.table.getHeader();
  const rows = header ? [header, ...this.table] : this.table.slice();
  const hasSpan = rows.some((row) => row.some((cell) => cell instanceof Cell && (cell.getColSpan() > 1 || cell.getRowSpan() > 1)));
  if (hasSpan) {
    return this.spanRows(rows);
  }
  return rows.map((row, rowIndex) => {
    const newRow = this.createRow(row);
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      newRow[colIndex] = this.createCell(row[colIndex], newRow, rowIndex, colIndex);
    }
    return newRow;
  });
};

// dist/dnt/esm/deps/jsr.io/@cliffy/table/1.0.0-rc.8/table.js
var Table = class _Table extends Array {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "options", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        indent: 0,
        border: false,
        maxColWidth: Infinity,
        minColWidth: 0,
        padding: 1,
        chars: { ..._Table._chars },
        columns: []
      }
    });
    Object.defineProperty(this, "headerRow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * Create a new table. If rows is a table, all rows and options of the table
   * will be copied to the new table.
   *
   * @param rows An array of rows or a table instance.
   */
  static from(rows) {
    const table = new this(...rows);
    if (rows instanceof _Table) {
      table.options = { ...rows.options };
      table.headerRow = rows.headerRow ? Row.from(rows.headerRow) : void 0;
    }
    return table;
  }
  /**
   * Create a new table from an array of json objects. An object represents a
   * row and each property a column.
   *
   * @param rows Array of objects.
   */
  static fromJson(rows) {
    return new this().fromJson(rows);
  }
  /**
   * Set global default border characters.
   *
   * @param chars Border options.
   */
  static chars(chars) {
    Object.assign(this._chars, chars);
    return this;
  }
  /**
   * Write table or rows to stdout.
   *
   * @param rows Table or rows.
   */
  static render(rows) {
    _Table.from(rows).render();
  }
  /**
   * Read data from an array of json objects. An object represents a
   * row and each property a column.
   *
   * @param rows Array of objects.
   */
  fromJson(rows) {
    this.header(Object.keys(rows[0]));
    this.body(rows.map((row) => Object.values(row)));
    return this;
  }
  /**
   * Set column options.
   *
   * @param columns An array of columns or column options.
   */
  columns(columns) {
    this.options.columns = columns.map((column) => column instanceof Column ? column : Column.from(column));
    return this;
  }
  /**
   * Set column options by index.
   *
   @param index   The column index.
   @param column  Column or column options.
   */
  column(index, column) {
    if (column instanceof Column) {
      this.options.columns[index] = column;
    } else if (this.options.columns[index]) {
      this.options.columns[index].options(column);
    } else {
      this.options.columns[index] = Column.from(column);
    }
    return this;
  }
  /**
   * Set table header.
   *
   * @param header Header row or cells.
   */
  header(header) {
    this.headerRow = header instanceof Row ? header : Row.from(header);
    return this;
  }
  /**
   * Set table body.
   *
   * @param rows Array of rows.
   */
  body(rows) {
    this.length = 0;
    this.push(...rows);
    return this;
  }
  /** Clone table recursively with header and options. */
  clone() {
    const table = new _Table(...this.map((row) => row instanceof Row ? row.clone() : Row.from(row).clone()));
    table.options = { ...this.options };
    table.headerRow = this.headerRow?.clone();
    return table;
  }
  /** Generate table string. */
  toString() {
    return new TableLayout(this, this.options).toString();
  }
  /** Write table to stdout. */
  render() {
    console.log(this.toString());
    return this;
  }
  /**
   * Set max column width.
   *
   * @param width     Max column width.
   * @param override  Override existing value.
   */
  maxColWidth(width, override = true) {
    if (override || typeof this.options.maxColWidth === "undefined") {
      this.options.maxColWidth = width;
    }
    return this;
  }
  /**
   * Set min column width.
   *
   * @param width     Min column width.
   * @param override  Override existing value.
   */
  minColWidth(width, override = true) {
    if (override || typeof this.options.minColWidth === "undefined") {
      this.options.minColWidth = width;
    }
    return this;
  }
  /**
   * Set table indentation.
   *
   * @param width     Indent width.
   * @param override  Override existing value.
   */
  indent(width, override = true) {
    if (override || typeof this.options.indent === "undefined") {
      this.options.indent = width;
    }
    return this;
  }
  /**
   * Set cell padding.
   *
   * @param padding   Cell padding.
   * @param override  Override existing value.
   */
  padding(padding, override = true) {
    if (override || typeof this.options.padding === "undefined") {
      this.options.padding = padding;
    }
    return this;
  }
  /**
   * Enable/disable cell border.
   *
   * @param enable    Enable/disable cell border.
   * @param override  Override existing value.
   */
  border(enable = true, override = true) {
    if (override || typeof this.options.border === "undefined") {
      this.options.border = enable;
    }
    return this;
  }
  /**
   * Align table content.
   *
   * @param direction Align direction.
   * @param override  Override existing value.
   */
  align(direction, override = true) {
    if (override || typeof this.options.align === "undefined") {
      this.options.align = direction;
    }
    return this;
  }
  /**
   * Set border characters.
   *
   * @param chars Border options.
   */
  chars(chars) {
    Object.assign(this.options.chars, chars);
    return this;
  }
  /** Get table header. */
  getHeader() {
    return this.headerRow;
  }
  /** Get table body. */
  getBody() {
    return [...this];
  }
  /** Get max column width. */
  getMaxColWidth() {
    return this.options.maxColWidth;
  }
  /** Get min column width. */
  getMinColWidth() {
    return this.options.minColWidth;
  }
  /** Get table indentation. */
  getIndent() {
    return this.options.indent;
  }
  /** Get cell padding. */
  getPadding() {
    return this.options.padding;
  }
  /** Check if table has border. */
  getBorder() {
    return this.options.border === true;
  }
  /** Check if header row has border. */
  hasHeaderBorder() {
    const hasBorder = this.headerRow?.hasBorder();
    return hasBorder === true || this.getBorder() && hasBorder !== false;
  }
  /** Check if table bordy has border. */
  hasBodyBorder() {
    return this.getBorder() || this.options.columns.some((column) => column.getBorder()) || this.some((row) => row instanceof Row ? row.hasBorder() : row.some((cell) => cell instanceof Cell ? cell.getBorder() : false));
  }
  /** Check if table header or body has border. */
  hasBorder() {
    return this.hasHeaderBorder() || this.hasBodyBorder();
  }
  /** Get table alignment. */
  getAlign() {
    return this.options.align ?? "left";
  }
  /** Get columns. */
  getColumns() {
    return this.options.columns;
  }
  /** Get column by column index. */
  getColumn(index) {
    return this.options.columns[index] ??= new Column();
  }
};
Object.defineProperty(Table, "_chars", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: { ...border }
});

// dist/dnt/esm/deps/jsr.io/@cliffy/internal/1.0.0-rc.8/runtime/inspect.js
function inspect(value, colors2) {
  const { Deno: Deno4 } = globalThis;
  return Deno4?.inspect(value, { depth: 1, colors: colors2, trailingComma: false }) ?? JSON.stringify(value, null, 2);
}

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/type.js
var Type = class {
};

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/help/_help_generator.js
var HelpGenerator = class _HelpGenerator {
  /** Generate help text for given command. */
  static generate(cmd, options) {
    return new _HelpGenerator(cmd, options).generate();
  }
  constructor(cmd, options = {}) {
    Object.defineProperty(this, "cmd", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: cmd
    });
    Object.defineProperty(this, "indent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 2
    });
    Object.defineProperty(this, "options", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.options = {
      types: false,
      hints: true,
      colors: true,
      long: false,
      ...options
    };
  }
  generate() {
    const areColorsEnabled = getColorEnabled();
    setColorEnabled(this.options.colors);
    const result = this.generateHeader() + this.generateMeta() + this.generateDescription() + this.generateOptions() + this.generateCommands() + this.generateEnvironmentVariables() + this.generateExamples();
    setColorEnabled(areColorsEnabled);
    return result;
  }
  generateHeader() {
    const usage = this.cmd.getUsage();
    const rows = [
      [
        bold("Usage:"),
        brightMagenta(this.cmd.getPath() + (usage ? " " + highlightArguments(usage, this.options.types) : ""))
      ]
    ];
    const version2 = this.cmd.getVersion();
    if (version2) {
      rows.push([bold("Version:"), yellow(`${this.cmd.getVersion()}`)]);
    }
    return "\n" + Table.from(rows).padding(1).toString() + "\n";
  }
  generateMeta() {
    const meta = Object.entries(this.cmd.getMeta());
    if (!meta.length) {
      return "";
    }
    const rows = [];
    for (const [name, value] of meta) {
      rows.push([bold(`${name}: `) + value]);
    }
    return "\n" + Table.from(rows).padding(1).toString() + "\n";
  }
  generateDescription() {
    if (!this.cmd.getDescription()) {
      return "";
    }
    return this.label("Description") + Table.from([
      [dedent(this.cmd.getDescription())]
    ]).indent(this.indent).maxColWidth(140).padding(1).toString() + "\n";
  }
  generateOptions() {
    const options = this.cmd.getOptions(false);
    if (!options.length) {
      return "";
    }
    let groups = [];
    const hasGroups = options.some((option) => option.groupName);
    if (hasGroups) {
      for (const option of options) {
        let group = groups.find((group2) => group2.name === option.groupName);
        if (!group) {
          group = {
            name: option.groupName,
            options: []
          };
          groups.push(group);
        }
        group.options.push(option);
      }
    } else {
      groups = [{
        name: "Options",
        options
      }];
    }
    let result = "";
    for (const group of groups) {
      result += this.generateOptionGroup(group);
    }
    return result;
  }
  generateOptionGroup(group) {
    if (!group.options.length) {
      return "";
    }
    const hasTypeDefinitions = !!group.options.find((option) => !!option.typeDefinition);
    if (hasTypeDefinitions) {
      return this.label(group.name ?? "Options") + Table.from([
        ...group.options.map((option) => [
          option.flags.map((flag) => brightBlue(flag)).join(", "),
          highlightArguments(option.typeDefinition || "", this.options.types),
          red(bold("-")),
          getDescription(option.description, !this.options.long),
          this.generateHints(option)
        ])
      ]).padding([2, 2, 1, 2]).indent(this.indent).maxColWidth([60, 60, 1, 80, 60]).toString() + "\n";
    }
    return this.label(group.name ?? "Options") + Table.from([
      ...group.options.map((option) => [
        option.flags.map((flag) => brightBlue(flag)).join(", "),
        red(bold("-")),
        getDescription(option.description, !this.options.long),
        this.generateHints(option)
      ])
    ]).indent(this.indent).maxColWidth([60, 1, 80, 60]).padding([2, 1, 2]).toString() + "\n";
  }
  generateCommands() {
    const commands = this.cmd.getCommands(false);
    if (!commands.length) {
      return "";
    }
    const hasTypeDefinitions = !!commands.find((command) => !!command.getArgsDefinition());
    if (hasTypeDefinitions) {
      return this.label("Commands") + Table.from([
        ...commands.map((command) => [
          [command.getName(), ...command.getAliases()].map((name) => brightBlue(name)).join(", "),
          highlightArguments(command.getArgsDefinition() || "", this.options.types),
          red(bold("-")),
          command.getShortDescription()
        ])
      ]).indent(this.indent).maxColWidth([60, 60, 1, 80]).padding([2, 2, 1, 2]).toString() + "\n";
    }
    return this.label("Commands") + Table.from([
      ...commands.map((command) => [
        [command.getName(), ...command.getAliases()].map((name) => brightBlue(name)).join(", "),
        red(bold("-")),
        command.getShortDescription()
      ])
    ]).maxColWidth([60, 1, 80]).padding([2, 1, 2]).indent(this.indent).toString() + "\n";
  }
  generateEnvironmentVariables() {
    const envVars = this.cmd.getEnvVars(false);
    if (!envVars.length) {
      return "";
    }
    return this.label("Environment variables") + Table.from([
      ...envVars.map((envVar) => [
        envVar.names.map((name) => brightBlue(name)).join(", "),
        highlightArgumentDetails(envVar.details, this.options.types),
        red(bold("-")),
        this.options.long ? dedent(envVar.description) : envVar.description.trim().split("\n", 1)[0],
        envVar.required ? `(${yellow(`required`)})` : ""
      ])
    ]).padding([2, 2, 1, 2]).indent(this.indent).maxColWidth([60, 60, 1, 80, 10]).toString() + "\n";
  }
  generateExamples() {
    const examples = this.cmd.getExamples();
    if (!examples.length) {
      return "";
    }
    return this.label("Examples") + Table.from(examples.map((example) => [
      dim(bold(example.name)),
      dedent(example.description)
    ])).padding(1).indent(this.indent).maxColWidth(150).toString() + "\n";
  }
  generateHints(option) {
    if (!this.options.hints) {
      return "";
    }
    const hints = [];
    option.required && hints.push(yellow(`required`));
    if (typeof option.default !== "undefined") {
      const defaultValue = typeof option.default === "function" ? option.default() : option.default;
      if (typeof defaultValue !== "undefined") {
        hints.push(bold(`Default: `) + inspect(defaultValue, this.options.colors));
      }
    }
    option.depends?.length && hints.push(yellow(bold(`Depends: `)) + italic(option.depends.map(getFlag2).join(", ")));
    option.conflicts?.length && hints.push(red(bold(`Conflicts: `)) + italic(option.conflicts.map(getFlag2).join(", ")));
    const type = this.cmd.getType(option.args[0]?.type)?.handler;
    if (type instanceof Type) {
      const possibleValues = type.values?.(this.cmd, this.cmd.getParent());
      if (possibleValues?.length) {
        hints.push(bold(`Values: `) + possibleValues.map((value) => inspect(value, this.options.colors)).join(", "));
      }
    }
    if (hints.length) {
      return `(${hints.join(", ")})`;
    }
    return "";
  }
  label(label) {
    return "\n" + bold(`${label}:`) + "\n\n";
  }
};
function highlightArguments(argsDefinition, types = true) {
  if (!argsDefinition) {
    return "";
  }
  return parseArgumentsDefinition(argsDefinition, false, true).map((arg) => typeof arg === "string" ? arg : highlightArgumentDetails(arg, types)).join(" ");
}
function highlightArgumentDetails(arg, types = true) {
  let str = "";
  str += yellow(arg.optional ? "[" : "<");
  let name = "";
  name += arg.name;
  if (arg.variadic) {
    name += "...";
  }
  name = brightMagenta(name);
  str += name;
  if (types) {
    str += yellow(":");
    str += red(arg.type);
    if (arg.list) {
      str += green("[]");
    }
  }
  str += yellow(arg.optional ? "]" : ">");
  return str;
}

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/types/boolean.js
var BooleanType = class extends Type {
  /** Parse boolean type. */
  parse(type) {
    return boolean(type);
  }
  /** Complete boolean type. */
  complete() {
    return ["true", "false"];
  }
};

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/types/string.js
var StringType = class extends Type {
  /** Complete string type. */
  parse(type) {
    return string(type);
  }
};

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/types/file.js
var FileType = class extends StringType {
  constructor() {
    super();
  }
};

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/types/integer.js
var IntegerType = class extends Type {
  /** Parse integer type. */
  parse(type) {
    return integer(type);
  }
};

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/types/number.js
var NumberType = class extends Type {
  /** Parse number type. */
  parse(type) {
    return number(type);
  }
};

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/upgrade/_check_version.js
async function checkVersion(cmd) {
  const mainCommand = cmd.getMainCommand();
  const upgradeCommand = mainCommand.getCommand("upgrade");
  if (!isUpgradeCommand(upgradeCommand)) {
    return;
  }
  const latestVersion = await upgradeCommand.getLatestVersion();
  const currentVersion = mainCommand.getVersion();
  if (!currentVersion || currentVersion === latestVersion) {
    return;
  }
  const versionHelpText = `(New version available: ${latestVersion}. Run '${mainCommand.getName()} upgrade' to upgrade to the latest version!)`;
  mainCommand.version(`${currentVersion}  ${bold(yellow(versionHelpText))}`);
}
function isUpgradeCommand(command) {
  return command instanceof Command && "getLatestVersion" in command;
}

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/command.js
var Command = class _Command {
  constructor() {
    Object.defineProperty(this, "types", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /* @__PURE__ */ new Map()
    });
    Object.defineProperty(this, "rawArgs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "literalArgs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "COMMAND"
    });
    Object.defineProperty(this, "_parent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_globalParent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ver", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "desc", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ""
    });
    Object.defineProperty(this, "_usage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "actionHandler", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "globalActionHandler", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "options", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "commands", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /* @__PURE__ */ new Map()
    });
    Object.defineProperty(this, "examples", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "envVars", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "aliases", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "completions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /* @__PURE__ */ new Map()
    });
    Object.defineProperty(this, "cmd", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this
    });
    Object.defineProperty(this, "argsDefinition", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "throwOnError", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_allowEmpty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_stopEarly", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "defaultCommand", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_useRawArgs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "args", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "isHidden", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "isGlobal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "hasDefaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_versionOptions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_helpOptions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_versionOption", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_helpOption", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_help", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_shouldExit", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_meta", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_groupName", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "_noGlobals", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "errorHandler", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  versionOption(flags, desc, opts) {
    this._versionOptions = flags === false ? flags : {
      flags,
      desc,
      opts: typeof opts === "function" ? { action: opts } : opts
    };
    return this;
  }
  helpOption(flags, desc, opts) {
    this._helpOptions = flags === false ? flags : {
      flags,
      desc,
      opts: typeof opts === "function" ? { action: opts } : opts
    };
    return this;
  }
  /**
   * Add new sub-command.
   * @param nameAndArguments  Command definition. E.g: `my-command <input-file:string> <output-file:string>`
   * @param cmdOrDescription  The description of the new child command.
   * @param override          Override existing child command.
   */
  command(nameAndArguments, cmdOrDescription, override) {
    this.reset();
    const result = splitArguments(nameAndArguments);
    const name = result.flags.shift();
    const aliases = result.flags;
    if (!name) {
      throw new MissingCommandNameError();
    }
    if (this.getBaseCommand(name, true)) {
      if (!override) {
        throw new DuplicateCommandNameError(name);
      }
      this.removeCommand(name);
    }
    let description;
    let cmd;
    if (typeof cmdOrDescription === "string") {
      description = cmdOrDescription;
    }
    if (cmdOrDescription instanceof _Command) {
      cmd = cmdOrDescription.reset();
    } else {
      cmd = new _Command();
    }
    cmd._name = name;
    cmd._parent = this;
    if (description) {
      cmd.description(description);
    }
    if (result.typeDefinition) {
      cmd.arguments(result.typeDefinition);
    }
    aliases.forEach((alias) => cmd.alias(alias));
    this.commands.set(name, cmd);
    this.select(name);
    return this;
  }
  /**
   * Add new command alias.
   *
   * @param alias Tha name of the alias.
   */
  alias(alias) {
    if (this.cmd._name === alias || this.cmd.aliases.includes(alias)) {
      throw new DuplicateCommandAliasError(alias);
    }
    this.cmd.aliases.push(alias);
    return this;
  }
  /** Reset internal command reference to main command. */
  reset() {
    this._groupName = null;
    this.cmd = this;
    return this;
  }
  /**
   * Set internal command pointer to child command with given name.
   * @param name The name of the command to select.
   */
  select(name) {
    const cmd = this.getBaseCommand(name, true);
    if (!cmd) {
      throw new CommandNotFoundError(name, this.getBaseCommands(true));
    }
    this.cmd = cmd;
    return this;
  }
  /*****************************************************************************
   **** SUB HANDLER ************************************************************
   *****************************************************************************/
  /** Set command name. Used in auto generated help and shell completions */
  name(name) {
    this.cmd._name = name;
    return this;
  }
  /**
   * Set command version.
   *
   * @param version Semantic version string string or method that returns the version string.
   */
  version(version2) {
    if (typeof version2 === "string") {
      this.cmd.ver = () => version2;
    } else if (typeof version2 === "function") {
      this.cmd.ver = version2;
    }
    return this;
  }
  /**
   * Add meta data. Will be displayed in the auto generated help and in the
   * output of the long version.
   *
   * @param name  The name/label of the metadata.
   * @param value The value of the metadata.
   */
  meta(name, value) {
    this.cmd._meta[name] = value;
    return this;
  }
  getMeta(name) {
    return typeof name === "undefined" ? this._meta : this._meta[name];
  }
  /**
   * Set command help.
   *
   * @param help Help string, method, or config for generator that returns the help string.
   */
  help(help) {
    if (typeof help === "string") {
      this.cmd._help = () => help;
    } else if (typeof help === "function") {
      this.cmd._help = help;
    } else {
      this.cmd._help = (cmd, options) => HelpGenerator.generate(cmd, { ...help, ...options });
    }
    return this;
  }
  /**
   * Set the long command description.
   *
   * @param description The command description.
   */
  description(description) {
    this.cmd.desc = description;
    return this;
  }
  /**
   * Set the command usage. Defaults to arguments.
   *
   * @param usage The command usage.
   */
  usage(usage) {
    this.cmd._usage = usage;
    return this;
  }
  /** Hide command from help, completions, etc. */
  hidden() {
    this.cmd.isHidden = true;
    return this;
  }
  /** Make command globally available. */
  global() {
    this.cmd.isGlobal = true;
    return this;
  }
  /**
   * Set command arguments.
   *
   * Syntax: `<requiredArg:string> [optionalArg: number] [...restArgs:string]`
   */
  arguments(args) {
    this.cmd.argsDefinition = args;
    return this;
  }
  /**
   * Set command callback method.
   *
   * @param fn Command action handler.
   */
  action(fn) {
    this.cmd.actionHandler = fn;
    return this;
  }
  /**
   * Set command callback method.
   *
   * @param fn Command action handler.
   */
  globalAction(fn) {
    this.cmd.globalActionHandler = fn;
    return this;
  }
  /**
   * Don't throw an error if the command was called without arguments.
   *
   * @param allowEmpty Enable/disable allow empty.
   */
  allowEmpty(allowEmpty) {
    this.cmd._allowEmpty = allowEmpty !== false;
    return this;
  }
  /**
   * Enable stop early. If enabled, all arguments starting from the first non
   * option argument will be passed as arguments with type string to the command
   * action handler.
   *
   * For example:
   *     `command --debug-level warning server --port 80`
   *
   * Will result in:
   *     - options: `{ debugLevel: 'warning' }`
   *     - args: `['server', '--port', '80']`
   *
   * @param stopEarly Enable/disable stop early.
   */
  stopEarly(stopEarly = true) {
    this.cmd._stopEarly = stopEarly;
    return this;
  }
  /**
   * Disable parsing arguments. If enabled the raw arguments will be passed to
   * the action handler. This has no effect for parent or child commands. Only
   * for the command on which this method was called.
   *
   * @param useRawArgs Enable/disable raw arguments.
   */
  useRawArgs(useRawArgs = true) {
    this.cmd._useRawArgs = useRawArgs;
    return this;
  }
  /**
   * Set default command. The default command is executed when the program
   * was called without any argument and if no action handler is registered.
   *
   * @param name Name of the default command.
   */
  default(name) {
    this.cmd.defaultCommand = name;
    return this;
  }
  globalType(name, handler, options) {
    return this.type(name, handler, { ...options, global: true });
  }
  /**
   * Register custom type.
   *
   * @param name    The name of the type.
   * @param handler The callback method to parse the type.
   * @param options Type options.
   */
  type(name, handler, options) {
    if (this.cmd.types.get(name) && !options?.override) {
      throw new DuplicateTypeError(name);
    }
    this.cmd.types.set(name, {
      ...options,
      name,
      handler
    });
    if (handler instanceof Type && (typeof handler.complete !== "undefined" || typeof handler.values !== "undefined")) {
      const completeHandler = (cmd, parent) => handler.complete?.(cmd, parent) || [];
      this.complete(name, completeHandler, options);
    }
    return this;
  }
  /**
   * Register global complete handler.
   *
   * @param name      The name of the completion.
   * @param complete  The callback method to complete the type.
   * @param options   Complete options.
   */
  globalComplete(name, complete, options) {
    return this.complete(name, complete, { ...options, global: true });
  }
  complete(name, complete, options) {
    if (this.cmd.completions.has(name) && !options?.override) {
      throw new DuplicateCompletionError(name);
    }
    this.cmd.completions.set(name, {
      name,
      complete,
      ...options
    });
    return this;
  }
  /**
   * Throw validation errors instead of calling `exit()` to handle
   * validation errors manually.
   *
   * A validation error is thrown when the command is wrongly used by the user.
   * For example: If the user passes some invalid options or arguments to the
   * command.
   *
   * This has no effect for parent commands. Only for the command on which this
   * method was called and all child commands.
   *
   * **Example:**
   *
   * ```ts
   * import { Command, ValidationError } from "./mod.ts";
   *
   * const cmd = new Command();
   * // ...
   *
   * try {
   *   cmd.parse();
   * } catch(error) {
   *   if (error instanceof ValidationError) {
   *     cmd.showHelp();
   *     Deno.exit(1);
   *   }
   *   throw error;
   * }
   * ```
   *
   * @see ValidationError
   */
  throwErrors() {
    this.cmd.throwOnError = true;
    return this;
  }
  /**
   * Set custom error handler.
   *
   * @param handler Error handler callback function.
   */
  error(handler) {
    this.cmd.errorHandler = handler;
    return this;
  }
  /** Get error handler callback function. */
  getErrorHandler() {
    return this.errorHandler ?? this._parent?.errorHandler;
  }
  /**
   * Same as `.throwErrors()` but also prevents calling `exit()` after
   * printing help or version with the --help and --version option.
   */
  noExit() {
    this.cmd._shouldExit = false;
    this.throwErrors();
    return this;
  }
  /**
   * Disable inheriting global commands, options and environment variables from
   * parent commands.
   */
  noGlobals() {
    this.cmd._noGlobals = true;
    return this;
  }
  /** Check whether the command should throw errors or exit. */
  shouldThrowErrors() {
    return this.throwOnError || !!this._parent?.shouldThrowErrors();
  }
  /** Check whether the command should exit after printing help or version. */
  shouldExit() {
    return this._shouldExit ?? this._parent?.shouldExit() ?? true;
  }
  /**
   * Enable grouping of options and set the name of the group.
   * All option which are added after calling the `.group()` method will be
   * grouped in the help output. If the `.group()` method can be use multiple
   * times to create more groups.
   *
   * @param name The name of the option group.
   */
  group(name) {
    this.cmd._groupName = name;
    return this;
  }
  /**
   * Register a global option.
   *
   * @param flags Flags string e.g: -h, --help, --manual <requiredArg:string> [optionalArg:number] [...restArgs:string]
   * @param desc Flag description.
   * @param opts Flag options or custom handler for processing flag value.
   */
  globalOption(flags, desc, opts) {
    if (typeof opts === "function") {
      return this.option(flags, desc, { value: opts, global: true });
    }
    return this.option(flags, desc, { ...opts, global: true });
  }
  option(flags, desc, opts) {
    if (typeof opts === "function") {
      opts = { value: opts };
    }
    const result = splitArguments(flags);
    const args = result.typeDefinition ? parseArgumentsDefinition(result.typeDefinition) : [];
    const option = {
      ...opts,
      name: "",
      description: desc,
      args,
      flags: result.flags,
      equalsSign: result.equalsSign,
      typeDefinition: result.typeDefinition,
      groupName: this._groupName ?? void 0
    };
    if (option.separator) {
      for (const arg of args) {
        if (arg.list) {
          arg.separator = option.separator;
        }
      }
    }
    for (const part of option.flags) {
      const arg = part.trim();
      const isLong = /^--/.test(arg);
      const name = isLong ? arg.slice(2) : arg.slice(1);
      if (this.cmd.getBaseOption(name, true)) {
        if (opts?.override) {
          this.removeOption(name);
        } else {
          throw new DuplicateOptionNameError(name, this.getPath());
        }
      }
      if (!option.name && isLong) {
        option.name = name;
      } else if (!option.aliases) {
        option.aliases = [name];
      } else {
        option.aliases.push(name);
      }
    }
    if (option.prepend) {
      this.cmd.options.unshift(option);
    } else {
      this.cmd.options.push(option);
    }
    return this;
  }
  /**
   * Register command example.
   *
   * @param name          Name of the example.
   * @param description   The content of the example.
   */
  example(name, description) {
    if (this.cmd.hasExample(name)) {
      throw new DuplicateExampleError(name);
    }
    this.cmd.examples.push({ name, description });
    return this;
  }
  /**
   * @param flags Flags string e.g: -h, --help, --manual <requiredArg:string> [optionalArg:number] [...restArgs:string]
   * @param desc Flag description.
   * @param opts Flag options or custom handler for processing flag value.
   */
  /**
   * Register a global environment variable.
   *
   * @param name        Name of the environment variable.
   * @param description The description of the environment variable.
   * @param options     Environment variable options.
   */
  globalEnv(name, description, options) {
    return this.env(name, description, { ...options, global: true });
  }
  env(name, description, options) {
    const result = splitArguments(name);
    if (!result.typeDefinition) {
      result.typeDefinition = "<value:boolean>";
    }
    if (result.flags.some((envName) => this.cmd.getBaseEnvVar(envName, true))) {
      throw new DuplicateEnvVarError(name);
    }
    const details = parseArgumentsDefinition(result.typeDefinition);
    if (details.length > 1) {
      throw new TooManyEnvVarValuesError(name);
    } else if (details.length && details[0].optional) {
      throw new UnexpectedOptionalEnvVarValueError(name);
    } else if (details.length && details[0].variadic) {
      throw new UnexpectedVariadicEnvVarValueError(name);
    }
    this.cmd.envVars.push({
      name: result.flags[0],
      names: result.flags,
      description,
      type: details[0].type,
      details: details.shift(),
      ...options
    });
    return this;
  }
  /*****************************************************************************
   **** MAIN HANDLER ***********************************************************
   *****************************************************************************/
  /**
   * Parse command line arguments and execute matched command.
   *
   * @param args Command line args to parse. Ex: `cmd.parse( Deno.args )`
   */
  parse(args = getArgs()) {
    const ctx = {
      unknown: args.slice(),
      flags: {},
      env: {},
      literal: [],
      stopEarly: false,
      stopOnUnknown: false,
      defaults: {},
      actions: []
    };
    return this.parseCommand(ctx);
  }
  async parseCommand(ctx) {
    try {
      this.reset();
      this.registerDefaults();
      this.rawArgs = ctx.unknown.slice();
      if (this._useRawArgs) {
        await this.parseEnvVars(ctx, this.envVars);
        return await this.execute(ctx.env, ctx.unknown);
      }
      let preParseGlobals = false;
      let subCommand;
      if (ctx.unknown.length > 0) {
        subCommand = this.getSubCommand(ctx);
        if (!subCommand) {
          const optionName = ctx.unknown[0].replace(/^-+/, "").split("=")[0];
          const option = this.getOption(optionName, true);
          if (option?.global) {
            preParseGlobals = true;
            await this.parseGlobalOptionsAndEnvVars(ctx);
          }
        }
      }
      if (subCommand || ctx.unknown.length > 0) {
        subCommand ??= this.getSubCommand(ctx);
        if (subCommand) {
          subCommand._globalParent = this;
          return subCommand.parseCommand(ctx);
        }
      }
      await this.parseOptionsAndEnvVars(ctx, preParseGlobals);
      const options = { ...ctx.env, ...ctx.flags };
      const args = this.parseArguments(ctx, options);
      this.literalArgs = ctx.literal;
      if (ctx.actions.length) {
        await Promise.all(ctx.actions.map((action) => action.call(this, options, ...args)));
        if (ctx.standalone) {
          return {
            options,
            args,
            cmd: this,
            literal: this.literalArgs
          };
        }
      }
      return await this.execute(options, args);
    } catch (error) {
      this.handleError(error);
    }
  }
  getSubCommand(ctx) {
    const subCommand = this.getCommand(ctx.unknown[0], true);
    if (subCommand) {
      ctx.unknown.shift();
    }
    return subCommand;
  }
  async parseGlobalOptionsAndEnvVars(ctx) {
    const isHelpOption = this.getHelpOption()?.flags.includes(ctx.unknown[0]);
    const envVars = [
      ...this.envVars.filter((envVar) => envVar.global),
      ...this.getGlobalEnvVars(true)
    ];
    await this.parseEnvVars(ctx, envVars, !isHelpOption);
    const options = [
      ...this.options.filter((option) => option.global),
      ...this.getGlobalOptions(true)
    ];
    this.parseOptions(ctx, options, {
      stopEarly: true,
      stopOnUnknown: true,
      dotted: false
    });
  }
  async parseOptionsAndEnvVars(ctx, preParseGlobals) {
    const helpOption = this.getHelpOption();
    const isVersionOption = this._versionOption?.flags.includes(ctx.unknown[0]);
    const isHelpOption = helpOption && ctx.flags?.[helpOption.name] === true;
    const envVars = preParseGlobals ? this.envVars.filter((envVar) => !envVar.global) : this.getEnvVars(true);
    await this.parseEnvVars(ctx, envVars, !isHelpOption && !isVersionOption);
    const options = this.getOptions(true);
    this.parseOptions(ctx, options);
  }
  /** Register default options like `--version` and `--help`. */
  registerDefaults() {
    if (this.hasDefaults || this.getParent()) {
      return this;
    }
    this.hasDefaults = true;
    this.reset();
    !this.types.has("string") && this.type("string", new StringType(), { global: true });
    !this.types.has("number") && this.type("number", new NumberType(), { global: true });
    !this.types.has("integer") && this.type("integer", new IntegerType(), { global: true });
    !this.types.has("boolean") && this.type("boolean", new BooleanType(), { global: true });
    !this.types.has("file") && this.type("file", new FileType(), { global: true });
    if (!this._help) {
      this.help({});
    }
    if (this._versionOptions !== false && (this._versionOptions || this.ver)) {
      this.option(this._versionOptions?.flags || "-V, --version", this._versionOptions?.desc || "Show the version number for this program.", {
        standalone: true,
        prepend: true,
        action: async function() {
          const long = this.getRawArgs().includes(`--${this._versionOption?.name}`);
          if (long) {
            await checkVersion(this);
            this.showLongVersion();
          } else {
            this.showVersion();
          }
          this.exit();
        },
        ...this._versionOptions?.opts ?? {}
      });
      this._versionOption = this.options[0];
    }
    if (this._helpOptions !== false) {
      this.option(this._helpOptions?.flags || "-h, --help", this._helpOptions?.desc || "Show this help.", {
        standalone: true,
        global: true,
        prepend: true,
        action: async function() {
          const long = this.getRawArgs().includes(`--${this.getHelpOption()?.name}`);
          await checkVersion(this);
          this.showHelp({ long });
          this.exit();
        },
        ...this._helpOptions?.opts ?? {}
      });
      this._helpOption = this.options[0];
    }
    return this;
  }
  /**
   * Execute command.
   * @param options A map of options.
   * @param args Command arguments.
   */
  async execute(options, args) {
    if (this.defaultCommand) {
      const cmd = this.getCommand(this.defaultCommand, true);
      if (!cmd) {
        throw new DefaultCommandNotFoundError(this.defaultCommand, this.getCommands());
      }
      cmd._globalParent = this;
      return cmd.execute(options, args);
    }
    await this.executeGlobalAction(options, args);
    if (this.actionHandler) {
      await this.actionHandler(options, ...args);
    }
    return {
      options,
      args,
      cmd: this,
      literal: this.literalArgs
    };
  }
  async executeGlobalAction(options, args) {
    if (!this._noGlobals) {
      await this._parent?.executeGlobalAction(options, args);
    }
    await this.globalActionHandler?.(options, ...args);
  }
  /** Parse raw command line arguments. */
  parseOptions(ctx, options, { stopEarly = this._stopEarly, stopOnUnknown = false, dotted = true } = {}) {
    parseFlags(ctx, {
      stopEarly,
      stopOnUnknown,
      dotted,
      allowEmpty: this._allowEmpty,
      flags: options,
      ignoreDefaults: ctx.env,
      parse: (type) => this.parseType(type),
      option: (option) => {
        if (option.action) {
          ctx.actions.push(option.action);
        }
      }
    });
  }
  /** Parse argument type. */
  parseType(type) {
    const typeSettings = this.getType(type.type);
    if (!typeSettings) {
      throw new UnknownTypeError(type.type, this.getTypes().map((type2) => type2.name));
    }
    return typeSettings.handler instanceof Type ? typeSettings.handler.parse(type) : typeSettings.handler(type);
  }
  /**
   * Read and validate environment variables.
   * @param ctx Parse context.
   * @param envVars env vars defined by the command.
   * @param validate when true, throws an error if a required env var is missing.
   */
  async parseEnvVars(ctx, envVars, validate = true) {
    for (const envVar of envVars) {
      const env = await this.findEnvVar(envVar.names);
      if (env) {
        const parseType = (value) => {
          return this.parseType({
            label: "Environment variable",
            type: envVar.type,
            name: env.name,
            value
          });
        };
        const propertyName = underscoreToCamelCase(envVar.prefix ? envVar.names[0].replace(new RegExp(`^${envVar.prefix}`), "") : envVar.names[0]);
        if (envVar.details.list) {
          ctx.env[propertyName] = env.value.split(envVar.details.separator ?? ",").map(parseType);
        } else {
          ctx.env[propertyName] = parseType(env.value);
        }
        if (envVar.value && typeof ctx.env[propertyName] !== "undefined") {
          ctx.env[propertyName] = envVar.value(ctx.env[propertyName]);
        }
      } else if (envVar.required && validate) {
        throw new MissingRequiredEnvVarError(envVar);
      }
    }
  }
  async findEnvVar(names) {
    for (const name of names) {
      const status = await globalThis.Deno?.permissions.query({
        name: "env",
        variable: name
      });
      if (!status || status.state === "granted") {
        const value = getEnv(name);
        if (value) {
          return { name, value };
        }
      }
    }
    return void 0;
  }
  /**
   * Parse command-line arguments.
   * @param ctx     Parse context.
   * @param options Parsed command line options.
   */
  parseArguments(ctx, options) {
    const params = [];
    const args = ctx.unknown.slice();
    if (!this.hasArguments()) {
      if (args.length) {
        if (this.hasCommands(true)) {
          if (this.hasCommand(args[0], true)) {
            throw new TooManyArgumentsError(args);
          } else {
            throw new UnknownCommandError(args[0], this.getCommands());
          }
        } else {
          throw new NoArgumentsAllowedError(this.getPath());
        }
      }
    } else {
      if (!args.length) {
        const required = this.getArguments().filter((expectedArg) => !expectedArg.optional).map((expectedArg) => expectedArg.name);
        if (required.length) {
          const optionNames = Object.keys(options);
          const hasStandaloneOption = !!optionNames.find((name) => this.getOption(name, true)?.standalone);
          if (!hasStandaloneOption) {
            throw new MissingArgumentsError(required);
          }
        }
      } else {
        for (const expectedArg of this.getArguments()) {
          if (!args.length) {
            if (expectedArg.optional) {
              break;
            }
            throw new MissingArgumentError(expectedArg.name);
          }
          let arg;
          const parseArgValue = (value) => {
            return expectedArg.list ? value.split(",").map((value2) => parseArgType(value2)) : parseArgType(value);
          };
          const parseArgType = (value) => {
            return this.parseType({
              label: "Argument",
              type: expectedArg.type,
              name: expectedArg.name,
              value
            });
          };
          if (expectedArg.variadic) {
            arg = args.splice(0, args.length).map((value) => parseArgValue(value));
          } else {
            arg = parseArgValue(args.shift());
          }
          if (expectedArg.variadic && Array.isArray(arg)) {
            params.push(...arg);
          } else if (typeof arg !== "undefined") {
            params.push(arg);
          }
        }
        if (args.length) {
          throw new TooManyArgumentsError(args);
        }
      }
    }
    return params;
  }
  handleError(error) {
    this.throw(error instanceof ValidationError ? new ValidationError2(error.message) : error instanceof Error ? error : new Error(`[non-error-thrown] ${error}`));
  }
  /**
   * Handle error. If `throwErrors` is enabled the error will be thrown,
   * otherwise a formatted error message will be printed and `exit(1)`
   * will be called. This will also trigger registered error handlers.
   *
   * @param error The error to handle.
   */
  throw(error) {
    if (error instanceof ValidationError2) {
      error.cmd = this;
    }
    this.getErrorHandler()?.(error, this);
    if (this.shouldThrowErrors() || !(error instanceof ValidationError2)) {
      throw error;
    }
    this.showHelp();
    console.error(red(`  ${bold("error")}: ${error.message}
`));
    exit(error instanceof ValidationError2 ? error.exitCode : 1);
  }
  /*****************************************************************************
   **** GETTER *****************************************************************
   *****************************************************************************/
  /** Get command name. */
  getName() {
    return this._name;
  }
  /** Get parent command. */
  getParent() {
    return this._parent;
  }
  /**
   * Get parent command from global executed command.
   * Be sure, to call this method only inside an action handler. Unless this or any child command was executed,
   * this method returns always undefined.
   */
  getGlobalParent() {
    return this._globalParent;
  }
  /** Get main command. */
  getMainCommand() {
    return this._parent?.getMainCommand() ?? this;
  }
  /** Get command name aliases. */
  getAliases() {
    return this.aliases;
  }
  /**
   * Get full command path.
   *
   * @param name Override the main command name.
   */
  getPath(name) {
    return this._parent ? this._parent.getPath(name) + " " + this._name : name || this._name;
  }
  /** Get arguments definition. E.g: <input-file:string> <output-file:string> */
  getArgsDefinition() {
    return this.argsDefinition;
  }
  /**
   * Get argument by name.
   *
   * @param name Name of the argument.
   */
  getArgument(name) {
    return this.getArguments().find((arg) => arg.name === name);
  }
  /** Get arguments. */
  getArguments() {
    if (!this.args.length && this.argsDefinition) {
      this.args = parseArgumentsDefinition(this.argsDefinition);
    }
    return this.args;
  }
  /** Check if command has arguments. */
  hasArguments() {
    return !!this.argsDefinition;
  }
  /** Get command version. */
  getVersion() {
    return this.getVersionHandler()?.call(this, this);
  }
  /** Get help handler method. */
  getVersionHandler() {
    return this.ver ?? this._parent?.getVersionHandler();
  }
  /** Get command description. */
  getDescription() {
    return typeof this.desc === "function" ? this.desc = this.desc() : this.desc;
  }
  /** Get auto generated command usage. */
  getUsage() {
    return this._usage ?? [this.getArgsDefinition(), this.getRequiredOptionsDefinition()].join(" ").trim();
  }
  getRequiredOptionsDefinition() {
    return this.getOptions().filter((option) => option.required).map((option) => [findFlag(option.flags), option.typeDefinition].filter((v) => v).join(" ").trim()).join(" ");
  }
  /** Get short command description. This is the first line of the description. */
  getShortDescription() {
    return getDescription(this.getDescription(), true);
  }
  /** Get original command-line arguments. */
  getRawArgs() {
    return this.rawArgs;
  }
  /** Get all arguments defined after the double dash. */
  getLiteralArgs() {
    return this.literalArgs;
  }
  /** Output generated help without exiting. */
  showVersion() {
    console.log(this.getVersion());
  }
  /** Returns command name, version and meta data. */
  getLongVersion() {
    return `${bold(this.getMainCommand().getName())} ${brightBlue(this.getVersion() ?? "")}` + Object.entries(this.getMeta()).map(([k, v]) => `
${bold(k)} ${brightBlue(v)}`).join("");
  }
  /** Outputs command name, version and meta data. */
  showLongVersion() {
    console.log(this.getLongVersion());
  }
  /** Output generated help without exiting. */
  showHelp(options) {
    console.log(this.getHelp(options));
  }
  /** Get generated help. */
  getHelp(options) {
    this.registerDefaults();
    return this.getHelpHandler().call(this, this, options ?? {});
  }
  /** Get help handler method. */
  getHelpHandler() {
    return this._help ?? this._parent?.getHelpHandler();
  }
  exit(code2 = 0) {
    if (this.shouldExit()) {
      exit(code2);
    }
  }
  /*****************************************************************************
   **** Options GETTER *********************************************************
   *****************************************************************************/
  /**
   * Checks whether the command has options or not.
   *
   * @param hidden Include hidden options.
   */
  hasOptions(hidden2) {
    return this.getOptions(hidden2).length > 0;
  }
  /**
   * Get options.
   *
   * @param hidden Include hidden options.
   */
  getOptions(hidden2) {
    return this.getGlobalOptions(hidden2).concat(this.getBaseOptions(hidden2));
  }
  /**
   * Get base options.
   *
   * @param hidden Include hidden options.
   */
  getBaseOptions(hidden2) {
    if (!this.options.length) {
      return [];
    }
    return hidden2 ? this.options.slice(0) : this.options.filter((opt) => !opt.hidden);
  }
  /**
   * Get global options.
   *
   * @param hidden Include hidden options.
   */
  getGlobalOptions(hidden2) {
    const helpOption = this.getHelpOption();
    const getGlobals = (cmd, noGlobals, options = [], names = []) => {
      if (cmd.options.length) {
        for (const option of cmd.options) {
          if (option.global && !this.options.find((opt) => opt.name === option.name) && names.indexOf(option.name) === -1 && (hidden2 || !option.hidden)) {
            if (noGlobals && option !== helpOption) {
              continue;
            }
            names.push(option.name);
            options.push(option);
          }
        }
      }
      return cmd._parent ? getGlobals(cmd._parent, noGlobals || cmd._noGlobals, options, names) : options;
    };
    return this._parent ? getGlobals(this._parent, this._noGlobals) : [];
  }
  /**
   * Checks whether the command has an option with given name or not.
   *
   * @param name Name of the option. Must be in param-case.
   * @param hidden Include hidden options.
   */
  hasOption(name, hidden2) {
    return !!this.getOption(name, hidden2);
  }
  /**
   * Get option by name.
   *
   * @param name Name of the option. Must be in param-case.
   * @param hidden Include hidden options.
   */
  getOption(name, hidden2) {
    return this.getBaseOption(name, hidden2) ?? this.getGlobalOption(name, hidden2);
  }
  /**
   * Get base option by name.
   *
   * @param name Name of the option. Must be in param-case.
   * @param hidden Include hidden options.
   */
  getBaseOption(name, hidden2) {
    const option = this.options.find((option2) => option2.name === name || option2.aliases?.includes(name));
    return option && (hidden2 || !option.hidden) ? option : void 0;
  }
  /**
   * Get global option from parent commands by name.
   *
   * @param name Name of the option. Must be in param-case.
   * @param hidden Include hidden options.
   */
  getGlobalOption(name, hidden2) {
    const helpOption = this.getHelpOption();
    const getGlobalOption = (parent, noGlobals) => {
      const option = parent.getBaseOption(name, hidden2);
      if (!option?.global) {
        return parent._parent && getGlobalOption(parent._parent, noGlobals || parent._noGlobals);
      }
      if (noGlobals && option !== helpOption) {
        return;
      }
      return option;
    };
    return this._parent && getGlobalOption(this._parent, this._noGlobals);
  }
  /**
   * Remove option by name.
   *
   * @param name Name of the option. Must be in param-case.
   */
  removeOption(name) {
    const index = this.options.findIndex((option) => option.name === name);
    if (index === -1) {
      return;
    }
    return this.options.splice(index, 1)[0];
  }
  /**
   * Checks whether the command has sub-commands or not.
   *
   * @param hidden Include hidden commands.
   */
  hasCommands(hidden2) {
    return this.getCommands(hidden2).length > 0;
  }
  /**
   * Get commands.
   *
   * @param hidden Include hidden commands.
   */
  getCommands(hidden2) {
    return this.getGlobalCommands(hidden2).concat(this.getBaseCommands(hidden2));
  }
  /**
   * Get base commands.
   *
   * @param hidden Include hidden commands.
   */
  getBaseCommands(hidden2) {
    const commands = Array.from(this.commands.values());
    return hidden2 ? commands : commands.filter((cmd) => !cmd.isHidden);
  }
  /**
   * Get global commands.
   *
   * @param hidden Include hidden commands.
   */
  getGlobalCommands(hidden2) {
    const getCommands = (command, noGlobals, commands = [], names = []) => {
      if (command.commands.size) {
        for (const [_, cmd] of command.commands) {
          if (cmd.isGlobal && this !== cmd && !this.commands.has(cmd._name) && names.indexOf(cmd._name) === -1 && (hidden2 || !cmd.isHidden)) {
            if (noGlobals && cmd?.getName() !== "help") {
              continue;
            }
            names.push(cmd._name);
            commands.push(cmd);
          }
        }
      }
      return command._parent ? getCommands(command._parent, noGlobals || command._noGlobals, commands, names) : commands;
    };
    return this._parent ? getCommands(this._parent, this._noGlobals) : [];
  }
  /**
   * Checks whether a child command exists by given name or alias.
   *
   * @param name Name or alias of the command.
   * @param hidden Include hidden commands.
   */
  hasCommand(name, hidden2) {
    return !!this.getCommand(name, hidden2);
  }
  /**
   * Get command by name or alias.
   *
   * @param name Name or alias of the command.
   * @param hidden Include hidden commands.
   */
  getCommand(name, hidden2) {
    return this.getBaseCommand(name, hidden2) ?? this.getGlobalCommand(name, hidden2);
  }
  /**
   * Get base command by name or alias.
   *
   * @param name Name or alias of the command.
   * @param hidden Include hidden commands.
   */
  getBaseCommand(name, hidden2) {
    for (const cmd of this.commands.values()) {
      if (cmd._name === name || cmd.aliases.includes(name)) {
        return cmd && (hidden2 || !cmd.isHidden) ? cmd : void 0;
      }
    }
  }
  /**
   * Get global command by name or alias.
   *
   * @param name Name or alias of the command.
   * @param hidden Include hidden commands.
   */
  getGlobalCommand(name, hidden2) {
    const getGlobalCommand = (parent, noGlobals) => {
      const cmd = parent.getBaseCommand(name, hidden2);
      if (!cmd?.isGlobal) {
        return parent._parent && getGlobalCommand(parent._parent, noGlobals || parent._noGlobals);
      }
      if (noGlobals && cmd.getName() !== "help") {
        return;
      }
      return cmd;
    };
    return this._parent && getGlobalCommand(this._parent, this._noGlobals);
  }
  /**
   * Remove sub-command by name or alias.
   *
   * @param name Name or alias of the command.
   */
  removeCommand(name) {
    const command = this.getBaseCommand(name, true);
    if (command) {
      this.commands.delete(command._name);
    }
    return command;
  }
  /** Get types. */
  getTypes() {
    return this.getGlobalTypes().concat(this.getBaseTypes());
  }
  /** Get base types. */
  getBaseTypes() {
    return Array.from(this.types.values());
  }
  /** Get global types. */
  getGlobalTypes() {
    const getTypes = (cmd, types = [], names = []) => {
      if (cmd) {
        if (cmd.types.size) {
          cmd.types.forEach((type) => {
            if (type.global && !this.types.has(type.name) && names.indexOf(type.name) === -1) {
              names.push(type.name);
              types.push(type);
            }
          });
        }
        return getTypes(cmd._parent, types, names);
      }
      return types;
    };
    return getTypes(this._parent);
  }
  /**
   * Get type by name.
   *
   * @param name Name of the type.
   */
  getType(name) {
    return this.getBaseType(name) ?? this.getGlobalType(name);
  }
  /**
   * Get base type by name.
   *
   * @param name Name of the type.
   */
  getBaseType(name) {
    return this.types.get(name);
  }
  /**
   * Get global type by name.
   *
   * @param name Name of the type.
   */
  getGlobalType(name) {
    if (!this._parent) {
      return;
    }
    const cmd = this._parent.getBaseType(name);
    if (!cmd?.global) {
      return this._parent.getGlobalType(name);
    }
    return cmd;
  }
  /** Get completions. */
  getCompletions() {
    return this.getGlobalCompletions().concat(this.getBaseCompletions());
  }
  /** Get base completions. */
  getBaseCompletions() {
    return Array.from(this.completions.values());
  }
  /** Get global completions. */
  getGlobalCompletions() {
    const getCompletions = (cmd, completions = [], names = []) => {
      if (cmd) {
        if (cmd.completions.size) {
          cmd.completions.forEach((completion) => {
            if (completion.global && !this.completions.has(completion.name) && names.indexOf(completion.name) === -1) {
              names.push(completion.name);
              completions.push(completion);
            }
          });
        }
        return getCompletions(cmd._parent, completions, names);
      }
      return completions;
    };
    return getCompletions(this._parent);
  }
  /**
   * Get completion by name.
   *
   * @param name Name of the completion.
   */
  getCompletion(name) {
    return this.getBaseCompletion(name) ?? this.getGlobalCompletion(name);
  }
  /**
   * Get base completion by name.
   *
   * @param name Name of the completion.
   */
  getBaseCompletion(name) {
    return this.completions.get(name);
  }
  /**
   * Get global completions by name.
   *
   * @param name Name of the completion.
   */
  getGlobalCompletion(name) {
    if (!this._parent) {
      return;
    }
    const completion = this._parent.getBaseCompletion(name);
    if (!completion?.global) {
      return this._parent.getGlobalCompletion(name);
    }
    return completion;
  }
  /**
   * Checks whether the command has environment variables or not.
   *
   * @param hidden Include hidden environment variable.
   */
  hasEnvVars(hidden2) {
    return this.getEnvVars(hidden2).length > 0;
  }
  /**
   * Get environment variables.
   *
   * @param hidden Include hidden environment variable.
   */
  getEnvVars(hidden2) {
    return this.getGlobalEnvVars(hidden2).concat(this.getBaseEnvVars(hidden2));
  }
  /**
   * Get base environment variables.
   *
   * @param hidden Include hidden environment variable.
   */
  getBaseEnvVars(hidden2) {
    if (!this.envVars.length) {
      return [];
    }
    return hidden2 ? this.envVars.slice(0) : this.envVars.filter((env) => !env.hidden);
  }
  /**
   * Get global environment variables.
   *
   * @param hidden Include hidden environment variable.
   */
  getGlobalEnvVars(hidden2) {
    if (this._noGlobals) {
      return [];
    }
    const getEnvVars = (cmd, envVars = [], names = []) => {
      if (cmd) {
        if (cmd.envVars.length) {
          cmd.envVars.forEach((envVar) => {
            if (envVar.global && !this.envVars.find((env) => env.names[0] === envVar.names[0]) && names.indexOf(envVar.names[0]) === -1 && (hidden2 || !envVar.hidden)) {
              names.push(envVar.names[0]);
              envVars.push(envVar);
            }
          });
        }
        return getEnvVars(cmd._parent, envVars, names);
      }
      return envVars;
    };
    return getEnvVars(this._parent);
  }
  /**
   * Checks whether the command has an environment variable with given name or not.
   *
   * @param name Name of the environment variable.
   * @param hidden Include hidden environment variable.
   */
  hasEnvVar(name, hidden2) {
    return !!this.getEnvVar(name, hidden2);
  }
  /**
   * Get environment variable by name.
   *
   * @param name Name of the environment variable.
   * @param hidden Include hidden environment variable.
   */
  getEnvVar(name, hidden2) {
    return this.getBaseEnvVar(name, hidden2) ?? this.getGlobalEnvVar(name, hidden2);
  }
  /**
   * Get base environment variable by name.
   *
   * @param name Name of the environment variable.
   * @param hidden Include hidden environment variable.
   */
  getBaseEnvVar(name, hidden2) {
    const envVar = this.envVars.find((env) => env.names.indexOf(name) !== -1);
    return envVar && (hidden2 || !envVar.hidden) ? envVar : void 0;
  }
  /**
   * Get global environment variable by name.
   *
   * @param name Name of the environment variable.
   * @param hidden Include hidden environment variable.
   */
  getGlobalEnvVar(name, hidden2) {
    if (!this._parent || this._noGlobals) {
      return;
    }
    const envVar = this._parent.getBaseEnvVar(name, hidden2);
    if (!envVar?.global) {
      return this._parent.getGlobalEnvVar(name, hidden2);
    }
    return envVar;
  }
  /** Checks whether the command has examples or not. */
  hasExamples() {
    return this.examples.length > 0;
  }
  /** Get all examples. */
  getExamples() {
    return this.examples;
  }
  /** Checks whether the command has an example with given name or not. */
  hasExample(name) {
    return !!this.getExample(name);
  }
  /** Get example with given name. */
  getExample(name) {
    return this.examples.find((example) => example.name === name);
  }
  getHelpOption() {
    return this._helpOption ?? this._parent?.getHelpOption();
  }
};
function findFlag(flags) {
  for (const flag of flags) {
    if (flag.startsWith("--")) {
      return flag;
    }
  }
  return flags[0];
}

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/types/child_command.js
var _ChildCommandType_cmd;
_ChildCommandType_cmd = /* @__PURE__ */ new WeakMap();

// dist/dnt/esm/deps/jsr.io/@cliffy/command/1.0.0-rc.8/types/enum.js
var EnumType = class extends Type {
  constructor(values) {
    super();
    Object.defineProperty(this, "allowedValues", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.allowedValues = Array.isArray(values) ? values : Object.values(values);
  }
  parse(type) {
    for (const value of this.allowedValues) {
      if (value.toString() === type.value) {
        return value;
      }
    }
    throw new InvalidTypeError(type, this.allowedValues.slice());
  }
  values() {
    return this.allowedValues.slice();
  }
  complete() {
    return this.values();
  }
};

// dist/dnt/esm/gh-wrapper/exec.js
async function exec2(args) {
  let process2 = null;
  try {
    process2 = import_shim_deno2.Deno.run({
      cmd: ["gh", ...args],
      stdout: "piped",
      stderr: "piped"
    });
    const [{ code: code2 }, stdout, stderr] = await Promise.all([
      process2.status(),
      process2.output(),
      process2.stderrOutput()
    ]);
    if (code2 === 0) {
      return new TextDecoder().decode(stdout).trim();
    } else {
      const jqIndex = args.indexOf("-q");
      if (0 < jqIndex) {
        await exec2([...args.slice(0, jqIndex), ...args.slice(jqIndex + 2, args.length)]);
      }
      throw new GitHubCliError(args, code2, new TextDecoder().decode(stderr).trim());
    }
  } finally {
    process2?.close();
  }
}
var GitHubCliError = class extends Error {
  constructor(args, code2, stderr) {
    super(`\`gh ${args.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ")}\` exit code is not zero, ExitCode: ${code2}
${stderr}`);
    Object.defineProperty(this, "args", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: args
    });
    Object.defineProperty(this, "code", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: code2
    });
    Object.defineProperty(this, "stderr", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: stderr
    });
  }
};

// dist/dnt/esm/gh-wrapper/graphql.js
function graphql({ host, jq } = {}) {
  return async function graphqlTag(...[template, ...substitutions]) {
    const query = String.raw(template, ...substitutions);
    const args = ["api", "graphql", "-f", `query=${query}`];
    if (host)
      args.push("--hostname", host);
    if (jq)
      args.push("-q", jq);
    return await exec2(args);
  };
}

// dist/dnt/esm/gh-wrapper/list_commits.js
function createUrl({ owner, repo, sha, perPage, page }) {
  const param = new URLSearchParams();
  if (sha)
    param.set("sha", sha);
  if (perPage)
    param.set("per_page", String(perPage));
  if (page)
    param.set("page", String(page));
  return `repos/${owner}/${repo}/commits?${param}`;
}
async function listCommits({ host, jq, ...options }) {
  const args = ["api", createUrl(options)];
  if (host)
    args.push("--hostname", host);
  if (jq)
    args.push("-q", jq);
  return await exec2(args);
}

// dist/dnt/esm/gh-wrapper/list_tags.js
function createUrl2({ owner, repo, perPage, page }) {
  const param = new URLSearchParams();
  if (perPage)
    param.set("per_page", String(perPage));
  if (page)
    param.set("page", String(page));
  return `repos/${owner}/${repo}/tags?${param}`;
}
async function listTags({ host, jq, ...options }) {
  const args = ["api", createUrl2(options)];
  if (host)
    args.push("--hostname", host);
  if (jq)
    args.push("-q", jq);
  return await exec2(args);
}

// dist/dnt/esm/core/gh_describe_error.js
var GhDescribeError = class extends Error {
};

// dist/dnt/esm/core/fetch_history.js
async function* fetchHistory({ owner, repo, host, sha }) {
  try {
    const perPage = 100;
    const jq = ".[].sha";
    let page = 0;
    let count;
    do {
      page++;
      const stdout = await listCommits({ owner, repo, sha, perPage, page, host, jq });
      const historySpan = stdout.trim().split("\n");
      count = historySpan.length;
      for (const commitSha of historySpan) {
        yield commitSha;
      }
    } while (count === perPage);
  } catch (e) {
    if (e instanceof GitHubCliError && e.stderr === "gh: Not Found (HTTP 404)") {
      const msg = `ambiguous argument '${sha}': unknown revision or path not in the ${repo} tree.`;
      throw new GhDescribeError(msg);
    }
    throw e;
  }
}

// dist/dnt/esm/core/fetch_sha.js
async function fetchSha(args) {
  const { sha } = args;
  if (sha) {
    try {
      const perPage = 1;
      const jq = ".[].sha";
      return await listCommits({ ...args, perPage, jq });
    } catch (e) {
      throw new GhDescribeError(`couldn't find remote ref ${sha}`, { cause: e });
    }
  } else {
    return revParse({ arg: "HEAD" });
  }
}

// dist/dnt/esm/core/to_regexp_array.js
function toReqExpArray(glob) {
  if (!glob) {
    return [];
  }
  if (!(glob instanceof Array)) {
    glob = [glob];
  }
  return glob.map((x) => x instanceof RegExp ? x : globToRegExp3(x));
}

// dist/dnt/esm/core/fetch_tags.js
function parseTags(stdout, { match, exclude }) {
  return stdout.split("\n").filter((x) => x).map((x) => JSON.parse(x)).filter(([, tag]) => (!match.length || match.some((y) => y.test(tag))) && (!exclude.length || !exclude.some((y) => y.test(tag))));
}
async function fetchTags({ owner, repo, host, match, exclude }) {
  const context = {
    match: toReqExpArray(match),
    exclude: toReqExpArray(exclude)
  };
  const tags = [];
  const perPage = 100;
  const jq = ".[] | [.commit.sha, .name]";
  let page = 0;
  let count;
  do {
    page++;
    const stdout = await listTags({ owner, repo, perPage, page, host, jq });
    const tuples = parseTags(stdout, context);
    count = tags.push(...tuples);
  } while (count === perPage);
  return new Map(tags);
}

// dist/dnt/esm/core/fetch_total_commit.js
async function fetchTotalCommit({ owner, repo, host, sha }) {
  const stdout = await graphql({ host })`
  query {
    repository(owner: "${owner}", name: "${repo}") {
      object(expression: "${sha}") {
        ... on Commit {
          history(first: 0) {
            totalCount
          }
        }
      }
    }
  }`;
  const repository = JSON.parse(stdout);
  return repository.data.repository.object.history.totalCount;
}

// dist/dnt/esm/core/ghrepo.js
var GitHubRepository = class {
  constructor(owner, repo, host) {
    Object.defineProperty(this, "owner", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: owner
    });
    Object.defineProperty(this, "repo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: repo
    });
    Object.defineProperty(this, "host", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: host
    });
  }
  toString() {
    if (this.host) {
      return `${this.host}/${this.owner}/${this.repo}`;
    } else {
      return `${this.owner}/${this.repo}`;
    }
  }
};
function parse3(repo) {
  if (isUrl(repo)) {
    return parseFromUrl(repo);
  } else {
    return parseFromFullName(repo);
  }
}
function isUrl(maybeUrl) {
  return maybeUrl.startsWith("git@") || maybeUrl.startsWith("ssh:") || maybeUrl.startsWith("git+ssh:") || maybeUrl.startsWith("git:") || maybeUrl.startsWith("http:") || maybeUrl.startsWith("git+https:") || maybeUrl.startsWith("https:");
}
function parseFromUrl(rawUrl) {
  const { host, pathname } = new URL(rawUrl);
  const [_, owner, rawName] = pathname.split("/", 3);
  const name = rawName.endsWith(".git") ? rawName.substring(0, rawName.length - 4) : rawName;
  const maybeHost = host !== "github.com" ? host : void 0;
  return new GitHubRepository(owner, name, maybeHost);
}
function parseFromFullName(fullName) {
  const parts = fullName.split("/", 4);
  if (parts.some((p) => p.length <= 0)) {
    throwFormatError(fullName);
  }
  switch (parts.length) {
    case 2:
      return new GitHubRepository(parts[0], parts[1]);
    case 3:
      return new GitHubRepository(parts[1], parts[2], parts[0]);
    default:
      throwFormatError(fullName);
  }
  function throwFormatError(invalid) {
    throw new Error(`"${invalid}" is invalid format. Requires "[HOST/]OWNER/REPO" format.`);
  }
}

// dist/dnt/esm/core/get_origin.js
async function getOrigin() {
  const remotes = await listRemotes();
  const { fetchUrl } = remotes.find((x) => x.name === "origin" && x.fetchUrl) || remotes[0];
  if (!fetchUrl)
    throw new Error();
  return parseFromUrl(fetchUrl);
}

// dist/dnt/esm/core/resolve_repo.js
async function resolveRepo(repo) {
  if (typeof repo === "string") {
    return parse3(repo);
  }
  try {
    return await getOrigin();
  } catch (e) {
    if (e instanceof GitError && e.stderr === "fatal: not a git repository (or any of the parent directories): .git") {
      throw new GhDescribeError(e.stderr, e);
    }
    throw e;
  }
}

// dist/dnt/esm/core/search_tags.js
async function searchTag(tags, histories) {
  if (0 < tags.size) {
    let distance = 0;
    for await (const commit of histories) {
      const tag = tags.get(commit);
      if (tag) {
        return { tag, distance };
      } else {
        distance++;
      }
    }
  }
  return null;
}

// dist/dnt/esm/core/gh_describe.js
function MSB(x) {
  let r = 0;
  while (x > 1) {
    x >>= 1;
    r++;
  }
  return r;
}
function createDescribe(tag, distance, sha, shortShaChars) {
  if (distance === 0) {
    return tag;
  } else {
    return `${tag}-${distance}-g${sha.substring(0, shortShaChars)}`;
  }
}
async function ghDescribe(options) {
  const { commitish, defaultTag, match, exclude } = options ?? {};
  const { owner, repo, host } = await resolveRepo(options?.repo);
  const [tags, { sha, histories, shortShaChars }] = await Promise.all([
    fetchTags({ owner, repo, host, match, exclude }),
    (async () => {
      const sha2 = await fetchSha({ owner, repo, host, sha: commitish });
      const histories2 = fetchHistory({ owner, repo, host, sha: sha2 });
      const commitCount = await fetchTotalCommit({ owner, repo, host, sha: sha2 });
      const distance2 = MSB(commitCount) + 1;
      const shortShaChars2 = Math.max(7, Math.round((distance2 + 1) / 2));
      return { sha: sha2, histories: histories2, shortShaChars: shortShaChars2 };
    })()
  ]);
  const { distance, tag } = await searchTag(tags, histories) || {
    distance: 0,
    tag: defaultTag
  };
  if (!tag) {
    throw new GhDescribeError("No names found, cannot describe anything.");
  }
  const describe2 = createDescribe(tag, distance, sha, shortShaChars);
  return {
    describe: describe2,
    tag,
    distance,
    sha,
    shortSha: sha.substring(0, shortShaChars)
  };
}

// dist/dnt/esm/cli/cli.js
async function ghDescribeCli({ version: version2 }) {
  return await new Command().name("gh-describe").version(version2).description("Emulate `git describe --tags` for shallow clone repositories.").group("Options like `git describe`").option("--match <pattern...:string>", "Only consider tags matching the given glob pattern.").option("--no-match", "Clear and reset the list of match patterns.").option("--exclude <pattern...:string>", "Do not consider tags matching the given glob pattern.").option("--no-exclude", "Clear and reset the list of exclude patterns.").group("Options for `gh`").option("-R, --repo <repo>", "Target repository. Format: OWNER/REPO").group("Other options").option("--default <tag:string>", "If the name is not found, use this value.").type("runtime", new EnumType(["deno", "node"])).option("--runtime <runtime:runtime>", "If installed by `gh extension install`, can specify the execution runtime.").arguments("[commit-ish]").action(async ({ repo, default: defaultTag, match, exclude }, commitish) => {
    try {
      const { describe: describe2 } = await ghDescribe({
        repo,
        commitish,
        match: match || void 0,
        exclude: exclude || void 0,
        defaultTag
      });
      console.log(describe2);
    } catch (e) {
      if (e instanceof GhDescribeError) {
        console.error(`${colors.bold.red("fatal:")} ${e.message}`);
        import_shim_deno2.Deno.exit(1);
      } else {
        throw e;
      }
    }
  }).parse(import_shim_deno2.Deno.args);
}

// dist/dnt/esm/cli/main.node.js
async function version() {
  return await describe({ cwd: dirname3(__filename) });
}
async function run2() {
  ghDescribeCli({
    version: await version()
  });
}
run2();
