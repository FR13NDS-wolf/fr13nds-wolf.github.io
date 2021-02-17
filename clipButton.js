!(function(e, t, a) {
    /* code */
    var initCopyCode = function() {
        var copyHtml = "";
        copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
        copyHtml +=
            '<i class="fa fa-copy"></i><i class="fa fa-check"></i>';
        copyHtml += "</button>";
        $(".highlight .code pre").after(copyHtml);
        new ClipboardJS(".btn-copy", {
            target: function(trigger) {
                return trigger.previousElementSibling;
            }
        });
    };
    initCopyCode();
})(window, document);
