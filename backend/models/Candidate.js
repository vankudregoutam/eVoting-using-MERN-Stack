const mongoose = require('mongoose');

const addCandidateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        partyname: {
            type: String,
            required: true,
            unique: true
        },
        // img: {
        //     data: Buffer,
        //     type: String,
        //     required: true
        // },
        votes: {
            type: Number,
            // required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        
    },
    {
        collection: 'CandidateInfo',
    }
);

const Candidate = mongoose.model('CandidateInfo', addCandidateSchema)
module.exports = Candidate
