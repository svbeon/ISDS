var latest = "2.1";
var versions = [
  { version: "1.0", link: "/10" },
  { version: "1.1", link: "/11" },
  { version: "1.2", link: "/12" },
  { version: "2.0", link: "/20" },
  { version: "2.1", link: "/" },
]
var i;
var links;

for	(i = 0; i < versions.length; i++) {
    links += '<li><a href="' + versions[i].link + '">Version ' + versions[i].version + '</a></li>';
}

(function() {
  document.getElementById("links").innerHTML = links.replace("undefined", "");
  document.getElementById("latest").innerHTML = "v" + latest;
})();