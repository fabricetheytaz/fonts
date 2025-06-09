"use strict";

fetch("bujo.json").then(response => response.json()).then(json =>
	{
	let html = [];
	
	Object.getOwnPropertyNames(json.glyphs).forEach(glyph =>
		{
		const entity = "&#" + parseInt(glyph, 16) + ";";
		
		html.push(`<div class="glyph"><span class="bujo">${entity}</span></div>`);
		});
	
	document.querySelector("#glyphs").innerHTML = html.join("\n");
	});

/*
<!--
<p><a href="test/index.html">Test tailles</a></p>

<div id="glyphs">
</div>

<script src="scripts/bujo.js"></script>
-->

*/