import axios from "axios";
import * as Config from './../constants/Config';

export default function callApi(endPoint,method='get',body){
    return  axios({
        method: method,
        url: `${Config.API_URl}/${endPoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}
