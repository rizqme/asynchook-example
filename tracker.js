
const {createHook, executionAsyncId} = require("async_hooks");

exports.createTracker = function() {
    let contexts = {};
    let asyncHook = createHook({ 
        init: (asyncId, type, triggerId) => {
            if (contexts[triggerId]) {
                contexts[asyncId] = contexts[triggerId];
            }
        },
        destroy: (asyncId) => {
            delete contexts[asyncId];
        }
    });

    asyncHook.enable();

    process.on("uncaughtException", (error) => {
        let id = executionAsyncId();
        console.error(`(path=${contexts[id].path})\n`, error);
    });

    return function(req, res, next) {
        let id = executionAsyncId();
        contexts[id] = req;
        next();
    };
};