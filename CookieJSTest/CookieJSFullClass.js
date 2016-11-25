class cookiesJs {
    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires;
    }
    getCookie(cname) {
        const name = cname + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i += 1) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return '';
    }
    checkCookie(cname) {
        const cookie = this.getCookie(cname);
        if (cookie !== '') {
            return true;
        }
        return false;
    }
    deleteCookie(cname) {
        this.setCookie(cname, '', -1);
    }
    deleteAllCookies() {
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i += 1) {
            this.deleteCookie(ca[i].split('=')[0]);
        }
    }
    *genCookies() {
        const ca = document.cookie.split(';');
        let index = 0;
        while (index < ca.length) {
            const c = ca[index];
            index++;
            const cobj = {
                name: c.split('=')[0].trim(),
                value: c.split('=')[1].trim(),
            };
            yield cobj;
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires;
}

function getCookie(cname) {
        const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return '';
}

function checkCookie(cname) {
    const cookie = window.CookieObj.getCookie(cname);
    if (cookie !== '') {
        return true;
    }
    return false;
}
