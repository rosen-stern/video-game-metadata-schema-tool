const transaction_types = [
    {
    "term": "Currency",
    "scope_note": "Not part of the controlled vocabulary. This is a category / type of term.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": ""
},{
    "term": "Real Currency",
    "scope_note": "Legal cash.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Currency"
},{
    "term": "In-game Currency",
    "scope_note": "In-game digital currency.",
    "related_terms": ["Virtual Currency Gambling"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Currency"
},{
    "term": "Premium Currency",
    "scope_note": "A rare and exclusive form of in-game currency.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Currency"
},{
    "term": "Transaction Types",
    "scope_note": "Not part of the controlled vocabulary. This is a category / type of term.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": ""
},{
    "term": "Direct Monetization",
    "scope_note": "Company recieves direct cash payments.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":["Subscription", "Ad Removal", "Real Currency Gambling"],
    "type": "Transaction Types"
},{
    "term": "Subscription",
    "scope_note": "Pay a periodic fee for bonus or exclusive content.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"Direct Monetization",
    "narrower_term":[],
    "type": "Transaction Types"
},{
    "term": "Ad Removal",
    "scope_note": "Pay real money to avoid ads.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"Direct Monetization",
    "narrower_term":[],
    "type": "Transaction Types"
},{
    "term": "Real Currency Gambling",
    "scope_note": "Gamble with real money.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"Direct Monetization",
    "narrower_term":[],
    "type": "Transaction Types"
},{
    "term": "Indirect Monetization",
    "scope_note": "Company receives cash payments from parties and avenues other than the players directly paying them.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":["Viewing Ads (Required)", "Viewing Ads (Optional)", "Virtual Currency Gambling", "Acquisition"],
    "type": "Transaction Types"
},{
    "term": "Viewing Ads (Required)",
    "scope_note": "Ads appear on screen, and sometimes between levels.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"Indirect Monetization",
    "narrower_term":[],
    "type": "Transaction Types"
},{
    "term": "Viewing Ads (Optional)",
    "scope_note": "Ads players can elect to watch for in-game goods.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"Indirect Monetization",
    "narrower_term":[],
    "type": "Transaction Types"
},{
    "term": "Virtual Currency Gambling",
    "scope_note": "Players gamble with virtual currency.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"Indirect Monetization",
    "narrower_term":[],
    "type": "Transaction Types"
},{
    "term": "Acquisition",
    "scope_note": "Players use social media and other systems to recruit new players or re-engage former players.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"Indirect Monetization",
    "narrower_term":[],
    "type": "Transaction Types"
},{
    "term": "Resources",
    "scope_note": "Not part of the controlled vocabulary. This is a category / type of term.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": ""
},{
    "term": "Direct Gameplay Advantage",
    "scope_note": "Resources that convey benefits to the game system mechanics.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":["Powerups", "Permanent Boost"],
    "type": "Resources"
},{
    "term": "Buffs",
    "scope_note": "",
    "related_terms": [],
    "example": "",
    "use": ["Powerups"],
    "use_for":[],
    "broader_term":"Direct Gameplay Advantage",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Powerups",
    "scope_note": "Resoruce that provides time-limited benefits.",
    "related_terms": ["Buffs"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"Direct Gameplay Advantage",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Permanent Boost",
    "scope_note": "Resource that conveys a permanent advantage to the player's game state.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"Direct Gameplay Advantage",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Exclusive Content",
    "scope_note": "",
    "related_terms": [],
    "example": "",
    "use": ["Limited Content"],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Limited Content",
    "scope_note": "Exclusive, premium game features not available to all players.",
    "related_terms": ["Exclusive Content"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Remove Time Related Barriers",
    "scope_note": "Reducing or removing limitations to time played, or turn timers.",
    "related_terms": ["Appointment Mechanics", "Energy Mechanics", "Turn Timers"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Customization",
    "scope_note": "Cosmetic objects for character avatars or environments.",
    "related_terms": ["Skins"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Inventory Capacity",
    "scope_note": "Ability to store more in-game resources.",
    "related_terms": ["Bag Space"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Gacha",
    "scope_note": "Random items or characters obtained through a lottery-like process, unrelated to player achievement.",
    "related_terms": ["Loot Boxes", "Random Goods"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Random Goods",
    "scope_note": "A resource generating random in-game goods.",
    "related_terms": ["Loot Boxes", "Gacha"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "More Items",
    "scope_note": "Acquiring more materials, weapons, or other items used in-game.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Appointment Mechanics",
    "scope_note": "Not defined, but part of the controlled vocabulary.",
    "related_terms": ["Remove Time Related Barriers"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Energy Mechanics",
    "scope_note": "Not defined, but part of the controlled vocabulary.",
    "related_terms": ["Remove Time Related Barriers"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Turn Timers",
    "scope_note": "Not defined, but part of the controlled vocabulary.",
    "related_terms": ["Remove Time Related Barriers"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Skins",
    "scope_note": "",
    "related_terms": [],
    "example": "",
    "use": ["Customization"],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Bag Space",
    "scope_note": "",
    "related_terms": [],
    "example": "",
    "use": ["Inventory Capacity"],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Loot Boxes",
    "scope_note": "",
    "related_terms": [],
    "example": "",
    "use": ["Random Goods"],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Resources"
},{
    "term": "Marketing Methods",
    "scope_note": "Not part of the controlled vocabulary. This is a category / type of term.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": ""
},{
    "term": "Game as Ad",
    "scope_note": "The game is also an ad for merchandise.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Marketing Methods"
},{
    "term": "Merchandise Store",
    "scope_note": "Merchandise store integrated into game application.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Marketing Methods"
},{
    "term": "Limited-Time Offer",
    "scope_note": "Time-limited sale, or time-limited availability of rare game goods.",
    "related_terms": [],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Marketing Methods"
},{
    "term": "Special Events",
    "scope_note": "Time-limited events featuring temporary thematic game contesnt.",
    "related_terms": ["Special Occasions"],
    "example": "",
    "use": [],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Marketing Methods"
},{
    "term": "Special Occasions",
    "scope_note": "",
    "related_terms": [],
    "example": "",
    "use": ["Special Events"],
    "use_for":[],
    "broader_term":"",
    "narrower_term":[],
    "type": "Marketing Methods"
}
]