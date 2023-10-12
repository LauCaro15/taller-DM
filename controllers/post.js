const { express } = require('express');

const Post = require('../models/post');

const createPost = async (req, res) => {
    try {
        /* const {...posts} = req.body; */
        const postData = req.body;
        const newPost = new Post(postData);
        const savedPost = await newPost.save();
        console.log(savedPost);
        // console.log(newPost);
        res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const removePost = async (req, res) => {
    try {
        const { id } = req.params;
        const postDeleted = await Post.findByIdAndRemove(id);
        console.log(postDeleted);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { 
    createPost,
    getAllPosts, 
    getPost,
    removePost,
}