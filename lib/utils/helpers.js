/**
﻿ *******************************************************
﻿ *                                                     *
﻿ *   Copyright (C) Microsoft. All rights reserved.     *
﻿ *                                                     *
﻿ *******************************************************
﻿ */

// Checks whether a command is compatible with livereload
// Currently, Only the following commands are compatible with LiveReload : `* (run|emulate) android -- --livereload`, `* (run|emulate) android --livereload`
//   Examples:
//     - `cordova run android -- --livereload` 
//     - `phonegap run android -- --livereload`
//     - `cordova run android --livereload`
//     - `cordova emulate android -- --livereload`
//     - `cordova emulate android --livereload`
//     - `taco emulate android --livereload`
//     - `phonegap emulate android --livereload`
module.exports.IsCmdLiveReloadCompatible = function(context) {

    // Allow livereload to be started by running: `cordova run android --livereload` or by running `cordova run android -- --livereload`
    if (!context.opts.livereload && (context.opts.options.indexOf('--livereload') === -1)) {
        return false;
    }

    // Has the user issued a livereload compatible command ? e.g: run or emulate
    var cordovaRunRegex = /(.*)(run|emulate)(.*)/i;
    var isCordovaRunCmd = cordovaRunRegex.test(context.cmdLine);

    return isCordovaRunCmd ? true : false;
};