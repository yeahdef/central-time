walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	// I stole this function from here:
	// https://github.com/panicsteve/cloud-to-butt/

	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	// look at the text
	var v = textNode.nodeValue;
	// try to match on a date looking bit 
	var m = v.search('^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)\\s??(?:am|pm|AM|PM)\\s??(?:PST|MNT|EST|PT|MT|ET)$');
	// if it matches, parse it to datetime
	if (m) {
		var hour = v.split(':')[0].replace(/\W+/g, " ")
		var minute = v.split(':')[1].replace(/\W+/g, " ")
		var d = new Date(hour=hour, min=minute)
		v = v.replace(/\bpm\b/g, "My Butt");
	}

	
	textNode.nodeValue = v;
}
