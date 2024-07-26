const decodeTheRing = function (s, p) {
  function matchDecoderKey(message, key) {
    // Base case: if both message and key are empty, they match
    if (message.length === 0 && key.length === 0) {
        return true;
    }

    // If only the key is empty, it doesn't match the non-empty message
    if (key.length === 0) {
        return false;
    }

    // If the key starts with a star
    if (key[0] === '*') {
        // Try to match the message with the star representing 0 or more letters
        return matchDecoderKey(message, key.slice(1)) || (message.length > 0 && matchDecoderKey(message.slice(1), key));
    }

    // If the key starts with a question mark
    if (key[0] === '?' && message.length > 0) {
        // Match the first character of the message with any single letter
        return matchDecoderKey(message.slice(1), key.slice(1));
    }

    // If the first characters of the message and key match
    if (message.length > 0 && message[0] === key[0]) {
        return matchDecoderKey(message.slice(1), key.slice(1));
    }

    // If none of the above conditions are met, the message and key don't match
    return false;
}

// Example usage:
console.log(matchDecoderKey("aa", "a")); // Output: false
console.log(matchDecoderKey("aa", "*")); // Output: true
console.log(matchDecoderKey("cb", "?a")); // Output: false
    // write your code here

  };
  
  module.exports = decodeTheRing;
