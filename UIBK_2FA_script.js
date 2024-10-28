// ==UserScript==
// @name         UIBK 2FA Autofill
// @namespace    http://tampermonkey.net/
// @version      1.9
// @description  Autofills the 2FA code and clicks the verify button on UIBK login page
// @match        https://idp.uibk.ac.at/idp/profile/oidc/authorize*
// @match        https://idp.uibk.ac.at/idp/profile/SAML2/Redirect/SSO?execution*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jsSHA/2.4.2/sha.js
// ==/UserScript==

(function() {
    
    const TOTP_SECRET = 'ADD YOUR SECRET HERE';
    
    'use strict';

    console.log("Tampermonkey script is running");

    // Base32 decoding function
    function base32tohex(base32) {
        const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
        let bits = '';
        let hex = '';

        for (let i = 0; i < base32.length; i++) {
            const val = base32chars.indexOf(base32.charAt(i).toUpperCase());
            bits += val.toString(2).padStart(5, '0');
        }

        for (let i = 0; i + 4 <= bits.length; i += 4) {
            const chunk = bits.substr(i, 4);
            hex += parseInt(chunk, 2).toString(16);
        }

        return hex;
    }

    // HMAC-SHA1 function using jsSHA
    function hmac_sha1(key, data) {
        const shaObj = new jsSHA("SHA-1", "HEX");
        shaObj.setHMACKey(key, "HEX");
        shaObj.update(data);
        return shaObj.getHMAC("HEX");
    }

    // TOTP generation function
    function generateTOTP(secret) {
        console.log("Generating TOTP code");

        // Get the current local epoch time
        const epoch = Math.round(new Date().getTime() / 1000.0);
        console.log("Current Epoch Time:", epoch);

        const time = (Math.floor(epoch / 30)).toString(16).padStart(16, '0');
        console.log("Time Hex:", time);

        const key = base32tohex(secret);
        console.log("Key Hex:", key);

        const hmac = hmac_sha1(key, time);
        console.log("HMAC Result:", hmac);

        const offset = parseInt(hmac.substring(hmac.length - 1), 16);
        console.log("HMAC Offset:", offset);

        const otp = (parseInt(hmac.substr(offset * 2, 8), 16) & 0x7fffffff) + '';
        console.log("OTP:", otp);

        const totp = otp.substr(otp.length - 6, 6);
        console.log("Generated TOTP code:", totp);
        return totp;
    }

    function fill2FACode() {
        const totpCode = generateTOTP(TOTP_SECRET);
        console.log("TOTP Code to fill:", totpCode);

        const inputField = document.querySelector('input[name="fudis_otp_input"]');
        if (inputField) {
            console.log("Input field found, filling with TOTP code");
            inputField.value = totpCode;

            const button = document.querySelector('button[name="_eventId_proceed"]');
            if (button) {
                console.log("Button found, clicking it");
                button.click();
            } else {
                console.log("Button not found");
            }
        } else {
            console.log("Input field not found");
        }
    }

    function waitForElement(selector, callback) {
        const interval = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                callback(element);
            }
        }, 100);
    }

    waitForElement('input[name="fudis_otp_input"]', fill2FACode);

})();

