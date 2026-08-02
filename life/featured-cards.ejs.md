````{=html}
<%
const featuredItems = items.slice(0, 6);
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
const supportingItems = featuredItems.slice(1, 3);
const finalItems = featuredItems.slice(3, 6);
const rowClass = (baseClass, rowItems) => {
  if (rowItems.length === 1) return `${baseClass} life-featured-single`;
  if (rowItems.length === 2) return `${baseClass} life-featured-two-items`;
  return baseClass;
};
%>
<div class="life-featured-list list" aria-label="Featured writing">
<% if (featuredItems.length > 0) { %>
  <% const item = featuredItems[0]; %>
  <div class="life-featured-row life-featured-lead-row">
    <a class="life-lead-card" href="<%- item.path %>">
      <span class="life-lead-media<% if (!item.image) { %> life-media-placeholder<% } %>" aria-hidden="true">
        <img src="<%- item.image || '/assets/images/strarts_mark.svg' %>" alt="" />
      </span>
      <span class="life-lead-copy">
        <span class="life-card-label"><%- itemLabel(item) %></span>
        <span class="life-card-title life-card-title--lead"><%- item.title %></span>
        <time class="life-card-date" datetime="<%- dateIso(item) %>"><%- item.date %></time>
      </span>
    </a>
  </div>
<% } %>

<% if (supportingItems.length > 0) { %>
  <div class="life-featured-row <%- rowClass('life-featured-two-up', supportingItems) %>">
    <% for (const item of supportingItems) { %>
    <a class="life-feature-card" href="<%- item.path %>">
      <span class="life-feature-media<% if (!item.image) { %> life-media-placeholder<% } %>" aria-hidden="true">
        <img src="<%- item.image || '/assets/images/strarts_mark.svg' %>" alt="" />
      </span>
      <span class="life-feature-copy">
        <span class="life-card-label"><%- itemLabel(item) %></span>
        <span class="life-card-title life-card-title--standard"><%- item.title %></span>
        <time class="life-card-date" datetime="<%- dateIso(item) %>"><%- item.date %></time>
      </span>
    </a>
    <% } %>
  </div>
<% } %>

<% if (finalItems.length > 0) { %>
  <div class="life-featured-row <%- rowClass('life-featured-three-up', finalItems) %>">
    <% for (const item of finalItems) { %>
    <a class="life-feature-card" href="<%- item.path %>">
      <span class="life-feature-media<% if (!item.image) { %> life-media-placeholder<% } %>" aria-hidden="true">
        <img src="<%- item.image || '/assets/images/strarts_mark.svg' %>" alt="" />
      </span>
      <span class="life-feature-copy">
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
