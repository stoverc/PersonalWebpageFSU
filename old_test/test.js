/*<script type = "text/javascript">*/
	/* This is the one for the right-column popup */
	/*
	function makeVisible() {
		var arrowDiv = document.getElementById('right_extension');
		var showLink = document.getElementById('right_link');

		if(arrowDiv.style.visibility == "hidden"){
	  		arrowDiv.style.visibility = "visible";
	  		showLink.innerHTML = "less <<<";
		}
		else{
	  		arrowDiv.style.visibility = "hidden";
	  		showLink.innerHTML = "more >>>";
		}
	}*/

	/* This is the one for the overlay */
	/*
	function makeVisible() {
		var con = document.getElementById('container');
		var inn = document.getElementById('inner');

		if(con.style.visibility == "hidden"){
	  		con.style.visibility = "visible";
	  		inn.style.visibility = "visible";

		}
		else{
	  		con.style.visibility = "hidden";
	  		inn.style.visibility = "hidden";
		}
	}
	*/

	function makeVisible() {
		var con = document.getElementById('container');
		var inn = document.getElementById('inner');
		var circlink = document.getElementById('circular_link');

		if (inn.classList.contains('active')) {
		    inn.classList.remove('active');
		    con.classList.remove('active');
		    circlink.classList.remove('active');
		} 
		else {
		    inn.classList.add('active');
		    con.classList.add('active');
		    circlink.classList.add('active'); 
		}

		circlink.addEventListener('click', makeVisible)
	}

	function mouseOverCaption(element) {
		if(element.innerHTML == "&gt;&gt;&gt;"){
			element.innerHTML = "more >>>";
		}
		else if(element.innerHTML == "&lt;&lt;&lt;"){
			element.innerHTML = "less <<<";
		}
	}

	function mouseOutCaption(element) {
		if(element.innerHTML == "more &gt;&gt;&gt;"){
			element.innerHTML = ">>>";
		}
		else if(element.innerHTML == "less &lt;&lt;&lt;"){
			element.innerHTML = "<<<";
		}
	}

	window.onload = function () {
		makeVisible();
		document.getElementById('right_link').innerHTML = ">>>";
	};
/*</script>*/