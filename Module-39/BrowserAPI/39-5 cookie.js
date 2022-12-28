/* // document.cookie likhle site er sob cookie pawa jay
document.cookie
document.cookie.split('; ').map(c => console.log(c));
document.cookie.split('; ').map(c => console.log(c.split('=')));

// to find any cookie
document.cookie.split(' ').find(c => c.includes('country')).split('=') (1); */

const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));

    if (findCookie == true) {
        'country=US'
        const cookieNameValue = findCookie.split('='); 
        return cookieNameValue[1];
    }
}