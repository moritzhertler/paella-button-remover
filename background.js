// jshint esversion: 6

chrome.runtime.onInstalled.addListener(function() {

    // activate the extension on sites with the paella play button on it

    let condition1 = new chrome.declarativeContent.PageStateMatcher({
        css: [
            // id of the play button
            "#paella_plugin_PlayButtonOnScreen",
        ],
    });

    let condition2 = new chrome.declarativeContent.PageStateMatcher({
        css: [
            // class of the play button 
            ".play-button-on-screen"
        ],
    });

    let rule = {
        conditions: [condition1, condition2],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    };

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        console.log('Found player');
        chrome.declarativeContent.onPageChanged.addRules(
            [rule]
        );
    });

    // inject the script that removes the play butten when user clicks ob the page action 
    chrome.pageAction.onClicked.addListener(function (tab) {
        console.log('Inject script');
        chrome.tabs.executeScript(tab.ib, {
            file: 'inject.js'
        });
    });

  });