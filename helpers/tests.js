const { loadGraphModel } = require('@tensorflow/tfjs');

const load_model = async ()=>{
    const model = await loadGraphModel('http://localhost:8080/model.js');
    return model;
}

module.exports = {
    load_model
}