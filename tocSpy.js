function scrollSpy(menuSelector, options) {
    var menu = $(menuSelector);
    if (!menu) return;
    options = options || {};
    var offset = options.offset || 0;
    var activeClassName = "active";

    var scollTarget = $(".content :header").find("a.headerlink"),
        lastId = null,
        active = $();

    $(window).scroll(function() {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + offset;

        // Get id of current scroll item
        var id =
            scollTarget
                .filter(function() {
                    return $(this).offset().top < fromTop;
                })
                .last()
                .parent()
                .attr("id") || "";

        if (lastId !== id) {
            active.removeClass(activeClassName);
            var newActive = [];

            for (
                var target = menu.find("[href='#" + id + "']");
                target.length && !target.is(menu);
                target = target.parent()
            ) {
                if (target.is("li")) newActive.push(target[0]);
            }
            active = $(newActive)
                .addClass(activeClassName)
                .trigger("scrollspy");
            lastId = id;
        }
    });
}

function tocSpy(offset = 200) {
    var tocContainer = $("#toc");
    var toc = tocContainer,
        tocHeight = toc.height();
    scrollSpy(tocContainer, {
        offset: offset
    });

    $(".toc-item").on("scrollspy", function() {
        var tocTop = toc.scrollTop(),
            link = $(this).children(".toc-link"),
            thisTop = link.position().top;
        // make sure the highlighted element contains no child
        if ($(this).height() != link.height()) return;
        // if the highlighted element is above current view of toc
        if (thisTop <= 0) toc.scrollTop(tocTop + thisTop);
        // else if below current view of toc
        else if (tocHeight <= thisTop)
            toc.scrollTop(tocTop + thisTop + link.outerHeight() - tocHeight);
    });
}

tocSpy();
