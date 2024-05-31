const { api } = require("./novofon");
const dotenv = require('dotenv');

dotenv.config();

(async () => {
    //https://zadarma.com/ru/support/api/#api_info_balance
    let balance = await api({api_method: '/v1/info/balance/'});
    
    //https://zadarma.com/ru/support/api/#api_info_timezone
    let timezone = await api({api_method: '/v1/info/timezone/'});

    //https://zadarma.com/ru/support/api/#api_tariff
    let tariff = await api({api_method: '/v1/tariff/'});

    console.log(balance);
    console.log(timezone);
    console.log(tariff);
})()