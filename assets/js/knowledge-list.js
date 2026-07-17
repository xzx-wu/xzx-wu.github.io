(function () {
  "use strict";

  const body = document.body;
  const root = body.dataset.root || "";
  const realm = body.dataset.realm || "all";
  const grid = document.querySelector("[data-article-grid]");
  const counts = document.querySelectorAll("[data-article-count]");
  const empty = document.querySelector("[data-empty-state]");

  if (!grid || !window.KNOWLEDGE_ARTICLES || !window.KNOWLEDGE_REALMS) return;

  const articles = window.KNOWLEDGE_ARTICLES.filter(function (article) {
    return realm === "all" || article.realms.includes(realm);
  });

  const escapeHtml = function (value) {
    return String(value).replace(/[&<>"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
    });
  };

  grid.innerHTML = articles.map(function (article) {
    const realmTags = article.realms.map(function (item) {
      return "<span>" + escapeHtml(window.KNOWLEDGE_REALMS[item]) + "</span>";
    }).join("");
    const tags = article.tags.map(function (item) {
      return "<span># " + escapeHtml(item) + "</span>";
    }).join("");

    return [
      '<a class="article-card" href="' + root + escapeHtml(article.path) + '">',
      '<div class="article-card__visual" style="background-image:url(\'' + root + escapeHtml(article.cover) + '\')"></div>',
      '<div class="article-card__body">',
      '<div class="article-card__realms">' + realmTags + '</div>',
      '<h3>' + escapeHtml(article.title) + '</h3>',
      '<p>' + escapeHtml(article.description) + '</p>',
      '<div class="article-card__tags">' + tags + '</div>',
      '<div class="article-card__meta"><time datetime="' + escapeHtml(article.date) + '">' + escapeHtml(article.date) + '</time><span>' + escapeHtml(article.readingTime) + '阅读</span></div>',
      '</div>',
      '</a>'
    ].join("");
  }).join("");

  counts.forEach(function (count) { count.textContent = articles.length + " 篇文章"; });
  if (empty) empty.hidden = articles.length > 0;
})();
