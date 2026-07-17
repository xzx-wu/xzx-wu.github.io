(function () {
  "use strict";

  var friends = Array.isArray(window.FRIENDS_CATALOG) ? window.FRIENDS_CATALOG : [];
  var grid = document.querySelector("[data-friends-grid]");
  var counter = document.querySelector("[data-friend-count]");

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>'"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character];
    });
  }

  function getUrl(value) {
    try {
      var url = new URL(value);
      return /^https?:$/.test(url.protocol) ? url : null;
    } catch (error) {
      return null;
    }
  }

  function renderFriend(friend) {
    var url = getUrl(friend.url);
    if (!url) return "";
    var tags = Array.isArray(friend.tags) ? friend.tags : [];

    return [
      '<article class="friend-card">',
      '  <div class="friend-seal" aria-hidden="true"><span>' + escapeHtml(friend.mark || friend.name.slice(0, 1)) + "</span></div>",
      '  <div class="friend-card__copy">',
      '    <p class="friend-card__kicker">COMPANION ARCHIVE</p>',
      "    <h2>" + escapeHtml(friend.name) + "</h2>",
      '    <p class="friend-card__owner">旅栈主人 · ' + escapeHtml(friend.owner) + "</p>",
      '    <p class="friend-card__description">' + escapeHtml(friend.description) + "</p>",
      '    <p class="friend-card__motto">“' + escapeHtml(friend.motto) + '”</p>',
      '    <div class="friend-tags">' + tags.map(function (tag) { return "<span>" + escapeHtml(tag) + "</span>"; }).join("") + "</div>",
      "  </div>",
      '  <div class="friend-card__portal">',
      '    <span class="friend-card__domain">' + escapeHtml(url.host) + "</span>",
      '    <a class="friend-card__button" href="' + escapeHtml(url.href) + '" target="_blank" rel="noopener noreferrer" aria-label="前往' + escapeHtml(friend.name) + '，新窗口打开">开启传送门 <span aria-hidden="true">↗</span></a>',
      '    <small class="friend-card__hint">将在新的窗口打开</small>',
      "  </div>",
      "</article>"
    ].join("");
  }

  if (counter) counter.textContent = friends.length + " 位同行者";
  if (grid) grid.innerHTML = friends.map(renderFriend).join("");
})();
