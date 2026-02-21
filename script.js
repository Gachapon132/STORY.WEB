// --- THE MASTER STORY LIBRARY (50 UNIQUE STORIES) ---
const stories = [
    {
        title: "The Golden Woods",
        image: "https://thumbs.dreamstime.com/b/warm-autumn-glow-illuminates-peaceful-forest-path-golden-woods-340257542.jpg",
        content: "In a forest where the leaves are made of beaten gold, a young traveler discovers that the trees hum melodies of the past. To leave the woods, one must contribute a song of their own.\n\nThe golden leaves don't just shine; they vibrate with the history of everyone who has ever walked beneath them. If you listen closely, you can hear the laughter of children from centuries ago.\n\nTo find your way out, you must stand in the center of the clearing and sing your truest memory. Only then will the trees part to show you the path home."
    },
    {
        title: "The Midnight Fox",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
        content: "Under a sapphire moon, a fox with fur like stardust guides lost souls across the Whispering River. It never speaks, but its eyes tell a thousand tales of forgotten kingdoms.\n\nLegend says the fox was once a prince who traded his voice for the ability to see through the fog of time. He now wanders the riverbank, waiting for those who have lost their way.\n\nIf you follow him, do not speak. The river feeds on words, and only silence can guarantee a safe crossing to the other side."
    },
    {
        title: "The Clockmaker's Secret",
        image: "https://miro.medium.com/v2/resize:fit:1170/1*gI0Y7RhJXC9ltezjLkUwvQ@2x.jpeg",
        content: "Master Elias didn't just fix clocks; he fixed time. When a townsperson lost a precious hour to sadness, Elias would reach into his gears and give them a spare minute of joy.\n\nHis shop was filled with the rhythmic ticking of a thousand hearts. He claimed that time was like water—it could be frozen, boiled, or poured into a different container.\n\nOne day, a girl asked him to stop time entirely. Elias smiled sadly and told her that a song only has beauty because it eventually ends."
    },
    {
        title: "The Sky Fisherman",
        image: "https://cdna.artstation.com/p/assets/images/images/000/050/794/large/Sky_Fishermen_Concept.jpg?1398986102",
        content: "Kaelen sat on the edge of the highest cliff, casting a line into the clouds. He wasn't looking for fish, but for fallen stars that got stuck in the mist.\n\nEach star he caught felt like a warm stone in his palm. He placed them in glass jars to sell to the villagers who lived in the shadow of the mountain.\n\nWithout his work, the valley would be plunged into eternal darkness. He is the unsung hero of the night sky."
    },
    {
        title: "The Librarian of Leaves",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
        content: "In the Great Autumn Library, books aren't made of paper, but of fallen maple leaves. Each vein on the leaf represents a line of poetry written by the wind.\n\nThe Librarian, an owl with silver spectacles, organizes the leaves by scent. The scent of rain marks tragedy, while the scent of pine marks adventure.\n\nReaders must be careful not to sneeze, for a single gust could send a whole epic novel flying into the forest."
    },
    {
        title: "The Crystal Cave",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
        content: "Deep underground, there is a cave where the walls grow crystals that play music when touched. Each color represents a different instrument: blue for flutes, red for drums.\n\nExplorers who enter the cave often find themselves dancing to a rhythm they didn't know they had. The music is ancient, composed by the shifting of the earth itself.\n\nIf you take a crystal home, it goes silent. The music only lives where the earth can breathe."
    },
    {
        title: "The Cloud Baker",
        image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
        content: "Every morning, Mira climbs the ladder to the sky to knead the clouds into shapes. Some become fluffy sheep, while others become giant castles.\n\nShe uses lightning to bake them and rainbows to frost the edges. When a storm happens, it's usually because Mira burned a batch of thunder-bread.\n\nChildren look up and point at her work, never knowing that their snacks for the soul were made by a girl in a white apron."
    },
    {
        title: "The Iron Giant's Garden",
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800",
        content: "A rusted giant sits in a valley, unmoving for centuries. Over time, wild roses have grown over his limbs, and birds nest in his hollow chest.\n\nHe was built for war, but he chose to become a trellis for flowers. His silence is his greatest strength, protecting the tiny ecosystem that has claimed him.\n\nVillagers say that on the first day of spring, you can hear a metallic heart beating once, very slowly."
    },
    {
        title: "The Ghost Train",
        image: "https://tse3.mm.bing.net/th/id/OIP.IvRJn8pcMc4-jis7V6rO-wHaDj?pid=Api&P=0&h=180",
        content: "A train that runs on tracks made of moonlight appears only on the longest night of the year. It has no conductor, yet it always arrives on time.\n\nIts passengers are memories that people have forgotten. They sit in velvet seats, staring out at a world that no longer remembers their names.\n\nIf you board the train, you can visit any moment from your childhood, but you must leave before the sun rises."
    },
    {
        title: "The Well of Wishes",
        image: "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800",
        content: "The well in the center of the village doesn't hold water; it holds whispers. When you throw a coin in, you aren't paying for a wish—you're buying a secret.\n\nThe deeper the coin falls, the older the secret. Some have heard the recipe for eternal youth, while others heard the location of buried gold.\n\nBut beware: once you hear a secret from the well, you can never tell another soul, or you will lose your own voice."
    },
    {
        title: "The Silver Willow",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
        content: "In the center of the Forbidden Garden stands a willow tree with silver leaves. It is said that if you sleep under its branches, you will dream the future of your greatest enemy.\n\nThe leaves chime like bells when the wind blows, keeping the restless spirits of the garden at bay. Many have tried to chop it down, but their axes simply turn to water.\n\nTo the wise, the tree is a teacher. To the foolish, it is a mirror reflecting their own fears back at them."
    },
    {
        title: "Flight of the Phoenix",
        image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800",
        content: "Born from the embers of a dying star, the Phoenix flies once every century. Its feathers are made of liquid flame, and its song can heal any wound.\n\nAs it passes over the mountains, the snow melts into boiling rivers. It carries the weight of the sun's promise to return after the long winter.\n\nWhen its time comes, it builds a nest of cinnamon and spice, bursting into a brilliant fire that lights up the entire world for a single second."
    },
    {
        title: "The Library of Clouds",
        image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
        content: "A place where the books are written in the shapes of clouds. To read them, you must lie on your back and look up, letting your imagination fill in the gaps.\n\nThe words shift as the wind blows, meaning a story might be a comedy at noon and a tragedy by sunset. It is the most honest library in existence.\n\nScholars come from all over to study the 'Rainy Day' section, which is filled with the most moving poetry ever composed."
    },
    {
        title: "The Lantern Fish",
        image: "https://images.unsplash.com/photo-1520263115673-610416f52ab6?w=800",
        content: "Deep in the Midnight Trench, a fish carries a lantern made of a trapped lightning bolt. It uses the light to find treasure buried in the sand.\n\nOther fish follow it like a parade, hoping to catch a glimpse of the gold and jewels it unearths. The Lantern Fish is the king of the dark.\n\nIt never keeps the treasure for itself; it leaves the gold for the mermaids to build their palaces of light."
    },
    {
        title: "The Weaver of Rain",
        image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800",
        content: "In a high tower, an old woman spins clouds into thread and weaves the rain. She decides if the storm will be a gentle drizzle or a roaring hurricane.\n\nHer loom is made of lightning rods, and her shuttle is a piece of polished obsidian. She hums a low tune that sounds like distant thunder.\n\nWithout her, the earth would wither. She is the mother of the rivers and the guardian of the thirsty fields."
    },
    {
        title: "The Sleeping Volcano",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800",
        content: "Mount Ignis hasn't erupted in a thousand years, but the villagers say it isn't dead—it's just dreaming of a world made of glass.\n\nSmoke rises in the shape of dragons, and the ground stays warm even in the dead of winter. It is a giant made of stone and fire.\n\nLegend says that if you whisper a secret into the crater, the volcano will keep it warm forever, ensuring it never goes cold."
    },
    {
        title: "The Paper Ship",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
        content: "A small boat made of a single page from a magic book sails the Great Ocean. It never sinks, no matter how high the waves get.\n\nThe captain is a tiny mouse with a needle for a sword. He is searching for the Isle of Cheese, a place where the mountains are made of cheddar.\n\nThough he is small, his courage is vast. He has faced krakens and storms, always protected by the magic ink on his hull."
    },
    {
        title: "The Mirror of Truth",
        image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800",
        content: "Hidden in a cave behind a waterfall is a mirror that doesn't show your face, but your soul. If you are kind, you see a garden; if you are cruel, you see a desert.\n\nMany have fled in terror after looking into it, unable to face what they have become. Others have wept with joy at the beauty within.\n\nThe mirror cannot lie. It is the final judge for those who seek the path of the enlightened."
    },
    {
        title: "The Star Thief",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800",
        content: "A creature with long, spindly fingers reaches into the sky every night to pluck a star. He keeps them in a velvet bag under his bed.\n\nHe isn't greedy; he just wants to make sure the stars don't get lonely in the vast darkness of space. He talks to them every morning.\n\nBy the time the moon sets, he puts them all back, polished and glowing brighter than ever before."
    },
    {
        title: "The City of Brass",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800",
        content: "In the middle of the desert is a city made entirely of polished brass. It reflects the sun so brightly that it can be seen from the moon.\n\nThe citizens are mechanical beings who never sleep. they spend their lives building intricate gears and winding up the world's clocks.\n\nAt night, the city hums with a metallic heartbeat that keeps the desert sand from shifting too far."
    },
    {
        title: "The Emerald Forest",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
        content: "The trees here have leaves made of solid emerald. They don't sway in the wind; they clink against each other like expensive jewelry.\n\nOnly the chosen few can enter. The animals are made of jade and marble, moving with a grace that no living creature could possess.\n\nIt is a place of absolute stillness and wealth beyond measure, guarded by a dragon made of living diamond."
    },
    {
        title: "The Ice Queen's Tear",
        image: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?w=800",
        content: "A single tear shed by the Ice Queen froze into a diamond that holds the power of winter. If it ever melts, the world will be plunged into eternal fire.\n\nIt is kept in a palace of frost, guarded by polar bears with armor made of glacier ice. It glows with a pale blue light.\n\nEvery year, the Queen cries again to ensure the diamond stays cold, sacrificing her own warmth for the sake of the world."
    },
    {
        title: "The Giant shell",
        image: "https://tse2.mm.bing.net/th/id/OIP.d9xs26X8NYekhmbJQe1pOQHaE8?pid=Api&P=0&h=180",
        content: "If you pick up the giant shell on the beach of Isla Luna, you won't hear the ocean. Instead, you hear the voices of people from the future.\n\nThey speak of cities in the stars and flying cars. It is a telephone to a time that hasn't happened yet.\n\nMost people put it back, frightened by the strange sounds. But some listen for hours, learning the secrets of the ages to come."
    },
    {
        title: "The Shadow Jester",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800",
        content: "In the kingdom of Nox, the king's jester has no body—he is only a shadow. He dances on the walls, making the court laugh with silent jokes.\n\nHe can detach himself from the wall and walk through shadows like they are doorways. He is the ultimate spy, seeing everything and saying nothing.\n\nWhen the king is sad, the jester performs a dance of light, turning into a silhouette of hope that even the darkness cannot touch."
    },
    {
        title: "The Singing Bridge",
        image: "https://imgcdn.stablediffusionweb.com/2024/12/7/a1e2ba50-0c10-45bf-b5e4-f50b782e423b.jpg",
        content: "The stone bridge over the River Lyre vibrates whenever someone crosses it. Depending on the weight of their step, it plays a different chord.\n\nA heavy heart produces a bass note, while a light spirit produces a high, flute-like sound. It is the world's largest musical instrument.\n\nOn festival nights, the villagers dance across it in patterns to create symphonies that can be heard for miles."
    },
    {
        title: "The Dragon's Breath",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800",
        content: "When the great dragon Ignis exhales, he doesn't just produce fire. He produces visions of the things you desire most.\n\nThe smoke twists into shapes of gold, love, or power. It is a dangerous magic that lures many to their doom in his lair.\n\nOnly those who want nothing can survive the breath. To them, the smoke is just a pleasant scent of cedar and spice."
    },
    {
        title: "The Moon's Garden",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
        content: "On the dark side of the moon, there is a garden where the flowers grow without sunlight. They drink the silver beams of the earth instead.\n\nThe petals are translucent and glow in the dark. Space travelers often stop there to rest on the soft, glowing moss.\n\nIt is the only place in the galaxy where you can hear the sound of silence, a hum that vibrates in your very bones."
    },
    {
        title: "The Compass of Souls",
        image: "https://images.unsplash.com/photo-1526749837599-b4efa9fd255e?w=800",
        content: "A golden compass found in a shipwreck doesn't point North. It points to the person you are destined to love.\n\nThe needle spins wildly until you are within a mile of them, then it locks into place with a steady glow. It has united thousands of hearts.\n\nBut once you find your love, the compass vanishes, moving on to the next soul who is lost in the sea of life."
    },
    {
        title: "The Time Traveler's Watch",
        image: "https://img6.arthub.ai/6544dc1f-b977.webp",
        content: "Arthur found a pocket watch that could stop time for five minutes every day. He used it to save people from accidents and win at chess.\n\nBut he noticed that every time he used it, he aged a little faster than everyone else. He was trading his life for those five minutes.\n\nHe eventually gave the watch to a child, telling them to never use it unless they were willing to give a piece of themselves away."
    },
    {
        title: "The Floating Isles",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        content: "High above the clouds are islands held up by giant balloons filled with hot air and magic. The people there never touch the ground.\n\nThey travel between islands using wings made of silk and bamboo. Their life is one of constant wind and sky.\n\nThey believe that the ground is a place of shadows and heavy thoughts, and they prefer to live where the sun hits first."
    },
    {
        title: "The Candle of Hope",
        image: "https://images.unsplash.com/photo-1501529301789-b48c1975542a?w=800",
        content: "In a dark cathedral, there is a candle that has been burning for five hundred years. It never gets shorter, and the flame never flickers.\n\nIt is fueled by the prayers of the people. As long as someone believes in a better tomorrow, the candle will stay lit.\n\nIt is a beacon for the hopeless, a small point of light that proves even the greatest darkness can be held back by a single spark."
    },
    {
        title: "The Giant's Flute",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800",
        content: "A flute made from the hollowed-out trunk of an ancient oak tree. Only a giant can play it, and the sound is like the low rumbling of the earth.\n\nWhen played, the music makes the trees grow three feet in a single night. It is the song of life and growth.\n\nThe giant only plays it during the spring equinox, ensuring the world stays green and vibrant for another year."
    },
    {
        title: "The Stone Heart",
        image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=800",
        content: "A statue of a warrior in the town square is said to have a real heart made of stone. Every night at midnight, you can hear it beat.\n\nLegend says the warrior gave his life to protect the town, and the gods turned him to stone to preserve his spirit forever.\n\nHe is the silent guardian, and as long as his heart beats, no enemy will ever pass through the town gates."
    },
    {
        title: "The River of Time",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
        content: "In a secret valley, the river flows backwards. If you step into the water, you grow younger with every second you spend submerged.\n\nMany have entered and disappeared, becoming babies again and being swept away by the current. It is a dangerous fountain of youth.\n\nThe wise only use it to wash their hands, gaining just enough time to finish their life's work."
    },
    {
        title: "The Velvet Night",
        image: "https://lh3.googleusercontent.com/UkxeOVhkRqBEI16WBBIYyIf6HTsN4_fBwqcrCsgpLPVacNKhuLQbmvyg3czj9-YT-0LUBatNf41lqot0",
        content: "The sky in the Kingdom of Somnus isn't made of air, but of dark blue velvet. The stars are diamonds sewn into the fabric by the Queen.\n\nIt feels soft to the touch if you fly high enough. The moon is a giant pearl that rolls across the fabric from East to West.\n\nIt is a world of eternal comfort and peace, where the night is a blanket that protects the sleepers from the harsh reality of the sun."
    },
    {
        title: "The Clockwork Bird",
        image: "https://images.unsplash.com/photo-1516533075015-a3838414c3ca?w=800",
        content: "A bird made of brass and silver wings that sings better than any living nightingale. It was built by a lonely king who wanted music that never died.\n\nBut the bird requires a golden key to wind up every morning. Without the key, it is just a cold piece of metal.\n\nThe king eventually realized that the bird's perfection was boring, and he traded it for a real bird that sang off-key but with a soul."
    },
    {
        title: "The Forest of Mirrors",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
        content: "Every tree in this forest has bark that reflects like a mirror. If you walk through it, you see yourself a thousand times from every angle.\n\nIt is impossible to get lost because your reflection always points the way out. However, most people get distracted by their own image.\n\nOnly the blind can truly navigate the forest, for they are the only ones not fooled by the infinite reflections of their own vanity."
    },
    {
        title: "The Lightning Jar",
        image: "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?w=800",
        content: "A young boy caught a bolt of lightning in a mason jar during a summer storm. The jar now glows with a fierce, crackling energy.\n\nHe uses it as a reading lamp, but the light is so bright it can be seen for miles. The lightning is restless, wanting to return to the sky.\n\nOne day, he will open the jar and let the bolt go, watching it streak back home to the clouds where it belongs."
    },
    {
        title: "The Weaver of Dreams",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
        content: "A spider in the attic of a magic school weaves webs that catch the dreams of the students as they sleep.\n\nShe turns the dreams into silk and makes robes for the professors. Each robe tells a different story of adventure, fear, or love.\n\nThe professors are the most knowledgeable in the world, for they wear the collective subconscious of their students every day."
    },
    {
        title: "The Golden Key",
        image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800",
        content: "A key made of solid gold that fits into any lock in the world. But every time you use it, you lose a memory of your childhood.\n\nIt is the ultimate tool for thieves and explorers, but the cost is high. Many have opened every door in the world only to forget who they are.\n\nThe key is currently hidden in a box that requires no key, waiting for someone brave or foolish enough to find it."
    },
    {
        title: "The Book of Everything",
        image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800",
        content: "A book that contains the history of every person who has ever lived. It updates itself in real-time as you breathe.\n\nThe pages are as thin as air and never end. If you read your own entry, you can see your future, but the ink fades as you look at it.\n\nIt is kept in the Library of Eternity, guarded by a monk who has been reading the same page for three hundred years."
    },
    {
        title: "The Silver Fountain",
        image: "https://images.unsplash.com/photo-1519308212912-bb5083658f8b?w=800",
        content: "In the center of the Moon Palace is a fountain that flows with liquid silver. It is the source of all the stars in the sky.\n\nEvery drop that splashes out of the fountain becomes a new star. The moon people use the silver to paint their houses and heal their wounds.\n\nIt is a place of absolute purity and light, where the water is cold but the spirit is warm."
    },
    {
        title: "The Dragon's Tear",
        image: "https://images.unsplash.com/photo-1502134273026-acb7cad13c58?w=800",
        content: "When the last dragon died, he shed a single tear that turned into a blue pearl. It holds the magic of the entire dragon race.\n\nWhoever holds the pearl can speak to animals and breathe fire. But they also inherit the dragon's loneliness.\n\nIt is currently buried in a cave, waiting for the person who is strong enough to carry the legacy of the scales and the flame."
    },
    {
        title: "The Sky Kingdom",
        image: "https://images.unsplash.com/photo-1506905967347-1caad18d411b?w=800",
        content: "A kingdom built on the back of a giant whale that flies through the clouds. The people live in houses made of whalebone and silk.\n\nThey follow the migration of the clouds, avoiding the storms and seeking the eternal sun. It is a life of freedom and height.\n\nOnce a year, the whale descends to the ocean to drink, and the people see the ground for the only time in their lives."
    },
    {
        title: "The Mirror of Shadows",
        image: "https://images.unsplash.com/photo-1495121553079-4c61bcad1894?w=800",
        content: "A mirror that only reflects your shadow. If your shadow is bigger than you, it means you have secrets; if it is smaller, you are honest.\n\nThe shadow in the mirror can move independently, acting out the things you are too afraid to do in real life.\n\nIt is a tool for self-reflection that is more literal than most people can handle, revealing the hidden depths of the human heart."
    },
    {
        title: "The Golden Apple",
        image: "https://images.unsplash.com/photo-1512413316925-fd47914c9c22?w=800",
        content: "An apple made of solid gold that grows on a tree in the middle of a desert. If you eat it, you gain eternal life.\n\nBut the apple is guarded by a sphinx who asks a riddle that no one has ever solved. The desert is filled with the bones of those who failed.\n\nThe apple is a lure for the greedy, a test of wisdom that proves life is only valuable because it is finite."
    },
    {
        title: "The Song of the Wind",
        image: "https://images.unsplash.com/photo-1516715667182-c515c1e923cb?w=800",
        content: "The wind doesn't just blow; it sings a song that only those with a musical soul can hear. The song tells the story of the world's creation.\n\nIf you can whistle the melody, the wind will carry you wherever you want to go. It is the ultimate form of travel.\n\nBut the song changes every day, and if you miss a note, the wind will drop you right where you are, no matter how high you are."
    },
    {
        title: "The Crystal Tower",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
        content: "A tower made of solid quartz that acts as a giant prism, turning the sunlight into a thousand rainbows that cover the land.\n\nIt is the home of the Light Weavers, who use the rainbows to make clothes for the gods. The tower is always warm and bright.\n\nEven during the longest night, the tower glows with the stored light of the day, a symbol of hope in a dark world."
    },
    {
        title: "The Heart of the Sea",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
        content: "In the deepest part of the ocean is a giant heart made of coral that beats with the rhythm of the tides. It is the life force of the sea.\n\nIf the heart ever stops, the ocean will go still and the world will die. It is protected by a thousand sharks and a veil of ink.\n\nOnly the King of the Merfolk knows the location, and he visits it every day to sing to it and keep it beating strong."
    },
    {
        title: "The Last Star",
        image: "https://images.unsplash.com/photo-1464802686167-b939a67e0524?w=800",
        content: "When the universe finally goes dark, a single star will remain. It is the star of hope, and it will burn until the very end.\n\nIt holds the memories of all the planets and civilizations that ever existed. It is the final library of the cosmos.\n\nWhen it finally goes out, a new universe will be born from its ashes, starting the cycle of stories all over again."
    }
];

// --- ELEMENTS ---
const gridContainer = document.getElementById('grid-container');
const storyOverlay = document.getElementById('story-overlay');
const searchInput = document.getElementById('story-search');
const pageTurnSound = document.getElementById('page-turn-sound');

// --- RENDER FUNCTION ---
function renderGallery(filterText = "") {
    gridContainer.innerHTML = ""; 
    
    const filteredStories = stories.filter(story => 
        story.title.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredStories.length === 0) {
        gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; font-size: 1.5rem; padding: 50px; opacity: 0.6;">No magical tales found by that name...</p>`;
        return;
    }

    filteredStories.forEach(story => {
        const card = document.createElement('div');
        card.classList.add('story-card');
        card.innerHTML = `
            <img src="${story.image}" alt="${story.title}" loading="lazy">
            <h2>${story.title}</h2>
        `;
        // Pass 'card' to the openStory function so we can animate it
        card.addEventListener('click', () => openStory(card, story));
        gridContainer.appendChild(card);
    });
}

// --- SEARCH EVENT ---
searchInput.addEventListener('input', (e) => {
    renderGallery(e.target.value);
});

// --- OVERLAY FUNCTIONS ---
function openStory(cardElement, story) {
    // 1. Play Sound
    pageTurnSound.currentTime = 0;
    pageTurnSound.play().catch(() => {});

    // 2. Trigger Zoom Animation on the card
    cardElement.classList.add('zooming');

    // 3. Prepare Overlay Data
    const titleEl = storyOverlay.querySelector('.story-title');
    const imgEl = storyOverlay.querySelector('#overlay-img');
    const contentEl = storyOverlay.querySelector('.story-content');

    titleEl.textContent = story.title;
    imgEl.src = story.image;

    const formattedContent = story.content.split('\n\n').map(p => `<p style="margin-bottom: 20px;">${p}</p>`).join('');
    contentEl.innerHTML = formattedContent;

    // 4. Wait for zoom animation to play, then show overlay
    setTimeout(() => {
        storyOverlay.classList.add('active'); // Use .active as defined in previous CSS
        storyOverlay.classList.add('visible'); // Keep your existing logic if needed
        gridContainer.classList.add('blurred');
        document.body.style.overflow = "hidden"; 
        
        // Remove zoom class so it's fresh when we return
        cardElement.classList.remove('zooming');
    }, 450); 
}

function closeStory() {
    storyOverlay.classList.remove('active');
    storyOverlay.classList.remove('visible');
    gridContainer.classList.remove('blurred');
    document.body.style.overflow = "auto";
}

document.querySelector('.close-btn').onclick = closeStory;

// Initialize
renderGallery();