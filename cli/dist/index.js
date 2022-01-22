var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/stat.js
var require_stat = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/stat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stat = exports.denoifyFileInfo = void 0;
    var promises_1 = require("fs/promises");
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
    var stat = async (path) => denoifyFileInfo(await (0, promises_1.stat)(path));
    exports.stat = stat;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstat.js
var require_fstat = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstat.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstatSync.js
var require_fstatSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstatSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncate.js
var require_ftruncate = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ftruncate = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var _ftruncate = (0, util_1.promisify)(fs_1.ftruncate);
    exports.ftruncate = _ftruncate;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncateSync.js
var require_ftruncateSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncateSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ftruncateSync = void 0;
    var fs_1 = require("fs");
    exports.ftruncateSync = fs_1.ftruncateSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/read.js
var require_read = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/read.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    var util_1 = require("util");
    var fs_1 = require("fs");
    var _read = (0, util_1.promisify)(fs_1.read);
    var read = async function read2(rid, buffer) {
      const { bytesRead } = await _read(rid, buffer, 0, buffer.length, null);
      return bytesRead === 0 ? null : bytesRead;
    };
    exports.read = read;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readSync.js
var require_readSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/write.js
var require_write = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/write.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeSync.js
var require_writeSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/classes/File.js
var require_File = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/classes/File.js"(exports) {
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
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.File = void 0;
    var fs = __importStar(require("fs"));
    var fstat_js_1 = require_fstat();
    var fstatSync_js_1 = require_fstatSync();
    var ftruncate_js_1 = require_ftruncate();
    var ftruncateSync_js_1 = require_ftruncateSync();
    var read_js_1 = require_read();
    var readSync_js_1 = require_readSync();
    var write_js_1 = require_write();
    var writeSync_js_1 = require_writeSync();
    var File = class {
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
      seek(offset, whence) {
        throw new Error("Method not implemented.");
      }
      seekSync(offset, whence) {
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
    };
    exports.File = File;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/classes/PermissionStatus.js
var require_PermissionStatus = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/classes/PermissionStatus.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PermissionStatus = void 0;
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/classes/Permissions.js
var require_Permissions = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/classes/Permissions.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/classes.js
var require_classes = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/classes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PermissionStatus = exports.Permissions = exports.File = void 0;
    var File_js_1 = require_File();
    Object.defineProperty(exports, "File", { enumerable: true, get: function() {
      return File_js_1.File;
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/enums/SeekMode.js
var require_SeekMode = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/enums/SeekMode.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/enums.js
var require_enums = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/enums.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SeekMode = void 0;
    var SeekMode_js_1 = require_SeekMode();
    Object.defineProperty(exports, "SeekMode", { enumerable: true, get: function() {
      return SeekMode_js_1.SeekMode;
    } });
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/errors.js
var require_errors = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/errors.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/errorMap.js
var require_errorMap = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/errorMap.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/build.js
var require_build = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/build.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/customInspect.js
var require_customInspect = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/customInspect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.customInspect = void 0;
    exports.customInspect = Symbol.for("nodejs.util.inspect.custom");
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/env.js
var require_env = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/env.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/mainModule.js
var require_mainModule = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/mainModule.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/metrics.js
var require_metrics = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/metrics.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.metrics = void 0;
    var metrics = function metrics2() {
      console.warn([
        "Deno.metrics() shim returns a dummy object that does not update.",
        "If you think this is a mistake, raise an issue at https://github.com/denoland/node_deno_shims/issues"
      ].join("\n"));
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/noColor.js
var require_noColor = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/noColor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.noColor = void 0;
    exports.noColor = process.env.NO_COLOR !== void 0;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/permissions.js
var require_permissions = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/permissions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.permissions = void 0;
    var Permissions_js_1 = require_Permissions();
    exports.permissions = new Permissions_js_1.Permissions();
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/pid.js
var require_pid = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/pid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pid = void 0;
    exports.pid = process.pid;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/ppid.js
var require_ppid = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/ppid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ppid = void 0;
    exports.ppid = process.ppid;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/resources.js
var require_resources = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/resources.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/std.js
var require_std = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/std.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stderr = exports.stdout = exports.stdin = void 0;
    var File_js_1 = require_File();
    exports.stdin = new File_js_1.File(0);
    exports.stdout = new File_js_1.File(1);
    exports.stderr = new File_js_1.File(2);
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/version.js
var require_version = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.typescript = exports.deno = void 0;
    exports.deno = "1.17.2";
    exports.typescript = "4.5.2";
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/version.js
var require_version2 = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/version.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables.js
var require_variables = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/chdir.js
var require_chdir = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/chdir.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chdir = void 0;
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
    exports.chdir = chdir;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmod.js
var require_chmod = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmod.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmodSync.js
var require_chmodSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmodSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/chown.js
var require_chown = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/chown.js"(exports) {
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
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chown = void 0;
    var fs = __importStar(require("fs/promises"));
    var chown = async (path, uid, gid) => await fs.chown(path, uid !== null && uid !== void 0 ? uid : -1, gid !== null && gid !== void 0 ? gid : -1);
    exports.chown = chown;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/chownSync.js
var require_chownSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/chownSync.js"(exports) {
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
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chownSync = void 0;
    var fs = __importStar(require("fs"));
    var chownSync = (path, uid, gid) => fs.chownSync(path, uid !== null && uid !== void 0 ? uid : -1, gid !== null && gid !== void 0 ? gid : -1);
    exports.chownSync = chownSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/close.js
var require_close = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/close.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/Conn.js
var require_Conn = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/Conn.js"(exports) {
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
    var File_js_1 = require_File();
    var Conn = class extends File_js_1.File {
      constructor(rid, localAddr, remoteAddr, socket) {
        super(rid);
        this.rid = rid;
        this.localAddr = localAddr;
        this.remoteAddr = remoteAddr;
        _Conn_socket.set(this, void 0);
        __classPrivateFieldSet(this, _Conn_socket, socket || new net_1.Socket({ fd: rid }), "f");
      }
      async closeWrite() {
        await new Promise((resolve) => __classPrivateFieldGet(this, _Conn_socket, "f").end(resolve));
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/connect.js
var require_connect = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/connect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.connect = void 0;
    var net_1 = require("net");
    var Conn_js_1 = require_Conn();
    var connect = function connect2(options) {
      if (!isConnectOptions(options)) {
        throw new Error("Unstable UnixConnectOptions is not implemented");
      }
      const { transport = "tcp", hostname = "127.0.0.1", port } = options;
      if (transport !== "tcp") {
        throw new Error("Deno.connect is only implemented for transport: tcp");
      }
      const socket = (0, net_1.createConnection)({ port, host: hostname });
      socket.on("error", (err) => console.error(err));
      return new Promise((resolve) => {
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
          resolve(new Conn_js_1.Conn(rid, localAddr, remoteAddr, socket));
        });
      });
      function isConnectOptions(options2) {
        return options2.port != null;
      }
    };
    exports.connect = connect;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFile.js
var require_readTextFile = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFile.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readTextFile = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readTextFile = async (path, { signal } = {}) => {
      try {
        return await (0, promises_1.readFile)(path, { encoding: "utf8", signal });
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readTextFile = readTextFile;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/connectTls.js
var require_connectTls = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/connectTls.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.connectTls = void 0;
    var tls_1 = require("tls");
    var Conn_js_1 = require_Conn();
    var readTextFile_js_1 = require_readTextFile();
    var connectTls = async function connectTls2({ port, hostname = "127.0.0.1", certFile }) {
      const cert = certFile && await (0, readTextFile_js_1.readTextFile)(certFile);
      const socket = (0, tls_1.connect)({ port, host: hostname, cert });
      return new Promise((resolve) => {
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
          resolve(new Conn_js_1.TlsConn(rid, localAddr, remoteAddr, socket));
        });
      });
    };
    exports.connectTls = connectTls;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/consts.js
var require_consts = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/consts.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_BUFFER_SIZE = void 0;
    exports.DEFAULT_BUFFER_SIZE = 32 * 1024;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/copy.js
var require_copy = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/copy.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFile.js
var require_copyFile = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFile.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFileSync.js
var require_copyFileSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFileSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/fs_flags.js
var require_fs_flags = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/fs_flags.js"(exports) {
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
          throw new errors.BadResource("EINVAL: One of 'truncate', 'create', 'createNew' is required when 'write' and 'append' are false.");
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/open.js
var require_open = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/open.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.open = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var File_js_1 = require_File();
    var fs_flags_js_1 = require_fs_flags();
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
      const fd = await nodeOpen(path, flagMode, mode);
      return new File_js_1.File(fd);
    };
    exports.open = open;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/create.js
var require_create = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/create.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = void 0;
    var open_js_1 = require_open();
    var create = async function create2(path) {
      return await (0, open_js_1.open)(path, { create: true, truncate: true });
    };
    exports.create = create;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/openSync.js
var require_openSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/openSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.openSync = void 0;
    var fs_1 = require("fs");
    var File_js_1 = require_File();
    var fs_flags_js_1 = require_fs_flags();
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
      const fd = (0, fs_1.openSync)(path, flagMode, mode);
      return new File_js_1.File(fd);
    };
    exports.openSync = openSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/createSync.js
var require_createSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/createSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSync = void 0;
    var openSync_js_1 = require_openSync();
    var createSync = function createSync2(path) {
      return (0, openSync_js_1.openSync)(path, { create: true, truncate: true });
    };
    exports.createSync = createSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/cwd.js
var require_cwd = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/cwd.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cwd = void 0;
    exports.cwd = process.cwd;
  }
});

// cli/dist/node_modules/isexe/windows.js
var require_windows = __commonJS({
  "cli/dist/node_modules/isexe/windows.js"(exports, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = require("fs");
    function checkPathExt(path, options) {
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
        if (p && path.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path, options);
    }
    function isexe(path, options, cb) {
      fs.stat(path, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path, options));
      });
    }
    function sync(path, options) {
      return checkStat(fs.statSync(path), path, options);
    }
  }
});

// cli/dist/node_modules/isexe/mode.js
var require_mode = __commonJS({
  "cli/dist/node_modules/isexe/mode.js"(exports, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = require("fs");
    function isexe(path, options, cb) {
      fs.stat(path, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path, options) {
      return checkStat(fs.statSync(path), options);
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

// cli/dist/node_modules/isexe/index.js
var require_isexe = __commonJS({
  "cli/dist/node_modules/isexe/index.js"(exports, module2) {
    var fs = require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module2.exports = isexe;
    isexe.sync = sync;
    function isexe(path, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve, reject) {
          isexe(path, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path, options) {
      try {
        return core.sync(path, options || {});
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

// cli/dist/node_modules/which/which.js
var require_which = __commonJS({
  "cli/dist/node_modules/which/which.js"(exports, module2) {
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path = require("path");
    var COLON = isWindows ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
        ...isWindows ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || "").split(colon)
      ];
      const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows ? pathExtExe.split(colon) : [""];
      if (isWindows) {
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
      const step = (i) => new Promise((resolve, reject) => {
        if (i === pathEnv.length)
          return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve(subStep(p, i, 0));
      });
      const subStep = (p, i, ii) => new Promise((resolve, reject) => {
        if (ii === pathExt.length)
          return resolve(step(i + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve(p + ext);
          }
          return resolve(subStep(p, i, ii + 1));
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
        const pCmd = path.join(pathPart, cmd);
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/execPath.js
var require_execPath = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/execPath.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/exit.js
var require_exit = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/exit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exit = void 0;
    var exit = function exit2(code2) {
      return process.exit(code2);
    };
    exports.exit = exit;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasync.js
var require_fdatasync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fdatasync = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var _fdatasync = (0, util_1.promisify)(fs_1.fdatasync);
    exports.fdatasync = _fdatasync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasyncSync.js
var require_fdatasyncSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasyncSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fdatasyncSync = void 0;
    var fs_1 = require("fs");
    exports.fdatasyncSync = fs_1.fdatasyncSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsync.js
var require_fsync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsyncSync.js
var require_fsyncSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsyncSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/inspect.js
var require_inspect = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/inspect.js"(exports) {
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
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inspect = void 0;
    var util = __importStar(require("util"));
    var inspect2 = (value, options = {}) => util.inspect(value, options);
    exports.inspect = inspect2;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/kill.js
var require_kill = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/kill.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/link.js
var require_link = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/link.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/linkSync.js
var require_linkSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/linkSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/Listener.js
var require_Listener = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/Listener.js"(exports) {
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
      [(_Listener_listener = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
        return this;
      }
    };
    exports.Listener = Listener;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/listen.js
var require_listen = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/listen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.listen = void 0;
    var net_1 = require("net");
    var Conn_js_1 = require_Conn();
    var Listener_js_1 = require_Listener();
    async function* _listen(server, waitFor) {
      await waitFor;
      while (server.listening) {
        yield new Promise((resolve) => server.once("connection", (socket) => {
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
          resolve(new Conn_js_1.Conn(rid, localAddr, remoteAddr));
        }));
      }
    }
    var listen = function listen2(options) {
      if (!isConnectOptions(options)) {
        throw new Error("Unstable UnixConnectOptions is not implemented");
      }
      const { port, hostname = "0.0.0.0", transport = "tcp" } = options;
      if (transport !== "tcp") {
        throw new Error("Deno.listen is only implemented for transport: tcp");
      }
      const server = (0, net_1.createServer)();
      const waitFor = new Promise((resolve) => server.listen(port, hostname, resolve));
      const listener = new Listener_js_1.Listener(server._handle.fd, {
        hostname,
        port,
        transport: "tcp"
      }, _listen(server, waitFor));
      return listener;
      function isConnectOptions(options2) {
        return options2.port != null;
      }
    };
    exports.listen = listen;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFileSync.js
var require_readTextFileSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFileSync.js"(exports) {
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
    var readTextFileSync = function(path) {
      try {
        return fs.readFileSync(path, "utf8");
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readTextFileSync = readTextFileSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/listenTls.js
var require_listenTls = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/listenTls.js"(exports) {
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
        yield new Promise((resolve) => server.once("secureConnection", (socket) => {
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
          resolve(new Conn_js_1.TlsConn(rid, localAddr, remoteAddr));
        }));
      }
    }
    var listenTls = function listen({ port, hostname = "0.0.0.0", transport = "tcp", certFile, keyFile }) {
      if (transport !== "tcp") {
        throw new Error("Deno.listen is only implemented for transport: tcp");
      }
      const [cert, key] = [certFile, keyFile].map(readTextFileSync_js_1.readTextFileSync);
      const server = (0, tls_1.createServer)({ cert, key });
      const waitFor = new Promise((resolve) => server.listen(port, hostname, resolve));
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstat.js
var require_lstat = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstat.js"(exports) {
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
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lstat = void 0;
    var fs = __importStar(require("fs/promises"));
    var stat_js_1 = require_stat();
    var lstat = async (path) => (0, stat_js_1.denoifyFileInfo)(await fs.lstat(path));
    exports.lstat = lstat;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstatSync.js
var require_lstatSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstatSync.js"(exports) {
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
    var lstatSync = (path) => (0, stat_js_1.denoifyFileInfo)(fs.lstatSync(path));
    exports.lstatSync = lstatSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDir.js
var require_makeTempDir = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDir.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDirSync.js
var require_makeTempDirSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDirSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/random_id.js
var require_random_id = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/random_id.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFile.js
var require_writeTextFile = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFile.js"(exports) {
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
    var writeTextFile = async function writeTextFile2(path, data, { append = false, create = true, mode, signal } = {}) {
      const truncate = create && !append;
      const flag = (0, fs_flags_js_1.getFsFlag)({ append, create, truncate, write: true });
      try {
        await fs.writeFile(path, data, { flag, mode, signal });
        if (mode !== void 0)
          await fs.chmod(path, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.writeTextFile = writeTextFile;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFile.js
var require_makeTempFile = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFile.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFileSync.js
var require_writeTextFileSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFileSync.js"(exports) {
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
    var writeTextFileSync = (path, data, { append = false, create = true, mode } = {}) => {
      const flag = create ? append ? "a" : "w" : "r+";
      try {
        fs.writeFileSync(path, data, { flag, mode });
        if (mode !== void 0)
          fs.chmodSync(path, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.writeTextFileSync = writeTextFileSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFileSync.js
var require_makeTempFileSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFileSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/memoryUsage.js
var require_memoryUsage = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/memoryUsage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.memoryUsage = void 0;
    exports.memoryUsage = process.memoryUsage;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdir.js
var require_mkdir = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdir.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mkdir = void 0;
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
    exports.mkdir = mkdir;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdirSync.js
var require_mkdirSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdirSync.js"(exports) {
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
    exports.mkdirSync = mkdirSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDir.js
var require_readDir = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDir.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readDir = void 0;
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
    exports.readDir = readDir;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDirSync.js
var require_readDirSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDirSync.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readDirSync = void 0;
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
    exports.readDirSync = readDirSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFile.js
var require_readFile = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFile.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readFile = void 0;
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
    exports.readFile = readFile;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFileSync.js
var require_readFileSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFileSync.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readFileSync = void 0;
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
    exports.readFileSync = readFileSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLink.js
var require_readLink = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLink.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLinkSync.js
var require_readLinkSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLinkSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPath.js
var require_realPath = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPath.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPathSync.js
var require_realPathSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPathSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/remove.js
var require_remove = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/remove.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.remove = void 0;
    var promises_1 = require("fs/promises");
    var remove = function remove2(path, options = {}) {
      return (0, promises_1.rm)(path, options.recursive ? { recursive: true, force: true } : {});
    };
    exports.remove = remove;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSync.js
var require_removeSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSync.js"(exports) {
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
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeSync = void 0;
    var fs = __importStar(require("fs"));
    var removeSync = (path, options = {}) => fs.rmSync(path, options.recursive ? { recursive: true, force: true } : {});
    exports.removeSync = removeSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/rename.js
var require_rename = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/rename.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/renameSync.js
var require_renameSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/renameSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/streams.js
var require_streams = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/streams.js"(exports) {
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
        return new Promise((resolve, reject) => {
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
              resolve(result);
            } else {
              __classPrivateFieldGet(this, _BufferStreamReader_pendingActions, "f").push(action);
            }
          };
          action();
        });
      }
      read(p) {
        return new Promise((resolve, reject) => {
          const action = () => {
            if (__classPrivateFieldGet(this, _BufferStreamReader_error, "f")) {
              reject(__classPrivateFieldGet(this, _BufferStreamReader_error, "f"));
              return;
            }
            const readBuffer = __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").read(p.byteLength);
            if (readBuffer && readBuffer.byteLength > 0) {
              readBuffer.copy(p, 0, 0, readBuffer.byteLength);
              resolve(readBuffer.byteLength);
              return;
            }
            if (__classPrivateFieldGet(this, _BufferStreamReader_ended, "f")) {
              resolve(null);
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
        return new Promise((resolve, reject) => {
          __classPrivateFieldGet(this, _StreamWriter_stream, "f").write(p, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(p.byteLength);
            }
          });
        });
      }
    };
    exports.StreamWriter = StreamWriter;
    _StreamWriter_stream = /* @__PURE__ */ new WeakMap();
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/run.js
var require_run = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/run.js"(exports) {
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
        const code2 = receivedCode != null ? receivedCode : signal != null ? 128 + signal : void 0;
        const success = code2 === 0;
        __classPrivateFieldSet(this, _Process_receivedStatus, true, "f");
        return { code: code2, signal, success };
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/shutdown.js
var require_shutdown = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/shutdown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shutdown = void 0;
    var net_1 = require("net");
    var shutdown = async function shutdown2(rid) {
      await new Promise((resolve) => new net_1.Socket({ fd: rid }).end(resolve));
    };
    exports.shutdown = shutdown;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/statSync.js
var require_statSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/statSync.js"(exports) {
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
    var statSync = (path) => (0, stat_js_1.denoifyFileInfo)(fs.statSync(path));
    exports.statSync = statSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlink.js
var require_symlink = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlink.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlinkSync.js
var require_symlinkSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlinkSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/test.js
var require_test = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/test.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.testDefinitions = void 0;
    exports.testDefinitions = [];
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/test.js
var require_test2 = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/test.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = void 0;
    var test_js_1 = require_test();
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
      test_js_1.testDefinitions.push(testDef);
    };
    exports.test = test;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncate.js
var require_truncate = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncate.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncateSync.js
var require_truncateSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncateSync.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/iterutil.js
var require_iterutil = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/internal/iterutil.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/watchFs.js
var require_watchFs = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/watchFs.js"(exports) {
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
      const masterWatcher = (0, iterutil_js_1.merge)(paths.map((path) => (0, iterutil_js_1.mapAsync)((0, promises_1.watch)(path, { recursive: options === null || options === void 0 ? void 0 : options.recursive, signal }), (info) => ({
        kind: "modify",
        paths: [(0, path_1.resolve)(path, info.filename)]
      }))));
      function close() {
        ac.abort();
      }
      return Object.assign(masterWatcher, { rid, close });
    };
    exports.watchFs = watchFs;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFile.js
var require_writeFile = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFile.js"(exports) {
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
    var writeFile = async function writeFile2(path, data, { append = false, create = true, mode, signal } = {}) {
      const truncate = create && !append;
      const flag = (0, fs_flags_js_1.getFsFlag)({ append, create, truncate, write: true });
      try {
        await fs.writeFile(path, data, { flag, signal });
        if (mode !== void 0)
          await fs.chmod(path, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.writeFile = writeFile;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFileSync.js
var require_writeFileSync = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFileSync.js"(exports) {
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
    var writeFileSync = function writeFileSync2(path, data, options = {}) {
      try {
        if (options.create !== void 0) {
          const create = !!options.create;
          if (!create) {
            (0, statSync_js_1.statSync)(path);
          }
        }
        const openOptions = options.append ? { write: true, create: true, append: true } : { write: true, create: true, truncate: true };
        const file = (0, openSync_js_1.openSync)(path, openOptions);
        if (options.mode !== void 0 && options.mode !== null && (0, os_1.platform)() !== "win32") {
          (0, chmodSync_js_1.chmodSync)(path, options.mode);
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/args.js
var require_args = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/variables/args.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.args = void 0;
    exports.args = process.argv.slice(2);
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions.js
var require_functions = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/functions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readSync = exports.readLinkSync = exports.readLink = exports.readFileSync = exports.readFile = exports.readDirSync = exports.readDir = exports.read = exports.openSync = exports.open = exports.mkdirSync = exports.mkdir = exports.memoryUsage = exports.makeTempFileSync = exports.makeTempFile = exports.makeTempDirSync = exports.makeTempDir = exports.lstatSync = exports.lstat = exports.listenTls = exports.listen = exports.linkSync = exports.link = exports.kill = exports.inspect = exports.ftruncateSync = exports.ftruncate = exports.fsyncSync = exports.fsync = exports.fstatSync = exports.fstat = exports.fdatasyncSync = exports.fdatasync = exports.exit = exports.execPath = exports.cwd = exports.createSync = exports.create = exports.copyFileSync = exports.copyFile = exports.copy = exports.connectTls = exports.connect = exports.close = exports.chownSync = exports.chown = exports.chmodSync = exports.chmod = exports.chdir = exports.isatty = void 0;
    exports.args = exports.writeTextFileSync = exports.writeTextFile = exports.writeSync = exports.writeFileSync = exports.writeFile = exports.write = exports.watchFs = exports.truncateSync = exports.truncate = exports.test = exports.symlinkSync = exports.symlink = exports.statSync = exports.stat = exports.shutdown = exports.run = exports.Process = exports.renameSync = exports.rename = exports.removeSync = exports.remove = exports.realPathSync = exports.realPath = exports.readTextFileSync = exports.readTextFile = void 0;
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/types.js
var require_types = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/main.js
var require_main = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/stable/main.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/deno/unstable/main.js
var require_main2 = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno/unstable/main.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sleepSync = exports.utimeSync = exports.utime = exports.futimeSync = exports.futime = void 0;
    var fs_1 = __importDefault(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var futime = async function(rid, atime, mtime) {
      try {
        await new Promise((resolve, reject) => {
          fs_1.default.futimes(rid, atime, mtime, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
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
    exports.utime = utime;
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
    exports.utimeSync = utimeSync;
    var sleepSync = function(milliseconds) {
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
    };
    exports.sleepSync = sleepSync;
  }
});

// cli/dist/node_modules/@deno/shim-deno/dist/deno.js
var require_deno = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/deno.js"(exports) {
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

// cli/dist/node_modules/@deno/shim-deno/dist/index.js
var require_dist = __commonJS({
  "cli/dist/node_modules/@deno/shim-deno/dist/index.js"(exports) {
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

// cli/dist/esm/_dnt.shims.js
var import_shim_deno = __toESM(require_dist(), 1);
var import_shim_deno2 = __toESM(require_dist(), 1);
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

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/_utils/distance.js
function distance(a, b) {
  if (a.length == 0) {
    return b.length;
  }
  if (b.length == 0) {
    return a.length;
  }
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) == a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }
  return matrix[b.length][a.length];
}

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/flags/_utils.js
function paramCaseToCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
function underscoreToCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase().replace(/_([a-z])/g, (g) => g[1].toUpperCase());
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
  const match = closest(type, types);
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
function closest(str, arr) {
  let minDistance = Infinity;
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const dist = distance(str, arr[i]);
    if (dist < minDistance) {
      minDistance = dist;
      minIndex = i;
    }
  }
  return arr[minIndex];
}
function getDefaultValue(option) {
  return typeof option.default === "function" ? option.default() : option.default;
}

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/flags/_errors.js
var FlagsError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, FlagsError.prototype);
  }
};
var UnknownRequiredOption = class extends FlagsError {
  constructor(option, options) {
    super(`Unknown required option "${getFlag(option)}".${didYouMeanOption(option, options)}`);
    Object.setPrototypeOf(this, UnknownRequiredOption.prototype);
  }
};
var UnknownConflictingOption = class extends FlagsError {
  constructor(option, options) {
    super(`Unknown conflicting option "${getFlag(option)}".${didYouMeanOption(option, options)}`);
    Object.setPrototypeOf(this, UnknownConflictingOption.prototype);
  }
};
var UnknownType = class extends FlagsError {
  constructor(type, types) {
    super(`Unknown type "${type}".${didYouMeanType(type, types)}`);
    Object.setPrototypeOf(this, UnknownType.prototype);
  }
};
var ValidationError = class extends FlagsError {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
};
var DuplicateOption = class extends ValidationError {
  constructor(name) {
    super(`Option "${getFlag(name).replace(/^--no-/, "--")}" can only occur once, but was found several times.`);
    Object.setPrototypeOf(this, DuplicateOption.prototype);
  }
};
var InvalidOption = class extends ValidationError {
  constructor(option, options) {
    super(`Invalid option "${getFlag(option)}".${didYouMeanOption(option, options)}`);
    Object.setPrototypeOf(this, InvalidOption.prototype);
  }
};
var UnknownOption = class extends ValidationError {
  constructor(option, options) {
    super(`Unknown option "${getFlag(option)}".${didYouMeanOption(option, options)}`);
    Object.setPrototypeOf(this, UnknownOption.prototype);
  }
};
var MissingOptionValue = class extends ValidationError {
  constructor(option) {
    super(`Missing value for option "${getFlag(option)}".`);
    Object.setPrototypeOf(this, MissingOptionValue.prototype);
  }
};
var InvalidOptionValue = class extends ValidationError {
  constructor(option, expected, value) {
    super(`Option "${getFlag(option)}" must be of type "${expected}", but got "${value}".`);
    Object.setPrototypeOf(this, InvalidOptionValue.prototype);
  }
};
var OptionNotCombinable = class extends ValidationError {
  constructor(option) {
    super(`Option "${getFlag(option)}" cannot be combined with other options.`);
    Object.setPrototypeOf(this, OptionNotCombinable.prototype);
  }
};
var ConflictingOption = class extends ValidationError {
  constructor(option, conflictingOption) {
    super(`Option "${getFlag(option)}" conflicts with option "${getFlag(conflictingOption)}".`);
    Object.setPrototypeOf(this, ConflictingOption.prototype);
  }
};
var DependingOption = class extends ValidationError {
  constructor(option, dependingOption) {
    super(`Option "${getFlag(option)}" depends on option "${getFlag(dependingOption)}".`);
    Object.setPrototypeOf(this, DependingOption.prototype);
  }
};
var MissingRequiredOption = class extends ValidationError {
  constructor(option) {
    super(`Missing required option "${getFlag(option)}".`);
    Object.setPrototypeOf(this, MissingRequiredOption.prototype);
  }
};
var RequiredArgumentFollowsOptionalArgument = class extends ValidationError {
  constructor(arg) {
    super(`An required argument cannot follow an optional argument, but "${arg}"  is defined as required.`);
    Object.setPrototypeOf(this, RequiredArgumentFollowsOptionalArgument.prototype);
  }
};
var ArgumentFollowsVariadicArgument = class extends ValidationError {
  constructor(arg) {
    super(`An argument cannot follow an variadic argument, but got "${arg}".`);
    Object.setPrototypeOf(this, ArgumentFollowsVariadicArgument.prototype);
  }
};
var NoArguments = class extends ValidationError {
  constructor() {
    super(`No arguments.`);
    Object.setPrototypeOf(this, NoArguments.prototype);
  }
};
var InvalidTypeError = class extends ValidationError {
  constructor({ label, name, value, type }, expected) {
    super(`${label} "${name}" must be of type "${type}", but got "${value}".` + (expected ? ` Expected values: ${expected.map((value2) => `"${value2}"`).join(", ")}` : ""));
    Object.setPrototypeOf(this, MissingOptionValue.prototype);
  }
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/flags/types.js
var OptionType;
(function(OptionType2) {
  OptionType2["STRING"] = "string";
  OptionType2["NUMBER"] = "number";
  OptionType2["INTEGER"] = "integer";
  OptionType2["BOOLEAN"] = "boolean";
})(OptionType || (OptionType = {}));

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/_utils.js
function didYouMeanCommand(command, commands, excludes = []) {
  const commandNames = commands.map((command2) => command2.getName()).filter((command2) => !excludes.includes(command2));
  return didYouMean(" Did you mean command", command, commandNames);
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
  return { flags: parts, typeDefinition };
}
function parseArgumentsDefinition(argsDefinition, validate = true, all) {
  const argumentDetails = [];
  let hasOptional = false;
  let hasVariadic = false;
  const parts = argsDefinition.split(/ +/);
  for (const arg of parts) {
    if (validate && hasVariadic) {
      throw new ArgumentFollowsVariadicArgument(arg);
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
      optionalValue: arg[0] !== "<",
      name: parts2[1],
      action: parts2[3] || type,
      variadic: false,
      list: type ? arg.indexOf(type + "[]") !== -1 : false,
      type
    };
    if (validate && !details.optionalValue && hasOptional) {
      throw new RequiredArgumentFollowsOptionalArgument(details.name);
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

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/_errors.js
var CommandError = class extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, CommandError.prototype);
  }
};
var ValidationError2 = class extends CommandError {
  constructor(message, { exitCode } = {}) {
    super(message);
    Object.defineProperty(this, "exitCode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.setPrototypeOf(this, ValidationError2.prototype);
    this.exitCode = exitCode ?? 1;
  }
};
var DuplicateOptionName = class extends CommandError {
  constructor(name) {
    super(`Option with name "${getFlag(name)}" already exists.`);
    Object.setPrototypeOf(this, DuplicateOptionName.prototype);
  }
};
var MissingCommandName = class extends CommandError {
  constructor() {
    super("Missing command name.");
    Object.setPrototypeOf(this, MissingCommandName.prototype);
  }
};
var DuplicateCommandName = class extends CommandError {
  constructor(name) {
    super(`Duplicate command name "${name}".`);
    Object.setPrototypeOf(this, DuplicateCommandName.prototype);
  }
};
var DuplicateCommandAlias = class extends CommandError {
  constructor(alias) {
    super(`Duplicate command alias "${alias}".`);
    Object.setPrototypeOf(this, DuplicateCommandAlias.prototype);
  }
};
var CommandNotFound = class extends CommandError {
  constructor(name, commands, excluded) {
    super(`Unknown command "${name}".${didYouMeanCommand(name, commands, excluded)}`);
    Object.setPrototypeOf(this, UnknownCommand.prototype);
  }
};
var DuplicateType = class extends CommandError {
  constructor(name) {
    super(`Type with name "${name}" already exists.`);
    Object.setPrototypeOf(this, DuplicateType.prototype);
  }
};
var DuplicateCompletion = class extends CommandError {
  constructor(name) {
    super(`Completion with name "${name}" already exists.`);
    Object.setPrototypeOf(this, DuplicateCompletion.prototype);
  }
};
var DuplicateExample = class extends CommandError {
  constructor(name) {
    super(`Example with name "${name}" already exists.`);
    Object.setPrototypeOf(this, DuplicateExample.prototype);
  }
};
var DuplicateEnvironmentVariable = class extends CommandError {
  constructor(name) {
    super(`Environment variable with name "${name}" already exists.`);
    Object.setPrototypeOf(this, DuplicateEnvironmentVariable.prototype);
  }
};
var MissingRequiredEnvVar = class extends ValidationError2 {
  constructor(envVar) {
    super(`Missing required environment variable "${envVar.names[0]}".`);
    Object.setPrototypeOf(this, MissingRequiredEnvVar.prototype);
  }
};
var EnvironmentVariableSingleValue = class extends CommandError {
  constructor(name) {
    super(`An environment variable can only have one value, but "${name}" has more than one.`);
    Object.setPrototypeOf(this, EnvironmentVariableSingleValue.prototype);
  }
};
var EnvironmentVariableOptionalValue = class extends CommandError {
  constructor(name) {
    super(`An environment variable cannot have an optional value, but "${name}" is defined as optional.`);
    Object.setPrototypeOf(this, EnvironmentVariableOptionalValue.prototype);
  }
};
var EnvironmentVariableVariadicValue = class extends CommandError {
  constructor(name) {
    super(`An environment variable cannot have an variadic value, but "${name}" is defined as variadic.`);
    Object.setPrototypeOf(this, EnvironmentVariableVariadicValue.prototype);
  }
};
var DefaultCommandNotFound = class extends CommandError {
  constructor(name, commands) {
    super(`Default command "${name}" not found.${didYouMeanCommand(name, commands)}`);
    Object.setPrototypeOf(this, DefaultCommandNotFound.prototype);
  }
};
var CommandExecutableNotFound = class extends CommandError {
  constructor(name) {
    super(`Command executable not found: ${name}`);
    Object.setPrototypeOf(this, CommandExecutableNotFound.prototype);
  }
};
var UnknownCommand = class extends ValidationError2 {
  constructor(name, commands, excluded) {
    super(`Unknown command "${name}".${didYouMeanCommand(name, commands, excluded)}`);
    Object.setPrototypeOf(this, UnknownCommand.prototype);
  }
};
var NoArgumentsAllowed = class extends ValidationError2 {
  constructor(name) {
    super(`No arguments allowed for command "${name}".`);
    Object.setPrototypeOf(this, NoArgumentsAllowed.prototype);
  }
};
var MissingArguments = class extends ValidationError2 {
  constructor(args) {
    super("Missing argument(s): " + args.join(", "));
    Object.setPrototypeOf(this, MissingArguments.prototype);
  }
};
var MissingArgument = class extends ValidationError2 {
  constructor(arg) {
    super(`Missing argument "${arg}".`);
    Object.setPrototypeOf(this, MissingArgument.prototype);
  }
};
var TooManyArguments = class extends ValidationError2 {
  constructor(args) {
    super(`Too many arguments: ${args.join(" ")}`);
    Object.setPrototypeOf(this, TooManyArguments.prototype);
  }
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/flags/types/boolean.js
var boolean = (type) => {
  if (~["1", "true"].indexOf(type.value)) {
    return true;
  }
  if (~["0", "false"].indexOf(type.value)) {
    return false;
  }
  throw new InvalidTypeError(type);
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/flags/types/number.js
var number = (type) => {
  const value = Number(type.value);
  if (Number.isFinite(value)) {
    return value;
  }
  throw new InvalidTypeError(type);
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/flags/types/string.js
var string = ({ value }) => {
  return value;
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/flags/validate_flags.js
function validateFlags(flags, values, _knownFlaks, allowEmpty, optionNames = {}) {
  const defaultValues = {};
  for (const option of flags) {
    let name;
    let defaultValue = void 0;
    if (option.name.startsWith("no-")) {
      const propName = option.name.replace(/^no-/, "");
      if (propName in values) {
        continue;
      }
      const positiveOption = getOption(flags, propName);
      if (positiveOption) {
        continue;
      }
      name = paramCaseToCamelCase(propName);
      defaultValue = true;
    }
    if (!name) {
      name = paramCaseToCamelCase(option.name);
    }
    if (!(name in optionNames)) {
      optionNames[name] = option.name;
    }
    const hasDefaultValue = typeof values[name] === "undefined" && (typeof option.default !== "undefined" || typeof defaultValue !== "undefined");
    if (hasDefaultValue) {
      values[name] = getDefaultValue(option) ?? defaultValue;
      defaultValues[option.name] = true;
      if (typeof option.value === "function") {
        values[name] = option.value(values[name]);
      }
    }
  }
  const keys = Object.keys(values);
  if (keys.length === 0 && allowEmpty) {
    return;
  }
  const options = keys.map((name) => ({
    name,
    option: getOption(flags, optionNames[name])
  }));
  for (const { name, option } of options) {
    if (!option) {
      throw new UnknownOption(name, flags);
    }
    if (option.standalone) {
      if (keys.length > 1) {
        if (options.every(({ option: opt }) => opt && (option === opt || defaultValues[opt.name]))) {
          return;
        }
        throw new OptionNotCombinable(option.name);
      }
      return;
    }
    option.conflicts?.forEach((flag) => {
      if (isset(flag, values)) {
        throw new ConflictingOption(option.name, flag);
      }
    });
    option.depends?.forEach((flag) => {
      if (!isset(flag, values) && !defaultValues[option.name]) {
        throw new DependingOption(option.name, flag);
      }
    });
    const isArray = (option.args?.length || 0) > 1;
    option.args?.forEach((arg, i) => {
      if (arg.requiredValue && (typeof values[name] === "undefined" || isArray && typeof values[name][i] === "undefined")) {
        throw new MissingOptionValue(option.name);
      }
    });
  }
  for (const option of flags) {
    if (option.required && !(paramCaseToCamelCase(option.name) in values)) {
      if ((!option.conflicts || !option.conflicts.find((flag) => !!values[flag])) && !options.find((opt) => opt.option?.conflicts?.find((flag) => flag === option.name))) {
        throw new MissingRequiredOption(option.name);
      }
    }
  }
  if (keys.length === 0 && !allowEmpty) {
    throw new NoArguments();
  }
}
function isset(flag, values) {
  const name = paramCaseToCamelCase(flag);
  return typeof values[name] !== "undefined";
}

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/flags/types/integer.js
var integer = (type) => {
  const value = Number(type.value);
  if (Number.isInteger(value)) {
    return value;
  }
  throw new InvalidTypeError(type);
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/flags/flags.js
var Types = {
  [OptionType.STRING]: string,
  [OptionType.NUMBER]: number,
  [OptionType.INTEGER]: integer,
  [OptionType.BOOLEAN]: boolean
};
function parseFlags(args, opts = {}) {
  args = args.slice();
  !opts.flags && (opts.flags = []);
  let inLiteral = false;
  let negate = false;
  const flags = {};
  const optionNames = {};
  let literal = [];
  let unknown = [];
  let stopEarly = null;
  opts.flags.forEach((opt) => {
    opt.depends?.forEach((flag) => {
      if (!opts.flags || !getOption(opts.flags, flag)) {
        throw new UnknownRequiredOption(flag, opts.flags ?? []);
      }
    });
    opt.conflicts?.forEach((flag) => {
      if (!opts.flags || !getOption(opts.flags, flag)) {
        throw new UnknownConflictingOption(flag, opts.flags ?? []);
      }
    });
  });
  for (let argsIndex = 0; argsIndex < args.length; argsIndex++) {
    let option;
    let optionArgs;
    let current = args[argsIndex];
    let currentValue;
    if (inLiteral) {
      literal.push(current);
      continue;
    }
    if (current === "--") {
      inLiteral = true;
      continue;
    }
    const isFlag = current.length > 1 && current[0] === "-";
    const next = () => currentValue ?? args[argsIndex + 1];
    if (isFlag) {
      let parseNext = function(option2, optionArgs2) {
        const arg = optionArgs2[optionArgsIndex];
        if (!arg) {
          const flag = next();
          throw new UnknownOption(flag, opts.flags ?? []);
        }
        if (!arg.type) {
          arg.type = OptionType.BOOLEAN;
        }
        if (option2.args?.length) {
          if ((typeof arg.optionalValue === "undefined" || arg.optionalValue === false) && typeof arg.requiredValue === "undefined") {
            arg.requiredValue = true;
          }
        } else {
          if (arg.type !== OptionType.BOOLEAN && (typeof arg.optionalValue === "undefined" || arg.optionalValue === false) && typeof arg.requiredValue === "undefined") {
            arg.requiredValue = true;
          }
        }
        if (arg.requiredValue) {
          if (inOptionalArg) {
            throw new RequiredArgumentFollowsOptionalArgument(option2.name);
          }
        } else {
          inOptionalArg = true;
        }
        if (negate) {
          flags[propName] = false;
          return;
        }
        let result2;
        let increase = false;
        if (arg.list && hasNext(arg)) {
          const parsed = next().split(arg.separator || ",").map((nextValue) => {
            const value = parseValue(option2, arg, nextValue);
            if (typeof value === "undefined") {
              throw new InvalidOptionValue(option2.name, arg.type ?? "?", nextValue);
            }
            return value;
          });
          if (parsed?.length) {
            result2 = parsed;
          }
        } else {
          if (hasNext(arg)) {
            result2 = parseValue(option2, arg, next());
          } else if (arg.optionalValue && arg.type === OptionType.BOOLEAN) {
            result2 = true;
          }
        }
        if (increase && typeof currentValue === "undefined") {
          argsIndex++;
          if (!arg.variadic) {
            optionArgsIndex++;
          } else if (optionArgs2[optionArgsIndex + 1]) {
            throw new ArgumentFollowsVariadicArgument(next());
          }
        }
        if (typeof result2 !== "undefined" && (optionArgs2.length > 1 || arg.variadic)) {
          if (!flags[propName]) {
            flags[propName] = [];
          }
          flags[propName].push(result2);
          if (hasNext(arg)) {
            parseNext(option2, optionArgs2);
          }
        } else {
          flags[propName] = result2;
        }
        function hasNext(arg2) {
          const nextValue = currentValue ?? args[argsIndex + 1];
          if (!currentValue && !nextValue) {
            return false;
          }
          if (arg2.requiredValue) {
            return true;
          }
          if (arg2.optionalValue || arg2.variadic) {
            return nextValue[0] !== "-" || arg2.type === OptionType.NUMBER && !isNaN(Number(nextValue));
          }
          return false;
        }
        function parseValue(option3, arg2, value) {
          const type = arg2.type || OptionType.STRING;
          const result3 = opts.parse ? opts.parse({
            label: "Option",
            type,
            name: `--${option3.name}`,
            value
          }) : parseFlagValue(option3, arg2, value);
          if (typeof result3 !== "undefined") {
            increase = true;
          }
          return result3;
        }
      };
      const isShort = current[1] !== "-";
      const isLong = isShort ? false : current.length > 3 && current[2] !== "-";
      if (!isShort && !isLong) {
        throw new InvalidOption(current, opts.flags);
      }
      const equalSignIndex = current.indexOf("=");
      if (equalSignIndex > -1) {
        currentValue = current.slice(equalSignIndex + 1) || void 0;
        current = current.slice(0, equalSignIndex);
      }
      if (isShort && current.length > 2 && current[2] !== ".") {
        args.splice(argsIndex, 1, ...splitFlags(current));
        current = args[argsIndex];
      } else if (isLong && current.startsWith("--no-")) {
        negate = true;
      }
      option = getOption(opts.flags, current);
      if (!option) {
        if (opts.flags.length) {
          throw new UnknownOption(current, opts.flags);
        }
        option = {
          name: current.replace(/^-+/, ""),
          optionalValue: true,
          type: OptionType.STRING
        };
      }
      const positiveName = negate ? option.name.replace(/^no-?/, "") : option.name;
      const propName = paramCaseToCamelCase(positiveName);
      if (typeof flags[propName] !== "undefined") {
        if (!opts.flags.length) {
          option.collect = true;
        } else if (!option.collect) {
          throw new DuplicateOption(current);
        }
      }
      optionArgs = option.args?.length ? option.args : [{
        type: option.type,
        requiredValue: option.requiredValue,
        optionalValue: option.optionalValue,
        variadic: option.variadic,
        list: option.list,
        separator: option.separator
      }];
      let optionArgsIndex = 0;
      let inOptionalArg = false;
      const previous = flags[propName];
      parseNext(option, optionArgs);
      if (typeof flags[propName] === "undefined") {
        if (optionArgs[optionArgsIndex].requiredValue) {
          throw new MissingOptionValue(option.name);
        } else if (typeof option.default !== "undefined") {
          flags[propName] = getDefaultValue(option);
        } else {
          flags[propName] = true;
        }
      }
      if (option.value) {
        flags[propName] = option.value(flags[propName], previous);
      } else if (option.collect) {
        const value = typeof previous !== "undefined" ? Array.isArray(previous) ? previous : [previous] : [];
        value.push(flags[propName]);
        flags[propName] = value;
      }
      optionNames[propName] = option.name;
      opts.option?.(option, flags[propName]);
    } else {
      if (opts.stopEarly) {
        stopEarly = current;
        break;
      }
      unknown.push(current);
    }
  }
  if (stopEarly) {
    const stopEarlyArgIndex = args.indexOf(stopEarly);
    if (stopEarlyArgIndex !== -1) {
      const doubleDashIndex = args.indexOf("--");
      unknown = args.slice(stopEarlyArgIndex, doubleDashIndex === -1 ? void 0 : doubleDashIndex);
      if (doubleDashIndex !== -1) {
        literal = args.slice(doubleDashIndex + 1);
      }
    }
  }
  if (opts.flags?.length) {
    validateFlags(opts.flags, flags, opts.knownFlaks, opts.allowEmpty, optionNames);
  }
  const result = Object.keys(flags).reduce((result2, key) => {
    if (~key.indexOf(".")) {
      key.split(".").reduce((result3, subKey, index, parts) => {
        if (index === parts.length - 1) {
          result3[subKey] = flags[key];
        } else {
          result3[subKey] = result3[subKey] ?? {};
        }
        return result3[subKey];
      }, result2);
    } else {
      result2[key] = flags[key];
    }
    return result2;
  }, {});
  return { flags: result, unknown, literal };
}
function splitFlags(flag) {
  const normalized = [];
  const flags = flag.slice(1).split("");
  if (isNaN(Number(flag[flag.length - 1]))) {
    flags.forEach((val) => normalized.push(`-${val}`));
  } else {
    normalized.push(`-${flags.shift()}`);
    if (flags.length) {
      normalized.push(flags.join(""));
    }
  }
  return normalized;
}
function parseFlagValue(option, arg, value) {
  const type = arg.type || OptionType.STRING;
  const parseType = Types[type];
  if (!parseType) {
    throw new UnknownType(type, Object.keys(Types));
  }
  return parseType({
    label: "Option",
    type,
    name: `--${option.name}`,
    value
  });
}

// cli/dist/esm/deps/deno_land/std_0.113.0/fmt/colors.js
var { Deno: Deno3 } = dntGlobalThis;
var noColor = typeof Deno3?.noColor === "boolean" ? Deno3.noColor : true;
var enabled = !noColor;
function setColorEnabled(value) {
  if (noColor) {
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
function bold(str) {
  return run(str, code([1], 22));
}
function dim(str) {
  return run(str, code([2], 22));
}
function italic(str) {
  return run(str, code([3], 23));
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
var ANSI_PATTERN = new RegExp([
  "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
  "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
].join("|"), "g");
function stripColor(string2) {
  return string2.replace(ANSI_PATTERN, "");
}

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/type.js
var Type = class {
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/types/boolean.js
var BooleanType = class extends Type {
  parse(type) {
    return boolean(type);
  }
  complete() {
    return ["true", "false"];
  }
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/types/number.js
var NumberType = class extends Type {
  parse(type) {
    return number(type);
  }
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/types/string.js
var StringType = class extends Type {
  parse(type) {
    return string(type);
  }
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/table/border.js
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

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/table/cell.js
var Cell = class {
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
  get length() {
    return this.toString().length;
  }
  static from(value) {
    const cell = new this(value);
    if (value instanceof Cell) {
      cell.options = { ...value.options };
    }
    return cell;
  }
  toString() {
    return this.value.toString();
  }
  setValue(value) {
    this.value = value;
    return this;
  }
  clone(value) {
    const cell = new Cell(value ?? this);
    cell.options = { ...this.options };
    return cell;
  }
  border(enable, override = true) {
    if (override || typeof this.options.border === "undefined") {
      this.options.border = enable;
    }
    return this;
  }
  colSpan(span, override = true) {
    if (override || typeof this.options.colSpan === "undefined") {
      this.options.colSpan = span;
    }
    return this;
  }
  rowSpan(span, override = true) {
    if (override || typeof this.options.rowSpan === "undefined") {
      this.options.rowSpan = span;
    }
    return this;
  }
  align(direction, override = true) {
    if (override || typeof this.options.align === "undefined") {
      this.options.align = direction;
    }
    return this;
  }
  getBorder() {
    return this.options.border === true;
  }
  getColSpan() {
    return typeof this.options.colSpan === "number" && this.options.colSpan > 0 ? this.options.colSpan : 1;
  }
  getRowSpan() {
    return typeof this.options.rowSpan === "number" && this.options.rowSpan > 0 ? this.options.rowSpan : 1;
  }
  getAlign() {
    return this.options.align ?? "left";
  }
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/table/row.js
var Row = class extends Array {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "options", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  static from(cells) {
    const row = new this(...cells);
    if (cells instanceof Row) {
      row.options = { ...cells.options };
    }
    return row;
  }
  clone() {
    const row = new Row(...this.map((cell) => cell instanceof Cell ? cell.clone() : cell));
    row.options = { ...this.options };
    return row;
  }
  border(enable, override = true) {
    if (override || typeof this.options.border === "undefined") {
      this.options.border = enable;
    }
    return this;
  }
  align(direction, override = true) {
    if (override || typeof this.options.align === "undefined") {
      this.options.align = direction;
    }
    return this;
  }
  getBorder() {
    return this.options.border === true;
  }
  hasBorder() {
    return this.getBorder() || this.some((cell) => cell instanceof Cell && cell.getBorder());
  }
  getAlign() {
    return this.options.align ?? "left";
  }
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/table/utils.js
function consumeWords(length, content) {
  let consumed = "";
  const words = content.split(/ /g);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    const hasLineBreak = word.indexOf("\n") !== -1;
    if (hasLineBreak) {
      word = word.split("\n").shift();
    }
    if (consumed) {
      const nextLength = stripColor(word).length;
      const consumedLength = stripColor(consumed).length;
      if (consumedLength + nextLength >= length) {
        break;
      }
    }
    consumed += (i > 0 ? " " : "") + word;
    if (hasLineBreak) {
      break;
    }
  }
  return consumed;
}
function longest(index, rows, maxWidth) {
  return Math.max(...rows.map((row) => (row[index] instanceof Cell && row[index].getColSpan() > 1 ? "" : row[index]?.toString() || "").split("\n").map((r) => {
    const str = typeof maxWidth === "undefined" ? r : consumeWords(maxWidth, r);
    return stripColor(str).length || 0;
  })).flat());
}

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/table/layout.js
var TableLayout = class {
  constructor(table, options) {
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
  toString() {
    const opts = this.createLayout();
    return opts.rows.length ? this.renderRows(opts) : "";
  }
  createLayout() {
    Object.keys(this.options.chars).forEach((key) => {
      if (typeof this.options.chars[key] !== "string") {
        this.options.chars[key] = "";
      }
    });
    const hasBodyBorder = this.table.getBorder() || this.table.hasBodyBorder();
    const hasHeaderBorder = this.table.hasHeaderBorder();
    const hasBorder = hasHeaderBorder || hasBodyBorder;
    const header = this.table.getHeader();
    const rows = this.spanRows(header ? [header, ...this.table] : this.table.slice());
    const columns = Math.max(...rows.map((row) => row.length));
    for (const row of rows) {
      const length = row.length;
      if (length < columns) {
        const diff = columns - length;
        for (let i = 0; i < diff; i++) {
          row.push(this.createCell(null, row));
        }
      }
    }
    const padding = [];
    const width = [];
    for (let colIndex = 0; colIndex < columns; colIndex++) {
      const minColWidth = Array.isArray(this.options.minColWidth) ? this.options.minColWidth[colIndex] : this.options.minColWidth;
      const maxColWidth = Array.isArray(this.options.maxColWidth) ? this.options.maxColWidth[colIndex] : this.options.maxColWidth;
      const colWidth = longest(colIndex, rows, maxColWidth);
      width[colIndex] = Math.min(maxColWidth, Math.max(minColWidth, colWidth));
      padding[colIndex] = Array.isArray(this.options.padding) ? this.options.padding[colIndex] : this.options.padding;
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
  spanRows(_rows, rowIndex = 0, colIndex = 0, rowSpan = [], colSpan = 1) {
    const rows = _rows;
    if (rowIndex >= rows.length && rowSpan.every((span) => span === 1)) {
      return rows;
    } else if (rows[rowIndex] && colIndex >= rows[rowIndex].length && colIndex >= rowSpan.length && colSpan === 1) {
      return this.spanRows(rows, ++rowIndex, 0, rowSpan, 1);
    }
    if (colSpan > 1) {
      colSpan--;
      rowSpan[colIndex] = rowSpan[colIndex - 1];
      rows[rowIndex].splice(colIndex - 1, 0, rows[rowIndex][colIndex - 1]);
      return this.spanRows(rows, rowIndex, ++colIndex, rowSpan, colSpan);
    }
    if (colIndex === 0) {
      rows[rowIndex] = this.createRow(rows[rowIndex] || []);
    }
    if (rowSpan[colIndex] > 1) {
      rowSpan[colIndex]--;
      rows[rowIndex].splice(colIndex, 0, rows[rowIndex - 1][colIndex]);
      return this.spanRows(rows, rowIndex, ++colIndex, rowSpan, colSpan);
    }
    rows[rowIndex][colIndex] = this.createCell(rows[rowIndex][colIndex] || null, rows[rowIndex]);
    colSpan = rows[rowIndex][colIndex].getColSpan();
    rowSpan[colIndex] = rows[rowIndex][colIndex].getRowSpan();
    return this.spanRows(rows, rowIndex, ++colIndex, rowSpan, colSpan);
  }
  createRow(row) {
    return Row.from(row).border(this.table.getBorder(), false).align(this.table.getAlign(), false);
  }
  createCell(cell, row) {
    return Cell.from(cell ?? "").border(row.getBorder(), false).align(row.getAlign(), false);
  }
  renderRows(opts) {
    let result = "";
    const rowSpan = new Array(opts.columns).fill(1);
    for (let rowIndex = 0; rowIndex < opts.rows.length; rowIndex++) {
      result += this.renderRow(rowSpan, rowIndex, opts);
    }
    return result.slice(0, -1);
  }
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
    if (rowIndex === 0 && opts.hasHeaderBorder || rowIndex < opts.rows.length - 1 && opts.hasBodyBorder) {
      result += this.renderBorderRow(row, nextRow, rowSpan, opts);
    }
    if (rowIndex === opts.rows.length - 1 && row.hasBorder()) {
      result += this.renderBorderRow(row, void 0, rowSpan, opts);
    }
    return result;
  }
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
  renderCellValue(cell, maxLength) {
    const length = Math.min(maxLength, stripColor(cell.toString()).length);
    let words = consumeWords(length, cell.toString());
    const breakWord = stripColor(words).length > length;
    if (breakWord) {
      words = words.slice(0, length);
    }
    const next = cell.toString().slice(words.length + (breakWord ? 0 : 1));
    const fillLength = maxLength - stripColor(words).length;
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
    return {
      current,
      next: cell.clone(next)
    };
  }
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

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/table/table.js
var Table = class extends Array {
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
        chars: { ...Table._chars }
      }
    });
    Object.defineProperty(this, "headerRow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  static from(rows) {
    const table = new this(...rows);
    if (rows instanceof Table) {
      table.options = { ...rows.options };
      table.headerRow = rows.headerRow ? Row.from(rows.headerRow) : void 0;
    }
    return table;
  }
  static fromJson(rows) {
    return new this().fromJson(rows);
  }
  static chars(chars) {
    Object.assign(this._chars, chars);
    return this;
  }
  static render(rows) {
    Table.from(rows).render();
  }
  fromJson(rows) {
    this.header(Object.keys(rows[0]));
    this.body(rows.map((row) => Object.values(row)));
    return this;
  }
  header(header) {
    this.headerRow = header instanceof Row ? header : Row.from(header);
    return this;
  }
  body(rows) {
    this.length = 0;
    this.push(...rows);
    return this;
  }
  clone() {
    const table = new Table(...this.map((row) => row instanceof Row ? row.clone() : Row.from(row).clone()));
    table.options = { ...this.options };
    table.headerRow = this.headerRow?.clone();
    return table;
  }
  toString() {
    return new TableLayout(this, this.options).toString();
  }
  render() {
    console.log(this.toString());
    return this;
  }
  maxColWidth(width, override = true) {
    if (override || typeof this.options.maxColWidth === "undefined") {
      this.options.maxColWidth = width;
    }
    return this;
  }
  minColWidth(width, override = true) {
    if (override || typeof this.options.minColWidth === "undefined") {
      this.options.minColWidth = width;
    }
    return this;
  }
  indent(width, override = true) {
    if (override || typeof this.options.indent === "undefined") {
      this.options.indent = width;
    }
    return this;
  }
  padding(padding, override = true) {
    if (override || typeof this.options.padding === "undefined") {
      this.options.padding = padding;
    }
    return this;
  }
  border(enable, override = true) {
    if (override || typeof this.options.border === "undefined") {
      this.options.border = enable;
    }
    return this;
  }
  align(direction, override = true) {
    if (override || typeof this.options.align === "undefined") {
      this.options.align = direction;
    }
    return this;
  }
  chars(chars) {
    Object.assign(this.options.chars, chars);
    return this;
  }
  getHeader() {
    return this.headerRow;
  }
  getBody() {
    return [...this];
  }
  getMaxColWidth() {
    return this.options.maxColWidth;
  }
  getMinColWidth() {
    return this.options.minColWidth;
  }
  getIndent() {
    return this.options.indent;
  }
  getPadding() {
    return this.options.padding;
  }
  getBorder() {
    return this.options.border === true;
  }
  hasHeaderBorder() {
    const hasBorder = this.headerRow?.hasBorder();
    return hasBorder === true || this.getBorder() && hasBorder !== false;
  }
  hasBodyBorder() {
    return this.getBorder() || this.some((row) => row instanceof Row ? row.hasBorder() : row.some((cell) => cell instanceof Cell ? cell.getBorder : false));
  }
  hasBorder() {
    return this.hasHeaderBorder() || this.hasBodyBorder();
  }
  getAlign() {
    return this.options.align ?? "left";
  }
};
Object.defineProperty(Table, "_chars", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: { ...border }
});

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/help/_help_generator.js
var HelpGenerator = class {
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
  static generate(cmd, options) {
    return new HelpGenerator(cmd, options).generate();
  }
  generate() {
    const areColorsEnabled = getColorEnabled();
    setColorEnabled(this.options.colors);
    const result = this.generateHeader() + this.generateDescription() + this.generateOptions() + this.generateCommands() + this.generateEnvironmentVariables() + this.generateExamples();
    setColorEnabled(areColorsEnabled);
    return result;
  }
  generateHeader() {
    const usage = this.cmd.getUsage();
    const rows = [
      [
        bold("Usage:"),
        magenta(this.cmd.getPath() + (usage ? " " + highlightArguments(usage, this.options.types) : ""))
      ]
    ];
    const version = this.cmd.getVersion();
    if (version) {
      rows.push([bold("Version:"), yellow(`${this.cmd.getVersion()}`)]);
    }
    return "\n" + Table.from(rows).indent(this.indent).padding(1).toString() + "\n";
  }
  generateDescription() {
    if (!this.cmd.getDescription()) {
      return "";
    }
    return this.label("Description") + Table.from([
      [this.cmd.getDescription()]
    ]).indent(this.indent * 2).maxColWidth(140).padding(1).toString() + "\n";
  }
  generateOptions() {
    const options = this.cmd.getOptions(false);
    if (!options.length) {
      return "";
    }
    const hasTypeDefinitions = !!options.find((option) => !!option.typeDefinition);
    if (hasTypeDefinitions) {
      return this.label("Options") + Table.from([
        ...options.map((option) => [
          option.flags.map((flag) => blue(flag)).join(", "),
          highlightArguments(option.typeDefinition || "", this.options.types),
          red(bold("-")),
          this.options.long ? option.description : option.description.split("\n", 1)[0],
          this.generateHints(option)
        ])
      ]).padding([2, 2, 1, 2]).indent(this.indent * 2).maxColWidth([60, 60, 1, 80, 60]).toString() + "\n";
    }
    return this.label("Options") + Table.from([
      ...options.map((option) => [
        option.flags.map((flag) => blue(flag)).join(", "),
        red(bold("-")),
        this.options.long ? option.description : option.description.split("\n", 1)[0],
        this.generateHints(option)
      ])
    ]).indent(this.indent * 2).maxColWidth([60, 1, 80, 60]).padding([2, 1, 2]).toString() + "\n";
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
          [command.getName(), ...command.getAliases()].map((name) => blue(name)).join(", "),
          highlightArguments(command.getArgsDefinition() || "", this.options.types),
          red(bold("-")),
          command.getShortDescription()
        ])
      ]).indent(this.indent * 2).maxColWidth([60, 60, 1, 80]).padding([2, 2, 1, 2]).toString() + "\n";
    }
    return this.label("Commands") + Table.from([
      ...commands.map((command) => [
        [command.getName(), ...command.getAliases()].map((name) => blue(name)).join(", "),
        red(bold("-")),
        command.getShortDescription()
      ])
    ]).maxColWidth([60, 1, 80]).padding([2, 1, 2]).indent(this.indent * 2).toString() + "\n";
  }
  generateEnvironmentVariables() {
    const envVars = this.cmd.getEnvVars(false);
    if (!envVars.length) {
      return "";
    }
    return this.label("Environment variables") + Table.from([
      ...envVars.map((envVar) => [
        envVar.names.map((name) => blue(name)).join(", "),
        highlightArgumentDetails(envVar.details, this.options.types),
        red(bold("-")),
        this.options.long ? envVar.description : envVar.description.split("\n", 1)[0]
      ])
    ]).padding([2, 2, 1]).indent(this.indent * 2).maxColWidth([60, 60, 1, 80]).toString() + "\n";
  }
  generateExamples() {
    const examples = this.cmd.getExamples();
    if (!examples.length) {
      return "";
    }
    return this.label("Examples") + Table.from(examples.map((example) => [
      dim(bold(`${capitalize(example.name)}:`)),
      example.description
    ])).padding(1).indent(this.indent * 2).maxColWidth(150).toString() + "\n";
  }
  generateHints(option) {
    if (!this.options.hints) {
      return "";
    }
    const hints = [];
    option.required && hints.push(yellow(`required`));
    typeof option.default !== "undefined" && hints.push(bold(`Default: `) + inspect(option.default, this.options.colors));
    option.depends?.length && hints.push(yellow(bold(`Depends: `)) + italic(option.depends.map(getFlag).join(", ")));
    option.conflicts?.length && hints.push(red(bold(`Conflicts: `)) + italic(option.conflicts.map(getFlag).join(", ")));
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
    return "\n" + " ".repeat(this.indent) + bold(`${label}:`) + "\n\n";
  }
};
function capitalize(string2) {
  return string2?.charAt(0).toUpperCase() + string2.slice(1);
}
function inspect(value, colors) {
  return import_shim_deno2.Deno.inspect(value, { depth: 1, colors, trailingComma: false });
}
function highlightArguments(argsDefinition, types = true) {
  if (!argsDefinition) {
    return "";
  }
  return parseArgumentsDefinition(argsDefinition, false, true).map((arg) => typeof arg === "string" ? arg : highlightArgumentDetails(arg, types)).join(" ");
}
function highlightArgumentDetails(arg, types = true) {
  let str = "";
  str += yellow(arg.optionalValue ? "[" : "<");
  let name = "";
  name += arg.name;
  if (arg.variadic) {
    name += "...";
  }
  name = magenta(name);
  str += name;
  if (types) {
    str += yellow(":");
    str += red(arg.type);
    if (arg.list) {
      str += green("[]");
    }
  }
  str += yellow(arg.optionalValue ? "]" : ">");
  return str;
}

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/types/integer.js
var IntegerType = class extends Type {
  parse(type) {
    return integer(type);
  }
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/command.js
var Command = class {
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
    Object.defineProperty(this, "fn", {
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
    Object.defineProperty(this, "isExecutable", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
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
      value: true
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
  }
  versionOption(flags, desc, opts) {
    this._versionOption = flags === false ? flags : {
      flags,
      desc,
      opts: typeof opts === "function" ? { action: opts } : opts
    };
    return this;
  }
  helpOption(flags, desc, opts) {
    this._helpOption = flags === false ? flags : {
      flags,
      desc,
      opts: typeof opts === "function" ? { action: opts } : opts
    };
    return this;
  }
  command(nameAndArguments, cmdOrDescription, override) {
    const result = splitArguments(nameAndArguments);
    const name = result.flags.shift();
    const aliases = result.flags;
    if (!name) {
      throw new MissingCommandName();
    }
    if (this.getBaseCommand(name, true)) {
      if (!override) {
        throw new DuplicateCommandName(name);
      }
      this.removeCommand(name);
    }
    let description;
    let cmd;
    if (typeof cmdOrDescription === "string") {
      description = cmdOrDescription;
    }
    if (cmdOrDescription instanceof Command) {
      cmd = cmdOrDescription.reset();
    } else {
      cmd = new Command();
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
  alias(alias) {
    if (this.cmd._name === alias || this.cmd.aliases.includes(alias)) {
      throw new DuplicateCommandAlias(alias);
    }
    this.cmd.aliases.push(alias);
    return this;
  }
  reset() {
    this.cmd = this;
    return this;
  }
  select(name) {
    const cmd = this.getBaseCommand(name, true);
    if (!cmd) {
      throw new CommandNotFound(name, this.getBaseCommands(true));
    }
    this.cmd = cmd;
    return this;
  }
  name(name) {
    this.cmd._name = name;
    return this;
  }
  version(version) {
    if (typeof version === "string") {
      this.cmd.ver = () => version;
    } else if (typeof version === "function") {
      this.cmd.ver = version;
    }
    return this;
  }
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
  description(description) {
    this.cmd.desc = description;
    return this;
  }
  usage(usage) {
    this.cmd._usage = usage;
    return this;
  }
  hidden() {
    this.cmd.isHidden = true;
    return this;
  }
  global() {
    this.cmd.isGlobal = true;
    return this;
  }
  executable() {
    this.cmd.isExecutable = true;
    return this;
  }
  arguments(args) {
    this.cmd.argsDefinition = args;
    return this;
  }
  action(fn) {
    this.cmd.fn = fn;
    return this;
  }
  allowEmpty(allowEmpty = true) {
    this.cmd._allowEmpty = allowEmpty;
    return this;
  }
  stopEarly(stopEarly = true) {
    this.cmd._stopEarly = stopEarly;
    return this;
  }
  useRawArgs(useRawArgs = true) {
    this.cmd._useRawArgs = useRawArgs;
    return this;
  }
  default(name) {
    this.cmd.defaultCommand = name;
    return this;
  }
  globalType(name, type, options) {
    return this.type(name, type, { ...options, global: true });
  }
  type(name, handler, options) {
    if (this.cmd.types.get(name) && !options?.override) {
      throw new DuplicateType(name);
    }
    this.cmd.types.set(name, { ...options, name, handler });
    if (handler instanceof Type && (typeof handler.complete !== "undefined" || typeof handler.values !== "undefined")) {
      const completeHandler = (cmd, parent) => handler.complete?.(cmd, parent) || [];
      this.complete(name, completeHandler, options);
    }
    return this;
  }
  globalComplete(name, complete, options) {
    return this.complete(name, complete, { ...options, global: true });
  }
  complete(name, complete, options) {
    if (this.cmd.completions.has(name) && !options?.override) {
      throw new DuplicateCompletion(name);
    }
    this.cmd.completions.set(name, {
      name,
      complete,
      ...options
    });
    return this;
  }
  throwErrors() {
    this.cmd.throwOnError = true;
    return this;
  }
  noExit() {
    this.cmd._shouldExit = false;
    this.throwErrors();
    return this;
  }
  shouldThrowErrors() {
    return this.cmd.throwOnError || !!this.cmd._parent?.shouldThrowErrors();
  }
  shouldExit() {
    return this.cmd._shouldExit ?? this.cmd._parent?.shouldExit() ?? true;
  }
  globalOption(flags, desc, opts) {
    if (typeof opts === "function") {
      return this.option(flags, desc, { value: opts, global: true });
    }
    return this.option(flags, desc, { ...opts, global: true });
  }
  option(flags, desc, opts) {
    if (typeof opts === "function") {
      return this.option(flags, desc, { value: opts });
    }
    const result = splitArguments(flags);
    const args = result.typeDefinition ? parseArgumentsDefinition(result.typeDefinition) : [];
    const option = {
      ...opts,
      name: "",
      description: desc,
      args,
      flags: result.flags,
      typeDefinition: result.typeDefinition
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
          throw new DuplicateOptionName(name);
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
  example(name, description) {
    if (this.cmd.hasExample(name)) {
      throw new DuplicateExample(name);
    }
    this.cmd.examples.push({ name, description });
    return this;
  }
  globalEnv(name, description, options) {
    return this.env(name, description, { ...options, global: true });
  }
  env(name, description, options) {
    const result = splitArguments(name);
    if (!result.typeDefinition) {
      result.typeDefinition = "<value:boolean>";
    }
    if (result.flags.some((envName) => this.cmd.getBaseEnvVar(envName, true))) {
      throw new DuplicateEnvironmentVariable(name);
    }
    const details = parseArgumentsDefinition(result.typeDefinition);
    if (details.length > 1) {
      throw new EnvironmentVariableSingleValue(name);
    } else if (details.length && details[0].optionalValue) {
      throw new EnvironmentVariableOptionalValue(name);
    } else if (details.length && details[0].variadic) {
      throw new EnvironmentVariableVariadicValue(name);
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
  async parse(args = import_shim_deno2.Deno.args) {
    try {
      this.reset();
      this.registerDefaults();
      this.rawArgs = args;
      if (args.length > 0) {
        const subCommand = this.getCommand(args[0], true);
        if (subCommand) {
          subCommand._globalParent = this;
          return subCommand.parse(this.rawArgs.slice(1));
        }
      }
      if (this.isExecutable) {
        await this.executeExecutable(this.rawArgs);
        return {
          options: {},
          args: [],
          cmd: this,
          literal: []
        };
      } else if (this._useRawArgs) {
        const env = await this.parseEnvVars();
        return await this.execute(env, ...this.rawArgs);
      } else {
        const { actionOption, flags, unknown, literal } = this.parseFlags(this.rawArgs);
        this.literalArgs = literal;
        const env = await this.parseEnvVars();
        const options = { ...env, ...flags };
        const params = this.parseArguments(unknown, options);
        if (actionOption) {
          await actionOption.action.call(this, options, ...params);
          if (actionOption.standalone) {
            return {
              options,
              args: params,
              cmd: this,
              literal: this.literalArgs
            };
          }
        }
        return await this.execute(options, ...params);
      }
    } catch (error) {
      if (error instanceof Error) {
        throw this.error(error);
      } else {
        throw this.error(new Error(`[non-error-thrown] ${error}`));
      }
    }
  }
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
    if (!this._help) {
      this.help({
        hints: true,
        types: false
      });
    }
    if (this._versionOption !== false && (this._versionOption || this.ver)) {
      this.option(this._versionOption?.flags || "-V, --version", this._versionOption?.desc || "Show the version number for this program.", {
        standalone: true,
        prepend: true,
        action: function() {
          this.showVersion();
          this.exit();
        },
        ...this._versionOption?.opts ?? {}
      });
    }
    if (this._helpOption !== false) {
      this.option(this._helpOption?.flags || "-h, --help", this._helpOption?.desc || "Show this help.", {
        standalone: true,
        global: true,
        prepend: true,
        action: function() {
          this.showHelp({
            long: this.getRawArgs().includes(`--${helpOption.name}`)
          });
          this.exit();
        },
        ...this._helpOption?.opts ?? {}
      });
      const helpOption = this.options[0];
    }
    return this;
  }
  async execute(options, ...args) {
    if (this.fn) {
      await this.fn(options, ...args);
    } else if (this.defaultCommand) {
      const cmd = this.getCommand(this.defaultCommand, true);
      if (!cmd) {
        throw new DefaultCommandNotFound(this.defaultCommand, this.getCommands());
      }
      cmd._globalParent = this;
      await cmd.execute(options, ...args);
    }
    return { options, args, cmd: this, literal: this.literalArgs };
  }
  async executeExecutable(args) {
    const command = this.getPath().replace(/\s+/g, "-");
    await import_shim_deno2.Deno.permissions.request({ name: "run", command });
    try {
      const process2 = import_shim_deno2.Deno.run({
        cmd: [command, ...args]
      });
      const status = await process2.status();
      if (!status.success) {
        import_shim_deno2.Deno.exit(status.code);
      }
    } catch (error) {
      if (error instanceof import_shim_deno2.Deno.errors.NotFound) {
        throw new CommandExecutableNotFound(command);
      }
      throw error;
    }
  }
  parseFlags(args) {
    try {
      let actionOption;
      const result = parseFlags(args, {
        stopEarly: this._stopEarly,
        allowEmpty: this._allowEmpty,
        flags: this.getOptions(true),
        parse: (type) => this.parseType(type),
        option: (option) => {
          if (!actionOption && option.action) {
            actionOption = option;
          }
        }
      });
      return { ...result, actionOption };
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new ValidationError2(error.message);
      }
      throw error;
    }
  }
  parseType(type) {
    const typeSettings = this.getType(type.type);
    if (!typeSettings) {
      throw new UnknownType(type.type, this.getTypes().map((type2) => type2.name));
    }
    return typeSettings.handler instanceof Type ? typeSettings.handler.parse(type) : typeSettings.handler(type);
  }
  async parseEnvVars() {
    const envVars = this.getEnvVars(true);
    const result = {};
    if (!envVars.length) {
      return result;
    }
    const hasEnvPermissions = (await import_shim_deno2.Deno.permissions.query({
      name: "env"
    })).state === "granted";
    for (const env of envVars) {
      const name = hasEnvPermissions && env.names.find((name2) => !!import_shim_deno2.Deno.env.get(name2));
      if (name) {
        const propertyName = underscoreToCamelCase(env.prefix ? env.names[0].replace(new RegExp(`^${env.prefix}`), "") : env.names[0]);
        result[propertyName] = this.parseType({
          label: "Environment variable",
          type: env.type,
          name,
          value: import_shim_deno2.Deno.env.get(name) ?? ""
        });
        if (env.value && typeof result[propertyName] !== "undefined") {
          result[propertyName] = env.value(result[propertyName]);
        }
      } else if (env.required) {
        throw new MissingRequiredEnvVar(env);
      }
    }
    return result;
  }
  parseArguments(args, flags) {
    const params = [];
    args = args.slice(0);
    if (!this.hasArguments()) {
      if (args.length) {
        if (this.hasCommands(true)) {
          throw new UnknownCommand(args[0], this.getCommands());
        } else {
          throw new NoArgumentsAllowed(this.getPath());
        }
      }
    } else {
      if (!args.length) {
        const required = this.getArguments().filter((expectedArg) => !expectedArg.optionalValue).map((expectedArg) => expectedArg.name);
        if (required.length) {
          const flagNames = Object.keys(flags);
          const hasStandaloneOption = !!flagNames.find((name) => this.getOption(name, true)?.standalone);
          if (!hasStandaloneOption) {
            throw new MissingArguments(required);
          }
        }
      } else {
        for (const expectedArg of this.getArguments()) {
          if (!args.length) {
            if (expectedArg.optionalValue) {
              break;
            }
            throw new MissingArgument(`Missing argument: ${expectedArg.name}`);
          }
          let arg;
          if (expectedArg.variadic) {
            arg = args.splice(0, args.length).map((value) => this.parseType({
              label: "Argument",
              type: expectedArg.type,
              name: expectedArg.name,
              value
            }));
          } else {
            arg = this.parseType({
              label: "Argument",
              type: expectedArg.type,
              name: expectedArg.name,
              value: args.shift()
            });
          }
          if (arg) {
            params.push(arg);
          }
        }
        if (args.length) {
          throw new TooManyArguments(args);
        }
      }
    }
    return params;
  }
  error(error) {
    if (this.shouldThrowErrors() || !(error instanceof ValidationError2)) {
      return error;
    }
    this.showHelp();
    console.error(red(`  ${bold("error")}: ${error.message}
`));
    import_shim_deno2.Deno.exit(error instanceof ValidationError2 ? error.exitCode : 1);
  }
  getName() {
    return this._name;
  }
  getParent() {
    return this._parent;
  }
  getGlobalParent() {
    return this._globalParent;
  }
  getMainCommand() {
    return this._parent?.getMainCommand() ?? this;
  }
  getAliases() {
    return this.aliases;
  }
  getPath() {
    return this._parent ? this._parent.getPath() + " " + this._name : this._name;
  }
  getArgsDefinition() {
    return this.argsDefinition;
  }
  getArgument(name) {
    return this.getArguments().find((arg) => arg.name === name);
  }
  getArguments() {
    if (!this.args.length && this.argsDefinition) {
      this.args = parseArgumentsDefinition(this.argsDefinition);
    }
    return this.args;
  }
  hasArguments() {
    return !!this.argsDefinition;
  }
  getVersion() {
    return this.getVersionHandler()?.call(this, this);
  }
  getVersionHandler() {
    return this.ver ?? this._parent?.getVersionHandler();
  }
  getDescription() {
    return typeof this.desc === "function" ? this.desc = this.desc() : this.desc;
  }
  getUsage() {
    return this._usage ?? this.getArgsDefinition();
  }
  getShortDescription() {
    return this.getDescription().trim().split("\n", 1)[0];
  }
  getRawArgs() {
    return this.rawArgs;
  }
  getLiteralArgs() {
    return this.literalArgs;
  }
  showVersion() {
    console.log(this.getVersion());
  }
  showHelp(options) {
    console.log(this.getHelp(options));
  }
  getHelp(options) {
    this.registerDefaults();
    return this.getHelpHandler().call(this, this, options ?? {});
  }
  getHelpHandler() {
    return this._help ?? this._parent?.getHelpHandler();
  }
  exit(code2 = 0) {
    if (this.shouldExit()) {
      import_shim_deno2.Deno.exit(code2);
    }
  }
  hasOptions(hidden) {
    return this.getOptions(hidden).length > 0;
  }
  getOptions(hidden) {
    return this.getGlobalOptions(hidden).concat(this.getBaseOptions(hidden));
  }
  getBaseOptions(hidden) {
    if (!this.options.length) {
      return [];
    }
    return hidden ? this.options.slice(0) : this.options.filter((opt) => !opt.hidden);
  }
  getGlobalOptions(hidden) {
    const getOptions = (cmd, options = [], names = []) => {
      if (cmd) {
        if (cmd.options.length) {
          cmd.options.forEach((option) => {
            if (option.global && !this.options.find((opt) => opt.name === option.name) && names.indexOf(option.name) === -1 && (hidden || !option.hidden)) {
              names.push(option.name);
              options.push(option);
            }
          });
        }
        return getOptions(cmd._parent, options, names);
      }
      return options;
    };
    return getOptions(this._parent);
  }
  hasOption(name, hidden) {
    return !!this.getOption(name, hidden);
  }
  getOption(name, hidden) {
    return this.getBaseOption(name, hidden) ?? this.getGlobalOption(name, hidden);
  }
  getBaseOption(name, hidden) {
    const option = this.options.find((option2) => option2.name === name);
    return option && (hidden || !option.hidden) ? option : void 0;
  }
  getGlobalOption(name, hidden) {
    if (!this._parent) {
      return;
    }
    const option = this._parent.getBaseOption(name, hidden);
    if (!option || !option.global) {
      return this._parent.getGlobalOption(name, hidden);
    }
    return option;
  }
  removeOption(name) {
    const index = this.options.findIndex((option) => option.name === name);
    if (index === -1) {
      return;
    }
    return this.options.splice(index, 1)[0];
  }
  hasCommands(hidden) {
    return this.getCommands(hidden).length > 0;
  }
  getCommands(hidden) {
    return this.getGlobalCommands(hidden).concat(this.getBaseCommands(hidden));
  }
  getBaseCommands(hidden) {
    const commands = Array.from(this.commands.values());
    return hidden ? commands : commands.filter((cmd) => !cmd.isHidden);
  }
  getGlobalCommands(hidden) {
    const getCommands = (cmd, commands = [], names = []) => {
      if (cmd) {
        if (cmd.commands.size) {
          cmd.commands.forEach((cmd2) => {
            if (cmd2.isGlobal && this !== cmd2 && !this.commands.has(cmd2._name) && names.indexOf(cmd2._name) === -1 && (hidden || !cmd2.isHidden)) {
              names.push(cmd2._name);
              commands.push(cmd2);
            }
          });
        }
        return getCommands(cmd._parent, commands, names);
      }
      return commands;
    };
    return getCommands(this._parent);
  }
  hasCommand(name, hidden) {
    return !!this.getCommand(name, hidden);
  }
  getCommand(name, hidden) {
    return this.getBaseCommand(name, hidden) ?? this.getGlobalCommand(name, hidden);
  }
  getBaseCommand(name, hidden) {
    for (const cmd of this.commands.values()) {
      if (cmd._name === name || cmd.aliases.includes(name)) {
        return cmd && (hidden || !cmd.isHidden) ? cmd : void 0;
      }
    }
  }
  getGlobalCommand(name, hidden) {
    if (!this._parent) {
      return;
    }
    const cmd = this._parent.getBaseCommand(name, hidden);
    if (!cmd?.isGlobal) {
      return this._parent.getGlobalCommand(name, hidden);
    }
    return cmd;
  }
  removeCommand(name) {
    const command = this.getBaseCommand(name, true);
    if (command) {
      this.commands.delete(command._name);
    }
    return command;
  }
  getTypes() {
    return this.getGlobalTypes().concat(this.getBaseTypes());
  }
  getBaseTypes() {
    return Array.from(this.types.values());
  }
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
  getType(name) {
    return this.getBaseType(name) ?? this.getGlobalType(name);
  }
  getBaseType(name) {
    return this.types.get(name);
  }
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
  getCompletions() {
    return this.getGlobalCompletions().concat(this.getBaseCompletions());
  }
  getBaseCompletions() {
    return Array.from(this.completions.values());
  }
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
  getCompletion(name) {
    return this.getBaseCompletion(name) ?? this.getGlobalCompletion(name);
  }
  getBaseCompletion(name) {
    return this.completions.get(name);
  }
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
  hasEnvVars(hidden) {
    return this.getEnvVars(hidden).length > 0;
  }
  getEnvVars(hidden) {
    return this.getGlobalEnvVars(hidden).concat(this.getBaseEnvVars(hidden));
  }
  getBaseEnvVars(hidden) {
    if (!this.envVars.length) {
      return [];
    }
    return hidden ? this.envVars.slice(0) : this.envVars.filter((env) => !env.hidden);
  }
  getGlobalEnvVars(hidden) {
    const getEnvVars = (cmd, envVars = [], names = []) => {
      if (cmd) {
        if (cmd.envVars.length) {
          cmd.envVars.forEach((envVar) => {
            if (envVar.global && !this.envVars.find((env) => env.names[0] === envVar.names[0]) && names.indexOf(envVar.names[0]) === -1 && (hidden || !envVar.hidden)) {
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
  hasEnvVar(name, hidden) {
    return !!this.getEnvVar(name, hidden);
  }
  getEnvVar(name, hidden) {
    return this.getBaseEnvVar(name, hidden) ?? this.getGlobalEnvVar(name, hidden);
  }
  getBaseEnvVar(name, hidden) {
    const envVar = this.envVars.find((env) => env.names.indexOf(name) !== -1);
    return envVar && (hidden || !envVar.hidden) ? envVar : void 0;
  }
  getGlobalEnvVar(name, hidden) {
    if (!this._parent) {
      return;
    }
    const envVar = this._parent.getBaseEnvVar(name, hidden);
    if (!envVar?.global) {
      return this._parent.getGlobalEnvVar(name, hidden);
    }
    return envVar;
  }
  hasExamples() {
    return this.examples.length > 0;
  }
  getExamples() {
    return this.examples;
  }
  hasExample(name) {
    return !!this.getExample(name);
  }
  getExample(name) {
    return this.examples.find((example) => example.name === name);
  }
};

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/completions/bash.js
var _BashCompletionsCommand_cmd;
_BashCompletionsCommand_cmd = /* @__PURE__ */ new WeakMap();

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/completions/fish.js
var _FishCompletionsCommand_cmd;
_FishCompletionsCommand_cmd = /* @__PURE__ */ new WeakMap();

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/completions/zsh.js
var _ZshCompletionsCommand_cmd;
_ZshCompletionsCommand_cmd = /* @__PURE__ */ new WeakMap();

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/completions/mod.js
var _CompletionsCommand_cmd;
_CompletionsCommand_cmd = /* @__PURE__ */ new WeakMap();

// cli/dist/esm/deps/deno_land/x/cliffy_v0.20.1/command/types/child_command.js
var _ChildCommandType_cmd;
_ChildCommandType_cmd = /* @__PURE__ */ new WeakMap();

// cli/dist/esm/core/gh.js
async function exec(cmd) {
  const process2 = import_shim_deno2.Deno.run({
    cmd,
    stdout: "piped",
    stderr: "piped"
  });
  const [status, stdout, stderr] = await Promise.all([
    process2.status(),
    process2.output(),
    process2.stderrOutput()
  ]);
  if (status.code === 0) {
    return new TextDecoder().decode(stdout).trim();
  } else {
    const jqIndex = cmd.indexOf("-q");
    if (0 < jqIndex) {
      await exec([...cmd.slice(0, jqIndex), ...cmd.slice(jqIndex + 2, cmd.length)]);
    }
    throw new ExecError(cmd, status.code, new TextDecoder().decode(stderr).trim());
  }
}
var ExecError = class extends Error {
  constructor(cmd, code2, stderr) {
    super(`\`${cmd.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ")}\` exit code is not zero, ExitCode: ${code2}
${stderr}`);
    Object.defineProperty(this, "cmd", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: cmd
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
async function listCommits(owner, repo, { sha, perPage, page, jq } = {}) {
  const param = new URLSearchParams();
  if (sha)
    param.set("sha", sha);
  if (perPage)
    param.set("per_page", String(perPage));
  if (page)
    param.set("page", String(page));
  const cmd = ["gh", "api", `repos/${owner}/${repo}/commits?${param}`];
  if (jq)
    cmd.push("-q", jq);
  return await exec(cmd);
}
async function listRepositoryTags(owner, repo, { perPage, page, jq } = {}) {
  const param = new URLSearchParams();
  if (perPage)
    param.set("per_page", String(perPage));
  if (page)
    param.set("page", String(page));
  const cmd = ["gh", "api", `repos/${owner}/${repo}/tags?${param}`];
  if (jq)
    cmd.push("-q", jq);
  return await exec(cmd);
}

// cli/dist/esm/core/mod.js
async function ghDescribe(owner, repo, commitish, defaultValue) {
  const [tags, sha] = await Promise.all([fetchTags(owner, repo), fetchSha(owner, repo, commitish)]);
  if (0 < tags.size) {
    let distance2 = 0;
    for await (const commit of fetchHistory(owner, repo, sha)) {
      const tag = tags.get(commit);
      if (tag) {
        const describe2 = genDescribe(tag, distance2, sha);
        return { describe: describe2, tag, distance: distance2, sha };
      } else {
        distance2++;
      }
    }
  }
  if (!defaultValue) {
    throw new Error("A tag cannot be found in the commit history.");
  }
  const totalCommit = 0;
  const describe = genDescribe(defaultValue, totalCommit, sha);
  return { describe, tag: defaultValue, distance: totalCommit, sha };
}
async function fetchTags(owner, repo) {
  const tags = [];
  const perPage = 100;
  const jq = ".[] | [.commit.sha, .name]";
  let page = 0;
  let count;
  do {
    page++;
    const stdout = await listRepositoryTags(owner, repo, { perPage, page, jq });
    count = tags.push(...stdout.split("\n").map((x) => JSON.parse(x)));
  } while (count === perPage);
  return new Map(tags);
}
async function fetchSha(owner, repo, sha) {
  const perPage = 1;
  const jq = ".[].sha";
  return await listCommits(owner, repo, { sha, perPage, jq });
}
async function* fetchHistory(owner, repo, sha) {
  const perPage = 100;
  const jq = ".[].sha";
  let page = 0;
  let count;
  do {
    page++;
    const stdout = await listCommits(owner, repo, { sha, perPage, page, jq });
    const historySpan = stdout.trim().split("\n");
    count = historySpan.length;
    for (const commitSha of historySpan) {
      yield commitSha;
    }
  } while (count === perPage);
}
function genDescribe(tag, distance2, sha) {
  if (distance2 === 0) {
    return tag;
  } else {
    return `${tag}-${distance2}-g${sha.substring(0, 7)}`;
  }
}

// cli/dist/esm/cli/main.js
async function listRemotes() {
  const process2 = import_shim_deno2.Deno.run({
    cmd: ["git", "remote", "-v"],
    stdout: "piped",
    stderr: "piped"
  });
  const [status, stdout, stderr] = await Promise.all([
    process2.status(),
    process2.output(),
    process2.stderrOutput()
  ]);
  if (status.code === 0) {
    const lines = new TextDecoder().decode(stdout).trim().split("\n").map((x) => /(.+)\s+(.+)\s+\((push|fetch)\)/.exec(x) || []).filter((x) => x.length === 4);
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
  } else {
    throw new Error(new TextDecoder().decode(stderr).trim());
  }
}
async function getOriginRepo() {
  const remotes = await listRemotes();
  const { fetchUrl } = remotes.find((x) => x.name === "origin" && x.fetchUrl) || remotes[0];
  if (!fetchUrl)
    throw new Error();
  const [_, owner, name] = new URL(fetchUrl).pathname.split("/", 3);
  return `${owner}/${name.endsWith(".git") ? name.substring(0, name.length - 4) : name}`;
}
async function getHeadSha() {
  await import_shim_deno2.Deno.permissions.request({ name: "run", command: "git" });
  const process2 = import_shim_deno2.Deno.run({
    cmd: ["git", "rev-parse", "HEAD"],
    stdout: "piped",
    stderr: "piped"
  });
  const [status, stdout, stderr] = await Promise.all([
    process2.status(),
    process2.output(),
    process2.stderrOutput()
  ]);
  if (status.code === 0) {
    return new TextDecoder().decode(stdout).trim();
  } else {
    throw new Error(new TextDecoder().decode(stderr).trim());
  }
}
var cli = new Command().name("gh-describe").version("").description("Emulate `git describe --tags` in shallow clone repository.").option("-R, --repo <repo>", "Target repository. Format: OWNER/REPO").option("--default", "It is output instead when it action fails. If empty, this step will fail.").arguments("[commit-ish]").action(async (options, commitish) => {
  const [owner, repo] = (options.repo || await (async () => {
    await import_shim_deno2.Deno.permissions.request({ name: "run", command: "git" });
    return await getOriginRepo();
  })()).split("/");
  const defaultValue = options.default;
  commitish ||= await getHeadSha();
  await import_shim_deno2.Deno.permissions.request({ name: "run", command: "gh" });
  const { describe } = await ghDescribe(owner, repo, commitish, defaultValue);
  console.log(describe);
}).parse(import_shim_deno2.Deno.args);
(async () => await cli)();
