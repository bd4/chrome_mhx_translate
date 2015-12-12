var tag, tag_text;
var name, name_jp;
var labeltags = document.getElementsByTagName("label");
for (var i = 0; i < labeltags.length; i++) {
    tag = labeltags[i];
    tag_text = tag.innerText;
    for (var j=0; j<skill_replace_list.length; j++) {
        name = skill_replace_list[j]["name"];
        name_jp = skill_replace_list[j]["name_jp"];
        // replace on exact match only
        if (tag_text == name_jp) {
            tag.innerText = name;
            tag.setAttribute("title", name_jp);
            matched = true;
            break;
        }
    }
}
