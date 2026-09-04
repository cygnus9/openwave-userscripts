// ==UserScript==
// @name         OpenWave - Disable animations
// @namespace    http://github.com/cygnus9/openwave-userscripts
// @version      2026-09-04
// @description  Disable animations in open-wave
// @author       Mark Swaanenburg
// @match        https://*.open-wave.nl/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/cygnus9/openwave-userscripts/refs/head/main/ui-tweaks/disable-animation.user.js
// @updateURL    https://raw.githubusercontent.com/cygnus9/openwave-userscripts/refs/head/main/ui-tweaks/disable-animation.user.js
// ==/UserScript==

//https://raw.githubusercontent.com/cygnus9/rrd-rust/refs/heads/main/.gitignore

(function () {
    'use strict';

    const timer = setInterval(() => {
        if (window.jQuery) {
            window.jQuery.fx.off = true;
            clearInterval(timer);
        }
    }, 10);
})();
