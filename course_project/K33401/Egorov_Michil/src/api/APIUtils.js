const BASE_URL = 'http://127.0.0.1:8000/';


class BaseAPI {
    path = '';

    async getHeader() {
        let headers = {};
        headers['Content-Type'] = 'application/json'
        if(sessionStorage.hasOwnProperty('auth_token')) {
            headers['Authorization'] = `Token ${sessionStorage['auth_token']}`
        }
        return headers;
    }

    async _request({suffix = '', filters='', method='GET', body=null}) {
        let api_url = BASE_URL + this.path;

        if(suffix) {
            api_url += `${suffix}/`;
        }

        if(filters) {
            api_url += `?${filters}`;
        }
        
        let request_params = {
            headers: await this.getHeader(),
            method: method,
        }

        if(body) {
            request_params['body'] = JSON.stringify(body);
        }

        console.log(api_url)

        const response = await fetch(api_url, request_params);
        const data = await response.json();
        return data;
    }

    async list(filters='') {
        const data = await this._request({filters: filters});
        const results = data['results'];
        return results;
    }

    async get({suffix}) {
        const data = await this._request({suffix: suffix})
        return data;
    }

    async post({body, suffix=''}) {
        const data = await this._request({suffix: suffix, body: body, method: 'POST'});
        return data;
    }
}

export default BaseAPI;