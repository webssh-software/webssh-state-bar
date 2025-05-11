---
layout: post
---

{% capture script_layout %}
## Specifications

| Key     | Value              |
| ------- | ------------------ |
| Version | {{ page.version }} |
| Icon    | {{ page.icon }}    |

### Supported Platforms
{% assign all_platforms = "Linux,macOS,FreeBSD,Windows" | split: "," %}
{% assign platforms_string = page.platforms | join: "," %}
{% for platform in all_platforms %}
- [{% if platforms_string contains platform %}x{% else %} {% endif %}] {{ platform }}
{% endfor %}

## JavaScript
```javascript
{{ page.script }}
```

{% if content %}
## Additional Information
{{ content }}
{% endif %}

{% endcapture %}
{{ script_layout | markdownify }}
