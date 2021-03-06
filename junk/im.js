



function initialize() {
  var url = "http://www.flickr.com/services/feeds/"
  +"photos_public.gne?tags=nature&format=rss_200";
  var feed = new google.feeds.Feed(url);
  feed.setResultFormat(google.feeds.Feed.MIXED_FORMAT);
  feed.setNumEntries(5);               
  feed.load(function(result) {
    if (!result.error) {
    var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        // select the `media:thumbnail` element
        var mediaImage = Array.prototype.slice
        .call(entry.xmlNode.children).filter(function(el, i) {
          return el.nodeName === "media:thumbnail" 
        });
        var thumbnail = new Image;
        // set thumbnail `attributes` with `media:element` `attributes`
        Array.prototype.slice
       .call(mediaImage[0].attributes).forEach(function(key, _) {
              thumbnail[key.name.replace(/[url].*/,"src")] = key.value
        });
        var div = document.createElement("div");       
        div.appendChild(document.createTextNode(entry.title + "\n"));
        div.appendChild(document.createTextNode(entry.link + "\n"));
        div.appendChild(thumbnail);
        container.appendChild(div);                
      }
    }
  });
}
google.setOnLoadCallback(initialize);


