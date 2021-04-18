class TrieNode {
    children = {};
    endOfWord = false;
}


export class Trie {
    root;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let i = 0; i < words.length; i++) {
            let ch = word[i],
                node = current.children[ch];

            if (!node) {
                node = new TrieNode();
                current.children[ch] = node;
            }

            current = node;
        };

        current.endOfWord = true;
    }

    insertRecursive(word) {
        this._insertRecursive(this.root, word, 0);
    }

    _insertRecursive(current, word, index) {
        if (index === word.length) {
            current.endOfWord = true;
            return;
        }

        let ch = word[index],
            node = current.children[ch];

        if (!node) {
            node = new TrieNode();
            current.children[ch] = node;
        }

        this._insertRecursive(node, word, index + 1);
    }

    search(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let ch = word[i],
                node = current.children[ch];

            if (!node) {
                return false;
            }

            current = node;
        }

        return current.endOfWord;
    }

    searchRecursive(word) {
        return this._searchRecursive(this.root, word, 0);
    }

    _searchRecursive(current, word, index) {
        if (index === word.length) {
            return current.endOfWord;
        }

        let ch = word[index],
            node = current.children[ch];

        if (!node) {
            return false;
        }

        return this._searchRecursive(node, word, index + 1);
    }

    delete(word) {
        this._delete(this.root, word, 0);
    }

    _delete(current, word, index) {
        if (index === word.length) {
            if (!current.endOfWord) return false;

            current.endOfWord = false;
            return Object.keys(current.children).length === 0;
        }


        let ch = word[index],
            node = current.children[ch];

        if (!node) {
            return false;
        }

        let shouldDeleteCurrentode = this._delete(node, word, index + 1);

        if (shouldDeleteCurrentode) {
            delete current.children[ch];
            return Object.keys(current.children).length === 0
        }
        return false;

    }
}