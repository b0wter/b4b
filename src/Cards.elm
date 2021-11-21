module Cards exposing (..)

import Tags exposing (..)


type alias Property =
    { description : String
    }


type Kind
    = Reflex
    | Discipline
    | Brawn
    | Fortune
    | Unknown


type alias CardId =
    Int


type alias RawCard =
    { title : String
    , properties : List String
    , kind : String
    , effects : List Effect
    }


type alias Card =
    { id : CardId
    , title : String
    , properties : List Property
    , kind : Kind
    , effects : List Effect
    }


rawCards : List RawCard
rawCards =
    [ { title = "Adrenaline Fueled "
      , properties =
            [ "+ 100% Stamina"
            , "- 75% Stamina Regeneration"
            , "When you kill an enemy, gain 10 Stamina instantly and an additional 10 Stamina over 5 seconds."
            ]
      , kind = "Reflex"
      , effects =
            [ Passive Stamina (RelativeMax 100)
            , Passive StaminaRegeneration (RelativeMax 75)
            , Triggered KillEnemy
                (Twin
                    (Once Stamina (AbsoluteCurrent 10))
                    (OverTime 5 (Once Stamina (AbsoluteCurrent 10)))
                )
            ]
      }
    , { title = "Brazen "
      , properties =
            [ "+30% melee stamina efficiency"
            , "+30% melee attack speed"
            , "-5% damage resistance"
            ]
      , kind = "Reflex"
      , effects =
            [ Passive MeleeStaminaEfficiency (RelativeMax 40)
            , Passive MeleeAttackSpeed (RelativeMax 30)
            , Passive DamageResistance (RelativeMax -5)
            ]
      }
    , { title = "Breakout "
      , properties =
            [ "Allows you to free yourself from grabs"
            , "+50% breakout cooldown reduction"
            ]
      , kind = "Reflex"
      , effects =
            [ Special "Allows you to free yourself from grabs"
            , Special "+50% breakout cooldown reduction"
            ]
      }
    , { title = "Cocky "
      , properties =
            [ "+75% weapon swap speed"
            , "When you take damage your accuracy is reduced by 20% for 3 seconds"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Combat Medic "
      , properties =
            [ "Teammates healed by an additional 20 health when revived"
            , "+50 use speed"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Cross Trainers "
      , properties =
            [ "+20% stamina"
            , "+20% stamina regen"
            , "+3% move speed"
            , "5 health"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Dash "
      , properties =
            [ "+5% move speed"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Energy Drink "
      , properties =
            [ "+40% stamina"
            , "-5% damage resistance "
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Evasive Action "
      , properties =
            [ "Gain a 20% movement speed boost for three seconds when you take a hit of 10 or more"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Fire in the Hole! "
      , properties =
            [ "Gain 20 temporary health and 20% movement speed for five seconds after throwing an offensive item"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Fire in the Hole! "
      , properties =
            [ "When you throw an Offensive Accessory"
            , "gain 20 temporary health and 20% move speed for 5 seconds."
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Fleet Of Foot "
      , properties =
            [ "+10% move speed"
            , "-5% damage resistance"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Glass Cannon "
      , properties =
            [ "+25% damage"
            , "-30% health"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Guns Out "
      , properties =
            [ "+50% weapon swap speed"
            , "-5% damage resistance"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Headband Magnifier "
      , properties =
            [ "+125% use speed"
            , "when you take damage"
            , "you have a chance to be binded for 1 second"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Hellfire "
      , properties =
            [ "+45% move speed while firing"
            , "+5% move speed while not firing"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Hi Vis Sights "
      , properties =
            [ "+30% aim speed"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Hyper-Focused "
      , properties =
            [ "+50% weakspot damage"
            , "-75% ADS Move Speed"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Killer’s Instinct "
      , properties =
            [ "+30% weakspot damage"
            , "disables aim down sights"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Mad Dash "
      , properties =
            [ "+20% sprint speed"
            , "-30% stamina efficiency"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Mag Carrier "
      , properties =
            [ "+30% pistol/SMG ammo capacity"
            , "+10% damage with pistols and SMGs"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Mag Coupler "
      , properties =
            [ "+50% reload speed"
            , "disables aim down sights"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Mandatory PT "
      , properties =
            [ "Team Effect: +15% team stamina"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Marathon Runner "
      , properties =
            [ "No movement penalty for strafe and backpedal"
            , "disables Sprint"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Medical Expert "
      , properties =
            [ "+15 healing efficiency"
            , "plus +15% movement speed for 15 seconds when you use a medical accessory"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Meth Head "
      , properties =
            [ "40% melee attack speed"
            , "+40% melee stamina efficiency"
            , "Your melee attacks no longer stick in tough enemies"
            , "disables aim down sights"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Miraculous Recovery "
      , properties =
            [ "A medical accessory has a 25% chance of having a 100% increased effect"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Multitool "
      , properties =
            [ "75% use speed"
            , "-5% damage resistance"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "On Your Mark… "
      , properties =
            [ "When you exit a starting saferoom your team gains +15% move speed for 30 seconds"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Olympic Sprinter "
      , properties =
            [ "+30% sprint efficiency"
            , "-5% damage resistance"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Pep in your Step "
      , properties =
            [ "Precision Kills grant 10% movement speed for five seconds"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Pep Talk "
      , properties =
            [ "+150% revive speed"
            , "-5% damage resistance"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Power Swap "
      , properties =
            [ "Changing weapons within 0.75 seconds of hitting low ammo grants +20% damage for five seconds"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Reckless "
      , properties =
            [ "+40% sprint efficiency"
            , "When you take damage while sprinting"
            , "you lose all your stamina"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Reckless Strategy "
      , properties =
            [ "+30% weakspot damage"
            , "-5% damage resistance"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Reload Drills "
      , properties =
            [ "+30% reload speed"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Rhythmic Breathing "
      , properties =
            [ "+60% stamina"
            , "-20% slow resistance"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Ridden Slayer "
      , properties =
            [ "+20% weak spot damage"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Rolling Thunder "
      , properties =
            [ "+6% move speed while using an SMG"
            , "+35% reload speed while using an SMG"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Rousing Speech "
      , properties =
            [ "+225% revive speed"
            , "disables offensive accessories"
            , "Team Effect: +20% reduced incap trauma"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Run Like Hell "
      , properties =
            [ "+15% move speed"
            , "When you take damage your accuracy is reduced by 20% for 3 seconds"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Sadistic "
      , properties =
            [ "Gain 5% weakspot damage for each precision kill in the last 10 seconds"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Screwdriver "
      , properties =
            [ "+50% use speed"
            , "+10% stamina"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Shooting Gloves "
      , properties =
            [ "+25% weapon swap speed"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Shredder "
      , properties =
            [ "Each bullet hit causes the target to take 1% increased damage for 3 seconds (stacks up to 15%)"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Slugger "
      , properties =
            [ "+5 health"
            , "+10% melee stamina efficiency"
            , "+20% melee attack speed"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Smelling Salts "
      , properties =
            [ "+100% revive speed"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Speed Demon "
      , properties =
            [ "+6% move speed while using an SMG"
            , "+35% reload speed while using an SMG"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Stamina "
      , properties =
            [ "+10% Stamina"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Steady Aim "
      , properties =
            [ "+80% aim speed"
            , "-50% ADS move speed"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Stimulants "
      , properties =
            [ "Pain meds grant +10% movement speed"
            , "10% reload speed"
            , "and 10% weapon swap speed for 30 seconds"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Stock Pouch "
      , properties =
            [ "+30% sniper ammo capacity"
            , "+10% damage with sniper rifles"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Superior Cardio "
      , properties =
            [ "+50% sprint efficiency"
            , "+5 health"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Tunnel Vision "
      , properties =
            [ "+50% aim speed"
            , "-5% damage resistance"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Utility Scavenger "
      , properties =
            [ "You can sense nearby quick accessories"
            , "more quick accessories spawn"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Widemouth Magwell "
      , properties =
            [ "+30% reload speed"
            , "-5% damage resistance"
            ]
      , kind = "Reflex"
      , effects = []
      }
    , { title = "Ammo"
      , properties =
            [ "+10% ammo"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Ammo Belt"
      , properties =
            [ "+50% ammo capacity"
            , "-20% stamina efficiency"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Ammo For All"
      , properties =
            [ "Team Effect: +10% team ammo capacity"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Ammo Mule"
      , properties =
            [ "75% ammo capacity"
            , "disables support accessories"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Ammo Pouch"
      , properties =
            [ "+25% ammo capacity"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Ammo Scavenger"
      , properties =
            [ "You can sense nearby ammo"
            , "more ammo spawns"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Amped Up"
      , properties =
            [ "When you exit a starting saferoom your team gains 50 temporary health"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Antibiotic Ointment"
      , properties =
            [ "+20% healing efficiency"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Avenge The Fallen"
      , properties =
            [ "Team Effect: When you or a teammate becomes incapacitated"
            , "all teammates gain 30% damage"
            , "20% reload speed and unlimited ammo for 10 seconds."
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Charitable Soul"
      , properties =
            [ "Heals granted to a teammate will also apply 50% of the effect to you"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Cold Brew Coffee"
      , properties =
            [ "+40% stamina regeneration"
            , "-10% stamina efficiency"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Combat Knife"
      , properties =
            [ "Turns your Bash into a Knife that counts as a Melee weapon."
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Combat Training"
      , properties =
            [ "+5% damage dealt"
            , "+50% bullet penetration"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Controlled Movement"
      , properties =
            [ "+40% move speed while aiming down sights with sniper rifles"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Down In Front!"
      , properties =
            [ "While crouching you neither take nor deal Friendly Fire damage"
            , "+10 health"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "EMT Bag"
      , properties =
            [ "+40% healing efficiency"
            , "-20% stamina efficiency"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Energy Bar"
      , properties =
            [ "+20% stamina regeneration"
            , "5 health"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Experienced EMT"
      , properties =
            [ "Medical accessories will grant +20% maximum health until the end of the level"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Field Surgeon"
      , properties =
            [ "+60% healing efficiency"
            , "-50% use speed"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Front Sight Focus"
      , properties =
            [ "+20% accuracy"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Group Therapy"
      , properties =
            [ "All teammates heal for 5 health when a medical accessory is used"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Hunker Down"
      , properties =
            [ "+10% damage resistance and +40% accuracy when crouching"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "In the Zone"
      , properties =
            [ "+5% reload speed for five seconds (can be stacked ten times) when getting precision kills"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Inspiring Sacrifice"
      , properties =
            [ "Team Effect: All teammates heal for 25 health over twenty seconds if someone is incapacitated"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Knowledge Is Power"
      , properties =
            [ "+10% weakspot damage"
            , "allows players to see values for damage they deal and enemy health bars"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Large Caliber Rounds"
      , properties =
            [ "+7.5% bullet damage"
            , "+100% bullet penetration"
            , "-20% stamina efficiency"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Marked for Death"
      , properties =
            [ "+10% damage to pinged mutations and mutations are highlighted"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Meat Grinder"
      , properties =
            [ "Gain 30% move speed and accuracy while crouched and using an LMG"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Medical Professional"
      , properties =
            [ "First Aids and Defibrillators recover 15 trauma damage and one extra life"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Motorcycle Helmet"
      , properties =
            [ "+15% damage resistance"
            , "+10 health"
            , "disables aim down sights"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Motorcycle Jacket"
      , properties =
            [ "+5% damage resistance"
            , "+5 health"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Natural Sprinter"
      , properties =
            [ "+100% stamina regeneration"
            , "-50% maximum stamina"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Needs Of The Many"
      , properties =
            [ "-20% health"
            , "Team Effect: +1 team extra life"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Optics Enthusiast"
      , properties =
            [ "+30% accuracy"
            , "-20% stamina efficiency"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Padded Suit"
      , properties =
            [ "+10% damage resistance"
            , "+5 health"
            , "-20% stamina efficiency"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Patient Hunter"
      , properties =
            [ "+10% damage for each second aimed down sights (can be stacked three times)"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Poultice"
      , properties =
            [ "Teammate gains +20 health over 30 seconds when healed"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Power Reload"
      , properties =
            [ "Reloading a gun within 0.75 seconds of hitting low ammo grants +30% mag capacity until the next reload"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Quick Kill"
      , properties =
            [ "+50% accuracy"
            , "disables aim down sights"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Scattergun Skills"
      , properties =
            [ "+40% reload speed with shotguns"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Silver Bullets"
      , properties =
            [ "+10% bullet damage"
            , "+150% bullet penetration"
            , "when you kill a Mutation"
            , "you lose 5 copper"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Support Scavenger"
      , properties =
            [ "You can sense nearby support accessories"
            , "more support accessories spawn"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Tactical Vest"
      , properties =
            [ "+30% rifle ammo capacity"
            , "+10% damage with assault rifles and LMGs"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Trigger Control"
      , properties =
            [ "+25% accuracy with assault rifles and sniper rifles."
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Vanguard"
      , properties =
            [ "Melee kills grant 1 temporary health to you and nearby teammates"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Weapon Scavenger"
      , properties =
            [ "You can sense nearby weapons"
            , "more weapons spawn"
            ]
      , kind = "Discipline"
      , effects = []
      }
    , { title = "Batter Up"
      , properties =
            [ "+50% melee damage"
            , "+5 health"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Battle Lust"
      , properties =
            [ "Melee kills heal two health"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Berserker"
      , properties =
            [ "Gain 10% melee damage"
            , "10% melee speed"
            , "and 5% move speed for each melee kill in the last 4 seconds"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Body Armor"
      , properties =
            [ "+25% trauma resistance"
            , "-15% ammo capacity"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Bomb Squad"
      , properties =
            [ "+100% explosive damage"
            , "35+ explosive resistance"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Broadside"
      , properties =
            [ "Precision kills have a 20% chance to cause Ridden to explode"
            , "dealing 15 damage to other Ridden within 4 meters"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Buckshot Bruiser"
      , properties =
            [ "When using Shotguns"
            , "gain temporary health for each pellet that hits."
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Canned Goods"
      , properties =
            [ "+40 health"
            , "-30% stamina"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Chemical Courage"
      , properties =
            [ "Pain meds grant +25% damage for 60 seconds"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Confident Killer"
      , properties =
            [ "+1% damage (up to 15%) every time you kill a mutation until the end of the level"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Demolitions Expert"
      , properties =
            [ "+50% accessory damage"
            , "-15% ammo capacity"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Durable"
      , properties =
            [ "+15% trauma resistance"
            , "+5 health"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Face Your Fears"
      , properties =
            [ "+3 temporary health when you kill a Ridden within two metres"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Fresh Bandage"
      , properties =
            [ "heal 10 trauma damage at the start of each level"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Grenade Training"
      , properties =
            [ "+25% accessory damage"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Health"
      , properties =
            [ "+5 health"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Heavy Attack"
      , properties =
            [ "Hold R2 with Melee weapons to burst forward"
            , "charge attacks deal 100% increased damage"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Heavy Hitter"
      , properties =
            [ "Melee hits against weakspots deal +20% additional atumble damage"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Hydration Pack"
      , properties =
            [ "+25% health"
            , "-15% ammo capacity"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Ignore The Pain"
      , properties =
            [ "+20% melee damage against Mutations"
            , "when you deal melee damage to a mutation gain 1 temporary health and recover 3 stamina"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Improvised Explosives"
      , properties =
            [ "+75% accessory damage"
            , "-25% swap speed"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Line ‘Em Up"
      , properties =
            [ "+100% bullet penetration with assault rifles"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Mean Drunk"
      , properties =
            [ "+75% melee damage"
            , "your melee attacks cause cleave through enemies dealing damage in a large area"
            , "disables sprint"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Numb"
      , properties =
            [ "+15% damage resistance while you have temporary health"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Offensive Scavenger"
      , properties =
            [ "You can sense nearby offensive accessories"
            , "more offensive accessories spawn"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Overwatch"
      , properties =
            [ "Kills at more than 15 metres grants five temporary health to nearby allies within 10 meters of the target"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Pyro"
      , properties =
            [ "+100% fire damage"
            , "kills with fire grant you 3 temporary health"
            , "you can sense flammable objects nearby"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Scar Tissue"
      , properties =
            [ "Reduces the damage taken by all Ridden by one"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Second Chance"
      , properties =
            [ "+1 extra life"
            , "+5 health"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Spiky Bits"
      , properties =
            [ "+25% melee damage"
            , "+10% damage resistance while using a melee weapon"
            , "-15% ammo capacity"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Sunder"
      , properties =
            [ "Melee hits cause the target to take 20% increased damage for 5 seconds"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "True Grit"
      , properties =
            [ "+8 health over five seconds when hit for 15 or more damage"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Two is One and One is None"
      , properties =
            [ "Grants the ability to equip a second primary"
            , "-25% weapon swap speed"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Vitamins"
      , properties =
            [ "+15 health"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Well Fed"
      , properties =
            [ "-20% stamina regen"
            , "Team Effect: team health +10"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Wooden Armor"
      , properties =
            [ "+40% trauma resistance"
            , "-100%fire resistance"
            , "-100% acid resistance"
            , "-100% explosion resistance"
            ]
      , kind = "Brawn"
      , effects = []
      }
    , { title = "Card name"
      , properties =
            [ "Description"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Admin Reload"
      , properties =
            [ "When you stow your weapon"
            , "it reloads"
            , "-15% ammo capacity"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Ammo Stash"
      , properties =
            [ "Secondary weapons have unlimited ammo"
            , "your secondary weapon reload is 20% slower"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Bounty Hunter"
      , properties =
            [ "When you kill a Mutation"
            , "gain 10 copper (up to 300 per level)"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Box O’ Bags"
      , properties =
            [ "-10% health"
            , "Team Effect: +1 team support inventory"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Compound Interest"
      , properties =
            [ "Gain 10% of your total copper in each saferoom"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Copper Scavenger"
      , properties =
            [ "You can sense nearby Copper"
            , "more Copper piles spawn"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Double Grenade Pouch"
      , properties =
            [ "+2 offensive inventory"
            , "-10% damage dealt"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Fanny Pack"
      , properties =
            [ "+1 support inventory"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Fortune"
      , properties =
            [ "Gain 25 to 50 Copper at the start of each level"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Grenade Pouch"
      , properties =
            [ "+1 offensive inventory"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Hazard Pay"
      , properties =
            [ "Gain 250% bonus copper at the start of each level"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Highwayman"
      , properties =
            [ "Pistol kills have a 2% chance to spawn ammo"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Life Insurance"
      , properties =
            [ "+2 extra life"
            , "lose 50 copper at the start of each level"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Lucky Pennies"
      , properties =
            [ "whenever you or your team loots copper you have a 35% chance to find 35% additional copper"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Money Grubbers"
      , properties =
            [ "Each time your team loots copper you gain 5 additional copper"
            , "stacking up to 100 additional copper."
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Mugger"
      , properties =
            [ "Melee kills have a 2% chance to spawn ammo"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Run and Gun"
      , properties =
            [ "You can shoot while sprinting"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Saferoom Recovery"
      , properties =
            [ "Your team heals 5 trauma damage and refills 10% ammo at the start of each level"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Share The Wealth"
      , properties =
            [ "Each teammate gains 100 bonus copper at the start of each level"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Shell Carrier"
      , properties =
            [ "+30% shotgun ammo capacity"
            , "+10% damage with shotguns"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Shoulder Bag"
      , properties =
            [ "+2 support inventory"
            , "-10% damage dealt"
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Surplus Pouches"
      , properties =
            [ "-10% health"
            , "Team Effect: +1 team offensive inventory "
            ]
      , kind = "Fortune"
      , effects = []
      }
    , { title = "Wounded Animal"
      , properties =
            [ "Kills while at critical health recover 1 health"
            ]
      , kind = "Fortune"
      , effects = []
      }
    ]


cards : List Card
cards =
    rawCards
        |> List.indexedMap
            (\index raw ->
                { id = index
                , title = raw.title
                , properties = raw.properties |> List.map Property
                , kind =
                    case raw.kind |> String.toLower of
                        "reflex" ->
                            Reflex

                        "discipline" ->
                            Discipline

                        "brawn" ->
                            Brawn

                        "fortune" ->
                            Fortune

                        _ ->
                            Unknown
                , effects = raw.effects
                }
            )
