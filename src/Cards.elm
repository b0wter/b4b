module Cards exposing (..)

import Tags exposing (..)


type alias Property =
    { description : String
    }


type Kind
    = Utility
    | Offense
    | Defense
    | Mobility
    | Unknown


type alias CardId =
    Int


type alias RawCard =
    { id : Int
    , title : String
    , properties : List String
    , kind : String
    , effects : List Effect
    , filename : String
    }


type alias Card =
    { id : CardId
    , title : String
    , properties : List Property
    , kind : Kind
    , effects : List Effect
    , filename : String
    }


containsWord: String -> Card -> Bool
containsWord word card =
    card.properties 
    |> List.map (\p -> p.description) 
    |> String.join " "
    |> String.contains word


rawCards : List RawCard
rawCards =
    [ { id = 1
      , title = "SUPPORT SCAVENGER"
      , kind = "UTILITY"
      , filename = "10_0_0.jpg"
      , properties =
            [ "You can sense nearby Support Accessories."
            , "More Support Accessories spawn."
            ]
      , effects = []
      }   
    , { id = 2
      , title = "WEAPON SCAVENGER"
      , kind = "UTILITY"
      , filename = "10_0_1.jpg"
      , properties =
            [ "You can sense nearby weapons."
            , "More weapons spawn."
            ]
      , effects = []
      }   
    , { id = 3
      , title = "AMPED UP"
      , kind = "DEFENSE"
      , filename = "10_0_2.jpg"
      , properties =
            [ "When you exit a starting saferoom, your team gains 50 Temporary Health."
            ]
      , effects = []
      }   
    , { id = 4
      , title = "PATIENT HUNTER"
      , kind = "OFFENSE"
      , filename = "10_0_3.jpg"
      , properties =
            [ "Each second you Aim Down Sights increases your Damage by 10% (up to 3 stacks)."
            ]
      , effects = []
      }   
    , { id = 5
      , title = "POWER RELOAD"
      , kind = "OFFENSE"
      , filename = "10_0_4.jpg"
      , properties =
            [ "Reloading a gun within 0.75 seconds of reaching low ammo will increase its magazine size by - 30% until the next reload."
            ]
      , effects = []
      }   
    , { id = 6
      , title = "CROSS TRAINERS"
      , kind = "MOBILITY"
      , filename = "1_0_0.jpg"
      , properties =
            [ "+ 20% Stamina"
            , "+ 20% Stamina Regen"
            , "+ 3% Move Speed"
            , "+ 5 Health"
            ]
      , effects = []
      }   
    , { id = 7
      , title = "MARKED FOR DEATH"
      , kind = "UTILITY"
      , filename = "10_1_0.jpg"
      , properties =
            [ "Mutations you ping are highlighted and your team deals 10% increased damage to highlighted enemies."
            ]
      , effects = []
      }   
    , { id = 8
      , title = "KNOWLEDGE IS POWER"
      , kind = "UTILITY"
      , filename = "10_1_1.jpg"
      , properties =
            [ "+ 10% Weakspoť Damage"
            , "Allows players to see values for damage they deal and enemy health bars."
            ]
      , effects = []
      }   
    , { id = 9
      , title = "TACTICAL VEST"
      , kind = "OFFENSE"
      , filename = "10_1_2.jpg"
      , properties =
            [ "+ 30% Rifle Ammo Capacity"
            , "+ 10% Damage with Assault Rifles and LMGS"
            ]
      , effects = []
      }   
    , { id = 10
      , title = "EXPERIENCED EMT"
      , kind = "DEFENSE"
      , filename = "10_1_3.jpg"
      , properties =
            [ "When you use a Medical Accessory, the target gains +20% Maximum Health until the end of the level."
            ]
      , effects = []
      }   
    , { id = 11
      , title = "VITAMINS"
      , kind = "DEFENSE"
      , filename = "10_1_4.jpg"
      , properties =
            [ "+ 15 Health"
            ]
      , effects = []
      }   
    , { id = 12
      , title = "ENERGY DRINK"
      , kind = "MOBILITY"
      , filename = "1_0_1.jpg"
      , properties =
            [ "+ 40% Stamina"
            , "- 5% Damage Resistance"
            ]
      , effects = []
      }   
    , { id = 13
      , title = "RHYTHMIC BREATHING"
      , kind = "MOBILITY"
      , filename = "1_0_2.jpg"
      , properties =
            [ "+ 60% Stamina"
            , "- 20% Slow Resistance"
            ]
      , effects = []
      }   
    , { id = 14
      , title = "RELOAD DRILLS"
      , kind = "OFFENSE"
      , filename = "1_0_3.jpg"
      , properties =
            [ "+ 20% Reload Speed"
            ]
      , effects = []
      }   
    , { id = 15
      , title = "WIDEMOUTH MAGWELL"
      , kind = "OFFENSE"
      , filename = "1_0_4.jpg"
      , properties =
            [ "+ 30% Reload Speed"
            , "- 5% Damage Resistance"
            ]
      , effects = []
      }   
    , { id = 16
      , title = "HYDRATION PACK"
      , kind = "DEFENSE"
      , filename = "11_0_0.jpg"
      , properties =
            [ "+ 25 Health"
            , "- 15% Ammo Capacity"
            ]
      , effects = []
      }   
    , { id = 17
      , title = "CANNED GOODS"
      , kind = "DEFENSE"
      , filename = "11_0_1.jpg"
      , properties =
            [ "+ 40 Health"
            , "- 30% Stamina"
            ]
      , effects = []
      }   
    , { id = 18
      , title = "BATTER UP"
      , kind = "OFFENSE"
      , filename = "11_0_2.jpg"
      , properties =
            [ "+ 40% Melee Damage"
            , "+ 5 Health"
            ]
      , effects = []
      }   
    , { id = 19
      , title = "SPIKY BITS"
      , kind = "OFFENSE"
      , filename = "11_0_3.jpg"
      , properties =
            [ "+ 20% Melee Damage"
            , "+ 10% Damage Resistance while using a Melee weapon"
            , "- 15% Ammo Capacity"
            ]
      , effects = []
      }   
    , { id = 20
      , title = "MEAN DRUNK"
      , kind = "OFFENSE"
      , filename = "11_0_4.jpg"
      , properties =
            [ "+ 60% Melee Damage"
            , "Your Melee Attacks cause cleave through enemies dealing damage in a large area."
            , "DISABLES: Sprint"
            ]
      , effects = []
      }   
    , { id = 21
      , title = "MAG COUPLER"
      , kind = "OFFENSE"
      , filename = "1_1_0.jpg"
      , properties =
            [ "+ 50% Reload Speed"
            , "DISABLES: Aim Down Sights"
            ]
      , effects = []
      }   
    , { id = 22
      , title = "DURABLE"
      , kind = "DEFENSE"
      , filename = "11_1_0.jpg"
      , properties =
            [ "+ 15% Trauma Resistance"
            , "+ 5 Health"
            ]
      , effects = []
      }   
    , { id = 23
      , title = "BODY ARMOR"
      , kind = "DEFENSE"
      , filename = "11_1_1.jpg"
      , properties =
            [ "+ 25% Trauma Resistance"
            , "- 15% Ammo Capacity"
            ]
      , effects = []
      }   
    , { id = 24
      , title = "WOODEN ARMOR"
      , kind = "DEFENSE"
      , filename = "11_1_2.jpg"
      , properties =
            [ "+ 40% Trauma Resistance"
            , "- 100% Fire Resistance"
            , "- 100% Acid Resistance"
            , "- 100% Explosion Resistance"
            ]
      , effects = []
      }   
    , { id = 25
      , title = "GRENADE TRAINING"
      , kind = "OFFENSE"
      , filename = "11_1_3.jpg"
      , properties =
            [ "+ 25% Accessory Damage"
            ]
      , effects = []
      }   
    , { id = 26
      , title = "DEMOLITIONS EXPERT"
      , kind = "OFFENSE"
      , filename = "11_1_4.jpg"
      , properties =
            [ "+ 50% Accessory Damage"
            , "- 15% Ammo Capacity"
            ]
      , effects = []
      }   
    , { id = 27
      , title = "SLUGGER"
      , kind = "OFFENSE"
      , filename = "1_1_1.jpg"
      , properties =
            [ "+ 5 Health"
            , "+ 10% Melee Stamina Efficiency"
            , "+ 20% Melee Attack Speed"
            ]
      , effects = []
      }   
    , { id = 28
      , title = "BRAZEN"
      , kind = "OFFENSE"
      , filename = "1_1_2.jpg"
      , properties =
            [ "+ 20% Melee Stamina Efficiency"
            , "+ 30% Melee Attack Speed"
            , "- 5% Damage Resistance"
            ]
      , effects = []
      }   
    , { id = 29
      , title = "МЕТН НЕAD"
      , kind = "OFFENSE"
      , filename = "1_1_3.jpg"
      , properties =
            [ "+ 40% Melee Attack Speed"
            , "+ 30% Melee Stamina Efficiency"
            , "Your Melee Attacks no longer stick in tough enemies."
            , "DISABLES: Aim Down Sights"
            ]
      , effects = []
      }   
    , { id = 30
      , title = "RIDDEN SLAYER"
      , kind = "OFFENSE"
      , filename = "1_1_4.jpg"
      , properties =
            [ "+ 20% Weakspot Damage"
            ]
      , effects = []
      }   
    , { id = 31
      , title = "IMPROVISED EXPLOSIVES"
      , kind = "OFFENSE"
      , filename = "12_0_0.jpg"
      , properties =
            [ "+ 75% Accessory Damage"
            , "- 25% Swap Speed"
            ]
      , effects = []
      }   
    , { id = 32
      , title = "CONFIDENT KILLER"
      , kind = "OFFENSE"
      , filename = "12_0_1.jpg"
      , properties =
            [ "When you or your team kills a Mutation gain 1% damage (up to - 15%) until the end of the level."
            ]
      , effects = []
      }   
    , { id = 33
      , title = "HEAVY HITTER"
      , kind = "OFFENSE"
      , filename = "12_0_2.jpg"
      , properties =
            [ "Melee hits against Weakspots deal + 20 additional Stumble Damage."
            ]
      , effects = []
      }   
    , { id = 34
      , title = "IGNORE THE PAIN"
      , kind = "DEFENSE"
      , filename = "12_0_3.jpg"
      , properties =
            [ "+ 20% Melee Damage against Mutations"
            , "When you deal Melee damage to a Mutation heal 1 Health and recover 3 Stamina."
            ]
      , effects = []
      }   
    , { id = 35
      , title = "BERSERKER"
      , kind = "OFFENSE"
      , filename = "12_0_4.jpg"
      , properties =
            [ "Gain 10% Melee Damage, 10% Melee Speed, and 5% Move Speed for each Melee kill in the last 4 seconds."
            ]
      , effects = []
      }   
    , { id = 36
      , title = "TRUE GRIT"
      , kind = "DEFENSE"
      , filename = "12_1_0.jpg"
      , properties =
            [ "When you take a single hit for 15 or more damage, heal 10 health over 5 seconds."
            ]
      , effects = []
      }   
    , { id = 37
      , title = "PYRO"
      , kind = "OFFENSE"
      , filename = "12_1_1.jpg"
      , properties =
            [ "+ 100% Fire damage."
            , "Kills with fire grant you Temporary Health."
            , "You can sense flammable objects nearby."
            ]
      , effects = []
      }   
    , { id = 38
      , title = "BOMB SQUAD"
      , kind = "OFFENSE"
      , filename = "12_1_2.jpg"
      , properties =
            [ "+ 100% Explosive Damage"
            , "+ 35% Explosive Resistance"
            ]
      , effects = []
      }   
    , { id = 39
      , title = "SCAR TISSUE"
      , kind = "DEFENSE"
      , filename = "12_1_3.jpg"
      , properties =
            [ "Take 1 less damage from all Ridden."
            ]
      , effects = []
      }   
    , { id = 40
      , title = "BATTLE LUST"
      , kind = "DEFENSE"
      , filename = "12_1_4.jpg"
      , properties =
            [ "Melee kills heal 2 Health."
            ]
      , effects = []
      }   
    , { id = 41
      , title = "LINE 'EM UP"
      , kind = "OFFENSE"
      , filename = "13_0_0.jpg"
      , properties =
            [ "+ 100% Bullet Penetration with Assault Rifles."
            ]
      , effects = []
      }   
    , { id = 42
      , title = "FACE YOUR FEARS"
      , kind = "DEFENSE"
      , filename = "13_0_1.jpg"
      , properties =
            [ "Gain 2 Temporary Health whenever you kill a Ridden within 2 meters."
            ]
      , effects = []
      }   
    , { id = 43
      , title = "WELL FED"
      , kind = "DEFENSE"
      , filename = "13_0_2.jpg"
      , properties =
            [ "- 20% Stamina Regen"
            , "TEAM EFFECTS + 10 Team Health"
            ]
      , effects = []
      }   
    , { id = 44
      , title = "HEAVY ATTACK"
      , kind = "OFFENSE"
      , filename = "13_0_3.jpg"
      , properties =
            [ "Charge: Hold with Melee weapons to burst forward. Charge attacks deal 100% increased damage."
            ]
      , effects = []
      }   
    , { id = 45
      , title = "SUNDER"
      , kind = "OFFENSE"
      , filename = "13_0_4.jpg"
      , properties =
            [ "Melee hits cause the target to take 20% increased damage for 5 seconds."
            ]
      , effects = []
      }   
    , { id = 46
      , title = "OVERWATCH"
      , kind = "DEFENSE"
      , filename = "13_1_0.jpg"
      , properties =
            [ "Kills from greater than 15 meters grant 5 Temporary Health to teammates within 10 meters of the target."
            ]
      , effects = []
      }   
    , { id = 47
      , title = "FRESH BANDAGE"
      , kind = "DEFENSE"
      , filename = "13_1_1.jpg"
      , properties =
            [ "Heal 10 Trauma Damage at the start of each level."
            ]
      , effects = []
      }   
    , { id = 48
      , title = "TWO IS ONE AND ONE IS NONE"
      , kind = "OFFENSE"
      , filename = "13_1_2.jpg"
      , properties =
            [ "You can equip a Primary weapon in your Secondary slot."
            , "- 25% Swap Speed"
            ]
      , effects = []
      }   
    , { id = 49
      , title = "OFFENSIVE SCAVENGER"
      , kind = "UTILITY"
      , filename = "13_1_3.jpg"
      , properties =
            [ "You can sense nearby Offensive Accessories."
            , "More Offensive Accessories spawn."
            ]
      , effects = []
      }   
    , { id = 50
      , title = "CHEMICAL COURAGE"
      , kind = "OFFENSE"
      , filename = "13_1_4.jpg"
      , properties =
            [ "Pain Meds you apply also grant + 25% Damage for 60 seconds."
            ]
      , effects = []
      }   
    , { id = 51
      , title = "NUMB"
      , kind = "DEFENSE"
      , filename = "14_0_0.jpg"
      , properties =
            [ "Gain + 15% Damage Resistance while you have Temporary Health."
            ]
      , effects = []
      }   
    , { id = 52
      , title = "BROADSIDE"
      , kind = "OFFENSE"
      , filename = "14_0_1.jpg"
      , properties =
            [ "Precision Kills have a 20% chance to cause Ridden to explode, dealing 15 damage to other Ridden within 4 meters."
            ]
      , effects = []
      }   
    , { id = 53
      , title = "BUCKSHOT BRUISER"
      , kind = "DEFENSE"
      , filename = "14_0_2.jpg"
      , properties =
            [ "When using Shotguns, gain 0.25 Temporary Health for each pellet that hits."
            ]
      , effects = []
      }   
    , { id = 54
      , title = "SECOND CHANCE"
      , kind = "DEFENSE"
      , filename = "14_0_3.jpg"
      , properties =
            [ "+ 1 Extra Life"
            , "+ 5 Health"
            ]
      , effects = []
      }   
    , { id = 55
      , title = "GRENADE POUCH"
      , kind = "OFFENSE"
      , filename = "14_0_4.jpg"
      , properties =
            [ "+ 1 Offensive Inventory"
            ]
      , effects = []
      }   
    , { id = 56
      , title = "DOUBLE GRENADE POUCH"
      , kind = "OFFENSE"
      , filename = "14_1_0.jpg"
      , properties =
            [ "+ 2 Offensive Inventory"
            , "- 10% Damage Dealt"
            ]
      , effects = []
      }   
    , { id = 57
      , title = "SURPLUS POUCHES"
      , kind = "OFFENSE"
      , filename = "14_1_1.jpg"
      , properties =
            [ "- 10% Health"
            , "TEAM EFFECTS + 1 Team Offensive Inventory"
            ]
      , effects = []
      }   
    , { id = 58
      , title = "FANNY PACK"
      , kind = "DEFENSE"
      , filename = "14_1_2.jpg"
      , properties =
            [ "+ 1 Support Inventory"
            ]
      , effects = []
      }   
    , { id = 59
      , title = "SHOULDER BAG"
      , kind = "DEFENSE"
      , filename = "14_1_3.jpg"
      , properties =
            [ "+ 2 Support Inventory"
            , "- 10% Damage Dealt"
            ]
      , effects = []
      }   
    , { id = 60
      , title = "ВОХ ' ВAGS"
      , kind = "DEFENSE"
      , filename = "14_1_4.jpg"
      , properties =
            [ "- 10% Health"
            , "TEAM EFFECTS + 1 Team Support Inventory"
            ]
      , effects = []
      }   
    , { id = 61
      , title = "MUGGER"
      , kind = "UTILITY"
      , filename = "15_0_0.jpg"
      , properties =
            [ "Melee kills have a 2% chance to spawn ammo."
            ]
      , effects = []
      }   
    , { id = 62
      , title = "HIGHWAYMAN"
      , kind = "UTILITY"
      , filename = "15_0_1.jpg"
      , properties =
            [ "Pistol kills have a 2% chance to spawn ammo."
            ]
      , effects = []
      }   
    , { id = 63
      , title = "ADMIN RELOAD"
      , kind = "OFFENSE"
      , filename = "15_0_2.jpg"
      , properties =
            [ "When you stow your weapon, it reloads."
            , "- 15% Ammo Capacity"
            ]
      , effects = []
      }   
    , { id = 64
      , title = "BOUNTY HUNTER"
      , kind = "UTILITY"
      , filename = "15_0_3.jpg"
      , properties =
            [ "When you kill a Mutation, gain 10 Copper (up to 300 per level)."
            ]
      , effects = []
      }   
    , { id = 65
      , title = "AMMO STASH"
      , kind = "OFFENSE"
      , filename = "15_0_4.jpg"
      , properties =
            [ "Your secondary weapons have unlimited ammo."
            , "Your secondary weapons reload - 20% slower."
            ]
      , effects = []
      }   
    , { id = 66
      , title = "LIFE INSURANCE"
      , kind = "DEFENSE"
      , filename = "15_1_0.jpg"
      , properties =
            [ "+ 2 Extra Life"
            , "Lose 50 Copper at the start of each level."
            ]
      , effects = []
      }   
    , { id = 67
      , title = "WOUNDED ANIMAL"
      , kind = "DEFENSE"
      , filename = "15_1_1.jpg"
      , properties =
            [ "Kills while at Critical Health recover 1 Health."
            ]
      , effects = []
      }   
    , { id = 68
      , title = "COMPOUND INTEREST"
      , kind = "UTILITY"
      , filename = "15_1_2.jpg"
      , properties =
            [ "Gain 10% of your total Copper in each Saferoom."
            ]
      , effects = []
      }   
    , { id = 69
      , title = "LUCKY PENNIES"
      , kind = "UTILITY"
      , filename = "15_1_3.jpg"
      , properties =
            [ "Whenever you or your team loots Copper, you have a 35% chance to find 35% additional Copper."
            ]
      , effects = []
      }   
    , { id = 70
      , title = "MONEY GRUBBERS"
      , kind = "UTILITY"
      , filename = "15_1_4.jpg"
      , properties =
            [ "Each time your team loots Copper, you gain 3 additional Copper, stacking up to 75 additional Сopper."
            ]
      , effects = []
      }   
    , { id = 71
      , title = "RUN AND GUN"
      , kind = "MOBILITY"
      , filename = "16_0_0.jpg"
      , properties =
            [ "You can shoot while sprinting."
            ]
      , effects = []
      }   
    , { id = 72
      , title = "COPPER SCAVENGER"
      , kind = "UTILITY"
      , filename = "16_0_1.jpg"
      , properties =
            [ "You can sense nearby Copper."
            , "More Copper Piles spawn."
            ]
      , effects = []
      }   
    , { id = 73
      , title = "SHARE THE WEALTH"
      , kind = "UTILITY"
      , filename = "16_0_2.jpg"
      , properties =
            [ "Each teammate gains 100 bonus Copper at the start of each level."
            ]
      , effects = []
      }   
    , { id = 74
      , title = "SHELL CARRIER"
      , kind = "OFFENSE"
      , filename = "16_0_3.jpg"
      , properties =
            [ "+ 30% Shotgun Ammo Capacity"
            , "+ 10% Damage with Shotguns"
            ]
      , effects = []
      }   
    , { id = 75
      , title = "HAZARD PAY"
      , kind = "UTILITY"
      , filename = "16_0_4.jpg"
      , properties =
            [ "Gain 250 bonus Copper at the"
            , "start of each level."
            ]
      , effects = []
      }   
    , { id = 76
      , title = "SAFEROOM RECOVERY"
      , kind = "DEFENSE"
      , filename = "16_1_0.jpg"
      , properties =
            [ "Your team heals 5 Trauma Damage and refills 10% Ammo at the start of each level."
            ]
      , effects = []
      }   
    , { id = 77
      , title = "RECKLESS STRATEGY"
      , kind = "OFFENSE"
      , filename = "2_0_0.jpg"
      , properties =
            [ "+ 30% Weakspot Damage"
            , "- 5% Damage Resistance"
            ]
      , effects = []
      }   
    , { id = 78
      , title = "HYPER-FOCUSED"
      , kind = "OFFENSE"
      , filename = "2_0_1.jpg"
      , properties =
            [ "+ 50% Weakspot Damage"
            , "- 75% ADS Move Speed."
            ]
      , effects = []
      }   
    , { id = 79
      , title = "HI VIS SIGHTS"
      , kind = "OFFENSE"
      , filename = "2_0_2.jpg"
      , properties =
            [ "+ 30% Aim Speed"
            ]
      , effects = []
      }   
    , { id = 80
      , title = "TUNNEL VISION"
      , kind = "OFFENSE"
      , filename = "2_0_3.jpg"
      , properties =
            [ "+ 50% Aim Speed"
            , "- 5% Damage Resistance"
            ]
      , effects = []
      }   
    , { id = 81
      , title = "STEADY AIM"
      , kind = "OFFENSE"
      , filename = "2_0_4.jpg"
      , properties =
            [ "+ 80% Aim Speed"
            , "- 50% ADS Move Speed"
            ]
      , effects = []
      }   
    , { id = 82
      , title = "SHOOTING GLOVES"
      , kind = "UTILITY"
      , filename = "2_1_0.jpg"
      , properties =
            [ "+ 25% Weapon Swap Speed"
            ]
      , effects = []
      }   
    , { id = 83
      , title = "GUNS OUT"
      , kind = "UTILITY"
      , filename = "2_1_1.jpg"
      , properties =
            [ "+ 50% Weapon Swap Speed"
            , "- 5% Damage Resistance"
            ]
      , effects = []
      }   
    , { id = 84
      , title = "СОСKY"
      , kind = "UTILITY"
      , filename = "2_1_2.jpg"
      , properties =
            [ "+ 75% Weapon Swap Speed"
            , "When you take damage, your Accuracy is reduced by 20% for 3 seconds."
            ]
      , effects = []
      }   
    , { id = 85
      , title = "SMELLING SALTS"
      , kind = "UTILITY"
      , filename = "2_1_3.jpg"
      , properties =
            [ "+ 100% Revive Speed"
            ]
      , effects = []
      }   
    , { id = 86
      , title = "ΡEP TALK"
      , kind = "UTILITY"
      , filename = "2_1_4.jpg"
      , properties =
            [ "+ 150% Revive Speed"
            , "- 5% Damage Resistance"
            ]
      , effects = []
      }   
    , { id = 87
      , title = "ROUSING SPEECH"
      , kind = "UTILITY"
      , filename = "3_0_0.jpg"
      , properties =
            [ "+ 225% Revive Speed"
            , "DISABLES: Offensive Accessories"
            , "TEAM EFFECTS + 20% Reduced Incap Trauma"
            ]
      , effects = []
      }   
    , { id = 88
      , title = "DASH"
      , kind = "MOBILITY"
      , filename = "3_0_1.jpg"
      , properties =
            [ "+ 5% Move Speed"
            ]
      , effects = []
      }   
    , { id = 89
      , title = "FLEET OF FOOT"
      , kind = "MOBILITY"
      , filename = "3_0_2.jpg"
      , properties =
            [ "+ 10% Move Speed"
            , "- 5% Damage Resistance"
            ]
      , effects = []
      }   
    , { id = 90
      , title = "RUN LIKE HELL"
      , kind = "MOBILITY"
      , filename = "3_0_3.jpg"
      , properties =
            [ "+ 15% Move Speed"
            , "When you take damage, your Accuracy is reduced by 20% for 3 seconds."
            ]
      , effects = []
      }   
    , { id = 91
      , title = "SUPERIOR CARDIO"
      , kind = "MOBILITY"
      , filename = "3_0_4.jpg"
      , properties =
            [ "+ 20% Stamina"
            , "+ 20% Sprint Efficiency"
            , "+ 5 Health"
            ]
      , effects = []
      }   
    , { id = 92
      , title = "OLYMPIC SPRINTER"
      , kind = "MOBILITY"
      , filename = "3_1_0.jpg"
      , properties =
            [ "+ 30% Sprint Efficiency"
            , "- 5% Damage Resistance"
            ]
      , effects = []
      }   
    , { id = 93
      , title = "RECKLESS"
      , kind = "MOBILITY"
      , filename = "3_1_1.jpg"
      , properties =
            [ "+ 40% Sprint Efficiency"
            , "When you take damage while Sprinting, you lose all Stamina."
            ]
      , effects = []
      }   
    , { id = 94
      , title = "BREAKOUT"
      , kind = "UTILITY"
      , filename = "3_1_2.jpg"
      , properties =
            [ "Breakout: Hold"
            , "E"
            , "to free"
            , "yourself from Grabs."
            , "+ 50% Breakout Cooldown"
            , "Reduction. (Base 60 seconds)."
            ]
      , effects = []
      }   
    , { id = 95
      , title = "СOMBAT MEDIC"
      , kind = "DEFENSE"
      , filename = "3_1_3.jpg"
      , properties =
            [ "+ 50% Use Speed"
            , "Heals teammates for an additional 20 Health when you revive them."
            ]
      , effects = []
      }   
    , { id = 96
      , title = "FIRE IN THE HOLE!"
      , kind = "MOBILITY"
      , filename = "3_1_4.jpg"
      , properties =
            [ "When you throw an Offensive Accessory, gain 20 Temporary Health and 20% Move Speed for 5 seconds."
            ]
      , effects = []
      }   
    , { id = 97
      , title = "MEDICAL EXPERT"
      , kind = "DEFENSE"
      , filename = "4_0_0.jpg"
      , properties =
            [ "+ 15% Healing Efficiency"
            , "When you use a Medical Accessory, you gain 15% Move"
            , "Speed for 15 seconds."
            ]
      , effects = []
      }   
    , { id = 98
      , title = "ROLLING THUNDER"
      , kind = "MOBILITY"
      , filename = "4_0_1.jpg"
      , properties =
            [ "+ 35% Move Speed while firing with Shotguns."
            , "+ 10% Damage with Shotguns."
            ]
      , effects = []
      }   
    , { id = 99
      , title = "SPEED DEMON"
      , kind = "MOBILITY"
      , filename = "4_0_2.jpg"
      , properties =
            [ "+ 6% Move Speed while using an SMG."
            , "+ 35% Reload Speed while using an SMG."
            ]
      , effects = []
      }   
    , { id = 100
      , title = "HELLFIRE"
      , kind = "MOBILITY"
      , filename = "4_0_3.jpg"
      , properties =
            [ "+ 45% Move Speed while firing."
            , "+ 5% Move Speed while not firing."
            ]
      , effects = []
      }   
    , { id = 101
      , title = "MARATHON RUNNER"
      , kind = "MOBILITY"
      , filename = "4_0_4.jpg"
      , properties =
            [ "No Movement Penalty for strafe and backpedal."
            , "DISABLES: Sprint"
            ]
      , effects = []
      }   
    , { id = 102
      , title = "MANDATORY PT"
      , kind = "MOBILITY"
      , filename = "4_1_0.jpg"
      , properties =
            [ "TEAM EFFECTS + 15% Team Stamina"
            ]
      , effects = []
      }   
    , { id = 103
      , title = "PEP IN YOUR STEP"
      , kind = "MOBILITY"
      , filename = "4_1_1.jpg"
      , properties =
            [ "Precision Kills grant you 10%"
            , "Move Speed for 5 seconds."
            ]
      , effects = []
      }   
    , { id = 104
      , title = "SHREDDER"
      , kind = "OFFENSE"
      , filename = "4_1_2.jpg"
      , properties =
            [ "Each bullet hit causes the target to take 1% increased damage for 3 seconds (stacks up to 15% )."
            ]
      , effects = []
      }   
    , { id = 105
      , title = "GLASS CANNON"
      , kind = "OFFENSE"
      , filename = "4_1_3.jpg"
      , properties =
            [ "+ 25% Damage"
            , "- 30% Health"
            ]
      , effects = []
      }   
    , { id = 106
      , title = "SADISTIC"
      , kind = "OFFENSE"
      , filename = "4_1_4.jpg"
      , properties =
            [ "Gain 5% Weakspot Damage for each Precision Kill in the last 10 seconds."
            ]
      , effects = []
      }   
    , { id = 107
      , title = "EVASIVE ACTION"
      , kind = "MOBILITY"
      , filename = "5_0_0.jpg"
      , properties =
            [ "When you take a hit for 10 or more damage, gain 20% Move Speed for 3 seconds."
            ]
      , effects = []
      }   
    , { id = 108
      , title = "ADRENALINE FUELED"
      , kind = "OFFENSE"
      , filename = "5_0_1.jpg"
      , properties =
            [ "+ 100% Stamina"
            , "- 75% Stamina Regeneration"
            , "When you kill an enemy, gain 10 Stamina instantly and an additional 10 Stamina over 5 seconds."
            ]
      , effects = []
      }   
    , { id = 109
      , title = "MIRACULOUS RECOVERY"
      , kind = "DEFENSE"
      , filename = "5_0_2.jpg"
      , properties =
            [ "When you use a Medical Accessory, it has a 25% chance to have 100% increased effect."
            ]
      , effects = []
      }   
    , { id = 110
      , title = "SCREWDRIVER"
      , kind = "UTILITY"
      , filename = "5_0_3.jpg"
      , properties =
            [ "+ 50% Use Speed"
            , "+ 10% Stamina"
            ]
      , effects = []
      }   
    , { id = 111
      , title = "MULTITOOL"
      , kind = "UTILITY"
      , filename = "5_0_4.jpg"
      , properties =
            [ "+ 75% Use Speed"
            , "- 5% Damage Resistance"
            ]
      , effects = []
      }   
    , { id = 112
      , title = "HEADBAND MAGNIFIER"
      , kind = "UTILITY"
      , filename = "5_1_0.jpg"
      , properties =
            [ "+ 125% Use Speed"
            , "When you take damage, you have a chance to be blinded for 1 second."
            ]
      , effects = []
      }   
    , { id = 113
      , title = "UTILITY SCAVENGER"
      , kind = "UTILITY"
      , filename = "5_1_1.jpg"
      , properties =
            [ "You can sense nearby Quick"
            , "Accessories. More Quick Accessories spawn."
            ]
      , effects = []
      }   
    , { id = 114
      , title = "STIMULANTS"
      , kind = "MOBILITY"
      , filename = "5_1_2.jpg"
      , properties =
            [ "Pain Meds you apply also grant"
            , "+ 10% Move Speed, + 10% Reload"
            , "Speed, and + 10% Weapon Swap"
            , "Speed for 30 seconds."
            ]
      , effects = []
      }   
    , { id = 115
      , title = "ON YOUR MARK.."
      , kind = "MOBILITY"
      , filename = "5_1_3.jpg"
      , properties =
            [ "When you exit a starting saferoom your team gains + 15% Move Speed for 30 seconds."
            ]
      , effects = []
      }   
    , { id = 116
      , title = "KILLER'S INSTINCT"
      , kind = "OFFENSE"
      , filename = "5_1_4.jpg"
      , properties =
            [ "+ 30% Weakspot Damage"
            , "DISABLES: Aim Down Sights"
            ]
      , effects = []
      }   
    , { id = 117
      , title = "POWER SWAP"
      , kind = "OFFENSE"
      , filename = "6_0_0.jpg"
      , properties =
            [ "Changing weapons within 0.75 seconds of reaching low ammo grants + 20% Damage for 5 seconds."
            ]
      , effects = []
      }   
    , { id = 118
      , title = "STOCK POUCH"
      , kind = "OFFENSE"
      , filename = "6_0_1.jpg"
      , properties =
            [ "+ 30% Sniper Ammo Capacity"
            , "+ 10% Damage with Sniper Rifles"
            ]
      , effects = []
      }   
    , { id = 119
      , title = "MAG CARRIER"
      , kind = "OFFENSE"
      , filename = "6_0_2.jpg"
      , properties =
            [ "+ 30% Pistol/SMG Ammo Capacity"
            , "+ 10% Damage with Pistols and SMGS"
            ]
      , effects = []
      }   
    , { id = 120
      , title = "MAD DASH"
      , kind = "MOBILITY"
      , filename = "6_0_3.jpg"
      , properties =
            [ "+ 20% Sprint Speed"
            , "- 30% Sprint Stamina Efficiency"
            ]
      , effects = []
      }   
    , { id = 121
      , title = "АММО РOUСH"
      , kind = "OFFENSE"
      , filename = "6_0_4.jpg"
      , properties =
            [ "+ 25% Ammo Сарacity"
            ]
      , effects = []
      }   
    , { id = 122
      , title = "AMMO BELT"
      , kind = "OFFENSE"
      , filename = "6_1_0.jpg"
      , properties =
            [ "+ 50% Ammo Capacity"
            , "- 20% Stamina Efficiency"
            ]
      , effects = []
      }   
    , { id = 123
      , title = "AMMO MULE"
      , kind = "OFFENSE"
      , filename = "6_1_1.jpg"
      , properties =
            [ "+ 75% Ammo Capacity"
            , "DISABLES: Support Accessories"
            ]
      , effects = []
      }   
    , { id = 124
      , title = "FRONT SIGHT FOCUS"
      , kind = "OFFENSE"
      , filename = "6_1_2.jpg"
      , properties =
            [ "+ 20% Accuracy"
            ]
      , effects = []
      }   
    , { id = 125
      , title = "OPTICS ENTHUSIAST"
      , kind = "OFFENSE"
      , filename = "6_1_3.jpg"
      , properties =
            [ "+ 30% Accuracy"
            , "- 20% Stamina Efficiency"
            ]
      , effects = []
      }   
    , { id = 126
      , title = "QUICK KILL"
      , kind = "OFFENSE"
      , filename = "6_1_4.jpg"
      , properties =
            [ "+ 50% Accuracy"
            , "DISABLES: Aim Down Sights"
            ]
      , effects = []
      }   
    , { id = 127
      , title = "MOTORCYCLE JACKET"
      , kind = "DEFENSE"
      , filename = "7_0_0.jpg"
      , properties =
            [ "+ 5% Damage Resistance"
            , "+ 5 Health"
            ]
      , effects = []
      }   
    , { id = 128
      , title = "PADDED SUIT"
      , kind = "DEFENSE"
      , filename = "7_0_1.jpg"
      , properties =
            [ "+ 10% Damage Resistance"
            , "+ 5 Health"
            , "- 20% Stamina Efficiency"
            ]
      , effects = []
      }   
    , { id = 129
      , title = "MOTORCYCLE HELMET"
      , kind = "DEFENSE"
      , filename = "7_0_2.jpg"
      , properties =
            [ "+ 15% Damage Resistance"
            , "+ 10 Health"
            , "DISABLES: Aim Down Sights"
            ]
      , effects = []
      }   
    , { id = 130
      , title = "COMBAT TRAINING"
      , kind = "OFFENSE"
      , filename = "7_0_3.jpg"
      , properties =
            [ "+ 5% Bullet Damage"
            , "+ 50% Bullet Penetration"
            ]
      , effects = []
      }   
    , { id = 131
      , title = "LARGE CALIBER ROUNDS"
      , kind = "OFFENSE"
      , filename = "7_0_4.jpg"
      , properties =
            [ "+ 7.5% Bullet Damage"
            , "+ 100% Bullet Penetration"
            , "- 20% Stamina Efficiency"
            ]
      , effects = []
      }   
    , { id = 132
      , title = "SILVER BULLETS"
      , kind = "OFFENSE"
      , filename = "7_1_0.jpg"
      , properties =
            [ "+ 10% Bullet Damage"
            , "+ 150% Bullet Penetration"
            , "When you kill a Mutation, you lose 5 Copper."
            ]
      , effects = []
      }   
    , { id = 133
      , title = "ANTIBIOTIC OINTMENT"
      , kind = "DEFENSE"
      , filename = "7_1_1.jpg"
      , properties =
            [ "+ 20% Healing Efficiency"
            ]
      , effects = []
      }   
    , { id = 134
      , title = "EMT BAG"
      , kind = "DEFENSE"
      , filename = "7_1_2.jpg"
      , properties =
            [ "+ 40% Healing Efficiency"
            , "- 20% Stamina Efficiency"
            ]
      , effects = []
      }   
    , { id = 135
      , title = "FIELD SURGEON"
      , kind = "DEFENSE"
      , filename = "7_1_3.jpg"
      , properties =
            [ "+ 60% Healing Efficiency"
            , "- 50% Use Speed"
            ]
      , effects = []
      }   
    , { id = 136
      , title = "ENERGY BAR"
      , kind = "MOBILITY"
      , filename = "7_1_4.jpg"
      , properties =
            [ "+ 20% Stamina Regeneration"
            , "+ 5 Health"
            ]
      , effects = []
      }   
    , { id = 137
      , title = "COLD BREW COFFEE"
      , kind = "MOBILITY"
      , filename = "8_0_0.jpg"
      , properties =
            [ "+ 40% Stamina Regeneration"
            , "- 10% Stamina Efficiency"
            ]
      , effects = []
      }   
    , { id = 138
      , title = "NATURAL SPRINTER"
      , kind = "MOBILITY"
      , filename = "8_0_1.jpg"
      , properties =
            [ "+ 100% Stamina Regeneration"
            , "- 50% Maximum Stamina"
            ]
      , effects = []
      }   
    , { id = 139
      , title = "INSPIRING SACRIFICE"
      , kind = "DEFENSE"
      , filename = "8_0_2.jpg"
      , properties =
            [ "TEAM EFFECTS When you or a teammate becomes incapacitated, all teammates heal for 20 health over 15 seconds."
            ]
      , effects = []
      }   
    , { id = 140
      , title = "CHARITABLE SOUL"
      , kind = "DEFENSE"
      , filename = "8_0_3.jpg"
      , properties =
            [ "Healing a teammate also applies 50% of the effect to you."
            ]
      , effects = []
      }   
    , { id = 141
      , title = "HUNKER DOWN"
      , kind = "DEFENSE"
      , filename = "8_0_4.jpg"
      , properties =
            [ "While crouching, gain 10% Damage Resistance and 40% Асcuracy."
            ]
      , effects = []
      }   
    , { id = 142
      , title = "AVENGE THE FALLEN"
      , kind = "OFFENSE"
      , filename = "8_1_0.jpg"
      , properties =
            [ "TEAM EFFECTS When you or a teammate becomes incapacitated, all teammates gain 30% Damage, 20% Reload Speed, and Unlimited Ammo for 10 seconds."
            ]
      , effects = []
      }   
    , { id = 143
      , title = "VANGUARD"
      , kind = "DEFENSE"
      , filename = "8_1_1.jpg"
      , properties =
            [ "Melee kills grant 1 Temporary Health to you and nearby teammates."
            ]
      , effects = []
      }   
    , { id = 144
      , title = "IN THE ZONE"
      , kind = "OFFENSE"
      , filename = "8_1_2.jpg"
      , properties =
            [ "Precision Kills grant 5% Reload Speed for 5 seconds (stacking up to 10 times)."
            ]
      , effects = []
      }   
    , { id = 145
      , title = "TRIGGER CONTROL"
      , kind = "OFFENSE"
      , filename = "8_1_3.jpg"
      , properties =
            [ "+ 25% Accuracy with Assault Rifles and Sniper Rifles."
            ]
      , effects = []
      }   
    , { id = 146
      , title = "NEEDS OF THE MANY"
      , kind = "DEFENSE"
      , filename = "8_1_4.jpg"
      , properties =
            [ "- 20% Health"
            , "TEAM EFFECTS + 1 Team Extra Life"
            ]
      , effects = []
      }   
    , { id = 147
      , title = "COMBAT KNIFE"
      , kind = "OFFENSE"
      , filename = "9_0_0.jpg"
      , properties =
            [ "Turns your Bash into a Knife that counts as a Melee weapon."
            ]
      , effects = []
      }   
    , { id = 148
      , title = "MEATGRINDER"
      , kind = "OFFÉNSE"
      , filename = "9_0_1.jpg"
      , properties =
            [ "Gain 30% Move Speed and Accuracy while crouched and using an LMG."
            ]
      , effects = []
      }   
    , { id = 149
      , title = "SCATTERGUN SKILLS"
      , kind = "OFFENSE"
      , filename = "9_0_2.jpg"
      , properties =
            [ "+ 40% Reload Speed with Shotguns."
            ]
      , effects = []
      }   
    , { id = 150
      , title = "CONTROLLED MOVEMENT"
      , kind = "MOBILITY"
      , filename = "9_0_3.jpg"
      , properties =
            [ "+ 40% Move Speed while aiming down sights with Sniper Rifles."
            ]
      , effects = []
      }   
    , { id = 151
      , title = "AMMO FOR ALL"
      , kind = "OFFENSE"
      , filename = "9_0_4.jpg"
      , properties =
            [ "TEAM EFFECTS + 10% Team Ammo Capacity"
            ]
      , effects = []
      }   
    , { id = 152
      , title = "DOWN IN FRONT!"
      , kind = "DEFENSE"
      , filename = "9_1_0.jpg"
      , properties =
            [ "While crouching you neither take nor deal Friendly Fire damage."
            , "+ 10 Health"
            ]
      , effects = []
      }   
    , { id = 153
      , title = "POULTICE"
      , kind = "DEFENSE"
      , filename = "9_1_1.jpg"
      , properties =
            [ "When you use a Medical Accessory, the target heals for an additional 20 Health over 30 seconds."
            ]
      , effects = []
      }   
    , { id = 154
      , title = "GROUP THERAPY"
      , kind = "DEFENSE"
      , filename = "9_1_2.jpg"
      , properties =
            [ "When you use a Medical Accessory, all teammates heal for 5 Health."
            ]
      , effects = []
      }   
    , { id = 155
      , title = "MEDICAL PROFESSIONAL"
      , kind = "DEFENSE"
      , filename = "9_1_3.jpg"
      , properties =
            [ "First Aids and Defibrillators also recover 15 Trauma Damage and 1 Extra Life."
            ]
      , effects = []
      }   
    , { id = 156
      , title = "AMMO SCAVENGER"
      , kind = "UTILITY"
      , filename = "9_1_4.jpg"
      , properties =
            [ "You can sense nearby Ammo. More Ammo spawns."
            ]
      , effects = []
      }   
    ]


cards : List Card
cards =
    rawCards
        |> List.map
            (\raw ->
                { id = raw.id
                , title = raw.title
                , properties = raw.properties |> List.map Property
                , kind =
                    case raw.kind |> String.toLower of
                        "utility" ->
                            Utility

                        "offense" ->
                            Offense

                        "defense" ->
                            Defense

                        "mobility" ->
                            Mobility

                        _ ->
                            Unknown
                , effects = raw.effects
                , filename = raw.filename
                }
            )
