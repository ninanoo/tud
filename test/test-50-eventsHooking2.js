var tudConfig = require('./tudConfig.js');

tudConfig.nodeAsyncCallLog = true;
tudConfig.userAsyncCallLog = true;

// tudConfig.nodeStackViewLvl = 'off';
// tudConfig.nodeStackViewLvl = 'app';
// tudConfig.nodeStackViewLvl = 'sys';
// tudConfig.userStackViewLvl = 'off';
// tudConfig.userStackViewLvl = 'app';
// tudConfig.userStackViewLvl = 'sys';

var tud = require('../index.js')(tudConfig);



var EventEmitter = require('events').EventEmitter;



var ee, onceCallback,   onCallback;

ee = new EventEmitter();

onceCallback = function onceCallback(n){ __('callback of event-' + n + '-for-once') };
  onCallback = function   onCallback(n){ __('callback of event-' + n + '-for-on'  ) };



ee.once('event-1-for-once', onceCallback);
ee.on  ('event-1-for-on'  ,   onCallback);

__('#event-1-for-once', ee.listeners('event-1-for-once'), 2);
__('#event-1-for-on'  , ee.listeners('event-1-for-on'  ), 2);

ee.removeListener('event-1-for-once', onceCallback);
ee.removeListener('event-1-for-on'  ,   onCallback);

__('#event-1-for-once', ee.listeners('event-1-for-once'), 2);
__('#event-1-for-on'  , ee.listeners('event-1-for-on'  ), 2);



ee.once('event-2-for-once', onceCallback);
ee.on  ('event-2-for-on'  ,   onCallback);

__('#event-2-for-once', ee.listeners('event-2-for-once'), 2);
__('#event-2-for-on'  , ee.listeners('event-2-for-on'  ), 2);

ee.emit('event-2-for-once', 2);
ee.emit('event-2-for-on'  , 2);

__('#event-2-for-once', ee.listeners('event-2-for-once'), 2);
__('#event-2-for-on'  , ee.listeners('event-2-for-on'  ), 2);

ee.removeListener('event-2-for-once', onceCallback); // previously removed, so no event
ee.removeListener('event-2-for-on'  ,   onCallback);

__('#event-2-for-once', ee.listeners('event-2-for-once'), 2);
__('#event-2-for-on'  , ee.listeners('event-2-for-on'  ), 2);



// ee.on  ('removeListener', function onRemoveListenerCallback(e,l){ __('on removeListener', {e:e,l:l}, 2) });

ee.once('event-3-for-once', onceCallback);
ee.on  ('event-3-for-on'  ,   onCallback);

__('#removeListener'  , ee.listeners('removeListener'  ), 2);
__('#event-3-for-once', ee.listeners('event-3-for-once'), 2);
__('#event-3-for-on'  , ee.listeners('event-3-for-on'  ), 2);

// __('ee._events', ee._events, 3);
ee.removeAllListeners();
// __('ee._events', ee._events, 3);

__('#removeListener'  , ee.listeners('removeListener'  ), 2);
__('#event-3-for-once', ee.listeners('event-3-for-once'), 2);
__('#event-3-for-on'  , ee.listeners('event-3-for-on'  ), 2);



process.on('beforeExit', function beforeExitCallback(code){ __('on beforeExit', code) });
process.on(      'exit', function       exitCallback(code){ __('on exit'      , code) });



