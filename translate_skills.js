var replace_list = [];
for (var i = 0; i < stree_list.length; i++) {
    var stree = stree_list[i];
    var name = stree["name"];
    var name_jp = stree["name_jp"];
    var name_both = name + " (" + name_jp + ")";
    console.log("skill " + name);
    replace_list.push([name_jp, name_both]);
}
// sort longest first
replace_list.sort(function compareElement0Length(a, b) {
    return b[0].length - a[0].length;
});

var tag, text, text2;
var atags = document.getElementsByTagName("a");
for (var i = 0; i < atags.length; i++) {
    tag = atags[i];
    console.log("href: " + tag.href);
    text = tag.innerText;
    for (var j=0; j<replace_list.length; j++) {
        // replace on exact match only
        if (text == replace_list[j][0]) {
            tag.innerText = replace_list[j][1];
            break;
        }
    }
}
