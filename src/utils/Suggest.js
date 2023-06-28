import Trie from '../structures/Trie.js';

export default class Suggestion {
  constructor() {
    this.dict = new Trie();
  }

  addWord (word) {
    word = word.toLowerCase().trim().replace(' ', '.');
    this.dict.addWord(word);
  }

  addFromArray (array) {
    array.forEach((word) => {
      this.addWord(word);
  });
  }

  suggestWords (dWord) {
    const word = dWord.toLowerCase().trim().replace(' ', '.');

    const suggestions = [];
    const lastCharacter = this.dict.getLastCharacterNode(word);
    if (lastCharacter) {
      const depthFirstSearch = (node, word) => {
        if (node.isCompleteWord) {
          suggestions.push(word);
        }
        const children = node.suggestChildren();
        children.forEach((child) => {
          depthFirstSearch(node.getChild(child), word + child);
        });
      };
      depthFirstSearch(lastCharacter, word);
    }
    return suggestions.map((suggestion) => {
      return suggestion.replace('.', ' ');
    });
}}