inViewport = require('vue-in-viewport-mixin');
 module.exports = {
 	mixins: [ inViewport ],
 	watch: {
 		'inViewport.now': function(visible) {
            console.log('This component is '+( visible ? 'in-viewport' : 'hidden'))
            return visible
 		}
 	}
 }