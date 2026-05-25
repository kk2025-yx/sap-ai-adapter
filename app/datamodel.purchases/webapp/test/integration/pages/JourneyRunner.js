sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"datamodel/purchases/test/integration/pages/PurchasesList",
	"datamodel/purchases/test/integration/pages/PurchasesObjectPage"
], function (JourneyRunner, PurchasesList, PurchasesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('datamodel/purchases') + '/test/flpSandbox.html#datamodelpurchases-tile',
        pages: {
			onThePurchasesList: PurchasesList,
			onThePurchasesObjectPage: PurchasesObjectPage
        },
        async: true
    });

    return runner;
});

