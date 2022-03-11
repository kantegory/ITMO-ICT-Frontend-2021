var BASE_URL = 'http://195.2.70.197:8100/auth/';


class AuthAPI {
    async login(login, password) {
        const url = `${BASE_URL}token/login/`
        const body = {username: login, password: password}
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return response;
    }

    async me() {
        const token = window.sessionStorage.getItem('auth_token');

        if(token) {
            const url = `${BASE_URL}users/me/`
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
            });

            if(response.status == 200) {
                const data = await response.json();
                alert(JSON.stringify(data));
            }else {
                alert(response.statusText)
            }
            
        }else {
            alert('Not auth yet');
        }
    }
}