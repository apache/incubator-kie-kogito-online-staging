!function(a){"use strict";a.fn.sidebar=function(){var e=0;a(".navbar-pf .navbar-toggle").is(":hidden")&&(e=a(document).height()-a(".navbar-pf").outerHeight()),a(".sidebar-pf").parent(".row").children('[class*="col-"]').css({"min-height":e})},a(document).ready((function(){a(".sidebar-pf").length>0&&0===a(".datatable").length&&a.fn.sidebar()})),a(window).resize((function(){a(".sidebar-pf").length>0&&a.fn.sidebar()}))}(jQuery),function(a){"use strict";a.fn.popovers=function(){return this.popover(),this.filter("[data-close=true]").each((function(e,t){var n=a(t),i=n.attr("data-original-title")+'<button type="button" class="close" aria-hidden="true"><span class="pficon pficon-close"></span></button>';n.attr("data-original-title",i)})),this.on("click",(function(e){var t=a(this),n=t.next(".popover").find(".popover-title");n.find(".close").parent(".popover-title").addClass("closable"),n.find(".close").on("click",(function(){t.popover("hide")})),e.preventDefault()})),this}}(jQuery),function(a){"use strict";a.fn.dataTableExt&&(a.extend(!0,a.fn.dataTable.defaults,{bDestroy:!0,bAutoWidth:!1,iDisplayLength:20,sDom:"<'dataTables_header' f i r ><'table-responsive'  t ><'dataTables_footer' p >",oLanguage:{sInfo:"Showing <b>_START_</b> to <b>_END_</b> of <b>_TOTAL_</b> Items",sInfoFiltered:"(of <b>_MAX_</b>)",sInfoEmpty:"Showing <b>0</b> Results",sZeroRecords:"<p>Suggestions</p><ul><li>Check the javascript regular expression syntax of the search term.</li><li>Check that the correct menu option is chosen (token ID vs. user ID).</li><li>Use wildcards (* to match 0 or more characters, + to match 1 or more characters, ? to match 0 or 1 character).</li><li>Clear the search field, then click Search to return to the 20 most recent records.</li></ul>",sSearch:""},sPaginationType:"bootstrap_input",oSearch:{sSearch:"",bRegex:!0,bSmart:!1}}),a.extend(a.fn.dataTableExt.oStdClasses,{sWrapper:"dataTables_wrapper"}),a.fn.dataTableExt.oApi.fnPagingInfo=function(a){return{iStart:a._iDisplayStart,iEnd:a.fnDisplayEnd(),iLength:a._iDisplayLength,iTotal:a.fnRecordsTotal(),iFilteredTotal:a.fnRecordsDisplay(),iPage:-1===a._iDisplayLength?0:Math.ceil(a._iDisplayStart/a._iDisplayLength),iTotalPages:-1===a._iDisplayLength?0:Math.ceil(a.fnRecordsDisplay()/a._iDisplayLength)}},a.extend(a.fn.dataTableExt.oPagination,{bootstrap_input:{fnInit:function(e,t,n){var i,o,s=function(a){a.preventDefault(),e.oApi._fnPageChange(e,a.data.action)&&n(e)};a(t).append('<ul class="pagination">  <li class="first disabled"><span class="i fa fa-angle-double-left"></span></li>  <li class="prev disabled"><span class="i fa fa-angle-left"></span></li></ul><div class="pagination-input">  <input type="text" class="paginate_input">  <span class="paginate_of">of <b>3</b></span></div><ul class="pagination">  <li class="next disabled"><span class="i fa fa-angle-right"></span></li>  <li class="last disabled"><span class="i fa fa-angle-double-right"></span></li></ul>'),i=a("li",t),a(i[0]).bind("click.DT",{action:"first"},s),a(i[1]).bind("click.DT",{action:"previous"},s),a(i[2]).bind("click.DT",{action:"next"},s),a(i[3]).bind("click.DT",{action:"last"},s),o=a("input",t),a(o).keyup((function(a){var t;if(38===a.which||39===a.which?this.value+=1:(37===a.which||40===a.which)&&this.value>1&&(this.value-=1),""!==this.value&&this.value.match(/[0-9]/)){if((t=e._iDisplayLength*(this.value-1))>=e.fnRecordsDisplay()||t<0)return e._iDisplayStart=(Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength)-1)*e._iDisplayLength,void n(e);e._iDisplayStart=t,n(e)}}))},fnUpdate:function(e,t){var n,i=e.oInstance.fnPagingInfo(),o=e.aanFeatures.p,s=o.length,l=Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength),r=Math.ceil(e._iDisplayStart/e._iDisplayLength)+1;for(n=0;n<s;n+=1)a(".paginate_input",o[n]).val(r).siblings(".paginate_of").find("b").html(l),0===i.iPage?(a("li.first",o[n]).addClass("disabled"),a("li.prev",o[n]).addClass("disabled")):(a("li.first",o[n]).removeClass("disabled"),a("li.prev",o[n]).removeClass("disabled")),i.iPage===i.iTotalPages-1||0===i.iTotalPages?(a("li.next",o[n]).addClass("disabled"),a("li.last",o[n]).addClass("disabled")):(a("li.next",o[n]).removeClass("disabled"),a("li.last",o[n]).removeClass("disabled"))}}}))}(jQuery),function(a){"use strict";void 0!==patternfly&&(a.pfBreakpoints=patternfly.pfBreakpoints)}(jQuery),function(a){"use strict";a.fn.navigation=function(){var e=a(".layout-pf-alt-fixed .nav-pf-vertical-alt"),t=a(".container-pf-alt-nav-pf-vertical-alt"),n=a(".navbar-toggle"),i=!1,o=function(){var n=a(window).width();e.removeClass("hidden show-mobile-nav collapsed"),t.removeClass("collapsed-nav hidden-nav"),(n<a.pfBreakpoints.desktop||i)&&(e.addClass("collapsed"),t.addClass("collapsed-nav")),n<a.pfBreakpoints.tablet&&(e.addClass("hidden"),e.removeClass("collapsed"),t.removeClass("collapsed-nav"),t.addClass("hidden-nav"))},s=function(){a("html").addClass("transitions")};a(window).on("resize",(function(){o(),s()})),o(),n.on("click",(function(a){var n=t.hasClass("hidden-nav");s(),n&&e.hasClass("show-mobile-nav")?e.removeClass("show-mobile-nav"):n?e.addClass("show-mobile-nav"):e.hasClass("collapsed")?(e.removeClass("collapsed"),t.removeClass("collapsed-nav"),i=!1):(e.addClass("collapsed"),t.addClass("collapsed-nav"),i=!0)})),a('.nav-pf-vertical-alt [data-toggle="tooltip"]').tooltip({container:"body",delay:{show:"500",hide:"200"}}),a(".nav-pf-vertical-alt").on("show.bs.tooltip",(function(e){return a(this).hasClass("collapsed")}))},a(document).ready((function(){a(".nav-pf-vertical-alt").length>0&&a.fn.navigation()}))}(jQuery),function(a){"use strict";a.fn.countRemainingChars=function(e){var t=a.extend({charsMaxLimit:100,charsWarnRemaining:5,blockInputAtMaxLimit:!1},e),n=this,i=a("#"+t.countFld).text(t.charsMaxLimit),o=function(a){var e=t.charsMaxLimit-a;i.text(e),i.toggleClass("chars-warn-remaining-pf",e<=t.charsWarnRemaining),e<0?n.trigger("overCharsMaxLimitEvent",n.attr("id")):n.trigger("underCharsMaxLimitEvent",n.attr("id"))};return this.on("paste",(function(a){setTimeout((function(){var a,e=n.val().length;t.blockInputAtMaxLimit&&e>t.charsMaxLimit&&(a=(a=n.val()).substring(0,t.charsMaxLimit),n.val(a),e=n.val().length),o(e)}),100)})),this.keyup((function(a){o(n.val().length)})),this.keydown((function(a){var e=n.val().length;t.blockInputAtMaxLimit&&e>=t.charsMaxLimit&&8!==a.keyCode&&a.preventDefault()})),this}}(jQuery),function(a){"use strict";void 0!==patternfly&&(a.pfPaletteColors=patternfly.pfPaletteColors)}(jQuery),function(a){"use strict";void 0!==patternfly&&(a.fn.pfSetDonutChartTitle=patternfly.pfSetDonutChartTitle,a.fn.pfDonutTooltipContents=patternfly.pfDonutTooltipContents,a.fn.pfGetUtilizationDonutTooltipContentsFn=patternfly.pfGetUtilizationDonutTooltipContentsFn,a.fn.pfGetBarChartTooltipContentsFn=patternfly.pfGetBarChartTooltipContentsFn,a.fn.pfSingleLineChartTooltipContentsFn=patternfly.pfSingleLineChartTooltipContentsFn,a.fn.pfPieTooltipContents=patternfly.pfPieTooltipContents,a.fn.c3ChartDefaults=patternfly.c3ChartDefaults)}(jQuery),function(a){"use strict";a.fn.initCollapseHeights=function(e){var t,n=this,i=e;(t=function(){var e,t,o,s,l="hidden";e=n.height(),(t=n.find(".collapse.in"))&&t.length>0&&t.removeClass("in"),o=0,n.children().each(a.proxy((function(e,t){var n=a(t);o+=n.outerHeight(!0)}),n)).end(),(s=e-o)<25&&(s=25,l="auto"),t&&t.length>0&&t.addClass("in"),setTimeout((function(){n.find('[data-toggle="collapse"]').each(a.proxy((function(e,t){var n,o,l,r,d=0;(o=(n=a(t)).attr("data-target"))||(o=n.attr("href")),l=a(o),r=l,i&&(1===(r=l.find(i)).length?(d=0,l.children().each(a.proxy((function(e,t){var n=a(t);t!==r[0]&&(d+=n.outerHeight(!0))}),l)).end(),s-=d):r=l),r.css({"max-height":s-d+"px","overflow-y":"auto"})}),n)).end(),n.css({"overflow-y":l})}),100)})(),a(window).resize(t)}}(jQuery),function(a){"use strict";function e(e,t){var n=t.attr("data-parent");if("string"==typeof n)return isNaN(n)?e.closest(n):a(e[parseInt(n,10)])}function t(a,e){e&&(e.find(".treegrid-node > span.expand-icon").toggleClass("fa-angle-right",e.hasClass("collapsed")).toggleClass("fa-angle-down",!e.hasClass("collapsed")),a.toggleClass("hidden",e.hasClass("collapsed")),e.hasClass("collapsed")&&a.addClass("collapsed"))}function n(a){a.find("tbody > tr").removeClass("odd"),a.find("tbody > tr:not(.hidden):odd").addClass("odd")}a.fn.treegrid=function(i){var o,s,l;s=this.find("tbody > tr"),l=this,a.each(s,(function(){var r,d;if(r=a(this),d=e(s,r),r.children(".treegrid-node").prepend('<span class="icon expand-icon fa"/>'),r.children(".treegrid-node").on("click",(function(o){var d=r.find("span.expand-icon");i&&"function"==typeof i.callback&&i.callback(o),d.hasClass("fa-angle-right")&&r.removeClass("collapsed"),d.hasClass("fa-angle-down")&&r.addClass("collapsed"),a.each(s.slice(s.index(r)+1),(function(){t(a(this),e(s,a(this)))})),n(l)})),d){for(o=d.find(".treegrid-node > span.indent").length+1;o>0;o-=1)r.children(".treegrid-node").prepend('<span class="indent"/>');t(r,d)}})),n(l)}}(jQuery),function(a){"use strict";a.fn.setupVerticalNavigation=function(e){var t=a(".nav-pf-vertical"),n=a(".container-pf-nav-pf-vertical"),i=a(".navbar-toggle"),o=!1,s=!1,l=function(){return n.hasClass("hidden-nav")},r=function(e){setTimeout((function(){a(window).trigger("resize")}),e)},d=function(){!l()&&s||(t.addClass("secondary-visible-pf"),n.addClass("secondary-visible-pf")),s||r(100)},c=function(){t.removeClass("secondary-visible-pf"),n.removeClass("secondary-visible-pf"),t.find(".mobile-nav-item-pf").each((function(e,t){a(t).removeClass("mobile-nav-item-pf")}))},p=function(e){a(document).find(".nav-pf-vertical > .list-group > .list-group-item.active").each((function(e,t){a(t).removeClass("active")})),e.addClass("active")},v=function(e,t){a(document).find(".nav-pf-secondary-nav > .list-group > .list-group-item.active").each((function(e,t){a(t).removeClass("active")})),e.addClass("active"),p(t)},f=function(e,t,n){a(document).find(".nav-pf-tertiary-nav > .list-group > .list-group-item.active").each((function(e,t){a(t).removeClass("active")})),e.addClass("active"),v(t,n)},u=function(){l()?(t.removeClass("show-mobile-nav"),c(),t.find(".mobile-nav-item-pf").each((function(e,t){a(t).removeClass("mobile-nav-item-pf")}))):d()},h=function(e,i){e?(i.addClass("collapsed"),t.addClass("collapsed-secondary-nav-pf"),n.addClass("collapsed-secondary-nav-pf")):(i?i.removeClass("collapsed"):t.find('[data-toggle="collapse-secondary-nav"]').each((function(e,t){a(t).removeClass("collapsed")})),t.removeClass("collapsed-secondary-nav-pf"),n.removeClass("collapsed-secondary-nav-pf"))},m=function(e,i){e?(i.addClass("collapsed"),t.addClass("collapsed-tertiary-nav-pf"),n.addClass("collapsed-tertiary-nav-pf"),h(!1)):(i?i.removeClass("collapsed"):t.find('[data-toggle="collapse-tertiary-nav"]').each((function(e,t){a(t).removeClass("collapsed")})),t.removeClass("collapsed-tertiary-nav-pf"),n.removeClass("collapsed-tertiary-nav-pf"))},g=function(e,n){a(document).find(".list-group-item.mobile-nav-item-pf").each((function(e,t){a(t).removeClass("mobile-nav-item-pf")})),a(document).find(".list-group-item.mobile-secondary-item-pf").each((function(e,t){a(t).removeClass("mobile-secondary-item-pf")})),e?(e.addClass("mobile-nav-item-pf"),n?(n.addClass("mobile-secondary-item-pf"),t.removeClass("show-mobile-secondary"),t.addClass("show-mobile-tertiary")):(t.addClass("show-mobile-secondary"),t.removeClass("show-mobile-tertiary"))):(t.removeClass("show-mobile-secondary"),t.removeClass("show-mobile-tertiary"))},C=function(){var e,i=a(window).width();i<a.pfBreakpoints.tablet?t.hasClass("hidden")||(t.addClass("hidden"),t.removeClass("collapsed"),n.removeClass("collapsed-nav"),n.addClass("hidden-nav"),h(!1),m(!1),o=!1):t.hasClass("hidden")&&(t.removeClass("hidden show-mobile-nav"),n.removeClass("hidden-nav")),i<a.pfBreakpoints.desktop?(s||(t.addClass("collapsed"),n.addClass("collapsed-nav")),i>=a.pfBreakpoints.tablet&&c(),s=!0):(e=s&&t.find(".secondary-nav-item-pf.active").length>0,s=!1,e&&d()),o?(t.addClass("collapsed"),n.addClass("collapsed-nav")):(t.removeClass("collapsed"),n.removeClass("collapsed-nav"))},y=function(){t.addClass("collapsed"),n.addClass("collapsed-nav"),s&&c(),o=!0},b=function(){a("html").addClass("transitions")},w=function(){t.addClass("force-hide-secondary-nav-pf"),setTimeout((function(){t.removeClass("force-hide-secondary-nav-pf")}),500)};a(window).on("resize",(function(){C(),b()})),function(e){var d;t.addClass("hide-nav-pf"),n.addClass("hide-nav-pf"),C(),i.on("click",(function(a){b(),l()?t.hasClass("show-mobile-nav")?t.removeClass("show-mobile-nav"):(g(),t.addClass("show-mobile-nav")):t.hasClass("collapsed")?(window.localStorage.setItem("patternfly-navigation-primary","expanded"),t.removeClass("collapsed"),n.removeClass("collapsed-nav"),o=!1,s||r(100)):(window.localStorage.setItem("patternfly-navigation-primary","collapsed"),y())})),d=e,a(document).find(".nav-pf-vertical > .list-group > .list-group-item").each((function(e,n){var i=a(n);i.on("click.pf.secondarynav.data-api",(function(e){var n,o,s=a(this);s.hasClass("secondary-nav-item-pf")?l()?g(s):d&&((n=a(i.find(".nav-pf-secondary-nav > .list-group > .list-group-item")[0])).hasClass("tertiary-nav-item-pf")?(o=n.find(".nav-pf-tertiary-nav > .list-group > .list-group-item")[0],f(a(o),n,i)):v(n,s),e.stopImmediatePropagation()):(c(),l()&&(g(),t.removeClass("show-mobile-nav")),d&&(p(s),e.stopImmediatePropagation()))})),i.find(".nav-pf-secondary-nav > .list-group > .list-group-item").each((function(e,n){var o=a(n);o.on("click.pf.secondarynav.data-api",(function(e){var n,s=a(this);s.hasClass("tertiary-nav-item-pf")?l()?(g(s,i),e.stopImmediatePropagation()):d&&(n=o.find(".nav-pf-tertiary-nav > .list-group > .list-group-item")[0],f(a(n),o,i),e.stopImmediatePropagation()):(l()&&(g(),t.removeClass("show-mobile-nav")),u(),d&&(v(o,i),e.stopImmediatePropagation()))})),o.find(".nav-pf-tertiary-nav > .list-group > .list-group-item").each((function(e,n){var s=a(n);s.on("click.pf.secondarynav.data-api",(function(a){l()&&(g(),t.removeClass("show-mobile-nav")),u(),d&&(f(s,o,i),a.stopImmediatePropagation())}))}))}))})),a(document).find(".secondary-nav-item-pf").each((function(e,n){var i=a(n);i.on("click.pf.secondarynav.data-api",'[data-toggle="collapse-secondary-nav"]',(function(e){var n=a(this);l()?(g(),e.stopImmediatePropagation()):n.hasClass("collapsed")?(window.localStorage.setItem("patternfly-navigation-secondary","expanded"),window.localStorage.setItem("patternfly-navigation-tertiary","expanded"),h(!1,n),w()):(window.localStorage.setItem("patternfly-navigation-secondary","collapsed"),h(!0,n)),t.removeClass("hover-secondary-nav-pf"),d&&e.stopImmediatePropagation()})),i.find(".tertiary-nav-item-pf").each((function(e,n){a(n).on("click.pf.tertiarynav.data-api",'[data-toggle="collapse-tertiary-nav"]',(function(e){var n=a(this);l()?(g(i),e.stopImmediatePropagation()):n.hasClass("collapsed")?(window.localStorage.setItem("patternfly-navigation-secondary","expanded"),window.localStorage.setItem("patternfly-navigation-tertiary","expanded"),m(!1,n),w()):(window.localStorage.setItem("patternfly-navigation-tertiary","collapsed"),m(!0,n)),t.removeClass("hover-secondary-nav-pf"),t.removeClass("hover-tertiary-nav-pf"),d&&e.stopImmediatePropagation()}))}))})),a(document).on("mouseenter.pf.tertiarynav.data-api",".secondary-nav-item-pf",(function(e){var n=a(this);l()||(void 0!==n[0].navUnHoverTimeout?(clearTimeout(n[0].navUnHoverTimeout),n[0].navUnHoverTimeout=void 0):void 0===n[0].navHoverTimeout&&(n[0].navHoverTimeout=setTimeout((function(){t.addClass("hover-secondary-nav-pf"),n.addClass("is-hover"),n[0].navHoverTimeout=void 0}),500)))})),a(document).on("mouseleave.pf.tertiarynav.data-api",".secondary-nav-item-pf",(function(e){var n=a(this);void 0!==n[0].navHoverTimeout?(clearTimeout(n[0].navHoverTimeout),n[0].navHoverTimeout=void 0):void 0===n[0].navUnHoverTimeout&&(n[0].navUnHoverTimeout=setTimeout((function(){t.find(".secondary-nav-item-pf.is-hover").length<=1&&t.removeClass("hover-secondary-nav-pf"),n.removeClass("is-hover"),n[0].navUnHoverTimeout=void 0}),700))})),a(document).on("mouseover.pf.tertiarynav.data-api",".tertiary-nav-item-pf",(function(e){var n=a(this);l()||(void 0!==n[0].navUnHoverTimeout?(clearTimeout(n[0].navUnHoverTimeout),n[0].navUnHoverTimeout=void 0):void 0===n[0].navHoverTimeout&&(n[0].navHoverTimeout=setTimeout((function(){t.addClass("hover-tertiary-nav-pf"),n.addClass("is-hover"),n[0].navHoverTimeout=void 0}),500)))})),a(document).on("mouseout.pf.tertiarynav.data-api",".tertiary-nav-item-pf",(function(e){var n=a(this);void 0!==n[0].navHoverTimeout?(clearTimeout(n[0].navHoverTimeout),n[0].navHoverTimeout=void 0):void 0===n[0].navUnHoverTimeout&&(n[0].navUnHoverTimeout=setTimeout((function(){t.find(".tertiary-nav-item-pf.is-hover").length<=1&&t.removeClass("hover-tertiary-nav-pf"),n.removeClass("is-hover"),n[0].navUnHoverTimeout=void 0}),700))})),a('.nav-pf-vertical [data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom",delay:{show:"500",hide:"200"},template:'<div class="nav-pf-vertical-tooltip tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}),a(".nav-pf-vertical").on("show.bs.tooltip",(function(e){return a(this).hasClass("collapsed")})),l()||("collapsed"===window.localStorage.getItem("patternfly-navigation-primary")&&y(),a(".nav-pf-vertical.nav-pf-vertical-collapsible-menus").length>0&&("collapsed"===window.localStorage.getItem("patternfly-navigation-secondary")&&h(!0,a(".secondary-nav-item-pf.active [data-toggle=collapse-secondary-nav]")),"collapsed"===window.localStorage.getItem("patternfly-navigation-tertiary")&&m(!0,a(".tertiary-nav-item-pf.active [data-toggle=collapse-tertiary-nav]")))),t.removeClass("hide-nav-pf"),n.removeClass("hide-nav-pf"),r(250)}(e)}}(jQuery);