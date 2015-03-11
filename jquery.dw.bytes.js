(function($, undefined) {
	$.bytesToSize = function(bytes) {
	    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	    if (bytes == 0) return '';
	    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
	};
	$.sizeToBytes = function(size) {
		var matches = size.match(/(\d+)\s?(\D+)/i);
		
		var bytes = matches[1];
		var unit = matches[2].toLowerCase();
		
		switch(unit) {
			case 'k':
				bytes *= 1024;
				break;
		
			case 'm':
				bytes *= 1024 * 1024;
				break;
				
			case 'g':
				bytes *= 1024 * 1024 * 1024;
				break;
				
			case 't':
				bytes *= 1024 * 1024 * 1024 * 1024;
				break;
		}
		
		return bytes;
	};
}( jQuery ));