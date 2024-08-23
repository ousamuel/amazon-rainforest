# Amazon Rainforest Interactive Guide

## Overview

This project is an interactive educational web application designed to inform users about the rich environment, wildlife, and natural history of the Amazon Rainforest. The application offers a user-friendly interface where users can explore various categories, including animals, plants, and significant environmental events that occurred in the Amazon.

The project utilizes `Next.js` as the framework, Pinecone for vector search, and OpenAI for chat interaction. Users can ask questions about the Amazon Rainforest or click on specific categories to learn more.

## Check it out here [https://amazon-rainforest-six.vercel.app/](https://amazon-rainforest-six.vercel.app/)
![amazon-ss-1](/public/imgs/amazon-ss-1.png)
![amazon-ss-2](/public/imgs/amazon-ss-2.png)
![amazon-ss-3](/public/imgs/amazon-ss-3.png)

## Features

- **Category Navigation**: Explore different categories of Amazon Rainforest life, including mammals, reptiles, amphibians, birds, fish, insects, and environmental disasters.
- **Interactive Chat**: Users can interact with an AI-powered assistant that provides detailed information about the Amazon Rainforest. The AI assistant is powered by OpenAI's GPT models and backed by Pinecone for vector search.
- **Animated Transitions**: Smooth transitions using custom animations to enhance the user experience.
- **Mobile-Friendly Design**: The application is responsive and works seamlessly on different screen sizes.


## Project Structure

The project is organized as follows:

- **pages/api/chat/route.js**: Handles the interaction between the user and the AI-powered chat assistant backed by Pinecone, fetching responses from the OpenAI API.
- **components/ChatBox.js**: The chatbox component where users can ask questions and receive answers from the AI.
- **components/AnimatedSection.js**: Adds animations to different sections of the page for a smooth user experience.

## Tech Stack

- **Frontend**: Next.js, React.js, Tailwind CSS for responsive design.
- **AI Integration**: OpenAI API for chat responses, Pinecone for vector search.
- **Vector Upsertion**: Jupyter notebook for embedding and upserting vectors into Pinecone.

