(function()
{
    if (Alfresco.DocumentList)
    {
        YAHOO.Bubbling.fire("registerRenderer",
            {
                propertyName: "absoluteDate",
                renderer: function dk_magenta_absolute_date_renderer(record, label)
                {
                    var jsNode = record.jsNode,
                        properties = jsNode.properties,
                        html = "";
                    var dateI18N = "modified", dateProperty = properties.modified.iso8601;
                    if (record.workingCopy && record.workingCopy.isWorkingCopy)
                    {
                        dateI18N = "editing-started";
                    }
                    else if (dateProperty === properties.created.iso8601)
                    {
                        dateI18N = "created";
                    }

                    html = '<span class="item">' + label + this.msg("details." + dateI18N + "-by",  Alfresco.util.formatDate(dateProperty), Alfresco.DocumentList.generateUserLink(this, properties.modifier)) + '</span>';

                    return html;
                }
            });
    }
})();