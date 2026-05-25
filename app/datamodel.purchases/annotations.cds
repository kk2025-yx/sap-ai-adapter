using datamodelSrv as service from '../../srv/service';
using from '../annotations';

annotate service.Purchases with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Customer',
            Value : customer_ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Selected Product',
            Value : selectedProduct_ID,
        },
        {
            $Type : 'UI.DataField',
            Value : purchaseValue,
        },
        {
            $Type : 'UI.DataField',
            Value : rewardPoints,
        },
    ]
);

