var tudConfig = require('./tudConfig.js');

tudConfig.nodeAsyncCallLog = true;
tudConfig.userAsyncCallLog = true;

// tudConfig.nodeStackViewLvl = 'off';
// tudConfig.nodeStackViewLvl = 'app';
// tudConfig.nodeStackViewLvl = 'sys';
// tudConfig.userStackViewLvl = 'off';
// tudConfig.userStackViewLvl = 'app';
// tudConfig.userStackViewLvl = 'sys';

var tud = require('../index.js').init(tudConfig);



var EventEmitter = require('events').EventEmitter;



var ee1 = new EventEmitter();

function f1234(x){ __('f1234', x) }

ee1.once('event__once_remove_test', f1234);
__('listeners', ee1.listeners('event__once_remove_test'), 2);
ee1.emit('event__once_remove_test', 'MessageMessageMessage...');
__('listeners', ee1.listeners('event__once_remove_test'), 2);

ee1.once('event__once_remove_test', f1234);
__('listeners', ee1.listeners('event__once_remove_test'), 2);
ee1.removeListener('event__once_remove_test', f1234);
__('listeners', ee1.listeners('event__once_remove_test'), 2);

ee1.on  ('event__once_remove_test', f1234);
ee1.once('event__once_remove_test', f1234);
__('listeners', ee1.listeners('event__once_remove_test'), 2);
ee1.removeAllListeners('event__once_remove_test');
__('listeners', ee1.listeners('event__once_remove_test'), 2);

ee1.on  ('removeListener', function cbfRemoveListener(e,l){ __('on removeListener', {e:e,l:l}, 2) });
ee1.on  ('event__once_remove_test', f1234);
ee1.once('event__once_remove_test', f1234);
__('listeners', ee1.listeners('removeListener'), 2);
__('listeners', ee1.listeners('event__once_remove_test'), 2);
ee1.removeAllListeners();
__('listeners', ee1.listeners('removeListener'), 2);
__('listeners', ee1.listeners('event__once_remove_test'), 2);



var ee2 = new EventEmitter();

ee2.once('newListener', function cbfNewListenerOnce(e,l){ __('once newListener', {e:e,l:l}, 2) });
ee2.on  ('newListener', function cbfNewListenerOn  (e,l){ __('on   newListener', {e:e,l:l}, 2) });

__('#newListener', ee2.listeners('newListener'), 2);

ee2.once('removeListener', function cbfRemoveListenerOnce(e,l){ __('once removeListener', {e:e,l:l}, 2) });
ee2.on  ('removeListener', function cbfRemoveListenerOn  (e,l){ __('on   removeListener', {e:e,l:l}, 2) });

ee2.once('onOrOnceEvent', function cbfOnOrOnceEventOnce(){ __('once onOrOnceEvent') });
ee2.on  ('onOrOnceEvent', function cbfOnOrOnceEventOn  (){ __('on   onOrOnceEvent') });

__('#removeListener', ee2.listeners('removeListener'), 2);
__('#onOrOnceEvent', ee2.listeners('onOrOnceEvent'), 2);

ee2.removeAllListeners();

__('#removeListener', ee2.listeners('removeListener'), 2);
__('#onOrOnceEvent', ee2.listeners('onOrOnceEvent'), 2);

ee2.eventNames && __('eventNames', ee2.eventNames(), 2);



