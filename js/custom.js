function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function() {
	var loc = getParameterByName('txt')
	var url = "https://cdn.discordapp.com/attachments/"+loc+".txt";
	if(loc)
		$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', function(data){
			var formatted = data.contents.split('<').join('&lt').split('>').join('&gt').split('\n').join('<br>');
			$('#output').html('<a href="'+url+'">View Original</a><br><br>'+formatted);
		});
	else
		$('#output').html('Invalid text file');
});
