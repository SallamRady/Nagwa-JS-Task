let DBManager = require("../data/model");
const verbList = DBManager.getVerb();
const adverbList = DBManager.getAdverb();
const nounList = DBManager.getNoun();
const adjectiveList = DBManager.getAdjective();

let result = [];
let counter = 0;
/**
 *
 * @param {*} len refer to required length of generated array
 * @returns a list of 10 objects selected randomly from the "wordsList". The array should include at least 1 adjective, 1 adverb, 1 noun, and 1 verb.
 */
module.exports.getRandomList = function getRandomList(len = 10) {
  len = len > 15 ? 15 : len;
  result = [];
  while (result.length < len) {
    let mod = counter % 4;
    switch (mod) {
      case 0:
        getNewAdverb();
        break;
      case 1:
        getNewVerb();
        break;
      case 2:
        getNewNoun();
        break;
      case 3:
        getNewAdjective();
        break;
    }
    counter++;
  }
  result = result.sort((a, b) => b.id * Math.random() - a.id * Math.random());
  return result;
};

function getNewVerb() {
  if (verbList.length) {
    let element = verbList[0];
    result.push(element);
    verbList.shift();
    verbList.push(element);
  }
  return;
}

function getNewNoun() {
  if (nounList.length) {
    let element = nounList[0];
    result.push(element);
    nounList.shift();
    nounList.push(element);
  }
  return;
}

function getNewAdjective() {
  if (adjectiveList.length) {
    let element = adjectiveList[0];
    result.push(element);
    adjectiveList.shift();
    adjectiveList.push(element);
  }
  return;
}

function getNewAdverb() {
  if (adverbList.length) {
    let element = adverbList[0];
    result.push(element);
    adverbList.shift();
    adverbList.push(element);
  }
  return;
}
