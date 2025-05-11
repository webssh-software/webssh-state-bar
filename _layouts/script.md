---
layout: post
---

{% capture script_layout %}
## Item Specification

| Name | Icon | Version            |
| ---- | ---- | ------------------ |
| Col1 | Col2 | {{ page.version }} |

| Company                      | Contact          | Country |
| :--------------------------- | :--------------- | ------: |
| Alfreds Futterkiste          | Maria Anders     | Germany |
| Island Trading               | Helen Bennett    |      UK |
| Magazzini Alimentari Riuniti | Giovanni Rovelli |   Italy |

```javascript
hello()
```
{% endcapture %}
{{ script_layout | markdownify }}


<article class="prose lg:prose-xl mx-auto my-8">
  <!-- Title -->
  <header class="mb-6">
    <h1 class="text-3xl font-bold">{{ page.title }}</h1>
  </header>

  <!-- Metadata as a definition list -->
  <dl class="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-600 mb-8">
    <div>
      <dt class="font-medium">Version</dt>
      <dd>{{ page.version }}</dd>
    </div>
    <div>
      <dt class="font-medium">Creator</dt>
      <dd>{{ page.creator }}</dd>
    </div>
    <div>
      <dt class="font-medium">Capabilities</dt>
      <dd>{{ page.capabilities | join: ', ' }}</dd>
    </div>
    <div>
      <dt class="font-medium">Maintainers</dt>
      <dd>{{ page.maintainers | join: ', ' }}</dd>
    </div>
    <div class="col-span-2">
      <dt class="font-medium">UUID</dt>
      <dd>
        <code>{{ page.uuid }}</code>
      </dd>
    </div>
  </dl>

  <!-- Description -->
  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-2">Description</h2>
    {{ page.description }}
  </section>

  <!-- Script block -->
  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-2">JavaScript</h2>
    {% highlight javascript linenos %}{{ page.script }}{% endhighlight %}
  </section>

  <!-- Any extra body content from the Markdown file -->
  {% if content %}
    <section class="mb-8">
      {{ content }}
    </section>
  {% endif %}
</article>
