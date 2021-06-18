"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, preHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.preHash = preHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateHash = (index, preHash, timestamp, data) => CryptoJS.SHA256(index + preHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === 'number' &&
    typeof aBlock.hash === 'string' &&
    typeof aBlock.preHash === 'string' &&
    typeof aBlock.data === 'string' &&
    typeof aBlock.timestamp === 'number';
// 최초 블록
var genesisBlock = new Block(0, "1239182476189274618273", "", "Hi", 12345);
// Block arr
var blockChain = [genesisBlock];
// 가져오기
var getBlockChain = () => blockChain;
// 최근 블록
var getLatestBlcok = () => blockChain[blockChain.length - 1];
// 시간 계산
var getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
// 블록 만들고
var createBlock = (data) => {
    var preBlock = getLatestBlcok();
    var newIndex = preBlock.index + 1;
    var newTimeStamp = getNewTimeStamp();
    var nextHash = Block.calculateHash(newIndex, preBlock.hash, newTimeStamp, data);
    var newBlock = new Block(newIndex, nextHash, preBlock.hash, data, newTimeStamp);
    addBlock(newBlock);
    return newBlock;
};
// 해쉬를 얻자.
var getHashBlock = (block) => Block.calculateHash(block.index, block.preHash, block.timestamp, block.data);
// 구조 검증, 해쉬검증, 이전블록 검증, 새로운 블록 검증
var isBlockValid = (candidateBlock, preBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if (preBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (preBlock.hash !== candidateBlock.preHash) {
        return false;
    }
    else if (getHashBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
// 블록을 추가하자.
var addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlcok())) {
        blockChain.push(candidateBlock);
    }
};
createBlock('second Block');
createBlock('third Block');
createBlock('fourth Block');
createBlock('fifth Block');
createBlock('sixth Block');
createBlock('seventh Block');
console.log(blockChain);
//# sourceMappingURL=index.js.map