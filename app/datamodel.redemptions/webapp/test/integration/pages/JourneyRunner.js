sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"datamodel/redemptions/test/integration/pages/RedemptionsList",
	"datamodel/redemptions/test/integration/pages/RedemptionsObjectPage"
], function (JourneyRunner, RedemptionsList, RedemptionsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('datamodel/redemptions') + '/test/flpSandbox.html#datamodelredemptions-tile',
        pages: {
			onTheRedemptionsList: RedemptionsList,
			onTheRedemptionsObjectPage: RedemptionsObjectPage
        },
        async: true
    });

    return runner;
});

