
async function glyphs(url:string):Promise<void>
	{
	function glyph2html(glyph:string):string
		{
		const entity = "&#" + parseInt(glyph, 16) + ";";

		return `<div class="glyph"><span class="bujo">${entity}</span></div>`;
		}

	const response = await fetch(url);

	const font = await response.json();

	const html = Object.getOwnPropertyNames(font.glyphs).map(glyph2html).join("\n");

	document.getElementById("glyphs")!.innerHTML = html;
	}
