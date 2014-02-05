/// <reference path="js/jquery.min.js" />
/// <reference path="js/kendo.all-vsdoc.js" />



//window.kendoMobileApplication = new kendo.mobile.Application(document.body, { skin: "jitterz-default" });
var app = new kendo.mobile.Application(document.body, { transition: "slide", layout: "jitterz-default" });
var dataSourcelist = new kendo.data.DataSource({
    transport: {
        read: {
            url: 'http://localhost:29098/api/sample',
            ConentType: "json"
        }
    }
});
$("#itemslist").kendoMobileListView({ dataSource: dataSourcelist,
    template: $("#template").text()
});






