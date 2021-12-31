module AchievementData exposing (..)

type alias Achievement =
    { name : String
    , card: String
    , requirement: String
    }
    
achievements : List Achievement
achievements =
    [ { name = "Ammo Scavenger"
      , card = "Ammo Scavenger" 
      , requirement = "500 Total Pistol Kills"
      }
    , { name = "Berserker"
      , card = "Berserker"
      , requirement = "500 Total Melee Kills"
      }
    , { name = "Mag Carrier"
      , card = "Mag Carrier" 
      , requirement = "500 Total SMG Kills"
      }
    , { name = "Meat Grinder"
      , card = "Meatgrinder"
      , requirement = "500 Total LMG Kills"
      }
    , { name = "Shell Carrier"
      , card = "Shell Carrier" 
      , requirement = "500 Total Shotgun Kills"
      }
    , { name = "Stock Pouch"
      , card = "Stock Pouch" 
      , requirement = "500 Total Sniper Kills"
      }
    , { name = "Tactical Vest"
      , card = "Tactical Vest" 
      , requirement = "500 Total A-Rifle Kills"
      }
    , { name = "Brought a Knife to a Gunfight"
      , card = "Adrenaline Fueled"
      , requirement = "50 melee kills in single level"
      }  
    , { name = "Smorgasbord"
      , card = "Confident Killer"
      , requirement = "Kill each non-boss Mutation"
      }
    , { name = "Jukebox Hero"
      , card = "Lucky Pennies"
      , requirement = "Defend Jukebox without it breaking"
      }
    , { name = "Field Surgeon"
      , card = "Field Surgeon"
      , requirement = "Heal 5,000 Total Health"
      }
    ]