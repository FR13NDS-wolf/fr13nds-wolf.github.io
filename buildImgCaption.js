!(function(e, t, a) {
    function buildImgCaption() {
        var images = $(".content").find("article img");
        images.each(function() {
            var caption = $(this).attr("alt");
            var figcaption = caption;
            if (caption.length) {
                var pat1 = /^-w(\S*)\s*(\S*)/g;
                var pat2 = /(.*)\s*@2x/g;
                if (pat1.test(caption)) {
                    console.log("mweb格式图片，目标尺寸", RegExp.$1);
                    $(this).css("width", RegExp.$1 + "px");
                    figcaption = RegExp.$2;
                } else if (pat2.test(caption)) {
                    var width = $(this).init()[0].naturalWidth / 2;
                    console.log("retina图片，目标尺寸", width);
                    $(this).css("width", width + "px");
                    figcaption = RegExp.$1;
                }
                if (figcaption.length > 0) {
                    $(".content")
                        .find("[alt='" + caption + "']")
                        .parent()
                        .append(
                            '<p class="image-caption">' + figcaption + "</p>"
                        );
                }
            }
        });
    }
    buildImgCaption();
})(window, document);
