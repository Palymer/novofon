require("./process.env.js");
const z_api = require("./v1/index.js");


(async function(){
    
    
    /*
    let response;
    response = await z_api({api_method: '/v1/info/balance/'});
    console.log(response);

    api_user_key = process.env.ZADARMA_USER_KEY,
    api_secret_key = process.env.ZADARMA_SECRET_KEY

    response = await z_api.request({
        api_method: '/v1/request/callback/',
        params: {
            from: '380947102794',
            to: '380989897908',
            sip: '100',
            predicted: 'predicted'
        }
    });
    console.log(response);
    */
    // response = await z_api.request({
    //     http_method: 'post', 
    //     api_method: '/v1/sms/send/',
    //     params: {
    //         caller_id: '380947102794',
    //         number: '380989897908',//'67200000000',
    //         message: 'nodejs fff ыфва ыыц'
    //     }
    // });
    // console.log(response);
    /*

    response = await z_api.request({api_method: '/v1/info/timezone/'});
    console.log(response);

    process.env.ZADARMA_USER_KEY = 'a248a6a984459935b569';
    process.env.ZADARMA_SECRET_KEY = '8a8e91d214fb728889c7';
    response = await z_api.request({api_method: '/v1/sip/'});
    console.log(response)

    //multi account use
    response = await z_api.request({
        api_method: '/v1/tariff/',
        api_user_key: 'a248a6a984459935b569', 
        api_secret_key: '8a8e91d214fb728889c7'
    });
    console.log(response);

    let sip_number = '886493';

    response = await z_api.request({api_method: '/v1/sip/${sip_number}/status/'});
    console.log(response);

    response = await z_api.request({api_method: '/v1/direct_numbers/'});
    console.log(response);

    response = await z_api.request({api_method: '/v1/zcrm/customers'});
    console.log(response);

    response = await z_api.request({
        http_method: 'dalete',
        api_method: '/v1/zcrm/customers/c_id',
        params: {
            c_id: '1111111'
        }
    });
    console.log(response)

    response = await z_api.request({
        //http_mathod: 'get', [default]
        api_method: '/v1/info/price/',
        params: {
            number: '67200000000',
            caller_id: '73919100000'
        }
    });

    console.log(response);
    */
}
)();
;