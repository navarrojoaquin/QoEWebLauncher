function generateId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var length = 8;

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

$(function() {
	$("#enterButton").click(function () {
		var baseURL = "/QualityCrowd2";
		var dirSeparator = "/";
		var batchName = $("#inputExperiment").find(":selected").val();
		var userId = generateId();
		var experimentURL = baseURL + dirSeparator + batchName + dirSeparator + userId;
		window.location = experimentURL;
		return false;
	});
});