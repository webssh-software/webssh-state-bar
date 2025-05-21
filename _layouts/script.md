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
You will find the needed capabilities for this script to run in the table below. When a capability is not marked as "safe", it means that the script may run in a way that could be unsafe for your system. If level is NOT above "Warning" (eg. "Dangerous"), it may be considered as "acceptable" because it SEEMS to be safe, but it is NOT guaranteed. Please read the script carefully BEFORE running it.
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
