module CardData exposing (..)

import Tags exposing (..)


type alias RawSupplyLine =
    { track : String
    , name : String
    , tier : Int
    , index : Int
    }


type alias RawCard =
    { id : Int
    , name : String
    , cost : Int
    , totalCost : Int
    , filename : String
    , properties : List String
    , supplyLine : RawSupplyLine
    , kind : String
    , affinity : String
    , effects : List Effect
    }


rawCards : List RawCard
rawCards =
    [ { id = 1
      , name = "Combat Training"
      , cost = 30
      , totalCost = 30
      , filename = "7_0_3.jpg"
      , properties =
            [ "+5% Bullet Damage"
            , "+1 Bullet Stumble"
            , "+5 Melee Stumble"
            ]
      , effects =
            [ Passive BulletDamage (RelativeMax 5)
            , Passive BulletStumble (AbsoluteMax 1)
            , Passive MeleeStumble (AbsoluteMax 5)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 1
            , index = 1
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 2
      , name = "Ammo Belt"
      , cost = 45
      , totalCost = 75
      , filename = "6_1_0.jpg"
      , properties =
            [ "+50% Ammo Capacity"
            , "-20% Stamina Efficiency"
            ]
      , effects =
            [ Passive AmmoCapacity (RelativeMax 50)
            , Passive StaminaEfficiency (RelativeMax -20)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 1
            , index = 2
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 3
      , name = "HI Vis Sights"
      , cost = 30
      , totalCost = 105
      , filename = "2_0_2.jpg"
      , properties =
            [ "+30% Aim Speed"
            ]
      , effects =
            [ Passive AimSpeed (RelativeMax 30)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 1
            , index = 3
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 4
      , name = "Front Sight Focus"
      , cost = 30
      , totalCost = 140
      , filename = "6_1_2.jpg"
      , properties =
            [ "+20% Accuracy"
            ]
      , effects =
            [ Passive Accuracy (RelativeMax 30)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 1
            , index = 4
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 5
      , name = "Grenade Pouch"
      , cost = 30
      , totalCost = 170
      , filename = "14_0_4.jpg"
      , properties =
            [ "+1 Offensive Inventory"
            ]
      , effects =
            [ Passive OffensiveAccessoryCount (AbsoluteMax 1)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 1
            , index = 5
            }
      , kind = "Offense"
      , affinity = "Fortune"
      }
    , { id = 6
      , name = "Ammo for All"
      , cost = 100
      , totalCost = 270
      , filename = "9_0_4.jpg"
      , properties =
            [ "TEAM EFFECTS +10% Team Ammo Capacity"
            ]
      , effects =
            [ Team (Passive AmmoCapacity (RelativeMax 10))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 1
            , index = 6
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 7
      , name = "Large Caliber Rounds"
      , cost = 45
      , totalCost = 320
      , filename = "7_0_4.jpg"
      , properties =
            [ "+7.5% Bullet Damage"
            , "+200% Bullet Penetration"
            ]
      , effects =
            [ Passive BulletDamage (RelativeMax 7.5)
            , Passive BulletPenetration (RelativeMax 200)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 1
            , index = 7
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 8
      , name = "Widemouth Magwell"
      , cost = 45
      , totalCost = 370
      , filename = "1_0_4.jpg"
      , properties =
            [ "+30% Reload Speed"
            , "-5% Damage Resistance"
            ]
      , effects =
            [ Passive ReloadSpeed (RelativeMax 30)
            , Passive DamageResistance (RelativeMax -5)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 1
            , index = 8
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 9
      , name = "Offensive Scavenger"
      , cost = 100
      , totalCost = 475
      , filename = "13_1_3.jpg"
      , properties =
            [ "You can sense nearby Offensive Accessories."
            , "More Offensive Accessories spawn."
            ]
      , effects =
            [ Special "You can sense nearby Offensive Accessories."
            , Special "More Offensive Accessories spawn."
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 1
            , index = 9
            }
      , kind = "Utility"
      , affinity = "Brawn"
      }
    , { id = 10
      , name = "Ammo Mule"
      , cost = 70
      , totalCost = 550
      , filename = "6_1_1.jpg"
      , properties =
            [ "+75% Ammo Capacity"
            , "-5% Move Speed"
            ]
      , effects =
            [ Passive AmmoCapacity (RelativeMax 75)
            , Passive MoveSpeed (RelativeMax -5)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 1
            , index = 10
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 11
      , name = "Grenade Training"
      , cost = 30
      , totalCost = 585
      , filename = "11_1_3.jpg"
      , properties =
            [ "+25% Accessory Damage"
            ]
      , effects =
            [ Passive AccessoryDamage (RelativeMax 25)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 1
            , index = 11
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 12
      , name = "Optics Enthusiast"
      , cost = 45
      , totalCost = 630
      , filename = "6_1_3.jpg"
      , properties =
            [ "+30% Accuracy"
            , "-20% Stamina Efficiency"
            ]
      , effects =
            [ Passive Accuracy (RelativeMax 30)
            , Passive StaminaEfficiency (RelativeMax -20)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 1
            , index = 12
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 13
      , name = "Batter Up"
      , cost = 30
      , totalCost = 660
      , filename = "11_0_2.jpg"
      , properties =
            [ "+40% Melee Damage"
            , "+5 Health"
            ]
      , effects =
            [ Passive MeleeDamage (RelativeMax 40)
            , Passive Health (AbsoluteMax 5)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 1
            , index = 13
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 14
      , name = "Avenge The Fallen"
      , cost = 100
      , totalCost = 765
      , filename = "8_1_0.jpg"
      , properties =
            [ "TEAM EFFECTS When you or a teammate becomes incapacitated, all teammates gain 30% Damage,20% Reload Speed, and Unlimited Ammo for 10 seconds."
            ]
      , effects =
            [ Team
                (Triggered
                    (OnIncapacitated SelfOrTeammate)
                    (Many
                        [ Timed (ForSeconds 10) (Once Damage (RelativeMax 30))
                        , Timed (ForSeconds 10) (Once ReloadSpeed (RelativeMax 20))
                        , Timed (ForSeconds 10) (Special "Unlimited ammo")
                        ]
                    )
                )
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 1
            , index = 14
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 15
      , name = "Patient Hunter"
      , cost = 70
      , totalCost = 840
      , filename = "10_0_3.jpg"
      , properties =
            [ "Each 0.75 seconds you Aim Down Sights increase your Damage by 10% (up to 3 stacks)."
            ]
      , effects =
            [ While PlayerAimingDownSights (Special "Each 0.75 seconds you Aim Down Sights increases your Damage by 10% (up to 3 stacks).")
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 1
            , index = 15
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 16
      , name = "Double Grenade Pouch"
      , cost = 45
      , totalCost = 890
      , filename = "14_1_0.jpg"
      , properties =
            [ "+2 Offensive Inventory"
            , "-10% Damage Dealt"
            ]
      , effects =
            [ Passive OffensiveAccessoryCount (AbsoluteMax 2)
            , Passive Damage (RelativeMax -10)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 2
            , index = 16
            }
      , kind = "Offense"
      , affinity = "Fortune"
      }
    , { id = 17
      , name = "Down in Front!"
      , cost = 100
      , totalCost = 95
      , filename = "9_1_0.jpg"
      , properties =
            [ "While crouching you neither take nor deal Friendly Fire damage."
            , "+10 Health"
            ]
      , effects =
            [ While PlayerCrouching (Disables TakingFriendlyFire)
            , While PlayerCrouching (Disables DealingFriendlyFire)
            , Passive Health (AbsoluteMax 10)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 2
            , index = 17
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 18
      , name = "Demolitions Expert"
      , cost = 45
      , totalCost = 1040
      , filename = "11_1_4.jpg"
      , properties =
            [ "+50% Accessory Damage"
            , "-15% Ammo Capacity"
            ]
      , effects =
            [ Passive AccessoryDamage (RelativeMax 50)
            , Passive AmmoCapacity (RelativeMax -15)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 2
            , index = 18
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 19
      , name = "Mag Coupler"
      , cost = 70
      , totalCost = 1110
      , filename = "1_1_0.jpg"
      , properties =
            [ "+50% Reload Speed"
            , "DISABLES: Aim Down Sights"
            ]
      , effects =
            [ Passive ReloadSpeed (RelativeMax 50)
            , Disables AimingDownSights
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 2
            , index = 19
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 20
      , name = "Two is One and One is None"
      , cost = 100
      , totalCost = 1215
      , filename = "13_1_2.jpg"
      , properties =
            [ "You can equip a Primary weapon in your Secondary slot."
            , "-25% Swap Speed"
            ]
      , effects =
            [ Special "You can equip a Primary weapon in your Secondary slot."
            , Passive SwapSpeed (RelativeMax 25)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 2
            , index = 20
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 21
      , name = "Spiky Bits"
      , cost = 45
      , totalCost = 1265
      , filename = "11_0_3.jpg"
      , properties =
            [ "+20% Melee Damage"
            , "+10% Damage Resistance while using a Melee weapon"
            , "-15% Ammo Capacity"
            ]
      , effects =
            [ Passive MeleeDamage (RelativeMax 20)
            , While PlayerUsingMeleeWeapon (Passive DamageResistance (RelativeMax 10))
            , Passive AmmoCapacity (RelativeMax -15)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 2
            , index = 21
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 22
      , name = "Silver Bullets"
      , cost = 70
      , totalCost = 1335
      , filename = "7_1_0.jpg"
      , properties =
            [ "+10% Bullet Damage"
            , "+15% Effective Range"
            ]
      , effects =
            [ Passive BulletDamage (RelativeMax 10)
            , Passive EffectiveRange (RelativeMax 150)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 2
            , index = 22
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 23
      , name = "Steady Aim"
      , cost = 70
      , totalCost = 1410
      , filename = "2_0_4.jpg"
      , properties =
            [ "+80% Aim Speed"
            , "Every 0.75 seconds you Aim Down Sights gives 10% Recoil Control (up to 3 stacks)"
            , "-50% ADS Move Speed"
            ]
      , effects =
            [ Passive AimSpeed (RelativeMax 80)
            , While PlayerAimingDownSights (Special "Every 0.75 seconds gives 10% Recoil Control (up to 3 stacks)")
            , Passive AimingDownSightsMoveSpeed (RelativeMax -50)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 2
            , index = 23
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 24
      , name = "Admin Reload"
      , cost = 100
      , totalCost = 1515
      , filename = "15_0_2.jpg"
      , properties =
            [ "When you stow your weapon, it reloads."
            , "-15% Ammo Capacity"
            ]
      , effects =
            [ Triggered OnWeaponChanged (Special "Weapon reloads")
            , Passive AmmoCapacity (RelativeMax -15)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 2
            , index = 24
            }
      , kind = "Offense"
      , affinity = "Fortune"
      }
    , { id = 25
      , name = "Money Grubbers"
      , cost = 70
      , totalCost = 1585
      , filename = "15_1_4.jpg"
      , properties =
            [ "Each time your team loots Copper, you gain 3 additional Copper, stacking up to 75 additional ??opper."
            ]
      , effects =
            [ Triggered OnLootCopper (Special "You gain 3 additional Copper, stacking up to 75 additional ??opper")
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 2
            , index = 25
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    , { id = 26
      , name = "Surplus Pouches"
      , cost = 70
      , totalCost = 1660
      , filename = "14_1_1.jpg"
      , properties =
            [ "-10% Health"
            , "TEAM EFFECTS +1 Team Offensive Inventory"
            ]
      , effects =
            [ Passive Health (RelativeMax -10)
            , Team (Passive OffensiveAccessoryCount (AbsoluteMax 1))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 2
            , index = 26
            }
      , kind = "Offense"
      , affinity = "Fortune"
      }
    , { id = 27
      , name = "Weapon Scavenger"
      , cost = 70
      , totalCost = 1740
      , filename = "10_0_1.jpg"
      , properties =
            [ "You can sense nearby weapons."
            , "More weapons spawn."
            ]
      , effects =
            [ Special "You can sense nearby weapons."
            , Special "More weapons spawn."
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 2
            , index = 27
            }
      , kind = "Utility"
      , affinity = "Discipline"
      }
    , { id = 28
      , name = "Vanguard"
      , cost = 100
      , totalCost = 1840
      , filename = "8_1_1.jpg"
      , properties =
            [ "Melee kills grant 1 Temporary Health to you and nearby teammates."
            ]
      , effects =
            [ Triggered OnMeleeKill (Once TemporaryHealth (AbsoluteCurrent 1))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 2
            , index = 28
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 29
      , name = "Quick Kill"
      , cost = 70
      , totalCost = 1915
      , filename = "6_1_4.jpg"
      , properties =
            [ "+50% Accuracy"
            , "DISABLES: Aim Down Sights"
            ]
      , effects =
            [ Passive Accuracy (RelativeMax 50)
            , Disables AimingDownSights
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 2
            , index = 29
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 30
      , name = "Chemical courage"
      , cost = 70
      , totalCost = 1990
      , filename = "13_1_4.jpg"
      , properties =
            [ "Pain Meds you apply also grant +25% Damage for 60 seconds."
            ]
      , effects =
            [ Triggered OnTakingPainMeds (Timed (ForSeconds 60) (Passive Damage (RelativeMax 25)))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 3
            , index = 30
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 31
      , name = "Power reload"
      , cost = 150
      , totalCost = 2145
      , filename = "10_0_4.jpg"
      , properties =
            [ "Reloading a gun within 1 second of reaching low ammo will increase its magazine size by -30% until the next reload."
            ]
      , effects =
            [ Special "Reloading a gun within 1 seconds of reaching low ammo will increase its magazine size by -30% until the next reload."
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 3
            , index = 31
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 32
      , name = "Hunker down"
      , cost = 100
      , totalCost = 2250
      , filename = "8_0_4.jpg"
      , properties =
            [ "While crouching, gain 10% Damage Resistance and 40% ????curacy."
            ]
      , effects =
            [ While PlayerCrouching (Twin (Passive DamageResistance (RelativeMax 10)) (Passive Accuracy (RelativeMax 40)))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 3
            , index = 32
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 33
      , name = "Glass Cannon"
      , cost = 150
      , totalCost = 2400
      , filename = "4_1_3.jpg"
      , properties =
            [ "+25% Damage"
            , "-30% Health"
            ]
      , effects =
            [ Passive Damage (RelativeMax 25)
            , Passive Health (RelativeMax -30)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 3
            , index = 33
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 34
      , name = "Marked for Death"
      , cost = 150
      , totalCost = 2550
      , filename = "10_1_0.jpg"
      , properties =
            [ "Mutations you ping are highlighted and your team deals 10% increased damage to highlighted enemies."
            ]
      , effects =
            [ Special "Mutations you ping are highlighted and your team deals 10% increased damage to highlighted enemies."
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 3
            , index = 34
            }
      , kind = "Utility"
      , affinity = "Discipline"
      }
    , { id = 35
      , name = "Highwayman"
      , cost = 100
      , totalCost = 2655
      , filename = "15_0_1.jpg"
      , properties =
            [ "Pistol kills have a 3% chance to spawn ammo or a molotov or a molotov."
            ]
      , effects =
            [ While PlayerUsingPistol (RelativeChance 3 (Special "spawn ammo"))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 3
            , index = 35
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    , { id = 36
      , name = "Ignore the Pain"
      , cost = 100
      , totalCost = 2760
      , filename = "12_0_3.jpg"
      , properties =
            [ "+20% Melee Damage against Mutations"
            , "When you deal Melee damage to a Mutation heal 1 Health and recover 3 Stamina."
            ]
      , effects =
            [ Passive MeleeDamageAgainstMutation (RelativeMax 20)
            , Triggered (OnDealingMeleeDamageTo Mutation) (Twin (Once Health (AbsoluteCurrent 1)) (Once Stamina (AbsoluteCurrent 3)))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 3
            , index = 36
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 37
      , name = "Bomb Squad"
      , cost = 100
      , totalCost = 2865
      , filename = "12_1_2.jpg"
      , properties =
            [ "+100% Explosive Damage"
            , "+35% Explosive Resistance"
            ]
      , effects =
            [ Passive ExplosiveDamage (RelativeMax 100)
            , Passive ExplosiveResistance (RelativeMax 35)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 3
            , index = 37
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 38
      , name = "Face your Fears"
      , cost = 100
      , totalCost = 2965
      , filename = "13_0_1.jpg"
      , properties =
            [ "Gain 2 Temporary Health whenever you kill a Ridden within 2 meters."
            ]
      , effects =
            --[ InDistance 2 (Triggered (OnKill Ridden) (Once TemporaryHealth (AbsoluteCurrent 2)))
            [ Triggered (OnKill Ridden) (InDistance 2 (Once TemporaryHealth (AbsoluteCurrent 2)))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 3
            , index = 38
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 39
      , name = "Needs of the Many"
      , cost = 100
      , totalCost = 3065
      , filename = "8_1_4.jpg"
      , properties =
            [ "-10% Health"
            , "TEAM EFFECTS +1 Team Extra Life"
            ]
      , effects =
            [ Passive Health (RelativeMax -10)
            , Team (Passive Lifes (AbsoluteMax 1))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 3
            , index = 39
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 40
      , name = "Trigger Control"
      , cost = 100
      , totalCost = 3170
      , filename = "8_1_3.jpg"
      , properties =
            [ "+25% Accuracy with Assault Rifles"
            , "+25% Accuracy with Sniper Rifles"
            ]
      , effects =
            [ While PlayerUsingRifle (Passive Accuracy (RelativeMax 25))
            , While PlayerUsingSniper (Passive Accuracy (RelativeMax 25))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 3
            , index = 40
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 41
      , name = "Improvised Explosives"
      , cost = 70
      , totalCost = 3250
      , filename = "12_0_0.jpg"
      , properties =
            [ "+75% Accessory Damage"
            , "-25% Swap Speed"
            ]
      , effects =
            [ Passive AccessoryDamage (RelativeMax 75)
            , Passive SwapSpeed (RelativeMax -25)
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 3
            , index = 41
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 42
      , name = "Killer's Instinct"
      , cost = 70
      , totalCost = 3325
      , filename = "5_1_4.jpg"
      , properties =
            [ "+30% Weakspot Damage"
            , "DISABLES: Aim Down Sights"
            ]
      , effects =
            [ Passive WeakspotDamage (RelativeMax 30)
            , Disables AimingDownSights
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Fort Hope"
            , tier = 3
            , index = 42
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 43
      , name = "In the Zone"
      , cost = 100
      , totalCost = 3435
      , filename = "8_1_2.jpg"
      , properties =
            [ "Precision Kills grant 5% Reload Speed for 5 seconds (stacking up to 10 times)."
            ]
      , effects =
            [ Triggered OnPrecisionKill (Special "5% Reload Speed for 5 seconds (stacking up to 10 times")
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 4
            , index = 43
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 44
      , name = "Controlled Movement"
      , cost = 100
      , totalCost = 3540
      , filename = "9_0_3.jpg"
      , properties =
            [ "+40% Move Speed while aiming down sights with Sniper Rifles."
            ]
      , effects =
            [ While PlayerAimingDownSights (While PlayerUsingSniper (Passive MoveSpeed (RelativeMax 40)))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 4
            , index = 44
            }
      , kind = "Mobility"
      , affinity = "Discipline"
      }
    , { id = 45
      , name = "Scattergun Skills"
      , cost = 100
      , totalCost = 3640
      , filename = "9_0_2.jpg"
      , properties =
            [ "+40% Reload Speed with Shotguns."
            ]
      , effects =
            [ While PlayerUsingShotgun (Passive ReloadSpeed (RelativeMax 40))
            ]
      , supplyLine =
            { track = "Alley"
            , name = "Paul's Alley"
            , tier = 4
            , index = 45
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 46
      , name = "Share the Wealth"
      , cost = 100
      , totalCost = 3785
      , filename = "16_0_2.jpg"
      , properties =
            [ "Each teammate gains 100 bonus Copper at the start of each level."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Alley"
            , name = "The Stilts"
            , tier = 4
            , index = 46
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    , { id = 47
      , name = "Motorcycle Jacket"
      , cost = 30
      , totalCost = 30
      , filename = "7_0_0.jpg"
      , properties =
            [ "+5% Damage Resistance"
            , "+5 Health"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 1
            , index = 1
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 48
      , name = "Durable"
      , cost = 30
      , totalCost = 60
      , filename = "11_1_0.jpg"
      , properties =
            [ "+15% Trauma Resistance"
            , "+5 Health"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 1
            , index = 2
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 49
      , name = "Poultice"
      , cost = 70
      , totalCost = 130
      , filename = "9_1_1.jpg"
      , properties =
            [ "When you use a Medical Accessory, the target heals for an additional 20 Health over 30 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 1
            , index = 3
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 50
      , name = "EMT Bag"
      , cost = 45
      , totalCost = 185
      , filename = "7_1_2.jpg"
      , properties =
            [ "+40% Healing Efficiency"
            , "-20% Stamina Efficiency"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 1
            , index = 4
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 51
      , name = "Inspiring Sacrifice"
      , cost = 100
      , totalCost = 285
      , filename = "8_0_2.jpg"
      , properties =
            [ "TEAM EFFECTS When you or a teammate becomes incapacitated, all teammates heal for 20 health over 15 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 1
            , index = 5
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 52
      , name = "Padded Suit"
      , cost = 45
      , totalCost = 335
      , filename = "7_0_1.jpg"
      , properties =
            [ "+10% Damage Resistance"
            , "+5 Health"
            , "-20% Stamina Efficiency"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 1
            , index = 6
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 53
      , name = "Hydration Pack"
      , cost = 45
      , totalCost = 385
      , filename = "11_0_0.jpg"
      , properties =
            [ "+25 Health"
            , "-15% Ammo Capacity"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 1
            , index = 7
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 54
      , name = "Buckshot Bruiser"
      , cost = 75
      , totalCost = 460
      , filename = "14_0_2.jpg"
      , properties =
            [ "When using Shotguns, gain 0.25 Temporary Health for each pellet that hits."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 1
            , index = 12
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 55
      , name = "Support Scavenger"
      , cost = 100
      , totalCost = 560
      , filename = "10_0_0.jpg"
      , properties =
            [ "You can sense nearby Support Accessories."
            , "More Support Accessories spawn."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 1
            , index = 13
            }
      , kind = "Utility"
      , affinity = "Discipline"
      }
    , { id = 56
      , name = "Fanny Pack"
      , cost = 30
      , totalCost = 595
      , filename = "14_1_2.jpg"
      , properties =
            [ "+1 Support Inventory"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 1
            , index = 14
            }
      , kind = "Defense"
      , affinity = "Fortune"
      }
    , { id = 57
      , name = "Slugger"
      , cost = 30
      , totalCost = 630
      , filename = "1_1_1.jpg"
      , properties =
            [ "+5 Health"
            , "+10% Melee Stamina Efficiency"
            , "+20% Melee Attack Speed"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "Grant's Brew House"
            , tier = 1
            , index = 15
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 58
      , name = "Smelling Salts"
      , cost = 30
      , totalCost = 660
      , filename = "2_1_3.jpg"
      , properties =
            [ "+100% Revive Speed"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "Grant's Brew House"
            , tier = 1
            , index = 16
            }
      , kind = "Utility"
      , affinity = "Reflex"
      }
    , { id = 59
      , name = "Body Armor"
      , cost = 45
      , totalCost = 705
      , filename = "11_1_1.jpg"
      , properties =
            [ "+25% Trauma Resistance"
            , "-15% Ammo Capacity"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "Grant's Brew House"
            , tier = 1
            , index = 17
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 60
      , name = "Scar Tissue"
      , cost = 100
      , totalCost = 810
      , filename = "12_1_3.jpg"
      , properties =
            [ "Take 1 less damage from all Ridden."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "Grant's Brew House"
            , tier = 1
            , index = 18
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 61
      , name = "Fresh Bandage"
      , cost = 70
      , totalCost = 980
      , filename = "13_1_1.jpg"
      , properties =
            [ "Heal 15 Trauma Damage at the start of each level."
            ]
      , effects =
            [ Once TraumaDamage (AbsoluteCurrent -15)
            ]
      , supplyLine =
            { track = "Clinic"
            , name = "Grant's Brew House"
            , tier = 1
            , index = 19
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 62
      , name = "Shoulder Bag"
      , cost = 45
      , totalCost = 1030
      , filename = "14_1_3.jpg"
      , properties =
            [ "+2 Support Inventory"
            , "-10% Damage Dealt"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 2
            , index = 20
            }
      , kind = "Defense"
      , affinity = "Fortune"
      }
    , { id = 63
      , name = "Pep Talk"
      , cost = 45
      , totalCost = 1075
      , filename = "2_1_4.jpg"
      , properties =
            [ "While reviving teammates, take 3 less damage from all Ridden."
            , "Heals teammates for an additional 10 Health when you revive them."
            ]
      , effects =
            [ Special "While reviving teammates, take 3 less damage from all Ridden."
            , Special "Heals teammates for an additional 10 Health when you revive them."
            ]
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 2
            , index = 21
            }
      , kind = "Utility"
      , affinity = "Reflex"
      }
    , { id = 64
      , name = "Well Fed"
      , cost = 100
      , totalCost = 1185
      , filename = "13_0_2.jpg"
      , properties =
            [ "TEAM EFFECTS +10 Team Health"
            ]
      , effects =
            [ Team (Passive Health (AbsoluteMax 10))
            ]
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 2
            , index = 22
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 65
      , name = "Charitable Soul"
      , cost = 100
      , totalCost = 1290
      , filename = "8_0_3.jpg"
      , properties =
            [ "Healing a teammate also applies 50% of the effect to you."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 2
            , index = 23
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 66
      , name = "Amped Up"
      , cost = 45
      , totalCost = 1345
      , filename = "10_0_2.jpg"
      , properties =
            [ "When you exit a starting saferoom, your team gains 50 Temporary Health."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 2
            , index = 24
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 67
      , name = "Motorcycle Helmet"
      , cost = 70
      , totalCost = 1415
      , filename = "7_0_2.jpg"
      , properties =
            [ "+15% Damage Resistance"
            , "+10 Health"
            , "DISABLES: Aim Down Sights"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 2
            , index = 25
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 68
      , name = "Broadside"
      , cost = 100
      , totalCost = 1515
      , filename = "14_0_1.jpg"
      , properties =
            [ "Precision Kills have a 20% chance to cause Ridden to explode, dealing 15 damage to other Ridden within 4 meters."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 2
            , index = 26
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 69
      , name = "Combat Medic"
      , cost = 100
      , totalCost = 1620
      , filename = "3_1_3.jpg"
      , properties =
            [ "+50% Use Speed"
            , "Heals teammates for an additional 20 Health when you revive them."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 2
            , index = 27
            }
      , kind = "Defense"
      , affinity = "Reflex"
      }
    , { id = 70
      , name = "Box O` Bags"
      , cost = 70
      , totalCost = 1700
      , filename = "14_1_4.jpg"
      , properties =
            [ "-10% Health"
            , "TEAM EFFECTS +1 Team Support Inventory"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "Grant's Brew House"
            , tier = 2
            , index = 28
            }
      , kind = "Defense"
      , affinity = "Fortune"
      }
    , { id = 71
      , name = "Canned Goods"
      , cost = 70
      , totalCost = 1780
      , filename = "11_0_1.jpg"
      , properties =
            [ "+40 Health"
            , "-30% Stamina"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "Grant's Brew House"
            , tier = 2
            , index = 29
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 72
      , name = "Wooden Armor"
      , cost = 70
      , totalCost = 1855
      , filename = "11_1_2.jpg"
      , properties =
            [ "+40% Trauma Resistance"
            , "-100% Fire Resistance"
            , "-100% Acid Resistance"
            ]
      , effects =
            [ Passive TraumaResistance (RelativeMax 40)
            , Passive FireResistance (RelativeMax -100)
            , Passive AcidResistance (RelativeMax -100)
            ]
      , supplyLine =
            { track = "Clinic"
            , name = "Grant's Brew House"
            , tier = 2
            , index = 30
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 73
      , name = "Group Therapy"
      , cost = 70
      , totalCost = 1930
      , filename = "9_1_2.jpg"
      , properties =
            [ "When you use a Medical Accessory, all teammates heal for 8 Health."
            ]
      , effects =
            [ Team (While PlayerUsingMedicalAccessory (Passive Health (AbsoluteCurrent 8)))
            ]
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 3
            , index = 31
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 74
      , name = "Sunder"
      , cost = 150
      , totalCost = 2085
      , filename = "13_0_4.jpg"
      , properties =
            [ "Melee hits cause the target to take 20% increased damage for 5 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 3
            , index = 32
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 75
      , name = "Numb"
      , cost = 45
      , totalCost = 2140
      , filename = "14_0_0.jpg"
      , properties =
            [ "Gain +15% Damage Resistance while you have Temporary Health."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 3
            , index = 33
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 76
      , name = "Life Insurance"
      , cost = 100
      , totalCost = 2240
      , filename = "15_1_0.jpg"
      , properties =
            [ "+1 Extra Life"
            , "+15% Reduced Incap Trauma"
            ]
      , effects =
            [ Once Lifes (AbsoluteCurrent 1)
            , Passive TraumaResistance (RelativeMax 15)
            ]
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 3
            , index = 34
            }
      , kind = "Defense"
      , affinity = "Fortune"
      }
    , { id = 77
      , name = "Overwatch"
      , cost = 100
      , totalCost = 2345
      , filename = "13_1_0.jpg"
      , properties =
            [ "Kills from greater than 15 meters grant 5 Temporary Health to teammates within 10 meters of the target."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 3
            , index = 35
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 78
      , name = "True Grit"
      , cost = 100
      , totalCost = 2450
      , filename = "12_1_0.jpg"
      , properties =
            [ "When you take a single hit for 15 or more damage, heal 10 health over 5 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 3
            , index = 36
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 79
      , name = "Pyro"
      , cost = 100
      , totalCost = 2555
      , filename = "12_1_1.jpg"
      , properties =
            [ "+100% Fire damage."
            , "Kills with fire grant you Temporary Health."
            , "You can sense flammable objects nearby."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 3
            , index = 37
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 80
      , name = "Heavy Hitter"
      , cost = 100
      , totalCost = 2655
      , filename = "12_0_2.jpg"
      , properties =
            [ "Melee hits against Weakspots deal +20 additional Stumble Damage."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Furnace"
            , tier = 3
            , index = 38
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 81
      , name = "Line 'em Up"
      , cost = 100
      , totalCost = 2765
      , filename = "13_0_0.jpg"
      , properties =
            [ "+10% Effective Bullet Range"
            , "+15% Recoil Control"
            , "+25% Bullet Penetration"
            , "+25% Aim Speed"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "Grant's Brew House"
            , tier = 3
            , index = 39
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 82
      , name = "Rousing Speech"
      , cost = 70
      , totalCost = 2850
      , filename = "3_0_0.jpg"
      , properties =
            [ "+225% Revive Speed"
            , "DISABLES: Offensive Accessories"
            , "TEAM EFFECTS +20% Reduced Incap Trauma"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "Grant's Brew House"
            , tier = 3
            , index = 40
            }
      , kind = "Utility"
      , affinity = "Reflex"
      }
    , { id = 83
      , name = "Medical Expert"
      , cost = 100
      , totalCost = 2960
      , filename = "4_0_0.jpg"
      , properties =
            [ "+15% Healing Efficiency"
            , "When you use a Medical Accessory, you gain 15% Move Speed for 15 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 4
            , index = 41
            }
      , kind = "Defense"
      , affinity = "Reflex"
      }
    , { id = 84
      , name = "Experienced EMT"
      , cost = 75
      , totalCost = 3040
      , filename = "10_1_3.jpg"
      , properties =
            [ "When you use a Medical Accessory, the target gains +10% Maximum Health, Stamina, and Stamina Regen until the end of the level."
            ]
      , effects =
            [ Special "When you use a Medical Accessory, the target gains +10% Maximum Health, Stamina, and Stamina Regen until the end of the level."
            ]
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 4
            , index = 42
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 85
      , name = "Saferoom Recovery"
      , cost = 75
      , totalCost = 3115
      , filename = "16_1_0.jpg"
      , properties =
            [ "Your team heals 15 Health, 7 Trauma Damage and refills 10% Ammo at the start of each level."
            ]
      , effects =
            [ Once Health (AbsoluteCurrent 15)
            , Once TraumaDamage (AbsoluteCurrent 7)
            , Once AmmoRefill (RelativeMax 10)
            ]
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 4
            , index = 43
            }
      , kind = "Defense"
      , affinity = "Fortune"
      }
    , { id = 86
      , name = "Medical Professional"
      , cost = 100
      , totalCost = 3215
      , filename = "9_1_3.jpg"
      , properties =
            [ "First Aids and Defibrillators also recover 15 Trauma Damage and 1 Extra Life."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 4
            , index = 44
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 87
      , name = "Miraculous Recovery"
      , cost = 150
      , totalCost = 3370
      , filename = "5_0_2.jpg"
      , properties =
            [ "When you use a Medical Accessory, it has a 25% chance to have 100% increased effect."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Clinic"
            , name = "The Clinic"
            , tier = 4
            , index = 45
            }
      , kind = "Defense"
      , affinity = "Reflex"
      }
    , { id = 88
      , name = "Cross Trainers"
      , cost = 10
      , totalCost = 10
      , filename = "1_0_0.jpg"
      , properties =
            [ "+20% Stamina"
            , "+20% Stamina Regen"
            , "+3% Move Speed"
            , "+5 Health"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 1
            , index = 1
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 89
      , name = "Ridden Slayer"
      , cost = 30
      , totalCost = 40
      , filename = "1_1_4.jpg"
      , properties =
            [ "+20% Weakspot Damage"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 1
            , index = 2
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 90
      , name = "Shooting Gloves"
      , cost = 30
      , totalCost = 75
      , filename = "2_1_0.jpg"
      , properties =
            [ "+25% Weapon Swap Speed"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 1
            , index = 3
            }
      , kind = "Utility"
      , affinity = "Reflex"
      }
    , { id = 91
      , name = "Superior Cardio"
      , cost = 30
      , totalCost = 110
      , filename = "3_0_4.jpg"
      , properties =
            [ "+20% Stamina"
            , "+20% Sprint Efficiency"
            , "+5 Health"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 1
            , index = 4
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 92
      , name = "Evasive Action"
      , cost = 70
      , totalCost = 180
      , filename = "5_0_0.jpg"
      , properties =
            [ "When you take a hit for 10 or more damage, gain 15% Move Speed for 3 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 1
            , index = 5
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 93
      , name = "Run and Gun"
      , cost = 150
      , totalCost = 330
      , filename = "16_0_0.jpg"
      , properties =
            [ "You can shoot while sprinting."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 1
            , index = 6
            }
      , kind = "Mobility"
      , affinity = "Fortune"
      }
    , { id = 94
      , name = "Screwdriver"
      , cost = 30
      , totalCost = 360
      , filename = "5_0_3.jpg"
      , properties =
            [ "+50% Use Speed"
            , "+10% Stamina"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 1
            , index = 7
            }
      , kind = "Utility"
      , affinity = "Reflex"
      }
    , { id = 95
      , name = "Energy Bar"
      , cost = 30
      , totalCost = 395
      , filename = "7_1_4.jpg"
      , properties =
            [ "+30% Stamina Regeneration"
            , "+5 Health"
            ]
      , effects =
            [ Passive StaminaRegeneration (RelativeMax 30)
            , Passive Health (AbsoluteMax 5)
            ]
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 1
            , index = 8
            }
      , kind = "Mobility"
      , affinity = "Discipline"
      }
    , { id = 96
      , name = "Utility Scavenger"
      , cost = 100
      , totalCost = 500
      , filename = "5_1_1.jpg"
      , properties =
            [ "You can sense nearby Quick Accessories."
            , "More Quick Accessories spawn."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 1
            , index = 9
            }
      , kind = "Utility"
      , affinity = "Reflex"
      }
    , { id = 97
      , name = "Dash"
      , cost = 30
      , totalCost = 535
      , filename = "3_0_1.jpg"
      , properties =
            [ "+5% Move Speed"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 1
            , index = 10
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 98
      , name = "Rolling Thunder"
      , cost = 100
      , totalCost = 640
      , filename = "4_0_1.jpg"
      , properties =
            [ "+35% Move Speed while firing with Shotguns."
            , "+10% Damage with Shotguns."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 1
            , index = 11
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 99
      , name = "Reckless Strategy"
      , cost = 45
      , totalCost = 685
      , filename = "2_0_0.jpg"
      , properties =
            [ "+30% Weakspot Damage"
            , "-5% Damage Resistance"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 1
            , index = 12
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 100
      , name = "Breakout"
      , cost = 100
      , totalCost = 785
      , filename = "3_1_2.jpg"
      , properties =
            [ "Breakout: Hold E to free yourself from Grabs."
            , "+50% Breakout Cooldown Reduction. (Base 60 seconds)."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 1
            , index = 13
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 101
      , name = "Fleet of Foot"
      , cost = 45
      , totalCost = 835
      , filename = "3_0_2.jpg"
      , properties =
            [ "+8% Move Speed"
            , "-7% Damage Resistance"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 1
            , index = 14
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 102
      , name = "Pep In Your Step"
      , cost = 70
      , totalCost = 910
      , filename = "4_1_1.jpg"
      , properties =
            [ "Precision Kills grant you 8% Move Speed for 5 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 1
            , index = 15
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 103
      , name = "Guns Out"
      , cost = 45
      , totalCost = 960
      , filename = "2_1_1.jpg"
      , properties =
            [ "+50% Weapon Swap Speed"
            , "-5% Damage Resistance"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 2
            , index = 16
            }
      , kind = "Utility"
      , affinity = "Reflex"
      }
    , { id = 104
      , name = "Tunnel Vision"
      , cost = 45
      , totalCost = 1010
      , filename = "2_0_3.jpg"
      , properties =
            [ "+50% Aim Speed"
            , "-5% Damage Resistance"
            , "Every 0.75 seconds you Aim Down Sights gives 5% Weakspot Damage (up to 3 stacks)."
            ]
      , effects =
            [ Passive AimSpeed (RelativeMax 50)
            , Passive DamageResistance (RelativeMax -5)
            , While PlayerAimingDownSights (Special "Every 0.75 seconds gives 5% Weakspot Damage (up to 3 stacks).")
            ]
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 2
            , index = 17
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 105
      , name = "Energy Drink"
      , cost = 45
      , totalCost = 1055
      , filename = "1_0_1.jpg"
      , properties =
            [ "+15% Stamina"
            , "+25% Weapon Swap Speed"
            , "+15% Move Speed while firing"
            , "+10% Slow Resistance"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 2
            , index = 18
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 106
      , name = "Marathon Runner"
      , cost = 100
      , totalCost = 1160
      , filename = "4_0_4.jpg"
      , properties =
            [ "No Movement Penalty for strafe and backpedal."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 2
            , index = 19
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 107
      , name = "Brazen"
      , cost = 45
      , totalCost = 1215
      , filename = "1_1_2.jpg"
      , properties =
            [ "+20% Melee Stamina Efficiency"
            , "+30% Melee Attack Speed"
            , "-5% Damage Resistance"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 2
            , index = 20
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 108
      , name = "Sadistic"
      , cost = 100
      , totalCost = 1315
      , filename = "4_1_4.jpg"
      , properties =
            [ "Gain 5% Weakspot Damage for each Precision Kill in the last 10 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 2
            , index = 21
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 109
      , name = "Olympic Sprinter"
      , cost = 45
      , totalCost = 1365
      , filename = "3_1_0.jpg"
      , properties =
            [ "+30% Sprint Efficiency"
            , "-7% Damage Resistance"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 2
            , index = 22
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 110
      , name = "Ammo Stash"
      , cost = 100
      , totalCost = 1470
      , filename = "15_0_4.jpg"
      , properties =
            [ "Your secondary weapons have unlimited ammo."
            , "Your secondary weapons reload -20% slower."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 2
            , index = 23
            }
      , kind = "Offense"
      , affinity = "Fortune"
      }
    , { id = 111
      , name = "Compound Interest"
      , cost = 100
      , totalCost = 1570
      , filename = "15_1_2.jpg"
      , properties =
            [ "Gain 10% of your total Copper in each Saferoom."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 2
            , index = 24
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    , { id = 112
      , name = "Cocky"
      , cost = 70
      , totalCost = 1645
      , filename = "2_1_2.jpg"
      , properties =
            [ "+75% Weapon Swap Speed"
            , "When you take damage, your Accuracy is reduced by 20% for 3 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 2
            , index = 25
            }
      , kind = "Utility"
      , affinity = "Reflex"
      }
    , { id = 113
      , name = "Mandatory PT"
      , cost = 100
      , totalCost = 1750
      , filename = "4_1_0.jpg"
      , properties =
            [ "TEAM EFFECTS +15% Team Stamina"
            ]
      , effects =
            [ Team (Passive Stamina (RelativeMax 15))
            ]
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 2
            , index = 26
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 114
      , name = "Mugger"
      , cost = 100
      , totalCost = 1855
      , filename = "15_0_0.jpg"
      , properties =
            [ "Melee kills have a 3% chance to spawn ammo or razorwire."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 2
            , index = 27
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    , { id = 115
      , name = "Mean Drunk"
      , cost = 70
      , totalCost = 1925
      , filename = "11_0_4.jpg"
      , properties =
            [ "+60% Melee Damage"
            , "Your Melee Attacks cause cleave through enemies dealing damage in a large area."
            , "DISABLES: Sprint"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 2
            , index = 28
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 116
      , name = "Multitool"
      , cost = 45
      , totalCost = 1970
      , filename = "5_0_4.jpg"
      , properties =
            [ "+75% Use Speed"
            , "-5% Damage Resistance"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 2
            , index = 29
            }
      , kind = "Utility"
      , affinity = "Reflex"
      }
    , { id = 117
      , name = "Stimulants"
      , cost = 45
      , totalCost = 2025
      , filename = "5_1_2.jpg"
      , properties =
            [ "Pain Meds you apply also grant +20% Stamina Regeneration, + 15% Reload Speed, and + 15% Weapon Swap Speed for 30 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 3
            , index = 30
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 118
      , name = "Meth Head"
      , cost = 70
      , totalCost = 2095
      , filename = "1_1_3.jpg"
      , properties =
            [ "+40% Melee Attack Speed"
            , "+30% Melee Stamina Efficiency"
            , "Your Melee Attacks no longer stick in tough enemies."
            , "DISABLES: Aim Down Sights"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 3
            , index = 31
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 119
      , name = "Shredder"
      , cost = 150
      , totalCost = 2250
      , filename = "4_1_2.jpg"
      , properties =
            [ "Each bullet hit causes the target to take 1% increased damage for 3 seconds (stacks up to 15% )."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 3
            , index = 32
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 120
      , name = "Reckless"
      , cost = 70
      , totalCost = 2335
      , filename = "3_1_1.jpg"
      , properties =
            [ "+40% Sprint Efficiency"
            , "When you take damage while Sprinting, you lose all Stamina."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 3
            , index = 33
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 121
      , name = "Run Like Hell"
      , cost = 70
      , totalCost = 2405
      , filename = "3_0_3.jpg"
      , properties =
            [ "+12% Move Speed"
            , "When you take damage, your Move Speed bonus is lost for 3 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 3
            , index = 34
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 122
      , name = "Power Swap"
      , cost = 150
      , totalCost = 2555
      , filename = "6_0_0.jpg"
      , properties =
            [ "Changing weapons within 1 second of reaching low ammo grants +20% Damage for 5 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 3
            , index = 35
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 123
      , name = "Rhythmic Breathing"
      , cost = 70
      , totalCost = 2625
      , filename = "1_0_2.jpg"
      , properties =
            [ "+40% Stamina"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 3
            , index = 36
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 124
      , name = "On your Mark..."
      , cost = 45
      , totalCost = 670
      , filename = "5_1_3.jpg"
      , properties =
            [ "When you exit a starting saferoom your team gains +15% Move Speed for 30 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 3
            , index = 37
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 125
      , name = "Fire in the Hole!"
      , cost = 100
      , totalCost = 770
      , filename = "3_1_4.jpg"
      , properties =
            [ "When you throw an Offensive Accessory, gain 20 Temporary Health and 20% Move Speed for 5 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 3
            , index = 38
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 126
      , name = "Headband Magnifier"
      , cost = 70
      , totalCost = 2840
      , filename = "5_1_0.jpg"
      , properties =
            [ "+125% Use Speed"
            , "When you take damage, you have a chance to be blinded for 1 second."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 3
            , index = 39
            }
      , kind = "Utility"
      , affinity = "Reflex"
      }
    , { id = 127
      , name = "Cold Brew Coffee"
      , cost = 70
      , totalCost = 2925
      , filename = "8_0_0.jpg"
      , properties =
            [ "+25% Aim Speed"
            , "+25% Weapon Swap Speed"
            , "+25% Use Speed"
            , "+15% Reload Speed"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 3
            , index = 40
            }
      , kind = "Mobility"
      , affinity = "Discipline"
      }
    , { id = 128
      , name = "Hyper-Focused"
      , cost = 70
      , totalCost = 2995
      , filename = "2_0_1.jpg"
      , properties =
            [ "+50% Weakspot Damage"
            , "-40% Move Speed while shooting or melee attacking."
            ]
      , effects =
            [ Passive WeakspotDamage (RelativeMax 50)
            , While PlayerAttacking (Passive MoveSpeed (RelativeMax -40))
            ]
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 3
            , index = 41
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 129
      , name = "Knowledge is Power"
      , cost = 100
      , totalCost = 3100
      , filename = "10_1_1.jpg"
      , properties =
            [ "+10% Weakspo?? Damage"
            , "Allows players to see values for damage they deal and enemy health bars."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Knuckle House"
            , tier = 3
            , index = 42
            }
      , kind = "Utility"
      , affinity = "Discipline"
      }
    , { id = 130
      , name = "Bounty Hunter"
      , cost = 100
      , totalCost = 3205
      , filename = "15_0_3.jpg"
      , properties =
            [ "When you kill a Mutation, gain 10 Copper (up to 300 per level)."
            ]
      , effects =
            [ Triggered (OnKill Mutation) (Passive Copper (AbsoluteCurrent 10))
            ]
      , supplyLine =
            { track = "Nest"
            , name = "Crow's Nest"
            , tier = 4
            , index = 43
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    , { id = 131
      , name = "Speed Demon"
      , cost = 100
      , totalCost = 3310
      , filename = "4_0_2.jpg"
      , properties =
            [ "+4% Move Speed while using an SMG."
            , "+35% Reload Speed while using an SMG."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Crow's Nest"
            , tier = 4
            , index = 44
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 132
      , name = "Natural Sprinter"
      , cost = 70
      , totalCost = 3380
      , filename = "8_0_1.jpg"
      , properties =
            [ "+100% Stamina Regeneration"
            , "-50% Maximum Stamina"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Crow's Nest"
            , tier = 4
            , index = 45
            }
      , kind = "Mobility"
      , affinity = "Discipline"
      }
    , { id = 133
      , name = "Hellfire"
      , cost = 100
      , totalCost = 3550
      , filename = "4_0_3.jpg"
      , properties =
            [ "+45% Move Speed while firing."
            , "+5% Move Speed while not firing."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 4
            , index = 46
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 134
      , name = "Mad Dash"
      , cost = 75
      , totalCost = 4310
      , filename = "6_0_3.jpg"
      , properties =
            [ "+20% Sprint Speed"
            , "-40% Sprint Stamina Efficiency"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "The Crow's Nest"
            , tier = 5
            , index = 47
            }
      , kind = "Mobility"
      , affinity = "Reflex"
      }
    , { id = 135
      , name = "Hazard Pay"
      , cost = 75
      , totalCost = 4740
      , filename = "16_0_4.jpg"
      , properties =
            [ "Gain 250 bonus Copper at the start of each level."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Nest"
            , name = "Bridge Town"
            , tier = 5
            , index = 48
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    , { id = 136
      , name = "Antibiotic Ointment"
      , cost = 0
      , totalCost = 0
      , filename = "7_1_1.jpg"
      , properties =
            [ "+20% Healing Efficiency"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Starter"
            , name = "Starter Deck"
            , tier = 1
            , index = -1
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 137
      , name = "Battle Lust"
      , cost = 0
      , totalCost = 0
      , filename = "12_1_4.jpg"
      , properties =
            [ "Melee kills heal 2 Health."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Starter"
            , name = "Starter Deck"
            , tier = 1
            , index = -1
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 138
      , name = "Combat Knife"
      , cost = 0
      , totalCost = 0
      , filename = "9_0_0.jpg"
      , properties =
            [ "Turns your Bash into a Knife that counts as a Melee weapon."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Starter"
            , name = "Starter Deck"
            , tier = 1
            , index = -1
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 139
      , name = "Copper Scavenger"
      , cost = 0
      , totalCost = 0
      , filename = "16_0_1.jpg"
      , properties =
            [ "You can sense nearby Copper."
            , "More Copper Piles spawn."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Starter"
            , name = "Starter Deck"
            , tier = 1
            , index = -1
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    , { id = 140
      , name = "Reload Drills"
      , cost = 0
      , totalCost = 0
      , filename = "1_0_3.jpg"
      , properties =
            [ "+20% Reload Speed"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Starter"
            , name = "Starter Deck"
            , tier = 1
            , index = -1
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 141
      , name = "Second Chance"
      , cost = 0
      , totalCost = 0
      , filename = "14_0_3.jpg"
      , properties =
            [ "+1 Extra Life"
            , "+5 Health"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Starter"
            , name = "Starter Deck"
            , tier = 1
            , index = -1
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 142
      , name = "Wounded Animal"
      , cost = 0
      , totalCost = 0
      , filename = "15_1_1.jpg"
      , properties =
            [ "Kills while at Critical Health recover 1 Health."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Starter"
            , name = "Starter Deck"
            , tier = 1
            , index = -1
            }
      , kind = "Defense"
      , affinity = "Fortune"
      }
    , { id = 143
      , name = "Vitamins"
      , cost = 5
      , totalCost = 0
      , filename = "10_1_4.jpg"
      , properties =
            [ "+15 Health"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Strip"
            , name = "The Strip"
            , tier = 1
            , index = 1
            }
      , kind = "Defense"
      , affinity = "Brawn"
      }
    , { id = 144
      , name = "Ammo Pouch"
      , cost = 10
      , totalCost = 0
      , filename = "6_0_4.jpg"
      , properties =
            [ "+25% Ammo ??????acity"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Strip"
            , name = "The Strip"
            , tier = 1
            , index = 2
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 145
      , name = "Heavy Attack"
      , cost = 100
      , totalCost = 145
      , filename = "13_0_3.jpg"
      , properties =
            [ "Charge: Hold with Melee weapons to burst forward. Charge attacks deal 100% increased damage."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Strip"
            , name = "The Strip"
            , tier = 1
            , index = 5
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 146
      , name = "Adrenaline Fueled"
      , cost = 0
      , totalCost = 0
      , filename = "5_0_1.jpg"
      , properties =
            [ "When you kill an enemy, gain 7 Stamina over 7 seconds, stacking up to 5 times."
            ]
      , effects =
            [ Triggered (OnKill AnyEnemy) (OverTime 7 (Passive Stamina (AbsoluteCurrent 7)))
            ]
      , supplyLine =
            { track = "Accomplishment"
            , name = "Brought a Knife to a Gunfight"
            , tier = 1
            , index = -1
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 147
      , name = "Ammo Scavenger"
      , cost = 0
      , totalCost = 0
      , filename = "9_1_4.jpg"
      , properties =
            [ "You can sense nearby Ammo."
            , "More Ammo spawns."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Accomplishment"
            , name = "Ammo Scavenger"
            , tier = 1
            , index = -1
            }
      , kind = "Utility"
      , affinity = "Discipline"
      }
    , { id = 148
      , name = "Berserker"
      , cost = 0
      , totalCost = 0
      , filename = "12_0_4.jpg"
      , properties =
            [ "Gain 10% Melee Damage,10% Melee Speed, and 5% Move Speed for each Melee kill in the last 4 seconds."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Accomplishment"
            , name = "Berserker"
            , tier = 1
            , index = -1
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 149
      , name = "Confident Killer"
      , cost = 0
      , totalCost = 0
      , filename = "12_0_1.jpg"
      , properties =
            [ "When you or your team kills a Mutation gain 1% damage (up to -15%) until the end of the level."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Accomplishment"
            , name = "Smorgasbord"
            , tier = 1
            , index = -1
            }
      , kind = "Offense"
      , affinity = "Brawn"
      }
    , { id = 150
      , name = "Field Surgeon"
      , cost = 0
      , totalCost = 0
      , filename = "7_1_3.jpg"
      , properties =
            [ "+60% Healing Efficiency"
            , "-50% Use Speed"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Accomplishment"
            , name = "Field Surgeon"
            , tier = 1
            , index = -1
            }
      , kind = "Defense"
      , affinity = "Discipline"
      }
    , { id = 151
      , name = "Lucky Pennies"
      , cost = 0
      , totalCost = 0
      , filename = "15_1_3.jpg"
      , properties =
            [ "Whenever you or your team loots Copper, you have a 35% chance to find 35% additional Copper."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Accomplishment"
            , name = "Jukebox Hero"
            , tier = 1
            , index = -1
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    , { id = 152
      , name = "Mag Carrier"
      , cost = 0
      , totalCost = 0
      , filename = "6_0_2.jpg"
      , properties =
            [ "+30% Pistol/SMG Ammo Capacity"
            , "+10% Damage with Pistols and SMGS"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Accomplishment"
            , name = "Mag Carrier"
            , tier = 1
            , index = -1
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 153
      , name = "Meatgrinder"
      , cost = 0
      , totalCost = 0
      , filename = "9_0_1.jpg"
      , properties =
            [ "Gain 30% Move Speed and Accuracy while crouched and using an LMG."
            ]
      , effects =
            []
      , supplyLine =
            { track = "Accomplishment"
            , name = "Meatgrinder"
            , tier = 1
            , index = -1
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 154
      , name = "Shell Carrier"
      , cost = 0
      , totalCost = 0
      , filename = "16_0_3.jpg"
      , properties =
            [ "+30% Shotgun Ammo Capacity"
            , "+10% Damage with Shotguns"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Accomplishment"
            , name = "Shell Carrier"
            , tier = 1
            , index = -1
            }
      , kind = "Offense"
      , affinity = "Fortune"
      }
    , { id = 155
      , name = "Stock Pouch"
      , cost = 0
      , totalCost = 0
      , filename = "6_0_1.jpg"
      , properties =
            [ "+30% Sniper Ammo Capacity"
            , "+10% Damage with Sniper Rifles"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Accomplishment"
            , name = "Stock Pouch"
            , tier = 1
            , index = -1
            }
      , kind = "Offense"
      , affinity = "Reflex"
      }
    , { id = 156
      , name = "Tactical Vest"
      , cost = 0
      , totalCost = 0
      , filename = "10_1_2.jpg"
      , properties =
            [ "+30% Rifle Ammo Capacity"
            , "+10% Damage with Assault Rifles and LMGS"
            ]
      , effects =
            []
      , supplyLine =
            { track = "Accomplishment"
            , name = "Tactical Vest"
            , tier = 1
            , index = -1
            }
      , kind = "Offense"
      , affinity = "Discipline"
      }
    , { id = 157
      , name = "Belt Clip"
      , cost = 50
      , totalCost = -1
      , filename = "16_1_1.jpg"
      , properties =
            [ "+1 Quick Slot Inventory"
            ]
      , effects =
            [ Passive SupportAccessoryCount (AbsoluteMax 1)
            ]
      , supplyLine =
            { track = "Roving Merchants"
            , name = "Liberators"
            , tier = 1
            , index = 1
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    , { id = 158
      , name = "Utility Belt"
      , cost = 75
      , totalCost = -1
      , filename = "16_1_2.jpg"
      , properties =
            [ "+2 Quick Slot Inventory"
            , "-10% Damage Dealt"
            ]
      , effects =
            [ Passive SupportAccessoryCount (AbsoluteMax 1)
            , Passive Damage (RelativeMax -10)
            ]
      , supplyLine =
            { track = "Roving Merchants"
            , name = "Liberators"
            , tier = 1
            , index = 2
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    , { id = 159
      , name = "Tool Belts"
      , cost = 100
      , totalCost = -1
      , filename = "16_1_3.jpg"
      , properties =
            [ "-10% Health"
            , "+1 Team Quick Item Inventory"
            ]
      , effects =
            [ Team (Passive QuickAccessoryCount (AbsoluteMax 1))
            , Passive Health (RelativeMax -10)
            ]
      , supplyLine =
            { track = "Roving Merchants"
            , name = "KSC Convoys"
            , tier = 1
            , index = 2
            }
      , kind = "Utility"
      , affinity = "Fortune"
      }
    ]
