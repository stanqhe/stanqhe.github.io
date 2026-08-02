````{=html}
<%
const moreItems = items.slice(0, 8);
const collectionSlugs = ["thoughts", "portraits", "moments", "events"];
const collectionName = (item) => {
  const source = String(item.filename || item.path || "").toLowerCase();
  const slug = collectionSlugs.find((candidate) =>
    source.startsWith(`${candidate}/`) || source.includes(`/${candidate}/`)
  ) || "thoughts";
  return slug.charAt(0).toUpperCase() + slug.slice(1);
};
const itemLabel = (item) => {
  const categories = Array.isArray(item.categories)
    ? item.categories.join(" · ")
    : (item.categories || "");
  return categories ? `${collectionName(item)} · ${categories}` : collectionName(item);
};
const dateIso = (item) => item.date
  ? new Date(item.date).toISOString().slice(0, 10)
  : "";
const moreRows = [];
for (let index = 0; index < moreItems.length; index += 2) {
  moreRows.push(moreItems.slice(index, index + 2));
}
%>
<div class="life-more-list list" aria-label="More from Life">
<% for (const row of moreRows) { %>
  <div class="life-more-row">
    <% for (const item of row) { %>
    <a class="life-more-item" href="<%- item.path %>">
      <span class="life-more-media<% if (!item.image) { %> life-media-placeholder<% } %>" aria-hidden="true">
        <img src="<%- item.image || '/assets/images/strarts_mark.svg' %>" alt="" />
      </span>
      <span class="life-more-copy">
        <span class="life-card-label"><%- itemLabel(item) %></span>
        <span class="life-card-title life-card-title--compact"><%- item.title %></span>
        <time class="life-card-date" datetime="<%- dateIso(item) %>"><%- item.date %></time>
      </span>
    </a>
    <% } %>
  </div>
<% } %>
</div>
````
