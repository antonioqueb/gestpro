import prisma from '@/lib/prisma';

async function createTweet(text, authorId) {
  const tweet = await prisma.tweet.create({
    data: {
      text: text,
      author: {
        connect: { id: authorId }
      }
    }
  });
  return tweet;
}

// Example usage
const newTweet = await createTweet("My first tweet!", 4); // Assuming authorId 1 exists
console.log(newTweet);
