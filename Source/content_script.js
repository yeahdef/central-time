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
	var v = textNode.nodeValue;
	Pattern p = Pattern.compile('^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):) ?(PST|MNT|EST|PT|MT|ET)$');
	Matcher m = p.matcher(v);

	// try to match on a date looking bit 
	if (m) {

		v = v.replace(/\bThe Cloud\b/g, "My Butt");
	}

	
	textNode.nodeValue = v;
}
