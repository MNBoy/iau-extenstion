export const Tools = {
  convertToPattern(inputText: string) {
    const replaceChars: Set<string> = new Set(['ی']);
    let convertedText = '%';

    const words = inputText.split(/\s+/);

    for (const word of words) {
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (replaceChars.has(char) || char === ' ') {
          convertedText += '%';
        } else {
          convertedText += char;
        }
      }
      convertedText += '%';
    }

    // Remove the trailing space
    convertedText = convertedText.trim();

    return convertedText;
  },
  copyToClipboard(text: string): void {
    // Create a textarea element to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', ''); // Make it read-only to be selectable

    // Set the position outside of the visible area
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);
    alert('با موفقیت کپی شد!');
  },
};
