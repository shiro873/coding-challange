const db = require('../models');
const config = require('../config/config');
const ProductType = db.productType;
const Product = db.product;
const AuditLog = db.auditLog;
const Customer = db.customer;
const Stock = db.stock;
const StockTake = db.stockTake;

exports.stockTake = async (date, productTypes, user, remarks) => {
    let stockTakeDetails = [];
    let stocks = await Stock.findAll();
    let products = await Product.findAll();
    productTypes.map(item => {
        console.log('item =====>', item);
        let stock = stocks?.find(stockItem => stockItem.productTypeId === item.id);
        let productsByType = products?.filter(productItem => productItem.productTypeId === item.id);
        let productReport = [];

        productsByType.map(item2 => {
            console.log("item2 =====>", item2.rfid)
            let found = item.products?.some(item1 => item1.rfid === item2.rfid);
            console.log('item found ====> ', found);
            let product = {
                id: item2.id,
                rfid: item2.rfid,
                status: found ? 'Pass' : 'Error', //adjusted
                reason: '',
                adjustedValue: 0,
                adjustedBy: '',
                adjustedOn: '',
            }
            productReport.push(product);
        });

        let difference = item.products?.length - stock.quantity;
        let stockTakeDetail = {
            productTypeId: item?.id,
            productTypeName: item?.name,
            sku: item?.sku,
            image: item?.image ? item?.image : '',
            status: difference === 0 ? 'Pass' : 'Error',
            systemQuantity: stock?.quantity,
            stockTakeQuantity: item?.quantity,
            difference: difference,
            adjustedValue: 0,
            reason: '',
            adjustedBy: user?.id,
            adjustedOn: date,
            productsByRfid: productReport
        }
        stockTakeDetails.push(stockTakeDetail);
    });
    let error = stockTakeDetails.some(detail => detail.status === 'Error');
    let logNo = await getLogNo('Stock Take');
    console.log('stock take log no =====>', logNo);
    await AuditLog.create({
        logDate: date,
        logType: 'Stock Take',
        logNo: `ST-${logNo}`,
        userId: user.id,
        metaData: {
            status: error ? 'Error' : 'Pass',
            stockTakeDetails: stockTakeDetails,
        },
        remarks: remarks
    });


    await StockTake.create({
        logNo: `ST-${logNo}`,
        userId: user?.id,
        details: stockTakeDetails,
        status: error ? 'Error' : 'Pass',
    });
    return stockTakeDetails;
}

exports.stockTakeSingle = async (date, productType, user, remarks) => {
    let stockTakeDetails = [];
    let stocks = await Stock.findAll();
    let products = await Product.findAll();

    let stock = stocks.find(stockItem => stockItem.productTypeId === productType.id);
    let difference = productType?.products?.length - stock.quantity;
    console.log("quantity product type====>", productType?.products?.length);
    console.log("quantity stock====>", stock.quantity);
    console.log("difference====>", difference);

    let productsByType = products?.filter(productItem => productItem.productTypeId === productType.id);
    let productReport = [];
    productsByType.map(item => {
        // console.log('product By type ===>', item);
        let found = productType.products?.some(item1 => item1.rfid === item.rfid);
        console.log("rfid found ====>", found)
        let product = {
            id: item.id,
            rfid: item.rfid,
            status: found ? 'Pass' : 'Error', //adjusted,
            reason: '',
            adjustedValue: 0,
            adjustedBy: '',
            adjustedOn: '',
        }
        productReport.push(product);
    });
    stockTakeDetails.push({
        productTypeId: productType.id,
        productTypeName: productType.name,
        sku: productType.sku,
        image: productType.image,
        status: difference === 0 ? 'Pass' : 'Error',
        systemQuantity: stock.quantity,
        stockTakeQuantity: productType.quantity,
        difference: difference,
        adjustedValue: 0,
        reason: '',
        adjustedBy: user.id,
        adjustedOn: date,
        productsByRfid: productReport
    });
    let error = stockTakeDetails.some(detail => detail.status === 'Error');
    let logNo = await getLogNo('Stock Take');
    console.log('stock take log no =====>', logNo);
    await AuditLog.create({
        logDate: date,
        logType: 'Stock Take',
        logNo: `ST-${logNo}`,
        userId: user.id,
        metaData: {
            status: error ? 'Error' : 'Pass',
            stockTakeDetails: stockTakeDetails,
        },
        remarks: remarks
    });

    await StockTake.create({
        logNo: `ST-${logNo}`,
        userId: user.id,
        details: stockTakeDetails,
        status: error ? 'Error' : 'Pass',
    })

    return stockTakeDetails;
}

exports.stockIn = async (product, productType, user, quantity, remarks) => {
    console.log('inside stockIn');
    const stock = await Stock.findOne({
        where: {
            productTypeId: productType.id
        }
    });
    console.log("stock", stock);
    if (!stock) {
        stock = await Stock.create({
            productTypeId: productType.id,
            quantity: quantity,
        });
    } else {
        await Stock.update({
            quantity: stock.quantity + quantity
        }, {
            where: {
                id: stock.id
            }
        });
    }
    console.log("stock", stock);

    // add audit log
    let logNo = await getLogNo('Stock In');

    let auditLog = await AuditLog.create({
        logDate: new Date(),
        logType: 'Stock In',
        logNo: `SI-${logNo}`,
        productId: product.id,
        productTypeId: productType.id,
        userId: user.id,
        metaData: {},
        remarks: remarks
    });
    console.log("auditLog", auditLog);
}

exports.stockOut = async (product, productType, customer, user, quantity, remarks) => {
    const stock = Stock.findOne({
        where: {
            productTypeId: productType.id
        }
    });
    if (!stock) {
        stock = Stock.create({
            productTypeId: productType.id,
            quantity: stock.quantity - quantity,
        });
    }

    await Product.update({
        sold: true,
    }, {
        where: {
            id: product.id
        }
    });

    // add audit log
    let logNo = await getLogNo('Stock Out')

    await AuditLog.create({
        logDate: new Date(),
        logType: 'Stock Out',
        logNo: `SO-${logNo}`,
        productId: product.id,
        productTypeId: productType.id,
        userId: user.id,
        customerId: customer.id,
        metaData: {},
        remarks: remarks
    });
}

exports.stockAdjustment = async (stockTake, remarks, user) => {
    let date = new Date();
    let logSerial = await getLogNo('Stock Adjustment');
    let logNo = `SA-${logSerial}`;

    console.log('stock adjustment -> SA-', logNo);
    console.log('stock take ===>', stockTake);

    let updatedDetails = [];

    stockTake?.details?.map(item => {
        console.log('detaile item ===>', item);
        let updatedProductsByRfid = [];
        item.productsByRfid?.map(product => {
            console.log('condition values 1 ->', !product?.adjustedLogNo);
            console.log('condition values 2 ->', product?.status === 'Adjusted');

            if (!product?.adjustedLogNo && product?.status === 'Adjusted') {
                let detail = {
                    id: product?.id,
                    rfid: product?.rfid,
                    reason: product?.found,
                    status: product?.status,
                    adjustedBy: user?.name,
                    adjustedOn: date,
                    adjustedValue: product?.adjustedValue,
                    adjustedLogNo: logNo
                }
                console.log('detail ===>', detail);
                updatedProductsByRfid.push(detail);
            } else {
                updatedProductsByRfid.push(product);
            }
        });
        let error = updatedProductsByRfid?.some(item => item.status === 'Error');
        let updatedDetail = {
            sku: item?.sku,
            image: item?.image,
            reason: item?.reason,
            status: error ? 'Error' : 'Adjusted',
            adjustedBy: user.name,
            adjustedOn: date,
            difference: item?.difference,
            adjustedValue: item?.adjustedValue,
            productTypeId: item?.productTypeId,
            productsByRfid: updatedProductsByRfid,
            systemQuantity: item?.systemQuantity,
            productTypeName: item?.productTypeName
        };

        updatedDetails.push(updatedDetail);
    });

    console.log('updated stock take ===> ', updatedDetails);

    await AuditLog.create({
        logDate: date,
        logType: 'Stock Adjustment',
        logNo: logNo,
        userId: user.id,
        metaData: {
            adjustedItems: updatedDetails
        },
        remarks: remarks
    });

    await AuditLog.update({
        metaData: {
            status: 'Adjusted',
            stockTakeDetails: updatedDetails
        }
    }, {
        where: {
            logNo: stockTake.logNo
        }
    });

    let prevLogs = stockTake?.adjustmentLogNo ? stockTake?.adjustmentLogNo : []

    let updated = await StockTake.update({
        details: updatedDetails,
        status: 'Adjusted',
        adjustmentLogNo: [...prevLogs, logNo]
    }, {
        where: {
            id: stockTake.id
        }
    });
    return updated;
}

const getLogNo = async (logType) => {
    const log = await AuditLog.findOne({
        where: {
            logType: logType
        },
        order: [['createdAt', 'DESC']],
    });
    console.log('log--->', log);
    let logNo = 0;

    if (log) {
        logNo = parseInt(log.logNo?.split('-')[1]) + 1;
    }
    console.log('logNo----->', logNo);
    return logNo;
}