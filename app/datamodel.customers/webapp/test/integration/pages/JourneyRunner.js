sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"datamodel/customers/test/integration/pages/CustomersList",
	"datamodel/customers/test/integration/pages/CustomersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('datamodel/customers') + '/test/flpSandbox.html#datamodelcustomers-tile',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage
        },
        async: true
    });

    return runner;
});

