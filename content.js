chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'toggleExtensions') {
    chrome.management.getAll(function(extensions) {
      for (var i = 0; i < extensions.length; i++) {
        if (extensions[i].enabled && extensions[i].id !== chrome.runtime.id) {
          chrome.management.setEnabled(extensions[i].id, !message.disabled);
        }
      }
    });
  }
});
