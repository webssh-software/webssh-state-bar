---
layout: post
---

{% capture script_layout %}
<kbd><a href="websshstatebar-import://raw.githubusercontent.com/webssh-software/webssh-state-bar/refs/heads/main/{{ page.path }}"> Import this State Bar Item to WebSSH</a></kbd>

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

{% assign capability_levels = "ssh_exec:warning,ssh_isConnected:safe,vars_get:safe,vars_set:safe" | split: "," %}
<h3>Needed Capabilities</h3>
The table below lists the capabilities required for this script to operate.
Capabilities marked as “Safe” are generally considered secure.
Capabilities with a “Warning” level indicate that, while they are typically acceptable, their safety cannot be fully guaranteed in all scenarios.
For your peace of mind, we recommend reviewing the script before running it.
<table>
  <thead>
    <tr>
      <th style="text-align:left;">Capability</th>
      <th style="text-align:left;">Safety Level</th>
    </tr>
  </thead>
  <tbody>
    {% for capability in page.capabilities %}
      {% assign level = "unknown" %}
      {% for mapping in capability_levels %}
        {% assign parts = mapping | split: ":" %}
        {% if parts[0] == capability %}
          {% assign level = parts[1] %}
        {% endif %}
      {% endfor %}
      <tr>
        <td><code>{{ capability }}</code></td>
        <td>
          {% case level %}
            {% when "safe" %}<span style="font-size:1.2em;">🟢</span> Safe
            {% when "warning" %}<span style="font-size:1.2em;">🟠</span> Warning
            {% when "dangerous" %}<span style="font-size:1.2em;">🔴</span> Dangerous
            {% else %}<span style="font-size:1.2em;">⚪</span> Unknown
          {% endcase %}
        </td>
      </tr>
    {% endfor %}
  </tbody>
</table>

{% if content %}
## Additional Information
{{ content }}
{% endif %}

{% endcapture %}
{{ script_layout | markdownify }}
