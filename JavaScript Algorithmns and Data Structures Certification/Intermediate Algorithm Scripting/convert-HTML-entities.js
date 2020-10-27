/* Intermediate Algorithm Scripting: Convert HTML Entities */

/*
Problem: Convert characters &, <, >, ", and ' in a string
to their corresponding HTML entities.

Note:
& =  &amp;
< = &lt;
> = &lt;
" = &quot;
' = &apos;
*/


/* Solution */

function convertHTML(str) {
    
    var editedStr = str.split("")
    for (let i = 0; i < editedStr.length; i++){
        switch(editedStr[i]){
            case '&':
                editedStr[i] = "&amp;";
                break;
            case '<':
                editedStr[i] = '&lt;';
                break;
            case '>':
                editedStr[i] = '&gt;';
                break;
            case '"':
               editedStr[i] = '&quot;';
                break;
            case "'":
                editedStr[i] = '&apos;';
                break;
        }
    }
    return editedStr.join("");
}