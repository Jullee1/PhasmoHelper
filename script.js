// ========================================
// GHOST DATA
// ========================================
const ghostData = [
    {
        "name": "Spirit",
        "evidence": ["EMF 5", "Spirit Box", "Ghost Writing"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 50,
        "behavior": "Will wait 180s after being incensed before attempting to hunt again, instead of the standard 90s.",
        "behaviorPoints": [
            "Tell: Will wait 180s after being incensed before attempting to hunt again, instead of the standard 90s"
        ],
        "confirmationTest": "After smudging the ghost initially, wait 150s - 170s and smudge the ghost again (starting a new smudge timer). If the ghost hunts within 60s of the second smudge (earliest a Demon could hunt), it is a Spirit. Note: this test can fail if the ghost is not actually smudged the second time.",
        "confirmationPoints": [
            "Tell (Definitive): After smudging the ghost initially, wait 150s - 170s and smudge the ghost again (starting a new smudge timer)",
            "If the ghost hunts within 60s of the second smudge (earliest a Demon could hunt), it is a Spirit",
            "Note: this test can fail if the ghost is not actually smudged the second time"
        ],
        "eliminationTest": "Start a timer as soon as the ghost has been smudged. If the ghost hunts before 180s, it is *not* a Spirit.",
        "eliminationPoints": [
            "Ability: Start a timer as soon as the ghost has been smudged",
            "If the ghost hunts before 180s, it is *not* a Spirit"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Wraith",
        "evidence": ["EMF 5", "Spirit Box", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 50,
        "behavior": "Will not touch nor interact with salt in any way. Will not be slowed down by tier 3 salt during a hunt. Can teleport to a random player, leaving EMF 2 at their new location. Wraith is the only ghost that can teleport to a player outside of an event.",
        "behaviorPoints": [
            "Tell: Will not touch nor interact with salt in any way",
            "Tell: Will not be slowed down by tier 3 salt during a hunt", 
            "Ability: Can teleport to a random player, leaving EMF 2 at their new location",
            "Note: Wraith is the only ghost that can teleport to a player outside of an event"
        ],
        "confirmationTest": "If you see the ghost walk through salt without disturbing it, or place salt below a motion sensor and it activates without disturbing salt, it is a Wraith. EMF 2 without interaction nearby may indicate Wraith teleport ability.",
        "confirmationPoints": [
            "Tell (Definitive): If you see the ghost walk through a salt pile during an event or hunt without disturbing it, it is a Wraith",
            "Tell (Definitive): Place salt in a line directly below a Tier 1 or Tier 2 motion sensor, ensuring that the salt covers the entirety of the laser line",
            "If the motion sensor activates but the salt is undisturbed, it's a Wraith",
            "Ability (Non-Definitive): If while investigating you get a EMF 2 without any interaction near you, it may have been a Wraith using its ability to teleport"
        ],
        "eliminationTest": "If salt is disturbed by the ghost in any way, it is *not* a Wraith.",
        "eliminationPoints": [
            "Tell: If salt is disturbed by the ghost in any way, it is *not* a Wraith"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Phantom",
        "evidence": ["Spirit Box", "Ultraviolet", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 50,
        "behavior": "Will not appear in Ghost photos or videos. Taking a photo causes ghost to disappear. Less visible during hunts. Player loses 0.5% sanity/s while in heartbeat range. Can roam toward random player leaving EMF 2.",
        "behaviorPoints": [
            "Tell: Will not appear in \"Ghost\" photos or \"Ghost\" videos (will still appear in \"Translucent Ghost\", \"Shadow Ghost\", and \"DOTS Ghost\" videos)",
            "Tell: Taking a photo or video of the ghost will cause the ghost to disappear (including DOTS state)",
            "Tell: Less visible during hunts",
            "Tell: Player will lose 0.5% sanity /s while in heartbeat range of the ghost during hunts and events",
            "Ability: Can roam toward a random player, leaving EMF 2 at the location where it wanders to"
        ],
        "confirmationTest": "Take photo/video during event or DOTS - if ghost disappears but doesn't appear in Ghost photo/video, it's a Phantom. If ghost seems nearly invisible during hunt, it's a Phantom. EMF 2 without interaction may indicate roaming ability.",
        "confirmationPoints": [
            "Tell (Definitive): Take a photo of the ghost during an event or while the ghost is visible in DOTS",
            "If the ghost disappears (but the event sounds continue) and the ghost does not appear in the \"Ghost\" photo in the journal, it is a Phantom",
            "Tell (Definitive): Take a video of the ghost during an event or while the ghost is visible in DOTS",
            "If the ghost disappears (but the event sounds continue) and the video is a \"Ghost\" type video, it is a Phantom",
            "Tell (Definitive): Watch the ghost during a hunt, if the ghost seems nearly invisible during the hunt, it is a Phantom",
            "Ability (Non-Definitive): If while investigating you get a EMF 2 without any interaction near you, it may have been a Phantom using its ability to roam"
        ],
        "eliminationTest": "If the ghost appears in a Ghost photo in the journal, or has normal/increased blinking during a hunt, it is not a Phantom.",
        "eliminationPoints": [
            "Tell: If the ghost appears in a \"Ghost\" photo in the journal, it is not a Phantom",
            "Tell: If the ghost has normal or increased blinking during a hunt, it is not a Phantom"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Poltergeist",
        "evidence": ["Spirit Box", "Ultraviolet", "Ghost Writing"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 50,
        "behavior": "During hunts, Poltergeists will throw an item every 0.5s with an increased force. Has a higher chance to throw & interact with objects. Can throw objects faster and further. Poltergeist Explosion: will throw multiple objects at the same time, decreasing nearby player sanity by 2% per item thrown. There are 4 types of Poltergeist Explosion (See below).",
        "behaviorPoints": [
            "Tell: During hunts, Poltergeists will throw an item every 0.5s with an increased force",
            "Behavior: Has a higher chance to throw & interact with objects",
            "Behavior: Can throw objects faster and further",
            "Ability: Poltergeist Explosion: will throw multiple objects at the same time, decreasing nearby player sanity by 2% per item thrown",
            "There are 4 types of Poltergeist Explosion (See below)"
        ],
        "confirmationTest": "Place multiple objects in a row on the floor where the ghost is likely to walk over during a hunt. If all items are thrown and at a large distance, it is a Poltergeist. Poltergeist Explosion: Place multiple objects close together (not on top of each other) in a 'pile' in the ghost room. If all or many of the items get thrown at the same time, it is a Poltergeist.",
        "confirmationPoints": [
            "Tell (Definitive): Place multiple objects in a row on the floor where the ghost is likely to walk over during a hunt",
            "If all items are thrown and at a large distance, it is a Poltergeist",
            "Ability (Definitive): Poltergeist Explosion: Place multiple objects close together (not on top of each other) in a 'pile' in the ghost room",
            "If all or many of the items get thrown at the same time, it is a Poltergeist"
        ],
        "eliminationTest": "(There are no elimination tests for Poltergeist)",
        "eliminationPoints": [
            "(There are no elimination tests for Poltergeist)"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Banshee",
        "evidence": ["Ultraviolet", "Ghost Orbs", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 50,
        "behavior": "33% chance to give 1 of 20 unique screams through the parabolic microphone. Examples: (🎵♫1 | 🎵♫3 | 🎵♫13 | 🎵♫14 | 🎵🔊). Hunts based on target's sanity instead of average sanity. Will only pursue its target during a hunt (if the target inside). Target loses 15% sanity if they touch the ghost during a singing ghost event (standard drain is 10%). Prefers singing ghost events. 66% chance to stalk/roam to its target (if inside) without moving past EMF (cannot EMF 2 on all floors except for single room basements).",
        "behaviorPoints": [
            "Tell: 33% chance to give 1 of 20 unique screams through the parabolic microphone",
            "Tell: Hunts based on target's sanity instead of average sanity",
            "Tell: Will only pursue its target during a hunt (if the target inside)",
            "Tell: Target loses 15% sanity if they touch the ghost during a singing ghost event (standard drain is 10%)",
            "Behavior: Prefers singing ghost events",
            "Ability: 66% chance to stalk/roam to its target (if inside) without moving past EMF (cannot EMF 2 on all floors except for single room basements)"
        ],
        "uniqueSounds": [
            { "label": "1", "type": "scream1" },
            { "label": "2", "type": "scream3" },
            { "label": "3", "type": "scream13" },
            { "label": "4", "type": "scream14" },
            { "label": "5", "type": "scream-loud" }
        ],
        "confirmationTest": "Listen to the ghost using a parabolic microphone; if you hear the unique scream, it is a Banshee. In multiplayer, have everyone be inside when the ghost hunts. If the ghost does not pursue non-target players or the non-target players are able to touch the ghost without dying, it is a Banshee. Place motion sensors around the map in a line close to determine if the ghost is wandering often toward one of the players. If so, it could be a Banshee.",
        "confirmationPoints": [
            "Tell (Definitive): Listen to the ghost using a parabolic microphone; if you hear the unique scream, it is a Banshee",
            "Tell (Definitive): In multiplayer, have everyone be inside when the ghost hunts. If the ghost does not pursue non-target players or the non-target players are able to touch the ghost without dying, it is a Banshee",
            "Ability (Non-Definitive): Place motion sensors around the map in a line close to determine if the ghost is wandering often toward one of the players. If so, it could be a Banshee"
        ],
        "eliminationTest": "(There are no elimination tests for Banshee)",
        "eliminationPoints": [
            "(There are no elimination tests for Banshee)"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Jinn",
        "evidence": ["EMF 5", "Ultraviolet", "Freezing Temps"],
        "speed": 2.5,
        "speedCategory": "fast",
        "huntSanity": 50,
        "behavior": "With the breaker on, the Jinn will speed up during a hunt if a player is in LOS and more than 3m away. The Jinn cannot directly turn off the breaker. With the breaker on, can drop nearby players' sanity by 25%, with EMF 2 at the breaker.",
        "behaviorPoints": [
            "Tell: With the breaker on, the Jinn will speed up during a hunt if a player is in LOS and more than 3m away",
            "Behavior: The Jinn cannot directly turn off the breaker",
            "Ability: With the breaker on, can drop nearby players' sanity by 25%, with EMF 2 at the breaker"
        ],
        "confirmationTest": "During a hunt (with the breaker on) stand more than 3 meters in its current path. When the ghost speeds up from 1.7m/s to 2.5m/s when it sees you, and then slows back down to 1.7m/s if you get within 3m of you, it is a Jinn (be aware of active electronics to not confuse it with a Raiju, use LoS to not confuse it with a Revenant, and do not be in a cold room to not confuse it with a Hantu or Thaye (be sure to get the initial sanity reading to ensure quicker testing).",
        "confirmationPoints": [
            "Tell (Definitive): During a hunt (with the breaker on) stand more than 3 meters in its current path",
            "When the ghost speeds up from 1.7m/s to 2.5m/s when it sees you, and then slows back down to 1.7m/s if you get within 3m of you, it is a Jinn",
            "Be aware of active electronics to not confuse it with a Raiju, use LoS to not confuse it with a Revenant, and do not be in a cold room to not confuse it with a Hantu or Thaye"
        ],
        "eliminationTest": "If the breaker gets turned off directly by the ghost, it is not a Jinn.",
        "eliminationPoints": [
            "Behavior: If the breaker gets turned off directly by the ghost, it is not a Jinn"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "2.5 m/s when breaker is on and player is >3m away + LoS. Standard LoS acceleration applies otherwise"
        }
    },
    {
        "name": "Mare",
        "evidence": ["Spirit Box", "Ghost Orbs", "Ghost Writing"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 60,
        "behavior": "Won't hunt until 40% average sanity when light switch is in its current room (regardless of breaker state), 60% average sanity if light switch is in the off position (regardless of breaker state). Will wander more if the lights are on in its current room. Prefers turning off lights and light switches. Cannot turn on lights (including TVs and computers, excluding motion activated lights). Can immediately turn off a light switch (or lamp) that a player has turned on within 4m of the ghost.",
        "behaviorPoints": [
            "Tell: Won't hunt until 40% average sanity when light switch is in its current room (regardless of breaker state), 60% average sanity if light switch is in the off position (regardless of breaker state)",
            "Behavior: Will wander more if the lights are on in its current room",
            "Behavior: Prefers turning off lights and light switches",
            "Behavior: Cannot turn on lights (including TVs and computers, excluding motion activated lights)",
            "Ability: Can immediately turn off a light switch (or lamp) that a player has turned on within 4m of the ghost"
        ],
        "confirmationTest": "Every 10s, each player can test the lights state by flicking a light switch on and seeing if the ghost will immediately turn lights off (within 1s per lightswitch). If it does, it could be a Mare. To ensure quicker testing, try placing one motion sensors below the light switch to know where the ghost is in relation to them. As a note, if you test this, use its ability in a room with shattered lights. (Be aware that other ghosts can appear to do this by coincidence, it is best to get this in multiple times).",
        "confirmationPoints": [
            "Ability (Non-Definitive): Every 10s, each player can test the lights state by flicking a light switch on and seeing if the ghost will immediately turn lights off (within 1s per lightswitch)",
            "If it does, it could be a Mare. To ensure quicker testing, try placing one motion sensors below the light switch to know where the ghost is in relation to them",
            "As a note, if you test this, use its ability in a room with shattered lights. (Be aware that other ghosts can appear to do this by coincidence, it is best to get this in multiple times)"
        ],
        "eliminationTest": "If a ghost turns on a light switch, it is not a Mare.",
        "eliminationPoints": [
            "Behavior: If a ghost turns on a light switch, it is not a Mare"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Revenant",
        "evidence": ["Ghost Orbs", "Ghost Writing", "Freezing Temps"],
        "speed": 3.0,
        "speedCategory": "fast",
        "huntSanity": 50,
        "behavior": "During a hunt, a Revenant will be slow (1.0m/s) until it detects a player (voice, active electronic equipment, or LOS) where it will immediately speed up to 3.0m/s and remain at that speed until it reaches the player's last known location where it will gradually slow back down.",
        "behaviorPoints": [
            "Tell: During a hunt, a Revenant will be slow (1.0m/s) until it detects a player (voice, active electronic equipment, or LOS) where it will immediately speed up to 3.0m/s and remain at that speed until it reaches the player's last known location where it will gradually slow back down"
        ],
        "confirmationTest": "During a hunt, listen to the speed of the ghost. If it speeds up from 1.0m/s to 3.0m/s when you slow it to detect you, and then slows down, it is a Revenant. (Will be faster than Jinn and Raiju, see ghost cards for example speeds).",
        "confirmationPoints": [
            "Tell (Definitive): During a hunt, listen to the speed of the ghost",
            "If it speeds up from 1.0m/s to 3.0m/s when you slow it to detect you, and then slows down, it is a Revenant",
            "(Will be faster than Jinn and Raiju, see ghost cards for example speeds)"
        ],
        "eliminationTest": "During a hunt, listen to the speed of the ghost. If it never goes 3.0m/s, it is not a Revenant.",
        "eliminationPoints": [
            "Tell: During a hunt, listen to the speed of the ghost. If it never goes 3.0m/s, it is not a Revenant"
        ],
        "speedDetails": {
            "normal": "1.0 m/s when not seeing anyone",
            "special": "3.0 m/s when player is visible until sight is broken. NO LoS acceleration - speed is fixed"
        }
    },
    {
        "name": "Shade",
        "evidence": ["EMF 5", "Ghost Writing", "Freezing Temps"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 35,
        "behavior": "Only ghost that can appear as a shadow ghost model on summoning circle, music box, and monkey paw events. Cannot perform singing ghost events. Prefers shadow ghost model during events. Will not hunt if in the same room as a player. Will not do events in the same room as a player (but can start an event outside of the room and teleport into the room via the player). Will not do ghost interactions that result in EMF 2 or EMF 3 while in the same room as the player, including blowing out flames (can start just outside of the room and interact with things in the room). Does more ghost events at a lower average sanity (cannot do ghost events at 100% sanity). Will not blow out firelights while hunting if in the same room as the player (beware of actual or buggy room boundaries).",
        "behaviorPoints": [
            "Tell: Only ghost that can appear as a shadow ghost model on summoning circle, music box, and monkey paw events",
            "Tell: Cannot perform singing ghost events ⚠",
            "Behavior: Prefers shadow ghost model during events",
            "Behavior: Will not hunt if in the same room as a player",
            "Behavior: Will not do events in the same room as a player (but can start an event outside of the room and teleport into the player)",
            "Behavior: Will not do ghost interactions that result in EMF 2 or EMF 3 while in the same room as the player, including blowing out flames (can start just outside of the room and interact with things in the room)",
            "Behavior: Does more ghost events at a lower average sanity (cannot do ghost events at 100% sanity)",
            "Behavior: Will not blow out firelights while hunting if in the same room as the player (beware of actual or buggy room boundaries)"
        ],
        "confirmationTest": "If you have the summoning circle, light it, and if the ghost is a shadow model, it is a Shade (this will also work with music box and monkey paw events). Once the ghost room is known, place a crucifix covering the entire room and place motion sensors at all entrances to the room. Pay attention to where the ghost is using the motion sensors. If the ghost does roaming or hunting (within 3m of the room as well), it could be a Shade. To ensure quicker testing, try placing multiple lit firelights in a room away from any room boundary, close the door so it's obviously in place, ensuring the ghost is not in that room or near the room and keeping track of the ghost's sanity. If you while hunting (beware of bugged room boundaries, like a fake wall) the ghost has not extinguished any firelights while hunting (as the same room as you), it could be a Shade.",
        "confirmationPoints": [
            "Tell (Definitive): If you have the summoning circle, light it, and if the ghost is a shadow model, it is a Shade (this will also work with music box and monkey paw events)",
            "Behavior (Non-Definitive): Once the ghost room is known, place a crucifix covering the entire room and place motion sensors at all entrances to the room",
            "Pay attention to where the ghost is using the motion sensors. If the ghost does roaming or hunting (within 3m of the room as well), it could be a Shade",
            "Behavior (Non-Definitive): Try placing multiple lit firelights in a room away from any room boundary, close the door, ensuring the ghost is not in that room or near the room",
            "If while hunting (beware of bugged room boundaries) the ghost has not extinguished any firelights while hunting (in the same room as you), it could be a Shade"
        ],
        "eliminationTest": "If the ghost performs a singing ghost event, it is not a Shade. If the ghost does any interaction or event resulting in EMF 2, 3, or 4 in the same room as a player, it is not a Shade. If the ghost attempts to hunt in the same room as a player, it is not a Shade. If the ghost attempts to hunt above 35% average sanity, it is not a Shade. If the ghost does an event while average sanity is at 100%, it is not a Shade. During a hunt, if the ghost blows out a firelight while in the same room as you (be aware of actual or buggy room boundaries), it is not a Shade.",
        "eliminationPoints": [
            "Tell: If the ghost performs a singing ghost event, it is not a Shade ⚠",
            "Behavior: If the ghost does any interaction or event resulting in EMF 2, 3, or 4 in the same room as a player, it is not a Shade",
            "Behavior: If the ghost attempts to hunt in the same room as a player, it is not a Shade",
            "Behavior: If the ghost attempts to hunt above 35% average sanity, it is not a Shade",
            "Behavior: If the ghost does an event while average sanity is at 100%, it is not a Shade",
            "Behavior: During a hunt, if the ghost blows out a firelight while in the same room as you (be aware of actual or buggy room boundaries), it is not a Shade ⚠"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Demon",
        "evidence": ["Ultraviolet", "Ghost Writing", "Freezing Temps"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 70,
        "behavior": "Can hunt 60s after being smudged instead of the standard 90s. Can hunt 20s after the previous hunt has ended or ghost has used a crucifix instead of the standard 25s. Crucifix range is increased by 50% per tier (4.5m, 6m, 7.5m respectively). Can hunt at any sanity.",
        "behaviorPoints": [
            "Tell: Can hunt 60s after being smudged instead of the standard 90s",
            "Tell: Can hunt 20s after the previous hunt has ended or ghost has used a crucifix instead of the standard 25s",
            "Behavior: Crucifix range is increased by 50% per tier (4.5m, 6m, 7.5m respectively)",
            "Ability: Can hunt at any sanity"
        ],
        "confirmationTest": "Start a timer after the ghost has been smudged. If it hunts again before 90s, it is a Demon. Start a timer after a hunt ends or after a crucifix has been used. If it hunts again before 25s, it is a Demon. If a ghost hunts above 80% sanity, no one player's sanity is below 50%, and no candles have been blown out, and if it hunts before the Chapel since the Chapel was used (only on Sunny Meadows, it is possible for an Onryo to hunt early since the Chapel gets used up after it).",
        "confirmationPoints": [
            "Tell (Definitive): Start a timer after the ghost has been smudged. If it hunts again before 90s, it is a Demon",
            "Tell (Definitive): Start a timer after a hunt ends or after a crucifix has been used. If it hunts again before 25s, it is a Demon",
            "Ability (Definitive): If a ghost hunts above 80% sanity, no one player's sanity is below 50%, and no candles have been blown out, and if it hunts before the Chapel since the Chapel was used (only on Sunny Meadows, it is possible for an Onryo to hunt early since the Chapel gets used up after it)"
        ],
        "eliminationTest": "(There are no elimination tests for Demon)",
        "eliminationPoints": [
            "(There are no elimination tests for Demon)"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Yurei",
        "evidence": ["Ghost Orbs", "Freezing Temps", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 50,
        "behavior": "Only ghost that can close or interact with an exit door shut, outside of a hunt/event. Must fully open / shut a door when doing door interactions (outside of a hunt). Incensing the ghost will force the ghost into 'favorite room state' for the duration of the incense effect (90s). Can shut a door and drop sanity of nearby players by 15% if a door is in room.",
        "behaviorPoints": [
            "Tell: Only ghost that can close or interact with an exit door shut, outside of a hunt/event",
            "Tell: Must fully open / shut a door when doing door interactions (outside of a hunt)",
            "Behavior: Incensing the ghost will force the ghost into 'favorite room state' for the duration of the incense effect (90s)",
            "Ability: Can shut a door and drop sanity of nearby players by 15% if a door is in room"
        ],
        "confirmationTest": "(There are no confirmation tests for Yurei)",
        "confirmationPoints": [
            "(There are no confirmation tests for Yurei)"
        ],
        "eliminationTest": "If at any point the ghost interacts with a door (outside of a hunt) and the door does not fully open / shut, it is not a Yurei.",
        "eliminationPoints": [
            "Tell: If at any point the ghost interacts with a door (outside of a hunt) and the door does not fully open / shut, it is not a Yurei"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Oni",
        "evidence": ["EMF 5", "Freezing Temps", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 50,
        "behavior": "Drains 20% sanity during events (instead of the standard 10%). Will not do 'Ghost Mist' event. Blinks more frequently during hunts, making them more visible. More active around multiple people. More likely to appear as full ghost model during events.",
        "behaviorPoints": [
            "Tell: Drains 20% sanity during events (instead of the standard 10%)",
            "Tell: Will not do 'Ghost Mist' event",
            "Tell: Blinks more frequently during hunts, making them more visible",
            "Behavior: More active around multiple people",
            "Behavior: More likely to appear as full ghost model during events"
        ],
        "confirmationTest": "Watch the ghost during a hunt, if the ghost is more visible during the hunt, it is an Oni. If sanity monitor is enabled, check sanity after a ghost event. If it dropped 20% instead of 10%, it is an Oni.",
        "confirmationPoints": [
            "Tell (Definitive): Watch the ghost during a hunt, if the ghost is more visible during the hunt, it is an Oni",
            "Ability (Definitive): If sanity monitor is enabled, check sanity after a ghost event. If it dropped 20% instead of 10%, it is an Oni"
        ],
        "eliminationTest": "If you ever get a 'Ghost Mist' event, it is not an Oni.",
        "eliminationPoints": [
            "Tell: If you ever get a 'Ghost Mist' event, it is not an Oni"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Hantu",
        "evidence": ["Ghost Orbs", "Ultraviolet", "Freezing Temps"],
        "speed": 2.7,
        "speedCategory": "fast",
        "huntSanity": 50,
        "behavior": "Will have visible freezing breath during hunts when the breaker is off/broken. Cannot turn on the breaker. More likely to turn off the breaker. Is faster in colder rooms during hunts.",
        "behaviorPoints": [
            "Tell: Will have visible freezing breath during hunts when the breaker is off/broken",
            "Tell: Cannot turn on the breaker",
            "Tell: More likely to turn off the breaker",
            "Tell: Is faster in colder rooms during hunts"
        ],
        "confirmationTest": "Ensure the breaker is off/broken, then watch the ghost while it hunts. If you see visible breath from the ghost, it is a Hantu. During a hunt if the ghost seems to change speeds randomly without being influenced by equipment or the player, it is a Hantu.",
        "confirmationPoints": [
            "Tell (Definitive): Ensure the breaker is off/broken, then watch the ghost while it hunts. If you see visible breath from the ghost, it is a Hantu",
            "Tell (Definitive): During a hunt if the ghost seems to change speeds randomly without being influenced by equipment or the player, it is a Hantu"
        ],
        "eliminationTest": "While the breaker is off or broken, if you do not see visible breath, it is not a Hantu. If the ghost turns on the breaker, it is not a Hantu. If the ghost speeds up in LOS, it is not a Hantu.",
        "eliminationPoints": [
            "Tell: While the breaker is off or broken, if you do not see visible breath, it is not a Hantu",
            "Tell: If the ghost turns on the breaker, it is not a Hantu",
            "Tell: If the ghost speeds up in LOS, it is not a Hantu"
        ],
        "speedDetails": {
            "normal": "1.44 m/s in warm rooms",
            "special": "2.7 m/s in cold rooms. NO LoS acceleration - speed based on temperature only"
        }
    },
    {
        "name": "Yokai",
        "evidence": ["Spirit Box", "Ghost Orbs", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 80,
        "behavior": "Hearing/detection distance is 2.5m and less during hunts. More active when talking near it. Talking in the same room as a Yokai can cause it to hunt up to 80% average sanity.",
        "behaviorPoints": [
            "Tell: Hearing/detection distance is 2.5m and less during hunts",
            "Behavior: More active when talking near it",
            "Ability: Talking in the same room as a Yokai can cause it to hunt up to 80% average sanity"
        ],
        "confirmationTest": "During a hunt, speak (or key up global chat) while at a distance where a normal ghost could hear you but a Yokai could not and see if the ghost does detect you. If it doesn't detect you, it is a Yokai.",
        "confirmationPoints": [
            "Tell (Definitive): During a hunt, speak (or key up global chat) while at a distance where a normal ghost could hear you but a Yokai could not and see if the ghost does detect you",
            "If it doesn't detect you, it is a Yokai"
        ],
        "eliminationTest": "During a hunt, speak (or key up global chat) while at a distance where a normal ghost could hear you but a Yokai could not and see if the ghost comes to you. If it does detect you, it is not a Yokai.",
        "eliminationPoints": [
            "Tell: During a hunt, speak (or key up global chat) while at a distance where a normal ghost could hear you but a Yokai could not and see if the ghost comes to you",
            "If it does detect you, it is not a Yokai"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Goryo",
        "evidence": ["EMF 5", "Ultraviolet", "DOTS Projector"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 50,
        "behavior": "Cannot change favorite rooms. Does not wander from its room often.",
        "behaviorPoints": [
            "Behavior: Cannot change favorite rooms",
            "Behavior: Does not wander from its room often"
        ],
        "confirmationTest": "(There are no confirmation tests for Goryo)",
        "confirmationPoints": [
            "(There are no confirmation tests for Goryo)"
        ],
        "eliminationTest": "If the ghost changes its favorite room, it is not a Goryo.",
        "eliminationPoints": [
            "Tell: If the ghost changes its favorite room, it is not a Goryo"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Myling",
        "evidence": ["EMF 5", "Ultraviolet", "Ghost Writing"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 50,
        "behavior": "Footsteps and vocals cannot be heard more than 12m away during hunts (normal is 20m). Makes sounds through the parabolic microphone / sound recorder more frequently than other ghosts.",
        "behaviorPoints": [
            "Tell: Footsteps and vocals cannot be heard more than 12m away during hunts (normal is 20m)",
            "Tell: Makes sounds through the parabolic microphone / sound recorder more frequently than other ghosts"
        ],
        "confirmationTest": "During a hunt, if you cannot hear the ghost between 12m and 20m away, it is a Myling. If the ghost makes two paranormal sounds through the parabolic microphone or sound recorder in under 80s of each other, it is a Myling.",
        "confirmationPoints": [
            "Tell (Definitive): During a hunt, if you cannot hear the ghost between 12m and 20m away, it is a Myling",
            "Tell (Definitive): If the ghost makes two paranormal sounds through the parabolic microphone or sound recorder in under 80s of each other, it is a Myling"
        ],
        "eliminationTest": "If you can hear the ghost between 12m and 20m away during a hunt, it is not a Myling.",
        "eliminationPoints": [
            "Tell: If you can hear the ghost between 12m and 20m away during a hunt, it is not a Myling"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "Onryo",
        "evidence": ["Spirit Box", "Ghost Orbs", "Freezing Temps"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 60,
        "behavior": "Will attempt to hunt at any sanity after extinguishing any third flame. Cannot light fire sources. Flames act like crucifixes, will blow out a flame if it tries to hunt (within 4m). Ghost prioritizes flames over crucifixes when attempting hunts. More likely to extinguish a flame, the average sanity the closer to 0%.",
        "behaviorPoints": [
            "Tell: Will attempt to hunt at any sanity after extinguishing any third flame",
            "Tell: Cannot light fire sources",
            "Behavior: Flames act like crucifixes, will blow out a flame if it tries to hunt (within 4m). Ghost prioritizes flames over crucifixes when attempting hunts",
            "Behavior: More likely to extinguish a flame, the average sanity the closer to 0%"
        ],
        "confirmationTest": "If the ghost blows out the same firelight twice within 20s, it is an Onryo. If sanity is above 75%: Place a candle (or 3 candles) on top of a Tier 1 or Tier 2 crucifix. If a candle blowout has been extinguished 3 times (or all 3 candles have been extinguished) and the crucifix was not used within seconds, it could be an Onryo. If sanity is below 35%: Place a candle or many candles in the ghost room and keep them constantly lit. If the ghost has not hunted after an extended period of time, it could be an Onryo.",
        "confirmationPoints": [
            "Tell (Definitive): If the ghost blows out the same firelight twice within 20s, it is an Onryo ⚠",
            "Tell (Non-Definitive): If sanity is above 75%: Place a candle (or 3 candles) on top of a Tier 1 or Tier 2 crucifix",
            "If a candle blowout has been extinguished 3 times (or all 3 candles have been extinguished) and the crucifix was not used within seconds, it could be an Onryo",
            "Tell (Non-Definitive): If sanity is below 35%: Place a candle or many candles in the ghost room and keep them constantly lit",
            "If the ghost has not hunted after an extended period of time, it could be an Onryo"
        ],
        "eliminationTest": "If the ghost lights a fire source, it is not an Onryo. Place a candle on top of a crucifix (be aware that the range of the Tier 3 crucifix has a larger range than the candle does for preventing an Onryo hunt, you may need multiple candles to get coverage). If the crucifix is used while the candle is still lit, it is not an Onryo.",
        "eliminationPoints": [
            "Tell: If the ghost lights a fire source, it is not an Onryo",
            "Tell: Place a candle on top of a crucifix (be aware that the range of the Tier 3 crucifix has a larger range than the candle does for preventing an Onryo hunt, you may need multiple candles to get coverage)",
            "If the crucifix is used while the candle is still lit, it is not an Onryo"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "The Twins",
        "evidence": ["EMF 5", "Spirit Box", "Freezing Temps"],
        "speed": 1.5,
        "speedCategory": "slow",
        "huntSanity": 50,
        "behavior": "Can do 2 interactions at the same time, one within its standard radius (2.22m, 2.64m on large maps) and the other within its extended radius (8.48m, 16.97m on large maps). Ghost speed during hunts will be either 1.5m/s or 1.9m/s.",
        "behaviorPoints": [
            "Tell: Can do 2 interactions at the same time, one within its standard radius (2.22m, 2.64m on large maps) and the other within its extended radius (8.48m, 16.97m on large maps)",
            "Tell: Ghost speed during hunts will be either 1.5m/s or 1.9m/s"
        ],
        "confirmationTest": "If the ghost alternates between 1.5m/s and 1.9m/s speed between hunts, it is The Twins. If there are interactions far away from the ghost room frequently, it could be The Twins.",
        "confirmationPoints": [
            "Tell (Definitive): If the ghost alternates between 1.5m/s and 1.9m/s speed between hunts, it is The Twins",
            "Tell (Non-Definitive): If there are interactions far away from the ghost room frequently, it could be The Twins"
        ],
        "eliminationTest": "(There are no elimination tests for The Twins)",
        "eliminationPoints": [
            "(There are no elimination tests for The Twins)"
        ],
        "speedDetails": {
            "normal": "1.5 m/s (Main ghost)",
            "special": "1.9 m/s (Decoy ghost). Both have standard LoS acceleration from their base speeds"
        }
    },
    {
        "name": "Raiju",
        "evidence": ["EMF 5", "Ghost Orbs", "DOTS Projector"],
        "speed": 2.5,
        "speedCategory": "fast",
        "huntSanity": 65,
        "behavior": "During events and hunts, causes electronic disturbance at a 15m radius. Increased speed near active electronic equipment while hunting. Can hunt at 65% when near active electronic equipment.",
        "behaviorPoints": [
            "Tell: During events and hunts, causes electronic disturbance at a 15m radius",
            "Tell: Increased speed near active electronic equipment while hunting",
            "Tell: Can hunt at 65% when near active electronic equipment"
        ],
        "confirmationTest": "Place active electronics near the ghost room. Then, during a hunt, hide and listen for the speed of the ghost as the electronics. The ghost is fast while walking near them, but slows down further away from them, it is a Raiju. While the ghost is hunting and is nearby, turn on the electronics (held or on the ground), you won't give your location away if it's on the ground. If the ghost's speed increases and decreases in relation to the equipment, it is a Raiju. If the ghost hunts early before any candles have been blown out, it is a Raiju.",
        "confirmationPoints": [
            "Tell (Definitive): Place active electronics near the ghost room. Then, during a hunt, hide and listen for the speed of the ghost as the electronics",
            "The ghost is fast while walking near them, but slows down further away from them, it is a Raiju",
            "Tell (Definitive): While the ghost is hunting and is nearby, turn on the electronics (held or on the ground), you won't give your location away if it's on the ground",
            "If the ghost's speed increases and decreases in relation to the equipment, it is a Raiju",
            "Tell (Non-Definitive): If the ghost hunts early before any candles have been blown out, it is a Raiju"
        ],
        "eliminationTest": "If the ghost does not speed up near electronics during a hunt, it is not a Raiju.",
        "eliminationPoints": [
            "Tell: If the ghost does not speed up near electronics during a hunt, it is not a Raiju"
        ],
        "speedDetails": {
            "normal": "1.7 m/s when electronics are off",
            "special": "2.5 m/s when near active electronics. Standard LoS acceleration applies otherwise"
        }
    },
    {
        "name": "Obake",
        "evidence": ["EMF 5", "Ultraviolet", "Ghost Orbs"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 50,
        "behavior": "Will change models for a single blink during hunts (at least one full standard length blink, see deeper explanation).",
        "behaviorPoints": [
            "Tell: Will change models for a single blink during hunts (at least one full standard length blink, see deeper explanation)"
        ],
        "confirmationTest": "Find a location where you can loop the ghost while being able to see the model at all times. If while looping the ghost during a hunt you see the model change for a single blink, it is an Obake. Place a single pile of salt near the ghost. If after stepping in the salt, during the sequence of audible footsteps, you hear one missed step (e.g. step... [.]... step... instead of step... step... step...), it is an Obake ⚠",
        "confirmationPoints": [
            "Tell (Definitive): Find a location where you can loop the ghost while being able to see the model at all times",
            "If while looping the ghost during a hunt you see the model change for a single blink, it is an Obake",
            "Tell (Definitive): Place a single pile of salt near the ghost. If after stepping in the salt, during the sequence of audible footsteps, you hear one missed step (e.g. step... [.]... step... instead of step... step... step...), it is an Obake ⚠"
        ],
        "eliminationTest": "(There are no elimination tests for Obake)",
        "eliminationPoints": [
            "(There are no elimination tests for Obake)"
        ],
        "speedDetails": {
            "normal": "1.7 m/s (Standard)",
            "special": "Standard LoS acceleration: 1.7 m/s → up to ~2.8 m/s with Line-of-Sight"
        }
    },
    {
        "name": "The Mimic",
        "evidence": ["Spirit Box", "Ultraviolet", "Freezing Temps", "Ghost Orbs (fake)"],
        "speed": 1.7,
        "speedCategory": "normal",
        "huntSanity": 50,
        "behavior": "Will always show Ghost Orbs as an additional evidence, even on 0 evidence. Mimics a different ghost every 30 - 120 seconds, taking on all behaviors, tells, and abilities of that ghost (excluding speed). Causing an inconsistent behavior.",
        "behaviorPoints": [
            "Tell: Will always show Ghost Orbs as an additional evidence, even on 0 evidence",
            "Ability: Mimics a different ghost every 30 - 120 seconds, taking on all behaviors, tells, and abilities of that ghost (excluding speed). Causing an inconsistent behavior"
        ],
        "confirmationTest": "In 0 evidence, check the ghost's favorite room for Ghost Orbs. If there are Ghost Orbs, it is The Mimic. Pay attention to the ghost behavior each hunt. If the behavior changes wildly between hunts (and it appears to be a different ghost each time), it is The Mimic.",
        "confirmationPoints": [
            "Tell (Definitive): In 0 evidence, check the ghost's favorite room for Ghost Orbs. If there are Ghost Orbs, it is The Mimic",
            "Ability (Definitive): Pay attention to the ghost behavior each hunt. If the behavior changes wildly between hunts (and it appears to be a different ghost each time), it is The Mimic"
        ],
        "eliminationTest": "Check the ghost's favorite room for Ghost Orbs. If there are no Ghost Orbs, it is not The Mimic.",
        "eliminationPoints": [
            "Tell: Check the ghost's favorite room for Ghost Orbs. If there are no Ghost Orbs, it is not The Mimic"
        ],
        "speedDetails": {
            "normal": "Varies based on mimicked ghost",
            "special": "Follows LoS rules of mimicked ghost: standard LoS if mimicking standard ghost, special rules if mimicking special ghost"
        }
    },
    {
        "name": "Moroi",
        "evidence": ["Spirit Box", "Ghost Writing", "Freezing Temps"],
        "speed": 2.25,
        "speedCategory": "fast",
        "huntSanity": 50,
        "behavior": "Places a curse on player when heard through parabolic microphone, curse drops sanity 2x as fast. Incense blindness duration during hunts is increased from 5s to 7.5s ⚠. Faster when average sanity is lower, can reach a speed of 3.71 m/s when in LOS.",
        "behaviorPoints": [
            "Tell: Places a curse on player when heard through parabolic microphone, curse drops sanity 2x as fast",
            "Tell: Incense blindness duration during hunts is increased from 5s to 7.5s ⚠",
            "Behavior: Faster when average sanity is lower, can reach a speed of 3.71 m/s when in LOS"
        ],
        "confirmationTest": "If you observe an increase in speed during hunts with LOS speed up, it is a Moroi. After smudging a ghost during hunt, if it takes more than 5s to return to you (assuming you're still around to detect you), it is a Moroi. If after hearing a whisper on the parabolic microphone / sound recorder, if the player's sanity seems to decrease more quickly, it could be a Moroi. Once your average sanity is below 40%, take sanity medication a few times to keep your sanity above 50%. Get into a hunt. If the ghost's speed decreases afterward, it is a Moroi. If after hearing a whisper on the parabolic microphone / sound recorder a player's sanity seems to decrease more quickly, it could be a Moroi.",
        "confirmationPoints": [
            "Tell (Definitive): If you observe an increase in speed during hunts with LOS speed up, it is a Moroi",
            "Tell (Definitive): After smudging a ghost during hunt, if it takes more than 5s to return to you (assuming you're still around to detect you), it is a Moroi",
            "Tell (Definitive): If after hearing a whisper on the parabolic microphone / sound recorder, if the player's sanity seems to decrease more quickly, it could be a Moroi",
            "Behavior (Definitive): Once your average sanity is below 40%, take sanity medication a few times to keep your sanity above 50%. Get into a hunt. If the ghost's speed decreases afterward, it is a Moroi",
            "Behavior (Non-Definitive): If after hearing a whisper on the parabolic microphone / sound recorder a player's sanity seems to decrease more quickly, it could be a Moroi"
        ],
        "eliminationTest": "(There are no elimination tests for Moroi)",
        "eliminationPoints": [
            "(There are no elimination tests for Moroi)"
        ],
        "speedDetails": {
            "normal": "1.5 m/s at high sanity",
            "special": "2.25 m/s at low sanity, up to 3.71 m/s with Standard LoS acceleration (dangerous combination!)"
        }
    },
    {
        "name": "Deogen",
        "evidence": ["Spirit Box", "Ghost Writing", "DOTS Projector"],
        "speed": 3.0,
        "speedCategory": "fast",
        "huntSanity": 40,
        "behavior": "Very fast hunt speed, but will slow down as it nears the target/player. Is more visible during hunts. Always has LOS of the player during hunts, meaning you cannot hide from a Deogen.",
        "behaviorPoints": [
            "Tell: Very fast hunt speed, but will slow down as it nears the target/player",
            "Tell: Is more visible during hunts",
            "Behavior: Always has LOS of the player during hunts, meaning you cannot hide from a Deogen"
        ],
        "confirmationTest": "If during a hunt you hear the ghost speeding toward you but then slows down significantly when near you, it is a Deogen.",
        "confirmationPoints": [
            "Tell (Definitive): If during a hunt you hear the ghost speeding toward you but then slows down significantly when near you, it is a Deogen"
        ],
        "eliminationTest": "If the ghost attempts to hunt above 40% average sanity, it is not a Deogen.",
        "eliminationPoints": [
            "Behavior: If the ghost attempts to hunt above 40% average sanity, it is not a Deogen"
        ],
        "speedDetails": {
            "normal": "3.0 m/s when player is far away (>6m)",
            "special": "0.4 m/s when close to player (<2.5m). NO LoS acceleration - speed based on distance only"
        }
    },
    {
        "name": "Thaye",
        "evidence": ["Ghost Orbs", "Ghost Writing", "DOTS Projector"],
        "speed": 2.75,
        "speedCategory": "fast",
        "huntSanity": 75,
        "behavior": "Age response on Ouija board increases as Thaye ages. Ghost will attempt to age every 1-2 minutes. If a player is in the same room when it attempts, it ages, otherwise, it waits and attempts again. More active when younger.",
        "behaviorPoints": [
            "Tell: Age response on Ouija board increases as Thaye ages",
            "Behavior: Ghost will attempt to age every 1-2 minutes. If a player is in the same room when it attempts, it ages, otherwise, it waits and attempts again",
            "Behavior: More active when younger"
        ],
        "confirmationTest": "If you have a Ouija Board, ask for the ghost's age. After some time, ask the question again. If the number given increases, it is Thaye. If the speed decreases each hunt and the ghost has no LOS, it is a Thaye. During a hunt, if the ghost does not speed up with LOS, it could be a Thaye.",
        "confirmationPoints": [
            "Tell (Definitive): If you have a Ouija Board, ask for the ghost's age. After some time, ask the question again. If the number given increases, it is Thaye",
            "Tell (Definitive): If the speed decreases each hunt and the ghost has no LOS, it is a Thaye",
            "Tell (Non-Definitive): During a hunt, if the ghost does not speed up with LOS, it could be a Thaye"
        ],
        "eliminationTest": "During a hunt, if a ghost does speed up with LOS, it is not a Thaye.",
        "eliminationPoints": [
            "Tell: During a hunt, if a ghost does speed up with LOS, it is not a Thaye"
        ],
        "speedDetails": {
            "normal": "2.75 m/s when young",
            "special": "1.0 m/s when aged. NO LoS acceleration - speed based on age only"
        }
    }
];

// ========================================
// GLOBAL STATE
// ========================================
let currentTheme = 'dark'; // dark, light, phasmophobia, notebook
let selectedGhost = null;
let filters = {
    search: '',
    evidence: {}, // {evidence: 'include'|'exclude'|'none'}
    speed: {}, // {category: 'include'|'exclude'|'none'}
    sanity: {} // {category: 'include'|'exclude'|'none'}
};

// Timer state
let timerInterval = null;
let timeRemaining = 180;
let isTimerRunning = false;

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    renderGhostList(ghostData);
    setupEventListeners();
    setupKeyboardShortcuts();
    loadTheme();
});

function initializeFilters() {
    // Initialize evidence filters
    const evidenceTypes = ["EMF 5", "Spirit Box", "Ghost Writing", "Ultraviolet", "DOTS Projector", "Ghost Orbs", "Freezing Temps"];
    evidenceTypes.forEach(ev => filters.evidence[ev] = 'none');
    
    // Initialize speed filters
    ['slow', 'normal', 'fast', 'los'].forEach(s => filters.speed[s] = 'none');
    
    // Initialize sanity filters
    ['late', 'normal', 'early', 'very-early'].forEach(s => filters.sanity[s] = 'none');
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Header buttons
    document.getElementById('toggleTimer').addEventListener('click', () => {
        toggleTimer();
    });
    
    document.getElementById('toggleTheme').addEventListener('click', toggleTheme);
    
    // Close button for timer
    document.getElementById('closeTimer').addEventListener('click', () => {
        document.getElementById('timerSidebar').classList.remove('open');
    });
    
    // AI Search
    document.getElementById('ghostSearch').addEventListener('input', (e) => {
        const query = e.target.value;
        handleAISearch(query);
    });
    
    // Clear search button
    document.getElementById('clearSearch').addEventListener('click', () => {
        document.getElementById('ghostSearch').value = '';
        handleAISearch('');
    });
    
    // Evidence filters
    document.querySelectorAll('#evidenceFilters .filter-item').forEach(item => {
        item.addEventListener('click', () => toggleFilter(item, 'evidence'));
    });
    
    // Speed filters (includes LOS speed now)
    document.querySelectorAll('#speedFilters .filter-chip').forEach(chip => {
        chip.addEventListener('click', () => toggleFilter(chip, 'speed'));
    });
    
    // Sanity filters (radio button style - only one can be selected)
    document.querySelectorAll('#sanityFilters .filter-chip').forEach(chip => {
        chip.addEventListener('click', () => toggleSanityFilter(chip));
    });
    
    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', clearAllFilters);
    
    // Timer controls
    document.getElementById('timerStart').addEventListener('click', toggleTimer);
    document.getElementById('timerReset').addEventListener('click', resetTimer);
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ignore if typing in input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(e.key.toLowerCase()) {
            case '/':
                e.preventDefault();
                document.getElementById('ghostSearch').focus();
                break;
            case 't':
                e.preventDefault();
                document.getElementById('timerSidebar').classList.toggle('open');
                break;
            case ' ':
                e.preventDefault();
                const floatingTimer = document.getElementById('floatingTimer');
                const minimizedTimer = document.getElementById('minimizedTimer');
                
                // If minimized timer is showing, maximize it
                if (!minimizedTimer.classList.contains('hidden')) {
                    maximizeTimer();
                }
                // If floating timer is hidden, open and start
                else if (floatingTimer.classList.contains('hidden')) {
                    toggleTimer();
                    // Auto-start timer after opening
                    setTimeout(() => {
                        if (!isTimerRunning) {
                            floatingStartTimer();
                        }
                    }, 100);
                }
                // If floating timer is open, toggle start/pause
                else {
                    if (isTimerRunning) {
                        floatingPauseTimer();
                    } else {
                        floatingStartTimer();
                    }
                }
                break;
        }
    });
}

// ========================================
// THEME MANAGEMENT
// ========================================
function toggleTheme() {
    const themes = ['dark', 'light', 'phasmophobia', 'notebook'];
    const currentIndex = themes.indexOf(currentTheme);
    currentTheme = themes[(currentIndex + 1) % themes.length];
    applyTheme();
    saveTheme();
}

function applyTheme() {
    document.body.className = `theme-${currentTheme}`;
    
    const themeButton = document.getElementById('toggleTheme');
    const themeNames = { 
        dark: '🌙 Dark', 
        light: '☀️ Light', 
        phasmophobia: '👻 Phasmo', 
        notebook: '📔 Notebook' 
    };
    
    // Update button text with icon
    const icon = themeNames[currentTheme].split(' ')[0];
    themeButton.querySelector('.btn-icon').textContent = icon;
    
    // Optional: Update button label (if you want to show the name)
    const label = themeButton.querySelector('.btn-label');
    if (label) {
        label.textContent = themeNames[currentTheme].split(' ')[1];
    }
}

function saveTheme() {
    localStorage.setItem('phasmo-theme', currentTheme);
}

function loadTheme() {
    const saved = localStorage.getItem('phasmo-theme');
    if (saved) {
        currentTheme = saved;
        applyTheme();
    }
}

// ========================================
// AI SEARCH FUNCTIONALITY
// ========================================
function handleAISearch(query) {
    const searchAnswerEl = document.getElementById('searchAnswer');
    const clearBtn = document.getElementById('clearSearch');
    
    // Show/hide clear button
    clearBtn.style.display = query ? 'flex' : 'none';
    
    if (!query || query.trim().length < 3) {
        searchAnswerEl.style.display = 'none';
        renderGhostList(ghostData);
        return;
    }
    
    const lowerQuery = query.toLowerCase();
    
    // Try to understand the question and find relevant ghosts
    const result = analyzeQuery(lowerQuery);
    
    if (result.ghosts.length > 0) {
        // Show answer box
        searchAnswerEl.style.display = 'block';
        searchAnswerEl.innerHTML = `
            <div class="search-answer-text">
                <strong>🤖 Answer:</strong> ${result.answer}
            </div>
            <div class="search-answer-ghosts">
                ${result.ghosts.map(ghost => `
                    <div class="search-answer-ghost" onclick="selectGhost('${ghost.name}')">
                        ${ghost.name}
                    </div>
                `).join('')}
            </div>
        `;
        
        // Filter ghost list to matching ghosts
        renderGhostList(result.ghosts);
    } else {
        // No matches found
        searchAnswerEl.style.display = 'block';
        searchAnswerEl.innerHTML = `
            <div class="search-answer-text">
                <strong>🤖 Answer:</strong> I couldn't find any ghosts matching that query. Try asking about:
                <br>• <strong>Evidence:</strong> "EMF 5", "Spirit Box", "Ultraviolet", "Ghost Writing", "Freezing Temps", "DOTS", "Ghost Orbs"
                <br>• <strong>Speed:</strong> "Fast ghosts", "Slow ghosts", "3.0 m/s", "Variable speed"
                <br>• <strong>Behavior:</strong> "Turn off lights", "Close doors", "Salt interaction", "Teleport"
                <br>• <strong>Hunt timing:</strong> "Early hunt", "Late hunt", "Any sanity"
                <br>• <strong>Smudge timing:</strong> "180 seconds", "60 seconds", "90 seconds"
                <br>• Or just search by <strong>ghost name</strong>!
            </div>
        `;
        renderGhostList(ghostData);
    }
}

function analyzeQuery(query) {
    let matchingGhosts = [];
    let answer = '';
    
    // BREAKER QUESTIONS
    if (query.includes('cannot') || query.includes("can't") || query.includes('can not')) {
        if (query.includes('turn off') && query.includes('breaker')) {
            matchingGhosts = ghostData.filter(g => 
                g.behavior.toLowerCase().includes('cannot') && 
                g.behavior.toLowerCase().includes('breaker')
            );
            answer = `Jinn cannot turn off the breaker. Hantu cannot turn ON the breaker.`;
        } else if (query.includes('turn on') && query.includes('breaker')) {
            matchingGhosts = ghostData.filter(g => 
                g.behavior.toLowerCase().includes('cannot turn on the breaker')
            );
            answer = `Hantu cannot turn on the breaker.`;
        } else if (query.includes('light') || query.includes('lights')) {
            matchingGhosts = ghostData.filter(g => 
                g.behavior.toLowerCase().includes('cannot') && 
                g.behavior.toLowerCase().includes('light')
            );
            answer = `Mare cannot turn on lights. Onryo cannot light fire sources.`;
        }
    }
    
    // SALT QUESTIONS
    else if (query.includes('salt')) {
        if (query.includes('not') || query.includes('no') || query.includes("doesn't") || query.includes('dont')) {
            matchingGhosts = ghostData.filter(g => 
                g.behavior.toLowerCase().includes('salt') && 
                (g.behavior.toLowerCase().includes('will not') || g.behavior.toLowerCase().includes('does not'))
            );
            answer = `Wraith will not touch or interact with salt in any way.`;
        }
    }
    
    // SPEED QUESTIONS
    else if (query.includes('fast') || query.includes('speed') || query.includes('slow') || query.includes('quick') || query.includes('hunt speed')) {
        if (query.includes('fastest') || query.includes('very fast') || query.includes('3.0')) {
            // Find ghosts that can reach the highest speeds
            matchingGhosts = ghostData.filter(g => {
                const behavior = g.behavior.toLowerCase();
                const behaviorPoints = g.behaviorPoints.map(bp => bp.toLowerCase());
                const special = g.speedDetails?.special?.toLowerCase() || '';
                
                return behavior.includes('3.0') || special.includes('3.0') ||
                       behaviorPoints.some(bp => bp.includes('3.0'));
            });
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `The fastest ghosts can reach 3.0 m/s: ${ghostNames}. Revenant (3.0 m/s when chasing), Deogen (3.0 m/s when far from target).`;
            }
        } else if (query.includes('fast') || query.includes('quick') || query.includes('2.5') || query.includes('2.7')) {
            // Find ghosts that can reach fast speeds
            matchingGhosts = ghostData.filter(g => {
                const behavior = g.behavior.toLowerCase();
                const behaviorPoints = g.behaviorPoints.map(bp => bp.toLowerCase());
                const special = g.speedDetails?.special?.toLowerCase() || '';
                
                return behavior.includes('2.5') || behavior.includes('2.7') || behavior.includes('2.75') || 
                       behavior.includes('3.0') || special.includes('2.5') || special.includes('2.7') || 
                       special.includes('2.75') || special.includes('3.0') ||
                       behaviorPoints.some(bp => bp.includes('2.5') || bp.includes('2.7') || bp.includes('2.75') || bp.includes('3.0'));
            });
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts can reach fast speeds: ${ghostNames}. Revenant (3.0 m/s), Hantu (2.7 m/s), Jinn (2.5 m/s), Raiju (2.5 m/s), Moroi (2.25 m/s), Thaye (2.75 m/s), Deogen (3.0 m/s).`;
            }
        } else if (query.includes('slow') || query.includes('1.0') || query.includes('1.5') || query.includes('1.4') || query.includes('0.4')) {
            // Find ghosts that can move slow
            matchingGhosts = ghostData.filter(g => {
                const behavior = g.behavior.toLowerCase();
                const behaviorPoints = g.behaviorPoints.map(bp => bp.toLowerCase());
                const special = g.speedDetails?.special?.toLowerCase() || '';
                
                return behavior.includes('1.0') || behavior.includes('1.5') || behavior.includes('1.4') || 
                       behavior.includes('0.4') || special.includes('1.0') || special.includes('1.5') || 
                       special.includes('1.4') || special.includes('0.4') ||
                       behaviorPoints.some(bp => bp.includes('1.0') || bp.includes('1.5') || bp.includes('1.4') || bp.includes('0.4'));
            });
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts can move slowly: ${ghostNames}. Revenant (1.0 m/s when not chasing), Hantu (1.4 m/s when warm), The Twins (1.5 m/s main), Moroi (1.5 m/s at high sanity), Deogen (0.4 m/s when close), Thaye (1.0 m/s when aged).`;
            }
        } else {
            // General speed question
            answer = `Ghost speeds vary: Normal ghosts move at 1.7 m/s. Variable speed ghosts include Revenant (1.0-3.0 m/s), Hantu (1.4-2.7 m/s), The Twins (1.5-1.9 m/s), Moroi (1.5-2.25 m/s), Deogen (0.4-3.0 m/s), and Thaye (1.0-2.75 m/s).`;
        }
    }
    
    // HUNT SANITY QUESTIONS
    else if (query.includes('hunt') && (query.includes('early') || query.includes('high sanity') || query.includes('higher') || query.includes('above'))) {
        matchingGhosts = ghostData.filter(g => g.huntSanity >= 60);
        if (matchingGhosts.length > 0) {
            const ghostNames = matchingGhosts.map(g => g.name).join(', ');
            answer = `These ghosts can hunt at higher sanity levels (60% or above): ${ghostNames}. Demon can hunt at any sanity level.`;
        }
    }
    else if (query.includes('hunt') && (query.includes('low') || query.includes('late') || query.includes('below'))) {
        matchingGhosts = ghostData.filter(g => g.huntSanity <= 40);
        if (matchingGhosts.length > 0) {
            const ghostNames = matchingGhosts.map(g => g.name).join(', ');
            answer = `These ghosts only hunt at lower sanity levels (40% or below): ${ghostNames}. Shade hunts at 35%, Revenant at 40%.`;
        }
    }
    else if (query.includes('hunt') && query.includes('any') && query.includes('sanity')) {
        matchingGhosts = ghostData.filter(g => g.huntSanity === 0 || g.behavior.toLowerCase().includes('any sanity'));
        if (matchingGhosts.length > 0) {
            const ghostNames = matchingGhosts.map(g => g.name).join(', ');
            answer = `These ghosts can hunt at any sanity level: ${ghostNames}. Demon and Moroi can hunt regardless of sanity.`;
        }
    }
    
    // DOOR QUESTIONS
    else if (query.includes('door') || (query.includes('close') && query.includes('fully'))) {
        if (query.includes('close') || query.includes('shut') || query.includes('fully')) {
            matchingGhosts = ghostData.filter(g => 
                (g.behavior.toLowerCase().includes('door') || g.behaviorPoints.some(bp => bp.toLowerCase().includes('door'))) && 
                (g.behavior.toLowerCase().includes('close') || g.behavior.toLowerCase().includes('shut') || g.behavior.toLowerCase().includes('fully'))
            );
            answer = `Yurei is the only ghost that can close exit doors outside of hunts.`;
        }
    }
    
    // LIGHT/BREAKER QUESTIONS
    else if (query.includes('light') || query.includes('breaker') || query.includes('turn') || query.includes('switch')) {
        if (query.includes('turn') && query.includes('off')) {
            // Ghosts that CAN turn off lights/breakers (exclude those that CANNOT)
            matchingGhosts = ghostData.filter(g => {
                const behavior = g.behavior.toLowerCase();
                const behaviorPoints = g.behaviorPoints.map(bp => bp.toLowerCase());
                
                // Check if ghost CAN turn off (not cannot)
                const canTurnOff = (behavior.includes('prefers turning off') || behaviorPoints.some(bp => bp.includes('prefers turning off'))) ||
                                  (behavior.includes('more likely to turn off') || behaviorPoints.some(bp => bp.includes('more likely to turn off'))) ||
                                  (behavior.includes('can immediately turn off') || behaviorPoints.some(bp => bp.includes('can immediately turn off')));
                
                // Exclude ghosts that CANNOT turn off
                const cannotTurnOff = (behavior.includes('cannot turn off') || behaviorPoints.some(bp => bp.includes('cannot turn off'))) ||
                                     (behavior.includes('cannot directly turn off') || behaviorPoints.some(bp => bp.includes('cannot directly turn off')));
                
                return canTurnOff && !cannotTurnOff;
            });
            
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts can turn off lights or breakers: ${ghostNames}. Mare prefers turning off lights and light switches. Hantu is more likely to turn off the breaker.`;
    } else {
                answer = `Most ghosts can turn off lights, but Mare prefers turning off lights and light switches, while Hantu is more likely to turn off the breaker.`;
            }
        }
        // Ghosts that CANNOT turn off lights/breakers
        else if (query.includes('cannot') || query.includes('not') || query.includes('unable')) {
            matchingGhosts = ghostData.filter(g => {
                const behavior = g.behavior.toLowerCase();
                const behaviorPoints = g.behaviorPoints.map(bp => bp.toLowerCase());
                
                return (behavior.includes('cannot turn off') || behaviorPoints.some(bp => bp.includes('cannot turn off'))) ||
                       (behavior.includes('cannot directly turn off') || behaviorPoints.some(bp => bp.includes('cannot directly turn off'))) ||
                       (behavior.includes('cannot turn on') || behaviorPoints.some(bp => bp.includes('cannot turn on')));
            });
            
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts have limitations with lights/breakers: ${ghostNames}. Jinn cannot directly turn off the breaker. Mare and Hantu cannot turn on lights/breakers.`;
            }
        }
        // General light questions
        else if (query.includes('light')) {
            matchingGhosts = ghostData.filter(g => 
                g.behavior.toLowerCase().includes('light') || g.behaviorPoints.some(bp => bp.toLowerCase().includes('light'))
            );
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts interact with lights: ${ghostNames}. Mare prefers turning off lights and cannot turn them on. Hantu is more likely to turn off the breaker.`;
            }
        }
    }
    
    // SMUDGE QUESTIONS
    else if (query.includes('smudge') || query.includes('incense')) {
        if (query.includes('180') || query.includes('spirit')) {
            matchingGhosts = ghostData.filter(g => 
                g.behavior.toLowerCase().includes('180') && 
                g.behavior.toLowerCase().includes('smudge')
            );
            answer = `Spirit waits 180 seconds after being smudged before hunting again.`;
        } else if (query.includes('60') || query.includes('demon')) {
            matchingGhosts = ghostData.filter(g => 
                g.behavior.toLowerCase().includes('60') && 
                g.behavior.toLowerCase().includes('smudge')
            );
            answer = `Demon can hunt only 60 seconds after being smudged.`;
        }
    }
    
    // EVIDENCE QUESTIONS
    else if (query.includes('evidence') || query.includes('emf') || query.includes('spirit box') || query.includes('fingerprints') || 
             query.includes('uv') || query.includes('writing') || query.includes('freezing') || query.includes('dots') || query.includes('orb')) {
        if (query.includes('emf') || query.includes('emf 5')) {
            matchingGhosts = ghostData.filter(g => g.evidence.includes('EMF 5'));
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts have EMF 5 evidence: ${ghostNames}.`;
            }
        } else if (query.includes('spirit box') || query.includes('spiritbox')) {
            matchingGhosts = ghostData.filter(g => g.evidence.includes('Spirit Box'));
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts have Spirit Box evidence: ${ghostNames}.`;
            }
        } else if (query.includes('fingerprints') || query.includes('uv') || query.includes('ultraviolet')) {
            matchingGhosts = ghostData.filter(g => g.evidence.includes('Ultraviolet'));
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts have Ultraviolet evidence: ${ghostNames}.`;
            }
        } else if (query.includes('writing') || query.includes('book') || query.includes('ghost writing')) {
            matchingGhosts = ghostData.filter(g => g.evidence.includes('Ghost Writing'));
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts have Ghost Writing evidence: ${ghostNames}.`;
            }
        } else if (query.includes('freezing') || query.includes('temp') || query.includes('temperature')) {
            matchingGhosts = ghostData.filter(g => g.evidence.includes('Freezing Temps'));
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts have Freezing Temps evidence: ${ghostNames}.`;
            }
        } else if (query.includes('dots') || query.includes('projector')) {
            matchingGhosts = ghostData.filter(g => g.evidence.includes('DOTS Projector'));
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts have DOTS Projector evidence: ${ghostNames}.`;
            }
        } else if (query.includes('orb') || query.includes('orbs')) {
            matchingGhosts = ghostData.filter(g => g.evidence.includes('Ghost Orbs'));
            if (matchingGhosts.length > 0) {
                const ghostNames = matchingGhosts.map(g => g.name).join(', ');
                answer = `These ghosts have Ghost Orbs evidence: ${ghostNames}.`;
            }
        } else if (query.includes('evidence')) {
            answer = `There are 7 types of evidence: EMF 5, Spirit Box, Ultraviolet (Fingerprints), Ghost Writing, Freezing Temps, DOTS Projector, and Ghost Orbs. Each ghost has 3 unique evidence types.`;
        }
    }
    
    // TELEPORT QUESTIONS
    else if (query.includes('teleport')) {
        matchingGhosts = ghostData.filter(g => 
            g.behavior.toLowerCase().includes('teleport')
        );
        if (matchingGhosts.length > 0) {
            const ghostNames = matchingGhosts.map(g => g.name).join(', ');
            answer = `These ghosts have teleportation abilities: ${ghostNames}. Wraith can teleport to random players.`;
        }
    }
    
    // GHOST NAME SEARCH (fallback)
    else {
        matchingGhosts = ghostData.filter(g => 
            g.name.toLowerCase().includes(query)
        );
        if (matchingGhosts.length > 0) {
            answer = `Found ${matchingGhosts.length} ghost${matchingGhosts.length > 1 ? 's' : ''} matching "${query}"`;
        }
    }
    
    return { ghosts: matchingGhosts, answer: answer };
}

// ========================================
// FILTER MANAGEMENT
// ========================================
function toggleFilter(element, type) {
    const currentState = element.dataset.state;
    let newState;
    
    // Tri-state: none -> include -> exclude -> none
    switch(currentState) {
        case 'none':
            newState = 'include';
            break;
        case 'include':
            newState = 'exclude';
            break;
        case 'exclude':
        newState = 'none';
            break;
    }
    
    element.dataset.state = newState;
    
    // Update filter state
    const key = element.dataset[type];
    filters[type][key] = newState;
    
    applyFilters();
}

function toggleSanityFilter(element) {
    const currentState = element.dataset.state;
    const sanityKey = element.dataset.sanity;
    
    // If already selected, deselect it
    if (currentState === 'include') {
        element.dataset.state = 'none';
        filters.sanity[sanityKey] = 'none';
    } else {
        // Deselect all other sanity filters
        document.querySelectorAll('#sanityFilters .filter-chip').forEach(chip => {
            chip.dataset.state = 'none';
            const key = chip.dataset.sanity;
            filters.sanity[key] = 'none';
        });
        
        // Select this one
        element.dataset.state = 'include';
        filters.sanity[sanityKey] = 'include';
    }
    
    applyFilters();
}

function clearAllFilters() {
    // Reset search
    document.getElementById('ghostSearch').value = '';
    filters.search = '';
    
    // Reset evidence
    document.querySelectorAll('#evidenceFilters .filter-item').forEach(item => {
        item.dataset.state = 'none';
        filters.evidence[item.dataset.evidence] = 'none';
    });
    
    // Reset speed (includes LOS)
    document.querySelectorAll('#speedFilters .filter-chip').forEach(chip => {
        chip.dataset.state = 'none';
        filters.speed[chip.dataset.speed] = 'none';
    });
    
    // Reset sanity
    document.querySelectorAll('#sanityFilters .filter-chip').forEach(chip => {
        chip.dataset.state = 'none';
        filters.sanity[chip.dataset.sanity] = 'none';
    });
    
    applyFilters();
}

function applyFilters() {
    let filtered = [...ghostData];
    
    // Apply search filter
    if (filters.search) {
        filtered = filtered.filter(ghost => 
            ghost.name.toLowerCase().includes(filters.search)
        );
    }
    
    // Apply evidence filter
    const includedEvidence = Object.keys(filters.evidence).filter(k => filters.evidence[k] === 'include');
    const excludedEvidence = Object.keys(filters.evidence).filter(k => filters.evidence[k] === 'exclude');
    
    if (includedEvidence.length > 0 || excludedEvidence.length > 0) {
        filtered = filtered.filter(ghost => {
            // Must have all included evidence
            const hasAllIncluded = includedEvidence.every(ev => ghost.evidence.includes(ev));
            
            // Must not have any excluded evidence
            const hasNoExcluded = !excludedEvidence.some(ev => ghost.evidence.includes(ev));
            
            return hasAllIncluded && hasNoExcluded;
        });
    }
    
    // Apply speed filter
    const includedSpeeds = Object.keys(filters.speed).filter(k => filters.speed[k] === 'include');
    const excludedSpeeds = Object.keys(filters.speed).filter(k => filters.speed[k] === 'exclude');
    
    if (includedSpeeds.length > 0 || excludedSpeeds.length > 0) {
        filtered = filtered.filter(ghost => {
            // The Mimic always passes speed filters (can be any speed)
            if (ghost.name === 'The Mimic') {
                return true;
            }
            
            const categories = getSpeedCategories(ghost);
            
            // Must match at least one included category
            const matchesIncluded = includedSpeeds.length === 0 || 
                includedSpeeds.some(cat => categories.includes(cat));
            
            // Must not match any excluded category
            const matchesExcluded = excludedSpeeds.some(cat => categories.includes(cat));
            
            return matchesIncluded && !matchesExcluded;
        });
    }
    
    // Apply sanity filter
    const includedSanities = Object.keys(filters.sanity).filter(k => filters.sanity[k] === 'include');
    const excludedSanities = Object.keys(filters.sanity).filter(k => filters.sanity[k] === 'exclude');
    
    if (includedSanities.length > 0 || excludedSanities.length > 0) {
        filtered = filtered.filter(ghost => {
            const category = getSanityCategory(ghost.huntSanity);
            
            // Must match included category
            const matchesIncluded = includedSanities.length === 0 || 
                includedSanities.includes(category);
            
            // Must not match excluded category
            const matchesExcluded = excludedSanities.includes(category);
            
            return matchesIncluded && !matchesExcluded;
        });
    }
    
    renderGhostList(filtered);
}

function getSpeedCategories(ghost) {
    const categories = [];
    
    // The Mimic is special - it can be ANY speed category
    if (ghost.name === 'The Mimic') {
        return ['slow', 'normal', 'fast', 'los', 'no-los'];
    }
    
    // Check base speed
    if (ghost.speed < 1.7) {
        categories.push('slow');
    } else if (ghost.speed === 1.7) {
        categories.push('normal');
        } else {
        categories.push('fast');
    }
    
    // Check both normal and special speed fields for additional speeds
    if (ghost.speedDetails) {
        const normalSpeed = ghost.speedDetails.normal || '';
        const specialSpeed = ghost.speedDetails.special || '';
        const allSpeeds = normalSpeed + ' ' + specialSpeed;
        
        // Check for slow speeds (in both normal and special)
        if (allSpeeds.includes('1.0') || allSpeeds.includes('1.44') || allSpeeds.includes('1.5') || allSpeeds.includes('0.4')) {
            if (!categories.includes('slow')) categories.push('slow');
        }
        
        // Check for normal speeds
        if (allSpeeds.includes('1.7')) {
            if (!categories.includes('normal')) categories.push('normal');
        }
        
        // Check for fast speeds
        if (allSpeeds.includes('1.9') || allSpeeds.includes('2.25') || allSpeeds.includes('2.5') || 
            allSpeeds.includes('2.7') || allSpeeds.includes('2.75') || allSpeeds.includes('3.0') || 
            allSpeeds.includes('3.71')) {
            if (!categories.includes('fast')) categories.push('fast');
        }
        
        // Check for Standard LoS acceleration
        if (allSpeeds.includes('Standard LoS acceleration') || allSpeeds.includes('standard LoS')) {
            categories.push('los');
        }
        
        // Check for NO LoS acceleration
        if (allSpeeds.includes('NO LoS acceleration')) {
            categories.push('no-los');
        }
    }
    
    return categories;
}

function getSanityCategory(huntSanity) {
    if (huntSanity <= 39) return 'late';
    if (huntSanity >= 40 && huntSanity <= 49) return 'normal';
    if (huntSanity >= 50 && huntSanity <= 69) return 'early';
    return 'very-early'; // >= 70
}

// ========================================
// GHOST LIST RENDERING
// ========================================
function renderGhostList(ghosts) {
    const listElement = document.getElementById('ghostList');
    const countElement = document.getElementById('ghostCount');
    
    countElement.textContent = `${ghosts.length} ghost${ghosts.length !== 1 ? 's' : ''}`;
    
    listElement.innerHTML = ghosts.map(ghost => {
        const speedButtons = getSpeedButtonsForGhost(ghost);
        
        return `
            <div class="ghost-item ${selectedGhost?.name === ghost.name ? 'active' : ''}" 
                 data-ghost="${ghost.name}">
                <div class="ghost-item-name" onclick="selectGhost('${ghost.name}')">${ghost.name}</div>
                <div class="ghost-item-info" onclick="selectGhost('${ghost.name}')">Hunt: ${ghost.huntSanity}%</div>
                <div class="ghost-item-speeds">
                    ${speedButtons}
                </div>
            </div>
        `;
    }).join('');
}

function getSpeedButtonsForGhost(ghost) {
    const buttons = [];
    const categories = getSpeedCategories(ghost);
    
    // The Mimic has no speed buttons (mimics other ghosts)
    if (ghost.name === 'The Mimic') {
        return '';
    }
    
    // Check which speed categories this ghost has
    // Helper function to get speed value
    const getSpeedValue = (speedType) => {
        if (speedType === 'slow') {
            if (ghost.name === 'Revenant') return '1.0';
            if (ghost.name === 'Hantu') return '1.4';
            if (ghost.name === 'The Twins') return '1.5';
            if (ghost.name === 'Moroi') return '1.5';
            if (ghost.name === 'Deogen') return '0.4';
            if (ghost.name === 'Thaye') return '1.0';
            return '1.7';
        } else if (speedType === 'fast') {
            if (ghost.name === 'Jinn') return '2.5';
            if (ghost.name === 'Revenant') return '3.0';
            if (ghost.name === 'Hantu') return '2.7';
            if (ghost.name === 'The Twins') return '1.9';
            if (ghost.name === 'Raiju') return '2.5';
            if (ghost.name === 'Moroi') return '2.25';
            if (ghost.name === 'Deogen') return '3.0';
            if (ghost.name === 'Thaye') return '2.75';
            return '1.7';
        } else {
            return '1.7';
        }
    };
    
    if (categories.includes('slow')) {
        const speed = getSpeedValue('slow');
        buttons.push(`
            <button class="speed-play-btn speed-slow" onclick="toggleSpeedSound(this, '${ghost.name}', 'slow'); event.stopPropagation();">
                <span class="play-icon">▶</span> ${speed} m/s
            </button>
        `);
    }
    
    if (categories.includes('normal')) {
        buttons.push(`
            <button class="speed-play-btn speed-normal" onclick="toggleSpeedSound(this, '${ghost.name}', 'normal'); event.stopPropagation();">
                <span class="play-icon">▶</span> 1.7 m/s
            </button>
        `);
    }
    
    if (categories.includes('fast')) {
        const speed = getSpeedValue('fast');
        buttons.push(`
            <button class="speed-play-btn speed-fast" onclick="toggleSpeedSound(this, '${ghost.name}', 'fast'); event.stopPropagation();">
                <span class="play-icon">▶</span> ${speed} m/s
            </button>
        `);
    }
    
    // If only one speed, just show the speed value
    if (buttons.length === 1 && !categories.includes('slow') && !categories.includes('fast')) {
        return `
            <button class="speed-play-btn speed-normal" onclick="toggleSpeedSound(this, '${ghost.name}', 'normal'); event.stopPropagation();">
                <span class="play-icon">▶</span> 1.7 m/s
            </button>
        `;
    }
    
    return buttons.join('');
}

// Speed sound system
let speedSoundInterval = null;
let speedAudio = null;
let currentPlayingButton = null;
let speedSoundTimeout = null;
let isSpeedSoundPlaying = false;

function toggleSpeedSound(button, ghostName, speedType) {
    // If this button is already playing, stop it
    if (currentPlayingButton === button && isSpeedSoundPlaying) {
        stopSpeedSound();
        button.querySelector('.play-icon').textContent = '▶';
        button.classList.remove('playing');
        currentPlayingButton = null;
        isSpeedSoundPlaying = false;
        
        // Re-enable all speed buttons
        const allSpeedButtons = document.querySelectorAll('.speed-play-btn');
        allSpeedButtons.forEach(btn => {
            btn.disabled = false;
        });
        return;
    }
    
    // If another sound is playing, ignore the click
    if (isSpeedSoundPlaying) {
        return;
    }
    
    // Disable all speed buttons
    const allSpeedButtons = document.querySelectorAll('.speed-play-btn');
    allSpeedButtons.forEach(btn => {
        if (btn !== button) {
            btn.disabled = true;
        }
    });
    
    // Start playing this sound
    playSpeedSound(ghostName, speedType);
    button.querySelector('.play-icon').textContent = '⏸';
    button.classList.add('playing');
    currentPlayingButton = button;
    isSpeedSoundPlaying = true;
    
    // Determine duration based on speed (Deogen slow needs more time)
    const duration = (ghostName === 'Deogen' && speedType === 'slow') ? 6000 : 4000;
    
    // Stop after duration
    speedSoundTimeout = setTimeout(() => {
        stopSpeedSound();
        button.querySelector('.play-icon').textContent = '▶';
        button.classList.remove('playing');
        currentPlayingButton = null;
        isSpeedSoundPlaying = false;
        
        // Re-enable all speed buttons
        allSpeedButtons.forEach(btn => {
            btn.disabled = false;
        });
    }, duration);
}

function playSpeedSound(ghostName, speedType) {
    // Stop any currently playing speed sound
    stopSpeedSound();
    
    // Create audio element
    speedAudio = new Audio('step.m4a');
    
    // Get the ghost data
        const ghost = ghostData.find(g => g.name === ghostName);
    if (!ghost) return;
    
    // Determine the speed in m/s based on speedType
    let speedMs;
    
    if (speedType === 'slow') {
        // Find the slowest speed for this ghost
        if (ghost.name === 'Revenant') speedMs = 1.0;
        else if (ghost.name === 'Hantu') speedMs = 1.4;
        else if (ghost.name === 'The Twins') speedMs = 1.5;
        else if (ghost.name === 'Moroi') speedMs = 1.5;
        else if (ghost.name === 'Deogen') speedMs = 0.4;
        else if (ghost.name === 'Thaye') speedMs = 1.0;
        else speedMs = 1.7; // default
    } else if (speedType === 'fast') {
        // Find the fastest speed for this ghost
        if (ghost.name === 'Jinn') speedMs = 2.5;
        else if (ghost.name === 'Revenant') speedMs = 3.0;
        else if (ghost.name === 'Hantu') speedMs = 2.7;
        else if (ghost.name === 'The Twins') speedMs = 1.9;
        else if (ghost.name === 'Raiju') speedMs = 2.5;
        else if (ghost.name === 'Moroi') speedMs = 2.25;
        else if (ghost.name === 'Deogen') speedMs = 3.0;
        else if (ghost.name === 'Thaye') speedMs = 2.75;
        else speedMs = 1.7; // default
        } else {
        // Normal speed
        speedMs = 1.7;
    }
    
    // Calculate footstep interval based on speed
    // The speed value IS the interval in seconds (e.g., 1.0 m/s = 1 footstep per second)
    // So we just use the speed value directly as the interval
    const interval = (1 / speedMs) * 1000; // convert to milliseconds
    // Example: 1.0 m/s = 1000ms interval, 1.7 m/s = 588ms interval, 3.0 m/s = 333ms interval
    
    console.log(`Playing ${ghostName} at ${speedType} speed: ${speedMs} m/s (interval: ${interval.toFixed(0)}ms)`);
    
    // Play first step immediately
    speedAudio.play().catch(err => console.log('Audio play failed:', err));
    
    // Loop the footsteps
    speedSoundInterval = setInterval(() => {
        const audio = new Audio('step.m4a');
        audio.play().catch(err => console.log('Audio play failed:', err));
    }, interval);
}

function stopSpeedSound() {
    if (speedSoundInterval) {
        clearInterval(speedSoundInterval);
        speedSoundInterval = null;
    }
    if (speedSoundTimeout) {
        clearTimeout(speedSoundTimeout);
        speedSoundTimeout = null;
    }
    if (speedAudio) {
        speedAudio.pause();
        speedAudio = null;
    }
}

function playUniqueSound(ghostName, soundType) {
    // Placeholder for unique sound functionality
    console.log(`Playing ${soundType} sound for ${ghostName}`);
    alert(`Unique Sound Playback\n\nGhost: ${ghostName}\nSound: ${soundType}\n\n(Audio files coming soon!)`);
}

// Helper function to get all speeds for a ghost
function getSpeedStatsHTML(ghost) {
    const speeds = [];
    const categories = getSpeedCategories(ghost);
    
    // Helper to get actual speed value
    const getSpeedValue = (speedType) => {
        if (speedType === 'slow') {
            if (ghost.name === 'Revenant') return '1.0';
            if (ghost.name === 'Hantu') return '1.4';
            if (ghost.name === 'The Twins') return '1.5';
            if (ghost.name === 'Moroi') return '1.5';
            if (ghost.name === 'Deogen') return '0.4';
            if (ghost.name === 'Thaye') return '1.0';
            return '1.7';
        } else if (speedType === 'fast') {
            if (ghost.name === 'Jinn') return '2.5';
            if (ghost.name === 'Revenant') return '3.0';
            if (ghost.name === 'Hantu') return '2.7';
            if (ghost.name === 'The Twins') return '1.9';
            if (ghost.name === 'Raiju') return '2.5';
            if (ghost.name === 'Moroi') return '2.25';
            if (ghost.name === 'Deogen') return '3.0';
            if (ghost.name === 'Thaye') return '2.75';
            return '1.7';
        } else {
            return '1.7';
        }
    };
    
    // Check for slow speed
    if (categories.includes('slow')) {
        const speed = getSpeedValue('slow');
        speeds.push({
            value: speed,
            label: 'Slow',
            icon: '🐌'
        });
    }
    
    // Check for normal speed
    if (categories.includes('normal')) {
        speeds.push({
            value: '1.7',
            label: 'Normal',
            icon: '👣'
        });
    }
    
    // Check for fast speed
    if (categories.includes('fast')) {
        const speed = getSpeedValue('fast');
        speeds.push({
            value: speed,
            label: 'Fast',
            icon: '⚡'
        });
    }
    
    // The Mimic shows all speeds
    if (ghost.name === 'The Mimic') {
        return `
            <div class="quick-stat">
                <span class="quick-stat-icon">🎭</span>
                <span class="quick-stat-value">Variable</span>
                <span class="quick-stat-label">Mimics All</span>
            </div>
        `;
    }
    
    // Build HTML for each speed
    return speeds.map((speed, index) => `
        ${index > 0 ? '<div class="quick-stat-divider"></div>' : ''}
        <div class="quick-stat">
            <span class="quick-stat-icon">${speed.icon}</span>
            <span class="quick-stat-value">${speed.value} m/s</span>
            <span class="quick-stat-label">${speed.label}</span>
        </div>
    `).join('');
}

// ========================================
// GHOST DETAILS
// ========================================
function selectGhost(ghostName) {
    selectedGhost = ghostData.find(g => g.name === ghostName);
    renderGhostDetails();
    
    // Update active state in list
    document.querySelectorAll('.ghost-item').forEach(item => {
        item.classList.toggle('active', item.dataset.ghost === ghostName);
    });
}

function renderGhostDetails() {
    const detailsElement = document.getElementById('ghostDetails');
    
    if (!selectedGhost) {
        detailsElement.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">👻</div>
                <h3>Select a ghost</h3>
                <p>Click on any ghost from the index to view details</p>
            </div>
        `;
            return;
        }
        
    detailsElement.innerHTML = `
        <div class="ghost-detail">
            <div class="ghost-detail-header">
                <h2 class="ghost-detail-name">${selectedGhost.name}</h2>
            </div>
            
            <div class="ghost-quick-stats">
                <div class="quick-stat">
                    <span class="quick-stat-icon">🎯</span>
                    <span class="quick-stat-value">${selectedGhost.huntSanity}%</span>
                    <span class="quick-stat-label">Hunt</span>
                </div>
                <div class="quick-stat-divider"></div>
                ${getSpeedStatsHTML(selectedGhost)}
                <div class="quick-stat-divider"></div>
                <div class="quick-stat speed-detail-stat" title="${selectedGhost.speedDetails.special}">
                    <span class="quick-stat-icon">⚡</span>
                    <span class="quick-stat-value">${selectedGhost.speedDetails.special.includes('Standard LoS') ? 'LoS' : selectedGhost.speedDetails.special.includes('NO LoS') ? 'No LoS' : 'Variable'}</span>
                    <span class="quick-stat-label">Speed Type</span>
                </div>
            </div>
            
            <div class="evidence-section">
                <h3 class="section-title">Evidence</h3>
                <div class="evidence-grid">
                    ${selectedGhost.evidence.map(ev => {
                        const icons = {
                            'EMF 5': '⚡',
                            'Spirit Box': '📻',
                            'Ghost Writing': '✍️',
                            'Ultraviolet': '🔦',
                            'DOTS Projector': '🌫️',
                            'Ghost Orbs': '🔮',
                            'Freezing Temps': '❄️'
                        };
                        return `
                            <div class="evidence-badge">
                                <span class="evidence-icon">${icons[ev] || '❓'}</span>
                                <span>${ev}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <div class="behavior-section">
                <h3 class="section-title">Behavior</h3>
                ${selectedGhost.behaviorPoints ? `
                    <ul class="behavior-list">
                        ${selectedGhost.behaviorPoints.map(point => `<li class="behavior-point">${point}</li>`).join('')}
                    </ul>
                ` : `
                    <div class="behavior-text">${selectedGhost.behavior}</div>
                `}
                ${selectedGhost.uniqueSounds ? `
                    <div class="unique-sounds">
                        <h4 class="sounds-label">Example Screams:</h4>
                        <div class="sound-buttons-row">
                            ${selectedGhost.uniqueSounds.map(sound => `
                                <button class="sound-play-btn" onclick="playUniqueSound('${selectedGhost.name}', '${sound.type}'); event.stopPropagation();">
                                    <span class="play-icon">▶</span> ${sound.label}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
            
            ${selectedGhost.confirmationTest ? `
            <div class="test-section confirmation-test">
                <h3 class="section-title">Confirmation Test</h3>
                <div class="test-content">
                    ${selectedGhost.confirmationPoints ? `
                        <ul class="test-list">
                            ${selectedGhost.confirmationPoints.map(point => `<li class="test-point">${point}</li>`).join('')}
                        </ul>
                    ` : `
                        <div class="test-text">${selectedGhost.confirmationTest}</div>
                    `}
                </div>
            </div>
            ` : ''}
            
            ${selectedGhost.eliminationTest ? `
            <div class="test-section elimination-test">
                <h3 class="section-title">Elimination Test</h3>
                <div class="test-content">
                    ${selectedGhost.eliminationPoints ? `
                        <ul class="test-list">
                            ${selectedGhost.eliminationPoints.map(point => `<li class="test-point">${point}</li>`).join('')}
                        </ul>
                    ` : `
                        <div class="test-text">${selectedGhost.eliminationTest}</div>
                    `}
                </div>
            </div>
            ` : ''}
        </div>
    `;
}


// ========================================
// TIMER FUNCTIONALITY
// ========================================
function toggleTimer() {
    const floatingTimer = document.getElementById('floatingTimer');
    
    if (floatingTimer.classList.contains('hidden')) {
        floatingTimer.classList.remove('hidden');
            } else {
        floatingTimer.classList.add('hidden');
        if (isTimerRunning) {
            floatingPauseTimer();
        }
    }
}

function closeFloatingTimer() {
    const floatingTimer = document.getElementById('floatingTimer');
    const minimizedTimer = document.getElementById('minimizedTimer');
    
    floatingTimer.classList.add('hidden');
    
    // Show minimized timer if timer is running
    if (isTimerRunning) {
        minimizedTimer.classList.remove('hidden');
    }
}

function maximizeTimer() {
    const floatingTimer = document.getElementById('floatingTimer');
    const minimizedTimer = document.getElementById('minimizedTimer');
    
    minimizedTimer.classList.add('hidden');
    floatingTimer.classList.remove('hidden');
}

function floatingStartTimer() {
    if (timeRemaining <= 0) {
        floatingResetTimer();
    }
    
    isTimerRunning = true;
    
    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateFloatingTimerDisplay();
            updateFloatingMilestones();
        } else {
            floatingPauseTimer();
        }
    }, 1000);
    
    updateFloatingButtons();
}

function floatingPauseTimer() {
    isTimerRunning = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    updateFloatingButtons();
    
    // Hide minimized timer when paused
    const minimizedTimer = document.getElementById('minimizedTimer');
    minimizedTimer.classList.add('hidden');
}

function floatingResetTimer() {
    floatingPauseTimer();
    timeRemaining = 180;
    updateFloatingTimerDisplay();
    resetFloatingMilestones();
    updateFloatingButtons();
}

function updateFloatingButtons() {
    const startBtn = document.getElementById('floatingStartBtn');
    const pauseBtn = document.getElementById('floatingPauseBtn');
    
    if (isTimerRunning) {
        startBtn.disabled = true;
        pauseBtn.disabled = false;
    } else {
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }
}

function updateFloatingTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById('floatingTimerDisplay').textContent = timeString;
    document.getElementById('minimizedTimeDisplay').textContent = timeString;
    document.getElementById('timerDisplay').textContent = timeString;
    
    // Update next milestone text
    const elapsedTime = 180 - timeRemaining;
    const floatingNextMilestone = document.getElementById('floatingNextMilestone');
    
    if (elapsedTime >= 180) {
        floatingNextMilestone.textContent = 'ALL GHOSTS CAN HUNT!';
    } else if (elapsedTime >= 90) {
        const timeToSpirit = 180 - elapsedTime;
        floatingNextMilestone.textContent = `Spirit in ${timeToSpirit}s`;
    } else if (elapsedTime >= 60) {
        const timeToAll = 90 - elapsedTime;
        floatingNextMilestone.textContent = `All except Spirit in ${timeToAll}s`;
    } else {
        const timeToDemon = 60 - elapsedTime;
        floatingNextMilestone.textContent = `Demon in ${timeToDemon}s`;
    }
}

function updateFloatingMilestones() {
    const elapsedTime = 180 - timeRemaining;
    const floatingMilestones = document.querySelectorAll('.floating-milestone');
    const miniMilestones = document.querySelectorAll('.mini-milestone');
    
    floatingMilestones.forEach(milestone => {
        const time = parseInt(milestone.dataset.time);
        if (elapsedTime >= time) {
            milestone.classList.add('reached');
        }
    });
    
    miniMilestones.forEach(milestone => {
        const time = parseInt(milestone.dataset.time);
        if (elapsedTime >= time) {
            milestone.classList.add('reached');
        }
    });
}

function resetFloatingMilestones() {
    const floatingMilestones = document.querySelectorAll('.floating-milestone');
    const miniMilestones = document.querySelectorAll('.mini-milestone');
    
    floatingMilestones.forEach(milestone => {
        milestone.classList.remove('reached');
    });
    
    miniMilestones.forEach(milestone => {
        milestone.classList.remove('reached');
    });
    
    document.getElementById('floatingNextMilestone').textContent = 'Press START or SPACE';
}

function startTimer() {
    if (timeRemaining <= 0) {
        resetTimer();
        return;
    }
    
    isTimerRunning = true;
    document.getElementById('timerStart').textContent = 'Stop';
    document.getElementById('timerStart').classList.add('active');
    document.getElementById('timerStatus').textContent = 'Timer running...';
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        updateTimerState();
        
        if (timeRemaining <= 0) {
            stopTimer();
            document.getElementById('timerStatus').textContent = 'Timer finished!';
        }
    }, 1000);
}

function stopTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('timerStart').textContent = 'Start';
    document.getElementById('timerStart').classList.remove('active');
    
    if (timeRemaining > 0) {
        document.getElementById('timerStatus').textContent = 'Timer paused';
    }
}

function resetTimer() {
    stopTimer();
    timeRemaining = 180;
    document.getElementById('timerStatus').textContent = 'Ready to start';
    updateTimerDisplay();
    updateTimerState();
    resetMilestones();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Update both old timer and floating timer
    document.getElementById('timerDisplay').textContent = timeString;
    document.getElementById('floatingTimerDisplay').textContent = timeString;
}

function updateTimerState() {
    const elapsedTime = 180 - timeRemaining;
    const timerDisplay = document.querySelector('.timer-display');
    
    timerDisplay.classList.remove('timer-safe', 'timer-warning', 'timer-danger');
    
    if (elapsedTime < 60) {
        timerDisplay.classList.add('timer-safe');
    } else if (elapsedTime < 90) {
        timerDisplay.classList.add('timer-warning');
    } else {
        timerDisplay.classList.add('timer-danger');
    }
    
    updateMilestones(elapsedTime);
    updateNextMilestone(elapsedTime);
}

function updateMilestones(elapsedTime) {
    const milestone60 = document.getElementById('milestone60');
    const milestone90 = document.getElementById('milestone90');
    const milestone180 = document.getElementById('milestone180');
    
    milestone60.classList.remove('reached', 'active');
    milestone90.classList.remove('reached', 'active');
    milestone180.classList.remove('reached', 'active');
    
    if (elapsedTime >= 180) {
        milestone60.classList.add('reached');
        milestone90.classList.add('reached');
        milestone180.classList.add('reached');
    } else if (elapsedTime >= 90) {
        milestone60.classList.add('reached');
        milestone90.classList.add('reached');
        milestone180.classList.add('active');
    } else if (elapsedTime >= 60) {
        milestone60.classList.add('reached');
        milestone90.classList.add('active');
    } else {
        milestone60.classList.add('active');
    }
}

function updateNextMilestone(elapsedTime) {
    const nextMilestone = document.getElementById('nextMilestone');
    const floatingNextMilestone = document.getElementById('floatingNextMilestone');
    let text = '';
    
    if (elapsedTime >= 180) {
        text = 'ALL GHOSTS CAN HUNT!';
        nextMilestone.style.color = 'var(--accent-danger)';
    } else if (elapsedTime >= 90) {
        const timeToSpirit = 180 - elapsedTime;
        text = `Spirit in ${timeToSpirit}s`;
        nextMilestone.style.color = 'var(--accent-danger)';
    } else if (elapsedTime >= 60) {
        const timeToAll = 90 - elapsedTime;
        text = `All except Spirit in ${timeToAll}s`;
        nextMilestone.style.color = 'var(--accent-warning)';
    } else {
        const timeToDemon = 60 - elapsedTime;
        text = `Demon in ${timeToDemon}s`;
        nextMilestone.style.color = 'var(--accent-success)';
    }
    
    nextMilestone.textContent = text;
    floatingNextMilestone.textContent = text;
}

function resetMilestones() {
    document.getElementById('milestone60').classList.remove('reached', 'active');
    document.getElementById('milestone90').classList.remove('reached', 'active');
    document.getElementById('milestone180').classList.remove('reached', 'active');
    
    const nextMilestone = document.getElementById('nextMilestone');
    const floatingNextMilestone = document.getElementById('floatingNextMilestone');
    
    nextMilestone.textContent = 'Demon in 60s';
    nextMilestone.style.color = 'var(--accent-success)';
    
    floatingNextMilestone.textContent = 'Demon in 60s';
}
