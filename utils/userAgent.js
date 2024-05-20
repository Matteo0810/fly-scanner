const USER_AGENTS_LIST =  ["Mozilla/5.0 (Windows NT 10.0; Win64; x64)  AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",     "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",     ];
const USER_AGENT_BASE = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/"; // a user agent base

/**
 * @description get a random user agent
 * @params {JSON} options
 * @params {Boolean} options.singleUserAgent if you want to use a single agent instead of a random one (optional)
 * @return {String} a user agent
 */
function getUserAgent(options) {
    if(options?.singleUserAgent)
        // return a single user agent but modify the last numbers, it's used to prevent bot attack protection
        return USER_AGENT_BASE + Math.random()*100;
    const randomValue = Math.floor(Math.random()*USER_AGENTS_LIST.length);
    return USER_AGENTS_LIST[randomValue];
}

module.exports = {
    getUserAgent
}