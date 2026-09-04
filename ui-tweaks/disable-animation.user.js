// ==UserScript==
// @name         OpenWave - Disable animations
// @namespace    http://github.com/cygnus9/openwave-userscripts
// @version      2026-09-04
// @description  Disable animations in open-wave
// @author       Mark Swaanenburg
// @match        https://*.open-wave.nl/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://github.com/cygnus9/openwave-userscripts/raw/refs/heads/main/ui-tweaks/disable-animation.user.js
// @updateURL    https://github.com/cygnus9/openwave-userscripts/raw/refs/heads/main/ui-tweaks/disable-animation.user.js
// ==/UserScript==

(function () {
    'use strict';

    const timer = setInterval(() => {
        if (window.jQuery) {
            window.jQuery.fx.off = true;
            clearInterval(timer);
        }
    }, 10);
})();
