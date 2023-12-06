// https://bimigroup.org/resources/SVG_PS-latest.rnc.txt

// Define allowed attributes for each element
const ALLOWED_ATTRIBUTES = {
    svg: ["about", "baseProfile", "class", "color", "color-rendering", "content", "contentScriptType", "datatype", "direction", "display-align", "externalResourcesRequired", "fill", "fill-opacity", "fill-rule", "focusable", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "line-increment", "playbackOrder", "preserveAspectRatio", "property", "rel", "resource", "rev", "role", "snapshotTime", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-align", "text-anchor", "timelineBegin", "typeof", "unicode-bidi", "vector-effect", "version", "viewBox", "width", "xml:base", "xml:lang", "xml:space", "xmlns", "zoomAndPan"],
    desc: ["about", "buffered-rendering", "class", "content", "datatype", "display", "id", "image-rendering", "property", "rel", "requiredFonts", "resource", "rev", "role", "shape-rendering", "systemLanguage", "text-rendering", "typeof", "viewport-fill", "viewport-fill-opacity", "visibility", "xml:base", "xml:id", "xml:lang", "xml:space"],
    title: ["about", "buffered-rendering", "class", "content", "datatype", "display", "id", "image-rendering", "property", "rel", "requiredFonts", "resource", "rev", "role", "shape-rendering", "systemLanguage", "text-rendering", "typeof", "viewport-fill", "viewport-fill-opacity", "visibility", "xml:base", "xml:id", "xml:lang", "xml:space"],
    path: ["about", "class", "color", "color-rendering", "content", "d", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "id", "line-increment", "pathLength", "property", "rel", "requiredFonts", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "systemLanguage", "text-align", "text-anchor", "transform", "typeof", "unicode-bidi", "vector-effect", "xml:base", "xml:id", "xml:lang", "xml:space"],
    rect: ["about", "class", "color", "color-rendering", "content", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "id", "line-increment", "property", "rel", "requiredFonts", "resource", "rev", "role", "rx", "ry", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "systemLanguage", "text-align", "text-anchor", "transform", "typeof", "unicode-bidi", "vector-effect", "width", "x", "xml:base", "xml:id", "xml:lang", "xml:space", "y"],
    circle: ["about", "class", "color", "color-rendering", "content", "cx", "cy", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "id", "line-increment", "property", "r", "rel", "requiredFonts", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "systemLanguage", "text-align", "text-anchor", "transform", "typeof", "unicode-bidi", "vector-effect", "xml:base", "xml:id", "xml:lang", "xml:space"],
    line: ["about", "class", "color", "color-rendering", "content", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "id", "line-increment", "property", "rel", "requiredFonts", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "systemLanguage", "text-align", "text-anchor", "transform", "typeof", "unicode-bidi", "vector-effect", "x1", "x2", "xml:base", "xml:id", "xml:lang", "xml:space", "y1", "y2"],
    ellipse: ["about", "class", "color", "color-rendering", "content", "cx", "cy", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "id", "line-increment", "property", "rel", "requiredFonts", "resource", "rev", "role", "rx", "ry", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "systemLanguage", "text-align", "text-anchor", "transform", "typeof", "unicode-bidi", "vector-effect", "xml:base", "xml:id", "xml:lang", "xml:space"],
    polyline: ["about", "class", "color", "color-rendering", "content", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "id", "line-increment", "points", "property", "rel", "requiredFonts", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "systemLanguage", "text-align", "text-anchor", "transform", "typeof", "unicode-bidi", "vector-effect", "xml:base", "xml:id", "xml:lang", "xml:space"],
    polygon: [ "about", "class", "color", "color-rendering", "content", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "id", "line-increment", "points", "property", "rel", "requiredFonts", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "systemLanguage", "text-align", "text-anchor", "transform", "typeof", "unicode-bidi", "vector-effect", "xml:base", "xml:id", "xml:lang", "xml:space"],
    solidcolor: [ "about", "class", "color", "color-rendering", "content", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "id", "line-increment", "property", "rel", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-align", "text-anchor", "typeof", "unicode-bidi", "vector-effect", "xml:base", "xml:id", "xml:lang", "xml:space"],
    textarea: ["about", "class", "color", "color-rendering", "content", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "id", "line-increment", "property", "rel", "requiredFonts", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "systemLanguage", "text-align", "text-anchor", "transform", "typeof", "unicode-bidi", "vector-effect", "width", "x", "xml:base", "xml:id", "xml:lang", "xml:space", "y"],
    lineargradient: ["about", "class", "color", "color-rendering", "content", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "gradientUnits", "id", "line-increment", "property", "rel", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-align", "text-anchor", "typeof", "unicode-bidi", "vector-effect", "x1", "x2", "xml:base", "xml:id", "xml:lang", "xml:space", "y1", "y2"],
    radialgradient: ["about", "class", "color", "color-rendering", "content", "cx", "cy", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "gradientUnits", "id", "line-increment", "property", "r", "rel", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-align", "text-anchor", "typeof", "unicode-bidi", "vector-effect", "xml:base", "xml:id", "xml:lang", "xml:space"],
    text: ["about", "class", "color", "color-rendering", "content", "datatype", "direction", "display-align", "editable", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "id", "line-increment", "property", "rel", "requiredFonts", "resource", "rev", "role", "rotate", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "systemLanguage", "text-align", "text-anchor", "transform", "typeof", "unicode-bidi", "vector-effect", "x", "xml:base", "xml:id", "xml:lang", "xml:space", "y"],
    g: ["about", "class", "color", "color-rendering", "content", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "id", "line-increment", "property", "rel", "requiredFonts", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "systemLanguage", "text-align", "text-anchor", "transform", "typeof", "unicode-bidi", "vector-effect", "xml:base", "xml:id", "xml:lang", "xml:space"],
    defs: ["about", "class", "color", "color-rendering", "content", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "id", "line-increment", "property", "rel", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-align", "text-anchor", "typeof", "unicode-bidi", "vector-effect", "xml:base", "xml:id", "xml:lang", "xml:space"],
    use: ["about", "class", "color", "color-rendering", "content", "datatype", "direction", "display-align", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-style", "font-variant", "font-weight", "href", "id", "line-increment", "property", "rel", "requiredFonts", "resource", "rev", "role", "solid-color", "solid-opacity", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "systemLanguage", "text-align", "text-anchor", "transform", "typeof", "unicode-bidi", "vector-effect", "x", "xml:base", "xml:id", "xml:lang", "xml:space", "y"],
    stop: ["stop-color", "offset"]
}

const ALLOWED_ELEMENTS = [
    "circle", "defs", "desc", "ellipse", "g", "line", "linearGradient", "path", "polygon", "polyline", "radialGradient", "rect", "solidColor", "stop", "svg", "text", "textArea", "title", "use"
];

const SVG_NS = "http://www.w3.org/2000/svg"

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const svgContainer = document.getElementById('svgContainer');

    padding.addEventListener('change', function (event) {
        const svg = svgContainer.querySelector('svg')
        const bg = svg.getElementById('background')

        let config = {}
        config.padding = (event.target.value / 100)
        config.background = bg.getAttribute('fill')

        // Update viewbox, center and add padding
        setViewBox(svg, config);
        console.log(`Setting padding to ${config.padding}`);
    });


    title.addEventListener('change', function (event) {
        if (event.target.value.trim() === '') {
            return;
        }
        const svg = svgContainer.querySelector('svg')

        const titleElement = svg.querySelector('title');
        titleElement.textContent = event.target.value.trim();

        console.log(`Setting title to '${event.target.value.trim()}'`);
    });

    background.addEventListener('change', function (event) {
        const svg = svgContainer.querySelector('svg')

        const rectElement = svg.querySelector('#background');
        rectElement.setAttribute('fill', event.target.value);

        console.log(`Setting background to ${event.target.value}`);
    });

    fileInput.addEventListener('change', function (event) {
        // Unload SVG image
        svgContainer.innerHTML = '';

        // Hide the download button
        downloadButton.style.display = 'none';
        const file = event.target.files[0];
        if (file) {
            // Read the SVG file
            const reader = new FileReader();
            reader.onload = function (e) {
                // Parse the SVG content
                const parser = new DOMParser();
                const doc = parser.parseFromString(e.target.result, 'image/svg+xml');
                const svgContent = doc.querySelector('svg');
                
                let config = {}
                config.title = title.value
                config.padding = (padding.value / 100)
                config.background = background.value

                if (config.title === "") {
                    const titleElement = svgContent.querySelector('title');
                    if (titleElement) {
                        config.title = titleElement.textContent;
                    } else {
                        config.title = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
                    }
                    // Upper case first char is all lowercase
                    if (config.title === config.title.toLowerCase()) {
                        config.title = config.title.charAt(0).toUpperCase() + config.title.slice(1);
                    }
                    title.value = config.title;
                }

                // Convert to SVG Tiny PS (for security) but retain styles for now to allow conversion
                const svg = svgContainer.insertAdjacentElement("beforeend", convertToSvgTinyPS(svgContent, config, true));
                svg.removeAttribute('width');
                svg.removeAttribute('height');

                convertStyles(svg)

                // Convert again to remove styles and new attributes that are not allowed
                svg.replaceWith(convertToSvgTinyPS(svg, config, false))

                // Update viewbox, center and add padding
                setViewBox(svg, config);

                // Show the download button
                downloadButton.setAttribute('data-filename', 'converted-'+ file.name);
                downloadButton.style.display = 'block';


                console.log(svg.outerHTML);
            };

            reader.readAsText(file);
        }

    });

    // Add a click event to the download button
    downloadButton.addEventListener('click', function () {
        const xmlHeader = '<?xml version="1.0" encoding="utf-8"?>\n';
        const svgContent = svgContainer.innerHTML;
        const blob = new Blob([xmlHeader + svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = downloadButton.getAttribute('data-filename');

        // Append the anchor to the body
        document.body.appendChild(a);

        // Trigger a click on the anchor
        a.click();

        // Remove the anchor from the body
        document.body.removeChild(a);
    });

    function convertStyles(svg) {
        // Iterate through SVG elements
        svg.querySelectorAll('*').forEach(element => {
            if (['title', 'defs', 'desc', 'style'].includes(element.tagName)) {
                return;
            }

            // Get default styles for each element
            const defaultStyles = getDefaultStyles(element);

            // Extract user-applied styles for each element
            const userStyles = getStylesObject(element, window);
            
            // Compare default and user styles to get the differing properties
            const differingStyles = getDifferingStyles(defaultStyles, userStyles);

            // Include the differing properties in mapStyles
            for (const [name, value] of Object.entries(differingStyles)) {
                if (['d', 'display', 'transform-origin'].includes(name)) {
                    continue;
                }
                element.setAttribute(name, value);
                console.log('setAttribute ' + name + ' = ' + value +" on element "+ element.tagName)
            }

            // Include styles defined on element
            for (let i = 0; i < element.style.length; i++) {
                const name = element.style[i];
                const value = element.style[element.style[i]];

                element.setAttribute(name, value);
                console.log('setAttribute ' + name + ' = ' + value +" on element "+ element.tagName)
            }
        });
    }

    function getDifferingStyles(defaultStyles, userStyles) {
        const differingStyles = {};

        for (const [property, defaultValue] of Object.entries(defaultStyles)) {
            const userValue = userStyles[property];
            if (userValue !== undefined && userValue !== defaultValue) {
                differingStyles[property] = userValue;
            }
        }

        return differingStyles;
    }

    function getDefaultStyles(element) {
        // Create an invisible element to get default styles
        const tempElement = document.createElement('svg');

        // Create an invisible element to get default styles
        const tempElementTag = document.createElement(element.tagName);
        tempElement.appendChild(tempElementTag);

        // Append the temporary element to the body
        document.body.appendChild(tempElement);

        // Clone the default computed styles
        const defaultStyles = { ... window.getComputedStyle(tempElement) };

        // Remove the temporary element from the body
        tempElement.remove();

        return defaultStyles;
    }

    function getStylesObject(node, parentWindow) {
        const styles = parentWindow.getComputedStyle(node);
        let stylesObject = {};

        for (let i = 0; i < styles.length; i++) {
            const property = styles[i];
            stylesObject[property] = styles[property];
        }

        return stylesObject;
    }

    function getCoords(svg) {
        // Set default coordinates
        const coords = {
            top: Infinity,
            left: Infinity,
            bottom: -Infinity,
            right: -Infinity,
        };

        // Filter SVG to visible elements
        const filterize = (newSvg) => {
            const newest = [...newSvg.children].filter(
                (x) =>
                    x.tagName !== 'defs' &&
                    x.tagName !== 'style' &&
                    x.tagName !== 'title' &&
                    x.tagName !== 'desc' &&
                    x.id !== 'background'
            );

            if (
                (newest.length === 1 && newest.childElementCount > 0) ||
                newest[0].tagName === 'g'
            ) {
                return filterize(newest[0]);
            }

            return newest.filter(
                (x) => x.getBBox && x.getBBox().width !== 0 && x.getBBox().height !== 0
            );
        };

        // Get coordinates of SVG elements
        filterize(svg).forEach((x) => {
            const bbox = x.getBBox();
            const top = bbox.y;
            const left = bbox.x;
            const bottom = bbox.y + bbox.height;
            const right = bbox.x + bbox.width;

            if (top < coords.top) {
                coords.top = top;
            }
            if (left < coords.left) {
                coords.left = left;
            }
            if (right > coords.right) {
                coords.right = right;
            }
            if (bottom > coords.bottom) {
                coords.bottom = bottom;
            }
        });

        return coords;
    }

    // Function to convert SVG to SVG Tiny PS
    function convertToSvgTinyPS(svg, config, retainStyle) {
        svg.setAttribute('version', '1.2');
        svg.setAttribute('baseProfile', 'tiny-ps');
        svg.setAttribute('xmlns', SVG_NS);
        
        const titleElement = svg.querySelector('title');
        if (titleElement) {
            titleElement.remove();
        }

        // Create a new title element
        const newTitleElement = document.createElementNS(SVG_NS, 'title');
        newTitleElement.textContent = config.title.trim();
        console.log(newTitleElement)

        // Append the new title element to the SVG
        svg.insertAdjacentElement('afterbegin', newTitleElement);

        console.log(`Added title element with value '${config.title.trim()}' to <svg>`);

        // Remove non-conforming attributes from SVG element (case-insensitive)
        [...svg.attributes].forEach(attribute => {
            if (!['version', 'baseprofile', 'viewbox'].includes(attribute.name.toLowerCase()) && !ALLOWED_ATTRIBUTES.svg.includes(attribute.name.toLowerCase())) {
                console.log(`Removed attribute '${attribute.name}' from <svg>`);
                svg.removeAttribute(attribute.name);
            }
        });

        [...svg.children].forEach(child => removeNonConforming(child, retainStyle));

        return svg;
    }

    function removeNonConforming(element, retainStyle) {
        let allowedElements= ALLOWED_ELEMENTS;
        let allowedAttributes = ALLOWED_ATTRIBUTES[element.tagName.toLowerCase()] || [];

        if (retainStyle) {
            allowedElements = [...new Set([...allowedElements ,...['style']])];
            allowedAttributes = [...new Set([...allowedAttributes ,...['style','class']])];
        }
        // Remove non-conforming elements (case-insensitive)
        if (!allowedElements.some(item => item.toLowerCase() == element.tagName.toLowerCase())) {
            console.log(`Removed element <${element.tagName}>`);
            element.remove();
            return;
        }
        

        // Remove non-conforming attributes from elements (case-insensitive)
        [...element.attributes].forEach(attribute => {
            if (!allowedAttributes.some(item => item.toLowerCase() == attribute.name.toLowerCase())) {
                console.log(`Removed attribute '${attribute.name}' from <${element.tagName}>`);
                element.removeAttribute(attribute.name);
            }
        });

        [...element.children].forEach(child => removeNonConforming(child, retainStyle));
    }

    function setViewBox(svg, config) {
        const coords = getCoords(svg);

        // Calculate new viewBox dimensions
        const width =  Math.round(coords.right - coords.left);
        const height =  Math.round(coords.bottom - coords.top);

        // Use the maximum of width and height to make it a square
        // add 20% padding, 10% left of each side
        const padding = Math.max(width, height) * config.padding;
        const squareSize = Math.max(width, height) + padding;

        // Calculate center coordinates
        const center = squareSize / 2;

        const x = center - (width / 2) - padding
        const y = -(center - (height / 2))

        // Set viewBox based on new coordinates and square size
        svg.setAttribute(
            'viewBox',
            `${x} ${y} ${squareSize} ${squareSize}`
        );

        // Remove background if set
        const bg = svg.getElementById('background');
        if (bg !== null) {
            bg.remove();
        }

        // Add a solid background
        const newRect = document.createElementNS(SVG_NS, 'rect');
        newRect.setAttribute('id', 'background');
        newRect.setAttribute('x', x);
        newRect.setAttribute('y', y);
        newRect.setAttribute('width', '100%');
        newRect.setAttribute('height', '100%');
        newRect.setAttribute('fill', config.background);

        // Prepend the new background to the SVG after the title element
        const title = svg.querySelector('title');
        title.insertAdjacentElement('afterend', newRect);

        return svg;
    }       
});

