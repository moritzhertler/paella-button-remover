// jshint esversion: 6

chrome.runtime.onInstalled.addListener(function() {

    // activate the extension on sites with the paella play button on it

    let condition = new chrome.declarativeContent.PageStateMatcher({
        css: [
            // id of the play button
            "#paella_plugin_PlayButtonOnScreen"
        ],
    });

    let rule = {
        conditions: [condition],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    };

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules(
            [rule]
        );
    });

    // inject the script that removes the play butten when user clicks ob the page action 
    chrome.pageAction.onClicked.addListener(function (tab) {
        chrome.tabs.executeScript(tab.ib, {
            file: 'inject.js'
        });
    });

  });