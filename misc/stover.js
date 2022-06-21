$('document').ready(function () {
	var angle = 0;

    setInterval(function(){
	 	angle+=1;
	 	$('#background_pic').transition({
            rotateY: angle + 'deg'
        }, 1, function () {});
	},50);
});