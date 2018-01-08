document.addEventListener('DOMContentLoaded', function () {

});

function get_params_url(url,value){
	var param = url.searchParams.get(value);
	console.log(param);
	return param ;
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
/**
 * [encode description]
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 */
function encode(s) {
  return unescape(encodeURIComponent(s));
}
/**
 * [decode description]
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 */
function decode(s) {
  return decodeURIComponent(escape(s));
}

function output(inp) {
    document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

