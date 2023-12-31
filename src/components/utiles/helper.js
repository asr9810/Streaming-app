const nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];
   export function nameGenerator() {
   return nameList[Math.floor(Math.random() * nameList.length)];
        
    };

    const msgList = [
        "Hello!",
        "How are you?",
        "Nice to meet you.",
        "What's up?",
        "I'm good, thanks.",
        "How about you?",
        "This is awesome!",
        "I'm here to help.",
        "Have a great day!",
        "See you later.",
        "Can you please repeat that?",
        "I'm sorry, I don't know.",
        "Let's find out together.",
        "That sounds interesting.",
        "What do you think?",
        "I agree with you.",
        "That's a good idea.",
        "I'm glad you like it.",
        "Let me check for you.",
        "I'll get back to you soon.",
        "You're welcome!",
        "Thank you so much.",
        "I appreciate your help.",
        "No problem at all.",
        "I'm happy to assist.",
        "Sure, I can do that.",
        "That's not a problem.",
        "I understand.",
        "Absolutely!",
        "Of course!",
        "That's correct.",
        "You're right.",
        "I apologize for the inconvenience.",
        "I'll make sure to fix it.",
        "Thanks for letting me know.",
        "I'm sorry to hear that.",
        "How can I assist you?",
        "Let's figure it out.",
        "I'll do my best to help.",
        "I'm at your service.",
        "What's your question?",
        "Feel free to ask anything.",
        "That's a tough one.",
        "Hmm, I'm not sure.",
        "Let me think for a moment.",
        "Sorry, I can't provide that information.",
        "It's confidential.",
        "I'm sorry, but I can't help with that.",
        "Please provide more details.",
        "I need more information to assist you.",
        "Could you clarify your request?",
        "Unfortunately, I don't have that data.",
        "I'm not familiar with that topic.",
        "I suggest you consult an expert.",
        "You can find more information online.",
        "Have you tried searching on Google?",
        "I'm sorry, I don't have access to that.",
        "I'm afraid I can't assist with that.",
        "That's beyond my capabilities.",
        "I'll do my best to learn more.",
        "I'm constantly improving.",
        "Thanks for your patience.",
        "I'm here 24/7.",
        "Don't hesitate to ask.",
        "I'm listening.",
        "You're not alone.",
        "I'll be here whenever you need me.",
        "Feel free to reach out anytime.",
        "I'm just a message away.",
        "You're doing great!",
        "You got this!",
        "Keep up the good work.",
        "Believe in yourself.",
        "Stay positive!",
        "Take a deep breath.",
        "Everything will be alright.",
        "I'm cheering for you!",
        "You're making progress.",
        "Great job!",
        "You're on the right track.",
        "Stay focused.",
        "You're awesome!",
        "You're a star!",
        "Never give up!",
        "Keep pushing forward.",
        "You're capable of amazing things.",
        "You inspire me.",
        "You're doing fantastic!",
        "You're making a difference.",
        "Be proud of yourself.",
        "You're unstoppable!",
        "Dream big!",
        "The sky's the limit.",
        "You're extraordinary!",
        "I believe in you.",
        "You're a rockstar!",
        "You're incredible!",
    ]
    export const randomMsgGenerator = ()=>{
        return msgList[Math.floor(Math.random()*msgList.length)]
    }
         