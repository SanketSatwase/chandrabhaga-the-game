# Chandrabhaga's Day

A simple and fun cat care game where you look after Chandrabhaga, a charming brown Indian cat. Feed, pet, and play with her to keep her happy!

## 📂 Project Structure

```
.
├── index.html                # Main HTML entry point
├── metadata.json             # App metadata
├── README.md                 # You are here!
└── src/
    ├── App.tsx               # Main application component with game logic
    ├── components/
    │   ├── ActionButtons.tsx # UI for the four action buttons
    │   ├── CatDisplay.tsx    # Renders the cat illustration and its moods
    │   ├── StatusBar.tsx     # Progress bars for cat stats
    │   └── StatusMessage.tsx # Displays feedback messages
    ├── constants.tsx         # Game constants (decay rates, effects, icons)
    ├── index.tsx             # React root renderer
    └── types.ts              # TypeScript type definitions
```

## Configure and Run

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## ✨ Features

*   **Interactive Virtual Pet:** Interact with Chandrabhaga through various actions.
*   **Dynamic Moods:** Watch Chandrabhaga's expression change based on her stats. She can be happy, sad, sleepy, or neutral.
*   **Stat Management:** Balance three core stats:
    *   **Happiness:** How joyful your cat is.
    *   **Hunger:** How full her tummy is.
    *   **Energy:** How rested and active she is.
*   **Care Actions:** Perform four key actions to care for your cat:
    *   **Feed:** Decrease hunger.
    *   **Pet:** Increase happiness.
    *   **Play:** Boost happiness but uses energy.
    *   **Nap:** Restore energy.
*   **Real-time Stat Decay:** Stats change over time, creating a constant need for attention and care.
*   **Game Over & Replay:** If you neglect Chandrabhaga for too long, the game ends, but you can always start over!
*   **Beautiful UI:** A clean, cute, and responsive design built with Tailwind CSS.

## 🎮 How to Play

The goal is to keep Chandrabhaga's stats in a healthy range for as long as possible.

1.  **Monitor the Stats:** Keep an eye on the three status bars:
    *   **Happiness:** Keep this bar as full as possible by petting and playing with Chandrabhaga. If it drops to 0, it's game over!
    *   **Fullness:** This bar represents how full Chandrabhaga is (it's the inverse of hunger). Keep it high by feeding her. If her hunger reaches 100% (meaning Fullness is 0), it's game over.
    *   **Energy:** This decreases over time and with play. Let her nap to restore it. Low energy will make her sleepy.

2.  **Use the Action Buttons:**
    *   Click **Feed** to give her a meal.
    *   Click **Pet** to give her loving scratches.
    *   Click **Play** to have some fun together.
    *   Click **Nap** to let her rest and recharge.

3.  **Read the Messages:** Pay attention to the messages below the cat illustration. they provide clues about her current state and needs.

