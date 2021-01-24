


function sbNotification() {
    $(document).on("click", ".sb-vi-alert button", function () {
        var t = $(this).parents(".sb-vi-alert");
        t.fadeOut(500, function () {
            t.remove()
        })
    })
}

function dropHover() {
    $(".sb-vi-dropdown.onhover").each(function () {
        var t = $(this);
        t.hover(function () {
            t.addClass("open")
        }, function () {
            t.removeClass("open")
        })
    })
}(appVisitor = appVisitor || {}).utils = {},
    function (t) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))
    }(navigator.userAgent || navigator.vendor || window.opera),
    function (t) {
        t.fn.isScrolledIntoView = function (e) {
            var i = t(this)[0].getBoundingClientRect(),
                n = i.top,
                o = i.bottom;
            return e = e || 120, n >= 0 && (o < window.innerHeight - e || n < window.innerHeight - e)
        }
    }(jQuery), (appVisitor = appVisitor || {}).modules = appVisitor.modules || {}, appVisitor.modules.ConversionActionable = function () {
        function t() {}
        return t.prototype = {
            reportConversion: function () {
                this.$html.hasClass("ca-adwords") && window.goog_report_conversion(), this.$html.hasClass("ca-facebook") && window.fbq("track", "Lead")
            }
        }, t
    }(), (appVisitor = appVisitor || {}).modules = appVisitor.modules || {}, appVisitor.modules.GaEventable = function () {
        function t() {}
        return t.prototype = {
            setGaEvent: function (t, e) {
                this.gaEvent = t, "function" == typeof e && e()
            },
            sendGaEvent: function (t) {
                if (!this.gaEvent || !appVisitor.sendGaEvents) return !1;
                ga("send", "event", $.extend({}, this.gaEvent, t || {}))
            }
        }, t
    }();
var appVisitor = appVisitor || {};
jQuery.fn.animateElement = function (t) {
        var e = t.type,
            i = this;
        i.hasClass("animated") || i.css("-webkit-animation-duration", t.duration + "ms").css("animation-duration", t.duration + "ms").addClass("animated " + e).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            i.removeClass(e), ImageQueries.refresh(i)
        })
    }, appVisitor.Animations = function () {
        function t() {}
        var e = {
            type: "fadeIn",
            duration: 200,
            delay: 0
        };
        return $.fn.getAnimationOptions = function () {
            var t = $(this).data("animation-options");
            return $.extend(e, t)
        }, t.init = function (t) {
            if (!jQuery.browser.mobile) {
                var e = appVisitor.Animations.getAnimatedElements(t);
                appVisitor.Animations.initAnimationsListenner(e), $(window).scroll()
            }
        }, t.initAnimationsListenner = function (t) {
            var e = !1;
            $(window).on("resize scroll", function () {
                e || (e = setTimeout(function () {
                    elementsToAnimate = appVisitor.Animations.getVisibleAnimatedElements(t), appVisitor.Animations.animateElements(elementsToAnimate), e = !1
                }, 200))
            }), $(window).on("beforeChange.slick", function (t, e) {
                appVisitor.Animations.restoreElementsFromHTML(e.$slider)
            }), $(window).on("afterChange.slick", function (t, e, i) {
                setTimeout(function () {
                    $currentSlide = $(e.$slides[i]), appVisitor.Animations.animateElementsFromHTML($currentSlide)
                }, 400)
            })
        }, t.animateElementsFromHTML = function (t) {
            elementsToAnimate = appVisitor.Animations.getAnimatedElements(t), appVisitor.Animations.animateElements(elementsToAnimate)
        }, t.restoreElementsFromHTML = function (t) {
            elementsToRestore = appVisitor.Animations.getAnimatedElements(t), appVisitor.Animations.restoreElements(elementsToRestore)
        }, t.getAnimatedElements = function (t) {
            return t === undefined && (t = $("body")), t.find(".sb-display-animated")
        }, t.getVisibleAnimatedElements = function (t) {
            return result = [], t.each(function () {
                var t = $(this);
                t.isScrolledIntoView() && result.push(t)
            }), result
        }, t.animateElements = function (t) {
            $.each(t, function (t, e) {
                var i = $(e);
                if (!i.hasClass("animated")) {
                    var n = i.getAnimationOptions();
                    setTimeout(function () {
                        var t = i.getAnimationOptions();
                        i.animateElement(t)
                    }, n.delay)
                }
            })
        }, t.restoreElements = function (t) {
            $.each(t, function (t, e) {
                var i = $(e),
                    n = i.getAnimationOptions();
                i.removeClass("animated " + n.type)
            })
        }, t.prototype = {}, t
    }(), (appVisitor = appVisitor || {}).BackToTop = function () {
        function t(t) {
            1 === t.length && (this.$html = t)
        }
        return t.prototype = {
            init: function () {
                var t = 500,
                    e = this;
                e.$html && e.$html.on("click", function () {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 200)
                }), $(window).scroll(function () {
                    $(window).scrollTop() > t ? e.$html.show() : e.$html.hide()
                })
            }
        }, t
    }(), (appVisitor = appVisitor || {}).CookiesUsage = function () {
        function t() {
            this.init()
        }
        return t.prototype = {
            init: function () {
                this.events()
            },
            events: function () {
                var t = $("#cookies-usage-message");
                t.on("click", "button", function () {
                    var e = $(this);
                    e.hasClass("refuse") ? utils.cookies.create("accept_cookies_usage", !1, 8760) : utils.cookies.create("accept_cookies_usage", !0, 8760), e.hasClass("allow") || e.hasClass("refuse") ? window.location.reload() : t.fadeOut("fast")
                })
            }
        }, t
    }(), DeviceQueries = function () {
        function t() {}
        return t.tactilClass = "tactil-device", t.init = function () {
            t.isTactilDevice() ? $("body").addClass(t.tactilClass) : $("body").removeClass(t.tactilClass)
        }, t.isTactilDevice = function () {
            var t = navigator.userAgent.toLowerCase();
            return !!(Modernizr.touch || t.match(/(iphone|ipod|ipad)/) || t.match(/(android)/) || t.match(/(iemobile)/) || t.match(/iphone/i) || t.match(/ipad/i) || t.match(/ipod/i) || t.match(/blackberry/i) || t.match(/bada/i))
        }, t
    }(), $(document).on("ready page:load", function () {
        DeviceQueries.init()
    }), (appVisitor = appVisitor || {}).ElementAlbum = function () {
        function t(t) {
            this.$html = t, this.items = [], this.albumId = this.$html.data("id"), this.init()
        }
        return t.prototype = {
            init: function () {
                this._getItems(), this.events(), hash = this._parseHash(), hash.gid && hash.gid == this.albumId && hash.pid && /album-\d+/.test(hash.pid) && this.$html.find("figure").eq(parseInt(hash.pid.match(/\d+/)[0]) - 1).trigger("click"), this._initPlugins()
            },
            events: function () {
                var t = this,
                    e = $(".pswp")[0];
                this.$html.on("click", "figure a.album-image-link", function (i) {
                    i.preventDefault();
                    var n = $(this);
                    utils.require([assets.photoswipe], function () {
                        appVisitor.headerMobile && (appVisitor.headerMobile.disabled = !0), $("body").addClass("no-scroll");
                        var i = n.data("pswp-index"),
                            o = {
                                galleryUID: t.albumId,
                                index: i,
                                showHideOpacity: !0,
                                shareButtons: [{
                                    id: "facebook",
                                    label: "Partager sur Facebook",
                                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                                }, {
                                    id: "twitter",
                                    label: "Tweeter",
                                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                                }, {
                                    id: "pinterest",
                                    label: "Pin it",
                                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                                }]
                            };
                        t.pswp = new PhotoSwipe(e, PhotoSwipeUI_Default, t.items, o), t.pswp.listen("close", function () {
                            $("body").removeClass("no-scroll"), appVisitor.headerMobile && (appVisitor.headerMobile.disabled = !1)
                        }), t.pswp.init()
                    })
                }).on("sb.albums.refresh", function () {
                    t._refreshPlugins()
                })
            },
            _initPlugins: function () {
                var t = this.$html.find(".album-container");
                t.data("js-plugin");
                if (t.hasClass("flex-images")) t.show().flexImages({
                    container: ".item",
                    rowHeight: 220
                });
                else if (t.hasClass("vertical-images")) t.show().imagesLoaded(function () {
                    t.masonry({
                        itemSelector: ".item",
                        gutter: 2,
                        percentPosition: !0
                    })
                });
                else if (t.hasClass("slider-images")) {
                    var e = {
                        autoplay: !0,
                        draggable: !1,
                        centerMode: !0,
                        infinite: !0,
                        speed: 400,
                        centerPadding: "0",
                        autoplaySpeed: 3e3,
                        swipe: !0,
                        touchMove: !0,
                        dots: !1,
                        mobileFirst: !0,
                        respondTo: "slider",
                        slidesToShow: 1,
                        fade: !0,
                        arrows: !0,
                        prevArrow: '<button type="button" class="arrow arrow-left"><span class="fa fa-chevron-left"></span></button>',
                        nextArrow: '<button type="button" class="arrow arrow-right"><span class="fa fa-chevron-right"></span></button>'
                    };
                    t.slick(e).show()
                } else t.show()
            },
            _refreshPlugins: function () {
                var t = this.$html.find(".album-container");
                t.data("refreshed-plugins") || (t.data("refreshed-plugins", !0), t.hasClass("vertical-images") && t.masonry())
            },
            _parseHash: function () {
                var t = window.location.hash.substring(1),
                    e = {};
                if (t.length < 5) return e;
                for (var i = t.split("&"), n = 0; n < i.length; n++)
                    if (i[n]) {
                        var o = i[n].split("=");
                        o.length < 2 || (e[o[0]] = o[1])
                    } return e.gid && (e.gid = parseInt(e.gid, 10)), e
            },
            _getItems: function () {
                var t = this;
                this.$html.find("a.album-image-link").each(function (e) {
                    var i = $(this),
                        n = i.attr("href"),
                        o = i.data("caption"),
                        s = i.data("size").split("x"),
                        r = s[0],
                        a = s[1];
                    i.data("pswp-index", e);
                    var l = {
                        src: n,
                        w: r,
                        h: a,
                        el: i[0],
                        title: o,
                        pid: "album-" + (e + 1)
                    };
                    t.items.push(l)
                })
            }
        }, t
    }(), (appVisitor = appVisitor || {}).ElementBlogLastArticle = function () {
        function t(t) {
            this.$html = t, this.$slider = this.$html.find(".element-blog-element-last-article-item-slick")
        }
        return t.defaultOptions = {
            autoplay: !0,
            draggable: !1,
            centerMode: !0,
            infinite: !0,
            speed: 400,
            centerPadding: "0",
            swipe: !1,
            touchMove: !0,
            dots: !1,
            mobileFirst: !0,
            respondTo: "slider"
        }, t.prototype = {
            getViewType: function () {
                return this.$slider.data("view-type")
            },
            getSliderOptions: function (e) {
                var i = {};
                return this.totalArcticles = parseInt(this.$slider.data("total-articles")), "slide" == e && (i.slidesToShow = parseInt(this.$slider.data("articles-per-slide")), i.slidesToScroll = 1, i.autoplaySpeed = 4e3, i.arrows = !0, i.prevArrow = '<button type="button" class="arrow arrow-left fa fa-chevron-left"></button>', i.nextArrow = '<button type="button" class="arrow arrow-right fa fa-chevron-right"></button>', i.slidesToShow && (i.slidesToShow = i.slidesToShow > this.totalArcticles ? this.totalArcticles : i.slidesToShow, i.responsive = [{
                    breakpoint: 768,
                    settings: {
                        centerPadding: "0",
                        slidesToShow: i.slidesToShow
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        autoplay: !1,
                        arrows: !0,
                        centerPadding: "0",
                        slidesToShow: i.slidesToShow > 2 ? 3 : i.slidesToShow
                    }
                }, {
                    breakpoint: 100,
                    settings: {
                        autoplay: !1,
                        arrows: !0,
                        centerMode: !0,
                        centerPadding: "0",
                        slidesToShow: 1
                    }
                }])), $.extend(t.defaultOptions, i)
            },
            classesEvent: function () {
                var t = this.$html.find(".view-normal");
                if (t.length) {
                    var e = t.find(".article-read-more a");
                    $(window).on("resize", function () {
                        $(window).width() <= 499 ? e.addClass("sb-vi-btn skin_1") : e.removeClass("sb-vi-btn skin_1")
                    })
                }
            },
            init: function () {
                var t = this.getViewType(),
                    e = this.getSliderOptions(t);
                this.$slider.length && this.totalArcticles > 1 && this.$slider.slick(e), this.classesEvent()
            }
        }, t
    }(), (appVisitor = appVisitor || {}).ElementBusinessHours = function () {
        function t(t) {
            this.$html = t, this.highlightCurrentDay()
        }
        return t.prototype = {
            highlightCurrentDay: function () {
                var t = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][(new Date).getDay()];
                this.$html.find(".element-hours-day." + t).addClass("current-day")
            }
        }, t
    }(), (appVisitor = appVisitor || {}).ElementFile = function () {
        function t(t) {
            this.$html = t
        }
        return t.prototype = {
            init: function () {
                var t = this;
                t.$html.find("tr.clickable-tr").length && t.$html.find("tr.clickable-tr").on("click", function () {
                    var t = $(this).data("link");
                    window.open(t, "_blank")
                })
            }
        }, t
    }(), (appVisitor = appVisitor || {}).ElementForm = function () {
        function t(t) {
            this.$html = t, this.$form = t.find("form").first(), this.loader = new appVisitor.LoadingLoader(this.$html), this.uploaders = [], this.hasAttachments = !1
        }
        return utils.include(t, appVisitor.modules.GaEventable), utils.include(t, appVisitor.modules.ConversionActionable), t.initObject = function (t) {
            return t.hasClass("element-lead-generation-form") ? new appVisitor.ElementLeadGenerationForm(t) : new appVisitor.ElementForm(t)
        }, $.extend(t.prototype, {
            init: function () {
                var t = this;
                this.initUploaders(), this.setGaEvent(this.$form.data("ga-event"), function () {
                    t.$form.one("focus", "input, textarea", function () {
                        t.sendGaEvent({
                            eventAction: "Focus"
                        })
                    })
                }), this.$form.submit(function () {
                    return t.submit(), !1
                }), this.$html.on("sb.uploaders.uploadInProgress", function () {
                    t.$form.find("button[type=submit]").prop("disabled", !0)
                }).on("sb.uploaders.uploadFinished", function () {
                    var e = !0;
                    $.each(t.uploaders, function () {
                        if (this.uploadInProgress || this.uploadErrors) return e = !1, !1
                    }), e && t.$form.find("button[type=submit]").prop("disabled", !1)
                }).on("sb.uploaders.uploadFailed", function () {
                    t.$form.find("button[type=submit]").prop("disabled", !0)
                })
            },
            submitSuccess: function () {
                var t = this,
                    e = t.$html.find(".sb-vi-ajax-callback.success");
                t.formSubmissionId = null, t.loader.finish(function () {
                    e.fadeIn("fast")
                })
            },
            submitError: function (t) {
                var e = this,
                    i = e.$html.find(".sb-vi-ajax-callback.server-error");
                t ? e.loader.finish(function () {
                    i.fadeIn("fast", function () {
                        setTimeout(function () {
                            i.fadeOut("fast")
                        }, 2e3)
                    })
                }) : e.loader.finish()
            },
            clearForm: function () {
                this.$html.find(".sb-vi-input-text, .sb-vi-input-textarea, .sb-vi-input-email, .sb-vi-input-tel, .sb-vi-input-date, .sb-vi-input-time").val("").removeClass("invalid").end().find(".error").remove(), this.initUploaders()
            },
            addUploader: function (t) {
                var e = ".upload-file-container",
                    i = t.find(e).find("a"),
                    n = this;
                return t.data("uploader-initialized", !0), new Uploader(t, {
                    data: {
                        input_name: t.data("input-name")
                    },
                    containers: {
                        button: e
                    },
                    plupload: {
                        browse_button: i[0],
                        filters: {
                            mime_types: [{
                                title: "Fichiers",
                                extensions: t.data("extensions")
                            }]
                        },
                        multi_selection: !1,
                        url: appVisitor.apiRoutePrefixPath + "/api_website_feature/form_submission_files",
                        max_file_size: "5mb"
                    },
                    progress: {
                        progressbar: ".form-input-file-progressbar"
                    },
                    callbacks: {
                        filesAdded: function (e, i) {
                            if ($.isArray(i)) {
                                var n = i[0];
                                this.uploadErrors = !1, this.$preview && this.$preview.hide().find(this.config.removeFile).click(), this.uploader.files.length > 1 && this.uploader.splice(0, 1), this.$preview = $(this.view.find(".file-template").html().trim()).clone(), this.$preview.attr("id", n.id).find(this.config.progress.progressbar).css("width", 0).end().find(".form-input-file-name span").text(n.name).end().find("input[name*=" + t.data("input-name") + "]").val(n.name).end().show().appendTo(t.find(".form-input-file-preview-wrapper"))
                            }
                        },
                        uploadProgress: function (t, e) {
                            var i = e.percent + "%";
                            this.$preview.find(this.config.progress.progressbar).css("width", i), this.uploadInProgress || (this.uploadInProgress = !0, n.$html.trigger("sb.uploaders.uploadInProgress"))
                        },
                        fileUploaded: function (t, e, i) {
                            var o = this,
                                s = o.$preview.closest(".form-one-object");
                            this.uploadInProgress = !1, n.$html.trigger("sb.uploaders.uploadFinished"), s.find(".error").remove(), i.response ? o.$preview.find(this.config.removeFile).data("form-submission-file-id", i.form_submission_file_id).end().find("input[name*=form_submission_file_ids]").val(i.form_submission_file_id) : i.errors && (this.uploadErrors = !0, n.submitError(), $.each(i.errors, function (t, e) {
                                $('<span class="error">' + e[0] + "</span>").appendTo(s.find("label"))
                            }), n.$html.trigger("sb.uploaders.uploadFailed"))
                        },
                        removingFile: function (t, e) {
                            var i = this,
                                o = e.closest(".form-input-file-preview"),
                                s = function () {
                                    t.removeFile(o.attr("id")), o.remove(), i.uploadErrors = !1, i.uploadInProgress = !1, n.$html.trigger("sb.uploaders.uploadFinished")
                                };
                            e.length && e.data("form-submission-file-id") ? $.post(appVisitor.apiRoutePrefixPath + "/api_website_feature/form_submission_files/" + e.data("form-submission-file-id"), {
                                _method: "DELETE"
                            }, function () {
                                s()
                            }).error(function () {
                                alert("Error")
                            }) : s()
                        },
                        error: function (e, i) {
                            if (i.code == plupload.FILE_SIZE_ERROR) {
                                i = {};
                                var o = "fr-FR" == navigator.language ? "La taille du fichier ne doit pas d\xe9passer " + this.config.plupload.max_file_size.replace(/(\d+)(mb)/, "$1Mo") : "The file size cannot exceed " + this.config.plupload.max_file_size;
                                i[t.data("input-name")] = [o], n.showErrors(i)
                            }
                        }
                    }
                })
            },
            initUploaders: function () {
                var t = this;
                this.$html.find(".form-input-file").each(function () {
                    var e = $(this);
                    e.find(".form-input-file-preview").hide().find(".form-input-file-name span").text("").end().find(".form-input-file-progressbar").css("width", 0), e.data("uploader-initialized") || t.uploaders.push(t.addUploader(e))
                })
            },
            submit: function () {
                $("body").trigger("sb.forms.submitting"), this.sendGaEvent({
                    eventAction: "Soumission en cours"
                });
                var t = this,
                    e = this.$form.serialize(),
                    i = this.$form.attr("action"),
                    n = !0;
                if ($.each(this.uploaders, function () {
                        if (this.uploadErrors) return n = !1, !1
                    }), !n) return !1;
                this.loader.loading(), $.ajax({
                    method: "POST",
                    url: i,
                    data: e,
                    dataType: "JSON",
                    success: function (e) {
                        e.response ? (t.submitSuccess(), t.clearForm(), $("body").trigger("sb.forms.submitted"), t.sendGaEvent({
                            eventAction: "Soumission r\xe9ussie"
                        }), t.reportConversion(), e.popup_path && appVisitor.Popup.initFromPath(e.popup_path, t.$form.find("button[type=submit]")), e.redirect_url && (window.location = e.redirect_url)) : (e.errors && (t.sendGaEvent({
                            eventAction: "Soumission \xe9chou\xe9e"
                        }), t.showErrors(e.errors)), t.submitError())
                    },
                    error: function () {
                        t.submitError(!0)
                    }
                })
            },
            showErrors: function (t) {
                var e = this,
                    i = null;
                this.$html.find(".error").remove().end().find(".invalid").removeClass("invalid"), $.each(t, function (t, n) {
                    var o = e.$html.find("*[name*=" + t + "]:first, *[data-input-name=" + t + "]:first"),
                        s = $('<span class="error"><small>' + n[0] + "</small></span>");
                    if (o.length) {
                        var r = o.closest(".form-one-object"),
                            a = r.find("label:first");
                        !i && r.length && (i = r), o.addClass("invalid"), a.length ? s.appendTo(a) : r.length ? s.prependTo(r) : o.is(":checkbox") ? s.insertBefore(o.closest("label")) : s.addClass("global-error").prependTo(e.$form)
                    }
                }), i && $("html, body").animate({
                    scrollTop: i.offset().top
                }, 500)
            }
        }), t
    }(), (appVisitor = appVisitor || {}).ElementImage = function () {
        function t(t) {
            this.$html = t, this.items = [], this.imageId = this.$html.attr("id").match(/\d+/)[0], this.init()
        }
        return t.prototype = {
            init: function () {
                this._getItems(), this.events(), hash = this._parseHash(), hash.gid && hash.gid == this.imageId && hash.pid && !/album-\d+/.test(hash.pid) && this.$html.trigger("click")
            },
            events: function () {
                var t = this,
                    e = $(".pswp")[0];
                this.$html.on("click", function (i) {
                    i.preventDefault();
                    var n = $(this);
                    utils.require([assets.photoswipe], function () {
                        appVisitor.headerMobile && (appVisitor.headerMobile.disabled = !0), $("body").addClass("no-scroll");
                        var i = n.index(),
                            o = {
                                galleryUID: t.imageId,
                                index: i,
                                showHideOpacity: !0,
                                shareButtons: [{
                                    id: "facebook",
                                    label: "Partager sur Facebook",
                                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                                }, {
                                    id: "twitter",
                                    label: "Tweeter",
                                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                                }, {
                                    id: "pinterest",
                                    label: "Pin it",
                                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                                }, {
                                    id: "download",
                                    label: "T\xe9l\xe9charger l'image",
                                    url: "{{raw_image_url}}",
                                    download: !0
                                }]
                            };
                        t.pswp = new PhotoSwipe(e, PhotoSwipeUI_Default, t.items, o), t.pswp.listen("close", function () {
                            $("body").removeClass("no-scroll"), appVisitor.headerMobile && (appVisitor.headerMobile.disabled = !1)
                        }), t.pswp.init()
                    })
                })
            },
            _parseHash: function () {
                var t = window.location.hash.substring(1),
                    e = {};
                if (t.length < 5) return e;
                for (var i = t.split("&"), n = 0; n < i.length; n++)
                    if (i[n]) {
                        var o = i[n].split("=");
                        o.length < 2 || (e[o[0]] = o[1])
                    } return e.gid && (e.gid = parseInt(e.gid, 10)), e
            },
            _getItems: function () {
                var t = this;
                this.$html.find("a").each(function () {
                    var e = $(this),
                        i = e.attr("href"),
                        n = e.data("size").split("x"),
                        o = {
                            src: i,
                            w: n[0],
                            h: n[1],
                            title: e.data("legend"),
                            el: e[0]
                        };
                    t.items.push(o)
                })
            }
        }, t
    }(), (appVisitor = appVisitor || {}).ElementLeadGenerationForm = function (t) {
        function e() {
            return t.apply(this, arguments)
        }
        return utils.extend(e, t), $.extend(e.prototype, {
            init: function () {
                e.__super__.init.call(this, arguments), this.initSelectize(), this.searchCity(), this.events()
            },
            initSelectize: function () {
                var t = this.$html.find(".selectize");
                t.length && t.selectize()
            },
            searchCity: function () {
                var t = this.$html.find(".zipcode"),
                    e = t.data("ajax-url"),
                    i = t.data("searching-city-text"),
                    n = $(".city-container"),
                    o = this;
                e && this.$html.on("input propertychange", ".zipcode", function () {
                    var t = $(this).val();
                    /^\d{5}$/.test(t) ? (o.loader.loading(i), $.get(e, {
                        zipcode: t
                    }, function (t) {
                        if (o.loader.finish(), t.response) {
                            var e = $(t.html);
                            n.find(".city").html(e).end().show(), e.hasClass("selectize") && e.selectize()
                        } else t.message && alert(t.message)
                    })) : n.hide().find("input").prop("disabled", !0)
                })
            },
            events: function () {
                var t = this,
                    e = t.$html.find("select#tool_elements_lead_generation_form_submission_qualification_organization_type"),
                    i = t.$html.find("select#tool_elements_lead_generation_form_submission_qualification_company_size"),
                    n = t.$html.find("select#tool_elements_lead_generation_form_submission_qualification_association_size"),
                    o = t.$html.find("#tool_elements_lead_generation_form_submission_qualification_activity_category"),
                    s = t.$html.find("input[name='tool_elements_lead_generation_form_submission[qualification_has_website]']"),
                    r = t.$html.find("#tool_elements_lead_generation_form_submission_qualification_current_website");
                e.on("change", function () {
                    var t = $(this).val();
                    switch (i.prop("disabled", !0).closest(".sb-vi-form-group").hide(), n.prop("disabled", !0).closest(".sb-vi-form-group").hide(), o.closest(".sb-vi-form-group").fadeIn(), o.siblings(".sb-vi-result-autocompletion").first().find("li[data-value=" + t + "]").trigger("click"), t) {
                        case "individual":
                            o.val("other").trigger("change");
                            break;
                        case "company":
                            i.prop("disabled", !1).closest(".sb-vi-form-group").fadeIn("fast");
                            break;
                        case "association":
                            n.prop("disabled", !1).closest(".sb-vi-form-group").fadeIn("fast"), o.val("association").trigger("change");
                            break;
                        case "public_entity":
                            o.val("public_entity").trigger("change")
                    }
                }), s.length && r.length && s.on("change", function () {
                    "true" == $(this).val() ? r.closest(".sb-vi-form-group").fadeIn("fast") : r.closest(".sb-vi-form-group").hide()
                }), t.$html.on("change", "input", function () {
                    var t = $(this),
                        e = t.closest(".form-one-object");
                    e && e.hasClass("invalid") && ("" != t.val() || t.is(":checked")) && e.removeClass("invalid").find(".error").remove().end().find(".invalid").removeClass("invalid")
                })
            },
            showErrors: function (t) {
                var e = this,
                    i = null;
                this.$html.find(".error").remove(), this.$html.find(".invalid").removeClass("invalid"), $.each(t, function (t, n) {
                    var o = e.$html.find("*[name*=" + t + "]:first, *[data-input-name=" + t + "]:first"),
                        s = $('<span class="error"><i class="fa fa-exclamation-circle"></i><small>' + n[0] + "</small></span>");
                    if (o.length) {
                        var r = o.closest(".form-one-object");
                        r.find("label:first");
                        !i && r.length && (i = r), r.addClass("invalid"), o.addClass("invalid"), r.length ? s.appendTo(r) : o.is(":checkbox") ? s.insertBefore(o.closest("label")) : s.addClass("global-error").prependTo(e.$form)
                    }
                }), i && $("html, body").animate({
                    scrollTop: i.offset().top
                }, 500)
            }
        }), e
    }(appVisitor.ElementForm), (appVisitor = appVisitor || {}).ElementMap = function () {
        function t(t) {
            this.$html = t
        }
        return t.prototype = {
            getZoom: function () {
                return parseInt(this.$html.data("zoom"))
            },
            getScroll: function () {
                var t = this.$html.data("scroll");
                return t === undefined || !0 === t
            },
            getFullAdress: function () {
                return this.$html.data("full-adress")
            },
            init: function () {
                var t = this,
                    e = t.$html.data("google-maps-url");
                e && utils.require([e], function () {
                    t._init()
                })
            },
            _init: function () {
                var t = {
                    options: {
                        zoom: this.getZoom() || 15,
                        scrollwheel: this.getScroll(),
                        draggable: !DeviceQueries.isTactilDevice(),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }
                };
                !1 === t.options.scrollwheel && (t.options = $.extend({}, t.options, {
                    navigationControl: !1,
                    scaleControl: !1
                })), this._initMap(t), DeviceQueries.isTactilDevice() && this.$html.wrap('<a href="https://maps.apple.com/maps?q=' + this.getFullAdress() + '">')
            },
            _initMap: function (t) {
                this.map = new google.maps.Map(this.$html[0], t.options);
                var e = this;
                this._setMarkers(), this._setItinerary(), this._fitBounds(), this.$html.parent().find(".enlarge-map").show(), $("body").on("sb.containers.resizing", function () {
                    setTimeout(function () {
                        google.maps.event.trigger(e.map, "resize"), e._fitBounds()
                    }, 100)
                })
            },
            _setMarkers: function () {
                this.bounds = new google.maps.LatLngBounds, this.markers = this.$html.data("markers") || [];
                var t = new google.maps.InfoWindow,
                    e = this;
                $.each(this.markers, function (i, n) {
                    n.icon && (n.icon = {
                        url: n.icon,
                        scaledSize: new google.maps.Size(40, 40)
                    });
                    var o = {
                        position: new google.maps.LatLng(n.position[0], n.position[1]),
                        icon: n.icon,
                        map: e.map
                    };
                    e._displayInfoWindow() && (o.content = n.content), n.icon && (o.icon = n.icon);
                    n = new google.maps.Marker(o);
                    e.bounds.extend(n.getPosition()), e._displayInfoWindow() && google.maps.event.addListener(n, "click", function () {
                        t.setContent(this.content), t.open(e.map, this)
                    }), e.markers[i] = n
                })
            },
            _fitBounds: function () {
                1 == this.markers.length ? this.map.setCenter(this.markers[0].getPosition()) : this.map.fitBounds(this.bounds)
            },
            _displayInfoWindow: function () {
                return !!this.$html.data("display-info-window")
            },
            _setItinerary: function () {}
        }, t
    }(), (appVisitor = appVisitor || {}).ElementMapAdvanced = function (t) {
        function e() {
            return t.apply(this, arguments)
        }
        return utils.extend(e, t), $.extend(e.prototype, {
            init: function () {
                e.__super__.init.call(this, arguments)
            }
        }), e
    }(appVisitor.ElementMap), (appVisitor = appVisitor || {}).ElementMapItinerary = function (t) {
        function e() {
            return t.apply(this, arguments)
        }
        return utils.extend(e, t), $.extend(e.prototype, {
            _setItinerary: function () {
                if (2 == this.markers.length) {
                    var t = new google.maps.DirectionsService,
                        e = new google.maps.DirectionsRenderer;
                    e.setMap(this.map), this.$html.hasClass("with-itinerary-textual-directions") && e.setPanel(this.$html.siblings(".map-textual-directions")[0]), t.route({
                        origin: this.markers[0].getPosition(),
                        destination: this.markers[1].getPosition(),
                        travelMode: google.maps.TravelMode.DRIVING
                    }, function (t, i) {
                        i === google.maps.DirectionsStatus.OK ? e.setDirections(t) : window.alert("Impossible d'afficher les directions \xe0 cause de l'erreur " + i)
                    })
                }
            }
        }), e
    }(appVisitor.ElementMap), (appVisitor = appVisitor || {}).ElementMapStandard = function (t) {
        function e() {
            return t.apply(this, arguments)
        }
        return utils.extend(e, t), $.extend(e.prototype, {}), e
    }(appVisitor.ElementMap), (appVisitor = appVisitor || {}).ElementNewsletter = function () {
        function t(t, i) {
            this.$html = t, this.$form = this.$html.find("form"), this.config = $.extend({}, e, i), this.loader = new appVisitor.LoadingLoader(this.$html), this.init()
        }
        utils.include(t, appVisitor.modules.GaEventable);
        var e = {
            errors: "error"
        };
        return $.extend(t.prototype, {
            init: function () {
                this.events()
            },
            events: function () {
                var t = this;
                this.setGaEvent(this.$form.data("ga-event"), function () {
                    t.$form.one("focus", "input, textarea", function () {
                        t.sendGaEvent({
                            eventAction: "Focus"
                        })
                    })
                }), this.$html.on("submit", function (e) {
                    e.preventDefault();
                    $(this);
                    return t.loader.loading(), t.sendGaEvent({
                        eventAction: "Soumission en cours"
                    }), $.post(t.$form.attr("action"), t.$form.serialize(), function (e) {
                        1 == e.response ? (t._clean(), t.sendGaEvent({
                            eventAction: "Soumission r\xe9ussie"
                        }), t.$html.find(".sb-vi-ajax-callback.success").fadeIn(200), t.loader.finish()) : (t.loader.finish(), t.sendGaEvent({
                            eventAction: "Soumission \xe9chou\xe9e"
                        }), t._showErrors(e.errors))
                    }).fail(function () {
                        t.loader.finish()
                    }), !1
                })
            },
            _showErrors: function (t) {
                var e = this;
                this.$html.find("." + this.config.errors).remove(), $.each(t, function (t, i) {
                    var n = e.$html.find("input[name*=" + t + "]").closest(".sb-vi-form-group"),
                        o = $('<p class="' + e.config.errors + '">' + i[0] + "</p>");
                    n.length ? n.addClass("invalid").after(o) : o.prependTo(e.$form)
                })
            },
            _clean: function () {
                this.$form.find("." + this.config.errors).hide().end().find("input[type=text]").removeClass("invalid").val("")
            }
        }), t
    }(), (appVisitor = appVisitor || {}).ElementPartner = function () {
        function t(t) {
            this.$html = t, this.$slider = this.$html.find(".element-partner-item-slick")
        }
        return t.defaultOptions = {
            autoplay: !0,
            draggable: !1,
            centerMode: !0,
            infinite: !0,
            speed: 400,
            centerPadding: "0",
            autoplaySpeed: 3e3,
            swipe: !0,
            touchMove: !0,
            dots: !1,
            mobileFirst: !0,
            respondTo: "slider",
            slidesToShow: 1
        }, t.prototype = {
            getViewType: function () {
                return this.$slider.data("view-type")
            },
            getSliderOptions: function (e) {
                var i = this.$slider.data("admin-context"),
                    n = {};
                if (this.totalSlides = parseInt(this.$slider.data("total-slides")), "diaporama" == e) {
                    var o = parseInt(this.$slider.data("transition")),
                        s = Boolean(this.$slider.data("navigation")),
                        r = parseInt(this.$slider.data("partners-per-slide"));
                    i && (n.autoplay = !1, n.draggable = !1), 1 === o ? (n.fade = !0, n.swipe = !1) : 2 === o && (n.fade = !1, n.swipe = !0), s ? (n.arrows = !0, n.prevArrow = '<button type="button" class="arrow arrow-left fa fa-chevron-left"></button>', n.nextArrow = '<button type="button" class="arrow arrow-right fa fa-chevron-right"></button>') : n.arrows = !1, r && 1 != o ? (n.slidesToShow = r, n.responsive = [{
                        breakpoint: 768,
                        settings: {
                            centerPadding: "0",
                            slidesToShow: r
                        }
                    }, {
                        breakpoint: 500,
                        settings: {
                            arrows: !1,
                            centerPadding: "0",
                            slidesToShow: r > 2 ? 3 : r
                        }
                    }, {
                        breakpoint: 250,
                        settings: {
                            arrows: !1,
                            centerMode: !0,
                            centerPadding: "20px",
                            slidesToShow: 1
                        }
                    }]) : n.slidesToShow = 1
                } else if ("scrolling" == e) {
                    r = this.totalSlides > 3 ? 3 : this.totalSlides - 1;
                    n.arrows = !1, n.slidestoShow = r, n.responsive = [{
                        breakpoint: 768,
                        settings: {
                            arrows: !1,
                            centerMode: !0,
                            centerPadding: "0",
                            slidesToShow: r
                        }
                    }, {
                        breakpoint: 500,
                        settings: {
                            arrows: !1,
                            centerMode: !0,
                            centerPadding: "20px",
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 250,
                        settings: {
                            arrows: !1,
                            centerMode: !0,
                            centerPadding: "20px",
                            slidesToShow: 1
                        }
                    }]
                }
                return $.extend(t.defaultOptions, n)
            },
            init: function () {
                var t = this.getViewType(),
                    e = this.getSliderOptions(t);
                this.totalSlides > 1 && this.$slider.slick(e)
            }
        }, t
    }(), (appVisitor = appVisitor || {}).ElementReviewDisplay = function () {
        function t(t) {
            this.$html = t, this.$slider = this.$html.find(".slick"), this.reviewPerSlide = this.$slider.data("review-per-slide")
        }
        return t.defaultOptions = {
            autoplay: !0,
            draggable: !1,
            centerMode: !0,
            infinite: !0,
            centerPadding: "0",
            swipe: !1,
            touchMove: !0,
            dots: !1,
            mobileFirst: !0,
            respondTo: "slider"
        }, t.prototype = {
            initModalSummary: function () {
                var t = this;
                this.$reviews = this.$html.find(".review.truncate-comment"), this.$reviews.length >= 1 && (this.$buttons = this.$reviews.find(".element-review-read-more"), this.$buttons.on("click", function () {
                    $("body").addClass("no-scroll");
                    var e = $(this).closest(".review").find(".element-review-summary p").text();
                    return t.openModalSummary(e), !1
                }))
            },
            openModalSummary: function (t) {
                var e = $('<div class="element-review-summary-modal animated fadeIn">                          <div class="element-review-summary-modal-inner animated bounceInDown">                            <button><i class="fa fa-times"></i></button>                            <p>' + t + "</p>                          </div>                        </div>");
                $("body").append(e), e.find("button").on("click", function () {
                    e.removeClass("fadeIn").fadeOut(200, function () {
                        $(this).remove(), $("body").removeClass("no-scroll")
                    })
                })
            },
            getSliderOptions: function () {
                var e = {};
                return e.slidesToShow = this.reviewPerSlide, e.slidesToScroll = 1, e.autoplaySpeed = 3e3, e.arrows = !0, e.speed = 1 == this.reviewPerSlide ? 1e3 : 600, e.fade = 1 == this.reviewPerSlide, e.prevArrow = '<button type="button" class="arrow arrow-left fa fa-chevron-left"></button>', e.nextArrow = '<button type="button" class="arrow arrow-right fa fa-chevron-right"></button>', e.responsive = [{
                    breakpoint: 768,
                    settings: {
                        centerPadding: "0",
                        slidesToShow: this.reviewPerSlide
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        arrows: !0,
                        centerPadding: "0",
                        slidesToShow: this.reviewPerSlide > 1 ? 2 : 1
                    }
                }, {
                    breakpoint: 250,
                    settings: {
                        arrows: !0,
                        centerMode: !0,
                        centerPadding: "0",
                        slidesToShow: 1
                    }
                }], $.extend(t.defaultOptions, e)
            },
            init: function () {
                var t = this.getSliderOptions();
                this.$slider.length && this.$slider.slick(t), this.initModalSummary()
            }
        }, t
    }(), (appVisitor = appVisitor || {}).ElementReviewForm = function () {
        function t(t, i) {
            this.$html = t, this.$form = this.$html.find("form"), this.id = this.$html.data("id"), this.config = $.extend({}, e, i), this.stars = this.$html.find(this.config.stars), this.loader = new appVisitor.LoadingLoader(this.$html), this.$label = this.$html.find(this.config.label), this.initLabel = this.$label.text(), this.selected = null, this.choiceTimeout = null, this.init()
        }
        utils.include(t, appVisitor.modules.GaEventable);
        var e = {
            stars: "span[data-rate]",
            label: ".rate-label",
            rate: 'input[name="content_review[score]"]',
            errors: "error",
            state: {
                empty: "fa-star-o",
                fill: "fa-star"
            }
        };
        return $.extend(t.prototype, {
            init: function () {
                this.events(), this.$form.hasClass("with-image-upload") && this._initUploader()
            },
            events: function () {
                var t = this;
                this.setGaEvent(this.$form.data("ga-event"), function () {
                    t.$form.one("focus", "input, textarea", function () {
                        t.sendGaEvent({
                            eventAction: "Focus"
                        })
                    })
                }), this.stars.on({
                    mouseenter: function () {
                        var e = $(this);
                        clearTimeout(t.choiceTimeout), t._changeState(e), t._updateLabel(e.data("label"))
                    },
                    mouseout: function () {
                        t.choiceTimeout = setTimeout(function () {
                            t.selected ? t.selected.trigger("mouseenter") : t.stars.each(function () {
                                t._updateLabel(t.initLabel), t._updateStateClass($(this))
                            })
                        }, 100)
                    },
                    click: function () {
                        t.selected = $(this), t.$html.find(t.config.rate).val(t.selected.data("rate"))
                    }
                }), this.$html.on("submit", function (e) {
                    e.preventDefault();
                    var i = $(this);
                    return t.$form = i.find("form"), t.loader.loading(), t.sendGaEvent({
                        eventAction: "Soumission en cours"
                    }), $.post(t.$form.attr("action"), t.$form.serialize() + "&element_review_form=" + t.id, function (e) {
                        var i = function () {
                            t.loader.finish(), t.sendGaEvent({
                                eventAction: "Soumission r\xe9ussie"
                            }), t.$html.find(".sb-vi-ajax-callback.success").fadeIn(200)
                        };
                        1 == e.response ? t.hasImage ? (t.uploader.setData({
                            content_review_id: e.id
                        }), t.uploader.upload(function () {
                            i()
                        })) : i() : (t.loader.finish(), t.sendGaEvent({
                            eventAction: "Soumission \xe9chou\xe9e"
                        }), t._showErrors(e.errors))
                    }).fail(function () {
                        t.loader.finish()
                    }), !1
                })
            },
            _initUploader: function () {
                var t = this.$html,
                    e = ".upload-image-container",
                    i = t.find(e).find("a"),
                    n = this;
                this.uploader = new Uploader(t, {
                    containers: {
                        button: e
                    },
                    plupload: {
                        browse_button: i[0],
                        multi_selection: !1,
                        url: appVisitor.apiRoutePrefixPath + "/api_website_feature/content_reviews/upload_image"
                    },
                    progress: {
                        progressbar: ".form-input-image-progressbar"
                    },
                    callbacks: {
                        filesAdded: function (t, e) {
                            if ($.isArray(e)) {
                                var i = e[0],
                                    o = this.view.find(".form-input-image-preview");
                                n.hasImage = !0, o.find(this.config.progress.progressbar).css("width", 0).end().find(".form-input-image-name span").text(i.name).end().show()
                            }
                        },
                        uploadProgress: function (t, e) {
                            var i = this.view.find(".form-input-image-preview"),
                                n = e.percent + "%";
                            i.find(this.config.progress.progressbar).css("width", n)
                        },
                        fileUploaded: function (t, e, i) {
                            if (i.errors) this.view.find(".form-input-image-preview")
                        }
                    },
                    autoUpload: !1
                })
            },
            _changeState: function (t) {
                var e = this;
                t.prevAll(this.config.stars).add(t).each(function () {
                    e._updateStateClass($(this), !0)
                }), t.nextAll(this.config.stars).each(function () {
                    e._updateStateClass($(this))
                })
            },
            _updateStateClass: function (t, e) {
                var i = t.find("i")[0],
                    n = e ? this.config.state.fill : this.config.state.empty,
                    o = e ? new RegExp(this.config.state.empty) : new RegExp(this.config.state.fill + "(?!-)");
                i.className = i.className.replace(o, n)
            },
            _updateLabel: function (t) {
                this.$label.text(t)
            },
            _showErrors: function (t) {
                var e = this;
                this.$html.find("." + this.config.errors).remove(), $.each(t, function (t, i) {
                    var n = e.$html.find("[name*=" + t + "]:first, *[data-input-name=" + t + "]:first"),
                        o = n.closest(".sb-vi-form-group"),
                        s = $('<p class="' + e.config.errors + '">' + i[0] + "</p>");
                    n.addClass("invalid"), o.length ? o.find("label").append(s) : n.is(":checkbox") ? n.closest("label").before(s) : s.prependTo(e.$form)
                })
            }
        }), t
    }(), (appVisitor = appVisitor || {}).ElementRss = function () {
        function t(t) {
            this.$html = t, this.url = this.$html.data("rss-feeds-url")
        }
        return t.prototype = {
            init: function () {
                var t = this;
                t.url && $.get(t.url, function (e) {
                    1 == e.response && (t.$html.html(e.html), t.$html.find(".view-type-slideshow").length && t.initSlideShow())
                }, "json")
            },
            initSlideShow: function () {
                var t = this.$html.find(".view-type-slideshow"),
                    e = t.data("transition"),
                    i = {
                        dots: !1,
                        arrows: !1,
                        autoplay: !0,
                        slidesToShow: t.data("slide-to-show")
                    };
                "fade" === e ? (i.fade = !0, i.swipe = !1) : "slide" === e && (i.fade = !1, i.swipe = !0), t.slick(i)
            }
        }, t
    }(), (appVisitor = appVisitor || {}).ElementSbPricingTable = function () {
        function t(t) {
            1 === t.length && (this.$html = t)
        }
        return utils.include(t, appVisitor.modules.ConversionActionable), $.extend(t.prototype, {
            init: function () {
                this.load(), this.events()
            },
            load: function () {
                var t = this.$html.find(".sb-pricing-table-container"),
                    e = t.data("ajax-url"),
                    i = "<style>@-webkit-keyframes uil-ripple{0width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}@-webkit-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-moz-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-ms-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-moz-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-webkit-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-o-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}.uil-ripple-css{background:none;position:relative;width:200px;height:200px}.uil-ripple-css div{position:absolute;top:50%;left:50%;margin:0;width:0;height:0;opacity:0;border-radius:50%;border-width:12px;border-style:solid;-ms-animation:uil-ripple 2s ease-out infinite;-moz-animation:uil-ripple 2s ease-out infinite;-webkit-animation:uil-ripple 2s ease-out infinite;-o-animation:uil-ripple 2s ease-out infinite;animation:uil-ripple 2s ease-out infinite}.uil-ripple-css div:nth-of-type(1){border-color:#afafb7}.uil-ripple-css div:nth-of-type(2){border-color:#509bce;-ms-animation-delay:1s;-moz-animation-delay:1s;-webkit-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}#sb-packages-frame{display: none}</style>",
                    n = "<div class='uil-ripple-css' style='transform:scale(0.4);margin: auto;'><div></div><div></div></div>";
                t.before(i), t.append(n), e && $.get(e, function (e) {
                    e.response && ($("head").append('<link rel="stylesheet" type="text/css" href="' + e.assets.css + '">'), "undefined" == typeof Selectize ? $("body").append('<script src="' + e.assets.js.with_selectize + '"></script>') : $("body").append('<script src="' + e.assets.js["default"] + '"></script>'), t.html(e.html))
                })
            },
            events: function () {
                var t = this;
                $("body").on("platform.packages.lead_form.submitted", function () {
                    t.reportConversion()
                })
            }
        }), t
    }(), $(document).on("ready page:load", function () {
        $(window).width() <= 768 && $(".element-separator .direction-y:not(.has_icon)").removeClass("direction-y").addClass("direction-x")
    }), (appVisitor = appVisitor || {}).ElementSlider = function () {
        function t(t) {
            this.$html = t
        }
        return t.bindEvents = function () {
            $("body").on("init", ".element-slider", function () {
                new appVisitor.ElementSlider($(this)).harmonizeSlidesHeight()
            })
        }, t.defaultOptions = {
            autoplay: !0,
            draggable: !0,
            infinite: !0,
            speed: 400,
            autoplaySpeed: 3e3,
            swipe: !0,
            touchMove: !0,
            mobileFirst: !0,
            accessibility: !1,
            respondTo: "slider"
        }, t.prototype = {
            getSliderOptions: function () {
                var e = this.$html.data("admin-context"),
                    i = parseInt(this.$html.data("period")),
                    n = this.$html.data("transition"),
                    o = Boolean(this.$html.data("navigation")),
                    s = this.$html.data("view-type"),
                    r = {};
                return e && (r.autoplay = !1, r.draggable = !1), i && (r.autoplaySpeed = 1e3 * i), "fade" === n ? (r.fade = !0, r.swipe = !1) : "slide" === n && (r.fade = !1, r.swipe = !0), o ? (r.arrows = !0, r.dots = !0, r.prevArrow = '<button type="button" class="arrow arrow-left fa fa-chevron-left"></button>', r.nextArrow = '<button type="button" class="arrow arrow-right fa fa-chevron-right"></button>') : (r.arrows = !1, r.dots = !1), "view_type_7" == s && (r.centerMode = !0, r.slidesToShow = 1, r.centerPadding = "100px", r.fade = !1, r.dots = !1, r.speed = 600), $.extend(t.defaultOptions, r)
            },
            init: function () {
                var t = this.getSliderOptions();
                this.$html.slick(t)
            },
            refresh: function () {
                this.$html.slick("slickSetOption", {
                    options: {},
                    refresh: !0
                })
            },
            harmonizeSlidesHeight: function () {
                var t = this.$html.find(".element-slide"),
                    e = this.$html.height(),
                    i = 0;
                if (t.each(function () {
                        var t = $(this).find(".element-absolute-container").first().outerHeight();
                        t > i && (i = t)
                    }), i > e / 2) {
                    var n = this.$html.closest(".sb-bloc-inner"),
                        o = i + parseInt(n.css("margin-top"), 10) + parseInt(n.css("margin-bottom"), 10);
                    n.closest(".bloc-element-slider").outerHeight(o)
                }
            }
        }, t
    }(), (appVisitor = appVisitor || {}).ElementSocialActionButtonsGroup = function () {
        function t(t) {
            this.$html = t
        }
        return t.prototype = {
            init: function () {
                this.loadScripts();
                try {
                    FB.XFBML.parse(), IN.parse(), gapi.plusone.go(), twttr.widgets.load()
                } catch (t) {}
            },
            socialEnabled: function (t) {
                return this.$html.find(".element-social-action-button[data-social-name=" + t + "]").length
            },
            loadScripts: function () {
                this.$html.length && ((this.socialEnabled("facebook-like") || this.socialEnabled("facebook-share")) && this.loadFacebookApi(), this.socialEnabled("twitter-tweet") && this.loadTwitterApi(), this.socialEnabled("linkedin-share") && this.loadLinkedinApi())
            },
            loadFacebookApi: function () {
                var t = "script-facebook-api-buttons",
                    e = $("script#" + t);
                e.length && e.remove(), $('<script id="' + t + '" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.8" async></script>').appendTo("head")
            },
            loadTwitterApi: function () {
                var t = "script-twitter-api-buttons",
                    e = $("script#" + t);
                e.length && e.remove(), $('<script id="' + t + '" src="https://platform.twitter.com/widgets.js" async></script>').appendTo("head")
            },
            loadLinkedinApi: function () {
                var t = "script-linkedin-api-buttons",
                    e = $("script#" + t);
                e.length && e.remove(), $('<script id="' + t + '" src="https://platform.linkedin.com/in.js" async> lang: fr_FR</script>').appendTo("head")
            },
            loadGooglePlusApi: function () {
                var t = "script-google-api-buttons",
                    e = $("script#" + t);
                e.length && e.remove(), $('<script id="' + t + '" src="https://apis.google.com/js/platform.js" async></script>').appendTo("head")
            }
        }, t
    }(), (appVisitor = appVisitor || {}).ElementTabsContainer = function () {
        function t(t) {
            1 === t.length && (this.$html = t)
        }
        return utils.include(t, appVisitor.modules.GaEventable), $.extend(t.prototype, {
            init: function () {
                this._initPlugins()
            },
            _initPlugins: function () {
                var t = this.$html.find(".tabs").first(),
                    e = "tabsactivate";
                t.hasClass("tabs-horizontal") || t.hasClass("tabs-vertical") ? t.tabs({
                    show: "fadeIn"
                }) : t.hasClass("accordion") && (e = "accordionactivate", t.accordion({
                    animate: 200,
                    heightStyle: "content",
                    collapsible: !0,
                    active: !1
                }), this._initGaEvents()), t.on(e, function () {
                    var t = $(this);
                    ImageQueries.refresh(t), t.find(".element-album").trigger("sb.albums.refresh"), $("body").trigger("sb.containers.resizing")
                })
            },
            _initGaEvents: function () {
                var t = this;
                this.$html.on("click", "h3 a", function () {
                    var e = $(this),
                        i = e.data("ga-event");
                    i && (e.closest("h3").hasClass("ui-state-active") || (i = $.extend({}, i, {
                        eventAction: "Fermeture"
                    })), t.setGaEvent(i, function () {
                        t.sendGaEvent()
                    }))
                })
            }
        }), t
    }(), (appVisitor = appVisitor || {}).ElementToggleContainer = function () {
        function t(t) {
            1 === t.length && (this.config = {
                trigger: ".trigger",
                toggleContainer: ".toggle-container-content",
                element: ".element-toggle-container"
            }, this.$html = t, this.animation = this.$html.find(this.config.toggleContainer).data("animation-type"), this.$triggers = this.$html.find(this.config.trigger))
        }
        return t.prototype = {
            init: function () {
                this.events()
            },
            events: function () {
                var t = this;
                this.$html.on("click", this.config.trigger, function () {
                    var e = $(this),
                        i = e.parents(t.config.element).find(t.config.toggleContainer);
                    switch (t.animation) {
                        case "slide":
                            i.attr("aria-expanded", i.is(":hidden")).slideToggle(), t.$html.data("images-refreshed") || (ImageQueries.refresh(t.$html), t.$html.data("images-refreshed", !0));
                            break;
                        case "fade":
                            i.attr("aria-expanded", i.is(":visible")).fadeToggle()
                    }
                    e.hide().siblings(t.config.trigger).first().css("display", "inline-block")
                })
            }
        }, t
    }(), (appVisitor = appVisitor || {}).ElementVideo = function () {
        function t(t, i) {
            this.config = $.extend({}, e, i), this.$html = t, this.id = t.data("id"), this.type = t.data("type"), this.gaEvent = t.data("ga-event"), this.$html.find($(this.config.iframes)).data("ga-event", this.gaEvent), this.initApi(), this.events()
        }
        var e = {
            player: $("#modal-video-player"),
            playVideo: ".element-video-play",
            closeVideo: ".video-player-close",
            container: "#video-iframe-container",
            iframes: ".video-iframe"
        };
        return t.prototype = {
            initApi: function () {
                this.type && (this.api = new(t.Apis[utils.capitalize(this.type + "Api")])(this.$html))
            },
            events: function () {
                var t = this;
                this.$html.on("click", this.config.playVideo, function () {
                    t.config.player.show(), t.embed()
                }), this.config.player.on("click", this.config.closeVideo, function () {
                    $("body").trigger("sb.videos.close_modal", [t.config.player.find(t.config.container + " " + t.config.iframes).data("ga-event")]), t.close()
                }), this.config.player.click(function (e) {
                    e.target == t.config.player[0] && t.close()
                })
            },
            embed: function () {
                var t = {
                        youtube: '<iframe class="video-iframe" width="400" height="225" src="https://www.youtube.com/embed/' + this.id + '?enablejsapi=1&rel=0&autoplay=1" allow="autoplay; fullscreen" allowfullscreen frameborder="0"></iframe>',
                        dailymotion: '<div class="video-iframe" data-id="' + this.id + '" data-width="400" data-height="225" data-autoplay="1"></div>',
                        vimeo: '<iframe class="video-iframe" width="400" height="225" src="https://player.vimeo.com/video/' + this.id + '?autoplay=1" frameborder="0" allow="autoplay; fullscreen" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
                    },
                    e = $(t[this.type]);
                e.data("ga-event", this.gaEvent), this.config.player.find(this.config.container).append(e), this.api.initPlayer($(this.config.iframes + ":not(.initialized)")), this._fluidPlayer()
            },
            close: function () {
                var t = this;
                this.config.player.fadeOut("fast", function () {
                    $(t.config.iframes).remove()
                })
            },
            _fluidPlayer: function () {
                var t = $(this.config.container),
                    e = $(this.config.iframes);
                e.each(function () {
                    $(this).data("aspectRatio", this.height / this.width).removeAttr("height").removeAttr("width")
                }), $(window).resize(function () {
                    var i = t.width();
                    e.each(function () {
                        var t = $(this);
                        t.width(i).height(i * t.data("aspectRatio"))
                    })
                }).resize()
            }
        }, t.Apis = {
            YoutubeApi: function () {
                function t() {
                    this.init()
                }
                return t.API_URL = "https://www.youtube.com/iframe_api", t.initPlayers = function (t) {
                    t.each(function () {
                        var t = $(this);
                        t.addClass("initialized");
                        new YT.Player(this, {
                            events: {
                                onStateChange: function (e) {
                                    1 == e.data ? t.data("started") ? $("body").trigger("sb.videos.resume", [t.data("ga-event")]) : (t.data("started", !0), $("body").trigger("sb.videos.start", [t.data("ga-event")])) : 2 == e.data ? $("body").trigger("sb.videos.pause", [t.data("ga-event")]) : 0 == e.data && (t.data("started", !1), $("body").trigger("sb.videos.end", [t.data("ga-event")]))
                                }
                            }
                        })
                    })
                }, t.prototype = {
                    init: function () {
                        utils.require([t.API_URL], function () {})
                    },
                    initPlayer: function (e) {
                        t.initPlayers(e)
                    }
                }, t
            }(),
            VimeoApi: function () {
                function t(t) {
                    this.$html = t, this.init()
                }
                return t.API_URL = "https://player.vimeo.com/api/player.js", t.initPlayers = function (t) {
                    t.each(function () {
                        var t = $(this);
                        t.addClass("initialized");
                        var e = new Vimeo.Player(t);
                        e.on("play", function () {
                            t.data("started") ? $("body").trigger("sb.videos.resume", [t.data("ga-event")]) : (t.data("started", !0), $("body").trigger("sb.videos.start", [t.data("ga-event")]))
                        }), e.on("pause", function () {
                            $("body").trigger("sb.videos.pause", [t.data("ga-event")])
                        }), e.on("ended", function () {
                            t.data("started", !1), $("body").trigger("sb.videos.end", [t.data("ga-event")])
                        })
                    })
                }, t.prototype = {
                    init: function () {
                        var e = this;
                        utils.require([t.API_URL], function () {
                            e.initPlayer(e.$html.find(".video-iframe"))
                        })
                    },
                    initPlayer: function (e) {
                        t.initPlayers(e)
                    }
                }, t
            }(),
            DailymotionApi: function () {
                function t(t) {
                    this.$html = t, this.init()
                }
                return t.API_URL = "https://api.dmcdn.net/all.js", t.initPlayers = function (t) {
                    t.each(function () {
                        var t = $(this);
                        t.addClass("initialized");
                        var e = DM.player(this, {
                            api: !0,
                            video: t.data("id"),
                            width: t.data("width"),
                            height: t.data("height"),
                            params: {
                                autoplay: !!t.data("autoplay")
                            }
                        });
                        $(e).attr("sandbox", "allow-same-origin allow-scripts"), e.addEventListener("play", function () {
                            t.data("started") ? $("body").trigger("sb.videos.resume", [t.data("ga-event")]) : (t.data("started", !0), $("body").trigger("sb.videos.start", [t.data("ga-event")]))
                        }), e.addEventListener("pause", function () {
                            $("body").trigger("sb.videos.pause", [t.data("ga-event")])
                        }), e.addEventListener("video_end", function () {
                            t.data("started", !1), $("body").trigger("sb.videos.end", [t.data("ga-event")])
                        })
                    })
                }, t.prototype = {
                    init: function () {
                        var e = this;
                        utils.require([t.API_URL], function () {
                            e.initPlayer(e.$html.find(".video-iframe"))
                        })
                    },
                    initPlayer: function (e) {
                        t.initPlayers(e)
                    }
                }, t
            }()
        }, t
    }(), appVisitor.ElementVideo.EventsListener = function () {
        function t() {
            this.init()
        }
        return utils.include(t, appVisitor.modules.GaEventable), $.extend(t.prototype, {
            init: function () {
                this.events()
            },
            events: function () {
                var t = this;
                $("body").on("sb.videos.start", function (e, i) {
                    t.setGaEvent(i, function () {
                        t.sendGaEvent({
                            eventAction: "D\xe9marrage"
                        })
                    })
                }), $("body").on("sb.videos.resume", function (e, i) {
                    t.setGaEvent(i, function () {
                        t.sendGaEvent({
                            eventAction: "Reprise"
                        })
                    })
                }), $("body").on("sb.videos.pause", function (e, i) {
                    t.setGaEvent(i, function () {
                        t.sendGaEvent({
                            eventAction: "Pause"
                        })
                    })
                }), $("body").on("sb.videos.end", function (e, i) {
                    t.setGaEvent(i, function () {
                        t.sendGaEvent({
                            eventAction: "Termin\xe9e"
                        })
                    })
                }), $("body").on("sb.videos.close_modal", function (e, i) {
                    t.setGaEvent(i, function () {
                        t.sendGaEvent({
                            eventAction: "Fermeture de modal"
                        })
                    })
                })
            }
        }), t
    }(), (appVisitor = appVisitor || {}).FixedBloc = function () {
        function t(t, e) {
            1 === t.length && (this.$element = t), e !== undefined && 1 === e.length ? this.$container = e : this.$container = $("body")
        }
        return t.prototype = {
            backToStatic: function () {
                this.$element.css({
                    width: "100%",
                    position: "static",
                    top: "auto"
                })
            },
            init: function () {
                if (this.$element) {
                    var t, e, i, n, o, s, r, a, l = $(window),
                        c = $("#body-container").offset().top,
                        d = this;
                    return l.resize(function () {
                        d.backToStatic(), t = l.width(), e = l.height(), i = d.$element.offset().top, n = d.$element.outerWidth(), o = d.$element.outerHeight(), s = d.$container.offset().top, r = d.$container.outerHeight(), l.scroll()
                    }), l.scroll(function () {
                        t > 768 && r > o && ((a = l.scrollTop()) + c > i ? a + o > s + r ? d.$element.css({
                            width: n,
                            position: "fixed",
                            top: "inherit",
                            bottom: a + e - (s + r)
                        }) : d.$element.css({
                            width: n,
                            position: "fixed",
                            top: c,
                            bottom: "inherit"
                        }) : d.backToStatic())
                    }), l.resize(), d
                }
            }
        }, t
    }(),
    function (t, e, i) {
        var n = function (n, o) {
            this.elem = n, this.$elem = t(n), this.options = o, this.metadata = this.$elem.data("plugin-options"), this.$win = t(e), this.sections = {}, this.didScroll = !1, this.$doc = t(i), this.docHeight = this.$doc.height()
        };
        n.prototype = {
            defaults: {
                navItems: "a",
                currentClass: "current",
                currentParentClass: "subcurrent",
                tabItem: "li",
                changeHash: !1,
                easing: "swing",
                filter: "",
                scrollSpeed: 750,
                scrollThreshold: .5,
                begin: !1,
                end: !1,
                scrollChange: !1,
                offsetWithFixedComponents: 80
            },
            init: function () {
                var i = this;
                return this.config = t.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", t.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", t.proxy(this.getPositions, this)), t(e).on("hashchange", function () {
                    var n = e.location.hash,
                        o = t(n);
                    if (o.length) {
                        var s = o.offset().top;
                        t("body").hasClass("menu_fixed") && (s -= i.config.offsetWithFixedComponents), e.scrollTo(0, s)
                    }
                }), this
            },
            adjustNav: function (t, e) {
                t.$elem.find("." + t.config.currentClass).removeClass(t.config.currentClass), t.$elem.find("." + t.config.currentParentClass).removeClass(t.config.currentParentClass), e.addClass(t.config.currentClass), e.parents(t.config.tabItem).addClass(t.config.currentParentClass)
            },
            bindInterval: function () {
                var t, e = this;
                e.$win.on("scroll.onePageNav", function () {
                    e.didScroll = !0
                }), e.t = setInterval(function () {
                    t = e.$doc.height(), e.didScroll && (e.didScroll = !1, e.scrollChange()), t !== e.docHeight && (e.docHeight = t, e.getPositions())
                }, 250)
            },
            getHash: function (t) {
                return t.attr("href").split("#")[1]
            },
            getPositions: function () {
                var e, i, n, o = this;
                o.$nav.each(function () {
                    e = o.getHash(t(this)), (n = t("#" + e)).length && (i = n.offset().top, o.sections[e] = Math.round(i))
                })
            },
            getSection: function (t) {
                var e = null,
                    i = Math.round(this.$win.height() * this.config.scrollThreshold);
                for (var n in this.sections) this.sections[n] - i < t && (e = n);
                return e
            },
            handleClick: function (i) {
                var n = this,
                    o = t(i.currentTarget),
                    s = o.closest(n.config.tabItem),
                    r = "#" + n.getHash(o);
                s.hasClass(n.config.currentClass) || (n.config.begin && n.config.begin(), n.adjustNav(n, s), n.unbindInterval(), n.scrollTo(r, function () {
                    n.config.changeHash && (e.location.hash = r), n.bindInterval(), n.config.end && n.config.end()
                })), i.preventDefault()
            },
            scrollChange: function () {
                var t, e = this.$win.scrollTop(),
                    i = this.getSection(e);
                null !== i && ((t = this.$elem.find('a[href$="#' + i + '"]').closest(this.config.tabItem)).hasClass(this.config.currentClass) || (this.adjustNav(this, t), this.config.scrollChange && this.config.scrollChange(t)))
            },
            scrollTo: function (e, i) {
                var n = t(e).offset().top;
                t("body").hasClass("menu_fixed") && (n -= this.config.offsetWithFixedComponents), t("html, body").animate({
                    scrollTop: n
                }, this.config.scrollSpeed, this.config.easing, i)
            },
            unbindInterval: function () {
                clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
            }
        }, n.defaults = n.prototype.defaults, t.fn.onePageNav = function (t) {
            return this.each(function () {
                new n(this, t).init()
            })
        }
    }(jQuery, window, document), (appVisitor = appVisitor || {}).KeyboardShortcuts = function () {
        function t() {
            this.init()
        }
        return t.prototype = {
            init: function () {
                (new window.keypress.Listener).register_many([{
                    keys: "alt c",
                    on_release: function () {
                        window.location = appVisitor.config.tool_connexion_base_url
                    }
                }])
            }
        }, t
    }(), (appVisitor = appVisitor || {}).OptIn = function () {
        function t() {}
        return t.init = function () {
            $("body").on("click", ".open-opt-in-subjects-popup", function () {
                var t = $(this),
                    e = t.data("ajax-url");
                return e && $.get(e, function (e) {
                    if (e.response && e.html) {
                        var i = $(e.html),
                            n = new appVisitor.Popup({});
                        i.data("element", t.closest(".element")), n.$html = i, n.render()
                    }
                }).fail(function () {}), !1
            }).on("click", ".popup-cover.opt-in-subjects button[type=submit]", function () {
                var t = $(this).closest(".opt-in-subjects"),
                    e = t.data("element");
                if (e) {
                    var i = e.find("input[name*=opt_in_subject_ids]");
                    t.find("input[type=checkbox]:checked").each(function () {
                        var t = $(this);
                        i.filter(function () {
                            return $(this).val() == t.val()
                        }).prop("disabled", !1)
                    }), t.fadeOut("fast", function () {
                        t.remove(), e.find("form").submit(), i.prop("disabled", !0)
                    })
                }
            })
        }, t
    }();
var popups = (appVisitor = appVisitor || {}).popups || {};
appVisitor.Popup = function () {
        function t(t, e, i) {
            this.config = t, this.active = !0, this.$trigger = e, this.fromUrl = i
        }
        return utils.include(t, appVisitor.modules.GaEventable), t.preventAutomaticOpen = !1, t.initPopups = function () {
            t.initFromPath(utils.$_GET.popup, null, !0), $.each(popups, function (e, i) {
                i.automatic_open && new t(i).init()
            }), $("body").on("click", ".open-popup", function (e) {
                e.preventDefault();
                var i = $(this),
                    n = i.find(".inner-text"),
                    o = i.data("popup");
                o && (i.attr("disabled", !0), n.length && n.data("original-text", n.text()).text(i.data("popup-loading")), t.initFromPath(o, i))
            })
        }, t.initFromPath = function (e, i, n) {
            var o = popups[e];
            o && (n && (t.preventAutomaticOpen = !0), new t(o, i, n).init())
        }, $.extend(t.prototype, {
            init: function () {
                var e = this;
                if (e.isAutomaticOpen()) {
                    var i = this._getCookieNeverOpenAgain();
                    if (!(e.config.do_not_open_again_after_closing_once && -1 != i.never_open_again.indexOf(e.config.path) || t.preventAutomaticOpen)) switch (this.config.automatic_open_type) {
                        case "OPEN_ON_SCROLL_TO_BOTTOM":
                            $(window).scroll(function () {
                                $(window).scrollTop() + $(window).height() + 1 >= $(document).height() && e._load()
                            });
                            break;
                        case "OPEN_ON_TIME_SPENT_ON_SITE":
                            if (-1 == (i = e._getCookieTimeSpentOnSite()).already_opened.indexOf(e.config.path)) var n = setInterval(function () {
                                Date.now() >= i.visitor_arrived_at + e.config.automatic_open_time_spent_on_site && (clearInterval(n), e._load(function () {
                                    i.already_opened.push(e.config.path), utils.cookies.create("sb-popups-time-spent-on-site", i, null, i.expires_date)
                                }))
                            }, 1e3);
                            break;
                        case "OPEN_ON_PAGE_READY":
                        default:
                            e._load()
                    }
                } else e._load()
            },
            isAutomaticOpen: function () {
                return this.config && this.config.automatic_open && !this.$trigger && !this.fromUrl
            },
            render: function () {
                var t = this;
                $("body").addClass("has-popup"), this._hasCover() && $("body").addClass("no-scroll"), $("#body-container").append(t.$html), appVisitor.initElements(t.$html), ImageQueries.refresh(t.$html), ElementQueries.refresh(), appVisitor.Animations.init(t.$html), t._events(), t.$html.trigger("sb.popups.initialized"), t.setGaEvent(t.gaEvent, function () {
                    t.sendGaEvent({
                        eventAction: t._gaEventAction()
                    })
                });
                var e = new Event("sb.popups.initialized");
                $("body")[0].dispatchEvent(e)
            },
            _load: function (t) {
                var e = this,
                    i = function () {
                        $.get(e.config.url, function (i) {
                            if (i.response && i.html) {
                                var n = $(i.html);
                                e.$html = n, e.gaEvent = e.$html.find(".popup").data("ga-event"), e.render(), e._resetTrigger(), "function" == typeof t && t()
                            }
                        })
                    };
                e.active && (e.isAutomaticOpen() && (e.active = !1), e.isAutomaticOpen() && e.config.automatic_open_delay ? setTimeout(function () {
                    i()
                }, e.config.automatic_open_delay) : i())
            },
            _close: function () {
                var t = this;
                if ($("body").removeClass("has-popup no-scroll"), t.config.do_not_open_again_after_closing_once && t.isAutomaticOpen()) {
                    var e = t._getCookieNeverOpenAgain(); - 1 == e.never_open_again.indexOf(t.config.path) && (e.never_open_again.push(t.config.path), utils.cookies.create("sb-popups-never-open-again", e))
                }
                t.$html.remove(), t.setGaEvent(t.gaEvent, function () {
                    t.sendGaEvent({
                        eventAction: "Fermeture"
                    })
                })
            },
            _getCookieTimeSpentOnSite: function () {
                var t = utils.cookies.get("sb-popups-time-spent-on-site");
                return t || (utils.cookies.create("sb-popups-time-spent-on-site", {
                    visitor_arrived_at: Date.now(),
                    already_opened: []
                }, 1), t = utils.cookies.get("sb-popups-time-spent-on-site")), JSON.parse(t)
            },
            _getCookieNeverOpenAgain: function () {
                var t = utils.cookies.get("sb-popups-never-open-again");
                return t || (utils.cookies.create("sb-popups-never-open-again", {
                    never_open_again: []
                }), t = utils.cookies.get("sb-popups-never-open-again")), JSON.parse(t)
            },
            _resetTrigger: function () {
                if (this.$trigger) {
                    var t = this.$trigger.find(".inner-text");
                    this.$trigger.attr("disabled", !1), t.text(t.data("original-text"))
                }
            },
            _events: function () {
                var t = this;
                t.$html.on("click", ".popup-close-button", function () {
                    t._close()
                }), t.$html.on("sb.closePopup", function () {
                    t._close()
                }), t.$html.on("click", ".popup-close a", function (e) {
                    return e.preventDefault(), t.$html.trigger("sb.closePopup"), !1
                })
            },
            _hasCover: function () {
                return this.config.cover_type && "COVER_NONE" != this.config.cover_type
            },
            _gaEventAction: function () {
                var t = "Ouverture";
                return this.isAutomaticOpen() ? t += " automatique (" + this.config.automatic_open_type_label + ")" : this.$trigger ? t += " manuelle" : this.fromUrl && (t += " depuis l'URL"), t
            }
        }), t
    }(), (appVisitor = appVisitor || {}).PrivateSpace = function () {
        function t() {}
        return t.activity = function () {
            function t() {
                $.post("/api_website_feature/private_spaces/activity", function () {}).fail(function () {})
            }

            function e() {
                clearTimeout(i), i = setTimeout(t, 1500)
            }
            var i;
            document.onmousemove = e, document.onkeypress = e, document.onscroll = e
        }, t
    }(), (appVisitor = appVisitor || {}).ScrollToAnchor = function () {
        function t() {}
        return t.init = function () {
            var e = $(window.location.hash);
            e.length && t.scrollTo(e, !0), $("body").on("click", ".element-link .content-link-anchor", function (e) {
                e.stopPropagation();
                var i = $(this).attr("href").split("/")[1],
                    n = $(i);
                n.length && t.scrollTo(n, !1)
            })
        }, t.scrollTo = function (t, e) {
            var i = t.offset().top;
            e ? setTimeout(function () {
                window.scrollTo(0, i)
            }, 1) : $("html, body").animate({
                scrollTop: i
            }, 400)
        }, t
    }(), (appVisitor = appVisitor || {}).StickedFooter = function () {
        function t() {
            this.$site = $("#body-container-inner"), this.siteH = this.$site[0].offsetHeight, this.$content = $("#center_inner"), this.windowH = $(window).height(), this.topGutter = 0, this.bottomGutter, this.init()
        }
        return t.prototype = {
            init: function () {
                var t = this,
                    e = new appVisitor.Router;
                this.siteH < this.windowH && ((e.isContextContent() || e.isContextPages()) && this._setTopGutter(this.$site.offset().top), this._setBottomGutter(this.windowH - this.siteH), 1 === this.$content.length && this.$content.css({
                    minHeight: t.$content[0].offsetHeight + this.bottomGutter - this.topGutter + "px"
                }))
            },
            _setBottomGutter: function (t) {
                this.bottomGutter = t
            },
            _setTopGutter: function (t) {
                this.topGutter = t
            }
        }, t
    }(),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t, e) {
        function i(t) {
            function e() {
                n ? (i(), L(e), o = !0, n = !1) : o = !1
            }
            var i = t,
                n = !1,
                o = !1;
            this.kick = function () {
                n = !0, o || e()
            }, this.end = function (t) {
                var e = i;
                t && (o ? (i = n ? function () {
                    e(), t()
                } : t, n = !0) : t())
            }
        }

        function n() {
            return !0
        }

        function o() {
            return !1
        }

        function s(t) {
            t.preventDefault()
        }

        function r(t) {
            j[t.target.tagName.toLowerCase()] || t.preventDefault()
        }

        function a(t) {
            return 1 === t.which && !t.ctrlKey && !t.altKey
        }

        function l(t, e) {
            var i, n;
            if (t.identifiedTouch) return t.identifiedTouch(e);
            for (i = -1, n = t.length; ++i < n;)
                if (t[i].identifier === e) return t[i]
        }

        function c(t, e) {
            var i = l(t.changedTouches, e.identifier);
            if (i && (i.pageX !== e.pageX || i.pageY !== e.pageY)) return i
        }

        function d(t) {
            var e;
            a(t) && (e = {
                target: t.target,
                startX: t.pageX,
                startY: t.pageY,
                timeStamp: t.timeStamp
            }, M(document, q.move, u, e), M(document, q.cancel, p, e))
        }

        function u(t) {
            b(t, t.data, t, h)
        }

        function p() {
            h()
        }

        function h() {
            F(document, q.move, u), F(document, q.cancel, p)
        }

        function f(t) {
            var e, i;
            j[t.target.tagName.toLowerCase()] || (i = {
                target: (e = t.changedTouches[0]).target,
                startX: e.pageX,
                startY: e.pageY,
                timeStamp: t.timeStamp,
                identifier: e.identifier
            }, M(document, D.move + "." + e.identifier, m, i), M(document, D.cancel + "." + e.identifier, g, i))
        }

        function m(t) {
            var e = t.data,
                i = c(t, e);
            i && b(t, e, i, v)
        }

        function g(t) {
            var e = t.data;
            l(t.changedTouches, e.identifier) && v(e.identifier)
        }

        function v(t) {
            F(document, "." + t, m), F(document, "." + t, g)
        }

        function b(t, e, i, n) {
            var o = i.pageX - e.startX,
                s = i.pageY - e.startY;
            o * o + s * s < O * O || w(t, e, i, o, s, n)
        }

        function y() {
            return this._handled = n, !1
        }

        function _(t) {
            t._handled()
        }

        function w(t, e, i, n, o, s) {
            var r, a;
            e.target;
            r = t.targetTouches, a = t.timeStamp - e.timeStamp, e.type = "movestart", e.distX = n, e.distY = o, e.deltaX = n, e.deltaY = o, e.pageX = i.pageX, e.pageY = i.pageY, e.velocityX = n / a, e.velocityY = o / a, e.targetTouches = r, e.finger = r ? r.length : 1, e._handled = y, e._preventTouchmoveDefault = function () {
                t.preventDefault()
            }, G(e.target, e), s(e.identifier)
        }

        function $(t) {
            var e = t.data.timer;
            t.data.touch = t, t.data.timeStamp = t.timeStamp, e.kick()
        }

        function k(t) {
            var e = t.data.event,
                i = t.data.timer;
            E(), C(e, i, function () {
                setTimeout(function () {
                    F(e.target, "click", o)
                }, 0)
            })
        }

        function E() {
            F(document, q.move, $), F(document, q.end, k)
        }

        function T(t) {
            var e = t.data.event,
                i = t.data.timer,
                n = c(t, e);
            n && (t.preventDefault(), e.targetTouches = t.targetTouches, t.data.touch = n, t.data.timeStamp = t.timeStamp, i.kick())
        }

        function S(t) {
            var e = t.data.event,
                i = t.data.timer;
            l(t.changedTouches, e.identifier) && (x(e), C(e, i))
        }

        function x(t) {
            F(document, "." + t.identifier, T), F(document, "." + t.identifier, S)
        }

        function V(t, e, i) {
            var n = i - t.timeStamp;
            t.type = "move", t.distX = e.pageX - t.startX, t.distY = e.pageY - t.startY, t.deltaX = e.pageX - t.pageX, t.deltaY = e.pageY - t.pageY, t.velocityX = .3 * t.velocityX + .7 * t.deltaX / n, t.velocityY = .3 * t.velocityY + .7 * t.deltaY / n, t.pageX = e.pageX, t.pageY = e.pageY
        }

        function C(t, e, i) {
            e.end(function () {
                return t.type = "moveend", G(t.target, t), i && i()
            })
        }

        function A() {
            return M(this, "movestart.move", _), !0
        }

        function P() {
            return F(this, "dragstart drag", s), F(this, "mousedown touchstart", r), F(this, "movestart", _), !0
        }

        function I(t) {
            "move" !== t.namespace && "moveend" !== t.namespace && (M(this, "dragstart." + t.guid + " drag." + t.guid, s, e, t.selector), M(this, "mousedown." + t.guid, r, e, t.selector))
        }

        function z(t) {
            "move" !== t.namespace && "moveend" !== t.namespace && (F(this, "dragstart." + t.guid + " drag." + t.guid), F(this, "mousedown." + t.guid))
        }
        var O = 6,
            M = t.event.add,
            F = t.event.remove,
            G = function (e, i, n) {
                t.event.trigger(i, n, e)
            },
            L = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                return window.setTimeout(function () {
                    t()
                }, 25)
            },
            j = {
                textarea: !0,
                input: !0,
                select: !0,
                button: !0
            },
            q = {
                move: "mousemove",
                cancel: "mouseup dragstart",
                end: "mouseup"
            },
            D = {
                move: "touchmove",
                cancel: "touchend",
                end: "touchend"
            };
        t.event.special.movestart = {
            setup: A,
            teardown: P,
            add: I,
            remove: z,
            _default: function (t) {
                function n() {
                    V(s, r.touch, r.timeStamp), G(t.target, s)
                }
                var s, r;
                t._handled() && (s = {
                    target: t.target,
                    startX: t.startX,
                    startY: t.startY,
                    pageX: t.pageX,
                    pageY: t.pageY,
                    distX: t.distX,
                    distY: t.distY,
                    deltaX: t.deltaX,
                    deltaY: t.deltaY,
                    velocityX: t.velocityX,
                    velocityY: t.velocityY,
                    timeStamp: t.timeStamp,
                    identifier: t.identifier,
                    targetTouches: t.targetTouches,
                    finger: t.finger
                }, r = {
                    event: s,
                    timer: new i(n),
                    touch: e,
                    timeStamp: e
                }, t.identifier === e ? (M(t.target, "click", o), M(document, q.move, $, r), M(document, q.end, k, r)) : (t._preventTouchmoveDefault(), M(document, D.move + "." + t.identifier, T, r), M(document, D.end + "." + t.identifier, S, r)))
            }
        }, t.event.special.move = {
            setup: function () {
                M(this, "movestart.move", t.noop)
            },
            teardown: function () {
                F(this, "movestart.move", t.noop)
            }
        }, t.event.special.moveend = {
            setup: function () {
                M(this, "movestart.moveend", t.noop)
            },
            teardown: function () {
                F(this, "movestart.moveend", t.noop)
            }
        }, M(document, "mousedown.move", d), M(document, "touchstart.move", f), "function" == typeof Array.prototype.indexOf && function (t) {
            for (var e = ["changedTouches", "targetTouches"], i = e.length; i--;) - 1 === t.event.props.indexOf(e[i]) && t.event.props.push(e[i])
        }(t)
    }),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && null !== module && module.exports ? module.exports = t : t(jQuery)
    }(function (t) {
        function e(t) {
            var e, i, n;
            e = t.currentTarget.offsetWidth, i = t.currentTarget.offsetHeight, n = {
                distX: t.distX,
                distY: t.distY,
                velocityX: t.velocityX,
                velocityY: t.velocityY,
                finger: t.finger
            }, t.distX > t.distY ? t.distX > -t.distY ? (t.distX / e > r.threshold || t.velocityX * t.distX / e * r.sensitivity > 1) && (n.type = "swiperight", s(t.currentTarget, n)) : (-t.distY / i > r.threshold || t.velocityY * t.distY / e * r.sensitivity > 1) && (n.type = "swipeup",
                s(t.currentTarget, n)) : t.distX > -t.distY ? (t.distY / i > r.threshold || t.velocityY * t.distY / e * r.sensitivity > 1) && (n.type = "swipedown", s(t.currentTarget, n)) : (-t.distX / e > r.threshold || t.velocityX * t.distX / e * r.sensitivity > 1) && (n.type = "swipeleft", s(t.currentTarget, n))
        }

        function i(e) {
            var i = t.data(e, "event_swipe");
            return i || (i = {
                count: 0
            }, t.data(e, "event_swipe", i)), i
        }
        var n = t.event.add,
            o = t.event.remove,
            s = function (e, i, n) {
                t.event.trigger(i, n, e)
            },
            r = {
                threshold: .4,
                sensitivity: 6
            };
        t.event.special.swipe = t.event.special.swipeleft = t.event.special.swiperight = t.event.special.swipeup = t.event.special.swipedown = {
            setup: function () {
                if (!(i(this).count++ > 0)) return n(this, "moveend", e), !0
            },
            teardown: function () {
                if (!(--i(this).count > 0)) return o(this, "moveend", e), !0
            },
            settings: r
        }
    }), (appVisitor = appVisitor || {}).topBarTooltip = function () {
        function t(t) {
            this.$toggle = t, this.$toggle.length && (this.$target = $(this.$toggle.data("target")), this.position = this.$toggle.data("position"), this.init())
        }
        return t.initTooltips = function () {
            $(".top-bar-tooltip-toggle").each(function () {
                new t($(this))
            })
        }, t.prototype = {
            init: function () {
                this.buildTooltip(), this.events()
            },
            buildTooltip: function () {
                this.$tooltip = $('<div class="top-bar-tooltip-info-wrapper"><div class="top-bar-tooltip-info">' + this.$toggle.data("html") + "</div></div>"), this.refreshTooltipPosition(), this.$tooltip.appendTo($("body"))
            },
            events: function () {
                var t = this,
                    e = this.$tooltip;
                this.$target.on("mouseenter", function () {
                    e.show()
                }).on("mouseleave", function () {
                    setTimeout(function () {
                        t.hovered || e.hide()
                    }, 10)
                }), e.on("mouseenter", function () {
                    t.hovered || (t.hovered = !0)
                }).on("mouseleave", function () {
                    t.hovered = !1, $(this).hide()
                }), $(window).on("resize", function () {
                    clearTimeout(t.refreshTooltipPositionTimeout), t.refreshTooltipPosition()
                }), $(window).on("scroll", function () {
                    clearTimeout(t.refreshTooltipPositionTimeout), t.refreshTooltipPosition()
                })
            },
            refreshTooltipPosition: function () {
                var t = this;
                this.refreshTooltipPositionTimeout = setTimeout(function () {
                    var e = t.$target.offset();
                    t.$tooltip.css("top", e.top + t.$target.height()), "right" == t.position ? t.$tooltip.css("right", $(window).width() - (e.left + t.$target[0].offsetWidth)) : t.$tooltip.css("left", e.left)
                }, 400)
            }
        }, t
    }(), jQuery.fn.sbViTooltip = function () {
        function t(t) {
            switch (t) {
                case "sb-vi-tooltip-left":
                    return {
                        my: "right-10 center", at: "left center"
                    };
                case "sb-vi-tooltip-top":
                    return {
                        my: "bottom bottom", at: "bottom top-10"
                    };
                case "sb-vi-tooltip-right":
                    return {
                        my: "left+10 center", at: "right center"
                    };
                case "sb-vi-tooltip-bottom":
                    return {
                        my: "top top", at: "top bottom+10"
                    };
                default:
                    return {
                        my: "bottom bottom", at: "bottom top-10"
                    }
            }
        }
        var e = this,
            i = e[0].className.match(/(sb-vi-tooltip-left|sb-vi-tooltip-top|sb-vi-tooltip-right|sb-vi-tooltip-bottom)/)[0];
        e.tooltip({
            position: t(i),
            tooltipClass: i + " sb-vi-tooltip-box",
            show: {
                effect: "show"
            },
            hide: {
                effect: "hide"
            }
        }), e.hasClass("sb-vi-tooltip-display-on-click-on-mobile") && jQuery.browser.mobile && (e.unbind("mouseover mouseleave"), e.on("click", function () {
            e.attr("title") ? e.tooltip("open") : e.tooltip("close")
        }))
    }, $(document).on("ready page:load", function () {
        $(".sb-vi-tooltip").each(function () {
            $(this).sbViTooltip()
        }), sbNotification(), dropHover()
    }), (appVisitor = appVisitor || {}).LoadingLoader = function () {
        function t(t, i) {
            if (1 !== t.length) throw "LoadingLoader: Conteneur inexistant";
            this.$container = t, this.config = $.extend({}, e, i), this.loadingCls = "sb-vi-loader-overlay loading", this.loadingText = t.data("loading-text"), this.$html = $('<div class="loading-container"><i class="fa fa-pulse fa-' + this.config.loaderGlyph + " fa-" + this.config.loaderSize + 'x"></i><p class="loading-text"></p></div>').prependTo(this.$container), this.init()
        }
        var e = {
            loaderGlyph: "spinner",
            loaderSize: 4
        };
        return t.prototype = {
            init: function () {
                "static" == this.$container.css("position") && this.$container.css("position", "relative"), this.$loader = this.$html.wrap("<div></div>").parent().hide()
            },
            loading: function (t) {
                this.$loader.addClass(this.loadingCls).show(), (t = t || this.loadingText) && this.$html.find(".loading-text").text(t), this._center()
            },
            finish: function (t) {
                var e = this;
                this.$loader.fadeOut("fast", function () {
                    $(this).removeClass(e.loadingCls), "function" == typeof t && t()
                })
            },
            remove: function () {
                this.$loader.remove()
            },
            _center: function () {
                this.$html.css({
                    top: this.$container[0].offsetHeight / 2 - this.$html[0].offsetHeight / 2,
                    left: this.$container[0].offsetWidth / 2 - this.$html[0].offsetWidth / 2
                })
            }
        }, t
    }(), (appVisitor = appVisitor || {}).initElements = function (t) {
        appVisitor.ElementSlider.bindEvents(), t.find(".element-slider").each(function () {
            new appVisitor.ElementSlider($(this)).init()
        }), t.find(".element-rss").each(function () {
            new appVisitor.ElementRss($(this)).init()
        }), t.find(".element-form-standard, .element-form-advanced, .element-lead-generation-form").each(function () {
            appVisitor.ElementForm.initObject($(this)).init()
        }), t.find(".element-album").each(function () {
            new appVisitor.ElementAlbum($(this))
        }), t.find(".element-image.element-image-enlarge").each(function () {
            new appVisitor.ElementImage($(this))
        }), t.find(".element-review-form").each(function () {
            new appVisitor.ElementReviewForm($(this))
        }), t.find(".element-newsletter").each(function () {
            new appVisitor.ElementNewsletter($(this))
        }), t.find(".content-link-anchor").closest(".element").each(function () {
            $(this).onePageNav({
                currentClass: "selected",
                changeHash: !0,
                scrollSpeed: 300,
                navItems: "a.content-link-anchor",
                tabItem: "li.menu-tab-container",
                currentParentClass: "subselected"
            })
        }), t.find(".element-hours").each(function () {
            new appVisitor.ElementBusinessHours($(this))
        }), t.find(".element-partner").each(function () {
            new appVisitor.ElementPartner($(this)).init()
        }), t.find(".element-blog-element-last-article").each(function () {
            new appVisitor.ElementBlogLastArticle($(this)).init()
        }), t.find(".element-review-display").each(function () {
            new appVisitor.ElementReviewDisplay($(this)).init()
        }), t.find(".element-tabs-container").each(function () {
            new appVisitor.ElementTabsContainer($(this)).init()
        }), t.find(".element-toggle-container").each(function () {
            new appVisitor.ElementToggleContainer($(this)).init()
        }), t.find(".element-social-action-buttons-group").each(function () {
            new appVisitor.ElementSocialActionButtonsGroup($(this)).init()
        }), t.find(".element-sb-pricing-table").each(function () {
            new appVisitor.ElementSbPricingTable($(this)).init()
        }), t.find(".element-file").each(function () {
            new appVisitor.ElementFile($(this)).init()
        })
    }, appVisitor.Router = function () {
        function t() {}
        return t.prototype = {
            getAdminContext: function () {
                var t = /\/site\/.+?\/(.+?)(\/.*|$)/,
                    e = window.location.pathname.match(t);
                return e ? e[1] : ""
            },
            isContextContent: function () {
                return "content" === this.getAdminContext()
            },
            isContextPages: function () {
                return "pages" === this.getAdminContext()
            },
            isContextAdminVisitorView: function () {
                return "visitor_view" === this.getAdminContext()
            }
        }, t
    }(), $(document).on("ready page:load", function () {
        $("body").sbCheckbox({
            framework: "vi"
        }), $("body").sbRadio({
            framework: "vi"
        }), $(".sb-vi-select").each(function () {
            $(this).selectForm({
                framework: "vi"
            })
        }), appVisitor.apiRoutePrefixPath = "undefined" != typeof appAdmin ? "/site/" + appAdmin.config.version_key : "";
        new appVisitor.Router, new appVisitor.StickedFooter, new appVisitor.KeyboardShortcuts, new appVisitor.CookiesUsage;
        appVisitor.sendGaEvents = $("body").hasClass("view-visitor"), appVisitor.Popup.initPopups(), appVisitor.topBarTooltip.initTooltips(), appVisitor.OptIn.init(), appVisitor.backToTop = new appVisitor.BackToTop($("#backtotop")).init(), appVisitor.fixed_bloc = new appVisitor.FixedBloc($("body.aside_fixed .aside > .sections-container"), $("#center")).init(), appVisitor.Animations.init(), appVisitor.initElements($("body"))
    }), $(window).on("load", function () {
        setTimeout(function () {
            $(".element-video").each(function () {
                new appVisitor.ElementVideo($(this))
            });
            new appVisitor.ElementVideo.EventsListener;
            $(".element-map-standard .map-container").each(function () {
                new appVisitor.ElementMapStandard($(this)).init()
            }), $(".element-map-advanced .map-container").each(function () {
                new appVisitor.ElementMapAdvanced($(this)).init()
            }), $(".element-map-itinerary .map-container").each(function () {
                new appVisitor.ElementMapItinerary($(this)).init()
            })
        }, 1e3)
    }),
    /*! Picturefill - v2.3.1 - 2015-04-09
     * http://scottjehl.github.io/picturefill
     * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
    window.matchMedia || (window.matchMedia = function () {
        "use strict";
        var t = window.styleMedia || window.media;
        if (!t) {
            var e = document.createElement("style"),
                i = document.getElementsByTagName("script")[0],
                n = null;
            e.type = "text/css", e.id = "matchmediajs-test", i.parentNode.insertBefore(e, i), n = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, t = {
                matchMedium: function (t) {
                    var i = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return e.styleSheet ? e.styleSheet.cssText = i : e.textContent = i, "1px" === n.width
                }
            }
        }
        return function (e) {
            return {
                matches: t.matchMedium(e || "all"),
                media: e || "all"
            }
        }
    }()),
    function (t, e, i) {
        "use strict";

        function n(e) {
            "object" == typeof module && "object" == typeof module.exports ? module.exports = e : "function" == typeof define && define.amd && define("picturefill", function () {
                return e
            }), "object" == typeof t && (t.picturefill = e)
        }

        function o(t) {
            for (var e, i, n, o, s, l = t || {}, c = 0, d = (e = l.elements || r.getAllElements()).length; d > c; c++)
                if (n = (i = e[c]).parentNode, o = void 0, s = void 0, "IMG" === i.nodeName.toUpperCase() && (i[r.ns] || (i[r.ns] = {}), l.reevaluate || !i[r.ns].evaluated)) {
                    if (n && "PICTURE" === n.nodeName.toUpperCase()) {
                        if (r.removeVideoShim(n), !1 === (o = r.getMatch(i, n))) continue
                    } else o = void 0;
                    (n && "PICTURE" === n.nodeName.toUpperCase() || !r.sizesSupported && i.srcset && a.test(i.srcset)) && r.dodgeSrcset(i), o ? (s = r.processSourceSet(o), r.applyBestCandidate(s, i)) : (s = r.processSourceSet(i), (void 0 === i.srcset || i[r.ns].srcset) && r.applyBestCandidate(s, i)), i[r.ns].evaluated = !0
                }
        }

        function s() {
            function i() {
                clearTimeout(n), n = setTimeout(a, 60)
            }
            r.initTypeDetects(), o();
            var n, s = setInterval(function () {
                    return o(), /^loaded|^i|^c/.test(e.readyState) ? void clearInterval(s) : void 0
                }, 250),
                a = function () {
                    o({
                        reevaluate: !0
                    })
                };
            t.addEventListener ? t.addEventListener("resize", i, !1) : t.attachEvent && t.attachEvent("onresize", i)
        }
        if (t.HTMLPictureElement) n(function () {});
        else {
            e.createElement("picture");
            var r = t.picturefill || {},
                a = /\s+\+?\d+(e\d+)?w/;
            r.ns = "picturefill", r.srcsetSupported = "srcset" in i, r.sizesSupported = "sizes" in i, r.curSrcSupported = "currentSrc" in i, r.trim = function (t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }, r.makeUrl = function () {
                var t = e.createElement("a");
                return function (e) {
                    return t.href = e, t.href
                }
            }(), r.restrictsMixedContent = function () {
                return "https:" === t.location.protocol
            }, r.matchesMedia = function (e) {
                return t.matchMedia && t.matchMedia(e).matches
            }, r.getDpr = function () {
                return t.devicePixelRatio || 1
            }, r.getWidthFromLength = function (t) {
                var i;
                if (!t || t.indexOf("%") > -1 != 0 || !(parseFloat(t) > 0 || t.indexOf("calc(") > -1)) return !1;
                t = t.replace("vw", "%"), r.lengthEl || (r.lengthEl = e.createElement("div"), r.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden", r.lengthEl.className = "helper-from-picturefill-js"), r.lengthEl.style.width = "0px";
                try {
                    r.lengthEl.style.width = t
                } catch (n) {}
                return e.body.appendChild(r.lengthEl), 0 >= (i = r.lengthEl.offsetWidth) && (i = !1), e.body.removeChild(r.lengthEl), i
            }, r.detectTypeSupport = function (e, i) {
                var n = new t.Image;
                return n.onerror = function () {
                    r.types[e] = !1, o()
                }, n.onload = function () {
                    r.types[e] = 1 === n.width, o()
                }, n.src = i, "pending"
            }, r.types = r.types || {}, r.initTypeDetects = function () {
                r.types["image/jpeg"] = !0, r.types["image/gif"] = !0, r.types["image/png"] = !0, r.types["image/svg+xml"] = e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), r.types["image/webp"] = r.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")
            }, r.verifyTypeSupport = function (t) {
                var e = t.getAttribute("type");
                if (null === e || "" === e) return !0;
                var i = r.types[e];
                return "string" == typeof i && "pending" !== i ? (r.types[e] = r.detectTypeSupport(e, i), "pending") : "function" == typeof i ? (i(), "pending") : i
            }, r.parseSize = function (t) {
                var e = /(\([^)]+\))?\s*(.+)/g.exec(t);
                return {
                    media: e && e[1],
                    length: e && e[2]
                }
            }, r.findWidthFromSourceSize = function (i) {
                for (var n, o = r.trim(i).split(/\s*,\s*/), s = 0, a = o.length; a > s; s++) {
                    var l = o[s],
                        c = r.parseSize(l),
                        d = c.length,
                        u = c.media;
                    if (d && (!u || r.matchesMedia(u)) && (n = r.getWidthFromLength(d))) break
                }
                return n || Math.max(t.innerWidth || 0, e.documentElement.clientWidth)
            }, r.parseSrcset = function (t) {
                for (var e = [];
                    "" !== t;) {
                    var i, n = (t = t.replace(/^\s+/g, "")).search(/\s/g),
                        o = null;
                    if (-1 !== n) {
                        if (("," === (i = t.slice(0, n)).slice(-1) || "" === i) && (i = i.replace(/,+$/, ""), o = ""), t = t.slice(n + 1), null === o) {
                            var s = t.indexOf(","); - 1 !== s ? (o = t.slice(0, s), t = t.slice(s + 1)) : (o = t, t = "")
                        }
                    } else i = t, t = "";
                    (i || o) && e.push({
                        url: i,
                        descriptor: o
                    })
                }
                return e
            }, r.parseDescriptor = function (t, e) {
                var i, n = e || "100vw",
                    o = t && t.replace(/(^\s+|\s+$)/g, ""),
                    s = r.findWidthFromSourceSize(n);
                if (o)
                    for (var a = o.split(" "), l = a.length - 1; l >= 0; l--) {
                        var c = a[l],
                            d = c && c.slice(c.length - 1);
                        if ("h" !== d && "w" !== d || r.sizesSupported) {
                            if ("x" === d) {
                                var u = c && parseFloat(c, 10);
                                i = u && !isNaN(u) ? u : 1
                            }
                        } else i = parseFloat(parseInt(c, 10) / s)
                    }
                return i || 1
            }, r.getCandidatesFromSourceSet = function (t, e) {
                for (var i = r.parseSrcset(t), n = [], o = 0, s = i.length; s > o; o++) {
                    var a = i[o];
                    n.push({
                        url: a.url,
                        resolution: r.parseDescriptor(a.descriptor, e)
                    })
                }
                return n
            }, r.dodgeSrcset = function (t) {
                t.srcset && (t[r.ns].srcset = t.srcset, t.srcset = "", t.setAttribute("data-pfsrcset", t[r.ns].srcset))
            }, r.processSourceSet = function (t) {
                var e = t.getAttribute("srcset"),
                    i = t.getAttribute("sizes"),
                    n = [];
                return "IMG" === t.nodeName.toUpperCase() && t[r.ns] && t[r.ns].srcset && (e = t[r.ns].srcset), e && (n = r.getCandidatesFromSourceSet(e, i)), n
            }, r.backfaceVisibilityFix = function (t) {
                var e = t.style || {},
                    i = "webkitBackfaceVisibility" in e,
                    n = e.zoom;
                i && (e.zoom = ".999", i = t.offsetWidth, e.zoom = n)
            }, r.setIntrinsicSize = function () {
                var i = {},
                    n = function (t, e, i) {
                        e && t.setAttribute("width", parseInt(e / i, 10))
                    };
                return function (o, s) {
                    var a;
                    o[r.ns] && !t.pfStopIntrinsicSize && (void 0 === o[r.ns].dims && (o[r.ns].dims = o.getAttribute("width") || o.getAttribute("height")), o[r.ns].dims || (s.url in i ? n(o, i[s.url], s.resolution) : ((a = e.createElement("img")).onload = function () {
                        if (i[s.url] = a.width, !i[s.url]) try {
                            e.body.appendChild(a), i[s.url] = a.width || a.offsetWidth, e.body.removeChild(a)
                        } catch (t) {}
                        o.src === s.url && n(o, i[s.url], s.resolution), o = null, a.onload = null, a = null
                    }, a.src = s.url)))
                }
            }(), r.applyBestCandidate = function (t, e) {
                var i, n, o;
                t.sort(r.ascendingSort), o = t[(n = t.length) - 1];
                for (var s = 0; n > s; s++)
                    if ((i = t[s]).resolution >= r.getDpr()) {
                        o = i;
                        break
                    } o && (o.url = r.makeUrl(o.url), e.src !== o.url && (r.restrictsMixedContent() && "http:" === o.url.substr(0, "http:".length).toLowerCase() ? void 0 !== window.console && console.warn("Blocked mixed content image " + o.url) : (e.src = o.url, r.curSrcSupported || (e.currentSrc = e.src), r.backfaceVisibilityFix(e))), r.setIntrinsicSize(e, o))
            }, r.ascendingSort = function (t, e) {
                return t.resolution - e.resolution
            }, r.removeVideoShim = function (t) {
                var e = t.getElementsByTagName("video");
                if (e.length) {
                    for (var i = e[0], n = i.getElementsByTagName("source"); n.length;) t.insertBefore(n[0], i);
                    i.parentNode.removeChild(i)
                }
            }, r.getAllElements = function () {
                for (var t = [], i = e.getElementsByTagName("img"), n = 0, o = i.length; o > n; n++) {
                    var s = i[n];
                    ("PICTURE" === s.parentNode.nodeName.toUpperCase() || null !== s.getAttribute("srcset") || s[r.ns] && null !== s[r.ns].srcset) && t.push(s)
                }
                return t
            }, r.getMatch = function (t, e) {
                for (var i, n = e.childNodes, o = 0, s = n.length; s > o; o++) {
                    var a = n[o];
                    if (1 === a.nodeType) {
                        if (a === t) return i;
                        if ("SOURCE" === a.nodeName.toUpperCase()) {
                            null !== a.getAttribute("src") && void 0 !== typeof console && console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
                            var l = a.getAttribute("media");
                            if (a.getAttribute("srcset") && (!l || r.matchesMedia(l))) {
                                var c = r.verifyTypeSupport(a);
                                if (!0 === c) {
                                    i = a;
                                    break
                                }
                                if ("pending" === c) return !1
                            }
                        }
                    }
                }
                return i
            }, s(), o._ = r, n(o)
        }
    }(window, window.document, new window.Image),
    function () {
        var t, e, i, n, o, s, r, a, l, c, d, u, p, h, f, m, g, v, b, y = {}.hasOwnProperty,
            _ = [].indexOf || function (t) {
                for (var e = 0, i = this.length; e < i; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        s = {
            is_unordered: !1,
            is_counting: !1,
            is_exclusive: !1,
            is_solitary: !1,
            prevent_default: !1,
            prevent_repeat: !1
        }, v = "meta alt option ctrl shift cmd".split(" "), m = "ctrl", t = {
            debug: !1
        };
        var w = function (t) {
            var e, i;
            for (e in t) y.call(t, e) && (!1 !== (i = t[e]) && (this[e] = i));
            this.keys = this.keys || [], this.count = this.count || 0
        };
        w.prototype.allows_key_repeat = function () {
            return !this.prevent_repeat && "function" == typeof this.on_keydown
        }, w.prototype.reset = function () {
            return this.count = 0, this.keyup_fired = null
        };
        var $ = function (t, e) {
            var i, n;
            for (i in "undefined" != typeof jQuery && null !== jQuery && t instanceof jQuery && (1 !== t.length && f("Warning: your jQuery selector should have exactly one object."), t = t[0]), this.should_force_event_defaults = this.should_suppress_event_defaults = !1, this.sequence_delay = 800, this._registered_combos = [], this._keys_down = [], this._active_combos = [], this._sequence = [], this._sequence_timer = null, this._prevent_capture = !1, this._defaults = e || {}, s) y.call(s, i) && (n = s[i], this._defaults[i] = this._defaults[i] || n);
            this.element = t || document.body, i = function (t, e, i) {
                return t.addEventListener ? t.addEventListener(e, i) : t.attachEvent && t.attachEvent("on" + e, i), i
            };
            var o = this;
            this.keydown_event = i(this.element, "keydown", function (t) {
                return t = t || window.event, o._receive_input(t, !0), o._bug_catcher(t)
            });
            var r = this;
            this.keyup_event = i(this.element, "keyup", function (t) {
                return t = t || window.event, r._receive_input(t, !1)
            });
            var a = this;
            this.blur_event = i(window, "blur", function () {
                var t, e, i, n;
                for (e = 0, i = (n = a._keys_down).length; e < i; e++) t = n[e], a._key_up(t, {});
                return a._keys_down = []
            })
        };
        $.prototype.destroy = function () {
            var t;
            return (t = function (t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i) : null != t.removeEvent ? t.removeEvent("on" + e, i) : void 0
            })(this.element, "keydown", this.keydown_event), t(this.element, "keyup", this.keyup_event), t(window, "blur", this.blur_event)
        }, $.prototype._bug_catcher = function (t) {
            var e, i;
            if ("cmd" === m && 0 <= _.call(this._keys_down, "cmd") && "cmd" !== (e = n(null != (i = t.keyCode) ? i : t.key)) && "shift" !== e && "alt" !== e && "caps" !== e && "tab" !== e) return this._receive_input(t, !1)
        }, $.prototype._cmd_bug_check = function (t) {
            return !("cmd" === m && 0 <= _.call(this._keys_down, "cmd") && 0 > _.call(t, "cmd"))
        }, $.prototype._prevent_default = function (t, e) {
            if ((e || this.should_suppress_event_defaults) && !this.should_force_event_defaults && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation)) return t.stopPropagation()
        }, $.prototype._get_active_combos = function (t) {
            var e, i;
            return e = [], (i = r(this._keys_down, function (e) {
                return e !== t
            })).push(t), this._match_combo_arrays(i, function (t) {
                return function (i) {
                    if (t._cmd_bug_check(i.keys)) return e.push(i)
                }
            }(this)), this._fuzzy_match_combo_arrays(i, function (t) {
                return function (i) {
                    if (!(0 <= _.call(e, i)) && !i.is_solitary && t._cmd_bug_check(i.keys)) return e.push(i)
                }
            }(this)), e
        }, $.prototype._get_potential_combos = function (t) {
            var e, i, n, o, s;
            for (i = [], n = 0, o = (s = this._registered_combos).length; n < o; n++)(e = s[n]).is_sequence || 0 <= _.call(e.keys, t) && this._cmd_bug_check(e.keys) && i.push(e);
            return i
        }, $.prototype._add_to_active_combos = function (t) {
            var e, i, n, o, s, r, a, l, c, d, u;
            if (r = !1, s = !0, n = !1, 0 <= _.call(this._active_combos, t)) return !0;
            if (this._active_combos.length)
                for (o = a = 0, d = this._active_combos.length; 0 <= d ? a < d : a > d; o = 0 <= d ? ++a : --a)
                    if ((e = this._active_combos[o]) && e.is_exclusive && t.is_exclusive) {
                        if (e = e.keys, !r)
                            for (l = 0, c = e.length; l < c; l++)
                                if (i = e[l], r = !0, 0 > _.call(t.keys, i)) {
                                    r = !1;
                                    break
                                } if (s && !r)
                            for (l = 0, c = (u = t.keys).length; l < c; l++)
                                if (i = u[l], s = !1, 0 > _.call(e, i)) {
                                    s = !0;
                                    break
                                } r && (n ? null != (e = this._active_combos.splice(o, 1)[0]) && e.reset() : (null != (e = this._active_combos.splice(o, 1, t)[0]) && e.reset(), n = !0), s = !1)
                    } return s && this._active_combos.unshift(t), r || s
        }, $.prototype._remove_from_active_combos = function (t) {
            var e, i, n;
            for (e = i = 0, n = this._active_combos.length; 0 <= n ? i < n : i > n; e = 0 <= n ? ++i : --i)
                if (this._active_combos[e] === t) {
                    (t = this._active_combos.splice(e, 1)[0]).reset();
                    break
                }
        }, $.prototype._get_possible_sequences = function () {
            var t, e, i, n, o, s, a, l, c, d, u, p;
            for (n = [], s = 0, c = (d = this._registered_combos).length; s < c; s++)
                for (t = d[s], e = a = 1, u = this._sequence.length; 1 <= u ? a <= u : a >= u; e = 1 <= u ? ++a : --a)
                    if (o = this._sequence.slice(-e), t.is_sequence) {
                        if (0 > _.call(t.keys, "shift") && !(o = r(o, function (t) {
                                return "shift" !== t
                            })).length) continue;
                        for (e = l = 0, p = o.length; 0 <= p ? l < p : l > p; e = 0 <= p ? ++l : --l) {
                            if (t.keys[e] !== o[e]) {
                                i = !1;
                                break
                            }
                            i = !0
                        }
                        i && n.push(t)
                    } return n
        }, $.prototype._add_key_to_sequence = function (t, e) {
            var i, n, o, s;
            if (this._sequence.push(t), (n = this._get_possible_sequences()).length) {
                for (o = 0, s = n.length; o < s; o++) i = n[o], this._prevent_default(e, i.prevent_default);
                this._sequence_timer && clearTimeout(this._sequence_timer), -1 < this.sequence_delay && (this._sequence_timer = setTimeout(function () {
                    return this._sequence = []
                }, this.sequence_delay))
            } else this._sequence = []
        }, $.prototype._get_sequence = function (t) {
            var e, i, n, o, s, a, l, c, d, u, p, h;
            for (a = 0, d = (u = this._registered_combos).length; a < d; a++)
                if ((e = u[a]).is_sequence) {
                    for (i = l = 1, p = this._sequence.length; 1 <= p ? l <= p : l >= p; i = 1 <= p ? ++l : --l)
                        if (s = r(this._sequence, function (t) {
                                return 0 <= _.call(e.keys, "shift") || "shift" !== t
                            }).slice(-i), e.keys.length === s.length)
                            for (i = c = 0, h = s.length; 0 <= h ? c < h : c > h; i = 0 <= h ? ++c : --c)
                                if (o = s[i], !(0 > _.call(e.keys, "shift") && "shift" === o || "shift" === t && 0 > _.call(e.keys, "shift"))) {
                                    if (e.keys[i] !== o) {
                                        n = !1;
                                        break
                                    }
                                    n = !0
                                } if (n) return e.is_exclusive && (this._sequence = []), e
                } return !1
        }, $.prototype._receive_input = function (t, e) {
            var i, o;
            if (this._prevent_capture) this._keys_down.length && (this._keys_down = []);
            else if (i = n(null != (o = t.keyCode) ? o : t.key), (e || this._keys_down.length || "alt" !== i && i !== m) && i) return e ? this._key_down(i, t) : this._key_up(i, t)
        }, $.prototype._fire = function (t, e, i, n) {
            if ("function" == typeof e["on_" + t] && this._prevent_default(i, !0 !== e["on_" + t].call(e["this"], i, e.count, n)), "release" === t && (e.count = 0), "keyup" === t) return e.keyup_fired = !0
        }, $.prototype._match_combo_arrays = function (t, n) {
            var o, s, r, a;
            for (s = 0, r = (a = this._registered_combos).length; s < r; s++)(!(o = a[s]).is_unordered && i(t, o.keys) || o.is_unordered && e(t, o.keys)) && n(o)
        }, $.prototype._fuzzy_match_combo_arrays = function (t, e) {
            var i, n, o, s;
            for (n = 0, o = (s = this._registered_combos).length; n < o; n++)(!(i = s[n]).is_unordered && c(i.keys, t) || i.is_unordered && l(i.keys, t)) && e(i)
        }, $.prototype._keys_remain = function (t) {
            var e, i, n, o;
            for (i = 0, n = (o = t.keys).length; i < n; i++)
                if (t = o[i], 0 <= _.call(this._keys_down, t)) {
                    e = !0;
                    break
                } return e
        }, $.prototype._key_down = function (t, e) {
            var i, n, s, r, a;
            for (s in (i = o(t, e)) && (t = i), this._add_key_to_sequence(t, e), (i = this._get_sequence(t)) && this._fire("keydown", i, e), g) e[i = g[s]] && (s === t || 0 <= _.call(this._keys_down, s) || this._keys_down.push(s));
            for (s in g)
                if (i = g[s], s !== t && 0 <= _.call(this._keys_down, s) && !e[i] && ("cmd" !== s || "cmd" === m))
                    for (i = n = 0, r = this._keys_down.length; 0 <= r ? n < r : n > r; i = 0 <= r ? ++n : --n) this._keys_down[i] === s && this._keys_down.splice(i, 1);
            for (n = this._get_active_combos(t), s = this._get_potential_combos(t), r = 0, a = n.length; r < a; r++) i = n[r], this._handle_combo_down(i, s, t, e);
            if (s.length)
                for (n = 0, r = s.length; n < r; n++) i = s[n], this._prevent_default(e, i.prevent_default);
            0 > _.call(this._keys_down, t) && this._keys_down.push(t)
        }, $.prototype._handle_combo_down = function (t, e, i, n) {
            var o, s, r, a, l;
            if (0 > _.call(t.keys, i)) return !1;
            if (this._prevent_default(n, t && t.prevent_default), o = !1, 0 <= _.call(this._keys_down, i) && (o = !0, !t.allows_key_repeat())) return !1;
            if (r = this._add_to_active_combos(t, i), i = t.keyup_fired = !1, t.is_exclusive)
                for (a = 0, l = e.length; a < l; a++)
                    if ((s = e[a]).is_exclusive && s.keys.length > t.keys.length) {
                        i = !0;
                        break
                    } return !i && (t.is_counting && "function" == typeof t.on_keydown && (t.count += 1), r) ? this._fire("keydown", t, n, o) : void 0
        }, $.prototype._key_up = function (t, e) {
            var i, n, s, r, a, l;
            if (i = t, (s = o(t, e)) && (t = s), s = h[i], e.shiftKey ? s && 0 <= _.call(this._keys_down, s) || (t = i) : i && 0 <= _.call(this._keys_down, i) || (t = s), (r = this._get_sequence(t)) && this._fire("keyup", r, e), 0 > _.call(this._keys_down, t)) return !1;
            for (r = a = 0, l = this._keys_down.length; 0 <= l ? a < l : a > l; r = 0 <= l ? ++a : --a)
                if ((n = this._keys_down[r]) === t || n === s || n === i) {
                    this._keys_down.splice(r, 1);
                    break
                } for (n = this._active_combos.length, s = [], r = 0, a = (l = this._active_combos).length; r < a; r++) i = l[r], 0 <= _.call(i.keys, t) && s.push(i);
            for (r = 0, a = s.length; r < a; r++) i = s[r], this._handle_combo_up(i, e, t);
            if (1 < n)
                for (n = 0, r = (a = this._active_combos).length; n < r; n++) void 0 === (i = a[n]) || 0 <= _.call(s, i) || this._keys_remain(i) || this._remove_from_active_combos(i)
        }, $.prototype._handle_combo_up = function (t, i, n) {
            var o, s;
            this._prevent_default(i, t && t.prevent_default), s = this._keys_remain(t), t.keyup_fired || ((o = this._keys_down.slice()).push(n), t.is_solitary && !e(o, t.keys)) || (this._fire("keyup", t, i), t.is_counting && "function" == typeof t.on_keyup && "function" != typeof t.on_keydown && (t.count += 1)), s || (this._fire("release", t, i), this._remove_from_active_combos(t))
        }, $.prototype.simple_combo = function (t, e) {
            return this.register_combo({
                keys: t,
                on_keydown: e
            })
        }, $.prototype.counting_combo = function (t, e) {
            return this.register_combo({
                keys: t,
                is_counting: !0,
                is_unordered: !1,
                on_keydown: e
            })
        }, $.prototype.sequence_combo = function (t, e) {
            return this.register_combo({
                keys: t,
                on_keydown: e,
                is_sequence: !0,
                is_exclusive: !0
            })
        }, $.prototype.register_combo = function (t) {
            var e, i, n;
            for (e in "string" == typeof t.keys && (t.keys = t.keys.split(" ")), n = this._defaults) y.call(n, e) && (i = n[e], void 0 === t[e] && (t[e] = i));
            if (t = new w(t), b(t)) return this._registered_combos.push(t), t
        }, $.prototype.register_many = function (t) {
            var e, i, n, o;
            for (o = [], i = 0, n = t.length; i < n; i++) e = t[i], o.push(this.register_combo(e));
            return o
        }, $.prototype.unregister_combo = function (t) {
            var n, o, s, r, a, l;
            if (!t) return !1;
            var c = this;
            if (o = function (t) {
                    var e, i, n, o;
                    for (o = [], e = i = 0, n = c._registered_combos.length; 0 <= n ? i < n : i > n; e = 0 <= n ? ++i : --i) {
                        if (t === c._registered_combos[e]) {
                            c._registered_combos.splice(e, 1);
                            break
                        }
                        o.push(void 0)
                    }
                    return o
                }, t instanceof w) return o(t);
            for ("string" == typeof t && (t = t.split(" ")), l = [], s = 0, r = (a = this._registered_combos).length; s < r; s++) null != (n = a[s]) && (n.is_unordered && e(t, n.keys) || !n.is_unordered && i(t, n.keys) ? l.push(o(n)) : l.push(void 0));
            return l
        }, $.prototype.unregister_many = function (t) {
            var e, i, n, o;
            for (o = [], i = 0, n = t.length; i < n; i++) e = t[i], o.push(this.unregister_combo(e));
            return o
        }, $.prototype.get_registered_combos = function () {
            return this._registered_combos
        }, $.prototype.reset = function () {
            return this._registered_combos = []
        }, $.prototype.listen = function () {
            return this._prevent_capture = !1
        }, $.prototype.stop_listening = function () {
            return this._prevent_capture = !0
        }, $.prototype.get_meta_key = function () {
            return m
        }, t.Listener = $, n = function (t) {
            return p[t]
        }, r = function (t, e) {
            var i, n, o, s;
            if (t.filter) return t.filter(e);
            for (s = [], n = 0, o = t.length; n < o; n++) e(i = t[n]) && s.push(i);
            return s
        }, e = function (t, e) {
            var i, n, o;
            if (t.length !== e.length) return !1;
            for (n = 0, o = t.length; n < o; n++)
                if (i = t[n], !(0 <= _.call(e, i))) return !1;
            return !0
        }, i = function (t, e) {
            var i, n, o;
            if (t.length !== e.length) return !1;
            for (i = n = 0, o = t.length; 0 <= o ? n < o : n > o; i = 0 <= o ? ++n : --n)
                if (t[i] !== e[i]) return !1;
            return !0
        }, l = function (t, e) {
            var i, n, o;
            for (n = 0, o = t.length; n < o; n++)
                if (i = t[n], 0 > _.call(e, i)) return !1;
            return !0
        }, a = Array.prototype.indexOf || function (t, e) {
            var i, n, o;
            for (i = n = 0, o = t.length; 0 <= o ? n <= o : n >= o; i = 0 <= o ? ++n : --n)
                if (t[i] === e) return i;
            return -1
        }, c = function (t, e) {
            var i, n, o, s;
            for (o = n = 0, s = t.length; o < s; o++) {
                if (i = t[o], !((i = a.call(e, i)) >= n)) return !1;
                n = i
            }
            return !0
        }, f = function () {
            if (t.debug) return console.log.apply(console, arguments)
        }, d = function (t) {
            var e, i;
            for (i in e = !1, p)
                if (t === p[i]) {
                    e = !0;
                    break
                } if (!e)
                for (i in h)
                    if (t === h[i]) {
                        e = !0;
                        break
                    } return e
        }, b = function (t) {
            var e, i, n, o, r, l, c;
            for (r = !0, t.keys.length || f("You're trying to bind a combo with no keys:", t), i = l = 0, c = t.keys.length; 0 <= c ? l < c : l > c; i = 0 <= c ? ++l : --l) n = t.keys[i], (e = u[n]) && (n = t.keys[i] = e), "meta" === n && t.keys.splice(i, 1, m), "cmd" === n && f('Warning: use the "meta" key rather than "cmd" for Windows compatibility');
            for (e = 0, l = (c = t.keys).length; e < l; e++) n = c[e], d(n) || (f('Do not recognize the key "' + n + '"'), r = !1);
            if (0 <= _.call(t.keys, "meta") || 0 <= _.call(t.keys, "cmd")) {
                for (e = t.keys.slice(), l = 0, c = v.length; l < c; l++) n = v[l], -1 < (i = a.call(e, n)) && e.splice(i, 1);
                1 < e.length && (f("META and CMD key combos cannot have more than 1 non-modifier keys", t, e), r = !1)
            }
            for (o in t) "undefined" === s[o] && f("The property " + o + " is not a valid combo property. Your combo has still been registered.");
            return r
        }, o = function (t, e) {
            var i;
            return !!e.shiftKey && (null != (i = h[t]) && i)
        }, g = {
            cmd: "metaKey",
            ctrl: "ctrlKey",
            shift: "shiftKey",
            alt: "altKey"
        }, u = {
            escape: "esc",
            control: "ctrl",
            command: "cmd",
            "break": "pause",
            windows: "cmd",
            option: "alt",
            caps_lock: "caps",
            apostrophe: "'",
            semicolon: ";",
            tilde: "~",
            accent: "`",
            scroll_lock: "scroll",
            num_lock: "num"
        }, h = {
            "/": "?",
            ".": ">",
            ",": "<",
            "'": '"',
            ";": ":",
            "[": "{",
            "]": "}",
            "\\": "|",
            "`": "~",
            "=": "+",
            "-": "_",
            1: "!",
            2: "@",
            3: "#",
            4: "$",
            5: "%",
            6: "^",
            7: "&",
            8: "*",
            9: "(",
            0: ")"
        }, p = {
            0: "\\",
            8: "backspace",
            9: "tab",
            12: "num",
            13: "enter",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "caps",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            44: "print",
            45: "insert",
            46: "delete",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            91: "cmd",
            92: "cmd",
            93: "cmd",
            96: "num_0",
            97: "num_1",
            98: "num_2",
            99: "num_3",
            100: "num_4",
            101: "num_5",
            102: "num_6",
            103: "num_7",
            104: "num_8",
            105: "num_9",
            106: "num_multiply",
            107: "num_add",
            108: "num_enter",
            109: "num_subtract",
            110: "num_decimal",
            111: "num_divide",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            124: "print",
            144: "num",
            145: "scroll",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            223: "`",
            224: "cmd",
            225: "alt",
            57392: "ctrl",
            63289: "num",
            59: ";",
            61: "=",
            173: "-"
        }, t._keycode_dictionary = p, t._is_array_in_array_sorted = c, -1 !== navigator.userAgent.indexOf("Mac OS X") && (m = "cmd"), -1 !== navigator.userAgent.indexOf("Opera") && (p[17] = "cmd"), "function" == typeof define && define.amd ? define([], function () {
            return t
        }) : "undefined" != typeof exports && null !== exports ? exports.keypress = t : window.keypress = t
    }.call(this);
(appTheme = appTheme || {}).FixedComponents = function () {
    function t() {
        this.$body = $("body"), this.$menu = $("#header_wrapper"), this.$topBar = $("#top-bar"), this.fixedMenuEnabled = this.$body.hasClass("menu_fixed"), this.fixedTopBarEnabled = this.$body.hasClass("top_bar_fixed"), this.$menu.length && (this.menuOffset = this.$menu.offset(), this.menuOffsetTop = this.menuOffset.top, this.menuHeight = this.$menu[0].offsetHeight), this.$topBar.length && (this.topBarOffset = this.$topBar.offset(), this.topBarOffsetTop = this.topBarOffset.top, this.topBarHeight = this.$topBar[0].offsetHeight), this.init()
    }
    return t.prototype = {
        fixMenu: function (t) {
            this.fixedMenuEnabled && (t > this.getMenuOffsetTop() ? (this.$menu.css({
                position: "fixed",
                top: this.fixedTopBar() && this.topBarHeight ? this.topBarHeight : 0,
                left: this.menuOffset.left,
                width: this.$menu[0].offsetWidth,
                zIndex: 7200
            }, 100).addClass("menu_is_fixing"), 0 == $(".header-wrapper-mask").length && ($headerWrapperMask = $('<div class="header-wrapper-mask"></div>'), this.$menu.before($headerWrapperMask.css("height", this.menuHeight)))) : (this.$menu.css({
                position: "static"
            }).removeClass("menu_is_fixing"), $(".header-wrapper-mask").remove()))
        },
        fixTopBar: function (t) {
            this.fixedTopBarEnabled && (t > this.topBarOffsetTop ? this.$topBar.css({
                position: "fixed",
                top: 0,
                left: this.topBarOffset.left,
                width: this.$topBar[0].offsetWidth,
                zIndex: 7200
            }, 100).addClass("top_bar_is_fixing") : this.$topBar.css({
                position: "static"
            }).removeClass("top_bar_is_fixing"), this.setPaddingTop())
        },
        fixComponents: function () {
            var t = this;
            $(document).scroll(function () {
                var e = $(window).scrollTop();
                t.fixMenu(e), t.fixTopBar(e)
            })
        },
        init: function () {
            (this.fixedMenuEnabled || this.fixedTopBarEnabled) && this.fixComponents()
        },
        fixedMenu: function () {
            return this.$menu.hasClass("menu_is_fixing")
        },
        fixedTopBar: function () {
            return this.$topBar.hasClass("top_bar_is_fixing")
        },
        getMenuOffsetTop: function () {
            var t = this.menuOffsetTop;
            return this.fixedTopBar() && (t -= this.topBarHeight), t
        },
        setPaddingTop: function () {
            paddingTop = 0, this.fixedTopBar() && (paddingTop += this.topBarHeight), $("#body-container-inner").css("padding-top", paddingTop)
        }
    }, t
}(), (appTheme = appTheme || {}).Header2 = function () {
    function t() {
        this.$html = $("#header2"), this.init()
    }
    return t.prototype = {
        init: function () {
            this.adaptHeightToWindow()
        },
        adaptHeightToWindow: function () {
            $("body").hasClass("adapt_header2_height_to_window") && this.$html.find(".sb-bloc-level-3:first").css("height", $(window).height() - this.$html.offset().top)
        }
    }, t
}();
var appTheme = appTheme || {};
$(document).on("ready page:load", function () {
    var t = new appVisitor.Router;
    $(window).width() >= 992 && (t.isContextContent() || t.isContextPages() || (appTheme.fixedComponents = new appTheme.FixedComponents), appTheme.header2 = new appTheme.Header2)
});
(appThemeMobile = appThemeMobile || {}).Menu = function () {
    function i() {
        var i = $("#mobile-wrapper");
        1 === i.length && (this.$html = i, this.$menu = this.$html.find(".menu-mobile"), this.$btnOpener = this.$html.find(".menu-mobile-button-open"), this.$btnCloser = this.$html.find(".menu-mobile-button-close"), this.originWidth = $(window).width(), this.widthMenu = this.originWidth <= 500 ? .85 * this.originWidth : "300", this.transition = 150, this.disabled = !1, this.init())
    }
    return i.prototype = {
        _initMenu: function () {
            var i = this;
            this.$menu.css({
                width: i.widthMenu + "px",
                right: "-" + i.widthMenu + "px"
            })
        },
        _menuVisible: function () {
            return $("body").hasClass("menu-mobile-visible")
        },
        _clickEvent: function () {
            var i = this;
            this.$btnOpener.on("click", function () {
                i._showMenu()
            }), this.$btnCloser.on("click", function () {
                i._hideMenu()
            }), this.$menu.on("click", "a.menu-tab-element.content-link", function () {
                i._hideMenu()
            })
        },
        _moveEvent: function () {
            var i = this;
            this.$menu.on("move", function (e) {
                e.distX >= 0 && i.$menu.css({
                    right: "-" + e.distX + "px"
                })
            }).on("moveend", function (e) {
                e.distX > 100 ? i._hideMenu() : i._showMenu()
            }), this._menuVisible() || $("body").on("movestart", function (e) {
                if ((e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && e.preventDefault(), i.disabled) return !1
            }).on("move", function (e) {
                if ($(window).width() - e.startX <= 80 && e.distX <= 0) {
                    var n = e.distX *= -1;
                    e.distX <= i.widthMenu && i.$menu.addClass("visible").css({
                        right: -i.widthMenu + n + "px"
                    })
                }
            }).on("moveend", function (e) {
                var n = $(window).width();
                e.distX *= -1;
                n - e.startX <= 80 && (e.distX >= i.widthMenu / 3 && e.distX <= i.widthMenu ? i._showMenu() : i._hideMenu())
            })
        },
        _subMenuEvent: function () {
            this.$menu.on("click", ".folder-label-opener", function () {
                var i = $(this),
                    e = i.parents(".menu-mobile-element-with-subfolder").find(".mobile-menu-tabs");
                i.hasClass("active") ? (i.removeClass("active").find(".close-icon").hide().end().find(".open-icon").show(), e.removeClass("visible")) : (i.addClass("active").find(".open-icon").hide().end().find(".close-icon").show(), e.addClass("visible"))
            })
        },
        _showMenu: function () {
            var i = this;
            i.$btnCloser.show(), $("body").addClass("menu-mobile-visible"), i.$menu.addClass("visible").animate({
                right: 0
            }, i.transition)
        },
        _hideMenu: function () {
            var i = this;
            i.$menu.removeClass("visible"), $("body").removeClass("menu-mobile-visible"), i.$menu.animate({
                right: "-" + i.widthMenu
            }, i.transition), i.$btnCloser.hide()
        },
        init: function () {
            var i = this;
            $(window).resize(function () {
                i._menuVisible() && i._hideMenu()
            }), this._initMenu(), this._clickEvent(), this._subMenuEvent()
        }
    }, i
}();
var appThemeMobile = appThemeMobile || {};
$(document).on("ready page:load", function () {
    (new appVisitor.Router).isContextContent() || (appThemeMobile.Menu = new appThemeMobile.Menu)
});