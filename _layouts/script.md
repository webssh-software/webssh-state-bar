---
layout: post
---

{% capture script_layout %}
<kbd><a href="websshstatebar-import://raw.githubusercontent.com/webssh-software/webssh-state-bar/refs/heads/main/{{ page.path }}">Import to WebSSH</a></kbd>

## JavaScript Content
```javascript
{{ page.script }}
```

## Icon
`{{ page.icon }}`

### Compatibility
{% assign all_platforms = "WebSSH,iOS,iPadOS,macOS" | split: "," %}
{% assign platforms_string = page.compatibility | join: "," %}
{% for platform in all_platforms %}
- [{% if platforms_string contains platform %}x{% else %} {% endif %}] {{ platform }} {{ page.compatibility[platform] }}
{% endfor %}

### Supported Targets
{% assign all_targets = "Linux,macOS,FreeBSD,Windows" | split: "," %}
{% assign targets_string = page.targets | join: "," %}
{% for target in all_targets %}
- [{% if targets_string contains target %}x{% else %} {% endif %}] {{ target }}
{% endfor %}

{% if content %}
## Additional Information
{{ content }}
{% endif %}

{% endcapture %}
{{ script_layout | markdownify }}
