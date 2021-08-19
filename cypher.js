function unCipher(str) {
const normal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];

const key = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ' ']

const resultStr = [];
for (let i = 0; i < str.length; i++){
    for(let j = 0; j < key.length; j++){
        if(str[i] === key[j]){
            resultStr.push(normal[j])
        }
    }
  }
  return resultStr.join("")
};

function cipher(str) {
    const normal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
    
    const key = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ' ']
    
    const resultStr = [];
    for (let i = 0; i < str.length; i++){
        for(let j = 0; j < normal.length; j++){
            if(str[i] === normal[j]){
                resultStr.push(key[j])
            }
        }
      }
      return resultStr.join("")
    };

console.log(unCipher('qhhst ol eggs'))

console.log(cipher('what is up'))