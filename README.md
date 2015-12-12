# MHX Wiki Translater

Simple chrome extension to translate certain data on Japanese Monster Hunter
Cross (MHX) wiki sites, including:

* [wiki.mhxg.org](http://wiki.mhxg.org/)
* [armor set search](http://mhx.wiki-db.com/sim/)
* [game-cap.com](http://game-cap.com/)
* [mhx-wiki.com](http://mhx-wiki.com/)

It currently translates the following if found in link text:

* Skill tree names. Replaces the text with the english and the original
japanese in parenthesis. For use on the armor pages, e.g.
[rare1 armor list](http://wiki.mhxg.org/data/2301.html) and
[skill tree list](http://wiki.mhxg.org/data/2200.html).
* Monster names. Adds a mouse over tooltip.
See [large monster list](http://wiki.mhxg.org/data/2501.html).
* Monster materials. Adds a mouse over tooltip with the monster the material
comes from.
See [example weapon page](http://wiki.mhxg.org/ida/226876.html).

The extension also re-enables text selection and right-click context menu,
which are disabled by event handlers on some of the sites.

## Installation

The extension is most easily installed from the Chrome Web Store:
[MHX Wiki Translator](https://chrome.google.com/webstore/detail/mhx-wiki-translator/iejikfjbfhkfmfkcmfbfaicclhlnalck)

## Development

To develop and debug the extension, or to get the latest bleeding edge version
on github that hasn't published to the web store yet, you need to enable
developer mode in the extensions page in chrome; see
[Getting Started: Building a Chrome Extension](https://developer.chrome.com/extensions/getstarted#unpacked)
for details.
