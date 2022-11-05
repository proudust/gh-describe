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
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/errors.js
var require_errors = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WriteZero = exports.UnexpectedEof = exports.TimedOut = exports.PermissionDenied = exports.NotFound = exports.NotConnected = exports.InvalidData = exports.Interrupted = exports.Http = exports.ConnectionReset = exports.ConnectionRefused = exports.ConnectionAborted = exports.Busy = exports.BrokenPipe = exports.BadResource = exports.AlreadyExists = exports.AddrNotAvailable = exports.AddrInUse = void 0;
    var AddrInUse = class extends Error {
    };
    exports.AddrInUse = AddrInUse;
    var AddrNotAvailable = class extends Error {
    };
    exports.AddrNotAvailable = AddrNotAvailable;
    var AlreadyExists = class extends Error {
    };
    exports.AlreadyExists = AlreadyExists;
    var BadResource = class extends Error {
    };
    exports.BadResource = BadResource;
    var BrokenPipe = class extends Error {
    };
    exports.BrokenPipe = BrokenPipe;
    var Busy = class extends Error {
    };
    exports.Busy = Busy;
    var ConnectionAborted = class extends Error {
    };
    exports.ConnectionAborted = ConnectionAborted;
    var ConnectionRefused = class extends Error {
    };
    exports.ConnectionRefused = ConnectionRefused;
    var ConnectionReset = class extends Error {
    };
    exports.ConnectionReset = ConnectionReset;
    var Http = class extends Error {
    };
    exports.Http = Http;
    var Interrupted = class extends Error {
    };
    exports.Interrupted = Interrupted;
    var InvalidData = class extends Error {
    };
    exports.InvalidData = InvalidData;
    var NotConnected = class extends Error {
    };
    exports.NotConnected = NotConnected;
    var NotFound = class extends Error {
    };
    exports.NotFound = NotFound;
    var PermissionDenied = class extends Error {
    };
    exports.PermissionDenied = PermissionDenied;
    var TimedOut = class extends Error {
    };
    exports.TimedOut = TimedOut;
    var UnexpectedEof = class extends Error {
    };
    exports.UnexpectedEof = UnexpectedEof;
    var WriteZero = class extends Error {
    };
    exports.WriteZero = WriteZero;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/errorMap.js
var require_errorMap = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/errorMap.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var errors = __importStar(require_errors());
    var mapper = (Ctor) => (err) => Object.assign(new Ctor(err.message), {
      stack: err.stack
    });
    var map = {
      EEXIST: mapper(errors.AlreadyExists),
      ENOENT: mapper(errors.NotFound)
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
    exports.default = mapError;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/stat.js
var require_stat = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/stat.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stat = exports.denoifyFileInfo = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    function denoifyFileInfo(s) {
      return {
        atime: s.atime,
        birthtime: s.birthtime,
        blksize: s.blksize,
        blocks: s.blocks,
        dev: s.dev,
        gid: s.gid,
        ino: s.ino,
        isDirectory: s.isDirectory(),
        isFile: s.isFile(),
        isSymlink: s.isSymbolicLink(),
        mode: s.mode,
        mtime: s.mtime,
        nlink: s.nlink,
        rdev: s.rdev,
        size: s.size,
        uid: s.uid
      };
    }
    exports.denoifyFileInfo = denoifyFileInfo;
    var stat = async (path2) => {
      try {
        return denoifyFileInfo(await (0, promises_1.stat)(path2));
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.stat = stat;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstat.js
var require_fstat = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstat.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fstat = void 0;
    var fs = __importStar(require("fs"));
    var util_1 = require("util");
    var stat_js_1 = require_stat();
    var nodeFstat = (0, util_1.promisify)(fs.fstat);
    var fstat = async function(fd) {
      return (0, stat_js_1.denoifyFileInfo)(await nodeFstat(fd));
    };
    exports.fstat = fstat;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstatSync.js
var require_fstatSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstatSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fstatSync = void 0;
    var fs_1 = require("fs");
    var stat_js_1 = require_stat();
    var fstatSync = function fstatSync2(fd) {
      return (0, stat_js_1.denoifyFileInfo)((0, fs_1.fstatSync)(fd));
    };
    exports.fstatSync = fstatSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncate.js
var require_ftruncate = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ftruncate = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var _ftruncate = (0, util_1.promisify)(fs_1.ftruncate);
    exports.ftruncate = _ftruncate;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncateSync.js
var require_ftruncateSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncateSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ftruncateSync = void 0;
    var fs_1 = require("fs");
    exports.ftruncateSync = fs_1.ftruncateSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/read.js
var require_read = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/read.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
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
    exports.read = read;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readSync.js
var require_readSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readSync = void 0;
    var fs = __importStar(require("fs"));
    var readSync = (fd, buffer) => {
      const bytesRead = fs.readSync(fd, buffer);
      return bytesRead === 0 ? null : bytesRead;
    };
    exports.readSync = readSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/write.js
var require_write = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/write.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.write = void 0;
    var fs = __importStar(require("fs"));
    var util_1 = require("util");
    var nodeWrite = (0, util_1.promisify)(fs.write);
    var write = async (fd, data) => {
      const { bytesWritten } = await nodeWrite(fd, data);
      return bytesWritten;
    };
    exports.write = write;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeSync.js
var require_writeSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeSync = void 0;
    var fs = __importStar(require("fs"));
    exports.writeSync = fs.writeSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/FsFile.js
var require_FsFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/FsFile.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.File = exports.FsFile = void 0;
    var fs = __importStar(require("fs"));
    var fstat_js_1 = require_fstat();
    var fstatSync_js_1 = require_fstatSync();
    var ftruncate_js_1 = require_ftruncate();
    var ftruncateSync_js_1 = require_ftruncateSync();
    var read_js_1 = require_read();
    var readSync_js_1 = require_readSync();
    var write_js_1 = require_write();
    var writeSync_js_1 = require_writeSync();
    var FsFile = class {
      constructor(rid) {
        this.rid = rid;
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
      close() {
        fs.closeSync(this.rid);
      }
      get readable() {
        throw new Error("Not implemented.");
      }
      get writable() {
        throw new Error("Not implemented.");
      }
    };
    exports.FsFile = FsFile;
    var File = FsFile;
    exports.File = File;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/PermissionStatus.js
var require_PermissionStatus = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/PermissionStatus.js"(exports) {
    "use strict";
    var _a;
    var _b;
    var _c;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PermissionStatus = void 0;
    (_a = (_c = globalThis).EventTarget) !== null && _a !== void 0 ? _a : _c.EventTarget = (_b = require("events").EventTarget) !== null && _b !== void 0 ? _b : null;
    var PermissionStatus = class extends EventTarget {
      constructor(state) {
        super();
        this.state = state;
        this.onchange = null;
      }
    };
    exports.PermissionStatus = PermissionStatus;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/Permissions.js
var require_Permissions = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes/Permissions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Permissions = void 0;
    var PermissionStatus_js_1 = require_PermissionStatus();
    var Permissions = class {
      query(_desc) {
        return Promise.resolve(new PermissionStatus_js_1.PermissionStatus("granted"));
      }
      revoke(_desc) {
        return Promise.resolve(new PermissionStatus_js_1.PermissionStatus("denied"));
      }
      request(desc) {
        return this.query(desc);
      }
    };
    exports.Permissions = Permissions;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes.js
var require_classes = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/classes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PermissionStatus = exports.Permissions = exports.FsFile = exports.File = void 0;
    var FsFile_js_1 = require_FsFile();
    Object.defineProperty(exports, "File", { enumerable: true, get: function() {
      return FsFile_js_1.File;
    } });
    Object.defineProperty(exports, "FsFile", { enumerable: true, get: function() {
      return FsFile_js_1.FsFile;
    } });
    var Permissions_js_1 = require_Permissions();
    Object.defineProperty(exports, "Permissions", { enumerable: true, get: function() {
      return Permissions_js_1.Permissions;
    } });
    var PermissionStatus_js_1 = require_PermissionStatus();
    Object.defineProperty(exports, "PermissionStatus", { enumerable: true, get: function() {
      return PermissionStatus_js_1.PermissionStatus;
    } });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/enums/SeekMode.js
var require_SeekMode = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/enums/SeekMode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SeekMode = void 0;
    var SeekMode;
    (function(SeekMode2) {
      SeekMode2[SeekMode2["Start"] = 0] = "Start";
      SeekMode2[SeekMode2["Current"] = 1] = "Current";
      SeekMode2[SeekMode2["End"] = 2] = "End";
    })(SeekMode = exports.SeekMode || (exports.SeekMode = {}));
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/enums.js
var require_enums = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/enums.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SeekMode = void 0;
    var SeekMode_js_1 = require_SeekMode();
    Object.defineProperty(exports, "SeekMode", { enumerable: true, get: function() {
      return SeekMode_js_1.SeekMode;
    } });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/build.js
var require_build = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/build.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.build = void 0;
    var os = __importStar(require("os"));
    exports.build = {
      arch: "x86_64",
      os: ((p) => p === "win32" ? "windows" : p === "darwin" ? "darwin" : "linux")(os.platform()),
      vendor: "pc",
      target: ((p) => p === "win32" ? "x86_64-pc-windows-msvc" : p === "darwin" ? "x86_64-apple-darwin" : "x86_64-unknown-linux-gnu")(os.platform())
    };
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/customInspect.js
var require_customInspect = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/customInspect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.customInspect = void 0;
    exports.customInspect = Symbol.for("nodejs.util.inspect.custom");
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/env.js
var require_env = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.env = void 0;
    exports.env = {
      get(key) {
        return process.env[key];
      },
      set(key, value) {
        process.env[key] = value;
      },
      delete(key) {
        delete process.env[key];
      },
      toObject() {
        return { ...process.env };
      }
    };
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/mainModule.js
var require_mainModule = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/mainModule.js"(exports) {
    "use strict";
    var _a;
    var _b;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mainModule = void 0;
    var path_1 = require("path");
    var url_1 = require("url");
    exports.mainModule = (0, url_1.pathToFileURL)((_b = (_a = require.main) === null || _a === void 0 ? void 0 : _a.filename) !== null && _b !== void 0 ? _b : (0, path_1.join)(__dirname, "$deno$repl.ts")).href;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/metrics.js
var require_metrics = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/metrics.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.metrics = void 0;
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
    exports.metrics = metrics;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/noColor.js
var require_noColor = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/noColor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.noColor = void 0;
    exports.noColor = process.env.NO_COLOR !== void 0;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/permissions.js
var require_permissions = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/permissions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.permissions = void 0;
    var Permissions_js_1 = require_Permissions();
    exports.permissions = new Permissions_js_1.Permissions();
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/pid.js
var require_pid = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/pid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pid = void 0;
    exports.pid = process.pid;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/ppid.js
var require_ppid = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/ppid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ppid = void 0;
    exports.ppid = process.ppid;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/resources.js
var require_resources = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/resources.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resources = void 0;
    var resources = function resources2() {
      console.warn([
        "Deno.resources() shim returns a dummy object that does not update.",
        "If you think this is a mistake, raise an issue at https://github.com/denoland/node_deno_shims/issues"
      ].join("\n"));
      return {};
    };
    exports.resources = resources;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/std.js
var require_std = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/std.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stderr = exports.stdout = exports.stdin = void 0;
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
    exports.stdin = {
      rid: 0,
      read: chain((p) => {
        return new Promise((resolve3, reject) => {
          process.stdin.resume();
          process.stdin.on("error", onerror);
          process.stdin.once("readable", () => {
            var _a;
            process.stdin.off("error", onerror);
            const data = (_a = process.stdin.read(p.length)) !== null && _a !== void 0 ? _a : process.stdin.read();
            if (data) {
              p.set(data);
              resolve3(data.length > 0 ? data.length : null);
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
        throw new Error("Not implemented.");
      },
      readSync() {
        throw new Error("Not implemented.");
      },
      close() {
        process.stdin.destroy();
      }
    };
    exports.stdout = {
      rid: 1,
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
        throw new Error("Not implemented.");
      },
      writeSync() {
        throw new Error("Not implemented");
      },
      close() {
        process.stdout.destroy();
      }
    };
    exports.stderr = {
      rid: 2,
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
        throw new Error("Not implemented.");
      },
      writeSync() {
        throw new Error("Not implemented");
      },
      close() {
        process.stderr.destroy();
      }
    };
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/version.js
var require_version = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.typescript = exports.deno = void 0;
    exports.deno = "1.24.1";
    exports.typescript = "4.7.4";
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/version.js
var require_version2 = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.version = void 0;
    var version_js_1 = require_version();
    exports.version = {
      deno: version_js_1.deno,
      typescript: version_js_1.typescript,
      v8: process.versions.v8
    };
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables.js
var require_variables = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.version = exports.resources = exports.ppid = exports.pid = exports.permissions = exports.noColor = exports.metrics = exports.mainModule = exports.errors = exports.env = exports.customInspect = exports.build = void 0;
    var build_js_1 = require_build();
    Object.defineProperty(exports, "build", { enumerable: true, get: function() {
      return build_js_1.build;
    } });
    var customInspect_js_1 = require_customInspect();
    Object.defineProperty(exports, "customInspect", { enumerable: true, get: function() {
      return customInspect_js_1.customInspect;
    } });
    var env_js_1 = require_env();
    Object.defineProperty(exports, "env", { enumerable: true, get: function() {
      return env_js_1.env;
    } });
    exports.errors = __importStar(require_errors());
    var mainModule_js_1 = require_mainModule();
    Object.defineProperty(exports, "mainModule", { enumerable: true, get: function() {
      return mainModule_js_1.mainModule;
    } });
    var metrics_js_1 = require_metrics();
    Object.defineProperty(exports, "metrics", { enumerable: true, get: function() {
      return metrics_js_1.metrics;
    } });
    var noColor_js_1 = require_noColor();
    Object.defineProperty(exports, "noColor", { enumerable: true, get: function() {
      return noColor_js_1.noColor;
    } });
    var permissions_js_1 = require_permissions();
    Object.defineProperty(exports, "permissions", { enumerable: true, get: function() {
      return permissions_js_1.permissions;
    } });
    var pid_js_1 = require_pid();
    Object.defineProperty(exports, "pid", { enumerable: true, get: function() {
      return pid_js_1.pid;
    } });
    var ppid_js_1 = require_ppid();
    Object.defineProperty(exports, "ppid", { enumerable: true, get: function() {
      return ppid_js_1.ppid;
    } });
    var resources_js_1 = require_resources();
    Object.defineProperty(exports, "resources", { enumerable: true, get: function() {
      return resources_js_1.resources;
    } });
    __exportStar(require_std(), exports);
    var version_js_1 = require_version2();
    Object.defineProperty(exports, "version", { enumerable: true, get: function() {
      return version_js_1.version;
    } });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chdir.js
var require_chdir = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chdir.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chdir = void 0;
    var url_1 = require("url");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var chdir = function(path2) {
      try {
        return process.chdir(path2 instanceof URL ? (0, url_1.fileURLToPath)(path2) : path2);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), chdir '${path2}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.chdir = chdir;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmod.js
var require_chmod = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmod.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chmod = void 0;
    var fs = __importStar(require("fs/promises"));
    exports.chmod = fs.chmod;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmodSync.js
var require_chmodSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmodSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chmodSync = void 0;
    var fs = __importStar(require("fs"));
    exports.chmodSync = fs.chmodSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chown.js
var require_chown = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chown.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chown = void 0;
    var fs = __importStar(require("fs/promises"));
    var chown = async (path2, uid, gid) => await fs.chown(path2, uid !== null && uid !== void 0 ? uid : -1, gid !== null && gid !== void 0 ? gid : -1);
    exports.chown = chown;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chownSync.js
var require_chownSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/chownSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chownSync = void 0;
    var fs = __importStar(require("fs"));
    var chownSync = (path2, uid, gid) => fs.chownSync(path2, uid !== null && uid !== void 0 ? uid : -1, gid !== null && gid !== void 0 ? gid : -1);
    exports.chownSync = chownSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/close.js
var require_close = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/close.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.close = void 0;
    var fs = __importStar(require("fs"));
    exports.close = fs.closeSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/Conn.js
var require_Conn = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/Conn.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Conn_socket;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TlsConn = exports.Conn = void 0;
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
      async closeWrite() {
        await new Promise((resolve3) => __classPrivateFieldGet(this, _Conn_socket, "f").end(resolve3));
      }
      setNoDelay(enable) {
        __classPrivateFieldGet(this, _Conn_socket, "f").setNoDelay(enable);
      }
      setKeepAlive(enable) {
        __classPrivateFieldGet(this, _Conn_socket, "f").setKeepAlive(enable);
      }
    };
    exports.Conn = Conn;
    _Conn_socket = /* @__PURE__ */ new WeakMap();
    var TlsConn = class extends Conn {
      handshake() {
        console.warn("@deno/shim-deno: Handshake is not supported.");
        return Promise.resolve({
          alpnProtocol: null
        });
      }
    };
    exports.TlsConn = TlsConn;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/connect.js
var require_connect = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/connect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.connect = void 0;
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
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
            hostname: socket.remoteAddress,
            port: socket.remotePort,
            transport: "tcp"
          };
          resolve3(new Conn_js_1.Conn(rid, localAddr, remoteAddr, socket));
        });
      });
    };
    exports.connect = connect;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFile.js
var require_readTextFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFile.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readTextFile = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readTextFile = async (path2, { signal } = {}) => {
      try {
        return await (0, promises_1.readFile)(path2, { encoding: "utf8", signal });
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readTextFile = readTextFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/connectTls.js
var require_connectTls = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/connectTls.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.connectTls = void 0;
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
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
            hostname: socket.remoteAddress,
            port: socket.remotePort,
            transport: "tcp"
          };
          resolve3(new Conn_js_1.TlsConn(rid, localAddr, remoteAddr, socket));
        });
      });
    };
    exports.connectTls = connectTls;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/consts.js
var require_consts = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/consts.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_BUFFER_SIZE = void 0;
    exports.DEFAULT_BUFFER_SIZE = 32 * 1024;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copy.js
var require_copy = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.copy = void 0;
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
    exports.copy = copy;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFile.js
var require_copyFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFile.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.copyFile = void 0;
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
    exports.copyFile = copyFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFileSync.js
var require_copyFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFileSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.copyFileSync = void 0;
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
    exports.copyFileSync = copyFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/fs_flags.js
var require_fs_flags = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/fs_flags.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFsFlag = exports.getCreationFlag = exports.getAccessFlag = void 0;
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
    exports.getAccessFlag = getAccessFlag;
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
    exports.getCreationFlag = getCreationFlag;
    function getFsFlag(flags) {
      return getAccessFlag(flags) | getCreationFlag(flags);
    }
    exports.getFsFlag = getFsFlag;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/open.js
var require_open = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/open.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.open = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var FsFile_js_1 = require_FsFile();
    var fs_flags_js_1 = require_fs_flags();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var nodeOpen = (0, util_1.promisify)(fs_1.open);
    var open = async function open2(path2, { read, write, append, truncate, create, createNew, mode = 438 } = {
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
        const fd = await nodeOpen(path2, flagMode, mode);
        return new FsFile_js_1.File(fd);
      } catch (err) {
        throw (0, errorMap_js_1.default)(err);
      }
    };
    exports.open = open;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/create.js
var require_create = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/create.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = void 0;
    var open_js_1 = require_open();
    var create = async function create2(path2) {
      return await (0, open_js_1.open)(path2, { write: true, create: true, truncate: true });
    };
    exports.create = create;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/openSync.js
var require_openSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/openSync.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.openSync = void 0;
    var fs_1 = require("fs");
    var FsFile_js_1 = require_FsFile();
    var fs_flags_js_1 = require_fs_flags();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var openSync = function openSync2(path2, { read, write, append, truncate, create, createNew, mode = 438 } = {
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
        const fd = (0, fs_1.openSync)(path2, flagMode, mode);
        return new FsFile_js_1.File(fd);
      } catch (err) {
        throw (0, errorMap_js_1.default)(err);
      }
    };
    exports.openSync = openSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/createSync.js
var require_createSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/createSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSync = void 0;
    var openSync_js_1 = require_openSync();
    var createSync = function createSync2(path2) {
      return (0, openSync_js_1.openSync)(path2, {
        create: true,
        truncate: true,
        read: true,
        write: true
      });
    };
    exports.createSync = createSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/cwd.js
var require_cwd = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/cwd.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cwd = void 0;
    exports.cwd = process.cwd;
  }
});

// dist/dnt/node_modules/isexe/windows.js
var require_windows = __commonJS({
  "dist/dnt/node_modules/isexe/windows.js"(exports, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = require("fs");
    function checkPathExt(path2, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i = 0; i < pathext.length; i++) {
        var p = pathext[i].toLowerCase();
        if (p && path2.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path2, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path2, options);
    }
    function isexe(path2, options, cb) {
      fs.stat(path2, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path2, options));
      });
    }
    function sync(path2, options) {
      return checkStat(fs.statSync(path2), path2, options);
    }
  }
});

// dist/dnt/node_modules/isexe/mode.js
var require_mode = __commonJS({
  "dist/dnt/node_modules/isexe/mode.js"(exports, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = require("fs");
    function isexe(path2, options, cb) {
      fs.stat(path2, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path2, options) {
      return checkStat(fs.statSync(path2), options);
    }
    function checkStat(stat, options) {
      return stat.isFile() && checkMode(stat, options);
    }
    function checkMode(stat, options) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options.uid !== void 0 ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== void 0 ? options.gid : process.getgid && process.getgid();
      var u = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o = parseInt("001", 8);
      var ug = u | g;
      var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});

// dist/dnt/node_modules/isexe/index.js
var require_isexe = __commonJS({
  "dist/dnt/node_modules/isexe/index.js"(exports, module2) {
    var fs = require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module2.exports = isexe;
    isexe.sync = sync;
    function isexe(path2, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve3, reject) {
          isexe(path2, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve3(is);
            }
          });
        });
      }
      core(path2, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path2, options) {
      try {
        return core.sync(path2, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
  }
});

// dist/dnt/node_modules/which/which.js
var require_which = __commonJS({
  "dist/dnt/node_modules/which/which.js"(exports, module2) {
    var isWindows2 = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path2 = require("path");
    var COLON = isWindows2 ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows2 && cmd.match(/\\/) ? [""] : [
        ...isWindows2 ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || "").split(colon)
      ];
      const pathExtExe = isWindows2 ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows2 ? pathExtExe.split(colon) : [""];
      if (isWindows2) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    };
    var which = (cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = (i) => new Promise((resolve3, reject) => {
        if (i === pathEnv.length)
          return opt.all && found.length ? resolve3(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path2.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve3(subStep(p, i, 0));
      });
      const subStep = (p, i, ii) => new Promise((resolve3, reject) => {
        if (ii === pathExt.length)
          return resolve3(step(i + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve3(p + ext);
          }
          return resolve3(subStep(p, i, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i = 0; i < pathEnv.length; i++) {
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path2.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    };
    module2.exports = which;
    which.sync = whichSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/execPath.js
var require_execPath = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/execPath.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.execPath = void 0;
    var which_1 = __importDefault(require_which());
    var execPath = () => which_1.default.sync("deno");
    exports.execPath = execPath;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/exit.js
var require_exit = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/exit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exit = void 0;
    var exit = function exit2(code) {
      return process.exit(code);
    };
    exports.exit = exit;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasync.js
var require_fdatasync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fdatasync = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var _fdatasync = (0, util_1.promisify)(fs_1.fdatasync);
    exports.fdatasync = _fdatasync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasyncSync.js
var require_fdatasyncSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasyncSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fdatasyncSync = void 0;
    var fs_1 = require("fs");
    exports.fdatasyncSync = fs_1.fdatasyncSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsync.js
var require_fsync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fsync = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var fsync = function fsync2(rid) {
      return (0, util_1.promisify)(fs_1.fsync)(rid);
    };
    exports.fsync = fsync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsyncSync.js
var require_fsyncSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsyncSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fsyncSync = void 0;
    var fs_1 = require("fs");
    var fsyncSync = function fsyncSync2(rid) {
      return (0, fs_1.fsyncSync)(rid);
    };
    exports.fsyncSync = fsyncSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/inspect.js
var require_inspect = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/inspect.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inspect = void 0;
    var util = __importStar(require("util"));
    var inspect = (value, options = {}) => util.inspect(value, options);
    exports.inspect = inspect;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/kill.js
var require_kill = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/kill.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.kill = void 0;
    var os_1 = __importDefault(require("os"));
    var process_1 = __importDefault(require("process"));
    var kill = function(pid, signo) {
      if (pid < 0 && os_1.default.platform() === "win32") {
        throw new TypeError("Invalid pid");
      }
      process_1.default.kill(pid, signo);
    };
    exports.kill = kill;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/link.js
var require_link = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/link.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.link = void 0;
    var fs = __importStar(require("fs/promises"));
    exports.link = fs.link;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/linkSync.js
var require_linkSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/linkSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.linkSync = void 0;
    var fs = __importStar(require("fs"));
    exports.linkSync = fs.linkSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/Listener.js
var require_Listener = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/Listener.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Listener_listener;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Listener = void 0;
    var close_js_1 = require_close();
    var errors = __importStar(require_errors());
    var Listener = class {
      constructor(rid, addr, listener) {
        this.rid = rid;
        this.addr = addr;
        _Listener_listener.set(this, void 0);
        __classPrivateFieldSet(this, _Listener_listener, listener, "f");
      }
      async accept() {
        if (!__classPrivateFieldGet(this, _Listener_listener, "f")) {
          throw new errors.BadResource("Listener not initialised");
        }
        const result = await __classPrivateFieldGet(this, _Listener_listener, "f").next();
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
      [(_Listener_listener = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
        return this;
      }
    };
    exports.Listener = Listener;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/listen.js
var require_listen = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/listen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.listen = void 0;
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
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
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
      const waitFor = new Promise((resolve3) => server.listen(port, hostname, resolve3));
      const listener = new Listener_js_1.Listener(server._handle.fd, {
        hostname,
        port,
        transport: "tcp"
      }, _listen(server, waitFor));
      return listener;
    };
    exports.listen = listen;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFileSync.js
var require_readTextFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFileSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readTextFileSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readTextFileSync = function(path2) {
      try {
        return fs.readFileSync(path2, "utf8");
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readTextFileSync = readTextFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/listenTls.js
var require_listenTls = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/listenTls.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.listenTls = void 0;
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
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
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
      const waitFor = new Promise((resolve3) => server.listen(port, hostname, resolve3));
      const listener = new Listener_js_1.Listener(server._handle.fd, {
        hostname,
        port,
        transport: "tcp"
      }, _listen(server, waitFor));
      return listener;
    };
    exports.listenTls = listenTls;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstat.js
var require_lstat = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstat.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lstat = void 0;
    var fs = __importStar(require("fs/promises"));
    var stat_js_1 = require_stat();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var lstat = async (path2) => {
      try {
        return (0, stat_js_1.denoifyFileInfo)(await fs.lstat(path2));
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.lstat = lstat;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstatSync.js
var require_lstatSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstatSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lstatSync = void 0;
    var fs = __importStar(require("fs"));
    var stat_js_1 = require_stat();
    var lstatSync = (path2) => (0, stat_js_1.denoifyFileInfo)(fs.lstatSync(path2));
    exports.lstatSync = lstatSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDir.js
var require_makeTempDir = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDir.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeTempDir = void 0;
    var promises_1 = require("fs/promises");
    var path_1 = require("path");
    var os_1 = require("os");
    var makeTempDir = function makeTempDir2({ prefix = "" } = {}) {
      return (0, promises_1.mkdtemp)((0, path_1.join)((0, os_1.tmpdir)(), prefix || "/"));
    };
    exports.makeTempDir = makeTempDir;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDirSync.js
var require_makeTempDirSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDirSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeTempDirSync = void 0;
    var fs_1 = require("fs");
    var path_1 = require("path");
    var os_1 = require("os");
    var makeTempDirSync = function makeTempDirSync2({ prefix = "" } = {}) {
      return (0, fs_1.mkdtempSync)((0, path_1.join)((0, os_1.tmpdir)(), prefix || "/"));
    };
    exports.makeTempDirSync = makeTempDirSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/random_id.js
var require_random_id = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/random_id.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomId = void 0;
    var randomId = () => {
      const n = (Math.random() * 1048575 * 1e6).toString(16);
      return "" + n.slice(0, 6);
    };
    exports.randomId = randomId;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFile.js
var require_writeTextFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFile.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeTextFile = void 0;
    var fs = __importStar(require("fs/promises"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var fs_flags_js_1 = require_fs_flags();
    var writeTextFile = async function writeTextFile2(path2, data, { append = false, create = true, mode, signal } = {}) {
      const truncate = create && !append;
      const flag = (0, fs_flags_js_1.getFsFlag)({ append, create, truncate, write: true });
      try {
        await fs.writeFile(path2, data, { flag, mode, signal });
        if (mode !== void 0)
          await fs.chmod(path2, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.writeTextFile = writeTextFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFile.js
var require_makeTempFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeTempFile = void 0;
    var os_1 = require("os");
    var path_1 = require("path");
    var random_id_js_1 = require_random_id();
    var writeTextFile_js_1 = require_writeTextFile();
    var makeTempFile = async function makeTempFile2({ prefix = "" } = {}) {
      const name = (0, path_1.join)((0, os_1.tmpdir)(), prefix, (0, random_id_js_1.randomId)());
      await (0, writeTextFile_js_1.writeTextFile)(name, "");
      return name;
    };
    exports.makeTempFile = makeTempFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFileSync.js
var require_writeTextFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFileSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeTextFileSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var writeTextFileSync = (path2, data, { append = false, create = true, mode } = {}) => {
      const flag = create ? append ? "a" : "w" : "r+";
      try {
        fs.writeFileSync(path2, data, { flag, mode });
        if (mode !== void 0)
          fs.chmodSync(path2, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.writeTextFileSync = writeTextFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFileSync.js
var require_makeTempFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFileSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeTempFileSync = void 0;
    var os_1 = require("os");
    var path_1 = require("path");
    var random_id_js_1 = require_random_id();
    var writeTextFileSync_js_1 = require_writeTextFileSync();
    var makeTempFileSync = function makeTempFileSync2({ prefix = "" } = {}) {
      const name = (0, path_1.join)((0, os_1.tmpdir)(), prefix, (0, random_id_js_1.randomId)());
      (0, writeTextFileSync_js_1.writeTextFileSync)(name, "");
      return name;
    };
    exports.makeTempFileSync = makeTempFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/memoryUsage.js
var require_memoryUsage = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/memoryUsage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.memoryUsage = void 0;
    exports.memoryUsage = process.memoryUsage;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdir.js
var require_mkdir = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdir.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mkdir = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var mkdir = async function mkdir2(path2, options) {
      try {
        await (0, promises_1.mkdir)(path2, options);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "EEXIST") {
          throw new variables_js_1.errors.AlreadyExists(`File exists (os error 17), mkdir '${path2}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.mkdir = mkdir;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdirSync.js
var require_mkdirSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdirSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mkdirSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var mkdirSync = (path2, options) => {
      try {
        fs.mkdirSync(path2, options);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "EEXIST") {
          throw new variables_js_1.errors.AlreadyExists(`File exists (os error 17), mkdir '${path2}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.mkdirSync = mkdirSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDir.js
var require_readDir = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDir.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readDir = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readDir = async function* readDir2(path2) {
      try {
        for await (const e of await (0, promises_1.opendir)(String(path2))) {
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
    exports.readDir = readDir;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDirSync.js
var require_readDirSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDirSync.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readDirSync = void 0;
    var fs_1 = require("fs");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readDirSync = function* readDir(path2) {
      try {
        for (const e of (0, fs_1.readdirSync)(String(path2), { withFileTypes: true })) {
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
    exports.readDirSync = readDirSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFile.js
var require_readFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFile.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readFile = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readFile = async function readFile2(path2, { signal } = {}) {
      try {
        const buf = await (0, promises_1.readFile)(path2, { signal });
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readFile = readFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFileSync.js
var require_readFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFileSync.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readFileSync = void 0;
    var fs_1 = require("fs");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readFileSync = function readFileSync2(path2) {
      try {
        const buf = (0, fs_1.readFileSync)(path2);
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readFileSync = readFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLink.js
var require_readLink = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLink.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readLink = void 0;
    var fs = __importStar(require("fs/promises"));
    exports.readLink = fs.readlink;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLinkSync.js
var require_readLinkSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLinkSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readLinkSync = void 0;
    var fs = __importStar(require("fs"));
    exports.readLinkSync = fs.readlinkSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPath.js
var require_realPath = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPath.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.realPath = void 0;
    var fs = __importStar(require("fs/promises"));
    exports.realPath = fs.realpath;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPathSync.js
var require_realPathSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPathSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.realPathSync = void 0;
    var fs = __importStar(require("fs"));
    exports.realPathSync = fs.realpathSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/remove.js
var require_remove = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/remove.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.remove = void 0;
    var promises_1 = require("fs/promises");
    var remove = async function remove2(path2, options = {}) {
      const innerOptions = options.recursive ? { recursive: true, force: true } : {};
      try {
        return await (0, promises_1.rm)(path2, innerOptions);
      } catch (err) {
        if (err.code === "ERR_FS_EISDIR") {
          return await (0, promises_1.rmdir)(path2, innerOptions);
        } else {
          throw err;
        }
      }
    };
    exports.remove = remove;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSync.js
var require_removeSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeSync = void 0;
    var fs = __importStar(require("fs"));
    var removeSync = (path2, options = {}) => {
      const innerOptions = options.recursive ? { recursive: true, force: true } : {};
      try {
        fs.rmSync(path2, innerOptions);
      } catch (err) {
        if (err.code === "ERR_FS_EISDIR") {
          fs.rmdirSync(path2, innerOptions);
        } else {
          throw err;
        }
      }
    };
    exports.removeSync = removeSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/rename.js
var require_rename = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/rename.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rename = void 0;
    var promises_1 = require("fs/promises");
    var rename = function rename2(oldpath, newpath) {
      return (0, promises_1.rename)(oldpath, newpath);
    };
    exports.rename = rename;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/renameSync.js
var require_renameSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/renameSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renameSync = void 0;
    var fs = __importStar(require("fs"));
    exports.renameSync = fs.renameSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/resolveDns.js
var require_resolveDns = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/resolveDns.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveDns = void 0;
    var dns_1 = __importDefault(require("dns"));
    var resolveDns = function resolveDns2(query, recordType, options) {
      if (options) {
        throw Error(`resolveDns option not implemnted yet`);
      }
      switch (recordType) {
        case "A":
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
    exports.resolveDns = resolveDns;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/streams.js
var require_streams = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/streams.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _BufferStreamReader_instances;
    var _BufferStreamReader_stream;
    var _BufferStreamReader_error;
    var _BufferStreamReader_ended;
    var _BufferStreamReader_pendingActions;
    var _BufferStreamReader_runPendingActions;
    var _StreamWriter_stream;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StreamWriter = exports.BufferStreamReader = void 0;
    var BufferStreamReader = class {
      constructor(stream) {
        _BufferStreamReader_instances.add(this);
        _BufferStreamReader_stream.set(this, void 0);
        _BufferStreamReader_error.set(this, void 0);
        _BufferStreamReader_ended.set(this, false);
        _BufferStreamReader_pendingActions.set(this, []);
        __classPrivateFieldSet(this, _BufferStreamReader_stream, stream, "f");
        __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").pause();
        __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").on("error", (error) => {
          __classPrivateFieldSet(this, _BufferStreamReader_error, error, "f");
          __classPrivateFieldGet(this, _BufferStreamReader_instances, "m", _BufferStreamReader_runPendingActions).call(this);
        });
        __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").on("readable", () => {
          __classPrivateFieldGet(this, _BufferStreamReader_instances, "m", _BufferStreamReader_runPendingActions).call(this);
        });
        __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").on("end", () => {
          __classPrivateFieldSet(this, _BufferStreamReader_ended, true, "f");
          __classPrivateFieldGet(this, _BufferStreamReader_instances, "m", _BufferStreamReader_runPendingActions).call(this);
        });
      }
      readAll() {
        return new Promise((resolve3, reject) => {
          const chunks = [];
          const action = () => {
            if (__classPrivateFieldGet(this, _BufferStreamReader_error, "f")) {
              reject(__classPrivateFieldGet(this, _BufferStreamReader_error, "f"));
              return;
            }
            const buffer = __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").read();
            if (buffer != null) {
              chunks.push(buffer);
              __classPrivateFieldGet(this, _BufferStreamReader_pendingActions, "f").push(action);
            } else if (__classPrivateFieldGet(this, _BufferStreamReader_ended, "f")) {
              const result = Buffer.concat(chunks);
              resolve3(result);
            } else {
              __classPrivateFieldGet(this, _BufferStreamReader_pendingActions, "f").push(action);
            }
          };
          action();
        });
      }
      read(p) {
        return new Promise((resolve3, reject) => {
          const action = () => {
            if (__classPrivateFieldGet(this, _BufferStreamReader_error, "f")) {
              reject(__classPrivateFieldGet(this, _BufferStreamReader_error, "f"));
              return;
            }
            const readBuffer = __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").read(p.byteLength);
            if (readBuffer && readBuffer.byteLength > 0) {
              readBuffer.copy(p, 0, 0, readBuffer.byteLength);
              resolve3(readBuffer.byteLength);
              return;
            }
            if (__classPrivateFieldGet(this, _BufferStreamReader_ended, "f")) {
              resolve3(null);
            } else {
              __classPrivateFieldGet(this, _BufferStreamReader_pendingActions, "f").push(action);
            }
          };
          action();
        });
      }
    };
    exports.BufferStreamReader = BufferStreamReader;
    _BufferStreamReader_stream = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_error = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_ended = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_pendingActions = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_instances = /* @__PURE__ */ new WeakSet(), _BufferStreamReader_runPendingActions = function _BufferStreamReader_runPendingActions2() {
      const errors = [];
      for (const action of __classPrivateFieldGet(this, _BufferStreamReader_pendingActions, "f").splice(0)) {
        try {
          action();
        } catch (err) {
          errors.push(err);
        }
      }
      if (errors.length > 0) {
        throw errors.length > 1 ? new AggregateError(errors) : errors[0];
      }
    };
    var StreamWriter = class {
      constructor(stream) {
        _StreamWriter_stream.set(this, void 0);
        __classPrivateFieldSet(this, _StreamWriter_stream, stream, "f");
      }
      write(p) {
        return new Promise((resolve3, reject) => {
          __classPrivateFieldGet(this, _StreamWriter_stream, "f").write(p, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve3(p.byteLength);
            }
          });
        });
      }
    };
    exports.StreamWriter = StreamWriter;
    _StreamWriter_stream = /* @__PURE__ */ new WeakMap();
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/run.js
var require_run = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/run.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Process = exports.run = void 0;
    var child_process_1 = __importDefault(require("child_process"));
    var fs_1 = __importDefault(require("fs"));
    var os_1 = __importDefault(require("os"));
    var url_1 = __importDefault(require("url"));
    var events_1 = require("events");
    var which_1 = __importDefault(require_which());
    var streams_js_1 = require_streams();
    var errors = __importStar(require_errors());
    var run2 = function run3(options) {
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
        env: getEnv(options),
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
    exports.run = run2;
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
    function getEnv(options) {
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
      constructor(process2) {
        var _a, _b, _c;
        _Process_process.set(this, void 0);
        _Process_stderr.set(this, void 0);
        _Process_stdout.set(this, void 0);
        _Process_stdin.set(this, void 0);
        _Process_status.set(this, void 0);
        _Process_receivedStatus.set(this, false);
        __classPrivateFieldSet(this, _Process_process, process2, "f");
        __classPrivateFieldSet(this, _Process_stdout, (_a = ProcessReadStream.fromNullable(__classPrivateFieldGet(this, _Process_process, "f").stdout)) !== null && _a !== void 0 ? _a : null, "f");
        __classPrivateFieldSet(this, _Process_stderr, (_b = ProcessReadStream.fromNullable(__classPrivateFieldGet(this, _Process_process, "f").stderr)) !== null && _b !== void 0 ? _b : null, "f");
        __classPrivateFieldSet(this, _Process_stdin, (_c = ProcessWriteStream.fromNullable(__classPrivateFieldGet(this, _Process_process, "f").stdin)) !== null && _c !== void 0 ? _c : null, "f");
        __classPrivateFieldSet(this, _Process_status, (0, events_1.once)(process2, "exit"), "f");
      }
      get rid() {
        return NaN;
      }
      get pid() {
        return __classPrivateFieldGet(this, _Process_process, "f").pid;
      }
      get stdin() {
        return __classPrivateFieldGet(this, _Process_stdin, "f");
      }
      get stdout() {
        return __classPrivateFieldGet(this, _Process_stdout, "f");
      }
      get stderr() {
        return __classPrivateFieldGet(this, _Process_stderr, "f");
      }
      async status() {
        const [receivedCode, signalName] = await __classPrivateFieldGet(this, _Process_status, "f");
        const signal = signalName ? os_1.default.constants.signals[signalName] : receivedCode > 128 ? receivedCode - 128 : void 0;
        const code = receivedCode != null ? receivedCode : signal != null ? 128 + signal : void 0;
        const success = code === 0;
        __classPrivateFieldSet(this, _Process_receivedStatus, true, "f");
        return { code, signal, success };
      }
      async output() {
        if (!__classPrivateFieldGet(this, _Process_stdout, "f")) {
          throw new TypeError("stdout was not piped");
        }
        const result = await __classPrivateFieldGet(this, _Process_stdout, "f").readAll();
        __classPrivateFieldGet(this, _Process_stdout, "f").close();
        return result;
      }
      async stderrOutput() {
        if (!__classPrivateFieldGet(this, _Process_stderr, "f")) {
          throw new TypeError("stderr was not piped");
        }
        const result = await __classPrivateFieldGet(this, _Process_stderr, "f").readAll();
        __classPrivateFieldGet(this, _Process_stderr, "f").close();
        return result;
      }
      close() {
        __classPrivateFieldGet(this, _Process_process, "f").unref();
        __classPrivateFieldGet(this, _Process_process, "f").kill();
      }
      kill(signo) {
        if (__classPrivateFieldGet(this, _Process_receivedStatus, "f")) {
          throw new errors.NotFound("entity not found");
        }
        __classPrivateFieldGet(this, _Process_process, "f").kill(signo);
      }
    };
    exports.Process = Process;
    _Process_process = /* @__PURE__ */ new WeakMap(), _Process_stderr = /* @__PURE__ */ new WeakMap(), _Process_stdout = /* @__PURE__ */ new WeakMap(), _Process_stdin = /* @__PURE__ */ new WeakMap(), _Process_status = /* @__PURE__ */ new WeakMap(), _Process_receivedStatus = /* @__PURE__ */ new WeakMap();
    var ProcessReadStream = class {
      constructor(stream) {
        _ProcessReadStream_stream.set(this, void 0);
        _ProcessReadStream_bufferStreamReader.set(this, void 0);
        _ProcessReadStream_closed.set(this, false);
        __classPrivateFieldSet(this, _ProcessReadStream_stream, stream, "f");
        __classPrivateFieldSet(this, _ProcessReadStream_bufferStreamReader, new streams_js_1.BufferStreamReader(stream), "f");
      }
      static fromNullable(stream) {
        return stream ? new ProcessReadStream(stream) : void 0;
      }
      readAll() {
        if (__classPrivateFieldGet(this, _ProcessReadStream_closed, "f")) {
          return Promise.resolve(new Uint8Array(0));
        } else {
          return __classPrivateFieldGet(this, _ProcessReadStream_bufferStreamReader, "f").readAll();
        }
      }
      read(p) {
        if (__classPrivateFieldGet(this, _ProcessReadStream_closed, "f")) {
          return Promise.resolve(null);
        } else {
          return __classPrivateFieldGet(this, _ProcessReadStream_bufferStreamReader, "f").read(p);
        }
      }
      close() {
        __classPrivateFieldSet(this, _ProcessReadStream_closed, true, "f");
        __classPrivateFieldGet(this, _ProcessReadStream_stream, "f").destroy();
      }
      get readable() {
        throw new Error("Not implemented.");
      }
      get writable() {
        throw new Error("Not implemented.");
      }
    };
    _ProcessReadStream_stream = /* @__PURE__ */ new WeakMap(), _ProcessReadStream_bufferStreamReader = /* @__PURE__ */ new WeakMap(), _ProcessReadStream_closed = /* @__PURE__ */ new WeakMap();
    var ProcessWriteStream = class {
      constructor(stream) {
        _ProcessWriteStream_stream.set(this, void 0);
        _ProcessWriteStream_streamWriter.set(this, void 0);
        _ProcessWriteStream_closed.set(this, false);
        __classPrivateFieldSet(this, _ProcessWriteStream_stream, stream, "f");
        __classPrivateFieldSet(this, _ProcessWriteStream_streamWriter, new streams_js_1.StreamWriter(stream), "f");
      }
      static fromNullable(stream) {
        return stream ? new ProcessWriteStream(stream) : void 0;
      }
      write(p) {
        if (__classPrivateFieldGet(this, _ProcessWriteStream_closed, "f")) {
          return Promise.resolve(0);
        } else {
          return __classPrivateFieldGet(this, _ProcessWriteStream_streamWriter, "f").write(p);
        }
      }
      close() {
        __classPrivateFieldSet(this, _ProcessWriteStream_closed, true, "f");
        __classPrivateFieldGet(this, _ProcessWriteStream_stream, "f").end();
      }
    };
    _ProcessWriteStream_stream = /* @__PURE__ */ new WeakMap(), _ProcessWriteStream_streamWriter = /* @__PURE__ */ new WeakMap(), _ProcessWriteStream_closed = /* @__PURE__ */ new WeakMap();
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/shutdown.js
var require_shutdown = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/shutdown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shutdown = void 0;
    var net_1 = require("net");
    var shutdown = async function shutdown2(rid) {
      await new Promise((resolve3) => new net_1.Socket({ fd: rid }).end(resolve3));
    };
    exports.shutdown = shutdown;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/statSync.js
var require_statSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/statSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.statSync = void 0;
    var fs = __importStar(require("fs"));
    var stat_js_1 = require_stat();
    var statSync = (path2) => (0, stat_js_1.denoifyFileInfo)(fs.statSync(path2));
    exports.statSync = statSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlink.js
var require_symlink = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlink.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.symlink = void 0;
    var fs = __importStar(require("fs/promises"));
    var symlink = async (oldpath, newpath, options) => await fs.symlink(oldpath, newpath, options === null || options === void 0 ? void 0 : options.type);
    exports.symlink = symlink;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlinkSync.js
var require_symlinkSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlinkSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.symlinkSync = void 0;
    var fs = __importStar(require("fs"));
    var symlinkSync = (oldpath, newpath, options) => fs.symlinkSync(oldpath, newpath, options === null || options === void 0 ? void 0 : options.type);
    exports.symlinkSync = symlinkSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno-test/dist/definitions.js
var require_definitions = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno-test/dist/definitions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.testDefinitions = void 0;
    exports.testDefinitions = [];
  }
});

// dist/dnt/node_modules/@deno/shim-deno-test/dist/test.js
var require_test = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno-test/dist/test.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = void 0;
    var definitions_js_1 = require_definitions();
    var test = function test2() {
      var _a, _b;
      let testDef;
      const firstArg = arguments[0];
      const secondArg = arguments[1];
      const thirdArg = arguments[2];
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
      definitions_js_1.testDefinitions.push(testDef);
    };
    exports.test = test;
  }
});

// dist/dnt/node_modules/@deno/shim-deno-test/dist/index.js
var require_dist = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno-test/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.testDefinitions = exports.Deno = void 0;
    exports.Deno = require_test();
    __exportStar(require_test(), exports);
    var definitions_js_1 = require_definitions();
    Object.defineProperty(exports, "testDefinitions", { enumerable: true, get: function() {
      return definitions_js_1.testDefinitions;
    } });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/test.js
var require_test2 = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/test.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = void 0;
    var shim_deno_test_1 = require_dist();
    Object.defineProperty(exports, "test", { enumerable: true, get: function() {
      return shim_deno_test_1.test;
    } });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncate.js
var require_truncate = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncate.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.truncate = void 0;
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
    exports.truncate = truncate;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncateSync.js
var require_truncateSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncateSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.truncateSync = void 0;
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
    exports.truncateSync = truncateSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/iterutil.js
var require_iterutil = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/internal/iterutil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = exports.mapAsync = exports.map = void 0;
    function* map(iter, f) {
      for (const i of iter) {
        yield f(i);
      }
    }
    exports.map = map;
    async function* mapAsync(iter, f) {
      for await (const i of iter) {
        yield f(i);
      }
    }
    exports.mapAsync = mapAsync;
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
    exports.merge = merge;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/watchFs.js
var require_watchFs = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/watchFs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.watchFs = void 0;
    var promises_1 = require("fs/promises");
    var path_1 = require("path");
    var iterutil_js_1 = require_iterutil();
    var watchFs = function watchFs2(paths, options = { recursive: true }) {
      paths = Array.isArray(paths) ? paths : [paths];
      const ac = new AbortController();
      const { signal } = ac;
      const rid = -1;
      const masterWatcher = (0, iterutil_js_1.merge)(paths.map((path2) => (0, iterutil_js_1.mapAsync)((0, promises_1.watch)(path2, { recursive: options === null || options === void 0 ? void 0 : options.recursive, signal }), (info2) => ({
        kind: "modify",
        paths: [(0, path_1.resolve)(path2, info2.filename)]
      }))));
      function close() {
        ac.abort();
      }
      return Object.assign(masterWatcher, { rid, close });
    };
    exports.watchFs = watchFs;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFile.js
var require_writeFile = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFile.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeFile = void 0;
    var fs = __importStar(require("fs/promises"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var fs_flags_js_1 = require_fs_flags();
    var writeFile = async function writeFile2(path2, data, { append = false, create = true, mode, signal } = {}) {
      const truncate = create && !append;
      const flag = (0, fs_flags_js_1.getFsFlag)({ append, create, truncate, write: true });
      try {
        await fs.writeFile(path2, data, { flag, signal });
        if (mode !== void 0)
          await fs.chmod(path2, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.writeFile = writeFile;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFileSync.js
var require_writeFileSync = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFileSync.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeFileSync = void 0;
    var os_1 = require("os");
    var openSync_js_1 = require_openSync();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var statSync_js_1 = require_statSync();
    var chmodSync_js_1 = require_chmodSync();
    var writeFileSync = function writeFileSync2(path2, data, options = {}) {
      try {
        if (options.create !== void 0) {
          const create = !!options.create;
          if (!create) {
            (0, statSync_js_1.statSync)(path2);
          }
        }
        const openOptions = options.append ? { write: true, create: true, append: true } : { write: true, create: true, truncate: true };
        const file = (0, openSync_js_1.openSync)(path2, openOptions);
        if (options.mode !== void 0 && options.mode !== null && (0, os_1.platform)() !== "win32") {
          (0, chmodSync_js_1.chmodSync)(path2, options.mode);
        }
        let nwritten = 0;
        while (nwritten < data.length) {
          nwritten += file.writeSync(data.subarray(nwritten));
        }
        file.close();
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.writeFileSync = writeFileSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/args.js
var require_args = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/variables/args.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.args = void 0;
    exports.args = process.argv.slice(2);
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions.js
var require_functions = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/functions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readSync = exports.readLinkSync = exports.readLink = exports.readFileSync = exports.readFile = exports.readDirSync = exports.readDir = exports.read = exports.openSync = exports.open = exports.mkdirSync = exports.mkdir = exports.memoryUsage = exports.makeTempFileSync = exports.makeTempFile = exports.makeTempDirSync = exports.makeTempDir = exports.lstatSync = exports.lstat = exports.listenTls = exports.listen = exports.linkSync = exports.link = exports.kill = exports.inspect = exports.ftruncateSync = exports.ftruncate = exports.fsyncSync = exports.fsync = exports.fstatSync = exports.fstat = exports.fdatasyncSync = exports.fdatasync = exports.exit = exports.execPath = exports.cwd = exports.createSync = exports.create = exports.copyFileSync = exports.copyFile = exports.copy = exports.connectTls = exports.connect = exports.close = exports.chownSync = exports.chown = exports.chmodSync = exports.chmod = exports.chdir = exports.isatty = void 0;
    exports.args = exports.writeTextFileSync = exports.writeTextFile = exports.writeSync = exports.writeFileSync = exports.writeFile = exports.write = exports.watchFs = exports.truncateSync = exports.truncate = exports.test = exports.symlinkSync = exports.symlink = exports.statSync = exports.stat = exports.shutdown = exports.run = exports.Process = exports.resolveDns = exports.renameSync = exports.rename = exports.removeSync = exports.remove = exports.realPathSync = exports.realPath = exports.readTextFileSync = exports.readTextFile = void 0;
    var tty_1 = require("tty");
    Object.defineProperty(exports, "isatty", { enumerable: true, get: function() {
      return tty_1.isatty;
    } });
    var chdir_js_1 = require_chdir();
    Object.defineProperty(exports, "chdir", { enumerable: true, get: function() {
      return chdir_js_1.chdir;
    } });
    var chmod_js_1 = require_chmod();
    Object.defineProperty(exports, "chmod", { enumerable: true, get: function() {
      return chmod_js_1.chmod;
    } });
    var chmodSync_js_1 = require_chmodSync();
    Object.defineProperty(exports, "chmodSync", { enumerable: true, get: function() {
      return chmodSync_js_1.chmodSync;
    } });
    var chown_js_1 = require_chown();
    Object.defineProperty(exports, "chown", { enumerable: true, get: function() {
      return chown_js_1.chown;
    } });
    var chownSync_js_1 = require_chownSync();
    Object.defineProperty(exports, "chownSync", { enumerable: true, get: function() {
      return chownSync_js_1.chownSync;
    } });
    var close_js_1 = require_close();
    Object.defineProperty(exports, "close", { enumerable: true, get: function() {
      return close_js_1.close;
    } });
    var connect_js_1 = require_connect();
    Object.defineProperty(exports, "connect", { enumerable: true, get: function() {
      return connect_js_1.connect;
    } });
    var connectTls_js_1 = require_connectTls();
    Object.defineProperty(exports, "connectTls", { enumerable: true, get: function() {
      return connectTls_js_1.connectTls;
    } });
    var copy_js_1 = require_copy();
    Object.defineProperty(exports, "copy", { enumerable: true, get: function() {
      return copy_js_1.copy;
    } });
    var copyFile_js_1 = require_copyFile();
    Object.defineProperty(exports, "copyFile", { enumerable: true, get: function() {
      return copyFile_js_1.copyFile;
    } });
    var copyFileSync_js_1 = require_copyFileSync();
    Object.defineProperty(exports, "copyFileSync", { enumerable: true, get: function() {
      return copyFileSync_js_1.copyFileSync;
    } });
    var create_js_1 = require_create();
    Object.defineProperty(exports, "create", { enumerable: true, get: function() {
      return create_js_1.create;
    } });
    var createSync_js_1 = require_createSync();
    Object.defineProperty(exports, "createSync", { enumerable: true, get: function() {
      return createSync_js_1.createSync;
    } });
    var cwd_js_1 = require_cwd();
    Object.defineProperty(exports, "cwd", { enumerable: true, get: function() {
      return cwd_js_1.cwd;
    } });
    var execPath_js_1 = require_execPath();
    Object.defineProperty(exports, "execPath", { enumerable: true, get: function() {
      return execPath_js_1.execPath;
    } });
    var exit_js_1 = require_exit();
    Object.defineProperty(exports, "exit", { enumerable: true, get: function() {
      return exit_js_1.exit;
    } });
    var fdatasync_js_1 = require_fdatasync();
    Object.defineProperty(exports, "fdatasync", { enumerable: true, get: function() {
      return fdatasync_js_1.fdatasync;
    } });
    var fdatasyncSync_js_1 = require_fdatasyncSync();
    Object.defineProperty(exports, "fdatasyncSync", { enumerable: true, get: function() {
      return fdatasyncSync_js_1.fdatasyncSync;
    } });
    var fstat_js_1 = require_fstat();
    Object.defineProperty(exports, "fstat", { enumerable: true, get: function() {
      return fstat_js_1.fstat;
    } });
    var fstatSync_js_1 = require_fstatSync();
    Object.defineProperty(exports, "fstatSync", { enumerable: true, get: function() {
      return fstatSync_js_1.fstatSync;
    } });
    var fsync_js_1 = require_fsync();
    Object.defineProperty(exports, "fsync", { enumerable: true, get: function() {
      return fsync_js_1.fsync;
    } });
    var fsyncSync_js_1 = require_fsyncSync();
    Object.defineProperty(exports, "fsyncSync", { enumerable: true, get: function() {
      return fsyncSync_js_1.fsyncSync;
    } });
    var ftruncate_js_1 = require_ftruncate();
    Object.defineProperty(exports, "ftruncate", { enumerable: true, get: function() {
      return ftruncate_js_1.ftruncate;
    } });
    var ftruncateSync_js_1 = require_ftruncateSync();
    Object.defineProperty(exports, "ftruncateSync", { enumerable: true, get: function() {
      return ftruncateSync_js_1.ftruncateSync;
    } });
    var inspect_js_1 = require_inspect();
    Object.defineProperty(exports, "inspect", { enumerable: true, get: function() {
      return inspect_js_1.inspect;
    } });
    var kill_js_1 = require_kill();
    Object.defineProperty(exports, "kill", { enumerable: true, get: function() {
      return kill_js_1.kill;
    } });
    var link_js_1 = require_link();
    Object.defineProperty(exports, "link", { enumerable: true, get: function() {
      return link_js_1.link;
    } });
    var linkSync_js_1 = require_linkSync();
    Object.defineProperty(exports, "linkSync", { enumerable: true, get: function() {
      return linkSync_js_1.linkSync;
    } });
    var listen_js_1 = require_listen();
    Object.defineProperty(exports, "listen", { enumerable: true, get: function() {
      return listen_js_1.listen;
    } });
    var listenTls_js_1 = require_listenTls();
    Object.defineProperty(exports, "listenTls", { enumerable: true, get: function() {
      return listenTls_js_1.listenTls;
    } });
    var lstat_js_1 = require_lstat();
    Object.defineProperty(exports, "lstat", { enumerable: true, get: function() {
      return lstat_js_1.lstat;
    } });
    var lstatSync_js_1 = require_lstatSync();
    Object.defineProperty(exports, "lstatSync", { enumerable: true, get: function() {
      return lstatSync_js_1.lstatSync;
    } });
    var makeTempDir_js_1 = require_makeTempDir();
    Object.defineProperty(exports, "makeTempDir", { enumerable: true, get: function() {
      return makeTempDir_js_1.makeTempDir;
    } });
    var makeTempDirSync_js_1 = require_makeTempDirSync();
    Object.defineProperty(exports, "makeTempDirSync", { enumerable: true, get: function() {
      return makeTempDirSync_js_1.makeTempDirSync;
    } });
    var makeTempFile_js_1 = require_makeTempFile();
    Object.defineProperty(exports, "makeTempFile", { enumerable: true, get: function() {
      return makeTempFile_js_1.makeTempFile;
    } });
    var makeTempFileSync_js_1 = require_makeTempFileSync();
    Object.defineProperty(exports, "makeTempFileSync", { enumerable: true, get: function() {
      return makeTempFileSync_js_1.makeTempFileSync;
    } });
    var memoryUsage_js_1 = require_memoryUsage();
    Object.defineProperty(exports, "memoryUsage", { enumerable: true, get: function() {
      return memoryUsage_js_1.memoryUsage;
    } });
    var mkdir_js_1 = require_mkdir();
    Object.defineProperty(exports, "mkdir", { enumerable: true, get: function() {
      return mkdir_js_1.mkdir;
    } });
    var mkdirSync_js_1 = require_mkdirSync();
    Object.defineProperty(exports, "mkdirSync", { enumerable: true, get: function() {
      return mkdirSync_js_1.mkdirSync;
    } });
    var open_js_1 = require_open();
    Object.defineProperty(exports, "open", { enumerable: true, get: function() {
      return open_js_1.open;
    } });
    var openSync_js_1 = require_openSync();
    Object.defineProperty(exports, "openSync", { enumerable: true, get: function() {
      return openSync_js_1.openSync;
    } });
    var read_js_1 = require_read();
    Object.defineProperty(exports, "read", { enumerable: true, get: function() {
      return read_js_1.read;
    } });
    var readDir_js_1 = require_readDir();
    Object.defineProperty(exports, "readDir", { enumerable: true, get: function() {
      return readDir_js_1.readDir;
    } });
    var readDirSync_js_1 = require_readDirSync();
    Object.defineProperty(exports, "readDirSync", { enumerable: true, get: function() {
      return readDirSync_js_1.readDirSync;
    } });
    var readFile_js_1 = require_readFile();
    Object.defineProperty(exports, "readFile", { enumerable: true, get: function() {
      return readFile_js_1.readFile;
    } });
    var readFileSync_js_1 = require_readFileSync();
    Object.defineProperty(exports, "readFileSync", { enumerable: true, get: function() {
      return readFileSync_js_1.readFileSync;
    } });
    var readLink_js_1 = require_readLink();
    Object.defineProperty(exports, "readLink", { enumerable: true, get: function() {
      return readLink_js_1.readLink;
    } });
    var readLinkSync_js_1 = require_readLinkSync();
    Object.defineProperty(exports, "readLinkSync", { enumerable: true, get: function() {
      return readLinkSync_js_1.readLinkSync;
    } });
    var readSync_js_1 = require_readSync();
    Object.defineProperty(exports, "readSync", { enumerable: true, get: function() {
      return readSync_js_1.readSync;
    } });
    var readTextFile_js_1 = require_readTextFile();
    Object.defineProperty(exports, "readTextFile", { enumerable: true, get: function() {
      return readTextFile_js_1.readTextFile;
    } });
    var readTextFileSync_js_1 = require_readTextFileSync();
    Object.defineProperty(exports, "readTextFileSync", { enumerable: true, get: function() {
      return readTextFileSync_js_1.readTextFileSync;
    } });
    var realPath_js_1 = require_realPath();
    Object.defineProperty(exports, "realPath", { enumerable: true, get: function() {
      return realPath_js_1.realPath;
    } });
    var realPathSync_js_1 = require_realPathSync();
    Object.defineProperty(exports, "realPathSync", { enumerable: true, get: function() {
      return realPathSync_js_1.realPathSync;
    } });
    var remove_js_1 = require_remove();
    Object.defineProperty(exports, "remove", { enumerable: true, get: function() {
      return remove_js_1.remove;
    } });
    var removeSync_js_1 = require_removeSync();
    Object.defineProperty(exports, "removeSync", { enumerable: true, get: function() {
      return removeSync_js_1.removeSync;
    } });
    var rename_js_1 = require_rename();
    Object.defineProperty(exports, "rename", { enumerable: true, get: function() {
      return rename_js_1.rename;
    } });
    var renameSync_js_1 = require_renameSync();
    Object.defineProperty(exports, "renameSync", { enumerable: true, get: function() {
      return renameSync_js_1.renameSync;
    } });
    var resolveDns_js_1 = require_resolveDns();
    Object.defineProperty(exports, "resolveDns", { enumerable: true, get: function() {
      return resolveDns_js_1.resolveDns;
    } });
    var run_js_1 = require_run();
    Object.defineProperty(exports, "Process", { enumerable: true, get: function() {
      return run_js_1.Process;
    } });
    Object.defineProperty(exports, "run", { enumerable: true, get: function() {
      return run_js_1.run;
    } });
    var shutdown_js_1 = require_shutdown();
    Object.defineProperty(exports, "shutdown", { enumerable: true, get: function() {
      return shutdown_js_1.shutdown;
    } });
    var stat_js_1 = require_stat();
    Object.defineProperty(exports, "stat", { enumerable: true, get: function() {
      return stat_js_1.stat;
    } });
    var statSync_js_1 = require_statSync();
    Object.defineProperty(exports, "statSync", { enumerable: true, get: function() {
      return statSync_js_1.statSync;
    } });
    var symlink_js_1 = require_symlink();
    Object.defineProperty(exports, "symlink", { enumerable: true, get: function() {
      return symlink_js_1.symlink;
    } });
    var symlinkSync_js_1 = require_symlinkSync();
    Object.defineProperty(exports, "symlinkSync", { enumerable: true, get: function() {
      return symlinkSync_js_1.symlinkSync;
    } });
    var test_js_1 = require_test2();
    Object.defineProperty(exports, "test", { enumerable: true, get: function() {
      return test_js_1.test;
    } });
    var truncate_js_1 = require_truncate();
    Object.defineProperty(exports, "truncate", { enumerable: true, get: function() {
      return truncate_js_1.truncate;
    } });
    var truncateSync_js_1 = require_truncateSync();
    Object.defineProperty(exports, "truncateSync", { enumerable: true, get: function() {
      return truncateSync_js_1.truncateSync;
    } });
    var watchFs_js_1 = require_watchFs();
    Object.defineProperty(exports, "watchFs", { enumerable: true, get: function() {
      return watchFs_js_1.watchFs;
    } });
    var write_js_1 = require_write();
    Object.defineProperty(exports, "write", { enumerable: true, get: function() {
      return write_js_1.write;
    } });
    var writeFile_js_1 = require_writeFile();
    Object.defineProperty(exports, "writeFile", { enumerable: true, get: function() {
      return writeFile_js_1.writeFile;
    } });
    var writeFileSync_js_1 = require_writeFileSync();
    Object.defineProperty(exports, "writeFileSync", { enumerable: true, get: function() {
      return writeFileSync_js_1.writeFileSync;
    } });
    var writeSync_js_1 = require_writeSync();
    Object.defineProperty(exports, "writeSync", { enumerable: true, get: function() {
      return writeSync_js_1.writeSync;
    } });
    var writeTextFile_js_1 = require_writeTextFile();
    Object.defineProperty(exports, "writeTextFile", { enumerable: true, get: function() {
      return writeTextFile_js_1.writeTextFile;
    } });
    var writeTextFileSync_js_1 = require_writeTextFileSync();
    Object.defineProperty(exports, "writeTextFileSync", { enumerable: true, get: function() {
      return writeTextFileSync_js_1.writeTextFileSync;
    } });
    var args_js_1 = require_args();
    Object.defineProperty(exports, "args", { enumerable: true, get: function() {
      return args_js_1.args;
    } });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/types.js
var require_types = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/main.js
var require_main = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/stable/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_classes(), exports);
    __exportStar(require_enums(), exports);
    __exportStar(require_functions(), exports);
    __exportStar(require_types(), exports);
    __exportStar(require_variables(), exports);
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno/unstable/main.js
var require_main2 = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno/unstable/main.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.utimeSync = exports.utime = exports.futimeSync = exports.futime = void 0;
    var fs_1 = __importDefault(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
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
    exports.futime = futime;
    var futimeSync = function(rid, atime, mtime) {
      try {
        fs_1.default.futimesSync(rid, atime, mtime);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.futimeSync = futimeSync;
    var utime = async function(path2, atime, mtime) {
      try {
        await fs_1.default.promises.utimes(path2, atime, mtime);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), utime '${path2}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.utime = utime;
    var utimeSync = function(path2, atime, mtime) {
      try {
        fs_1.default.utimesSync(path2, atime, mtime);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), utime '${path2}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.utimeSync = utimeSync;
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/deno.js
var require_deno = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/deno.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_main(), exports);
    __exportStar(require_main2(), exports);
  }
});

// dist/dnt/node_modules/@deno/shim-deno/dist/index.js
var require_dist2 = __commonJS({
  "dist/dnt/node_modules/@deno/shim-deno/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Deno = void 0;
    exports.Deno = __importStar(require_deno());
  }
});

// dist/dnt/node_modules/@actions/core/lib/utils.js
var require_utils = __commonJS({
  "dist/dnt/node_modules/@actions/core/lib/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toCommandProperties = exports.toCommandValue = void 0;
    function toCommandValue(input) {
      if (input === null || input === void 0) {
        return "";
      } else if (typeof input === "string" || input instanceof String) {
        return input;
      }
      return JSON.stringify(input);
    }
    exports.toCommandValue = toCommandValue;
    function toCommandProperties(annotationProperties) {
      if (!Object.keys(annotationProperties).length) {
        return {};
      }
      return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
      };
    }
    exports.toCommandProperties = toCommandProperties;
  }
});

// dist/dnt/node_modules/@actions/core/lib/command.js
var require_command = __commonJS({
  "dist/dnt/node_modules/@actions/core/lib/command.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.issue = exports.issueCommand = void 0;
    var os = __importStar(require("os"));
    var utils_1 = require_utils();
    function issueCommand(command, properties, message) {
      const cmd = new Command(command, properties, message);
      process.stdout.write(cmd.toString() + os.EOL);
    }
    exports.issueCommand = issueCommand;
    function issue(name, message = "") {
      issueCommand(name, {}, message);
    }
    exports.issue = issue;
    var CMD_STRING = "::";
    var Command = class {
      constructor(command, properties, message) {
        if (!command) {
          command = "missing.command";
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
      }
      toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
          cmdStr += " ";
          let first = true;
          for (const key in this.properties) {
            if (this.properties.hasOwnProperty(key)) {
              const val = this.properties[key];
              if (val) {
                if (first) {
                  first = false;
                } else {
                  cmdStr += ",";
                }
                cmdStr += `${key}=${escapeProperty(val)}`;
              }
            }
          }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
      }
    };
    function escapeData(s) {
      return utils_1.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
    }
    function escapeProperty(s) {
      return utils_1.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
    }
  }
});

// dist/dnt/node_modules/uuid/dist/rng.js
var require_rng = __commonJS({
  "dist/dnt/node_modules/uuid/dist/rng.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rng;
    var _crypto = _interopRequireDefault(require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var rnds8Pool = new Uint8Array(256);
    var poolPtr = rnds8Pool.length;
    function rng() {
      if (poolPtr > rnds8Pool.length - 16) {
        _crypto.default.randomFillSync(rnds8Pool);
        poolPtr = 0;
      }
      return rnds8Pool.slice(poolPtr, poolPtr += 16);
    }
  }
});

// dist/dnt/node_modules/uuid/dist/regex.js
var require_regex = __commonJS({
  "dist/dnt/node_modules/uuid/dist/regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/validate.js
var require_validate = __commonJS({
  "dist/dnt/node_modules/uuid/dist/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _regex = _interopRequireDefault(require_regex());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function validate(uuid) {
      return typeof uuid === "string" && _regex.default.test(uuid);
    }
    var _default = validate;
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/stringify.js
var require_stringify = __commonJS({
  "dist/dnt/node_modules/uuid/dist/stringify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).substr(1));
    }
    function stringify(arr, offset = 0) {
      const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return uuid;
    }
    var _default = stringify;
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/v1.js
var require_v1 = __commonJS({
  "dist/dnt/node_modules/uuid/dist/v1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = _interopRequireDefault(require_stringify());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    function v1(options, buf, offset) {
      let i = buf && offset || 0;
      const b = buf || new Array(16);
      options = options || {};
      let node = options.node || _nodeId;
      let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
      if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || _rng.default)();
        if (node == null) {
          node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }
        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
      let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      const tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (let n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf || (0, _stringify.default)(b);
    }
    var _default = v1;
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/parse.js
var require_parse = __commonJS({
  "dist/dnt/node_modules/uuid/dist/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function parse4(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      let v;
      const arr = new Uint8Array(16);
      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 255;
      arr[2] = v >>> 8 & 255;
      arr[3] = v & 255;
      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 255;
      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 255;
      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 255;
      arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
      arr[11] = v / 4294967296 & 255;
      arr[12] = v >>> 24 & 255;
      arr[13] = v >>> 16 & 255;
      arr[14] = v >>> 8 & 255;
      arr[15] = v & 255;
      return arr;
    }
    var _default = parse4;
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/v35.js
var require_v35 = __commonJS({
  "dist/dnt/node_modules/uuid/dist/v35.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    exports.URL = exports.DNS = void 0;
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      const bytes = [];
      for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }
      return bytes;
    }
    var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports.DNS = DNS;
    var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    exports.URL = URL2;
    function _default(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        if (typeof value === "string") {
          value = stringToBytes(value);
        }
        if (typeof namespace === "string") {
          namespace = (0, _parse.default)(namespace);
        }
        if (namespace.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }
          return buf;
        }
        return (0, _stringify.default)(bytes);
      }
      try {
        generateUUID.name = name;
      } catch (err) {
      }
      generateUUID.DNS = DNS;
      generateUUID.URL = URL2;
      return generateUUID;
    }
  }
});

// dist/dnt/node_modules/uuid/dist/md5.js
var require_md5 = __commonJS({
  "dist/dnt/node_modules/uuid/dist/md5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _crypto = _interopRequireDefault(require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function md5(bytes) {
      if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
      } else if (typeof bytes === "string") {
        bytes = Buffer.from(bytes, "utf8");
      }
      return _crypto.default.createHash("md5").update(bytes).digest();
    }
    var _default = md5;
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/v3.js
var require_v3 = __commonJS({
  "dist/dnt/node_modules/uuid/dist/v3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _md = _interopRequireDefault(require_md5());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v3 = (0, _v.default)("v3", 48, _md.default);
    var _default = v3;
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/v4.js
var require_v4 = __commonJS({
  "dist/dnt/node_modules/uuid/dist/v4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = _interopRequireDefault(require_stringify());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function v4(options, buf, offset) {
      options = options || {};
      const rnds = options.random || (options.rng || _rng.default)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }
        return buf;
      }
      return (0, _stringify.default)(rnds);
    }
    var _default = v4;
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/sha1.js
var require_sha1 = __commonJS({
  "dist/dnt/node_modules/uuid/dist/sha1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _crypto = _interopRequireDefault(require("crypto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function sha1(bytes) {
      if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
      } else if (typeof bytes === "string") {
        bytes = Buffer.from(bytes, "utf8");
      }
      return _crypto.default.createHash("sha1").update(bytes).digest();
    }
    var _default = sha1;
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/v5.js
var require_v5 = __commonJS({
  "dist/dnt/node_modules/uuid/dist/v5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _sha = _interopRequireDefault(require_sha1());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v5 = (0, _v.default)("v5", 80, _sha.default);
    var _default = v5;
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/nil.js
var require_nil = __commonJS({
  "dist/dnt/node_modules/uuid/dist/nil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = "00000000-0000-0000-0000-000000000000";
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/version.js
var require_version3 = __commonJS({
  "dist/dnt/node_modules/uuid/dist/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function version(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      return parseInt(uuid.substr(14, 1), 16);
    }
    var _default = version;
    exports.default = _default;
  }
});

// dist/dnt/node_modules/uuid/dist/index.js
var require_dist3 = __commonJS({
  "dist/dnt/node_modules/uuid/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "v1", {
      enumerable: true,
      get: function() {
        return _v.default;
      }
    });
    Object.defineProperty(exports, "v3", {
      enumerable: true,
      get: function() {
        return _v2.default;
      }
    });
    Object.defineProperty(exports, "v4", {
      enumerable: true,
      get: function() {
        return _v3.default;
      }
    });
    Object.defineProperty(exports, "v5", {
      enumerable: true,
      get: function() {
        return _v4.default;
      }
    });
    Object.defineProperty(exports, "NIL", {
      enumerable: true,
      get: function() {
        return _nil.default;
      }
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: function() {
        return _version.default;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function() {
        return _validate.default;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function() {
        return _stringify.default;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function() {
        return _parse.default;
      }
    });
    var _v = _interopRequireDefault(require_v1());
    var _v2 = _interopRequireDefault(require_v3());
    var _v3 = _interopRequireDefault(require_v4());
    var _v4 = _interopRequireDefault(require_v5());
    var _nil = _interopRequireDefault(require_nil());
    var _version = _interopRequireDefault(require_version3());
    var _validate = _interopRequireDefault(require_validate());
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// dist/dnt/node_modules/@actions/core/lib/file-command.js
var require_file_command = __commonJS({
  "dist/dnt/node_modules/@actions/core/lib/file-command.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prepareKeyValueMessage = exports.issueFileCommand = void 0;
    var fs = __importStar(require("fs"));
    var os = __importStar(require("os"));
    var uuid_1 = require_dist3();
    var utils_1 = require_utils();
    function issueFileCommand(command, message) {
      const filePath = process.env[`GITHUB_${command}`];
      if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
      }
      if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
      }
      fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: "utf8"
      });
    }
    exports.issueFileCommand = issueFileCommand;
    function prepareKeyValueMessage(key, value) {
      const delimiter3 = `ghadelimiter_${uuid_1.v4()}`;
      const convertedValue = utils_1.toCommandValue(value);
      if (key.includes(delimiter3)) {
        throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter3}"`);
      }
      if (convertedValue.includes(delimiter3)) {
        throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter3}"`);
      }
      return `${key}<<${delimiter3}${os.EOL}${convertedValue}${os.EOL}${delimiter3}`;
    }
    exports.prepareKeyValueMessage = prepareKeyValueMessage;
  }
});

// dist/dnt/node_modules/@actions/http-client/lib/proxy.js
var require_proxy = __commonJS({
  "dist/dnt/node_modules/@actions/http-client/lib/proxy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkBypass = exports.getProxyUrl = void 0;
    function getProxyUrl(reqUrl) {
      const usingSsl = reqUrl.protocol === "https:";
      if (checkBypass(reqUrl)) {
        return void 0;
      }
      const proxyVar = (() => {
        if (usingSsl) {
          return process.env["https_proxy"] || process.env["HTTPS_PROXY"];
        } else {
          return process.env["http_proxy"] || process.env["HTTP_PROXY"];
        }
      })();
      if (proxyVar) {
        return new URL(proxyVar);
      } else {
        return void 0;
      }
    }
    exports.getProxyUrl = getProxyUrl;
    function checkBypass(reqUrl) {
      if (!reqUrl.hostname) {
        return false;
      }
      const noProxy = process.env["no_proxy"] || process.env["NO_PROXY"] || "";
      if (!noProxy) {
        return false;
      }
      let reqPort;
      if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
      } else if (reqUrl.protocol === "http:") {
        reqPort = 80;
      } else if (reqUrl.protocol === "https:") {
        reqPort = 443;
      }
      const upperReqHosts = [reqUrl.hostname.toUpperCase()];
      if (typeof reqPort === "number") {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
      }
      for (const upperNoProxyItem of noProxy.split(",").map((x) => x.trim().toUpperCase()).filter((x) => x)) {
        if (upperReqHosts.some((x) => x === upperNoProxyItem)) {
          return true;
        }
      }
      return false;
    }
    exports.checkBypass = checkBypass;
  }
});

// dist/dnt/node_modules/tunnel/lib/tunnel.js
var require_tunnel = __commonJS({
  "dist/dnt/node_modules/tunnel/lib/tunnel.js"(exports) {
    "use strict";
    var net = require("net");
    var tls = require("tls");
    var http = require("http");
    var https = require("https");
    var events = require("events");
    var assert2 = require("assert");
    var util = require("util");
    exports.httpOverHttp = httpOverHttp;
    exports.httpsOverHttp = httpsOverHttp;
    exports.httpOverHttps = httpOverHttps;
    exports.httpsOverHttps = httpsOverHttps;
    function httpOverHttp(options) {
      var agent = new TunnelingAgent(options);
      agent.request = http.request;
      return agent;
    }
    function httpsOverHttp(options) {
      var agent = new TunnelingAgent(options);
      agent.request = http.request;
      agent.createSocket = createSecureSocket;
      agent.defaultPort = 443;
      return agent;
    }
    function httpOverHttps(options) {
      var agent = new TunnelingAgent(options);
      agent.request = https.request;
      return agent;
    }
    function httpsOverHttps(options) {
      var agent = new TunnelingAgent(options);
      agent.request = https.request;
      agent.createSocket = createSecureSocket;
      agent.defaultPort = 443;
      return agent;
    }
    function TunnelingAgent(options) {
      var self = this;
      self.options = options || {};
      self.proxyOptions = self.options.proxy || {};
      self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
      self.requests = [];
      self.sockets = [];
      self.on("free", function onFree(socket, host, port, localAddress) {
        var options2 = toOptions(host, port, localAddress);
        for (var i = 0, len = self.requests.length; i < len; ++i) {
          var pending = self.requests[i];
          if (pending.host === options2.host && pending.port === options2.port) {
            self.requests.splice(i, 1);
            pending.request.onSocket(socket);
            return;
          }
        }
        socket.destroy();
        self.removeSocket(socket);
      });
    }
    util.inherits(TunnelingAgent, events.EventEmitter);
    TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
      var self = this;
      var options = mergeOptions({ request: req }, self.options, toOptions(host, port, localAddress));
      if (self.sockets.length >= this.maxSockets) {
        self.requests.push(options);
        return;
      }
      self.createSocket(options, function(socket) {
        socket.on("free", onFree);
        socket.on("close", onCloseOrRemove);
        socket.on("agentRemove", onCloseOrRemove);
        req.onSocket(socket);
        function onFree() {
          self.emit("free", socket, options);
        }
        function onCloseOrRemove(err) {
          self.removeSocket(socket);
          socket.removeListener("free", onFree);
          socket.removeListener("close", onCloseOrRemove);
          socket.removeListener("agentRemove", onCloseOrRemove);
        }
      });
    };
    TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
      var self = this;
      var placeholder = {};
      self.sockets.push(placeholder);
      var connectOptions = mergeOptions({}, self.proxyOptions, {
        method: "CONNECT",
        path: options.host + ":" + options.port,
        agent: false,
        headers: {
          host: options.host + ":" + options.port
        }
      });
      if (options.localAddress) {
        connectOptions.localAddress = options.localAddress;
      }
      if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {};
        connectOptions.headers["Proxy-Authorization"] = "Basic " + new Buffer(connectOptions.proxyAuth).toString("base64");
      }
      debug2("making CONNECT request");
      var connectReq = self.request(connectOptions);
      connectReq.useChunkedEncodingByDefault = false;
      connectReq.once("response", onResponse);
      connectReq.once("upgrade", onUpgrade);
      connectReq.once("connect", onConnect);
      connectReq.once("error", onError);
      connectReq.end();
      function onResponse(res) {
        res.upgrade = true;
      }
      function onUpgrade(res, socket, head) {
        process.nextTick(function() {
          onConnect(res, socket, head);
        });
      }
      function onConnect(res, socket, head) {
        connectReq.removeAllListeners();
        socket.removeAllListeners();
        if (res.statusCode !== 200) {
          debug2(
            "tunneling socket could not be established, statusCode=%d",
            res.statusCode
          );
          socket.destroy();
          var error = new Error("tunneling socket could not be established, statusCode=" + res.statusCode);
          error.code = "ECONNRESET";
          options.request.emit("error", error);
          self.removeSocket(placeholder);
          return;
        }
        if (head.length > 0) {
          debug2("got illegal response body from proxy");
          socket.destroy();
          var error = new Error("got illegal response body from proxy");
          error.code = "ECONNRESET";
          options.request.emit("error", error);
          self.removeSocket(placeholder);
          return;
        }
        debug2("tunneling connection has established");
        self.sockets[self.sockets.indexOf(placeholder)] = socket;
        return cb(socket);
      }
      function onError(cause) {
        connectReq.removeAllListeners();
        debug2(
          "tunneling socket could not be established, cause=%s\n",
          cause.message,
          cause.stack
        );
        var error = new Error("tunneling socket could not be established, cause=" + cause.message);
        error.code = "ECONNRESET";
        options.request.emit("error", error);
        self.removeSocket(placeholder);
      }
    };
    TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
      var pos = this.sockets.indexOf(socket);
      if (pos === -1) {
        return;
      }
      this.sockets.splice(pos, 1);
      var pending = this.requests.shift();
      if (pending) {
        this.createSocket(pending, function(socket2) {
          pending.request.onSocket(socket2);
        });
      }
    };
    function createSecureSocket(options, cb) {
      var self = this;
      TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
        var hostHeader = options.request.getHeader("host");
        var tlsOptions = mergeOptions({}, self.options, {
          socket,
          servername: hostHeader ? hostHeader.replace(/:.*$/, "") : options.host
        });
        var secureSocket = tls.connect(0, tlsOptions);
        self.sockets[self.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
      });
    }
    function toOptions(host, port, localAddress) {
      if (typeof host === "string") {
        return {
          host,
          port,
          localAddress
        };
      }
      return host;
    }
    function mergeOptions(target) {
      for (var i = 1, len = arguments.length; i < len; ++i) {
        var overrides = arguments[i];
        if (typeof overrides === "object") {
          var keys = Object.keys(overrides);
          for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
            var k = keys[j];
            if (overrides[k] !== void 0) {
              target[k] = overrides[k];
            }
          }
        }
      }
      return target;
    }
    var debug2;
    if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
      debug2 = function() {
        var args = Array.prototype.slice.call(arguments);
        if (typeof args[0] === "string") {
          args[0] = "TUNNEL: " + args[0];
        } else {
          args.unshift("TUNNEL:");
        }
        console.error.apply(console, args);
      };
    } else {
      debug2 = function() {
      };
    }
    exports.debug = debug2;
  }
});

// dist/dnt/node_modules/tunnel/index.js
var require_tunnel2 = __commonJS({
  "dist/dnt/node_modules/tunnel/index.js"(exports, module2) {
    module2.exports = require_tunnel();
  }
});

// dist/dnt/node_modules/@actions/http-client/lib/index.js
var require_lib = __commonJS({
  "dist/dnt/node_modules/@actions/http-client/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve3) {
          resolve3(value);
        });
      }
      return new (P || (P = Promise))(function(resolve3, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
    var http = __importStar(require("http"));
    var https = __importStar(require("https"));
    var pm = __importStar(require_proxy());
    var tunnel = __importStar(require_tunnel2());
    var HttpCodes;
    (function(HttpCodes2) {
      HttpCodes2[HttpCodes2["OK"] = 200] = "OK";
      HttpCodes2[HttpCodes2["MultipleChoices"] = 300] = "MultipleChoices";
      HttpCodes2[HttpCodes2["MovedPermanently"] = 301] = "MovedPermanently";
      HttpCodes2[HttpCodes2["ResourceMoved"] = 302] = "ResourceMoved";
      HttpCodes2[HttpCodes2["SeeOther"] = 303] = "SeeOther";
      HttpCodes2[HttpCodes2["NotModified"] = 304] = "NotModified";
      HttpCodes2[HttpCodes2["UseProxy"] = 305] = "UseProxy";
      HttpCodes2[HttpCodes2["SwitchProxy"] = 306] = "SwitchProxy";
      HttpCodes2[HttpCodes2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
      HttpCodes2[HttpCodes2["PermanentRedirect"] = 308] = "PermanentRedirect";
      HttpCodes2[HttpCodes2["BadRequest"] = 400] = "BadRequest";
      HttpCodes2[HttpCodes2["Unauthorized"] = 401] = "Unauthorized";
      HttpCodes2[HttpCodes2["PaymentRequired"] = 402] = "PaymentRequired";
      HttpCodes2[HttpCodes2["Forbidden"] = 403] = "Forbidden";
      HttpCodes2[HttpCodes2["NotFound"] = 404] = "NotFound";
      HttpCodes2[HttpCodes2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
      HttpCodes2[HttpCodes2["NotAcceptable"] = 406] = "NotAcceptable";
      HttpCodes2[HttpCodes2["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
      HttpCodes2[HttpCodes2["RequestTimeout"] = 408] = "RequestTimeout";
      HttpCodes2[HttpCodes2["Conflict"] = 409] = "Conflict";
      HttpCodes2[HttpCodes2["Gone"] = 410] = "Gone";
      HttpCodes2[HttpCodes2["TooManyRequests"] = 429] = "TooManyRequests";
      HttpCodes2[HttpCodes2["InternalServerError"] = 500] = "InternalServerError";
      HttpCodes2[HttpCodes2["NotImplemented"] = 501] = "NotImplemented";
      HttpCodes2[HttpCodes2["BadGateway"] = 502] = "BadGateway";
      HttpCodes2[HttpCodes2["ServiceUnavailable"] = 503] = "ServiceUnavailable";
      HttpCodes2[HttpCodes2["GatewayTimeout"] = 504] = "GatewayTimeout";
    })(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
    var Headers;
    (function(Headers2) {
      Headers2["Accept"] = "accept";
      Headers2["ContentType"] = "content-type";
    })(Headers = exports.Headers || (exports.Headers = {}));
    var MediaTypes;
    (function(MediaTypes2) {
      MediaTypes2["ApplicationJson"] = "application/json";
    })(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
    function getProxyUrl(serverUrl) {
      const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
      return proxyUrl ? proxyUrl.href : "";
    }
    exports.getProxyUrl = getProxyUrl;
    var HttpRedirectCodes = [
      HttpCodes.MovedPermanently,
      HttpCodes.ResourceMoved,
      HttpCodes.SeeOther,
      HttpCodes.TemporaryRedirect,
      HttpCodes.PermanentRedirect
    ];
    var HttpResponseRetryCodes = [
      HttpCodes.BadGateway,
      HttpCodes.ServiceUnavailable,
      HttpCodes.GatewayTimeout
    ];
    var RetryableHttpVerbs = ["OPTIONS", "GET", "DELETE", "HEAD"];
    var ExponentialBackoffCeiling = 10;
    var ExponentialBackoffTimeSlice = 5;
    var HttpClientError = class extends Error {
      constructor(message, statusCode) {
        super(message);
        this.name = "HttpClientError";
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
      }
    };
    exports.HttpClientError = HttpClientError;
    var HttpClientResponse = class {
      constructor(message) {
        this.message = message;
      }
      readBody() {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve3) => __awaiter(this, void 0, void 0, function* () {
            let output = Buffer.alloc(0);
            this.message.on("data", (chunk) => {
              output = Buffer.concat([output, chunk]);
            });
            this.message.on("end", () => {
              resolve3(output.toString());
            });
          }));
        });
      }
    };
    exports.HttpClientResponse = HttpClientResponse;
    function isHttps(requestUrl) {
      const parsedUrl = new URL(requestUrl);
      return parsedUrl.protocol === "https:";
    }
    exports.isHttps = isHttps;
    var HttpClient = class {
      constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
          if (requestOptions.ignoreSslError != null) {
            this._ignoreSslError = requestOptions.ignoreSslError;
          }
          this._socketTimeout = requestOptions.socketTimeout;
          if (requestOptions.allowRedirects != null) {
            this._allowRedirects = requestOptions.allowRedirects;
          }
          if (requestOptions.allowRedirectDowngrade != null) {
            this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
          }
          if (requestOptions.maxRedirects != null) {
            this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
          }
          if (requestOptions.keepAlive != null) {
            this._keepAlive = requestOptions.keepAlive;
          }
          if (requestOptions.allowRetries != null) {
            this._allowRetries = requestOptions.allowRetries;
          }
          if (requestOptions.maxRetries != null) {
            this._maxRetries = requestOptions.maxRetries;
          }
        }
      }
      options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request("OPTIONS", requestUrl, null, additionalHeaders || {});
        });
      }
      get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request("GET", requestUrl, null, additionalHeaders || {});
        });
      }
      del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request("DELETE", requestUrl, null, additionalHeaders || {});
        });
      }
      post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request("POST", requestUrl, data, additionalHeaders || {});
        });
      }
      patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request("PATCH", requestUrl, data, additionalHeaders || {});
        });
      }
      put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request("PUT", requestUrl, data, additionalHeaders || {});
        });
      }
      head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request("HEAD", requestUrl, null, additionalHeaders || {});
        });
      }
      sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request(verb, requestUrl, stream, additionalHeaders);
        });
      }
      getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
          const res = yield this.get(requestUrl, additionalHeaders);
          return this._processResponse(res, this.requestOptions);
        });
      }
      postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          const data = JSON.stringify(obj, null, 2);
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
          additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
          const res = yield this.post(requestUrl, data, additionalHeaders);
          return this._processResponse(res, this.requestOptions);
        });
      }
      putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          const data = JSON.stringify(obj, null, 2);
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
          additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
          const res = yield this.put(requestUrl, data, additionalHeaders);
          return this._processResponse(res, this.requestOptions);
        });
      }
      patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          const data = JSON.stringify(obj, null, 2);
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
          additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
          const res = yield this.patch(requestUrl, data, additionalHeaders);
          return this._processResponse(res, this.requestOptions);
        });
      }
      request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
          if (this._disposed) {
            throw new Error("Client has already been disposed.");
          }
          const parsedUrl = new URL(requestUrl);
          let info2 = this._prepareRequest(verb, parsedUrl, headers);
          const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb) ? this._maxRetries + 1 : 1;
          let numTries = 0;
          let response;
          do {
            response = yield this.requestRaw(info2, data);
            if (response && response.message && response.message.statusCode === HttpCodes.Unauthorized) {
              let authenticationHandler;
              for (const handler of this.handlers) {
                if (handler.canHandleAuthentication(response)) {
                  authenticationHandler = handler;
                  break;
                }
              }
              if (authenticationHandler) {
                return authenticationHandler.handleAuthentication(this, info2, data);
              } else {
                return response;
              }
            }
            let redirectsRemaining = this._maxRedirects;
            while (response.message.statusCode && HttpRedirectCodes.includes(response.message.statusCode) && this._allowRedirects && redirectsRemaining > 0) {
              const redirectUrl = response.message.headers["location"];
              if (!redirectUrl) {
                break;
              }
              const parsedRedirectUrl = new URL(redirectUrl);
              if (parsedUrl.protocol === "https:" && parsedUrl.protocol !== parsedRedirectUrl.protocol && !this._allowRedirectDowngrade) {
                throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
              }
              yield response.readBody();
              if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                for (const header in headers) {
                  if (header.toLowerCase() === "authorization") {
                    delete headers[header];
                  }
                }
              }
              info2 = this._prepareRequest(verb, parsedRedirectUrl, headers);
              response = yield this.requestRaw(info2, data);
              redirectsRemaining--;
            }
            if (!response.message.statusCode || !HttpResponseRetryCodes.includes(response.message.statusCode)) {
              return response;
            }
            numTries += 1;
            if (numTries < maxTries) {
              yield response.readBody();
              yield this._performExponentialBackoff(numTries);
            }
          } while (numTries < maxTries);
          return response;
        });
      }
      dispose() {
        if (this._agent) {
          this._agent.destroy();
        }
        this._disposed = true;
      }
      requestRaw(info2, data) {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve3, reject) => {
            function callbackForResult(err, res) {
              if (err) {
                reject(err);
              } else if (!res) {
                reject(new Error("Unknown error"));
              } else {
                resolve3(res);
              }
            }
            this.requestRawWithCallback(info2, data, callbackForResult);
          });
        });
      }
      requestRawWithCallback(info2, data, onResult) {
        if (typeof data === "string") {
          if (!info2.options.headers) {
            info2.options.headers = {};
          }
          info2.options.headers["Content-Length"] = Buffer.byteLength(data, "utf8");
        }
        let callbackCalled = false;
        function handleResult(err, res) {
          if (!callbackCalled) {
            callbackCalled = true;
            onResult(err, res);
          }
        }
        const req = info2.httpModule.request(info2.options, (msg) => {
          const res = new HttpClientResponse(msg);
          handleResult(void 0, res);
        });
        let socket;
        req.on("socket", (sock) => {
          socket = sock;
        });
        req.setTimeout(this._socketTimeout || 3 * 6e4, () => {
          if (socket) {
            socket.end();
          }
          handleResult(new Error(`Request timeout: ${info2.options.path}`));
        });
        req.on("error", function(err) {
          handleResult(err);
        });
        if (data && typeof data === "string") {
          req.write(data, "utf8");
        }
        if (data && typeof data !== "string") {
          data.on("close", function() {
            req.end();
          });
          data.pipe(req);
        } else {
          req.end();
        }
      }
      getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
      }
      _prepareRequest(method, requestUrl, headers) {
        const info2 = {};
        info2.parsedUrl = requestUrl;
        const usingSsl = info2.parsedUrl.protocol === "https:";
        info2.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info2.options = {};
        info2.options.host = info2.parsedUrl.hostname;
        info2.options.port = info2.parsedUrl.port ? parseInt(info2.parsedUrl.port) : defaultPort;
        info2.options.path = (info2.parsedUrl.pathname || "") + (info2.parsedUrl.search || "");
        info2.options.method = method;
        info2.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
          info2.options.headers["user-agent"] = this.userAgent;
        }
        info2.options.agent = this._getAgent(info2.parsedUrl);
        if (this.handlers) {
          for (const handler of this.handlers) {
            handler.prepareRequest(info2.options);
          }
        }
        return info2;
      }
      _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
          return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
      }
      _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
          clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
      }
      _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
          agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
          agent = this._agent;
        }
        if (agent) {
          return agent;
        }
        const usingSsl = parsedUrl.protocol === "https:";
        let maxSockets = 100;
        if (this.requestOptions) {
          maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        if (proxyUrl && proxyUrl.hostname) {
          const agentOptions = {
            maxSockets,
            keepAlive: this._keepAlive,
            proxy: Object.assign(Object.assign({}, (proxyUrl.username || proxyUrl.password) && {
              proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
            }), { host: proxyUrl.hostname, port: proxyUrl.port })
          };
          let tunnelAgent;
          const overHttps = proxyUrl.protocol === "https:";
          if (usingSsl) {
            tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
          } else {
            tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
          }
          agent = tunnelAgent(agentOptions);
          this._proxyAgent = agent;
        }
        if (this._keepAlive && !agent) {
          const options = { keepAlive: this._keepAlive, maxSockets };
          agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
          this._agent = agent;
        }
        if (!agent) {
          agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
          agent.options = Object.assign(agent.options || {}, {
            rejectUnauthorized: false
          });
        }
        return agent;
      }
      _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
          retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
          const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
          return new Promise((resolve3) => setTimeout(() => resolve3(), ms));
        });
      }
      _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve3, reject) => __awaiter(this, void 0, void 0, function* () {
            const statusCode = res.message.statusCode || 0;
            const response = {
              statusCode,
              result: null,
              headers: {}
            };
            if (statusCode === HttpCodes.NotFound) {
              resolve3(response);
            }
            function dateTimeDeserializer(key, value) {
              if (typeof value === "string") {
                const a = new Date(value);
                if (!isNaN(a.valueOf())) {
                  return a;
                }
              }
              return value;
            }
            let obj;
            let contents;
            try {
              contents = yield res.readBody();
              if (contents && contents.length > 0) {
                if (options && options.deserializeDates) {
                  obj = JSON.parse(contents, dateTimeDeserializer);
                } else {
                  obj = JSON.parse(contents);
                }
                response.result = obj;
              }
              response.headers = res.message.headers;
            } catch (err) {
            }
            if (statusCode > 299) {
              let msg;
              if (obj && obj.message) {
                msg = obj.message;
              } else if (contents && contents.length > 0) {
                msg = contents;
              } else {
                msg = `Failed request: (${statusCode})`;
              }
              const err = new HttpClientError(msg, statusCode);
              err.result = response.result;
              reject(err);
            } else {
              resolve3(response);
            }
          }));
        });
      }
    };
    exports.HttpClient = HttpClient;
    var lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => (c[k.toLowerCase()] = obj[k], c), {});
  }
});

// dist/dnt/node_modules/@actions/http-client/lib/auth.js
var require_auth = __commonJS({
  "dist/dnt/node_modules/@actions/http-client/lib/auth.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve3) {
          resolve3(value);
        });
      }
      return new (P || (P = Promise))(function(resolve3, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
    var BasicCredentialHandler = class {
      constructor(username, password) {
        this.username = username;
        this.password = password;
      }
      prepareRequest(options) {
        if (!options.headers) {
          throw Error("The request has no headers");
        }
        options.headers["Authorization"] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`;
      }
      canHandleAuthentication() {
        return false;
      }
      handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
          throw new Error("not implemented");
        });
      }
    };
    exports.BasicCredentialHandler = BasicCredentialHandler;
    var BearerCredentialHandler = class {
      constructor(token) {
        this.token = token;
      }
      prepareRequest(options) {
        if (!options.headers) {
          throw Error("The request has no headers");
        }
        options.headers["Authorization"] = `Bearer ${this.token}`;
      }
      canHandleAuthentication() {
        return false;
      }
      handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
          throw new Error("not implemented");
        });
      }
    };
    exports.BearerCredentialHandler = BearerCredentialHandler;
    var PersonalAccessTokenCredentialHandler = class {
      constructor(token) {
        this.token = token;
      }
      prepareRequest(options) {
        if (!options.headers) {
          throw Error("The request has no headers");
        }
        options.headers["Authorization"] = `Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`;
      }
      canHandleAuthentication() {
        return false;
      }
      handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
          throw new Error("not implemented");
        });
      }
    };
    exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
  }
});

// dist/dnt/node_modules/@actions/core/lib/oidc-utils.js
var require_oidc_utils = __commonJS({
  "dist/dnt/node_modules/@actions/core/lib/oidc-utils.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve3) {
          resolve3(value);
        });
      }
      return new (P || (P = Promise))(function(resolve3, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OidcClient = void 0;
    var http_client_1 = require_lib();
    var auth_1 = require_auth();
    var core_1 = require_core();
    var OidcClient = class {
      static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
          allowRetries: allowRetry,
          maxRetries: maxRetry
        };
        return new http_client_1.HttpClient("actions/oidc-client", [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
      }
      static getRequestToken() {
        const token = process.env["ACTIONS_ID_TOKEN_REQUEST_TOKEN"];
        if (!token) {
          throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");
        }
        return token;
      }
      static getIDTokenUrl() {
        const runtimeUrl = process.env["ACTIONS_ID_TOKEN_REQUEST_URL"];
        if (!runtimeUrl) {
          throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");
        }
        return runtimeUrl;
      }
      static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
          const httpclient = OidcClient.createHttpClient();
          const res = yield httpclient.getJson(id_token_url).catch((error) => {
            throw new Error(`Failed to get ID Token. 
 
        Error Code : ${error.statusCode}
 
        Error Message: ${error.result.message}`);
          });
          const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
          if (!id_token) {
            throw new Error("Response json body do not have ID Token field");
          }
          return id_token;
        });
      }
      static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            let id_token_url = OidcClient.getIDTokenUrl();
            if (audience) {
              const encodedAudience = encodeURIComponent(audience);
              id_token_url = `${id_token_url}&audience=${encodedAudience}`;
            }
            core_1.debug(`ID token url is ${id_token_url}`);
            const id_token = yield OidcClient.getCall(id_token_url);
            core_1.setSecret(id_token);
            return id_token;
          } catch (error) {
            throw new Error(`Error message: ${error.message}`);
          }
        });
      }
    };
    exports.OidcClient = OidcClient;
  }
});

// dist/dnt/node_modules/@actions/core/lib/summary.js
var require_summary = __commonJS({
  "dist/dnt/node_modules/@actions/core/lib/summary.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve3) {
          resolve3(value);
        });
      }
      return new (P || (P = Promise))(function(resolve3, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
    var os_1 = require("os");
    var fs_1 = require("fs");
    var { access, appendFile, writeFile } = fs_1.promises;
    exports.SUMMARY_ENV_VAR = "GITHUB_STEP_SUMMARY";
    exports.SUMMARY_DOCS_URL = "https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";
    var Summary = class {
      constructor() {
        this._buffer = "";
      }
      filePath() {
        return __awaiter(this, void 0, void 0, function* () {
          if (this._filePath) {
            return this._filePath;
          }
          const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
          if (!pathFromEnv) {
            throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
          }
          try {
            yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
          } catch (_a) {
            throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
          }
          this._filePath = pathFromEnv;
          return this._filePath;
        });
      }
      wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs).map(([key, value]) => ` ${key}="${value}"`).join("");
        if (!content) {
          return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
      }
      write(options) {
        return __awaiter(this, void 0, void 0, function* () {
          const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
          const filePath = yield this.filePath();
          const writeFunc = overwrite ? writeFile : appendFile;
          yield writeFunc(filePath, this._buffer, { encoding: "utf8" });
          return this.emptyBuffer();
        });
      }
      clear() {
        return __awaiter(this, void 0, void 0, function* () {
          return this.emptyBuffer().write({ overwrite: true });
        });
      }
      stringify() {
        return this._buffer;
      }
      isEmptyBuffer() {
        return this._buffer.length === 0;
      }
      emptyBuffer() {
        this._buffer = "";
        return this;
      }
      addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
      }
      addEOL() {
        return this.addRaw(os_1.EOL);
      }
      addCodeBlock(code, lang) {
        const attrs = Object.assign({}, lang && { lang });
        const element = this.wrap("pre", this.wrap("code", code), attrs);
        return this.addRaw(element).addEOL();
      }
      addList(items, ordered = false) {
        const tag = ordered ? "ol" : "ul";
        const listItems = items.map((item) => this.wrap("li", item)).join("");
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
      }
      addTable(rows) {
        const tableBody = rows.map((row) => {
          const cells = row.map((cell) => {
            if (typeof cell === "string") {
              return this.wrap("td", cell);
            }
            const { header, data, colspan, rowspan } = cell;
            const tag = header ? "th" : "td";
            const attrs = Object.assign(Object.assign({}, colspan && { colspan }), rowspan && { rowspan });
            return this.wrap(tag, data, attrs);
          }).join("");
          return this.wrap("tr", cells);
        }).join("");
        const element = this.wrap("table", tableBody);
        return this.addRaw(element).addEOL();
      }
      addDetails(label, content) {
        const element = this.wrap("details", this.wrap("summary", label) + content);
        return this.addRaw(element).addEOL();
      }
      addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, width && { width }), height && { height });
        const element = this.wrap("img", null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
      }
      addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag) ? tag : "h1";
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
      }
      addSeparator() {
        const element = this.wrap("hr", null);
        return this.addRaw(element).addEOL();
      }
      addBreak() {
        const element = this.wrap("br", null);
        return this.addRaw(element).addEOL();
      }
      addQuote(text, cite) {
        const attrs = Object.assign({}, cite && { cite });
        const element = this.wrap("blockquote", text, attrs);
        return this.addRaw(element).addEOL();
      }
      addLink(text, href) {
        const element = this.wrap("a", text, { href });
        return this.addRaw(element).addEOL();
      }
    };
    var _summary = new Summary();
    exports.markdownSummary = _summary;
    exports.summary = _summary;
  }
});

// dist/dnt/node_modules/@actions/core/lib/path-utils.js
var require_path_utils = __commonJS({
  "dist/dnt/node_modules/@actions/core/lib/path-utils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
    var path2 = __importStar(require("path"));
    function toPosixPath(pth) {
      return pth.replace(/[\\]/g, "/");
    }
    exports.toPosixPath = toPosixPath;
    function toWin32Path(pth) {
      return pth.replace(/[/]/g, "\\");
    }
    exports.toWin32Path = toWin32Path;
    function toPlatformPath(pth) {
      return pth.replace(/[/\\]/g, path2.sep);
    }
    exports.toPlatformPath = toPlatformPath;
  }
});

// dist/dnt/node_modules/@actions/core/lib/core.js
var require_core = __commonJS({
  "dist/dnt/node_modules/@actions/core/lib/core.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve3) {
          resolve3(value);
        });
      }
      return new (P || (P = Promise))(function(resolve3, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
    var command_1 = require_command();
    var file_command_1 = require_file_command();
    var utils_1 = require_utils();
    var os = __importStar(require("os"));
    var path2 = __importStar(require("path"));
    var oidc_utils_1 = require_oidc_utils();
    var ExitCode;
    (function(ExitCode2) {
      ExitCode2[ExitCode2["Success"] = 0] = "Success";
      ExitCode2[ExitCode2["Failure"] = 1] = "Failure";
    })(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
    function exportVariable(name, val) {
      const convertedVal = utils_1.toCommandValue(val);
      process.env[name] = convertedVal;
      const filePath = process.env["GITHUB_ENV"] || "";
      if (filePath) {
        return file_command_1.issueFileCommand("ENV", file_command_1.prepareKeyValueMessage(name, val));
      }
      command_1.issueCommand("set-env", { name }, convertedVal);
    }
    exports.exportVariable = exportVariable;
    function setSecret(secret) {
      command_1.issueCommand("add-mask", {}, secret);
    }
    exports.setSecret = setSecret;
    function addPath(inputPath) {
      const filePath = process.env["GITHUB_PATH"] || "";
      if (filePath) {
        file_command_1.issueFileCommand("PATH", inputPath);
      } else {
        command_1.issueCommand("add-path", {}, inputPath);
      }
      process.env["PATH"] = `${inputPath}${path2.delimiter}${process.env["PATH"]}`;
    }
    exports.addPath = addPath;
    function getInput2(name, options) {
      const val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
      if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
      }
      if (options && options.trimWhitespace === false) {
        return val;
      }
      return val.trim();
    }
    exports.getInput = getInput2;
    function getMultilineInput(name, options) {
      const inputs = getInput2(name, options).split("\n").filter((x) => x !== "");
      if (options && options.trimWhitespace === false) {
        return inputs;
      }
      return inputs.map((input) => input.trim());
    }
    exports.getMultilineInput = getMultilineInput;
    function getBooleanInput(name, options) {
      const trueValue = ["true", "True", "TRUE"];
      const falseValue = ["false", "False", "FALSE"];
      const val = getInput2(name, options);
      if (trueValue.includes(val))
        return true;
      if (falseValue.includes(val))
        return false;
      throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
    }
    exports.getBooleanInput = getBooleanInput;
    function setOutput2(name, value) {
      const filePath = process.env["GITHUB_OUTPUT"] || "";
      if (filePath) {
        return file_command_1.issueFileCommand("OUTPUT", file_command_1.prepareKeyValueMessage(name, value));
      }
      process.stdout.write(os.EOL);
      command_1.issueCommand("set-output", { name }, utils_1.toCommandValue(value));
    }
    exports.setOutput = setOutput2;
    function setCommandEcho(enabled) {
      command_1.issue("echo", enabled ? "on" : "off");
    }
    exports.setCommandEcho = setCommandEcho;
    function setFailed2(message) {
      process.exitCode = ExitCode.Failure;
      error(message);
    }
    exports.setFailed = setFailed2;
    function isDebug() {
      return process.env["RUNNER_DEBUG"] === "1";
    }
    exports.isDebug = isDebug;
    function debug2(message) {
      command_1.issueCommand("debug", {}, message);
    }
    exports.debug = debug2;
    function error(message, properties = {}) {
      command_1.issueCommand("error", utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports.error = error;
    function warning(message, properties = {}) {
      command_1.issueCommand("warning", utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports.warning = warning;
    function notice(message, properties = {}) {
      command_1.issueCommand("notice", utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports.notice = notice;
    function info2(message) {
      process.stdout.write(message + os.EOL);
    }
    exports.info = info2;
    function startGroup(name) {
      command_1.issue("group", name);
    }
    exports.startGroup = startGroup;
    function endGroup() {
      command_1.issue("endgroup");
    }
    exports.endGroup = endGroup;
    function group(name, fn) {
      return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
          result = yield fn();
        } finally {
          endGroup();
        }
        return result;
      });
    }
    exports.group = group;
    function saveState(name, value) {
      const filePath = process.env["GITHUB_STATE"] || "";
      if (filePath) {
        return file_command_1.issueFileCommand("STATE", file_command_1.prepareKeyValueMessage(name, value));
      }
      command_1.issueCommand("save-state", { name }, utils_1.toCommandValue(value));
    }
    exports.saveState = saveState;
    function getState(name) {
      return process.env[`STATE_${name}`] || "";
    }
    exports.getState = getState;
    function getIDToken(aud) {
      return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
      });
    }
    exports.getIDToken = getIDToken;
    var summary_1 = require_summary();
    Object.defineProperty(exports, "summary", { enumerable: true, get: function() {
      return summary_1.summary;
    } });
    var summary_2 = require_summary();
    Object.defineProperty(exports, "markdownSummary", { enumerable: true, get: function() {
      return summary_2.markdownSummary;
    } });
    var path_utils_1 = require_path_utils();
    Object.defineProperty(exports, "toPosixPath", { enumerable: true, get: function() {
      return path_utils_1.toPosixPath;
    } });
    Object.defineProperty(exports, "toWin32Path", { enumerable: true, get: function() {
      return path_utils_1.toWin32Path;
    } });
    Object.defineProperty(exports, "toPlatformPath", { enumerable: true, get: function() {
      return path_utils_1.toPlatformPath;
    } });
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

// dist/dnt/esm/actions/main.js
var import_core = __toESM(require_core(), 1);

// dist/dnt/esm/gh-wrapper/exec.js
async function exec(args) {
  const process2 = import_shim_deno2.Deno.run({
    cmd: ["gh", ...args],
    stdout: "piped",
    stderr: "piped"
  });
  const [{ code }, stdout, stderr] = await Promise.all([
    process2.status(),
    process2.output(),
    process2.stderrOutput()
  ]);
  if (code === 0) {
    return new TextDecoder().decode(stdout).trim();
  } else {
    const jqIndex = args.indexOf("-q");
    if (0 < jqIndex) {
      await exec([...args.slice(0, jqIndex), ...args.slice(jqIndex + 2, args.length)]);
    }
    throw new GitHubCliError(args, code, new TextDecoder().decode(stderr).trim());
  }
}
var GitHubCliError = class extends Error {
  constructor(args, code, stderr) {
    super(`\`gh ${args.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ")}\` exit code is not zero, ExitCode: ${code}
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
      value: code
    });
    Object.defineProperty(this, "stderr", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: stderr
    });
  }
};

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
  return await exec(args);
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
  return await exec(args);
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

// dist/dnt/esm/git-wrapper/exec.js
async function exec2(args) {
  const process2 = import_shim_deno2.Deno.run({
    cmd: ["git", ...args],
    stdout: "piped",
    stderr: "piped"
  });
  const [{ code }, stdout, stderr] = await Promise.all([
    process2.status(),
    process2.output(),
    process2.stderrOutput()
  ]);
  if (code === 0) {
    return new TextDecoder().decode(stdout).trim();
  } else {
    throw new GitError(args, code, new TextDecoder().decode(stderr).trim());
  }
}
var GitError = class extends Error {
  constructor(args, code, stderr) {
    super(`\`git ${args.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ")}\` exit code is not zero, ExitCode: ${code}
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
      value: code
    });
    Object.defineProperty(this, "stderr", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: stderr
    });
  }
};

// dist/dnt/esm/git-wrapper/list_remotes.js
function createArgs({ cwd }) {
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
  const args = createArgs(options);
  const stdout = await exec2(args);
  return parseRemotes(stdout);
}

// dist/dnt/esm/git-wrapper/rev_parse.js
function createArgs2({ arg, cwd }) {
  const args = [];
  if (cwd)
    args.push("-C", cwd);
  args.push("rev-parse", arg);
  return args;
}
async function revParse(options) {
  const args = createArgs2(options);
  return await exec2(args);
}

// dist/dnt/esm/core/fetch_sha.js
async function fetchSha(args) {
  const { sha } = args;
  if (sha) {
    try {
      const perPage = 1;
      const jq = ".[].sha";
      return await listCommits({ ...args, perPage, jq });
    } catch {
      return sha;
    }
  } else {
    return revParse({ arg: "HEAD" });
  }
}

// dist/dnt/esm/deps/deno.land/std@0.148.0/_util/os.js
var osType = (() => {
  const { Deno: Deno3 } = dntGlobalThis;
  if (typeof Deno3?.build?.os === "string") {
    return Deno3.build.os;
  }
  const { navigator } = dntGlobalThis;
  if (navigator?.appVersion?.includes?.("Win")) {
    return "windows";
  }
  return "linux";
})();
var isWindows = osType === "windows";

// dist/dnt/esm/deps/deno.land/std@0.148.0/path/win32.js
var win32_exports = {};
__export(win32_exports, {
  basename: () => basename,
  delimiter: () => delimiter,
  dirname: () => dirname,
  extname: () => extname,
  format: () => format,
  fromFileUrl: () => fromFileUrl,
  isAbsolute: () => isAbsolute,
  join: () => join,
  normalize: () => normalize,
  parse: () => parse,
  relative: () => relative,
  resolve: () => resolve,
  sep: () => sep,
  toFileUrl: () => toFileUrl,
  toNamespacedPath: () => toNamespacedPath
});

// dist/dnt/esm/deps/deno.land/std@0.148.0/path/_constants.js
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;
var CHAR_QUESTION_MARK = 63;

// dist/dnt/esm/deps/deno.land/std@0.148.0/path/_util.js
function assertPath(path2) {
  if (typeof path2 !== "string") {
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(path2)}`);
  }
}
function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}
function isPathSeparator(code) {
  return isPosixPathSeparator(code) || code === CHAR_BACKWARD_SLASH;
}
function isWindowsDeviceRoot(code) {
  return code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z || code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z;
}
function normalizeString(path2, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code;
  for (let i = 0, len = path2.length; i <= len; ++i) {
    if (i < len)
      code = path2.charCodeAt(i);
    else if (isPathSeparator2(code))
      break;
    else
      code = CHAR_FORWARD_SLASH;
    if (isPathSeparator2(code)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += `${separator}..`;
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += separator + path2.slice(lastSlash + 1, i);
        else
          res = path2.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format(sep3, pathObject) {
  const dir = pathObject.dir || pathObject.root;
  const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir)
    return base;
  if (dir === pathObject.root)
    return dir + base;
  return dir + sep3 + base;
}
var WHITESPACE_ENCODINGS = {
  "	": "%09",
  "\n": "%0A",
  "\v": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  " ": "%20"
};
function encodeWhitespace(string) {
  return string.replaceAll(/[\s]/g, (c) => {
    return WHITESPACE_ENCODINGS[c] ?? c;
  });
}

// dist/dnt/esm/deps/deno.land/std@0.148.0/_util/assert.js
var DenoStdInternalError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "DenoStdInternalError";
  }
};
function assert(expr, msg = "") {
  if (!expr) {
    throw new DenoStdInternalError(msg);
  }
}

// dist/dnt/esm/deps/deno.land/std@0.148.0/path/win32.js
var sep = "\\";
var delimiter = ";";
function resolve(...pathSegments) {
  let resolvedDevice = "";
  let resolvedTail = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1; i--) {
    let path2;
    const { Deno: Deno3 } = dntGlobalThis;
    if (i >= 0) {
      path2 = pathSegments[i];
    } else if (!resolvedDevice) {
      if (typeof Deno3?.cwd !== "function") {
        throw new TypeError("Resolved a drive-letter-less path without a CWD.");
      }
      path2 = Deno3.cwd();
    } else {
      if (typeof Deno3?.env?.get !== "function" || typeof Deno3?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path2 = Deno3.cwd();
      if (path2 === void 0 || path2.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
        path2 = `${resolvedDevice}\\`;
      }
    }
    assertPath(path2);
    const len = path2.length;
    if (len === 0)
      continue;
    let rootEnd = 0;
    let device = "";
    let isAbsolute3 = false;
    const code = path2.charCodeAt(0);
    if (len > 1) {
      if (isPathSeparator(code)) {
        isAbsolute3 = true;
        if (isPathSeparator(path2.charCodeAt(1))) {
          let j = 2;
          let last = j;
          for (; j < len; ++j) {
            if (isPathSeparator(path2.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            const firstPart = path2.slice(last, j);
            last = j;
            for (; j < len; ++j) {
              if (!isPathSeparator(path2.charCodeAt(j)))
                break;
            }
            if (j < len && j !== last) {
              last = j;
              for (; j < len; ++j) {
                if (isPathSeparator(path2.charCodeAt(j)))
                  break;
              }
              if (j === len) {
                device = `\\\\${firstPart}\\${path2.slice(last)}`;
                rootEnd = j;
              } else if (j !== last) {
                device = `\\\\${firstPart}\\${path2.slice(last, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code)) {
        if (path2.charCodeAt(1) === CHAR_COLON) {
          device = path2.slice(0, 2);
          rootEnd = 2;
          if (len > 2) {
            if (isPathSeparator(path2.charCodeAt(2))) {
              isAbsolute3 = true;
              rootEnd = 3;
            }
          }
        }
      }
    } else if (isPathSeparator(code)) {
      rootEnd = 1;
      isAbsolute3 = true;
    }
    if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      continue;
    }
    if (resolvedDevice.length === 0 && device.length > 0) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = `${path2.slice(rootEnd)}\\${resolvedTail}`;
      resolvedAbsolute = isAbsolute3;
    }
    if (resolvedAbsolute && resolvedDevice.length > 0)
      break;
  }
  resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
  return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function normalize(path2) {
  assertPath(path2);
  const len = path2.length;
  if (len === 0)
    return ".";
  let rootEnd = 0;
  let device;
  let isAbsolute3 = false;
  const code = path2.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      isAbsolute3 = true;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path2.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          const firstPart = path2.slice(last, j);
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path2.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path2.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path2.slice(last)}\\`;
            } else if (j !== last) {
              device = `\\\\${firstPart}\\${path2.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path2.charCodeAt(1) === CHAR_COLON) {
        device = path2.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path2.charCodeAt(2))) {
            isAbsolute3 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator(code)) {
    return "\\";
  }
  let tail;
  if (rootEnd < len) {
    tail = normalizeString(path2.slice(rootEnd), !isAbsolute3, "\\", isPathSeparator);
  } else {
    tail = "";
  }
  if (tail.length === 0 && !isAbsolute3)
    tail = ".";
  if (tail.length > 0 && isPathSeparator(path2.charCodeAt(len - 1))) {
    tail += "\\";
  }
  if (device === void 0) {
    if (isAbsolute3) {
      if (tail.length > 0)
        return `\\${tail}`;
      else
        return "\\";
    } else if (tail.length > 0) {
      return tail;
    } else {
      return "";
    }
  } else if (isAbsolute3) {
    if (tail.length > 0)
      return `${device}\\${tail}`;
    else
      return `${device}\\`;
  } else if (tail.length > 0) {
    return device + tail;
  } else {
    return device;
  }
}
function isAbsolute(path2) {
  assertPath(path2);
  const len = path2.length;
  if (len === 0)
    return false;
  const code = path2.charCodeAt(0);
  if (isPathSeparator(code)) {
    return true;
  } else if (isWindowsDeviceRoot(code)) {
    if (len > 2 && path2.charCodeAt(1) === CHAR_COLON) {
      if (isPathSeparator(path2.charCodeAt(2)))
        return true;
    }
  }
  return false;
}
function join(...paths) {
  const pathsCount = paths.length;
  if (pathsCount === 0)
    return ".";
  let joined;
  let firstPart = null;
  for (let i = 0; i < pathsCount; ++i) {
    const path2 = paths[i];
    assertPath(path2);
    if (path2.length > 0) {
      if (joined === void 0)
        joined = firstPart = path2;
      else
        joined += `\\${path2}`;
    }
  }
  if (joined === void 0)
    return ".";
  let needsReplace = true;
  let slashCount = 0;
  assert(firstPart != null);
  if (isPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2)))
            ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  if (needsReplace) {
    for (; slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator(joined.charCodeAt(slashCount)))
        break;
    }
    if (slashCount >= 2)
      joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize(joined);
}
function relative(from, to) {
  assertPath(from);
  assertPath(to);
  if (from === to)
    return "";
  const fromOrig = resolve(from);
  const toOrig = resolve(to);
  if (fromOrig === toOrig)
    return "";
  from = fromOrig.toLowerCase();
  to = toOrig.toLowerCase();
  if (from === to)
    return "";
  let fromStart = 0;
  let fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (; fromEnd - 1 > fromStart; --fromEnd) {
    if (from.charCodeAt(fromEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 0;
  let toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (; toEnd - 1 > toStart; --toEnd) {
    if (to.charCodeAt(toEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
          return toOrig.slice(toStart + i + 1);
        } else if (i === 2) {
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 2) {
          lastCommonSep = 3;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === CHAR_BACKWARD_SLASH)
      lastCommonSep = i;
  }
  if (i !== length && lastCommonSep === -1) {
    return toOrig;
  }
  let out = "";
  if (lastCommonSep === -1)
    lastCommonSep = 0;
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
      if (out.length === 0)
        out += "..";
      else
        out += "\\..";
    }
  }
  if (out.length > 0) {
    return out + toOrig.slice(toStart + lastCommonSep, toEnd);
  } else {
    toStart += lastCommonSep;
    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH)
      ++toStart;
    return toOrig.slice(toStart, toEnd);
  }
}
function toNamespacedPath(path2) {
  if (typeof path2 !== "string")
    return path2;
  if (path2.length === 0)
    return "";
  const resolvedPath = resolve(path2);
  if (resolvedPath.length >= 3) {
    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
        const code = resolvedPath.charCodeAt(2);
        if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
          return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
        }
      }
    } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0))) {
      if (resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
        return `\\\\?\\${resolvedPath}`;
      }
    }
  }
  return path2;
}
function dirname(path2) {
  assertPath(path2);
  const len = path2.length;
  if (len === 0)
    return ".";
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  const code = path2.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path2.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path2.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path2.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return path2;
            }
            if (j !== last) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path2.charCodeAt(1) === CHAR_COLON) {
        rootEnd = offset = 2;
        if (len > 2) {
          if (isPathSeparator(path2.charCodeAt(2)))
            rootEnd = offset = 3;
        }
      }
    }
  } else if (isPathSeparator(code)) {
    return path2;
  }
  for (let i = len - 1; i >= offset; --i) {
    if (isPathSeparator(path2.charCodeAt(i))) {
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
  return path2.slice(0, end);
}
function basename(path2, ext = "") {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath(path2);
  let start = 0;
  let end = -1;
  let matchedSlash = true;
  let i;
  if (path2.length >= 2) {
    const drive = path2.charCodeAt(0);
    if (isWindowsDeviceRoot(drive)) {
      if (path2.charCodeAt(1) === CHAR_COLON)
        start = 2;
    }
  }
  if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
    if (ext.length === path2.length && ext === path2)
      return "";
    let extIdx = ext.length - 1;
    let firstNonSlashEnd = -1;
    for (i = path2.length - 1; i >= start; --i) {
      const code = path2.charCodeAt(i);
      if (isPathSeparator(code)) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false;
          firstNonSlashEnd = i + 1;
        }
        if (extIdx >= 0) {
          if (code === ext.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i;
            }
          } else {
            extIdx = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end)
      end = firstNonSlashEnd;
    else if (end === -1)
      end = path2.length;
    return path2.slice(start, end);
  } else {
    for (i = path2.length - 1; i >= start; --i) {
      if (isPathSeparator(path2.charCodeAt(i))) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1)
      return "";
    return path2.slice(start, end);
  }
}
function extname(path2) {
  assertPath(path2);
  let start = 0;
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  if (path2.length >= 2 && path2.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path2.charCodeAt(0))) {
    start = startPart = 2;
  }
  for (let i = path2.length - 1; i >= start; --i) {
    const code = path2.charCodeAt(i);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
function format(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`);
  }
  return _format("\\", pathObject);
}
function parse(path2) {
  assertPath(path2);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  const len = path2.length;
  if (len === 0)
    return ret;
  let rootEnd = 0;
  let code = path2.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      rootEnd = 1;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path2.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path2.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path2.charCodeAt(j)))
                break;
            }
            if (j === len) {
              rootEnd = j;
            } else if (j !== last) {
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path2.charCodeAt(1) === CHAR_COLON) {
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path2.charCodeAt(2))) {
            if (len === 3) {
              ret.root = ret.dir = path2;
              return ret;
            }
            rootEnd = 3;
          }
        } else {
          ret.root = ret.dir = path2;
          return ret;
        }
      }
    }
  } else if (isPathSeparator(code)) {
    ret.root = ret.dir = path2;
    return ret;
  }
  if (rootEnd > 0)
    ret.root = path2.slice(0, rootEnd);
  let startDot = -1;
  let startPart = rootEnd;
  let end = -1;
  let matchedSlash = true;
  let i = path2.length - 1;
  let preDotState = 0;
  for (; i >= rootEnd; --i) {
    code = path2.charCodeAt(i);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      ret.base = ret.name = path2.slice(startPart, end);
    }
  } else {
    ret.name = path2.slice(startPart, startDot);
    ret.base = path2.slice(startPart, end);
    ret.ext = path2.slice(startDot, end);
  }
  if (startPart > 0 && startPart !== rootEnd) {
    ret.dir = path2.slice(0, startPart - 1);
  } else
    ret.dir = ret.root;
  return ret;
}
function fromFileUrl(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  let path2 = decodeURIComponent(url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url.hostname != "") {
    path2 = `\\\\${url.hostname}${path2}`;
  }
  return path2;
}
function toFileUrl(path2) {
  if (!isAbsolute(path2)) {
    throw new TypeError("Must be an absolute path.");
  }
  const [, hostname, pathname] = path2.match(/^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/);
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(pathname.replace(/%/g, "%25"));
  if (hostname != null && hostname != "localhost") {
    url.hostname = hostname;
    if (!url.hostname) {
      throw new TypeError("Invalid hostname.");
    }
  }
  return url;
}

// dist/dnt/esm/deps/deno.land/std@0.148.0/path/posix.js
var posix_exports = {};
__export(posix_exports, {
  basename: () => basename2,
  delimiter: () => delimiter2,
  dirname: () => dirname2,
  extname: () => extname2,
  format: () => format2,
  fromFileUrl: () => fromFileUrl2,
  isAbsolute: () => isAbsolute2,
  join: () => join2,
  normalize: () => normalize2,
  parse: () => parse2,
  relative: () => relative2,
  resolve: () => resolve2,
  sep: () => sep2,
  toFileUrl: () => toFileUrl2,
  toNamespacedPath: () => toNamespacedPath2
});
var sep2 = "/";
var delimiter2 = ":";
function resolve2(...pathSegments) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    let path2;
    if (i >= 0)
      path2 = pathSegments[i];
    else {
      const { Deno: Deno3 } = dntGlobalThis;
      if (typeof Deno3?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path2 = Deno3.cwd();
    }
    assertPath(path2);
    if (path2.length === 0) {
      continue;
    }
    resolvedPath = `${path2}/${resolvedPath}`;
    resolvedAbsolute = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
  if (resolvedAbsolute) {
    if (resolvedPath.length > 0)
      return `/${resolvedPath}`;
    else
      return "/";
  } else if (resolvedPath.length > 0)
    return resolvedPath;
  else
    return ".";
}
function normalize2(path2) {
  assertPath(path2);
  if (path2.length === 0)
    return ".";
  const isAbsolute3 = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
  const trailingSeparator = path2.charCodeAt(path2.length - 1) === CHAR_FORWARD_SLASH;
  path2 = normalizeString(path2, !isAbsolute3, "/", isPosixPathSeparator);
  if (path2.length === 0 && !isAbsolute3)
    path2 = ".";
  if (path2.length > 0 && trailingSeparator)
    path2 += "/";
  if (isAbsolute3)
    return `/${path2}`;
  return path2;
}
function isAbsolute2(path2) {
  assertPath(path2);
  return path2.length > 0 && path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
}
function join2(...paths) {
  if (paths.length === 0)
    return ".";
  let joined;
  for (let i = 0, len = paths.length; i < len; ++i) {
    const path2 = paths[i];
    assertPath(path2);
    if (path2.length > 0) {
      if (!joined)
        joined = path2;
      else
        joined += `/${path2}`;
    }
  }
  if (!joined)
    return ".";
  return normalize2(joined);
}
function relative2(from, to) {
  assertPath(from);
  assertPath(to);
  if (from === to)
    return "";
  from = resolve2(from);
  to = resolve2(to);
  if (from === to)
    return "";
  let fromStart = 1;
  const fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_FORWARD_SLASH)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 1;
  const toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_FORWARD_SLASH)
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
          return to.slice(toStart + i + 1);
        } else if (i === 0) {
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 0) {
          lastCommonSep = 0;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === CHAR_FORWARD_SLASH)
      lastCommonSep = i;
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      if (out.length === 0)
        out += "..";
      else
        out += "/..";
    }
  }
  if (out.length > 0)
    return out + to.slice(toStart + lastCommonSep);
  else {
    toStart += lastCommonSep;
    if (to.charCodeAt(toStart) === CHAR_FORWARD_SLASH)
      ++toStart;
    return to.slice(toStart);
  }
}
function toNamespacedPath2(path2) {
  return path2;
}
function dirname2(path2) {
  assertPath(path2);
  if (path2.length === 0)
    return ".";
  const hasRoot = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let end = -1;
  let matchedSlash = true;
  for (let i = path2.length - 1; i >= 1; --i) {
    if (path2.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1)
    return hasRoot ? "/" : ".";
  if (hasRoot && end === 1)
    return "//";
  return path2.slice(0, end);
}
function basename2(path2, ext = "") {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath(path2);
  let start = 0;
  let end = -1;
  let matchedSlash = true;
  let i;
  if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
    if (ext.length === path2.length && ext === path2)
      return "";
    let extIdx = ext.length - 1;
    let firstNonSlashEnd = -1;
    for (i = path2.length - 1; i >= 0; --i) {
      const code = path2.charCodeAt(i);
      if (code === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false;
          firstNonSlashEnd = i + 1;
        }
        if (extIdx >= 0) {
          if (code === ext.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i;
            }
          } else {
            extIdx = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end)
      end = firstNonSlashEnd;
    else if (end === -1)
      end = path2.length;
    return path2.slice(start, end);
  } else {
    for (i = path2.length - 1; i >= 0; --i) {
      if (path2.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1)
      return "";
    return path2.slice(start, end);
  }
}
function extname2(path2) {
  assertPath(path2);
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  for (let i = path2.length - 1; i >= 0; --i) {
    const code = path2.charCodeAt(i);
    if (code === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
function format2(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`);
  }
  return _format("/", pathObject);
}
function parse2(path2) {
  assertPath(path2);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  if (path2.length === 0)
    return ret;
  const isAbsolute3 = path2.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let start;
  if (isAbsolute3) {
    ret.root = "/";
    start = 1;
  } else {
    start = 0;
  }
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let i = path2.length - 1;
  let preDotState = 0;
  for (; i >= start; --i) {
    const code = path2.charCodeAt(i);
    if (code === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      if (startPart === 0 && isAbsolute3) {
        ret.base = ret.name = path2.slice(1, end);
      } else {
        ret.base = ret.name = path2.slice(startPart, end);
      }
    }
  } else {
    if (startPart === 0 && isAbsolute3) {
      ret.name = path2.slice(1, startDot);
      ret.base = path2.slice(1, end);
    } else {
      ret.name = path2.slice(startPart, startDot);
      ret.base = path2.slice(startPart, end);
    }
    ret.ext = path2.slice(startDot, end);
  }
  if (startPart > 0)
    ret.dir = path2.slice(0, startPart - 1);
  else if (isAbsolute3)
    ret.dir = "/";
  return ret;
}
function fromFileUrl2(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  return decodeURIComponent(url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function toFileUrl2(path2) {
  if (!isAbsolute2(path2)) {
    throw new TypeError("Must be an absolute path.");
  }
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(path2.replace(/%/g, "%25").replace(/\\/g, "%5C"));
  return url;
}

// dist/dnt/esm/deps/deno.land/std@0.148.0/path/glob.js
var path = isWindows ? win32_exports : posix_exports;
var { join: join3, normalize: normalize3 } = path;
var regExpEscapeChars = [
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
var rangeEscapeChars = ["-", "\\", "]"];
function globToRegExp(glob, { extended = true, globstar: globstarOption = true, os = osType, caseInsensitive = false } = {}) {
  if (glob == "") {
    return /(?!)/;
  }
  const sep3 = os == "windows" ? "(?:\\\\|/)+" : "/+";
  const sepMaybe = os == "windows" ? "(?:\\\\|/)*" : "/*";
  const seps = os == "windows" ? ["\\", "/"] : ["/"];
  const globstar = os == "windows" ? "(?:[^\\\\/]*(?:\\\\|/|$)+)*" : "(?:[^/]*(?:/|$)+)*";
  const wildcard = os == "windows" ? "[^\\\\/]*" : "[^/]*";
  const escapePrefix = os == "windows" ? "`" : "\\";
  let newLength = glob.length;
  for (; newLength > 1 && seps.includes(glob[newLength - 1]); newLength--)
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
    for (; i < glob.length && !seps.includes(glob[i]); i++) {
      if (inEscape) {
        inEscape = false;
        const escapeChars = inRange ? rangeEscapeChars : regExpEscapeChars;
        segment += escapeChars.includes(glob[i]) ? `\\${glob[i]}` : glob[i];
        continue;
      }
      if (glob[i] == escapePrefix) {
        inEscape = true;
        continue;
      }
      if (glob[i] == "[") {
        if (!inRange) {
          inRange = true;
          segment += "[";
          if (glob[i + 1] == "!") {
            i++;
            segment += "^";
          } else if (glob[i + 1] == "^") {
            i++;
            segment += "\\^";
          }
          continue;
        } else if (glob[i + 1] == ":") {
          let k = i + 1;
          let value = "";
          while (glob[k + 1] != null && glob[k + 1] != ":") {
            value += glob[k + 1];
            k++;
          }
          if (glob[k + 1] == ":" && glob[k + 2] == "]") {
            i = k + 2;
            if (value == "alnum")
              segment += "\\dA-Za-z";
            else if (value == "alpha")
              segment += "A-Za-z";
            else if (value == "ascii")
              segment += "\0-\x7F";
            else if (value == "blank")
              segment += "	 ";
            else if (value == "cntrl")
              segment += "\0-\x7F";
            else if (value == "digit")
              segment += "\\d";
            else if (value == "graph")
              segment += "!-~";
            else if (value == "lower")
              segment += "a-z";
            else if (value == "print")
              segment += " -~";
            else if (value == "punct") {
              segment += `!"#$%&'()*+,\\-./:;<=>?@[\\\\\\]^_\u2018{|}~`;
            } else if (value == "space")
              segment += "\\s\v";
            else if (value == "upper")
              segment += "A-Z";
            else if (value == "word")
              segment += "\\w";
            else if (value == "xdigit")
              segment += "\\dA-Fa-f";
            continue;
          }
        }
      }
      if (glob[i] == "]" && inRange) {
        inRange = false;
        segment += "]";
        continue;
      }
      if (inRange) {
        if (glob[i] == "\\") {
          segment += `\\\\`;
        } else {
          segment += glob[i];
        }
        continue;
      }
      if (glob[i] == ")" && groupStack.length > 0 && groupStack[groupStack.length - 1] != "BRACE") {
        segment += ")";
        const type = groupStack.pop();
        if (type == "!") {
          segment += wildcard;
        } else if (type != "@") {
          segment += type;
        }
        continue;
      }
      if (glob[i] == "|" && groupStack.length > 0 && groupStack[groupStack.length - 1] != "BRACE") {
        segment += "|";
        continue;
      }
      if (glob[i] == "+" && extended && glob[i + 1] == "(") {
        i++;
        groupStack.push("+");
        segment += "(?:";
        continue;
      }
      if (glob[i] == "@" && extended && glob[i + 1] == "(") {
        i++;
        groupStack.push("@");
        segment += "(?:";
        continue;
      }
      if (glob[i] == "?") {
        if (extended && glob[i + 1] == "(") {
          i++;
          groupStack.push("?");
          segment += "(?:";
        } else {
          segment += ".";
        }
        continue;
      }
      if (glob[i] == "!" && extended && glob[i + 1] == "(") {
        i++;
        groupStack.push("!");
        segment += "(?!";
        continue;
      }
      if (glob[i] == "{") {
        groupStack.push("BRACE");
        segment += "(?:";
        continue;
      }
      if (glob[i] == "}" && groupStack[groupStack.length - 1] == "BRACE") {
        groupStack.pop();
        segment += ")";
        continue;
      }
      if (glob[i] == "," && groupStack[groupStack.length - 1] == "BRACE") {
        segment += "|";
        continue;
      }
      if (glob[i] == "*") {
        if (extended && glob[i + 1] == "(") {
          i++;
          groupStack.push("*");
          segment += "(?:";
        } else {
          const prevChar = glob[i - 1];
          let numStars = 1;
          while (glob[i + 1] == "*") {
            i++;
            numStars++;
          }
          const nextChar = glob[i + 1];
          if (globstarOption && numStars == 2 && [...seps, void 0].includes(prevChar) && [...seps, void 0].includes(nextChar)) {
            segment += globstar;
            endsWithSep = true;
          } else {
            segment += wildcard;
          }
        }
        continue;
      }
      segment += regExpEscapeChars.includes(glob[i]) ? `\\${glob[i]}` : glob[i];
    }
    if (groupStack.length > 0 || inRange || inEscape) {
      segment = "";
      for (const c of glob.slice(j, i)) {
        segment += regExpEscapeChars.includes(c) ? `\\${c}` : c;
        endsWithSep = false;
      }
    }
    regExpString += segment;
    if (!endsWithSep) {
      regExpString += i < glob.length ? sep3 : sepMaybe;
      endsWithSep = true;
    }
    while (seps.includes(glob[i]))
      i++;
    if (!(i > j)) {
      throw new Error("Assertion failure: i > j (potential infinite loop)");
    }
    j = i;
  }
  regExpString = `^${regExpString}$`;
  return new RegExp(regExpString, caseInsensitive ? "i" : "");
}

// dist/dnt/esm/core/to_reqexp_array.js
function toReqExpArray(glob) {
  if (!glob) {
    return [];
  }
  if (!(glob instanceof Array)) {
    glob = [glob];
  }
  return glob.map((x) => x instanceof RegExp ? x : globToRegExp(x));
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
function createDescribe(tag, distance, sha) {
  if (distance === 0) {
    return tag;
  } else {
    return `${tag}-${distance}-g${sha.substring(0, 7)}`;
  }
}
async function ghDescribe({ repo: repoLike, commitish, defaultTag, match, exclude } = {}) {
  const { owner, repo, host } = await resolveRepo(repoLike);
  const [tags, { sha, histories }] = await Promise.all([
    fetchTags({ owner, repo, host, match, exclude }),
    (async () => {
      const sha2 = await fetchSha({ owner, repo, host, sha: commitish });
      const histories2 = fetchHistory({ owner, repo, host, sha: sha2 });
      return { sha: sha2, histories: histories2 };
    })()
  ]);
  const { distance, tag } = await searchTag(tags, histories) || {
    distance: 0,
    tag: defaultTag
  };
  if (!tag) {
    throw new GhDescribeError("No names found, cannot describe anything.");
  }
  const describe = createDescribe(tag, distance, sha);
  return { describe, tag, distance, sha };
}

// dist/dnt/esm/actions/main.js
async function run() {
  const token = (0, import_core.getInput)("token", { required: true });
  const repo = (0, import_core.getInput)("repo", { required: true });
  (0, import_core.debug)(`input repo: ${repo}`);
  const commitish = (0, import_core.getInput)("commit-ish", { required: true });
  (0, import_core.debug)(`input commit-ish: ${commitish}`);
  const match = ((0, import_core.getInput)("match") || null)?.split(/\s*,\s*/);
  (0, import_core.debug)(`input match: ${match}`);
  const exclude = ((0, import_core.getInput)("exclude") || null)?.split(/\s*,\s*/);
  (0, import_core.debug)(`input exclude: ${exclude}`);
  const defaultTag = (0, import_core.getInput)("default");
  (0, import_core.debug)(`input default: ${defaultTag}`);
  try {
    import_shim_deno2.Deno.env.set("GITHUB_TOKEN", token);
    const { describe, tag, distance, sha } = await ghDescribe({
      repo,
      commitish,
      defaultTag,
      match,
      exclude
    });
    (0, import_core.info)(describe);
    (0, import_core.setOutput)("describe", describe);
    (0, import_core.setOutput)("tag", tag);
    (0, import_core.setOutput)("distance", distance);
    (0, import_core.setOutput)("sha", sha);
  } catch (e) {
    if (e instanceof GhDescribeError) {
      (0, import_core.setFailed)(`fatal: ${e.message}`);
    } else {
      const message = e instanceof Error && e.stack || String(e);
      (0, import_core.setFailed)(message);
    }
  }
}
run();
